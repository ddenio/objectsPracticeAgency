// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    constructor(name,role,salary){
        this._name = name;
        this._role = role;
        this._salary = salary;
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role
    }
    get salary(){
        return this._salary
    }
    sayHello(){
        console.log(`Hello, I'm ${this._name} and a ${this._role}!`)
    }
}

class Frontend extends Contractor{
    constructor(name,role,salary,language){
        super(name,role,salary);
        this._language = language;
    }
    sayHello(){
        console.log(`Hello! I'm ${this._name}, i am a ${this._role} and use the ${this._language} programming language!`)
    }
}