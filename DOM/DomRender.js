// let container = document.querySelector(".container");
// let h1 = document.createElement("h1");
// h1.innerText = "Nguyen Danh Phuong";

// let p = document.createElement("p");
// p.innerText = "Tay Ho, Ha Noi";

// let a = document.createElement("a");
// a.href = "https://www.youtube.com/@PhuongNguyen-zf8wt";
// a.innerText = "Bấm vô thử đi";
// a.target = "blank";

// container.appendChild(h1);
// container.appendChild(p);
// container.appendChild(a);

let list = [
  {
    text: "abc",
    number: 10,
  },
  {
    text: "def",
    number: 11,
  },

  {
    text: "huy",
    number: 12,
  },

  {
    text: "pop",
    number: 13,
  },
];

let container1 = document.querySelector(".container1");
// container1.innerHTML = `
//         <h1>Ha Anh</h1>
//       <p>Ba Dinh</p>
//       <a href="https://www.youtube.com/@PhuongNguyen-zf8wt">ĐỪng bấm</a>
// `;
// container1.innerText = "<i>ksjndbfksbdfkb</i>";

for (let i = 0; i < list.length; i++) {
  let div = document.createElement("div");
  div.className = "card1"
  div.innerHTML = `
    <h2>${list[i].text}</h2>
    <p>${list[i].number}</p>
  `;

  container1.appendChild(div);
}
