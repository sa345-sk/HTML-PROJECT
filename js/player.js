let player;

function Player(classType, health, mana, strength, agility, speed) {
 this.classType = classType;
 this.health = health;
 this.mana = mana;
 this.strength = strength;
 this.agility = agility;
 this.speed = speed;
}

let playerMoves = {
     calcAttack: function() {
        //who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
          //player attacks
          let playerAttack = function() {
            let calcBaseDamage;
            if (player.mana > 0) {
             calcBaseDamage = player.strength * player.mana / 1000;
            }
             else {
                 calcBaseDamage = player.strength * player.agility / 1000;
            }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
         let calcOutputDamage = calcBaseDamage + offsetDamage;
         //number fo hits
         let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) +1;
         let attackValues = [calcOutputDamage, numberOfHits];
         return attackValues;
         }
         //Enemy attacks
         let enemyAttack = function() {
           let calcBaseDamage;
           if (enemy.mana > 0) {
            calcBaseDamage = enemy.strength * enemy.mana / 1000;
           }
            else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
           }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //number fo hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) +1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
        }
        //Get player/Enemy health to change later!
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
       //Initiate attack!
      if (getPlayerSpeed >= getEnemySpeed) {
       let playerAttackValue = playerAttack();
       let totalDamage = playerAttackValue[0] * playerAttackValue[1];
       enemy.health = enemy.health - totalDamage;
       alert("You hit " + playerAttackValue[0] + " damage " + playerAttackValue[1] + " times.");
       if (enemy.health <= 0) {
        alert("You win! refresh the browser to start again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
       } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
       //Enemy attack!
       let enemyAttackValue = enemyAttack();
       let totalDamagee = enemyAttackValue[0] * enemyAttackValue[1];
       player.health = player.health - totalDamagee;
       alert("Enemy hit " + enemyAttackValue[0] + " damage " + enemyAttackValue[1] + " times.");
       if (player.health <= 0) {
        alert("You loose! refresh the browser to start again.");
        getPlayerHealth.innerHTML = 'Health: 0';
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
       } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }  else if (getEnemySpeed >= getPlayerSpeed) {
          let enemyAttackValue = enemyAttack();
          let totalDamage = enemyAttackValue[0] * enemyAttackValue[1];
          player.health = player.health - totalDamage;
          alert("Enemy hit " + enemyAttackValue[0] + " damage " + enemyAttackValue[1] + " times.");
          if (enemy.health <= 0) {
           alert("You loose! refresh the browser to start again.");
           getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
           getPlayerHealth.innerHTML = 'Health: 0';
          } else {
             getPlayerHealth.innerHTML = 'Health: ' + player.health;
           }
          //Player attack!
          let playerAttackValue = playerAttack();
          let totalDamagee = playerAttackValue[0] * playerAttackValue[1];
          enemy.health = enemy.health - totalDamagee;
          alert("You hit " + playerAttackValue[0] + " damage " + playerAttackValue[1] + " times.");
          if (enemy.health <= 0) {
           alert("You win! refresh the browser to start again.");
           getEnemyHealth.innerHTML = 'Health: 0';
           getPlayerHealth.innerHTML = 'Health: ' + player.health;
          } else {
             getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
           }
         }
    }
}
