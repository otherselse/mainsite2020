if(!Array.prototype.indexOf){
	Array.prototype.indexOf = function(elt){
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if(from < 0)
			from += len;
		for(; from < len; from++) {
			if(from in this && this[from] === elt){
				return from;
			}	
		}
		return -1;
	};
}

var getProfit={
	my_sel:"#guaranteeFund",
	profit_text:"#estimatedProfit",
	my_reuslt:"#estimatedAmount",
	init:function(){
		$(getProfit.profit_text).on("keyup",function(){
			getProfit.getResult(this);
		})
		// $(getProfit.my_sel).on("click",function(){
		// 	getProfit.getResult(getProfit.profit_text);
		// })



	},
	checkSum:function(obj){
		var myval=$(obj).val();
		var regPos = /^\d+(\.\d+)?$/; //非负浮点数
		if(regPos.test(myval)){
			return true;
		}else{
			return false;
		}
	},
	estimatedProfit:function(obj){
		var myguaranteeFund=Number($(getProfit.my_sel).val());
		var myestimatedProfit=Number($(obj).val());
		var flag=0,arr=[];
		//alert(myguaranteeFund)
		for(var i=0;i<profitData.length;i++){
			 arr=profitData[i].guaranteeFund;
			 var isIn=false;

/*			for(v of arr) {
			    if(v == myguaranteeFund) {
			        isIn=true;
			        break;
			    }
			}*/

			/*arr.find(function(value) {
				if(value === myguaranteeFund) {
  					isIn=true;
				}
			})*/

			if(arr.indexOf(myguaranteeFund)>-1){
				isIn=true;
			}

			if(isIn){
				if(myestimatedProfit>=profitData[i].min&&myestimatedProfit<profitData[i].max){
					flag=profitData[i].rate;
					return flag;		
				}
			}		
			
		}
		return flag;
	},
	getResult:function(obj){
		if($(obj).val()==""){
			$(getProfit.my_reuslt).text("输入预估税后毛利！");
			return;
		}
		if(!getProfit.checkSum(obj)){
				$(getProfit.my_reuslt).text("预估税后毛利输入有误");
				return;
		}
		if(getProfit.estimatedProfit(obj)==0){
			$(getProfit.my_reuslt).text("暂无数据");
		}else{
			$(getProfit.my_reuslt).text((getProfit.estimatedProfit(obj)*$(obj).val()*1).toFixed(2));
		}
	}
}

$(function(){
        getProfit.init();
})


