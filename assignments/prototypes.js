/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(gameAttributes){
  this.createdAt = gameAttributes.createdAt,
  this.name = gameAttributes.name,
  this.dimensions = gameAttributes.dimensions
}
GameObject.prototype.destroy = function(){return `${this.name} was removed from the game`};

//test GameObject
// game = new GameObject('today','dustin','mydims');
// console.log(game);
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes){
  this.healthPoints = characterAttributes.healthPoints
  GameObject.call(this,characterAttributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
newcharacter = new CharacterStats(22);

CharacterStats.prototype.takeDamage = function(){return `${this.name} took damage.`};
//test CharacterStats
// me = new CharacterStats(100);
// console.log(me.takeDamage(),me.name)

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttributes){
  this.team = humanoidAttributes.team,
  this.weapons = humanoidAttributes.weapons,
  this.language = humanoidAttributes.language
  CharacterStats.call(this,humanoidAttributes)
};
//test humanoid
dustin = new Humanoid('blue','battleax','finnish');
console.log(dustin.language);
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){return `${this.name} offers a greeting in ${this.language}.`}
// //test Humanoid constructor

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


// const mage = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   },
//   healthPoints: 5,
//   name: 'Bruce',
//   team: 'Mage Guild',
//   weapons: [
//     'Staff of Shamalama',
//   ],
//   language: 'Common Tongue',
// });

// const swordsman = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 2,
//   },
//   healthPoints: 15,
//   name: 'Sir Mustachio',
//   team: 'The Round Table',
//   weapons: [
//     'Giant Sword',
//     'Shield',
//   ],
//   language: 'Common Tongue',
// });

// const archer = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//   },
//   healthPoints: 10,
//   name: 'Lilith',
//   team: 'Forest Kingdom',
//   weapons: [
//     'Bow',
//     'Dagger',
//   ],
//   language: 'Elvish',
// });


  //went from (param1,param2) to (paramAttributs<--then paramAttributes.item_i_want)
  //NEEDED A REFRESH on sharing attributes vs. sharing methods. Two different explicit functions.


  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

const roadrunner = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  healthPoints: 10,
  name: 'Roady',
  team: 'Desert Sun',
  weapons: [
    'Run',
    'Trickery',
  ],
  language: 'birdish',
});

const coyote = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 4,
  },
  healthPoints: 30,
  name: 'Wiley',
  team: 'Desert Night',
  weapons: [
    'Trap1',
    'Trap2',
  ],
  language: 'howly',
});

//Hero and Villain
roadrunner.fight = function trickery(opponent){(opponent.healthPoints --);return opponent};
coyote.fight = function roadblock(opponent){opponent.healthPoints --; return opponent};

//heroBattle
function heroBattle(opponent1,opponent2){
   
  console.log(opponent1.name + ' vs '+opponent2.name);
  
  while (opponent1.healthPoints !== 0 && opponent2.healthPoints !==0){
    opponent1.fight(opponent2);
    console.log(`${opponent2.name} has ${opponent2.healthPoints}remaining`);
    opponent2.fight(opponent1);
    console.log(`${opponent1.name} has ${opponent1.healthPoints}remaining`);
  }

  if (opponent1.healthPoints !== 0){
    console.log('');
    console.log('','','',`${opponent1.name} is victorious!!!`);}
    else{
      console.log('');
      console.log('','','',`${opponent2.name} is victorious!!!`)}
    
  }




heroBattle(coyote,roadrunner);//startbattle

 