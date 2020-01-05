class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreetting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
       let description = super.getDescription();

       if(this.hasMajor()){
           description += ` Their major is ${this.major}.`;
       }

       return description;
    }
}

class Traveler extends Person {
        constructor(name, age, homeLocation){
            super(name, age);
            this.homeLocation = homeLocation;
        }

    

        getGreetting(){
        let greetting = super.getGreetting();

        if(this.homeLocation){
            greetting += ` My home location is ${this.homeLocation}.`;
        }
        
        return greetting;
        }
    }

    //Traveler -> Person
    //add support for homeLocation
    //Override getGreeting
    //1. if homeLocation, include it.
    //2. no homelocation


const me = new Traveler('Nahuel Gimenez', 33, 'Argentina');
console.log(me.getGreetting());

const other = new Traveler();
console.log(other.getGreetting());