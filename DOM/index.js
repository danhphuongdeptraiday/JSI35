// Vòng for dùng để thực thi 1 hành động lặp đi lặp lại nhiều lần

/**
 * for( điểm bắt đầu ; điều kiện ; bước nhảy){}
 */

let tong = 0;

let s = "";
s = s + 10 + " "; // s = 10 // s = "10 "
s = s + 20; // s = "10 20 "
s = s + 30; // s = "102030"

// let s = "10 20 30 40 50"

let array = [];

for (let i = 0; i < 1000; i++) {
  if (i % 17 == 0 && (i - 2) % 3 == 0 && i < 500) {
    tong = tong + 1;
    s = s + i + " ";
    array.push(i);
  }
}

// array.length = 10

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  t = t + array[i]
}

// let array = [17, 68, 119, 170, 221, 272, 323, 374, 425, 476]

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);

let t = 0
t = t + array[0] // => t = 17
t = t + array[1]