var profitData=[
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":0,"max":5210,"rate":0.2},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":5210,"max":6500,"rate":0.2},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":6500,"max":6580,"rate":0.21},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":6580,"max":6660,"rate":0.22},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":6660,"max":6750,"rate":0.23},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":6750,"max":6840,"rate":0.24},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":6840,"max":7040,"rate":0.25},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":7040,"max":7140,"rate":0.26},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":7140,"max":7230,"rate":0.27},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":7230,"max":7340,"rate":0.28},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":7340,"max":7440,"rate":0.29},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":7440,"max":8010,"rate":0.3},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":8010,"max":8240,"rate":0.31},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":8240,"max":8490,"rate":0.32},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":8490,"max":8750,"rate":0.33},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":8750,"max":9020,"rate":0.34},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":9020,"max":10450,"rate":0.35},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":10450,"max":10810,"rate":0.36},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":10810,"max":11180,"rate":0.37},
	{"guaranteeFund":[4000,5000,6000,7000,8000,9000,10000],"min":11180,"max":11590,"rate":0.38},
	{"guaranteeFund":[4000],"min":11590,"max":12010,"rate":0.39},
	{"guaranteeFund":[5000,6000,7000,8000,9000,10000],"min":11590,"max":12020,"rate":0.39},
	{"guaranteeFund":[4000],"min":12010,"max":12850,"rate":0.4},
	{"guaranteeFund":[5000],"min":12020,"max":15020,"rate":0.4},
	{"guaranteeFund":[6000,7000,8000,9000,10000],"min":12020,"max":15030,"rate":0.4},
	{"guaranteeFund":[4000],"min":12850,"max":13070,"rate":0.41},
	{"guaranteeFund":[5000],"min":15020,"max":15270,"rate":0.41},
	{"guaranteeFund":[6000,7000,8000,9000,10000],"min":15030,"max":15640,"rate":0.41},	
	{"guaranteeFund":[4000],"min":13070,"max":13300,"rate":0.42},
	{"guaranteeFund":[5000],"min":15270,"max":15540,"rate":0.42},
	{"guaranteeFund":[6000,7000,8000,9000,10000],"min":15640,"max":16300,"rate":0.42},
	{"guaranteeFund":[4000],"min":13300,"max":13540,"rate":0.43},
	{"guaranteeFund":[5000],"min":15540,"max":15820,"rate":0.43},
	{"guaranteeFund":[6000,7000,8000,9000,10000],"min":16300,"max":17020,"rate":0.43},
	{"guaranteeFund":[4000],"min":13540,"max":13780,"rate":0.44},
	{"guaranteeFund":[5000],"min":15820,"max":16110,"rate":0.44},
	{"guaranteeFund":[6000,7000,8000,9000,10000],"min":17020,"max":17800,"rate":0.44},
	{"guaranteeFund":[4000],"min":13780,"max":14480,"rate":0.45},
	{"guaranteeFund":[5000],"min":16110,"max":17020,"rate":0.45},
	{"guaranteeFund":[6000],"min":17800,"max":19570,"rate":0.45},
	{"guaranteeFund":[7000],"min":17800,"max":22120,"rate":0.45},
	{"guaranteeFund":[8000],"min":17800,"max":24660,"rate":0.45},
	{"guaranteeFund":[9000,10000],"min":17800,"max":26540,"rate":0.45},
	{"guaranteeFund":[4000],"min":14480,"max":14750,"rate":0.46},
	{"guaranteeFund":[5000],"min":17020,"max":17350,"rate":0.46},
	{"guaranteeFund":[6000],"min":19570,"max":19940,"rate":0.46},
	{"guaranteeFund":[7000],"min":22120,"max":22530,"rate":0.46},
	{"guaranteeFund":[8000],"min":24660,"max":25130,"rate":0.46},
	{"guaranteeFund":[9000],"min":26540,"max":27330,"rate":0.46},
	{"guaranteeFund":[10000],"min":26540,"max":27890,"rate":0.46},
	{"guaranteeFund":[4000],"min":14750,"max":15030,"rate":0.47},
	{"guaranteeFund":[5000],"min":17350,"max":17680,"rate":0.47},
	{"guaranteeFund":[6000],"min":19940,"max":20320,"rate":0.47},
	{"guaranteeFund":[7000],"min":22530,"max":22970,"rate":0.47},
	{"guaranteeFund":[8000],"min":25130,"max":25610,"rate":0.47},
	{"guaranteeFund":[9000],"min":27330,"max":27860,"rate":0.47},
	{"guaranteeFund":[10000],"min":27890,"max":29380,"rate":0.47},
	{"guaranteeFund":[4000],"min":15030,"max":15330,"rate":0.48},
	{"guaranteeFund":[5000],"min":17680,"max":18030,"rate":0.48},
	{"guaranteeFund":[6000],"min":20320,"max":20720,"rate":0.48},
	{"guaranteeFund":[7000],"min":22970,"max":23420,"rate":0.48},
	{"guaranteeFund":[8000],"min":25610,"max":26110,"rate":0.48},
	{"guaranteeFund":[9000],"min":27860,"max":28400,"rate":0.48},
	{"guaranteeFund":[10000],"min":29380,"max":30370,"rate":0.48},
	{"guaranteeFund":[4000],"min":15330,"max":15640,"rate":0.49},
	{"guaranteeFund":[5000],"min":18030,"max":18390,"rate":0.49},
	{"guaranteeFund":[6000],"min":20720,"max":21140,"rate":0.49},
	{"guaranteeFund":[7000],"min":23420,"max":23890,"rate":0.49},
	{"guaranteeFund":[8000],"min":26110,"max":26640,"rate":0.49},
	{"guaranteeFund":[9000],"min":28400,"max":28970,"rate":0.49},
	{"guaranteeFund":[10000],"min":30370,"max":30970,"rate":0.49},
	{"guaranteeFund":[4000],"min":15640,"max":16590,"rate":0.50},
	{"guaranteeFund":[5000],"min":18390,"max":19490,"rate":0.50},
	{"guaranteeFund":[6000],"min":21140,"max":22410,"rate":0.50},
	{"guaranteeFund":[7000],"min":23890,"max":25330,"rate":0.50},
	{"guaranteeFund":[8000],"min":26640,"max":28240,"rate":0.50},
	{"guaranteeFund":[9000],"min":28970,"max":31160,"rate":0.50},
	{"guaranteeFund":[10000],"min":30970,"max":34080,"rate":0.50},
	{"guaranteeFund":[4000],"min":16590,"max":16930,"rate":0.51},
	{"guaranteeFund":[5000],"min":19490,"max":19900,"rate":0.51},
	{"guaranteeFund":[6000],"min":22410,"max":22880,"rate":0.51},
	{"guaranteeFund":[7000],"min":25330,"max":25860,"rate":0.51},
	{"guaranteeFund":[8000],"min":28240,"max":28830,"rate":0.51},
	{"guaranteeFund":[9000],"min":31160,"max":31810,"rate":0.51},
	{"guaranteeFund":[10000],"min":34080,"max":34790,"rate":0.51},
	{"guaranteeFund":[4000],"min":16930,"max":17290,"rate":0.52},
	{"guaranteeFund":[5000],"min":19900,"max":20320,"rate":0.52},
	{"guaranteeFund":[6000],"min":22880,"max":23370,"rate":0.52},
	{"guaranteeFund":[7000],"min":25860,"max":26410,"rate":0.52},
	{"guaranteeFund":[8000],"min":28830,"max":29440,"rate":0.52},
	{"guaranteeFund":[9000],"min":31810,"max":32480,"rate":0.52},
	{"guaranteeFund":[10000],"min":34790,"max":35530,"rate":0.52},
	{"guaranteeFund":[4000],"min":17290,"max":17670,"rate":0.53},
	{"guaranteeFund":[5000],"min":20320,"max":20770,"rate":0.53},
	{"guaranteeFund":[6000],"min":23370,"max":23870,"rate":0.53},
	{"guaranteeFund":[7000],"min":26410,"max":26980,"rate":0.53},
	{"guaranteeFund":[8000],"min":29440,"max":30080,"rate":0.53},
	{"guaranteeFund":[9000],"min":32480,"max":33190,"rate":0.53},
	{"guaranteeFund":[10000],"min":35530,"max":36300,"rate":0.53},
	{"guaranteeFund":[4000],"min":17670,"max":18060,"rate":0.54},
	{"guaranteeFund":[5000],"min":20770,"max":21230,"rate":0.54},
	{"guaranteeFund":[6000],"min":23870,"max":24400,"rate":0.54},
	{"guaranteeFund":[7000],"min":26980,"max":27580,"rate":0.54},
	{"guaranteeFund":[8000],"min":30080,"max":30750,"rate":0.54},
	{"guaranteeFund":[9000],"min":33190,"max":33930,"rate":0.54},
	{"guaranteeFund":[10000],"min":36300,"max":37100,"rate":0.54},
	{"guaranteeFund":[4000],"min":18060,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[5000],"min":21230,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[6000],"min":24400,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[7000],"min":27580,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[8000],"min":30750,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[9000],"min":33930,"max":2344e1000,"rate":0.55},
	{"guaranteeFund":[10000],"min":37100,"max":2344e1000,"rate":0.55}

]