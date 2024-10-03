class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`;
  }
}

const User1 = new User("intiqam", 20, "Baku,Sulutapa");
console.log(User1.greet());
