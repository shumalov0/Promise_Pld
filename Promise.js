//task 1.1
const fetchData = () => {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      if (condition) {
        resoleve({
          name: "John Doe",
          age: 30,
          city: "New York",
        });
      } else {
        reject("error ");
      }
    }, 2000);
  });
};

//task 1.2

fetchData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
