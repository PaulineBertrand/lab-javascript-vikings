// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// console.log(new Soldier(30,40));

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
 
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
     } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let numberOfSaxons = this.saxonArmy.length;
    let numberOfVikings = this.vikingArmy.length;
    let randomSaxonIndex = Math.floor(numberOfSaxons*Math.random());
    let randomVikingIndex = Math.floor(numberOfVikings*Math.random());
    
    let someDamageHappens = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    
    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0)

    return someDamageHappens;
  }

  saxonAttack() {
    let numberOfSaxons = this.saxonArmy.length;
    let numberOfVikings = this.vikingArmy.length;

    let randomSaxonIndex = Math.floor(numberOfSaxons*Math.random());
    let randomVikingIndex = Math.floor(numberOfVikings*Math.random());

    let someDamageHappens = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)

    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0)

    return someDamageHappens
  }

   // ------------------- I tried the following refactoring but it doesn't work

  // armyAttack(attackerArmy, attackedArmy) {
  //   let numberOfAttackers = attackerArmy.length;
  //   let numberOfAttacked = attackedArmy.length;

  //   let randomAttackerIndex = Math.floor(numberOfAttackers*Math.random());
  //   let randomAttackedIndex = Math.floor(numberOfAttacked*Math.random());
  //   console.log(attackedArmy)
  //   let someDamageHappens = attackedArmy[randomAttackedIndex].receiveDamage(attackerArmy[randomAttackerIndex].strength)
  //   attackedArmy = attackedArmy.filter((soldier) => soldier.health > 0)
  //   console.log(attackedArmy)

  //   return someDamageHappens;
  // }

  // saxonAttack() {
  //   return this.armyAttack(this.saxonArmy, this.vikingArmy)
  // }

  // vikingAttack() {
  //   return this.armyAttack(this.vikingArmy, this.saxonArmy)
  // }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
      // this makes no sense because there could be 0 vikings also at this point
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

// To debug

let Harald = new Viking('Harald', 10, 150)
let Lagertha = new Viking('Lagertha', 10, 4000)
let Ecbert = new Saxon(20, 200)
let Aethelwulf = new Saxon(10, 60)
let firstWar = new War
firstWar.addSaxon(Ecbert)
firstWar.addSaxon(Aethelwulf)
firstWar.addViking(Lagertha)
firstWar.addViking(Harald)
firstWar.saxonAttack()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
