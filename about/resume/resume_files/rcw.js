$(function (){
	$(".showsubtable01").live("click",function(){
		var subt=$(this).parent().parent().next();
		var subhd=$(this).parent().parent().prev();
		if(subt.is(":visible")==false){
			$(this).parent().parent().children(".fstlst").addClass("bdl_c1");
			$(this).parent().addClass("bdr_c1");
			subt.css("display","table-row");
			subhd.css("display","table-row");
			$(this).text('收起');
		}else{
			$(this).parent().parent().children(".fstlst").removeClass("bdl_c1");
			$(this).parent().removeClass("bdr_c1");
			subt.css("display","none");
			subhd.css("display","none");
			$(this).text('展开');
		}
	});

	$(".deleterowandsub").live("click",function(){
		$(this).parent().parent().next().remove();
		$(this).parent().parent().prev().remove();
		$(this).parent().parent().remove();
	});
	
	$(".haslist").live("blur",function(){
		$(this).prev().hide();
	});	
	$(".haslist").live("click",function(){
		$(this).prev().show();
	});
	$(".cdpform .cmplistc ul li a").live("mousedown",function(){
		$(this).parent().parent().parent().parent().parent().next().val($(this).text());
		$(this).parent().parent().parent().parent().parent().hide();
	});	
	$(".cdpform .cdpclose").live("click",function(){
		$(this).parent().hide();
	});
	
	$(".area_select").live("click",function(){
		$("#areaselectform").remove();
		$(this).before("<div id='areaselectform' class='cdpform' style='width:330px;'><div class='cdpclose' title='关闭'></div><div class='clear'></div><div class='ctim'><div class='cmplistc'><div class='info' style='margin-top:10px;'><div><select id='s_province' name='s_province'></select><select id='s_city' name='s_city' ></select><select id='s_county' name='s_county'></select><script type='text/javascript'>_init_area();</script><div class='clear'></div><a href='javascript:void(0);' class='button bt_tcdpf bt_c1' id='area_slt' onclick='getarea()'>确定</a></div></div></div><div class='clear'></div></div></div>");
		$("#areaselectform").show();
	});

	
});

function getarea(){
	if($("#s_province").val()=="省份"){
		alert("请选择省份！");
		$("#s_province").focus();
		return;
	}
	
	if($("#s_city").val()=="地级市"){
		alert("请选择地级市！");
		$("#s_city").focus();
		return;
	}
	
	if($("#s_county").val()=="市、县级市"){
		alert("请选择市、县级市！");
		$("#s_county").focus();
		return;
	}
	
	
	$('#areaselectform').next().val($('#s_province').find('option:selected').text()+'-'+$('#s_city').find('option:selected').text()+'-'+$('#s_county').find('option:selected').text());
	$('#areaselectform').remove();
}


