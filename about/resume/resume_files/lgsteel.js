$(function (){
	$(".shbutdo").live("click",function(){
		$(this).next(".shtipf").show();
	});
	$(".shtipf .close").live("click",function(){
		$(this).parent(".shtipf").hide();
	});
	$(".shtipf .okbut").live("click",function(){
		$(this).parent(".shtipf").hide();
	});

	$(".showsubtable").live("click",function(){
		var subt=$(this).parent().parent().next();
		subt.toggle();
		/*
		if(subt.is(":visible")==false){
			subt.css("display","table-row");
		}else{
			subt.css("display","none");
		}
		*/
	});
	$(".showsubtable1").live("click",function(){
		var subt=$(this).parent().parent().parent().next();
		subt.toggle();
		/*
		if(subt.is(":visible")==false){
			subt.css("display","table-row");
		}else{
			subt.css("display","none");
		}
		*/
	});
	$(".removeline1").live("click",function(){
		$(this).parent().parent().remove();
		//refreshRowVal();
	});

	 var  main_id=0
	$(".addline1").live("click",function(){
		var	addt=$(this).attr("adddata");
		re = new RegExp("{mid}", "g");
		main_id=main_id+1;
		addt=addt.replace(re,main_id);
		$(this).parent().parent().parent().next().append(addt);
	});
	$(".deleterow").live("click",function(){
		$(this).parent().parent().remove();
	});
	$(".addrow").live("click",function(){
		var	addt=$(this).attr("adddata");
		$(this).parent().parent().parent().append(addt);
	});

	$(".searchdata").live("click",function(){
		if($("div.tip").length==0){
			$(".tbnml").hide();
			$(".tbnml").next().hide();
			$(this).parent().parent().append("<div class='tip'><div class='nodata'></div><p>没找到相关数据</br></br><span style='font-size:12px;'>建议您：</br>1、看看输入的文字是否有误</br>2、调整关键词，缩短或修改您的搜索词，重新搜索</span></p></div>");
		}
	});

});

function showdiv2(str1,str2){
	$(str1).show();
	$(str2).hide();
}
function showdiv(str){
	$(str).toggle();
}
function deleteRow(strTr){
	$(strTr).parent().parent().remove();
}
function amountRule(th) {
	var regStrs = [ [ '^0+(\\d+)$', '$1' ], //禁止录入整数部分两位以上，但首位为0
	        		[ '[^\\d\\.]+$', '' ], //禁止录入任何非数字和点
	        		[ '\\.(\\d?)\\.+', '.$1' ], //禁止录入两个以上的点
	        		[ '^(\\d+\\.\\d{2}).+', '$1' ], //禁止录入小数点后两位以上
	        		[ '^\\.', '' ] ];
	for (i = 0; i < regStrs.length; i++) {
		var reg = new RegExp(regStrs[i][0]);
		th.value = th.value.replace(reg, regStrs[i][1]);
	}
}