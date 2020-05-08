$(function(){
    var mytxt='    	<div class="subTableList">'+
	        '    		<div class="l pct20 indent20 ell">'+
			'				<label class="dib iconcheckbox poi vm mr5 rel">'+
			'					<input type="checkbox" class="opacity-checkbox abs poi chooseOne" onclick="calculateChecked(this)" weight="4.335" price="10175" rid="5611353">'+
			'				</label>QSTE50TM</div>'+
			'           <div class="l pct15 ell">2.500*1050*2100</div>'+
			'            <div class="l pct20 tc ell">12</div>'+
			'            <div class="l pct15 tc ell">4.335</div>'+         
			'            <div class="l pct20 tc red">¥10175</div>'+
			'            <div class="l pct10 tc"><a href="javascript:void(0)" class="green">议价购买</a></div>'+
	        '    	</div>'
	     // for (var i=0;i<Math.abs(Math.floor(Math.random()*10)-2);i++){
	     // 	mytxt+=mytxt
	     // } //生成静态数据
 		
 		for (var i=0;i<3;i++){
	     	mytxt+=mytxt
	     } 

	var html='<div class="tableTitle">'+
            ' 		<div class="l pct20 indent20">'+
             '			<label class="dib iconcheckbox poi vm mr5 rel ml-1">'+
			'				<input type="checkbox" class="opacity-checkbox abs poi" onclick="chooseAll(this)" >'+
			'			</label>全选/牌号</div>'+
		    '       <div class="l pct15 ">规格</div>'+
		    '        <div class="l pct20 tc">数量</div>'+
		    '        <div class="l pct15 tc">重量(吨)</div>'+            
		    '        <div class="l pct20 tc">价格(元/吨)</div>'+
		    '        <div class="l pct10 tc pct10ie7">操作</div>'+
            '	</div>'+
           ' 	<div class="subTableCont">'+
                mytxt+
            '	</div>'+
            '	<div class="subTip tc"></div><div class="subTableFooter ovh mallboxshadow">'+
            '		<div class="l pct20 indent20">'+
            '			<label class="dib iconcheckbox poi vm mr5 rel">'+
			'				<input type="checkbox" class="opacity-checkbox abs poi" onclick="chooseAll(this)" >'+
			'			</label>全选/牌号'+
            '		</div>'+
            '		<div class="r">已选数量：1件，已选重量：3.000吨&emsp;&emsp;合计：<span class="dib red f18">¥3456</span>&emsp;<a href="javascript:void(0)" class="subTableplBut dib">批量下单</a></div>'+
            '	</div>'


            //资源列表中展开收起
			$("body").on("click",".openBtn",function(){
				var obj=$(this);
				if(obj.hasClass("open")){
					obj.find(".openBtnTxt").text('展开');
					obj.removeClass("open");
					obj.parents(".tableCont ").find(".subTable").hide();
				}else{
					var endFlag=false;  //初始化底部flag为false
					obj.find(".openBtnTxt").text('收起');
					obj.addClass("open");
					obj.parents(".tableCont ").find(".subTable").html(html); //异步获取子页面内容
					obj.parents(".tableCont").find(".subTableCont").mCustomScrollbar({
					    theme:"minimal-dark",
					    callbacks:{
					    	onTotalScroll:function(){
					    		
					    		var  myloding='<div class="loading tc"><img src="http://www.lgsteel.com/statics/img/loading.gif" /></div>';
								obj.parents(".tableCont").find(".subTable").find(".subTip").html(myloding);

					    		if(endFlag==false){
									endFlag=funonTotalScroll(this,endFlag);	 //endFlag 用来表示已经是底部了
					    		}		   		
					    					    		
					    		if(endFlag==true){
					    			obj.parents(".tableCont").find(".subTable").find(".subTip").html('<div class="pt10 pb10">已经到底啦~</div>');								    			
					    		}
					    		
					    	}
						}
					});	
					obj.parents(".tableCont ").find(".subTable").show();
				}
				
			})
})

//每次滚动底部增加5条;
function funonTotalScroll(obj,endFlag){

	if(endFlag==false){	
		var html='	   	<div class="subTableList">'+
		        '    		<div class="l pct20 indent20 ell"><label class="dib iconcheckbox poi vm mr5 rel">'+
				'					<input type="checkbox" class="opacity-checkbox abs poi chooseOne" onclick="calculateChecked(this)" weight="33.554" price="3456" rid="5611353">'+
				'				</label>QSTE50TM</div>'+
				'            <div class="l pct15 ell">2.500*1050*2100</div>'+
				'            <div class="l pct20 tc ell">12</div>'+
				'            <div class="l pct15 tc ell">33.554</div>'+            
				'            <div class="l pct20 tc red">¥3456</div>'+
				'            <div class="l pct10 tc"><a href="javascript:void(0)" class="green">议价购买</a></div>'+
		        '    	</div>'
		 var str=""
		 for(var i=0;i<5;i++){
		 	str=str+html
		 }
		// alert(222)
		 // str=str+html
		$(obj).find(".mCSB_container").append(str);
		$(obj).mCustomScrollbar("update");
		//$(obj).parents(".tableCont").find(".subTable").find(".subTip").html('');
		endFlag=true

	}
	return endFlag;
}