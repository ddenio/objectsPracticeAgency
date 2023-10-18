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
    get language() {
        return this._language
    }
    sayHello(){
        console.log(`Hello! I'm ${this._name}, i am a ${this._role} and use the ${this._language} programming language!`)
    }
}

class Backend extends Contractor{
    constructor(name,role,salary,language){
        super(name,role,salary);
        this._language = language;
    }
    get language(){
        return this._language
    }
    sayHello(){
        console.log(`Hello! I'm ${this._name}, i am a ${this._role} and use the ${this._language} programming language!`)
    }
}

let jim = new Contractor('Jim', 'Front-End', 85000);
let peter = new Frontend('Peter','Front-End',90000,'JavaScript');
let matt = new Backend('Matt','Back-end',150000,'C++')

let agency = [jim,peter,matt]

for(person of agency){
    person.sayHello()
}