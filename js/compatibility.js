//1. 兼容Fire Fox的文本超出显示省略号
if($(".box-one").html().length>30){
    var str=$(".box-one").html().substring(0,30);
    $(".box-one").html(str+"...");
}
//