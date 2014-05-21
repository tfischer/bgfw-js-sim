
var createSim = function(params) {
    var m_stats = params.stats;

    var m_unit1, m_unit2;

    /**
     * working units, we adjust these values as we fight the combat.
     */
    //var m_u1, m_u2;

    /**
     * Contains information on the results of fighting each round.
     */
    var m_simData;

    var sim = {};

    var COURAGE_PROBS = [1, 3, 6, 10, 15, 21, 25, 27, 27, 25, 21, 15, 10, 6, 3, 1];

    var logger = params.logger;
    if (!logger) {
        logger = {
            log: function(s) {
                console.log(s);
            }
        };
    }

    sim.reset = function() {
    /*
        m_u1 = $.extend(true, {}, m_unit1);
        m_u2 = $.extend(true, {}, m_unit2);

        m_simData = {
            
            rounds: []
        };
    */
        
    };

    sim.setUnit1 = function(u) { m_unit1 = u; };
    sim.getUnit1 = function() { return m_unit1; }

    sim.setUnit2 = function(u) { m_unit2 = u; };
    sim.getUnit2 = function() { return m_unit2; }

    sim.copy = function(obj) {
        return $.extend(true, {}, obj);
    };

    /**
     * @param statMods {
     *   u1: {
     *     order: charge/hold/...
     *   },
     *   u2: {
     *     // same format as u1
     *   }
     * }
     */
    sim.doFight = function(statMods) {
        return this.fightBattle(m_unit1, m_unit2, statMods);
    }

    /**
     * Fight a battle of N rounds, accumulating the results from each round in the
     * returned result.
     */
    sim.fightBattle = function(unit1, unit2, statMods) {
        var params = {};

        var result = null;
        var finalResult = [];

        var numRounds = statMods.rounds;
        //var numRounds = 20;
        for (var i=0; i<numRounds; ++i) {
            params.statMods = this.getNetStatMods(i, unit1, unit2, statMods);
            params.base = this.calcBase(params.statMods.u1, params.statMods.u2);

            logger.log("base: "+JSON.stringify(params.base, null, 2));

            result = this.nextRound(result, unit1, unit2, params);

            finalResult.push({round: i+1, result: result});
            logger.log("================== round "+(i+1)+" ====================");
            logger.log(JSON.stringify(result, null, 2));
            logger.log("on1 total: "+this.getTotal(result.on1));
            logger.log("on2 total: "+this.getTotal(result.on2));
        }


        return finalResult;
    };

    sim.nextRound = function(prevResult, unit1, unit2, params) {
        // NOTE: algo:
        // woundOn2(next) = newWoundsOn2(gyrBracket(woundOn1(prev))) * woundOn2(prev)
        // 1. figure green/yellow/red probability for unit1
        // 2. figure base wound probability vectors for each of (g,y,r) for unit1.
        // 3. Multiply by g,y,r probs to get raw wound prob vectors
        // 4. For each entry in previous result vector, compute new
        //    prob vector by multiplying that entry by raw wound prob vector,
        //    taking into consideration routing probs and destroyed prob
        var probGyr;
        if (!prevResult) {
            prevResult = {
                on2: {
                    wounds: [1],
                    rout: 0,
                    destroyed:0
                },
                on1: {
                    wounds: [1],
                    rout: 0,
                    destroyed:0
                }
            };
            probGyr = {
                u1: {
                    green: 1,
                    yellow: 0,
                    red: 0,
                    black: 0
                },
                u2: {
                    green: 1,
                    yellow: 0,
                    red: 0,
                    black: 0
                }
            };
        } else {
            probGyr = {
                u1: this.calcProbGyr(prevResult.on1, unit1),
                u2: this.calcProbGyr(prevResult.on2, unit2)
            };
        }
        return this.applyRawToPreviousResult(this.calcRaw(probGyr, params.base), 
            prevResult, unit1, unit2);
    };

    /**
     * raw: {
     *   on2: {
     *     green: [ ... ],
     *     yellow: [ ... ],
     *     red: [ ... ],
     *     black: [DP2]
     *   }
     *   on1: {
     *     green: [ ... ],
     *     yellow: [ ... ],
     *     red: [ ... ], 
     *     black: [DP1]
     *   }
     * }
     * previousResult: {
     *   on2: {
     *     wounds: [ ... ],
     *     rout: n,
     *     destroyed: m
     *   }
     *   on1: {
     *     wounds: [ ... ],
     *     rout: n,
     *     destroyed: m
     *   }
     * }
     */
    sim.applyRawToPreviousResult = function(raw, previousResult, unit1, unit2) {
        var nextResult = {
            on2: this.applyRawToUnit(raw.on2, previousResult.on2, unit2),
            on1: this.applyRawToUnit(raw.on1, previousResult.on1, unit1),
        };

        return nextResult;
    };

    /**
     * raw: {
     *   green: [ ... ],
     *   yellow: [ ... ],
     *   red: [ ... ],
     *   black: [DP]
     * }
     * prev: {
     *   wounds: [ ... ],
     *   rout: n,
     *   destroyed: m
     * }
     */
    sim.applyRawToUnit = function(raw, prev, unit) {
        //logger.log("applyRawToUnit: nextRes1: "+JSON.stringify(nextRes, null, 2));
        //logger.log("applyRawToUnit: raw.red: "+JSON.stringify(raw.red, null, 2));

        var nextRes = this.applyRawVectorToUnit(raw.green, prev, unit);
        //logger.log("applyRawToUnit: nextRes1: "+JSON.stringify(nextRes, null, 2));

        nextRes = this.addResults(this.applyRawVectorToUnit(raw.yellow, prev, unit), nextRes);
        //logger.log("applyRawToUnit: nextRes2: "+JSON.stringify(nextRes, null, 2));

        nextRes = this.addResults(this.applyRawVectorToUnit(raw.red, prev, unit), nextRes);
        nextRes = this.addResults(this.applyRawVectorToUnit(raw.black, prev, unit), nextRes);

        nextRes.rout += prev.rout;
        nextRes.destroyed += prev.destroyed;
        return nextRes;
    };

    /**
     * rawWoundVec: [ ...]

     * prevResult: {
     *   wounds: [ ... ],
     *   rout: n,
     *   destroyed: m
     * }
     *
     */
    sim.applyRawVectorToUnit = function(rawWoundVec, prevResult, unit) {
        var baseCourageProb = this.calcGyrCourageProb (unit.courage);

        var result = {
            wounds: [],
            rout: 0,
            destroyed: 0
        };
        var prevWounds = prevResult.wounds;

        var totalWounds = unit.wounds.green + unit.wounds.yellow + unit.wounds.red;

        for (var i=0; i<totalWounds; ++i) {
            result.wounds.push(0);
        }


        var newProb, newProbRes;
        for (var i=0, len=prevWounds.length; i<len; ++i) {
            for (var j=0, len2=rawWoundVec.length; j<len2; ++j) {
                newProb = prevWounds[i] * rawWoundVec[j];
                if (i+j >= totalWounds) {
                    result.destroyed += newProb;
                } else {
                    newProbRes = this.getProbsWithCourageCheck(newProb, i,i+j,unit, baseCourageProb);
                    result.wounds[i+j] += newProbRes.prob;
                    result.rout += newProbRes.courageFail;
                }
            }
        }
        //logger.log("applyRawVectorToUnit: result: "+JSON.stringify(result, null, 2));

        return result;
    };

    /**
     * Given the starting and ending wounds for unit 'unit', determine if
     * courage check is required, and if so, alter the baseProb.
     * @return: {
     *   prob: N,
     *   courageFail: M
     * }
     * the returned 'prob' is courageProb*baseProb if a courage check is required,
     * and baseProb if no check is required.  The returned courageFail is baseProb*(1-courageProb)
     * if a courage check is required, and 0 if not.
     */
    sim.getProbsWithCourageCheck = function(baseProb, start, end, unit, courageProb) {
        if (start > end) throw Exception ("start > end!");

        // NOTE: ys == 'yellow start'
        var ys = unit.wounds.green; 
        var rs = ys + unit.wounds.yellow;

        var needsCourage = 0;
        if (start < ys && end >=ys && end < rs) {
            return {
                prob: baseProb*courageProb.yellow,
                courageFail: baseProb*(1-courageProb.yellow)
            };
        } else if (end > start && end >= rs) {
            return {
                prob: baseProb*courageProb.red,
                courageFail: baseProb*(1-courageProb.red)
            };
        } else {
            return {
                prob: baseProb,
                courageFail: 0
            };
        }
    };

    /**
     * @return A complex object containing the probability of inflicting X wounds for all X, both
     * by unit 1 on unit 2 and vice versa.  These values are computed from the attack and defense
     * stats of both units.
     */
    sim.calcBase = function(unit1, unit2) {
        return {
            on2: {
                green: this.calcWoundStats(unit1, unit2, 0),
                yellow: this.calcWoundStats(unit1, unit2, -1),
                red: this.calcWoundStats(unit1, unit2, -2),
            },
            on1: {
                green: this.calcWoundStats(unit2, unit1, 0),
                yellow: this.calcWoundStats(unit2, unit1, -1),
                red: this.calcWoundStats(unit2, unit1, -2),
            }
        };
    };
    /**
     * The raw vector is the base probability of unit A inflicting X wounds 
     * on unit B, given that unit A is in the green/yellow/red (gyr) (and
     * vice versa)
     * 
     * To compute this, we multiply the probability that unit A is in a given
     * gyrb state by the vector of probabilities of wounds that it would inflict
     * if it were in that state.  We get a resultant vector of net probabilities
     * for each gyrb state.
     * 
     * NOTE: if a unit is in the black state, it may only inflict 0 wounds, hence
     * the multiplication by the [1] vector (a 1 in vector position 0 indicates a
     * 100% chance of inflicting 0 wounds.
     */
    sim.calcRaw = function(probGyr, base) {
        var ret = {
            on2: {
                green: this.multVec(probGyr.u1.green, base.on2.green),
                yellow: this.multVec(probGyr.u1.yellow, base.on2.yellow),
                red: this.multVec(probGyr.u1.red, base.on2.red),
                black: this.multVec(probGyr.u1.black, [1])
            },
            on1: {
                green: this.multVec(probGyr.u2.green, base.on1.green),
                yellow: this.multVec(probGyr.u2.yellow, base.on1.yellow),
                red: this.multVec(probGyr.u2.red, base.on1.red),
                black: this.multVec(probGyr.u2.black, [1])
            }
        };
        //logger.log("calcRaw: "+JSON.stringify(ret, null, 2));
        return ret;
    };

    /**
     * @return {
     *   green: probGreen
     *   yellow: probYellow
     *   red: probRed
     * }
     */
    sim.calcGyrCourageProb = function(courage) {
        return {
            green: this.calcBaseCourageProb(courage),
            yellow: this.calcBaseCourageProb(this.addIfNotNull(courage, -1)),
            red: this.calcBaseCourageProb(this.addIfNotNull(courage, -2)),
        };
    };

    sim.addIfNotNull = function(val, inc) {
        if (val == null || typeof (val) == "undefined") {
            return val;
        } else {
            return val + inc;
        }
    };
    sim.calcBaseCourageProb = function(courage) {
        if (courage == null || typeof (courage) == "undefined") {
            return 1;
        }
        if (courage >= 18) {
            return 1;
        }
        if (courage < 3) {
            return 0;
        }
        var sum = 0;
        for (var i=3; i<=courage; ++i) {
            sum += COURAGE_PROBS[i-3];
        };
        return sum/216;
    };

    /**
     * Calculate wounds caused by attacker on defender.  dieMod is a modifier on 
     * the number of dice.
     * @return vector of wound probabilities, indexed by number of wounds.
     */
    sim.calcWoundStats = function(attacker, defender, dieMod) {
        if (typeof dieMod == "undefined" || dieMod == null) {
            dieMod = 0;
        }
        var toHit = this.calcSuccessChance(attacker.attack.skill, defender.defend.skill);
        var toHitRes = [];
        var dice = attacker.attack.dice + dieMod;

        // NOTE: for each number of hits, calc the chances of getting that number.
        for (var i=0; i<=dice; ++i) {
            toHitRes.push(m_stats.successWithOverkill(dice, i, toHit.toHit/6, toHit.overkill));
        }
        logger.debug("toHit Vector: "+JSON.stringify(toHitRes, null, 2));
        var toWound = this.calcSuccessChance(attacker.attack.power, defender.defend.power);
        var toWoundRes = [];
        for (var i=0; i<=dice; ++i) {
            toWoundRes.push(0);
        }
        // NOTE: for each to hit number, calculate the chances of getting a number of wounds,
        // tabulating them in toWoundRes.
        var tres;
        for (var i=0, len=toHitRes.length; i<len; ++i) {
            for (var j=0, len2=i; j<=len2; ++j) {
                tres = toHitRes[i]*m_stats.successWithOverkill(i, j, toWound.toHit/6, toWound.overkill);
                logger.trace("tres["+i+"]["+j+"]: "+tres);

                toWoundRes[j] += tres;
            }
        }
        logger.debug("toWound Vector: "+JSON.stringify(toWoundRes, null, 2));
        return toWoundRes;
    };

    sim.calcSuccessChance = function(attStat, defStat) {
        var toHit = attStat - defStat;
        var overkill = 0;
        if (toHit < 1) {
            toHit = 1;
        }
        if (toHit > 5) {
            overkill = toHit - 5;
            toHit = 5;
        }
        return {
            toHit: toHit,
            overkill: overkill
        }
    };

    sim.multVec = function(scalar, vector) {
        var result = [];

        for (var i=0, len=vector.length; i<len; ++i) {
            result.push(scalar*vector[i]);
        }

        return result;
    };

    /**
     * Determine the probability the unit is in the green, yellow, red or black (routed/destroyed)
     * based on the 'prevResult' values.
     * ret: {
     *   green: G,
     *   yellow: Y,
     *   red: R
     * }
     */
    sim.calcProbGyr = function(prevResult, unit) {

        ret = {
            green: this.sumProbsInVec(prevResult.wounds, 0, unit.wounds.green),
            yellow: this.sumProbsInVec(prevResult.wounds, unit.wounds.green, unit.wounds.yellow),
            red: this.sumProbsInVec(prevResult.wounds, unit.wounds.green+unit.wounds.yellow, unit.wounds.red),
            black: prevResult.rout+prevResult.destroyed
        };
        logger.log("probGyr: "+JSON.stringify(ret, null, 2));
        return ret;
        
    };

    sim.sumProbsInVec = function(vec, startIdx, count) {
        var sum = 0;
        if (startIdx >= vec.length) {
            return 0;
        }
        var endIdx = startIdx+count;
        if (endIdx >= vec.length) {
            endIdx = vec.length;
        }
        for (var i=startIdx; i<endIdx; ++i) {
            sum += vec[i];
        }
        return sum;
    };
    
    sim.addResults = function(res1, res2) {
        return {
            wounds: this.addVectors(res1.wounds, res2.wounds),
            rout: res1.rout + res2.rout,
            destroyed: res1.destroyed + res2.destroyed
        };
    };

    sim.addVectors = function(vec1, vec2) {
        //logger.log("addVectors: vec1: "+JSON.stringify(vec1, null, 2)+", vec2: "+JSON.stringify(vec2, null, 2));
        var ret;
        var other;
        if (vec1.length > vec2.length) {
            ret = vec1.slice(0);
            other = vec2;
        } else {
            ret = vec2.slice(0);
            other = vec1;
        }
        for (var i=0, len=other.length; i<len; ++i) {
            ret[i] += other[i];
        }
        //logger.log("addVectors: ret: "+JSON.stringify(ret, null, 2));
        return ret;
    };

    sim.getTotal = function(result) {
        var sum = 0;
        for (var i=0, len=result.wounds.length; i<len; ++i) {
            sum += result.wounds[i];
        }
        sum += result.rout;
        sum += result.destroyed;
        return sum;
    };

    sim.getNetStatMods = function(round, unit1, unit2, baseMods) {
        // NOTE: first we merge the unit mods in baseMods in with a copy of the stats in unit1 and unit2.
        // Then we adjust the modified unit stats based on the information in baseMods.  Property
        // values in later source object arguments will overwrite matching properties in earlier source
        // object arguments.  We want the initial unit stats to overwrite any modified values which
        // may have been in the 'baseMods.uX' property.
        var netMods = {
            u1: $.extend(true, {}, baseMods.u1, unit1),
            u2: $.extend(true, {}, baseMods.u2, unit2)
        };
        if (round == 0) {
            if (baseMods.u1.order == "close") {
                netMods.u1.attack.dice += 2;
            }
            if (baseMods.u2.order == "close") {
                netMods.u2.attack.dice += 2;
            }
        }
        return netMods;
    };


    return sim;
};
