// Factory function for creating circle
function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
}

// circle = createCircle(1);
// circle.draw();

// Constructor function for creating circle
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// new => will create new object and point to this new object & it will return this object from this function or class

// const another = new Circle(1);

// console.log(another.radius);
// console.log(another.constructor);

// every object has a constructor function to refer to it
// new String()
// new Number()

// Creating function using constructor that creates functions vs using function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// constructor that creates functions
// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// `
// );

// const circle1 = new Circle(1);
// const circle2 = new Circle1(1);

// console.log(circle2.radius);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// this like what new key does

// Circle.call({}, 2);
// the difference between call and apply that apply accept array

// Circle.apply({}, [1]);

// console.log(circle.radius);

// like this
// const another = new Circle(1);

// primitives independent on each other

// let x = 10;
// let y = x;
// x = 20;
// console.log(x);
// console.log(y);

// object not

// let x = { value: 10 };
// let y = x;
// x.value = 20;
// console.log(x);
// console.log(y);

// let number = 10;
// function increase(number) {
//   number++;
// }

// increase(number);

// console.log(number);

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }
// increase(obj);

// console.log(obj);

// objects in js are dynamic you can add methods or properties to them
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// circle.location = { x: 1 };

// delete used to remove properties from objects
// delete circle.location;
// console.log(circle);

// loop in object
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// first solution

// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// second way

// console.log(Object.keys(circle));

// check properties in object

// if ("radius" in circle) console.log("its here");

// abstractions hide details and show only essentials

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };

//   let computeOptimumLocation = function (factor) {
//     // ...
//   };
//   this.draw = function () {
//     computeOptimumLocation(1);
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 1, y: 0 };

//   this.getDefaultLocation = function () {
//     console.log(defaultLocation);
//   };

//   this.draw = function () {
//     console.log("draw");
//   };

//   // getter read only function & setter
//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x | !value.y) throw new Error("Fuck you");
//     },
//   });
// }

// const circle = new Circle(10);

// circle.defaultLocation = 5;
// console.log(circle.defaultLocation);

function Stopwatch() {
  let timer = 0;
  let isWorking = false;

  this.start = function () {
    if (isWorking) throw new Error("its already working");
    isWorking = true;
    let timeFun = setInterval(() => {
      timer++;
      console.log(time);
    }, 1);

    return timeFun;
  };

  this.stop = function () {
    if (!isWorking) throw new Error("its not working");
    isWorking = false;
    clearInterval(this.start);
  };

  this.duration = timer;
}

// let time = 0;
// const test = setInterval(() => {
//   time++;
//   console.log(time);
// }, 1000);

// const button = document.querySelector("button");
// button.addEventListener("click", () => clearInterval(test));
// console.log(test);

const st = new Stopwatch();
console.log(st);

st.start();
