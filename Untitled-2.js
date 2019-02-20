function tax(type1="teena",ammount=0){

var array=[{"type":"ojas",
"percentage":80
},
{"type":"teena",
"percentage":85
},
{
 "type":"ritika",
 "percentage":75   
},
{
"type":"devesh",
"percentage":70
},
{
"type":"rahul",
"percentage":65
}
]
for(let i=0;i<array.length;i++)
{
if (array[i].type===type1)
{
var percentage_deduct=array[i].percentage;    
}
}
var ammount_deducted=(percentage_deduct/100)*ammount;
var net_ammount=ammount-ammount_deducted;

var object={"type":type1,"total amt":ammount,"percentage":percentage_deduct,"ammount deducted":ammount_deducted,"net ammount":net_ammount};
return object;
}
console.log(tax("ojas",100));