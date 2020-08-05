var _listsort=["list_bm","list_jy","list_tg"];
var _bannerSort={
	initBanner:function(){
		var _arr=[];
		$("#sortBanner").find("li").each(function(i){
			var mystr=$(this).prop("outerHTML");
				var cont={
					"id":$(this).attr("id"),
					"content":mystr
				}
				_arr.push(cont)
			

		})
		var _bannerArr=[];

		var z=0;
		for(var j=0;j<_arr.length;j++){
			if(!_arr[j].id){
				_bannerArr.push({"id":'',"content":_arr[j].content});
			}else{
				for(var i=z;i<_listsort.length;i++){
					for(var m=0;m<_arr.length;m++){
						if(_listsort[i]==_arr[m].id){
							_bannerArr.push({"id":_listsort[i],"content":_arr[m].content});
							z++
							
							break;
						}
					}
					break;
				}


			}
		}

		//console.log(_bannerArr)
		var _bannerString=''
		for(var g=0;g<_bannerArr.length;g++){
			_bannerString+=_bannerArr[g].content;
		}
		//console.log(_bannerArr)
		//$("#sortBanner").find("li[id^='list_']").remove();
		//console.log(_bannerString)
		$("#sortBanner").html(_bannerString)
	}
}