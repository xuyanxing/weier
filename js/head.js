$(function(){
	$(".Info li:eq(2)").mouseenter(function(){
		$(this).css("background","white")
		$(".pullDown").css({display:"block",background:"white"})
		$(".Info i").addClass("on")
	})
	$(".Info li:eq(2)").mouseleave(function(){
		$(this).css("background","#fafafa");
		$(".pullDown").css("display","none");
		$(".Info i").removeClass("on")
	})
	$(".bycar").mouseenter(function(){
		$(this).css("background","white")
		$(".bycar a").css("color","orange");
		$(".bycar span").css("color","orange");
		$(".bycar div").slideDown(500);
	})
	$(".bycar").mouseleave(function(){
		$(this).css("background","orange")
		$(".bycar a").css("color","white");
		$(".bycar span").css("color","white");
		$(".bycar div").slideUp(500);
	})
	$("#btn").click(function(){
		var x=$("#mytext").val();
		if(x==""){
			alert("请输入搜索关键字")
		}
	})
	
	/*首页--中切换有问题----------------*/

     $(".menu li").each(function(index,ele){
     	 $(".menu li").mouseover(function(index,ele){
     	 	$(this).addClass("on");
     	 	var index=$(this).index();
     	 	$(".details").css("display","block");
     	 	$(".details>div").eq(index).show().siblings().hide();
     	 })
     	 $(".menu li").mouseout(function(index,ele){
     	 	$(this).removeClass("on");
     	 	$(".details>div").each(function(index,ele){
     	 		$(".details>div").hide();
     	 	})
     	 })
     	 $(".details>div").mousemove(function(index,ele){
     	 	$(this).show();
     	 })
     	 $(".details>div").mouseout(function(index,ele){
     	 	$(this).hide();
     	 })
     })
	/*右边的导航----------------------------*/
	$(".quickArea").mouseenter(function(){
		$(".quickArea>a").css("background","#4BAE00")
		$(".please").css("display","block")
	})
	$(".quickArea").mouseleave(function(){
		$(".quickArea>a").css("background","")
		$(".please").css("display","none")
	});
	$(".saidebrTabs").mouseenter(function(){
		$(".tabsMask").css("display","block");
		$(".saidebrTabs span").css({color:"red",background:"white"})
	})
	$(".saidebrTabs").mouseleave(function(){
		$(".tabsMask").css("display","none");
		$(".saidebrTabs span").css({color:"white",background:"#1ac14b"})
	})
	$(".history").mouseenter(function(){
		$(".history>a").css("background","#4BAE00")
		$(".browsing").css("display","block")
	})
	$(".history").mouseleave(function(){
		$(".history>a").css("background","")
		$(".browsing").css("display","none")
	})
	$(".collect").mouseenter(function(){
		$(".collect>a").css("background","#4BAE00");
		$(".favorite").css("display","block")
	})
	$(".collect").mouseleave(function(){
		$(".collect>a").css("background","");
		$(".favorite").css("display","none")
	})
	$(".property").mouseenter(function(){
		$(".property>a").css("background","#4BAE00");
		$(".myMoney").css("display","block");
	})
	$(".property").mouseleave(function(){
		$(".property>a").css("background","");
		$(".myMoney").css("display","none");
	})
	$(".rightbottomQQ").mouseenter(function(){
		$(".rightbottomQQ>a").css("background","#4BAE00");
		$(".myQQ").css("display","block");
	})
	$(".rightbottomQQ").mouseleave(function(){
		$(".rightbottomQQ>a").css("background","");
		$(".myQQ").css("display","none");
	})
	$(".rightbottomCode").mouseenter(function(){
		$(".rightbottomCode>a").css("background","#4BAE00");
		$(".myCode").css("display","block");
	})
	$(".rightbottomCode").mouseleave(function(){
		$(".rightbottomCode>a").css("background","");
		$(".myCode").css("display","none");
	})
	$(".saidebrTabs").click(function(){
		window.location.href="bycart.html"
	})
	/*点击咨询--------------------------------国定底部*/
	$(".consulting").click(function(){
		$(".asking").css("display","block");
		$(this).hide();
	})
	$(".down").click(function(){
		$(".consulting").show();
		$(".asking").css("display","none")
	})
	$(".onlineBtn").click(function(){
		$("html,body").animate({scrollTop:"0px"},800);
	})
})
