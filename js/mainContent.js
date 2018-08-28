$(function(){
	$("#header").load("head.html",function(){
		
	})
	$("#footer").load("foot.html",function(){
		
	})
	var num=0;
	var timer=null;
	timer=setInterval(move,3000);
	function move(){
		num++;
		if(num>4){
			num=0;
		}
		$(".binnerBox div").eq(num).fadeIn().siblings().fadeOut();
		$(".binnerBtn li").eq(num).addClass("binnerActive").siblings().removeClass("binnerActive");
	}
	$(".binnerBtn li").click(function(){
		num=$(this).index();
		$("..binnerBox div").eq(num).fadeIn().siblings().fadeOut();
		$(".binnerBtn li").eq(num).addClass("binnerActive").siblings().removeClass("binnerActive");
	})
	$(".binnerWarp").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(move,3000);
	})
	/*精品推荐-------------------------------*/
	$.ajax({
		type:"get",
		url:"mainContent.json",
		async:true,
		success:function(res){
			var proarr=res.secondKill;
			var str="";
			$.each(proarr, function(index,ele) {
				str+='<li class="Complete" pid="'+ele.pid+'">'
					+'<a href=""><img  title="'+ele.titles+'" src="'+ele.imgsrc+'"/></a>'
					+'<div class="inforlook">'
					+'<p class="titles"><a href="">'+ele.name+'</a></p>'
					+'<div class="buyBtn"><font class="price">￥'+ele.price+'</font><span class="look"><a href="">去看看</a></span></div>'
					+'</div>'
				+'</li>'
			});
			$(".arrivalCon_warp").html(str);
			$(".Complete").click(function(){
				window.location.href="DetailPages.html?pid="+$(this).attr("pid");
			})
		}
	})
	$.ajax({
		type:"get",
		url:"mainContent.json",
		async:true,
		success:function(res){
			var proarr=res.seconded;
			var str="";
			$.each(proarr, function(index,ele) {
				str+='<li class="Complete2" pid="'+ele.pid+'">'
					+'<a href=""><img  title="'+ele.titles+'" src="'+ele.imgsrc+'"/></a>'
					+'<div class="inforlook">'
					+'<p class="titles"><a href="">'+ele.name+'</a></p>'
					+'<div class="buyBtn"><font class="price">￥'+ele.price+'</font><span class="look"><a href="">去看看</a></span></div>'
					+'</div>'
				+'</li>'
			});
			$(".arrivalCon_warp2").html(str);
			$(".Complete2").click(function(){
				window.location.href="DetailPages.html?pid="+$(this).attr("pid");
			})
		}
	})
	$.ajax({
		type:"get",
		url:"mainContent.json",
		async:true,
		success:function(res){
			var proarr=res.threes;
			var str="";
			$.each(proarr, function(index,ele) {
				str+='<li class="Complete3" pid="'+ele.pid+'">'
					+'<a href=""><img  title="'+ele.titles+'" src="'+ele.imgsrc+'"/></a>'
					+'<div class="inforlook">'
					+'<p class="titles"><a href="">'+ele.name+'</a></p>'
					+'<div class="buyBtn"><font class="price">￥'+ele.price+'</font><span class="look"><a href="">去看看</a></span></div>'
					+'</div>'
				+'</li>'
			});
			$(".arrivalCon_warp3").html(str)
			$(".Complete3").click(function(){
				window.location.href="DetailPages.html?pid="+$(this).attr("pid");
			})
		}
	})
	
	$(".newProduct_nav>li").mouseenter(function(){
		$(this).addClass("newArrival").siblings().removeClass("newArrival");
		var x=$(this).index();
		$(".productCon>div").eq(x).show().siblings().hide();
	})
	/*1F蛋糕分类--------------------------------------*/
	 $.ajax({
       	type:"get",
       	url:"mainContent.json",
       	async:true,
       	success:function(res){
       		console.log(res)
       		var proarr=res.seconds;
       		console.log(proarr);
       		var str="";
       		$.each(proarr, function(index,ele) {
       			str+='<li class="FloorMidOne" pid="'+ele.pid+'">'
					  +'<div class="cakeCon">'
					  +'<a href="###"><img src="'+ele.imgsrc+'"/></a>'
					  +'<div class="addToCart">'
					  +'<p class="titleColor"><a href="####">'+ele.name+'</a></p>'
					  +'<div class="buycartBtn"><font>￥'+ele.price+'</font><span class="addtoBag">加入购物车</span></div>'
					  +'</div>'
					  +'</div>'
					 +'</li>'
       		});
       		$(".fristFloorMid_warp").html(str);
       		$(".FloorMidOne").click(function(){
       			window.location.href="DetailPages.html?pid="+$(this).attr("pid");
       		})
       		 $(".FloorMidOne").hover(function(){
     	$(this).find(".titleColor>a").addClass("on");
     	$(this).find(".addtoBag").css("display","block")
     },function(){
     	$(this).find(".titleColor>a").removeClass("on");
     	$(this).find(".addtoBag").css("display","none")
     })
       	}
       })
