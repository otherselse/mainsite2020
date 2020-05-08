var cultureIndex=function (){
	return {
		cultureUrl:function(){
			$.ajax({
				   type: "POST",
				   url: app.root+'/login/cultureUrl.html',		  
				   dataType: "json",
				   success: function(data){
					   if (data.url!=null){					   
						   //去乐刚文化登录页面
					   		window.location.href=data.url;
					   } 
				   } 
			}); 
		},
		cultureLgIndex:function(){
			$.ajax({
				   type: "POST",
				   url: app.root+'/login/cultureLgIndex.html',						  
				   dataType: "json",
				   success: function(data){
					   if (data.url!=null){				
						   //去乐刚系统首页
					   		window.location.href=data.url;
					   } 
				   } 
			}); 
		},
		checkInputNumber:function(obj){
			
		}
	}
}();