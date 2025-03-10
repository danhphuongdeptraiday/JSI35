let myButton = document.querySelector("#myButton");
// myButton.addEventListener( kiểu sự kiến muốn gán , gọi function cần thực thi )

// Cách viết 1
function printHello() {
  console.log("Hello");
}

// printHello()

// myButton.addEventListener("click", printHello);

// Cách viết 2
myButton.addEventListener("click", function () {
  console.log("Hello");
});
