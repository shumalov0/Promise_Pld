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

function fetchUserTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Task 1: Complete the project", "Task 2: Submit the report"]);
    }, 1000);
  });
}

fetchData(true)
  .then((user) => {
    console.log(user.greet());

    return fetchUserTasks();
  })
  .then((tasks) => {
    console.log("User Tasks:", tasks);
  })
  .catch((error) => {
    console.error(error);
  });
