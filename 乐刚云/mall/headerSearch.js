$(function(){
	$("#HeaderSearch").on("click",function(e){
		e.stopPropagation();
		var html='<a py="duxinjuanban" pyjc="dxjb" class="sContentList ell poi j_sitem" onclick="mallIndexUtil.gotoSearch(this,event)">镀锌卷板</a><a py="lingzhajuanban" pyjc="lzjb" class="sContentList ell poi j_sitem" onclick="mallIndexUtil.gotoSearch(this,event)">冷轧卷板</a>';
		var mytxt="";
		 for (var i=0;i<Math.abs(Math.floor(Math.random()*10)+1);i++){
	     	mytxt=mytxt+html;
	     } //生成静态数据
	     $(this).next(".sContent ").css({"width":$(this).parents(".bannerSearch ").width(),"top":$(this).parents(".bannerSearch ").height()});
	     $(this).next(".sContent ").find(".mCSB_container").html(mytxt);
		 $(this).mCustomScrollbar("update");
 	     $(this).next(".sContent ").show();

	})

	$("#HeaderSearch").on("keyup",function(){		
		var html='<a py="duxinjuanban" pyjc="dxjb" class="sContentList ell poi j_sitem" onclick="mallIndexUtil.gotoSearch(this,event)">镀锌卷板</a>';
		var mytxt="";
		 for (var i=0;i<Math.abs(Math.floor(Math.random()*10)+1);i++){
	     	mytxt=mytxt+html;
	     } //生成静态数据
	      $(this).next(".sContent ").css({"width":$(this).parents(".bannerSearch ").width(),"top":$(this).parents(".bannerSearch ").height()});
	     $(this).next(".sContent ").find(".mCSB_container").html(mytxt);
		 $(this).mCustomScrollbar("update");
		 $(this).next(".sContent ").show();

	})
})