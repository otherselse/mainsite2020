var lgEcharts={
            getData:function(){
                var data0=[],data1=[],data2=[],data3=[];
                var ds=[data0,data1,data2,data3];
                var echartItemName=[];
                
                
                for(var j=0;j<echartItem.length;j++){
                    echartItemName.push(echartItem[j]);
                    for(var i=0;i<applyPriceLines.length;i++){
                        if(applyPriceLines[i].logID==j){
                            ds[j].push([applyPriceLines[i].createDate,applyPriceLines[i].salePrice]);
                        }
                    }

                    var myobj={
                                name:echartItem[j].name,
                                type:'line',
                                smooth:true,
                               //symbol: 'none',
                               showSymbol: false,
                                smooth:0.3,
                                sampling: 'average',
                                itemStyle: {
                                    normal: {color: echartItem[j].color}
                                },
                                data: ds[j]
                            }
                    series.push(myobj)

                }
            },
            init:function(){
                lgEcharts.getData();
                var dom = document.getElementById("containterChart");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    title: null,
                   legend: {
                       // icon: "path://m",
                        icon:"rect",
                        itemWidth:8,
                        itemHeight: 8,
                        itemGap: 10,
                        top: 4,
                        right: 10,
                        data: echartItem,
                        selected: echartItemObj
                    },
                    xAxis: [{
                        splitLine: {
                            show:false
                        },
                        axisLine:{
                            lineStyle:{
                                width:1
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        boundaryGap: false,
                        type:'time',                        
                        axisLabel : {
                            formatter: function(value,index){
                                var date = new Date(value);
                                var texts = [(date.getMonth() + 1), date.getDate()];
                                if (index === 0) {
                                    texts.unshift(date.getFullYear());
                                }
                                return texts.join('/');
                            }
                        },
                        maxInterval: 30 * 24 * 3600 * 1000
                    }],
                    yAxis: [{
                        min:3400,
                        max:4600,
                        interval:200,
                        axisLine:{
                            lineStyle:{
                               // color:'#333',
                                  width:0,   //这里是坐标轴的宽度,可以去掉
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                           // show:false
                           color:'#333'
                        },
                        splitLine: {
                            lineStyle: {
                                color: ['#F4F4F4 ']
                            }
                        }
                    }],
                   grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    tooltip : {  
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#5C689D'
                            }
                        } ,
                        formatter:function(params)  
                        {  
                           var relVal = params[0].name; 
                           var marr=params[0].axisValueLabel.split("\n");
                           var mytime=marr[1]+"-"+marr[0];
                           //console.log(params[0]) 
                           for (var i = 0, l = params.length; i < l; i++) {  
                            //console.log(params[i].value[1])
                                relVal +=  "<br/>"+params[i].seriesName + ' : ' + params[i].value[1]+"元/吨";  
                            }  
                           return mytime+relVal;  
                        }  



                    },  
                    series: series
                };

                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            }
        }

    $(function(){
            lgEcharts.init();
    })