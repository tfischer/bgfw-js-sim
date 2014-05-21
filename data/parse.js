"use strict";

var files = ["Carthage.csv", "DarkElves.csv", "Dwarves.csv", "Hawkshold.csv", "HighElves.csv", "Lizardmen.csv", "Monsters.csv", "Orcs.csv", "Ravenwood.csv", "Rome.csv", "Umenzi.csv", "Undead.csv"];



// JSON file format:
/*
{
"armies": [
    {
    "name": "ArmyName",
    "units": [
        {"name": "StrName",
         "attack": {"dice": int, "skill": int, "power": int},
         "defend": {"skill": int, "power": int},
         "ranged": {"dice": int, "skill": int, "power": int, "range": int},
         "courage": int,
         "move": float,
         "wounds": {"green": int, "yellow": int, "red": int}
         "points" int,
         "type": "StrType",
         "special1": { ... },
         "special2": { ... },
        }
        ...
    ]
    }
]
}
*/

var debug = function(s) {
    print(s);
};

var isEndCard = function(s) {
    return (s == "Premeditation" ||
        s == "Command Card" || 
        s == "Foresight"
    );
};


var lib = {
    parseFile: function(name) {
        var fileStr = readFile(name);
        var lines = fileStr.split("\n");

        // NOTE: get army name
        var name = lines[1].split(",")[0].replace(/"/g, '');
        var jsonArmy = {};
        //debug (name);
        jsonArmy.name = name;
        var units = [];

        var unit;
        for (var i=4, len=lines.length; i<len; i+=2) {
            unit = this.parseLine(lines[i]);
            if (isEndCard(unit.name)) {
                break;
            }
            if (unit.name == "Giant War Elephant") {
                unit.specialSpears = lines[i+1];
                ++i;
            }
            unit.specialText = lines[i+1].replace(/[",]/g, '');
            units.push(unit);
        }
        jsonArmy.units = units;
        return jsonArmy;
    },
    parseLine: function(line) {
        var fields = line.split(",");
        var json = {};
        json.name = fields[0].replace(/"/g, '');
        //debug (json.name);
        json.attack = {
            "dice": parseInt(fields[2].replace(/"/g, '')),
            "skill": parseInt(fields[4].replace(/"/g, '')),
            "power": parseInt(fields[6].replace(/"/g, ''))
        };
        json.defend = {
            "skill": parseInt(fields[8].replace(/"/g, '')),
            "power": parseInt(fields[10].replace(/"/g, ''))

        };
        json.ranged = {
            "range": fields[11].replace(/"/g, '')
        };
        json.courage = parseInt(fields[12].replace(/"/g, ''));
        json.move = parseFloat(fields[13].replace(/"/g, ''));
        json.wounds = {
            "green": parseInt(fields[14].replace(/"/g, '')),
            "yellow": parseInt(fields[15].replace(/"/g, '')),
            "red": parseInt(fields[16].replace(/"/g, ''))
        };
        json.points = parseInt(fields[17].replace(/"/g, ''));
        json.type = fields[19].replace(/"/g, '');
        return json;
    }
};

var json = {};
json.armies = [];
for (var i=0, len=files.length; i<len; ++i) {
    
    json.armies.push(lib.parseFile(files[i]));
}

print (JSON.stringify(json, undefined, 2));
