$(function(){
	$("#ck_zy").on("click",function(){
		var html='<a py="zhejiangwuchanlecongcang" pyjc="zjwclcc"  href="javascript:void(0)"  class="sContentList ell j_sitem">浙江物产乐从仓</a><a py="zhongchubaoshangangtieku" pyjc="zcbsgtk" class="sContentList ell poi j_sitem">中储宝山钢铁库</a>';
		var mytxt="";
		 for (var i=0;i<Math.abs(Math.floor(Math.random()*10)+1);i++){
	     	mytxt=mytxt+html;
	     } //生成静态数据

	     $(this).next(".sContent ").find(".mCSB_container").html(mytxt);
		 $(this).mCustomScrollbar("update");
	})

	$("#ck_zy").on("keyup",function(){		
		var html='<a py="zhejiangwuchanlecongcang" pyjc="zjwclcc"  href="javascript:void(0)"  class="sContentList ell j_sitem">浙江物产乐从仓</a>';
		var mytxt="";
		 for (var i=0;i<Math.abs(Math.floor(Math.random()*10)+1);i++){
	     	mytxt=mytxt+html;
	     } //生成静态数据

	     $(this).next(".sContent ").find(".mCSB_container").html(mytxt);
		 $(this).mCustomScrollbar("update");
		 $(this).next(".sContent ").show();

	})
})