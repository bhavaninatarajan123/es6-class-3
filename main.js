// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. 
// Include methods to deposit and withdraw money from the account.
//  Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

let m=parseInt(prompt("Enter the deposit amount"))
let n=parseInt(prompt("Enter the withdraw amount"))

class Bankaccount{
    constructor(accountNo,balance){
        this.accountNo=accountNo
        this.balance=balance
    }
    
    deposit(){
        let a=this.balance+m
        console.log("Your balance is "+this.balance)
        console.log("You are deposited Rs" +m+ "and your balance is "+a)
    }

    widthdraw(){
        
        let b=this.balance+m-n
        console.log("You are withdraw Rs" + n + "and your balance is "+b)
        console.log("your balance is "+b)
       
    }
    
    

}
let bank=new Bankaccount(123,1000)
bank.deposit(m)
bank.widthdraw(n)






