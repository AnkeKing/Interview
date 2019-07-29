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
// Foo.getName = function () { alert(2) };//静态方法
// Foo.prototype.getName = function () { alert(3) };//实例方法 要通过new调用
// var getName = function () { alert(4) };//全局方法
// function getName() { alert(5) };//全局方法
//请写出一下输出结果
// Foo.getName();  //2
// getName();      //4
// console.log("----前",this)
// Foo().getName();//1
// console.log("----后",this)
// getName();
// new Foo.getName();
// new Foo.getName();
// new new Foo().getName();
//删除数组内容
// var arr=[1,2,3];
// delete arr[2];
// console.log(arr);
//10.继承
// function Animal(name){
//   this.name=name||"狸狗";
//   this.arr=[1];
// }
// function Child(){
//   Animal.call(this)//继承属性
// }
// Child.__proto__=new Animal();
// console.log(".....",Child.constructor);
// Function.prototype.xxx="....";//构造函数的__proto__指向Function的prototype
// Object.prototype. xxx="====";//构造函数的prototype的__proto__指向Object的prototype
// Child.prototype=Object.create(Animal.prototype);//创建一个中间对象 继承方法 
// //解决了constructor指向父类 分不清实例是由子类创建还是父类 子类和父类原型对象的隔离
// Child.prototype.constructor=Child;//修复constructor指向
// var c1=new Child();
// var c2=new Child();
// c1.arr.push(2);
// console.log(c1,c2)

//11.
// function Parent() {
//   this.a = 1;
//   this.b = [1, 2, this.a];
//   this.c = { demo: 5 };
//   this.show = function () {
//     console.log(this.a, this.b, this.c.demo);
//   }
// }
// function Child() {
//   this.a = 2;
//   this.change = function () {
//     this.b.push(this.a);
//     this.a = this.b.length;
//     this.c.demo = this.a++;
//     console.log("b.length",this.b.length,"a++",this.c.demo)
//   }
// }
// Child.prototype = new Parent();
// var parent = new Parent();
// var child1 = new Child();
// var child2 = new Child();
// child1.a = 11;
// child2.a = 12;
// parent.show();//1 [1,2,1] 5
// child1.show();//11 [1,2,1] 5  show中的this指向Parent
// child2.show();//12 [1,2,1] 5
// child1.change();//b: [1,2,1,11]  a:4   c:5
// child2.change();//b: [1,2,1,11,12]  a:5   c:6
// parent.show();//1 [1,2,1,5]  5   
// child1.show();//1 [1,2,1,11,12]  5
// child2.show();//1 [1,2,1,11,12]  5

//12.
// var F = function () {}
// Object.prototype.a = function () {}
// Function.prototype.b = function () {}

// var f = new F();
// console.log("f",f);
// console.log("F",F.__proto__===Function.prototype)
//13.数组去重
// var arr = ([1, [1, 2, 3, ["1", "2", "6",["1", "4", "3",["6", "2", "3"]]], 4], 5, 6]).flat(5);
// console.log("----", arr);
// var arr2 = [];
// for (var a = 0; a < arr.length; a++) {
//   for(var b=1;b<arr.length-1;b++){
//     if (arr[a] != arr[b]) {
//       console.log("a",arr[a],"a+1",arr[b],arr[a] != arr[b]);
//       arr2.push(arr[a]);
//     }
//   }
// }
// // function FOR(arr){
// //   for()
// // }
// console.log("arr2","2"!="2");


//14.call
// Function.prototype.mycall = function (context) {
//     if (typeof this != 'function') {
//         throw new TypeError("no function");
//     }
//     //context为第一个传入的参数obj   this为调用mycall函数的对象
//     context = context || window;//如果context是undefined则为window
//     context.fn = this;//把add函数添加到obj对象上   这样add内的this就指向obj
//     var arg = [...arguments].slice(1);//用es6的剩余运算符把arguments伪数组转为真数组，
//     //并截取除了第一个对象之后的参数
//     //因为伪数组不能调用数组的方法
//     var result = context.fn(...arg); //这里就等于obj.add(6,1)
//     //用一个变量保存执行add函数后的结果
//     delete context.fn;          //因为这个fn对象并没有用所以删除
//     return result;
// }
// var obj = {
//     a: 1,
//     b: 3
// }
// function add(c, d) {
//     console.log("[...arguments]", [...arguments])
//     console.log("add结果", this.a + this.b + c + d);
// }
// add.mycall(obj, 6, 1);

//15.apply
// Function.prototype.myapply=function(context){
//     if(typeof this!="function"){
//         throw new TypeError("no function");
//     }
//     context=context||window;
//     context.fn=this;
// var arg=arguments[1];
// var result;
//     if(arg){
//         result=context.fn(arg);
//     }else{
//         result=context.fn();
//     }
//     delete context.fn;
//     return result;
// }
// var obj = {
//     a: 1,
//     b: 3
// }
// function add(arr) {
//     console.log("arguments",[...arguments])
//     console.log("add结果",this.a + this.b + arr[0] +arr[1]);
// }
// add.myapply(obj,[9,7])
//16.bind
// Function.prototype.mybind = function (context) {
//     if (typeof this != "function") {
//         throw new TypeError("no function");
//     }
//     context = context || window;
//     var _this = this;
//     var arg = [...arguments].slice(1);
//     return function F() {
//         if (_this instanceof F) {
//             return new _this(...arg, ...arguments);
//         } else {
//             return _this.apply(context, arg.concat(...arguments))
//         }
//     }

// }
// var obj = {
//     a: 1,
//     b: 3
// }
// function add(c, d) {
//     console.log("arguments", [...arguments])
//     console.log("add结果", this.a + this.b + c + d);
// }
// add.mybind(obj, 4)(99);
//17.instanceof
// function instanceOf(left,right){
//     let leftValue=left.__proto__;
//     let rightValue=right.prototype;
//     console.log("leftValue",leftValue,"rightValue",rightValue);
//     while(true){
//         if(leftValue===null){
//             return false;
//         }
//         if(leftValue===rightValue){
//             return true
//         }
//         leftValue=leftValue.__proto__;
//     }
// }
// function Person(){};
// var obj=new Person();
// console.log("结果",instanceOf(obj,Person))
//18.promise
// var data=new Promise((resolve,reject)=>{
//     reject("sucess")
// }).then(res=>{
//     console.log("res",res);
// }).catch(rej=>{
//     console.log("rej",rej);
// })
//17.promise实现红灯绿灯
// var light=function(timmer,cb){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             cb();
//             resolve();
//         },timmer)
//     })
// }
// var step=function(){
//     Promise.resolve().then(function(){
//         return light(3000,red);
//     }).then(function(){
//         return light(2000,green);
//     }).then(function(){
//         return light(1000,yellow);
//     }).then(function(){
//         return step();
//     })
// }
// step();
// function red(){
//     console.log("red");
// }
// function green(){
//     console.log("green");
// }
// function yellow(){
//     console.log("yellow");
// }
//18.深拷贝
// function mydeep(obj){
//     var arr=obj instanceof Array?[]:{}
//     for(var i in obj){
//         console.log(i)
//         if(obj.hasOwnProperty(i)){
//             arr[i]=typeof obj[i]==="Object"?mydeep(obj[i]):obj[i];
//         }
//     }
//     return arr;
// }
// var obj={name:"泽琛",uu:[1,5,2,1]}
// var newObj=mydeep(obj);
// console.log(newObj);
setTimeout(function(){
    console.log(arguments);
    // setTimeout(arguments.callee,500)
},500)