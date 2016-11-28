$(function(){
    //点击添加高亮
    $(".left li").click(function(){
        $(this).addClass("bg").siblings().removeClass();
    })
    //显示购物数量
    $(".list dl").on("tap",function(){
        $(this).find(".buy").show();
    })

    //增加减少
    //加
    $(".plus").on("tap",function(){
        var num=Number($(this).prev().html());
        $(this).prev().html(num+1);
        $(".footer").show();
        add();
    })
    //减
    $(".minus").on("tap",function(){
        var num=Number($(this).next().html());
        if(num>0){

            $(this).next().html(num-1);
        }else{
            num=0;
        }
        add();

    })
    function add(){

        var num = 0,zong = 0;
        $(".list strong").each(function(i,v){
            //console.log(v);
            num += $(v).html()*1;
            var dan = $(v).parent().prev().find(".dan").html()*1;
            zong += ($(v).html()*1)*dan;
        });
        console.log(num);
        $(".footer span").html(num);

        $(".footer b").html("共￥"+zong+"元");
    }


    //选好了
    $(".footer a").click(function(){
        $(this).parent().hide();
    })

})