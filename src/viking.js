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
const Rohit = new Soldier(100, 150);

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
    return `Odin Owns You All!`;
  }
}
const Rishi = new Viking("Rishi", 100, 300);
console.log(Rishi.receiveDamage());
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

const Rohan = new Saxon(100, 250);
// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Rishi) {
    this.vikingArmy.push(Rishi);
  }
  addSaxon(Rohan) {
    this.saxonArmy.push(Rohan);
  }
  vikingAttack() {
    let v1 = Math.floor(Math.random() * this.vikingArmy.length);
    let s1 = Math.floor(Math.random() * this.saxonArmy.length);
    let result = this.saxonArmy[s1].receiveDamage(this.vikingArmy[v1].strength);

    if (this.saxonArmy[s1].health <= 0) {
      this.saxonArmy.splice(s1, 1);
    }
    return result;
  }
  saxonAttack() {
    let v1 = Math.floor(Math.random() * this.vikingArmy.length);
    let s1 = Math.floor(Math.random() * this.saxonArmy.length);
    let result = this.vikingArmy[s1].receiveDamage(this.saxonArmy[s1].strength);

    if (this.vikingArmy[v1].health <= 0) {
      this.vikingArmy.splice(v1, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 1 || this.vikingArmy.length === 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// const war1 = new War();
// console.log(war1);
