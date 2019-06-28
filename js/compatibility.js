//1. 兼容Fire Fox的文本超出显示省略号
if($(".box-one").html().length>30){
    var str=$(".box-one").html().substring(0,30);
    $(".box-one").html(str+"...");
}
//2.深拷贝
var obj={
    name:"Cindy",
    age:19
}
var arr=[1,1,2,3];
function fun(){
    return "fun"
}
console.log(typeof arr.splice=="function");