class Ninja{
    constructor(name, health){
        this.name =  name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`This ninjas name is ${this.name}`)
    }
    showStats(){
        console.log(`This ninjas name is ${this.name}. ${this.name}'s health is currently at ${this.health}. ${this.name}'s strength level is ${this.strength} and their speed is ${this.speed}`)
    }
    drinkSake(){
        this.health += 10;
        console.log('Sake is good for your health.')
    }
}
const Todd = new Ninja('Todd', 75)

class Sensei extends Ninja{
    constructor(name){
        super(name,200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const superSensei = new Sensei("Bob");
superSensei.speakWisdom();

superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
