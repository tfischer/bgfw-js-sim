
var createStats = function(params) {
    var ret = {};
    var logger = params.logger;

    /**
     * Calculate the chance of k successes out of n chances, with probability
     * of success p.  This takes into account the overkill rule.
     */
    ret.successWithOverkill = function(n, k, p, ok) {
        if (n == k) {
            var base = this.binomial(n, k, p);
            var okProb;
            for (var i=1; i<=ok; ++i) {
                if (k-i < 0) {
                    // NOTE: in this case, overkill is greater than
                    // the number of dice, we return the accumulated
                    // probability so far, which should be 1.
                    logger.log("stats.js: successWithOverkill: overkill > k, base: "+base);
                    return base;
                }
                okProb = ret.binomial(n, k-i, p);
                base += okProb;
            }
        } else if (k-ok < 0) {
            // NOTE: it is never possible to get less hits than
            // the overkill amount.  If this is being requested,
            // then the probability is 0.
            return 0;
        } else {
            return this.binomial(n, k-ok, p);
        }
        return base;

    };
    /**
     * Compute the chance of k events happening out of n chances.  The probability
     * of a single event happening is p.  Eg 5 hits out of 6 dice, where the probability
     * of a hit is 5/6
     */
    ret.binomial = function(n, k, p) {
        if (n < 0 || k < 0 || p < 0) {
            throw new Exception("n("+n+"), k("+k+") and p("+p+") must be >=0");
        }
        return this.choose(n,k) * Math.pow(p, k)*Math.pow(1-p, n-k);
    };

    ret.choose = function (n, k) {
        var cutoff = n-k;
        var divisor;
        // NOTE: figure out which of k or n-k is larger, use that for
        // the factorial cutoff.
        if (cutoff < k) {
            divisor = this.factorial(cutoff);
            cutoff = k;
        } else {
            divisor = this.factorial(k);
        }
        return this.factorial(n, cutoff) / divisor;
    };

    /**
     * Compute the factorial of num, stopping at cutoff.
     * cutoff is optional.
     */
    ret.factorial = function (num, cutoff) {
        if (typeof cutoff == "undefined") {
            cutoff = 0;
        }
        var ret = 1;
        for (var i=num; i>cutoff; --i) {
            ret *= i;
        };
        return ret;
    };
    return ret;
};
