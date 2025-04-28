// for loop
// 
// // calculate sum of 1 to  5
// let sum=0;
// let n = 999876;
// for(let i=1;i<=n;i++){
//     sum =sum+i;
// }
// console.log("sum =", sum);
// console.log("code has ended");

// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }

// while loop use
// let i=20;
// while(i<=5){
//         console.log("i=",i);
//         i++;
//     }
// do while loop use
//     let i=2;
// do{
//         console.log("i=",i);
//         i++;
//     } while (i<=5)

// for of loop use
// let str ="zuniverse";
// let length = 0;
// for(let i of str){
//     console.log("i=",i);
//     length++;
// }
// console.log(" string length=",length);

// for in loop use

let student = {
    name: "kim lee ho",
    age: 25,
    cgpa: 3.89,
    isPass: true,
};

for(let key in student){
    console.log("key=",key, "value=", student[key]);
}



