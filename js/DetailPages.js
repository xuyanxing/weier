$(function(){
	$("#header").load("head.html",function(){
		$(".menu").hide();
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
	
    //数据加载--------------------	
    function GetQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
		
		var r = window.location.search.substr(1).match(reg); 
		
		if (r!=null) return (r[2]); return null; 
	}
    var pid=GetQueryString("pid");
    console.log(pid)
    $.ajax({
    	type:"get",
    	url:"DetailPages.json",
    	async:true,
    	success:function(res){
    		var arrs=res.detail;
    		console.log(arrs)
    		var strs="";
    		var colorstr="";
    		$.each(arrs, function(index,ele) {
    			if(ele.pid==pid){
    			$.each(ele.suolue, function(index,ele) {
    				colorstr+='<li class="mopWarp"><a><img src="'+ele+'"/></a></li>'
    			});	
    			strs='<div class="detailPagesNav">'
				+'<span><a href="">首页</a></span>'
				+'<span>></span>'
				+'<span><a href="">蛋糕分类</a></span>'
				+'<span>></span>'
				+'<span>'+ele.titles+'</span>'
			+'</div>'
			+'<div class="zoom">'
				+'<div class="zoomLeft">'
					+'<div class="bannerWarp">'
						+'<div class="small" id="small" pid="'+pid+'">'
							+'<img src="'+ele.imgsrc+'"/>'
							+'<div class="mask" id="mask"></div>'
						+'</div>'
						+'<div class="big" id="big"><img src="'+ele.imgsrc+'"/></div>'
					+'</div>'
					+'<div class="zoomLeftmop">'
						+'<ul>'+
						colorstr
						+'</ul>'
					+'</div>'
					+'<p>分享商品:</p>'
				+'</div>'
				+'<div class="zoomRight">'
					+'<div class="zoomRight_title">'
						+'<h2>'+ele.titles+'</h2>'
						+'<p>新鲜水果</p>'
					+'</div>'
					+'<div class="zoomRight_price">'
						+'<div class="quotation"><h2 ><span>本店价￥</span><span class="prices">'+ele.price+'</span></h2><p class="members">高级会员购买享有折扣</p></div>'
						+'<div class="ProPay">'
							+'<h5>会员价格</h5>'
							+'<div class="ProPay_con">'
								+'<ul>'
									+'<li><span>会员等级</span><h6>会员价格</h6></li>'
									+'<li><span>高级VIP</span><h6>￥142</h6></li>'
									+'<li><span>至尊VIP</span><h6>￥135</h6></li>'
									+'<li><span>微信用户</span><h6>￥158</h6></li>'
									+'<li><span>QQ用户</span><h6>￥158</h6></li>'
									+'<li><span>高级会员</span><h6>￥150</h6></li>'
									+'<li><span>初级会员</span><h6>￥158</h6></li>'
								+'</ul>'
							+'</div>'
						+'</div>'
						+'<div class="market"><h5>市场价<del>￥'+ele.oldprice+'</del></h5><p>已售出<span class="Sold">'+ele.Sold+'</span>|<span>'+ele.evaluate+'</span>评价</p></div>'
					+'</div>'
					+'<ul class="styleID">'
						+'<li><span>商品货号</span><em class="ourCode">'+ele.product+'</em></li>'
						+'<li><span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌</span><a href="">进入<b>芙拉维尔</b>品牌馆</a></li>'
						+'<li class="integral">可使用<em>'+ele.integral+'</em>积分</li>'
					+'</ul>'
					+'<div class="cupCake_warp">'
						+'<div class="cupCake">'
							+'<span>蛋糕尺寸</span>'
							+'<div class="cupCake_details">'
								+'<p class="cupCake_color"><em>8英寸（20CM,3-5人食用）</em></p>'
								+'<p><em>8英寸（20CM,3-5人食用）</em></p>'
								+'<p><em>10英寸（25CM,5-8人食用）</em></p>'
								+'<p><em>8英寸（20CM,3-5人食用）</em></p>'
								+'<p><em>8英寸（20CM,3-5人食用）</em></p>'
								+'<p><em>8英寸（20CM,3-5人食用）</em></p>'
								+'<p><em>8英寸（20CM,3-5人食用）</em></p>'
							+'</div>'
						+'</div>'
						+'<div class="quantity"><span>数&nbsp;&nbsp;&nbsp;量</span><button class="minus">-</button><input type="text" name="" id="mytexed" value="1" /><button class="plus">+</button></div>'
						+'<ul class="Shopnow_warp">'
							+'<li class="Buynow"><a href="">立即购买</a></li>'
							+'<li class="join">加入购物车</li>'
							+'<li class="enshrine"><a href=""><i></i>收藏</a></li>'
							+'<li class="byPhone"><a href="">去手机购买</a><div class="Code"><img src="../img/维尔/1516072570372857616.jpg"/></div></li>'
						+'</ul>'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<div class="menuWarp">'
				+'<div class="SuctionTop_menu">'
					+'<ul>'
						+'<li class="meunNav"><a href="">产品介绍</a></li>'
						+'<li><a href="">参数规格</a></li>'
						+'<li><a href="">评价<em>('+ele.evaluate+')</em></a></li>'
					+'</ul>'
					+'<div class="love">你可能还喜欢</div>'
				+'</div>'
			+'</div>'
			+'<div class="hideMenu">'
					+'<div class="hideMenu_warp">'
						+'<img src="../img/维尔/20180601230741_51372.jpg"/>'
						+'<h5>欧式蛋糕|回味无穷 新鲜水果 新鲜配送</h5>'
						+'<ul>'
						+'<li class="meunNav"><a href="">产品介绍</a></li>'
						+'<li><a href="">参数规格</a></li>'
						+'<li><a href="">评价<em>('+ele.evaluate+')</em></a></li>'
					    +'</ul>'
					    +'<a href="" class="goShopping">加入购物车</a>'
					+'</div>'
		    +'</div>'
			+'<div class="messageWarp">'
				+'<div class="messageLeft">'
					+'<div class="messageLeft_con">'
						+'<p><img src="../img/维尔/20180619142242_82002.jpg"/></p>'
						+'<div class="waitAppend"></div>'
						+'<div class="intro">'
							+'<h6><img src="../img/维尔/20170928155554_83937.png"/></h6>'
							+'<ul>'
								+'<li>[名&nbsp;&nbsp;&nbsp;&nbsp;称:]欧式蛋糕|回味无穷</li>'
								+'<li>[材&nbsp;&nbsp;&nbsp;&nbsp;料:]水果蛋糕，中间夹心水果，表层新鲜水果装饰。</li>'
								+'<li>[包&nbsp;&nbsp;&nbsp;&nbsp;装:]购买蛋糕附送贺卡、刀叉盘、蜡烛一套（图片的图样、颜色均只做为参考，实物可能会略有偏差）</li>'
								+'<li>[蛋糕语:]友情，不是茶，愈冲，愈淡；友情，应是酒，愈陈，愈香！祝你在生日后的每一天里依然健康快乐！</li>'
							+'</ul>'
						+'</div>'
						+'<div class="Large"><img src="../img/维尔/20180601230741_51372.jpg"/></div>'
						+'<div class="Larges"><img src="../img/维尔/20180601230750_63430.jpg"/></div>'
						+'<img src="'+ele.prod[0]+'"/>'
						+'<div class="product"><img src="../img/维尔/20170928155554_83937.png"/></div>'
						+'<img src="'+ele.prod[1]+'"/>'
						+'<img src="../img/维尔/20170928175828_32697.jpg"/>'
						+'<img src="../img/维尔/20170928165727_20562.jpg"/>'
						+'<img src="../img/维尔/20170928165737_98859.jpg"/>'
						+'<img src="../img/维尔/20180131204724_11799.jpg"/>'
						+'<img src="../img/维尔/20180131204738_56434.jpg"/>'
						+'<img src="../img/维尔/20170928165746_37631.jpg"/>'
						+'<img src="../img/维尔/20170928100930_52765.jpg"/>'
						+'<img src="../img/维尔/20170928174127_90016.jpg"/>'
						+'<img src="../img/维尔/20170928172203_72186.jpg"/>'
						+'<img src="../img/维尔/20160908203318_37891.jpg"/>'
						+'<img src="../img/维尔/20170928100953_77957.jpg"/>'
					+'</div>'
				+'</div>'
				+'<div class="messageRight">'
					+'<ul class="messageRight_con">'
						+'<li>'
							+'<img src="../img/维尔/347_thumb_G_1476381432989.jpg"/>'
							+'<h6>数码蛋糕|欢声笑语</h6>'
							+'<p>￥258</p>'
						+'</li>'
						+'<li>'
							+'<img src="../img/维尔/335_thumb_G_1476322949580.jpg"/>'
							+'<h6>数码蛋糕|欢声笑语</h6>'
							+'<p>￥258</p>'
						+'</li>'
						+'<li>'
							+'<img src="../img/维尔/336_thumb_G_1474066472350(2).jpg"/>'
							+'<h6>数码蛋糕|欢声笑语</h6>'
							+'<p>￥258</p>'
						+'</li>'
						+'<li>'
							+'<img src="../img/维尔/337_thumb_G_1474063429850.jpg"/>'
							+'<h6>数码蛋糕|欢声笑语</h6>'
							+'<p>￥258</p>'
						+'</li>'
						+'<li>'
							+'<img src="../img/维尔/334_thumb_G_1479060142504.jpg"/>'
							+'<h6>数码蛋糕|欢声笑语</h6>'
							+'<p>￥258</p>'
						+'</li>'
					+'</ul>'
				+'</div>'
			+'</div>'	
    		}	
    		});
    		$("#detailPages").html(strs);
    		
    //点击li时把小图片的地址转移到大图片上
	$(".mopWarp img	").click(function(){
		$(".small img").attr("src",$(this).attr("src"))
		$(".big img").attr("src",$(this).attr("src"))
	})
      //放大镜-------------------------------	
	$(".small").hover(function(){
		$(".mask").show();
		$(".big").show();
	},function(){
		$(".mask").hide();
		$(".big").hide();
	})
	
	$(".small").mousemove(function(e){
				var e=e||window.event;
				//获取事件源的x轴和y轴
				var x=e.pageX-$(".small").offset().left-$(".mask").width()/2;
				var y=e.pageY-$(".small").offset().top-$(".mask").height()/2;
				//限制移动范围
				x=x<0?0:x;
				y=y<0?0:y;
				var maxX=$(".small").width()-$(".mask").width();
				var maxY=$(".small").height()-$(".mask").height();
				x=x>maxX?maxX:x;
				y=y>maxY?maxY:y;
				
				$(".mask").css({top:y,left:x});
				//算出大图和小盒字的比列
				var blix=$(".big img").width()/$(".small").width();
				var bliy=$(".big img").height()/$(".small").height();
				//设置大盒子的滚动距离是遮罩*比列
				$(".big").scrollTop(bliy*y);
				$(".big").scrollLeft(blix*x);
	})
    //会员显示---------------------------------		
    $(".members").hover(function(){
		$(this).css("color","#008000")
		$(".ProPay").show();
	},function(){
		$(this).css("color","#5f5750")
		$(".ProPay").hide();
	})
	$(".byPhone").hover(function(){
		$(".Code").show();
	},function(){
		$(".Code").hide();
	})
    	/*蛋糕尺寸----------------------------------*/
	$(".cupCake_details>p").hover(function(){
		$(this).css("border-color","orangered")
	},function(){
		$(this).css("border-color","#c8c9cd")
	})
	/* 吸顶菜单--------------------------*/
	$(window).scroll(function(){
		if($(window).scrollTop()>990){
			
			$(".hideMenu").show().addClass("fixedul");
		}else{
			$(".hideMenu").hide().removeClass("fixedul");
		}
	})
	$(".messageRight_con h6").hover(function(){
		$(this).css("color","#008000")
	},function(){
		$(this).css("color","#808097")
	})
	
	var xnum=parseInt($("#mytexed").val())
	console.log(xnum)
    $(".minus").click(function(){
    	xnum--;
    	if(xnum<=0){
    		xnum=1;
    		alert("商品数量不能低于1")
    	}
    	$("#mytexed").val(xnum);
    })
    $(".plus").click(function(){
    	xnum++;
    	console.log(xnum)
    	$("#mytexed").val(xnum);
    })
    
    //购物车------------------------------
    var cookies=getCookie("datas");	
     if(cookies==undefined){
	//设置cookie=datas=[];
	 setCookie("datas","[]",50);
	  cookies=getCookie("datas");
	}
     var cookiesarr=JSON.parse(cookies);
        $("#ccunt").html(getTotal())
     $(".join").click(function(){
     	var obj={}
     	var xnum=parseInt($("#mytexed").val())
     	var pid=$(".small").attr("pid");
     	var imgsrc=$(".small img").attr("src");
     	var pdes=$(".zoomRight_title h2").html();
     	var priced=$(".quotation .prices").html();
     	console.log(priced)
     	var code=$(".ourCode").html();
     	if(checkishas(pid)){
     		updateNum(pid,xnum);
     	}else{
     	    obj={pid:pid,imgsrc:imgsrc,pdes:pdes,priced:priced,code:code,pcount:xnum}
     	    var cookies=getCookie("datas");
     	var cookiesarr=JSON.parse(cookies);
     	cookiesarr.push(obj);
     	var cookiesarrstr=JSON.stringify(cookiesarr);
     	setCookie("datas",cookiesarrstr,50);
     	}
     	$("#ccunt").html(getTotal())
     	window.location.href="bycart.html";
     })
 
    	}
    });
   


//var ccount=document.getElementById("ccunt");
//var btns=document.querySelectorAll(".join");
//		//把上次的cookie拿出
				
				//如果没拿到cookie--第一次添加cookie
				
			//获取到的cooKie是字符串--转成数组
			
			
//	ccount.innerHTML=getTotal();	
	
//		for(var i=0;i<btns.length;i++){
			//按钮点击事件
//			btns[i].onclick=function(){
//				//获取要添加到cookie的信息
//				var dl=this.parentNode.parentNode;
//				var arrs=dl.children;
//				var pid=dl.getAttribute("pid");
//				var imgSrc=arrs[0].firstElementChild.src;
//				var pdes=arrs[2].innerHTML;
//				var price=arrs[3].firstElementChild.innerHTML;
//				//---判断是否存在商品
//				if(checkishas(pid)){
//					//把该商品的pcout+1
//					updateNum(pid,1);
//					
//				}else{
//						//存储到obj对象中
//					var obj={
//						pid:pid,
//						imgSrc:imgSrc,
//						pdes:pdes,
//						price:price,
//						pcount:1//商品数量
//					}
//					//设置cooKie--从新获取cookie
//					var cookies=getCookie("datas");	
//					var cookiesarr=JSON.parse(cookies);
//				//像数组中添加本次的商品信息的obj
//					cookiesarr.push(obj);	
//				//把数组转回字符串
//					var cookiesarrstr=JSON.stringify(cookiesarr);
//					
//			//添加到cookie中
//					setCookie("datas",cookiesarrstr,50);
//					//点击完成从新获取总数
//				
//					
//				}
//					ccount.innerHTML=getTotal();
//				
//				
//			}
			
			
//		}

















	
})