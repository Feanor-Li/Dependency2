// var phy=require("./physicslib");
var bankAccount=require("./bankAccount");
var result=bankAccount.testPassword(20020412);

// var physics = require('ngraph.physics.primitives');
// var body1 = new physics.Body(0, 0);
// var body2 = new physics.Body(1, 0);
 
// var createSimulator = require('ngraph.physics.simulator');
// var simulator = createSimulator();
// simulator.addBody(body1);
// simulator.addBody(body2);
 
// simulator.step();
console.log(result);
console.log(bankAccount.balance);
console.log(bankAccount.getMoney(result, 500));
console.log(bankAccount.inputMoney(result, 1000));
// for(i=0;i<100;i++){
//     console.log(simulator)
// }

// console.log(phy)
