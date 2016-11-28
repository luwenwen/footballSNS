$(function(){
    $(".box2").on("click","li",function(){
        $(this).addClass("hightlight").siblings().removeClass();
    })

    //菜单显示
    $(".content1>.box1").on("touchstart",function(){

        $(this).animate({"height":"180px"}).siblings().animate({"height":"85px"});
    })

    //加入购物车

    //加
    $(".plus").on("touchstart",function(){
        var num=Number($(this).prev().html());
        $(this).prev().html(num+1);
    })
    //减
    $(".minus").on("touchstart",function(){
        var num=Number($(this).next().html());
        if(num>0){

            $(this).next().html(num-1);
        }else{
            num=0;
        }

    })

    //tab切换
    //热卖餐厅
    $(".hot_restaurant").on("touchstart",function(){
        $(this).children().css("color","#676FFE");
        $(this).children().css({"background":"url('imgs/hot2_2.jpg') no-repeat left","background-size":"16.5px 17px"})
        $(this).prev().prev().children().css({"color":"#6E8188","background":"url('imgs/hot1_1.jpg') no-repeat left","background-size":"16.5px 17px"})
        $(".box2 .one").hide();
        $(".box2 .two").show();
        $(".content1").hide();
        $(".content2").show();

    })

    //热卖套餐
    $(".hot_setMenu").on("touchstart",function(){
        $(this).children().css("color","#676FFE");
        $(this).children().css({"background":"url('imgs/hot.jpg') no-repeat left","background-size":"16.5px 17px"})
        $(this).next().next().children().css({"color":"#6E8188","background":"url('imgs/hot2.jpg') no-repeat left","background-size":"16.5px 17px"})
        $(".box2 .one").show();
        $(".box2 .two").hide();
        $(".content1").show();
        $(".content2").hide();
    })
})