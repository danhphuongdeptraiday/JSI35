// Lấy 1 thẻ thông qua id
// let h1 = document.getElementById("myName");

// Cách để truy cập nội dung của 1 thẻ:
// tên_thẻ.innerText, tên_thẻ.innerHTML
// console.log('Nội dung của thẻ là: '+ h1.innerText);

// Thay đổi nội dung của 1 thẻ thông qua dom
// tên_thẻ.innerText = "giá trị mới"

// thày đổi màu nền của từng box
// Cách 1: trỏ vào từng class box1, box2, box3 để đổi màu sắc
// let box1 = document.getElementsByClassName("box1");
// let box2 = document.getElementsByClassName("box2");
// let box3 = document.getElementsByClassName("box3");
// box1[0].style.backgroundColor = "red";
// box2[0].style.backgroundColor = "red";
// ...

// Cách 2: Chỉ dụng "box" để màu nền của của từng box
// let box = document.getElementsByClassName("box");
// box[0].style.backgroundColor = "red";
// box[1].style.backgroundColor = "red";
// box[2].style.backgroundColor = "red";

// ...

// console.log(box);
// console.log(box1);
// console.log(box2);
// console.log(box3);

let list_box = document.querySelectorAll(".box div");
// console.log(list_box);
list_box[0].style.backgroundColor = "red";