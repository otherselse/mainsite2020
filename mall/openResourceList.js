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
			'            <div class="l pct10 tc smallsetHover rel"><a href="javascript:void(0)" class="green">议价购买</a><span class="hover_ck g28 f12"><i class="dib abs hover_ckdot" style="right:20px"><i class="dib abs hover_ckdot2"></i></i>议价购买：价格可议，销售合同需核价生成</span></div>'+
	        '    	</div>'
	     for (var i=0;i<Math.abs(Math.floor(Math.random()*10)-2);i++){
	     	mytxt+=mytxt
	     } //生成静态数据


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
            '	<div class="subTableFooter ovh mallboxshadow">'+
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
					obj.find(".openBtnTxt").text('收起');
					obj.addClass("open");
					//obj.parents(".tableCont ").find(".subTable").html(html); //异步获取子页面内容
					obj.parents(".tableCont").find(".subTableCont").mCustomScrollbar({
					    theme:"minimal-dark",
					    callbacks:{
					    	onTotalScroll:function(){ onTotalScroll(this); } 
						}
					});	
					obj.parents(".tableCont ").find(".subTable").show();
				}
				
			})
})

function onTotalScroll(obj){
	//每次滚动底部增加5条;
	// var html='	   	<div class="subTableList">'+
	//         '    		<div class="l pct20 indent20 ell"><label class="dib iconcheckbox poi vm mr5 rel">'+
	// 		'					<input type="checkbox" class="opacity-checkbox abs poi chooseOne" onclick="calculateChecked(this)" weight="33.554" price="3456" rid="5611353">'+
	// 		'				</label>QSTE50TM</div>'+
	// 		'            <div class="l pct15 ell">2.500*1050*2100</div>'+
	// 		'            <div class="l pct20 tc ell">12</div>'+
	// 		'            <div class="l pct15 tc ell">33.554</div>'+            
	// 		'            <div class="l pct20 tc red">¥3456</div>'+
	// 		'            <div class="l pct10 tc smallsetHover rel"><a href="javascript:void(0)" class="green">议价购买</a><span class="hover_ck g28 f12"><i class="dib abs hover_ckdot" style="right:20px"><i class="dib abs hover_ckdot2"></i></i>议价购买：价格可议，销售合同需核价生成</span></div>'+
	//         '    	</div>'
	//  var str=""
	//  for(var i=0;i<15;i++){
	//  	str=str+html
	//  }

	// $(obj).find(".mCSB_container").append(str);
	// $(obj).mCustomScrollbar("update");
	//console.log(obj)

}