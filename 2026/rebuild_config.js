var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title,": "PAGEONE",
  "checkboxAs": "10",
  "prematch": "10",
    { "name": "Scouter name",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": "Event",
      "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 999999
     }
    ],
    "Autonomous": [
     { "name": "Fuel scored in hub",
       "code": "ac1",
       "type": "counter"
     },
     { "name": "Climb",
       "code": "efs",
       "type": "radio",
       "choices": {
         "bp": "Climb 1<br>",
         "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
     { "name": "Fuel scored in hub",
       "code": "ac1",
       "type": "counter"
     },
     { "name": "Fuel missed in hub",
       "code": "ac1",
       "type": "counter"
     },
     { "name": "Pickup From",
       "code": "tpu",
       "type": "radio",
       "choices": { 
         "s": "Human Player<br>",
         "f": "Depot<br>",
         "b": "neutral zone<br>",
         "x": "not attempted<br>",
     },
     "defaultValue": "x"
    },
     { "name": "Final Robot Status",
       "code": "efs",
       "type": "radio",
       "choices": {
         "bp": "Climb 1<br>",
         "ba": "Climb 2<br>",
         "bs": "Climb 3<br>",
         "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
{ "name": "Rank points",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Win<br>",
        "a": "Tie<br>",
        "v": "Energized RP<br>",
        "b": "Supercharged RP<br>"
        "c": "Traversal RP<br>"
        "x": "None<br>"
      },
      "defaultValue": "x"
 },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
   },
 { "name": "Rank number after match",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 60
    },
 { "name": "Additonal things of note",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 90
    }
  ]
}`;
