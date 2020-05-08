var qmenu = "";
qmenu = '<div class="l hmenu mr30"><div class="sticky" data-margin-top="110" >'+
		'	<div class="hmenuTit">帮助中心</div>'+
		'	<div class="hmList">'+
		'		<div class="hmListDetail">'+
		'			<a href="javascript:void(0)" class="db hmListT g59 rel ">常见问题<i class="hmListDot dib vm "></i></a>'+
		'			<div class="hmListMC"><a href="help.html" class="hmListM g59 ">供应商</a>'+
		'			<a href="" class="hmListM g59 ">承运商</a>'+
		'			<a href="" class="hmListM g59 ">金牌商家</a>'+
		'			<a href="" class="hmListM g59 ">供应链金融</a>'+
		'			<a href="" class="hmListM g59 ">G2G</a>'+
		'			<a href="" class="hmListM g59 ">乐刚网</a></div>'+
		'		</div>'+
		'		<div class="hmListDetail">'+
		'			<a  href="javascript:void(0)" class="db hmListT g59 rel">开票打款资料<i class="hmListDot dib vm "></i></a>'+
		'			<div class="hmListMC"><a href="voiceInfo.html" class="hmListM g59 ">开票资料</a>'+
		'			<a href="payment.html" class="hmListM g59 ">打款资料</a>'+
		'			<a href="account.html" class="hmListM g59 ">开户行行号和地址</a></div>'+
		'		</div>'+
		'		<div class="hmListDetail">'+
		'			<a href="word.html" class="db g59 hmListM_words">在线留言</a>'+
		'		</div>'+
		'	</div></div>'+
		'</div>'

document.write(qmenu)



$(function(){

	var _lh=$(".hmenu").height()>$(".hcont").height()?$(".hmenu").height():$(".hcont").height();
	$(".hmenu").height(_lh);
	$(".getHeight").height(_lh);
	

	//左侧菜单
	$("body").on("click",".hmListT",function(){
			$(this).parents(".hmListDetail").siblings().removeClass("open");
			$(this).parents(".hmListDetail").toggleClass("open");			

			if($(this).next(".hmListMC").css("display")=="none"){
				$(".hmListMC").slideUp();
				$(this).next(".hmListMC").slideDown();
			}else{
				$(this).next(".hmListMC").slideUp();
			}			
			//$(".hmListM").removeClass("active");
	})

	// 右侧
	$("body").on("click",".rLTitle ",function(){
		$(this).parent(".rList").toggleClass("open")
	})
})

