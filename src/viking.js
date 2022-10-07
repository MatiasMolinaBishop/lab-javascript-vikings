// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else if(this.health <= 0){
            return `${this.name} has died in act of combat`; //why not refelcting on tester?
        }
    }

    battleCry(){
        return("Odin Owns You All!");
    }
}
// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}


// War
class War {
    constructor(){
    this.vikingArmy = [],
    this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){ 
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
    
        let vikingRandom = this.vikingArmy[Math.floor(Math.random())*(this.vikingArmy.length)]
        let saxonRandom = this.saxonArmy[Math.floor(Math.random())*(this.saxonArmy.length)]
        let attackViking = saxonRandom.receiveDamage(vikingRandom.attack()); //we pass the viking attack methid as the arguent for the receive damage of the saxon

        if(saxonRandom.health <= 0){ //
            let index = this.saxonArmy.indexOf(saxonRandom);
            this.saxonArmy.splice(index,1);
        }
        //now we want to add conditional so that if saxon i sdead to delete ir from army

        return attackViking;
    }

    saxonAttack(){

        let vikingRandom = this.vikingArmy[Math.floor(Math.random())*(this.vikingArmy.length)]
        let saxonRandom = this.saxonArmy[Math.floor(Math.random())*(this.saxonArmy.length)]
        let attackSaxon = vikingRandom.receiveDamage(saxonRandom.attack()); 

        if(vikingRandom.health <= 0){ //
            this.vikingArmy.splice(vikingRandom)
        }
        return attackSaxon;
    }

    showStatus(){

        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}






