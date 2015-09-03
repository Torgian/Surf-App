var resultsData = {

    "timestamp": 1438192800,
    "localTimestamp": 1438214400,
    "issueTimestamp": 1438192800,
    "fadedRating": 0,
    "solidRating": 0,
"swell": {
    "minBreakingHeight": 0.2,
    "absMinBreakingHeight": 0.2,
    "maxBreakingHeight": 0.3,
    "absMaxBreakingHeight": 0.31,
    "unit": "m",
"components": {
    "combined": {
    "height": 0.5,
    "period": 11,
    "direction": 271.78,
    "compassDirection": "E"
},
  "primary": {
    "height": 0.2,
    "period": 11,
    "direction": 264.56,
    "compassDirection": "E"
},
    "secondary": {
    "height": 0.1,
        "period": 8,
        "direction": 265.64,
        "compassDirection": "E"
},
"tertiary": {
"height": 0.4,
"period": 3,
"direction": 6.17,
"compassDirection": "S"
}
}
},
"wind": {
"speed": 17,
"direction": 27,
"compassDirection": "SSW",
"chill": 30,
"gusts": 19,
"unit": "kph"
},
"condition": {
"pressure": 1013,
"temperature": 28,
"weather": 10,
"unitPressure": "mb",
"unit": "c"
}
};
function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}
var s = resultsData.swell;
var sp = resultsData.swell.components.primary;
var w = resultsData.wind;
var con = resultsData.condition;
var data1 = [["Surf", "Primary Swell", "Wind", "Weather"], //headers
                [s.minBreakingHeight + "-" + s.maxBreakingHeight + s.unit, sp.height + s.unit + sp.period + sp.direction, w.speed + w.unit + w.direction, con.temperature + con.unit + con.weather ], 
                ];
    

// var beaches = 
//     {"Baishawan": 3767,
//     "Bashien Dong": 3450,
//     "Cheng Gong": 3452,
//     "Chu Nan": 3451,
//     "Dashi": 2412,
//     "Fongbin": 3441,
//     "Fulong Beach" :3442,
//     "Gongs" :2411,
//     "Hualien" :756,
//     "Jialeshuei" :2409,
//     "Jici Beach" :3440,
//     "Jin Shan" :3447,
//     "Nanwan":2407,
//     "PD SPOT(Windmill)":1160,
//     "Sanshuei":3449,
//     "Shalun":3446,
//     "Sunyatsen Beach":3448,
//     "Taitung":757,
//     "Wushi":844
// };

