$(function(){
	$("#header").load("head.html",function(){
		$(".CategoryShow").mouseenter(function(){
			$(".menu").show();
		})
		$(".CategoryShow").mouseleave(function(){
			$(".menu").hide();
		})
		$(".menu").mouseout(function(){
			$(this).hide();
		})
		$(".menu li").each(function(index,ele){
     	 $(".menu li").mouseover(function(index,ele){
     	 	$(".menu").show();
     	 	$(this).addClass("on");
     	 	var index=$(this).index();
     	 	$(".details").css("display","block");
     	 	$(".details>div").eq(index).show().siblings().hide();
     	 })
     	 $(".menu li").mouseout(function(index,ele){
     	 	$(this).removeClass("on");
     	 	$(".menu").show();
     	 	$(".details>div").each(function(index,ele){
     	 		$(".details>div").hide();
     	 	})
     	 	
     	 })
     	 $(".details>div").mousemove(function(index,ele){
     	 	$(this).show();
     	 	$(".menu").show();
     	 })
     	 $(".details>div").mouseout(function(index,ele){
     	 	$(this).hide();
     	 	$(".menu").css("display","none");
     	 })
    })
		 $(".menu li").each(function(){
		 	$(".menu>li").mouseleave(function(){
		 		$(".menu").css("display","none")
		 	})
		 })
	})
	$("#footer").load("foot.html",function(){
		
	})
	
	var reg=/^[a-z0-9A-Z]{3,10}$/
	$("#username").blur(function(){
		if(!reg.test($(this).val())){
			$(this).next().show();
			$(".mistack1").css("display","block")
		}else{
			$(this).next().hide();
			$(".mistack1").css("display","none")
		}
	})
	var reg1=/^1[3|5|7|8]\d{9}$/;
	$("#cellphone").blur(function(){
		if(!reg1.test($(this).val())){
			$(this).next().show();
			$(".mistack2").css("display","block")
		}else{
			$(this).next().hide();
			$(".mistack2").css("display","none")
		}
	})
	var reg2=/^[0-9]\d{6}$/;
	$("#note").blur(function(){
		if(!reg2.test($(this).val())){
			$(this).next().show();
			$(".mistack3").css("display","block")
		}else{
			$(this).next().show();
			$(".mistack3").css("display","none")
		}
	})
	var reg3=/^\w{6}$/;
	$("#passCode").blur(function(){
		if(!reg3.test($(this).val())){
			$(this).next().show();
			$(".mistack4").css("display","block")
		}else{
			$(this).next().hide();
			$(".mistack4").css("display","none")
		}
	})
	$("#confirmCode").blur(function(){
		if($(this).val()!=$("#passCode").val()){
			$(this).next().show();
			$(".mistack5").css("display","block")
		}else{
			$(this).next().hide();
			$(".mistack5").css("display","none")
		}
	})
	$("#submits").click(function(){
		if(reg.test($("#username").val())&&reg1.test($("#cellphone").val())&&reg3.test($("#passCode").val())&&$("#passCode").val()==$("#confirmCode").val()){
	        setCookie("username",$("#username").val(),55);
	        setCookie("pass",$("#passCode").val(),55);
	        setCookie("phone",$("#cellphone").val(),55);
	        alert("注册成功")
	        window.location.href="myorder.html";
	   }else if($("#username").val("")&&$("#cellphone").val("")&&$("#passCode").val("")){
	   	alert("请把相关信息填写完整")
	   }
	})
})