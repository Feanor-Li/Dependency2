var bankAccount={
    name:"Lily",
    address:"Mars",
    balance:10000,
    password:20020412,
    testPassword:function(pass){
        var result;
        if(pass===this.password){
            result=true;
        }
        else{
            result=false;
        }
        return result;
    },
    inputMoney:function(result, amount){
        if(result){
            this.balance=this.balance+amount;
            console.log("Success!"+this.balance+"remain in your account")
        }
        else{
            console.log("Failed! Incorrect password!")
        }
        return this.balance;
    },
    getMoney:function(result, amount){
        if(result && this.balance >= amount){
            this.balance = this.balance - amount;
            console.log("Success!"+this.balance+"remain in your account")
        }
        else{
           console.log("Failed! Incorrect password!")
        }
        return this.balance
    } 
}

module.exports=bankAccount