// Hàm prompt: Hiện ra 1 ô input để khai báo dữ liệu

// Nếu mà chỉ 2 kết quả xảy ra thì ta chỉ cần dùng if và else

// if ()

/**
 * if (dieu kienj) {
 *      Chỗ này được thực thi khi điều kiện đúng
 * } else {
 *      Chỗ này được thực thi khi điều kiện sai
 * }
 */

/**
 * if (điều kiện 1) {
 *      Chỗ này được thực thi khi điều kiện 1 đúng
 * } else if (điều kiện 2) {
 *      Chỗ này được thực thi khi điều kiện 2 đúng
 * } else if (điều kiện 3) {
 *      Chỗ này được thực thi khi điều kiện 3 đúng
 * } else {
 *      Chạy khi không đúng điều kiện nào bên trên
 * }
 */
let ten_nyc = "Trang";

if (ten_nyc == "Trang") {
  console.log("Người yêu cũ thứ 1");
} else if (ten_nyc == "Thảo") {
  console.log("Người yêu cũ thứ 2");
} else if (ten_nyc == "Nhi") {
  console.log("Người yêu cũ thứ 3");
} else {
  console.log("Chưa yêu ai tên như này");
}

// Bước 1:

// tạo ra 2 biến:
let input_username = "phuong";
let input_password = "123123";

// Bước 2:
let my_profile = {
  username: "phuong",
  password: "123123",
  list_favorite: ["Bún chả", "Cơm rang", "Hải sản"]
};
// Bước 3:

if (
  input_username !== my_profile.username &&
  input_password !== my_profile.password
) {
  alert("Cả 2 đều sai");
} else if (
  input_username === my_profile.username &&
  input_password === my_profile.password
) {
  alert("Đăng nhập thành công");
} else if (input_username !== my_profile.username) {
  alert("Sai tên đăng nhập");
} else if (
  input_password !== my_profile.password &&
  input_username === my_profile.username
) {
  alert("Sai mật khẩu");
}
