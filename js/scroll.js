var scroll=""
scroll='<div class="scrollRight tc">'+
		'<a href="../cart/page.html" class="db rel bbe cart_nav_title" title="购物车"><i class="scrollCartIcon dib"></i><i class="dib abs scrollCartNum f12">12</i></a>'+
		'<a href="##" class="db bbe" title="在线留言"><i class="lgicon scrollMessageIcon dib "></i></a>'+
	'	<a href="##" class="db rel scrollhover bbe" title="请扫一扫乐刚微信">'+
	'		<i class="lgicon scrollWeixinIcon dib "></i>'+
	'		<div class="abs scrollWx f12"><i class="dib scrollWxicon"></i><i class="dib scrollWxdot abs"></i><br/>请扫一扫乐刚微信</div>'+
	'	</a>'+
	'	<a href="##" class="db rel scrollhover bbe" title="服务电话">'+
	'		<i class="lgicon scrollTelIcon dib "></i>'+
	'		<div class="abs scrollWx scrollTel"><i class="dib scrollWxdot scrollWxdotTel abs"></i><span class="dib scrollWxdotText f14">服务电话：<br>4008-200-666</span></div>'+
	'	</a>'+
	'	<a href="##" class="db scrollup" title="返回顶部"><i class="lgicon scrollUpIcon dib "></i></a>'+
	'</div>'

document.write(scroll);

$(function(){
	$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>0){
			$(".scrollup").css("display","block");
		}else{
			$(".scrollup").css("display","none");
		}
	})

	//右侧滚动
	$(".scrollRight").find(".scrollhover").hover(function(){
		$(this).children(".scrollWx").show();
	},function(){
		$(this).children(".scrollWx").hide();
	})

	$(".scrollup").on("click",function(){
	 	$('body,html').animate({scrollTop:0},500);
	})
	
})