$(".FloorRightChoose>a").hover(function(){
	$(this).css({background:"#ff6c00",color:"white"})
},function(){
	$(this).css({background:"white",color:"#ff6c00"})
})





    /*2F生日蛋糕--------------------------------*/
   $.ajax({
   	type:"get",
   	url:"mainContent.json",
   	async:true,
   	success:function(res){
   		var newarr=res.upperPart;
   		var newstr="";
   		$.each(newarr, function(index,ele) {
   			newstr+='<li pid='+ele.pid+'>'
					+'<a href=""><img src="'+ele.imgsrc+'"/></a>'
					+'<div class="nextPartCon">'
					+'<p class="titlesColor"><a href="">'+ele.name+'</a></p>'
					+'<div class="priceWarp"><span class="price">￥'+ele.price+'</span><span class="addCart"><a href="">加入购物车</a></span></div>'
					+'</div>'
					+'</li>'
   		});
   		$(".upperPart").html(newstr);
   		
   		$(".upperPart>li").hover(function(){
   	    $(this).find("p>a").addClass("on");
   	    $(this).find(".addCart").css("display","block")
   },function(){
   	    $(this).find("p>a").removeClass("on");
   	     $(this).find(".addCart").css("display","none");
   })
   	}
   });
   
   $.ajax({
   	type:"get",
   	url:"mainContent.json",
   	async:true,
   	success:function(res){
   		var newarrs=res.nextPart;
   		var newstrs="";
   		$.each(newarrs, function(index,ele) {
   			newstrs+='<li pid='+ele.pid+'>'
					 +'<a href=""><img src="'+ele.imgsrc+'"/></a>'
					 +'<div class="nextPartCon">'
					 +'<p class="titlesColor"><a href="">'+ele.name+'</a></p>'
					 +'<div class="priceWarp"><span class="price">￥'+ele.price+'</span><span class="addCart"><a href="">加入购物车</a></span></div>'
					 +'</div>'
					 +'</li>'
   		});
   		$(".nextPart").html(newstrs)
   		$(".nextPart>li").hover(function(){
   	    $(this).find("p>a").addClass("on");
   	    $(this).find(".addCart").css("display","block")
   },function(){
   	    $(this).find("p>a").removeClass("on");
   	     $(this).find(".addCart").css("display","none");
   })
   	}
   });
   
   
    
    
    
    /*3f水果单糕----------------------------------*/
// var offset = $("#end").offset(); 
//  $(".addcar").click(function(event){ 
//      var addcar = $(this); 
//      var img = addcar.parent().parent().parent().parent().find('img').attr('src'); 
//      var flyer = $('<img class="u-flyer" src="'+img+'">'); 
//      flyer.fly({ 
//          start: { 
//              left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
//              top: event.pageY //开始位置（必填） 
//          }, 
//          end: { 
//              left: offset.left+10, //结束位置（必填） 
//              top: offset.top+10, //结束位置（必填） 
//              width: 0, //结束时宽度 
//              height: 0 //结束时高度 
//          }, 
//          onEnd: function(){ //结束回调 
//              $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
//              addcar.css("cursor","default").removeClass('orange').unbind('click'); 
//              this.destory(); //移除dom 
//          } 
//      }); 
//  }); 
   
   
    /*4F鲜花分类-------------------------------*/
   $(".fourthFloor_Choose>a").hover(function(){
   	$(this).css({background:"#78b270",color:"white"})
   },function(){
   	$(this).css({background:"white",color:"#78b270"})
   })
   /*5F浪漫组合-------------------------*/
   $(".fifthFloor_Choose>a").hover(function(){
   	$(this).css({background:"#fa648c",color:"white"})
   },function(){
   	$(this).css({background:"white",color:"#fa648c"})
   })
   /*6F礼品公仔-------------------------*/
  $(".sixthFloor_Choose>a").hover(function(){
   	$(this).css({background:"#ad96d9",color:"white"})
   },function(){
   	$(this).css({background:"white",color:"#ad96d9"})
   })
  
})