class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    sleep() {
        console.log('im sleepingz');
    }
    eat() {
        console.log('im eating');
    }
}

var an1 = new Animal('davai1', 42);

class Dog extends Animal {
    constructor(name, energy, race, age) {
        super(name, energy);
        this.race = race;
        this.age = age;
    }
    wouf() {
        console.log(`wouf wouf, im a ${this.race}`);
    }
}

var Pete = new Dog('Pete', 42, 'GoldenRetriever', 22);
Pete.sleep();

class Cat extends Animal {
    constructor(name, energy, race, age, claws) {
        super(name, energy);
        this.race = race;
        this.age = 5;
        this.claws = 4
    }
    miaw() {
        console.log(`miaOuOuU by the ${this.race}`);
    }
}

var cat1 = new Cat('silo', 10, 'Siamoix', 2, 4);
console.log(cat1);
cat1.sleep();
cat1.miaw();

class Kitty extends Cat {
    constructor(name, energy, race, age, claws, color) {
        super(name, energy, race, age, claws);
        this.color = color;
    }
    myColor() {
        console.log(`im a kitty, my name is ${this.name} and im ${this.color}`);
    }
}

var kitty1 = new Kitty('Roger', 1, 'ptichaton', 1, 1, 'blue');
console.log(kitty1);
kitty1.myColor();
