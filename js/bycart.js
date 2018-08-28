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
	var listObj=getAll();
	console.log(listObj)
	if(listObj.length==0){
		$("#tbody").hide()
	}else{
		$("#tbody").show()
	}
	var str="";
	$.each(listObj,function(index,ele){
		str+='<dl class="sheet" pid="'+ele.pid+'">'
		    +'<dd class="abc"><input type="checkbox" name="checkboxs" class="checkes" value="" /></dd>'
			+'<dd class="thumb"><img src="'+ele.imgsrc+'"/></dd>'		
			+'<dd>'+ele.pdes+'</dd>'		
			+'<dd><b>￥</b><span class="p_price">'+ele.priced+'</span></dd>'		
			+'<dd><button class="minus">-</button><input type="text" name="textval" class="textval" value="'+ele.pcount+'" /><button class="adds">+</button></dd>'		
			+'<dd>'+ele.pcount*ele.priced+'</dd>'		
			+'<dd><button class="del">删除</button></dd>'
		+'</dl>'	
	});
	$("#tbody").after(str);
	console.log($("#tbody"))
	//获取总价方法
	//取出所有的选择框
	function getTotoalPrice(){
		var sum=0;
		$("input[name='checkboxs']").each(function(index,ele){
			
			//假如被选中
			if($(this).is(":checked")){
				var dl=$(this).parent().parent();
				var temp=dl.children().eq(5).html();
				sum+=Number(temp);
			}
			
		})
		return sum
	}
	//所有复选框的change事件
      $("input[name='checkboxs']").each(function(){
      	$(this).change(function(){
      		alert(1)
//    		ischeckAll(); 
      		$("#totalcount").html(getTotoalPrice())
      	})
      })
//全选操作----从新计算总价
//全选
$(".allCheck").change(function(){
   $(".abc").children(':checkbox').prop("checked",$(this).is(":checked")?true:false);
   $("#totalcount").html(getTotoalPrice())
});
	
	//判定全选函数
//	function ischeckAll(){
//		var flag=true;
//		$(".checked").each(function(index,ele){
//			if($(this).is(':checkbox').prop("checked")==false){
//				flag=false;
//			}
//		})
//		if(flag){
//			$(".allCheck").prop("checked",true);
//		}else{
//			$(".allCheck").prop("checked",false);
//		}
//	}
	
	//增加商品数量-------
	$(".adds").each(function(index,ele){
		$(".adds").click(function(){
			var inp=$(this).prev();
			console.log(inp.val())
			inp.val(Number(inp.val())+1);
			var tr=$(this).parent().parent();
			var pid=tr.attr("pid");
			updateNum(pid,1)
			var price=tr.children().eq(3).children().eq(1).html();
			console.log(price)
			//给小计赋值 
			tr.children().eq(5).html(Number(inp.val())*Number(price));
			console.log(getTotoalPrice())
			//判断是否选中
			var myck=tr.children().eq(1);
			if(myck.checked==true){
				$("#totalcount").html(getTotoalPrice());
				
			}
		})
	
	})
	
	
	//减数量--------
	$(".minus").each(function(){
	$(".minus").click(function(){
		var inp=$(this).next();
		inp.val(Number(inp.val())-1);
		var tr=$(this).parent().parent();
		var pid=tr.attr("pid")
		if(inp.val()<1){
			inp.val(1);
		}else{
			updateNum(pid,-1);
		}
		var price=tr.children().eq(3).children().eq(1).html();
		tr.children().eq(5).html(Number(inp.val())*Number(price))
		//判断是否被选中
		var mycks=tr.children().eq(0).children().eq(0);
		if(mycks.checked==true){
			$("#totalcount").html(getTotoalPrice());
		}
	})
	})
	//输入框事件
	$(".textval").blur(function(){
		var num=parseInt($(this).val());
		console.log(num)
		//输入不能小于1
		if(num<1||isNaN(num)){
			alert("输入有误")
			$(this).val(1)
			return;
		}
		var tr=$(this).parent().parent()
		console.log(tr)
		var pid=tr.attr("pid");
		console.log(pid)
		var price=tr.children().eq(3).children().eq(1).html();
		console.log(price)
		tr.children().eq(5).html(Number(num)*Number(price))
		console.log(tr.children().eq(5).html(Number(num)*Number(price)))
		var mycheck=tr.children().eq(0).children().eq(0);
		console.log(mycheck)
			if(mycheck.checked==true){
				//获取总价
				$("#totalcount").html(getTotoalPrice());
			}
			//改变cookie值
			var listObj=getAll();
			$.each(listObj, function(index,ele) {
				if(pid==listObj.pid){
					listObj.pcount=num;
				}
			});
			//把改变数量后的cookie数组设置回cookie
			var listObjstr=JSON.stringify(listObj);
			setCookie("datas",listObjstr,50);
	});
console.log($("#textval"))
	//删除操作 --------------
	$(".del").each(function(){
	$(".del").click(function(){
		var tr=$(this).parent().parent();
		var pid=tr.attr("pid");
		//删除自己本身
		tr.remove();
		delProduct(pid);
		//判断没有商品
		if($("#tbody").children().length==0){
			$(this).hide();
		}else{
			$(this).show();
		}
		$("#totalcount").html(getTotoalPrice());
		//删除后从新加载
		window.location.href="bycart.html";
	})
	
	})
	$(".sky").click(function(){
		$("#tbody~.sheet").each(function(){
		var st=$(this).attr("pid")
		console.log(st)
		$(this).remove();
		delProduct(st)
		
	})
	})
	
	$(".continue").click(function(){
		window.location.href="mainContent.html"
	})
	
})