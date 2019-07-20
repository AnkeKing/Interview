//1. 兼容Fire Fox的文本超出显示省略号
// if ($(".box-one").html().length > 30) {
//     var str = $(".box-one").html().substring(0, 30);
//     $(".box-one").html(str + "...");
// }
//2.深拷贝
// var obj = {
//     name: "Cindy",
//     age: 19
// }
// var arr = [1, 1, 2, 3];
// function fun() {
//     return "fun"
// }
// console.log(typeof arr.splice == "function");
//3.实现一个圆形的可点击区域
// document.onclick = function (e) {
//     var r = 50;  //圆的半径
//     var x1 = 300, y1 = 300;
//     var x2 = e.clientX,
//         y2 = e.clientY;
//     var len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
//     //Math.sqrt() 方法可返回一个数的平方根。
//     //Math.pow() 方法可以计算一个数的任意次根。
//     console.log("???",len);
//     if (len <= r) {
//         console.log("Inner");
//     } else {
//         console.log("Outer");
//     }
// }
//4.闭包
// function w(a){
//     var sum=0;
//     var all=0;
//     return function (b){
//         sum=a+b;
//         return function(c){
//             all=sum*c;
//             console.log("all",all);
//         }
//     }
// }
// w(1)(5)(9);
//5.event loop
// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end') 
// }
// async1()

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function() {
//     console.log('promise1')
//   })
//   .then(function() {
//     console.log('promise2')
//   })

// console.log('script end')
//6.防抖函数
// var moveDiv = document.getElementById("move-div");
// var count = 0;
// moveDiv.innerHTML = count;
// function updateCount() {
//   moveDiv.innerHTML = count++;
// }
// function debounce(fn, wait=500) {
//   return function (...args) {
//     console.log("args",args,"this",this);
//     fn.apply(this, args);
//   }
// }
// var action=debounce(updateCount)
// moveDiv.addEventListener("mousemove", action);


//7.apply 
// function Person(){
//   this.name="person"
//   this.eat=function(food){
//     console.log("吃",food)
//   }
// }
// function stu(args){
//   console.log("this",this)
//   // Person.call(this,args);
// }
// var stuu=new stu();
// // stuu.eat("火锅")
// console.log("stuu",stuu);

//8.Object.defineProperty
// var book={
//   _year:2004,
//   edition:1
// }
// // var book={}
// Object.defineProperty(book,"_year",{
//   // configurable:true,
//   // writable:true,
//   // value:2004
//   get:function(){
//     return this._year;
//   },
//   set:function(newValue){
//     if(newValue>2019){
//       this.edition=2;
//     }
//   }
// })
// book.year=2029;
// console.log("---",book);
//9.原型对象 输出结果
// function Foo() {
//   getName = function () { alert(1) };
//   return this;
// }
// Foo.getName = function () { alert(2) };
// Foo.prototype.getName = function () { alert(3) };
// var getName = function () { alert(4) };
// function getName() { alert(5) };
// //请写出一下输出结果
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo.getName();
// new new Foo().getName();
//删除数组内容
// var arr=[1,2,3];
// delete arr[2];
// console.log(arr);
//10.继承
function Animal(name){
  this.name=name;
  
}
Animal.prototype={
  sayName:function(word){
    console.log(this,word);
  }
}
var dog=new Animal("狗狗");
var cat=new Animal("猫猫");
dog.name="旺旺"
console.log("dog",dog.__proto__);
console.log("dog",dog.__proto__);
// Animal("猫猫").sayName();//this指向全局 name为undefined
