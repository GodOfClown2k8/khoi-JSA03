//bai 2
let arr = [1, 3, 2, 5, 7, 4, 5, 9, 12, 18, 17];

// Tìm tổng của mảng
let tong = 0
for(let i = 0;i<arr.length;i++){
    
    tong += arr[i];
}
// Tìm phần tử lớn nhất và nhỏ nhất
let lon_nhat = Math.max(...arr);
let nho_nhat = Math.min(...arr);
let maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        }
    
}
let minNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber) {
        minNumber = arr[i];
        }
    
}
console.log("Phần tử lớn nhất là:", lon_nhat);
console.log("Phần tử nhỏ nhất là:", nho_nhat);

// Đảo ngược mảng
let dao_nguoc = arr.reverse();
console.log("Mảng sau khi đảo ngược là:", dao_nguoc);

// Loại bỏ phần tử trùng nhau
let loai_bo = [...new Set(arr)];
console.log("Mảng sau khi loại bỏ phần tử trùng nhau là:", loai_bo);

// Tìm số lẻ/chẵn
let so_le = arr.filter(x => x % 2 !== 0);
let so_chan = arr.filter(x => x % 2 === 0);
console.log("Các số lẻ trong mảng là:", so_le);
console.log("Các số chẵn trong mảng là:", so_chan);

//bai 3
// Tạo một object đại diện cho một người
let person = {
    ten: "Nguyen Van A",
    tuoi: 30,
    dia_chi: "Hanoi"
};

// Viết một hàm nhận vào một object và trả về thông tin như "Tên: [tên], Tuổi: [tuổi]"
function inThongTin(person) {
    return "Tên: " + person.ten + ", Tuổi: " + person.tuoi;
}

console.log(inThongTin(person));

// Viết hàm để thêm một thuộc tính mới vào một object
function themThuocTinh(person, key, value) {
    person[key] = value;
}

themThuocTinh(person, "nghe_nghiep", "Developer");
console.log(person);

// Hàm để xóa một thuộc tính từ object
function xoaThuocTinh(person, key) {
    delete person[key];
}

xoaThuocTinh(person, "nghe_nghiep");
console.log(person);

// Tạo một object đại diện cho một quốc gia
let country = {
    ten: "Vietnam",
    dan_so: 100000000,
    thu_do: {
        ten: "Hanoi",
        dan_so: 8000000
    }
};

// Viết hàm để liệt kê tất cả các thuộc tính của một object quốc gia
function lietKeThuocTinh(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
    
}

lietKeThuocTinh(country);

 