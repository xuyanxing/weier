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
	/*登入切换---------------------*/
	$(".myordreNav_left").click(function(){
		$(".registerWarp").show();
		$(".cellPhone_warp").hide();
	})
	$(".myordreNav_right").click(function(){
		$(".registerWarp").hide();
		$(".cellPhone_warp").show();
	})
	
	
	
	
	var reg=/^[a-z0-9A-Z]{3,10}$/
	$("#mytextd").blur(function(){
		if(!reg.test($(this).val())){
			$(".text1").css("display","block")
		}else{
			$(".text1").css("display","none")
		}
	})
	var reg1=/^\w{6}$/;
	$("#pass").blur(function(){
		if(!reg1.test($(this).val())){
			$(".Pass1").css("display","block")
		}else{
			$(".Pass1").css("display","none")
		}
	})
	
	$("#enterBtn").click(function(){
		var mytextdval=$("#mytextd").val();
		var callphone=$("#texted").val();
		var passed=$("#pass").val();
		var cookiemytextd=getCookie("username");
		var cookiepass=getCookie("pass");
		console.log(passed)
		if(mytextdval!=cookiemytextd){
			alert("用户名不存在")
		}else if(passed!=cookiepass){
			alert("密码错误")
		}else{
			alert("登录成功");
			window.location.href="mainContent.html"
		}
	})
	
	var reg2=/^1[3|5|7|8]\d{9}$/;
	$("#texted").blur(function(){
		if(!reg2.test($(this).val())){
			$(".texted1").css("display","block")
		}else{
			$(".texted1").css("display","none")
		}
	})
	
	var codes="";
	function makecode(){
		codes='';
		var arr=['a','b','c','d','e','f','g','h','i','j','k','l','o','1','2','3','4','5','6','7','8','0','9']
		for(var i=0;i<4;i++){
			var index=Math.floor(Math.random()*arr.length);
			codes+=arr[index];
		}
		return codes;
	}
	var initcode=makecode();
	$(".textCode").html(initcode);
	$(".textCode").click(function(){
		var changecode=makecode();
		$(".textCode").html(changecode);
	})
	$("#text").blur(function(){
		if($("#text").val()==""){
			$(this).html("请输入验证码")
			$(".text2").css("display","block")
		}else if($("#text").val().toLocaleLowerCase()==codes.toLocaleLowerCase()){
			$(".text2").css("display","none")
		}
	})
	var reg5=/^[0-9]\d{6}$/;
	$("#mytexts").blur(function(){
		if(!reg5.test($(this).val())){
			$(".mytexts5").css("display","block")
		}else{
			$(".mytexts5").css("display","none")
		}
	})
	$("#mybuttons").click(function(){
		var textd=$("#text").val();
		var code=$(".textCode").html();
		var mytex=$("#texted").val();
		var cookephone=getCookie("phone");
		if(mytex!=cookephone){
			alert("手机用户不存在，请从新注册登录")
		}else if(textd!=code){
			alert("验证码不正确");
		}else{
			window.location.href="mainContent.html";
		}
	})
})