let GameManager = {
 setGameStart: function(classType) {
  this.resetPlayer(classType);
  this.setPreFight();
   },

//Create character!

  resetPlayer: function(classType) {
    switch (classType) {
      case "Bolt":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Mortal":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Dark":
        player = new Player(classType, 150, 0, 50, 100, 50);
        break;
      case "Death":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
      }
        let getInterface = document.querySelector(".character");
        getInterface.innerHTML = '<img src="img/character-player/' + classType.toLowerCase() + '.jpg" class="img-character"><div><h3>' +
         classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p> <p>Agility: ' +
      player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },

  setPreFight: function() {
   let getHeader = document.querySelector(".header");
   let getAction = document.querySelector(".action");
   let getArena = document.querySelector(".arena");
   getHeader.innerHTML = '<p>Task: Find enemy!</p>';
   getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
   getArena.style.visibility = "visible";
  },

  setFight: function() {
    let getHeader = document.querySelector(".header");
   let getAction = document.querySelector(".action");
   let getEnemy = document.querySelector(".enemy");
   //Create enemy!
   let enemy00 = new Enemy("Krang", 50, 0, 100, 80, 150 );
   let enemy01 = new Enemy("Russia", 100, 0, 40, 50, 100 );
   let enemy02 = new Enemy("Gola", 200, 0, 450, 250, 50 );
   let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
   switch (chooseRandomEnemy) {
    case 0:
      enemy = enemy00;
    break;
      case 1:
      enemy = enemy01;
      break;
      case 2:
      enemy = enemy02;
      break;
   }
   getHeader.innerHTML = '<p>Task: Choose your move!</p>';
   getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attack!</a>';
   getEnemy.innerHTML = '<img src="img/character-enemy/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-character"><div class="kbox"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';

   }
}
