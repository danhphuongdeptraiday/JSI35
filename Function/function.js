let a = 10;
let b = 20;

console.log(`a + b = ${a + b}`);
// console.log("a + b = " + (a + b));

// function có tham số
function chuc_nang(x, y) {
  console.log("a x b = " + x * y);
}

chuc_nang(3, 4);

// Function có return
function tra_ve(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("Tên 1: " + tra_ve("Phuong", "Nguyen"));

tra_ve("Phuong", "Nguyen");
tra_ve("Mai", "Le");
tra_ve("Frenkie", "Dang");

let array_member = [
  {
    name: "Phươnga",
    stt: 10,
  },

  {
    name: "Chiu",
    stt: 20,
  },

  {
    name: "Quan",
    stt: 30,
  },
];

// console.log("true");

// console.log("Phuong".includes("a"));

function check_include(array) {
  //   let count = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].name.includes("a") === true) {
  //       count = count + 1;
  //     }
  //   }
  //   if (count === array.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.includes("a") === false) {
      return false;
    }
  }

  return true;
}

console.log('Check Include "a" character: ' + check_include(array_member));

let big_array_number = [1, 20, 54, 39, 88, 3245, 99, 32, 87];



