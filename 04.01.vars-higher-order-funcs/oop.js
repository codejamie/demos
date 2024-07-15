// Object Orient Programming

// // // Create a person.
// // class Person {
// //   constructor(name, age, job) {
// //     this.name = name;
// //     this.age = age;
// //     this.job = job;
// //   }
// //   talks() {
// //     console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old`);
// //   }
// //   works() {
// //     console.log(`I'm off to work now - I'm a ${this.job}.`);
// //   }
// // }

// const jack = new Person("Jack", 39, "Engineer")
// jack.talks()
// jack.works()

// Dog class

// class Dog {
//   constructor(name, age, breed, fav_food) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.fav_food = fav_food;
//   }
//   eats() {
//     console.log(`${this.name} likes to eat ${this.fav_food}. Yum!`);
//   }
//   walks() {
//     console.log(`Taking ${this.name}, a ${this.breed} aged ${this.age} for a walk.`);
//   }
// }

// const ethel = new Dog("Ethel", 15, "Terrier", "biscuits")
// ethel.walks();
// ethel.eats();

// Animal class

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 0;
  }
  drinks() {
    this.health += 5;
    console.log(`${this.name} has a cooling drink. Health boost!`);
    return this;
  }
  eats() {
    this.health += 10;
    this.hunger -= 10;
    console.log(`Hunger: ${this.hunger},\nHealth: ${this.health}`)
    return this;
  }
  stats() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger
    });
  }
}

class Cat extends Animal {
  constructor(name,disposition) {
    super(name, disposition);
    this.disposition = disposition;
    this.animal = "cat"
  }
  play() {
    this.health += 8;
    this.hunger -= 22;
    console.log(`${this.name} the ${this.animal} is playing. Health boost!`);
    return this;
  }
}

const bambam = new Cat("Bam-Bam")
bambam.stats()
bambam.play()
bambam.drinks()
bambam.eats()
bambam.stats()

