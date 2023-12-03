//câu 1
let student = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"],
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"],
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
];
let ageQuestion = prompt("bro nhiu tuổi ?");
for (var i = 0; i < student.length; i++) {
  if (ageQuestion == student[i].age) {
    Found = true;
    console.log(`${student[i].name} có ${student[i].course}`);
  }
}
if (Found){
    console.log(" đấy thấy chưa");
}
let CInput = prompt("khóa học cần tìm ? ");
let FoundCourse = false ;

for(var j=0;j<student.length;j++){
    if (student[i].course.includes(CInput)) {
        FoundCourse = true;
        console.log(`${student[i].name} đang học khóa học ${CInput}`);
    }
}
if(!FoundCourse){
    console.log("đ tìm thấy");
}
//câu 2 
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]
console.log("Các số lớn hơn 3 trong arr1:");
arr1.forEach(function (num) {
    if (num > 3) {
        console.log(num);
    }
});
console.log("Các số lớn hơn 3 trong arr2:");
arr2.forEach(function (num) {
    if (num > 3) {
        console.log(num);
    }
});
let mergedArr1 = arr1.concat(arr2);
console.log("Mảng sau khi ghép arr1 và arr2:", mergedArr1);
let mergedArr2 = arr1.concat(arr2).sort((a, b) => a - b);
console.log("Mảng sau khi ghép arr1 và arr2 và sắp xếp:", mergedArr2);