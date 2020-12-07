function Animal(name, energy) { // class Animal, Pere de tout
    this.name = name;
    this.energy = energy;
} 

Animal.prototype.eat = function () {
    console.log('im eating');
}

Animal.prototype.sleep = function () {
    console.log('im sleeping');
}

var an1 = new Animal('davai1', 42);

function Dog(name, energy, race, age) { // class Dog, inherite from Animal
    Animal.call(this, name, energy);
    this.race = race;
    this.age = age;
}
Dog.prototype = Object.create(Animal.prototype); // method given from Animal, Without Object.create, father and chield would share same pointer, child could not modify father.
Dog.prototype.wouf = function () {
    console.log('WoofWoof');
}
Dog.prototype.constructor = Dog;
var dog1 = new Dog('pierox', 42, 'goldenRetriever', 55);


dog1.wouf();

console.log(dog1.constructor);

function Cat(name, energy, race, age, claws) { // class Cat, inherite from Animal
    Animal.call(this, name, energy);
    this.race = race;
    this.age = age;
    this.claws = claws;
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.miaw = function () {
    console.log('miaOuW');
}
Cat.prototype.constructor = Cat;
var cat1 = new Cat('LeChat', 10, 'Siamois', 22, 3);
console.log(cat1.constructor);

function Kitty(name, energy, race, age, claws, color) { // class Kitty, inherite from Cat, inheriting from Animal
    Cat.call(this, name, energy, race, age, claws);
    this.color = color;
}


Kitty.prototype = Object.create(Cat.prototype);
Kitty.prototype.baby = function () {
    console.log('Baby MiawOuUw');
}

Kitty.prototype.constructor = Kitty;
var kitty1 = new Kitty('Chaton', 42, 'sisi', 1, 1, 'red');

console.log(kitty1.constructor);