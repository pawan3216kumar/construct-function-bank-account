function BankAccount(accountNumber , name , type , balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type = type
    this.balance = balance

    this.deposite = function(amount){
        this.balance += amount
        console.log("Deposited:" + amount)
        console.log("Updated Balance:" +this.balance)
    };

    this.widthraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount
            console.log("Available Balance:" +this.balance)
        }else{
            console.log("Not Sufficient Balance")
        } 
    };

    this.checkBalance = function(){
     console.log("The amount balance is:" + this.balance)
    };

    this.isActive = function(){
        if(this.balance<=0){
            console.log("The account is Inactive")
        }else{
            console.log(" The account is activate")
        }
    }
}

let account1 = new BankAccount(12345 , "kalyan singh" , "Saving" , 10000);
let account2 = new BankAccount(2347, "Akash kumar" , "saving" , 50000 ) 
// console.log(account1 ,account2)
account1.checkBalance()

// var bankAccount = [account1,account2]

function sum(bankAccount){
    const Account = [account1,account2]
    let sum = 0;
    for (const el of arr) {
      sum += el;
    }
    console.log(sum);
    
}


