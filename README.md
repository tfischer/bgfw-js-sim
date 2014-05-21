bgfw-js-sim
===========

Combat Simulator for Battleground: Fantasy Warfare

The simulator is divided into several files:

1. armies.js - Contains the data of all armies.  This data was imported from the army builder spreadsheet.  
   Special rules are not yet represented.
2. stats.js - Basic statistics functions, including binomial and success computation with overkill.
3. sim.js - The actual simulator logic.
4. sim.html - The html frontend to the simulator.

The simulator works by storing the probability of a given **result** happening on a unit.  This result is
represented by a vector containing the entire legal set of possible wound values for that unit where it is still
active; rout; destroyed.  Along with these results is the associated probability of each.

Probability results from the previous round are applied to the next round, generating the probability results
for the next round.


