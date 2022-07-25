```
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output. For example, Array.
Array.map have call-back fn in own body.

```

const user = {
  name: "Artem",
  surname: "Slotin",
  age: 31
};

function greeting(firstName) {
  return function (lastName) {
    return function (age) {
      return `Hello, ${firstName} ${lastName}!!! I am ${age}`;
    };
  };
}

const fullname = greeting(user.name)(user.surname)(user.age);

console.log(fullname);
