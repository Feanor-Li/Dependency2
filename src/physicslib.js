var calcVelocity=function(distance,time){
    var v= distance / time;
    return v;
}

var calcForce=function(pressure,area){
    var f=pressure*area;
    return f;
}

var calcVolt=function(resistance,current){
    var v=resistance*current;
    return v
}

var formulas={
    calcVelocity: calcVelocity,
    calcForce: calcForce,
    calcVolt: calcVolt
}

module.exports=formulas
