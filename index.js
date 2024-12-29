// // let a=()=> console.log("Hello World");
// // a();

// let a=[1,2,3,4,5,7];
// let b=[...a];
// b[2]=10;
// console.log(b);
// console.log(a);

// let c=1;
// function x(){
//     c=2;
//     console.log(c);
// }
// x();
// console.log(c);

// function sp(c){
//     console.log(values);
// }
// sp(1,2,3,4);

// let a=[1,2,3,4,5,7];
// let [b,c,x,...y]=a;
// console.log(y);

// function h(f){
//     setTimeout(() => {
//         console.log("dai");
//         f();
//     }, 2000);
// }
// function f(){
//     console.log("siva");
// }
// h(f);

//callback hell
// function atted(callback){
//     console.log("Tell attendence");
//     callback();
// }
// function lunch(callback){
//     console.log("Eat lunch");
//     callback();
// }
// function home(callback){
//     console.log("returned home");
//     callback();
// }
// console.log("Over of the day");
// atted(()=>{
//     lunch(()=>{
//         home(() => {
//         });
//     });
// });

//promise chaining
// function atted(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let attedap=true;
//             if(attedap)
//                 resolve("attendence marked");
//             else
//                 reject("attendence not marked");
//         },2000);
//     })
// };
// function lunch(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let lun=true;
//             if(lun)
//                 resolve("Had lunch");
//             else
//                 reject("Had no lunch");
//         },1500);
//     })
// };
// function home(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let ho=true;
//             if(ho)
//                 resolve("Returned home");
//             else
//                 reject("Not returned home");
//         },1000);
//     })
// };

// atted()
//     .then((res) => {
//         console.log(res);
//         return lunch();
//     })
//     .then((res) => {
//         console.log(res);
//         return home();
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

//callback 
function file1(callback){
    setTimeout(() => {
        console.log(`File ${a} is being processed  `);
        file2();
    }, 2000);
}
function file2(){
    setTimeout(() => {
        console.log(`file ${a} is downloading`);
        // callback();
    }, 500);
}
let a="abc";
file1(a,file2);
setTimeout(() => {
    console.log('File ',a +' is downloaded');
}, 3000);