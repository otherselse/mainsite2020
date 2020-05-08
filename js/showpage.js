    var showpage=""
    var showpage='<div class="pageWrap" id="turnPageDiv">'+
    '             <div class="auto dib">'+
    '             <a class="arrowL" href="javascript:void(0);" onClick="return goToPage(1)">上一页</a>'+
    '             <a class="pagegray active" onClick="javascript:return goToPage(1)">1</a>'+
    '             <a class="pagegray " onClick="javascript:return goToPage(2)">2</a>'+
    '             <a class="pagegray " onClick="javascript:return goToPage(3)">3</a>'+
    '             <a class="pagegray " onClick="javascript:return goToPage(4)">4</a>'+
    '             <a class="pagegray more" onClick="">...</a>'+
    '             <a class="pagegray " onClick="javascript:return goToPage(7)">7</a>'+
    '             <a class="arrowR" href="javascript:void(0)"  onClick="return goToPage(2)">下一页</a>'+
    '             </div>'+
    '		      <span>&emsp;&emsp;共123456条信息'+
	'		      <input type="hidden" id="currentPageNum" value="1">'+
    '             </div>'

    document.write(showpage);

