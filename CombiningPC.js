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

function fetchData(isDataAvailable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isDataAvailable) {
       
        resolve(new User("John Doe", 30, "New York"));
      } else {
        reject("Error: Data is not available.");
      }
    }, 2000); 
  });
}




fetchData(true) 
  .then((user) => {
    console.log(user.greet()); 
  })
  .catch((error) => {
    console.error(error); 
  });
