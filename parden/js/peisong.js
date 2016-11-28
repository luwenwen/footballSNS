$(function(){
    $(".btn").on("tap",function(e){
       /* return false;
        e.preventDefault();*/
        var add=$(".content .add").val();
        var name=$(".content .name").val();
        var tel=$(".content .tel").val();

        if(add==""||name==""||tel==""){
            alert("用户信息填写不完整");
            $(this).attr("href","");
            return false;
        }else{
            var reg=/^1(3|4|5|7|8)\d{9}$/;
            if(!(reg.test(tel))){
                alert("手机号码有误，请重填");
                $(this).attr("href","");
                return false;
                //event.preventDefault();
            } else {
                console.log(11);
               var str = $(this).attr("data-href");
               $(this).attr("href",str);

            }
        }

    })
})