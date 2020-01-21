class Fighter {
  constructor(fighter) {
    let currentHP = fighter.hp,
      maxHP = fighter.hp;

    this.getName = () => fighter.name;
    this.getDamage = () => fighter.damage;
    this.getStrength = () => fighter.strength;
    this.getAgility = () => fighter.agility;
    this.getHealth = () => currentHP;

    let wins = 0,
      losses = 0;

    this.attack = function(defender) {
      const successProbability = 100;
      let random = Math.floor(Math.random() * (successProbability + 1));
      let attackProbability =
        successProbability - (defender.getStrength() + defender.getAgility());
      if (random <= attackProbability) {
        defender.dealDamage(fighter.damage);
        console.log(
          `${fighter.name} makes ${
            fighter.damage
          } damage to ${defender.getName()}`
        );
      } else {
        console.log(`${fighter.name} missed`);
      }
    };

    this.logCombatHistory = () =>
      console.log(`Name: ${fighter.name}, Wins: ${wins}, Losses: ${losses}`);

    this.heal = function(val) {
      if (currentHP + val >= maxHP) {
        currentHP = maxHP;
      } else {
        currentHP += val;
      }
      return currentHP;
    };

    this.dealDamage = function(val) {
      if (currentHP - val <= 0) {
        currentHP = 0;
      } else {
        currentHP -= val;
      }
      return currentHP;
    };

    this.addWin = function() {
      return wins++;
    };

    this.addLoss = function() {
      return losses++;
    };
  }
}

function battle(fighter1, fighter2) {
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  } else {
    do {
      fighter1.attack(fighter2);
      if (fighter2.getHealth() > 0) {
        fighter2.attack(fighter1);
      }
    } while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0);

    if (fighter1.getHealth() > 0) {
      fighter1.addWin();
      fighter2.addLoss();
      console.log(`${fighter1.getName()} has won !`);
    } else {
      fighter2.addWin();
      fighter1.addLoss();
      console.log(`${fighter2.getName()} has won !`);
    }
  }
}
