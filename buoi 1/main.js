// //câu 1
// let student = [{
//     name: "NVA",
//     age: 16,
//     course: ["mindX 01", "mindX 02", "mindX 03"]
// },
// {
//     name: "NVB",
//     age: 18,
//     course: ["mindX 01", "mindX 02", "mindX 04"]
// },
// {
//     name: "NVC",
//     age: 17,
//     course: ["mindX 01", "mindX 03", "mindX 04"]
// },
// {
//     name: "NVD",
//     age: 15,
//     course: ["mindX 01", "mindX 02", "mindX 03"]
// }
// ];

// let nhaptuoi = prompt("Độ tuổi cần tìm: ");
// let nhaplop = prompt("Nhập lớp cần tìm");

// let timtuoi = false;
// let timlop = false;

// for (let person of student) {
// if (person.age == parseInt(nhaptuoi)) {
//     console.log(person.name)
//     timtuoi = true;
// }

// if (person.course.includes(nhaplop)) {
//     console.log(person.name)
//     timlop = true;
// }
// }
//câu 3
// const link = "https://jsonplaceholder.typicode.com/photos"

// async function fetchImage() {
//     try {
//         const response = await fetch(link);
//         let data = await response.json();

//         let newData = data.slice(0, 5)

//         newData.forEach(item => {
//             let image = document.createElement('img')
//             image.src = item.thumbnailUrl
//             document.body.appendChild(image)
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }

// fetchImage()
// const arr =[4,5,6]
const arr1 =[1,2,3]
// let max = Math.max(...arr)
// const arrClone = [...arr,7]
// const concat = [...arr ,0 , ...arr1]
// console.log(concat);
// const arr2 = arr1.map((item) => {
//     return item * 2 ;
// })
// console.log(arr2);
// // console.log(arr1);
// const arr2 = arr1.filter((item) => {
//     return item % 2 === 0;
// })
// console.log(arr2);
// console.log(arr1 );