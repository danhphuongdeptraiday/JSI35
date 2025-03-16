let h1 = document.querySelector("h1");

setTimeout(function () {
  h1.innerText = "Đây là data sau khi loading";
  //   console.log("hello my friend");
}, 3000);
h1.innerText = "Loading...";
// console.log("Danh Phuong");
// setTimeout(chức năng, thời gian để thực hiện chức năng(đơn vị là milisecond))

// for(let i = 0; i < 10; i++) {
//     setTimeout(function () {
//       console.log("Loading lần 1");
//     }, 2000);
// }

// let count = 0;
// // setInterval
// let timer;
// timer = setInterval(function () {
//   console.log("rendering");
//   if (count <= 5) {
//     console.log(count);
//     count = count + 1;
//     return;
//   }
// }, 2000);

console.log(count);

// clearInterval(timer);
