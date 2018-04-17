//数据展示区1
function loadChart1() {
	var data = [{
	    "name": "1月",
	    "value": 80
	}, {
	    "name": "2月",
	    "value": 87.8
	}, {
	    "name": "3月",
	    "value": 71
	}, {
	    "name": "4月",
	    "value": 80
	}, {
	    "name": "5月",
	    "value": 66
	}, {
	    "name": "6月",
	    "value": 80
	}, {
	    "name": "7月",
	    "value": 82
	},{
	    "name": "8月",
	    "value": 77.4
	},{
	    "name": "9月",
	    "value": 85.2
	},{
	    "name": "10月",
	    "value": 93.2
	},{
	    "name": "11月",
	    "value": 71.6
	},{
	    "name": "12月",
	    "value": 81.3
	}];
	var xData = [],
	    yData = [];
	var min = 50; 
	data.map(function(a, b) {
		if(b < 6) {
			xData.push(a.name);
		    if (a.value === 0) {
		        yData.push(a.value + min);
		    } else {
		        yData.push(a.value);
		    }
		}
	});
	var myChart = echarts.init(document.querySelector('.chart1'));
	var option = {
	    // backgroundColor:"#111c4e",
	    color: ['#3398DB'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line',
	            lineStyle: {
	                opacity: 0
	            }
	        },
	        formatter: function(prams) {
	            if (prams[0].data === min) {
	                return "指标：0%"
	            } else {
	                return "指标：" + prams[0].data + "%"
	            }
	        }
	    },
	    legend: {
	        data: ['直接访问', '背景'],
	        show: false
	    },
	    grid: {
	        left: '0%',
	        right: '0%',
	        bottom: '0%',
	        top: '10%',
	        containLabel: true,
	        z: 22
	    },
	    xAxis: [{
	        type: 'category',
	        gridIndex: 0,
	        data: xData,
	        axisTick: {
	            alignWithLabel: true
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#0c3b71'
	            }
	        },
	        axisLabel: {
	            show: true,
	             color: 'rgb(170,170,170)',
	             fontSize:14
	        }
	    }],
	    yAxis: [{
	            type: 'value',
	            gridIndex: 0,
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            min: min,
	            max: 100,
	            axisLine: {
	                lineStyle: {
	                    color: '#0c3b71'
	                }
	            },
	            axisLabel: {
	                color: 'rgb(170,170,170)',
	                formatter: '{value} %'
	            }
	        },
	        {
	            type: 'value',
	            gridIndex: 0,
	            min: min,
	            max: 100,
	            splitNumber: 12,
	            splitLine: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                show: false
	            },
	            splitArea: {
	                show: true,
	                areaStyle: {
	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
	                }
	            }
	        }
	    ],
	    series: [{
	            name: '指标',
	            type: 'bar',
	            barWidth: '30%',
	            xAxisIndex: 0,
	            yAxisIndex: 0,
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: '#00feff'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#027eff'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0286ff'
	                            }
	                        ]
	                    )
	                }
	            },
	            data: yData,
	            zlevel: 11

	        },
	        {
	            name: '背景',
	            type: 'bar',
	            barWidth: '50%',
	            xAxisIndex: 0,
	            yAxisIndex: 1,
	            barGap: '-135%',
	            data: [100, 100, 100, 100, 100, 100],
	            itemStyle: {
	                normal: {
	                    color: 'rgba(255,255,255,0.1)'
	                }
	            },
	            zlevel: 9
	        }
	    ]
	};

	myChart.setOption(option);

	var index = 1;
	setInterval(function() {
		xData = [];
		yData = [];
		data.map(function(a, b) {
			if(index > 6) index = 0;
			if(b >= index && b < 6 + index) {
				xData.push(a.name);
			    if (a.value === 0) {
			        yData.push(a.value + min);
			    } else {
			        yData.push(a.value);
			    }
			}
		});
		myChart.setOption({
			xAxis: {
				data: xData
			},
			series: [{
				name: '指标',
				data: yData
			}]
		});
		index++;
	}, 3000)
}

function loadChart2() {
	var data = [
		{
			month: '1月',
			woman: 327,
			man: 709
		},
		{
			month: '2月',
			woman: 1776,
			man: 1917
		},
		{
			month: '3月',
			woman: 507,
			man: 2458
		},
		{
			month: '4月',
			woman: 1200,
			man: 2602
		},
		{
			month: '5月',
			woman: 851,
			man: 1798
		},
		{
			month: '6月',
			woman: 482,
			man: 1433
		},
		{
			month: '7月',
			woman: 204,
			man: 1544
		},
		{
			month: '8月',
			woman: 658,
			man: 3514
		},
		{
			month: '9月',
			woman: 859,
			man: 3248
		},
		{
			month: '10月',
			woman: 512,
			man: 2016
		},
		{
			month: '11月',
			woman: 1026,
			man: 3215
		},
		{
			month: '12月',
			woman: 1088,
			man: 4056
		}
	];

 	var xData = [];
 	var manData = [];
 	var womanData = [];
	data.map(function(a, b) {
		if(b < 6) {
			xData.push(a.month);
			manData.push(a.man);
			womanData.push(a.woman);
		}
	});

	var myChart = echarts.init(document.querySelector('.chart2'));
	var option = {
	    "tooltip": {
	        "trigger": "axis",
	        "axisPointer": {
	            "type": "shadow",
	            textStyle: {
	                color: "#fff"
	            }
	        },
	    },
	    grid: {
	        top: '10%',
	        bottom: '0%',
	        left: '0%',
	        right: '0%',
	        containLabel: true,
	        textStyle: {
	            color: '#fff'
	        }
	    },
	    "legend": {
	        x: '4%',
	        top: '11%',
	        textStyle: {
	            color: '#90979c',
	        },
	        "data": ['女', '男', '平均'],
	        show: false
	    },
	     

	    "calculable": true,
	    xAxis: [{
	        type: 'category',
	        gridIndex: 0,
	        data: xData,
	        axisTick: {
	            alignWithLabel: true
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#0c3b71'
	            }
	        },
	        axisLabel: {
	            show: true,
	             color: 'rgb(170,170,170)',
	             fontSize:14
	        }
	    }],
	    yAxis: [{
	            type: 'value',
	            gridIndex: 0,
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                lineStyle: {
	                    color: '#0c3b71'
	                }
	            },
	            axisLabel: {
	                color: 'rgb(170,170,170)',
	                formatter: '{value}'
	            }
	        },
	        {
	            type: 'value',
	            gridIndex: 0,
	            splitNumber: 12,
	            splitLine: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                show: false
	            },
	            splitArea: {
	                show: true,
	                areaStyle: {
	                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
	                }
	            }
	        }
	    ],
	    "series": [{
	            "name": "女",
	            "type": "bar",
	            "stack": "总量",
	            "barMaxWidth": 35,
	            "barWidth": "30%",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(255,144,128,1)",
	                    "label": {
	                        "show": false,
	                        "textStyle": {
	                            "color": "#fff"
	                        },
	                        "position": "insideTop",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": womanData
	        },
	        {
	            "name": "男",
	            "type": "bar",
	            "stack": "总量",
	            "barWidth": "30%",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(0,191,183,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": false,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": manData
	        },
	        {
	            name: '背景',
	            type: 'bar',
	            barWidth: '50%',
	            xAxisIndex: 0,
	            yAxisIndex: 1,
	            barGap: '-135%',
	            data: [100, 100, 100, 100, 100, 100],
	            itemStyle: {
	                normal: {
	                    color: 'rgba(255,255,255,0.1)'
	                }
	            },
	            zlevel: 9
	        }
	    ]
	}
	myChart.setOption(option);

	var index = 1;
	setInterval(function() {
		xData = [];
		manData = [];
		womanData = [];
		data.map(function(a, b) {
			if(index > 6) index = 0;
			if(b >= index && b < 6 + index) {
				xData.push(a.month);
			    manData.push(a.man);
			    womanData.push(a.woman);
			}
		});
		myChart.setOption({
			xAxis: {
				data: xData
			},
			series: [{
				name: '男',
				data: manData
			}, {
				name: '女',
				data: womanData
			}]
		});
		index++;
	}, 3000)
}

function loadChart3() {
	var myChart = echarts.init(document.querySelector('.chart3'));
	var scaleData = [{
	        'name': '指标1',
	        'value': 10
	    },
	    {
	        'name': '指标2',
	        'value': 20
	    },
	    {
	        'name': '指标3',
	        'value': 20
	    },
	    {
	        'name': '指标4',
	        'value': 27
	    },
	    {
	        'name': '指标5',
	        'value': 23
	    }
	];
	var rich = {
	    white: {
	        color: '#ddd',
	        align: 'center',
	        padding: [5, 0]
	    }
	};
	var placeHolderStyle = {
	    normal: {
	        label: {
	            show: false
	        },
	        labelLine: {
	            show: false
	        },
	        color: 'rgba(0, 0, 0, 0)',
	        borderColor: 'rgba(0, 0, 0, 0)',
	        borderWidth: 0
	    }
	};
	var data = [];
	for (var i = 0; i < scaleData.length; i++) {
	    data.push({
	        value: scaleData[i].value,
	        name: scaleData[i].name,
	        itemStyle: {
	            normal: {
	                borderWidth: 5,
	                shadowBlur: 30,
	                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	                    offset: 0,
	                    color: '#7777eb'
	                }, {
	                    offset: 1,
	                    color: '#70ffac'
	                }]),
	                shadowColor: 'rgba(142, 152, 241, 0.6)'
	            }
	        }
	    }, {
	        value: 4,
	        name: '',
	        itemStyle: placeHolderStyle
	    });
	}
	var seriesObj = [{
	    name: '',
	    type: 'pie',
	    clockWise: false,
	    radius: ['55%', '60%'],
	    hoverAnimation: false,
	    itemStyle: {
	        normal: {
	            label: {
	                show: true,
	                position: 'outside',
	                color: '#ddd',
	                formatter: function(params) {
	                    var percent = 0;
	                    var total = 0;
	                    for (var i = 0; i < scaleData.length; i++) {
	                        total += scaleData[i].value;
	                    }
	                    percent = ((params.value / total) * 100).toFixed(0);
	                    if(params.name !== '') {
	                        return params.name + '{white|' + '：' + percent + '%}';
	                    }else {
	                        return '';
	                    }
	                },
	                rich: rich
	            },
	            labelLine: {
	                show: true
	            }
	        }
	    },
	    data: data
	}];
	var option = {
	    tooltip: {
	        show: false
	    },
	    legend: {
	        show: false
	    },
	    toolbox: {
	        show: false
	    },
	    series: seriesObj
	}

	// var option = {
	//     tooltip : {
	//         trigger: 'item',
	//         formatter: "{a} <br/>{b} : {c} ({d}%)"
	//     },
	//     series : [
	//         {
	//             name: '访问来源',
	//             type: 'pie',
	//             radius : ['45%', '60%'],
	//             center: ['50%', '50%'],
	//             data:[
	//                 {value:156, name: '指标1'},
	//                 {value:163, name: '指标2'},
	//                 {value:147, name: '指标3'},
	//                 {value:139, name: '指标4'},
	//                 {value:188, name: '指标5'},
	//                 {value:148, name: '指标6'}
	//             ],
	//             itemStyle: {
	//                 emphasis: {
	//                     shadowBlur: 10,
	//                     shadowOffsetX: 0,
	//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
	//                 }
	//             }
	//         }
	//     ]
	// };
	myChart.setOption(option);
}

function loadChart4() {
	var data = [{
	    value: 3661,
	    name: '<10w'
	}, {
	    value: 5713,
	    name: '10w-50w'
	}, {
	    value: 9938,
	    name: '50w-100w'
	}, {
	    value: 17623,
	    name: '100w-500w'
	}, {
	    value: 3299,
	    name: '>500w'
	}];
	var myChart = echarts.init(document.querySelector('.chart4'));
	var option = {
	    tooltip: {
	        show: true,
	        trigger: 'item',
	        formatter: "{b}: {c} ({d}%)"
	    },
	    series: [{
	        type: 'pie',
	        selectedMode: 'single',
	        radius: ['25%', '58%'],
	        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
	        label: {
	        	normal: {
	        		formatter: '{c}'
	        	}
	        },
	        data: data
	    }, {
	        type: 'pie',
	        radius: ['58%', '83%'],
	        itemStyle: {
	            normal: {
	                color: 'rgba(1,99,126,0.3)'
	            },
	            emphasis: {
	                color: 'rgba(1,99,126,0.3)'
	            }
	        },
	        label: {
	        	normal: {
	        		show: false
	        	}
	        },
	        data: data
	    }]
	};
	myChart.setOption(option);
}

function loadChart5() {
	var myChart = echarts.init(document.querySelector('.chart5'));

	var option = {
	    tooltip: {
	        trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
	        axisPointer: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        }
	    },
	    grid: {
	    	top: '10%',
	        left: '0%', //grid 组件离容器左侧的距离。
	        right: '0%', //grid 组件离容器右侧的距离。
	        bottom: '0%', //grid 组件离容器下侧的距离。
	        containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
	    },
	    xAxis: [{
	        type: 'category',
	        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
	        axisLine: {
	            lineStyle: {
	                color: '#0c3b71', //坐标轴线线的颜色。
	            }
	        },
	        axisTick: {
	        	show: false
	        },
	        axisLabel: {
	            show: true,
	            color: 'rgb(170,170,170)',
	            fontSize: 14
	        },
	        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
	    }],
	    yAxis: [{
	        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
	        name: '单位（%）', //坐标轴名称。
	        axisTick: {
	            show: false //是否显示坐标轴刻度
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#0c3b71', //坐标轴线线的颜色
	            }
	        },
	        axisLabel: {
	            margin: 10, //刻度标签与轴线之间的距离
	            textStyle: {
	                fontSize: 14 //文字的字体大小
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: '#57617B' //分隔线颜色设置
	            }
	        },
	        axisLabel: {
	            show: true,
	            color: 'rgb(170,170,170)'
	        }
	    }],
	    series: [{
	        name: '移动', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
	        type: 'line',
	        smooth: true, //是否平滑曲线显示
	        symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	        symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
	        showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
	        lineStyle: { //线条样式
	            normal: {
	                width: 1 //线宽。[ default: 2 ] 
	            }
	        },
	        areaStyle: { //区域填充样式
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
	                    offset: 0, // 0% 处的颜色
	                    color: 'rgba(137, 189, 27, 0.3)'
	                }, {
	                    offset: 0.8, // 80% 处的颜色
	                    color: 'rgba(137, 189, 27, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
	                shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
	            }
	        },
	        itemStyle: { //折线拐点标志的样式
	            normal: {
	                color: 'rgb(137,189,27)',
	                borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
	                borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ] 

	            }
	        },
	        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
	    }, {
	        name: '电信',
	        type: 'line',
	        smooth: true,
	        symbol: 'circle',
	        symbolSize: 5,
	        showSymbol: false,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(0, 136, 212, 0.3)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(0, 136, 212, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'rgb(0,136,212)',
	                borderColor: 'rgba(0,136,212,0.2)',
	                borderWidth: 12

	            }
	        },
	        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
	    }, {
	        name: '联通',
	        type: 'line',
	        smooth: true,
	        symbol: 'circle',
	        symbolSize: 5,
	        showSymbol: false,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(219, 50, 51, 0.3)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(219, 50, 51, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {

	                color: 'rgb(219,50,51)',
	                borderColor: 'rgba(219,50,51,0.2)',
	                borderWidth: 12
	            }
	        },
	        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
	    }, ]
	};
	myChart.setOption(option);
}

function loadChart6() {
	var myChart = echarts.init(document.querySelector('.chart6'));

	var data = [
		{value: 1, name: '轮播滚动事件轮播滚动事件1'},
		{value: 1, name: '轮播滚动事件轮播滚动事件轮播滚动2'},
		{value: 1, name: '轮播滚动事件轮播滚动3'},
		{value: 1, name: '轮播滚动事件轮播滚动事件轮播4'},
		{value: 1, name: '轮播滚动轮播滚动事件轮播滚动事件5'}
	];
	var showData = [];
	data.map(function(item, index) {
		if(index < 4) {
			showData.push(item);
		}
	});
	var option = {
	    grid: {
	        top: '0%',
	        left: '3%',
	        right: '4%',
	        bottom: '0%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        show: false,
	        position: 'top'
	    },
	    yAxis: {
	        type: 'category',
	        data: [1, 1, 1, 1],
	        show: false
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: showData,
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'insideLeft',
	            		fontSize: 14,
	            		color: 'rgba(255,255,255,0.8)',
	            		formatter: function(e) {
	            			return e.data.name
	            		}
	            	}
	            },
	            itemStyle: {
	            	barBorderRadius: 10,
	            	color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(0,254,255,0.5)'
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(2,126,255,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(2,132,255,0.5)'
                            }
                        ]
                    )
	            }
	        }
	    ]
	};


	myChart.setOption(option);

	var i = 4;
	setInterval(function() {
		if(i === data.length) i = 0;
		showData.shift();
		showData.push(data[i]);
		i++;
		myChart.setOption({
			series: [
				{
					name: '2011年',
					data: showData
				}
			]
		});
	}, 3000);
}

function loadMap() {
	var myChart = echarts.init(document.querySelector('.map-container'));

	var geoCoordMap = {
		'上海': [121.4648,31.2891],
		'东莞': [113.8953,22.901],
		'东营': [118.7073,37.5513],
		'中山': [113.4229,22.478],
		'临汾': [111.4783,36.1615],
		'临沂': [118.3118,35.2936],
		'丹东': [124.541,40.4242],
		'丽水': [119.5642,28.1854],
		'乌鲁木齐': [87.9236,43.5883],
		'佛山': [112.8955,23.1097],
		'保定': [115.0488,39.0948],
		'兰州': [103.5901,36.3043],
		'包头': [110.3467,41.4899],
		'北京': [116.4551,40.2539],
		'北海': [109.314,21.6211],
		'南京': [118.8062,31.9208],
		'南宁': [108.479,23.1152],
		'南昌': [116.0046,28.6633],
		'南通': [121.1023,32.1625],
		'厦门': [118.1689,24.6478],
		'台州': [121.1353,28.6688],
		'合肥': [117.29,32.0581],
		'呼和浩特': [111.4124,40.4901],
		'咸阳': [108.4131,34.8706],
		'哈尔滨': [127.9688,45.368],
		'唐山': [118.4766,39.6826],
		'嘉兴': [120.9155,30.6354],
		'大同': [113.7854,39.8035],
		'大连': [122.2229,39.4409],
		'天津': [117.4219,39.4189],
		'太原': [112.3352,37.9413],
		'威海': [121.9482,37.1393],
		'宁波': [121.5967,29.6466],
		'宝鸡': [107.1826,34.3433],
		'宿迁': [118.5535,33.7775],
		'常州': [119.4543,31.5582],
		'广州': [113.5107,23.2196],
		'廊坊': [116.521,39.0509],
		'延安': [109.1052,36.4252],
		'张家口': [115.1477,40.8527],
		'徐州': [117.5208,34.3268],
		'德州': [116.6858,37.2107],
		'惠州': [114.6204,23.1647],
		'成都': [103.9526,30.7617],
		'扬州': [119.4653,32.8162],
		'承德': [117.5757,41.4075],
		'拉萨': [91.1865,30.1465],
		'无锡': [120.3442,31.5527],
		'日照': [119.2786,35.5023],
		'昆明': [102.9199,25.4663],
		'杭州': [119.5313,29.8773],
		'枣庄': [117.323,34.8926],
		'柳州': [109.3799,24.9774],
		'株洲': [113.5327,27.0319],
		'武汉': [114.3896,30.6628],
		'汕头': [117.1692,23.3405],
		'江门': [112.6318,22.1484],
		'沈阳': [123.1238,42.1216],
		'沧州': [116.8286,38.2104],
		'河源': [114.917,23.9722],
		'泉州': [118.3228,25.1147],
		'泰安': [117.0264,36.0516],
		'泰州': [120.0586,32.5525],
		'济南': [117.1582,36.8701],
		'济宁': [116.8286,35.3375],
		'海口': [110.3893,19.8516],
		'淄博': [118.0371,36.6064],
		'淮安': [118.927,33.4039],
		'深圳': [114.5435,22.5439],
		'清远': [112.9175,24.3292],
		'温州': [120.498,27.8119],
		'渭南': [109.7864,35.0299],
		'湖州': [119.8608,30.7782],
		'湘潭': [112.5439,27.7075],
		'滨州': [117.8174,37.4963],
		'潍坊': [119.0918,36.524],
		'烟台': [120.7397,37.5128],
		'玉溪': [101.9312,23.8898],
		'珠海': [113.7305,22.1155],
		'盐城': [120.2234,33.5577],
		'盘锦': [121.9482,41.0449],
		'石家庄': [114.4995,38.1006],
		'福州': [119.4543,25.9222],
		'秦皇岛': [119.2126,40.0232],
		'绍兴': [120.564,29.7565],
		'聊城': [115.9167,36.4032],
		'肇庆': [112.1265,23.5822],
		'舟山': [122.2559,30.2234],
		'苏州': [120.6519,31.3989],
		'莱芜': [117.6526,36.2714],
		'菏泽': [115.6201,35.2057],
		'营口': [122.4316,40.4297],
		'葫芦岛': [120.1575,40.578],
		'衡水': [115.8838,37.7161],
		'衢州': [118.6853,28.8666],
		'西宁': [101.4038,36.8207],
		'西安': [109.1162,34.2004],
		'贵阳': [106.6992,26.7682],
		'连云港': [119.1248,34.552],
		'邢台': [114.8071,37.2821],
		'邯郸': [114.4775,36.535],
		'郑州': [113.4668,34.6234],
		'鄂尔多斯': [108.9734,39.2487],
		'重庆': [107.7539,30.1904],
		'金华': [120.0037,29.1028],
		'铜川': [109.0393,35.1947],
		'银川': [106.3586,38.1775],
		'镇江': [119.4763,31.9702],
		'长春': [125.8154,44.2584],
		'长沙': [113.0823,28.2568],
		'长治': [112.8625,36.4746],
		'阳泉': [113.4778,38.0951],
		'青岛': [120.4651,36.3373],
		'韶关': [113.7964,24.7028]
	};

	var BJData = [
		[{name:'北京'}, {name:'上海',value:95}],
		[{name:'北京'}, {name:'广州',value:90}],
		[{name:'北京'}, {name:'大连',value:80}],
		[{name:'北京'}, {name:'南宁',value:70}],
		[{name:'北京'}, {name:'南昌',value:60}],
		[{name:'北京'}, {name:'拉萨',value:50}],
		[{name:'北京'}, {name:'长春',value:40}],
		[{name:'北京'}, {name:'包头',value:30}],
		[{name:'北京'}, {name:'重庆',value:20}],
		[{name:'北京'}, {name:'常州',value:10}]
	];

	var SHData = [
		[{name:'上海'},{name:'包头',value:95}],
		[{name:'上海'},{name:'昆明',value:90}],
		[{name:'上海'},{name:'广州',value:80}],
		[{name:'上海'},{name:'郑州',value:70}],
		[{name:'上海'},{name:'长春',value:60}],
		[{name:'上海'},{name:'重庆',value:50}],
		[{name:'上海'},{name:'长沙',value:40}],
		[{name:'上海'},{name:'北京',value:30}],
		[{name:'上海'},{name:'丹东',value:20}],
		[{name:'上海'},{name:'大连',value:10}]
	];

	var GZData = [
		[{name:'广州'},{name:'福州',value:95}],
		[{name:'广州'},{name:'太原',value:90}],
		[{name:'广州'},{name:'长春',value:80}],
		[{name:'广州'},{name:'重庆',value:70}],
		[{name:'广州'},{name:'西安',value:60}],
		[{name:'广州'},{name:'成都',value:50}],
		[{name:'广州'},{name:'常州',value:40}],
		[{name:'广州'},{name:'北京',value:30}],
		[{name:'广州'},{name:'北海',value:20}],
		[{name:'广州'},{name:'海口',value:10}]
	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function (data) {
		console.log(data);
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord],
					value: dataItem[1].value
				});
			}
		}
		return res;
	};

	var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var series = [];
	[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		//console.log(item,i);
		series.push({
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			symbol: ['none', 'arrow'],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function (val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function (dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});
	console.log(series)

	option = {
		tooltip : {
			trigger: 'item',
			formatter:function(params, ticket, callback){
				console.log(params);
				if(params.seriesType=="effectScatter") {
					return "线路："+params.data.name+""+params.data.value[2];
				}else if(params.seriesType=="lines"){
					return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
				}else{
					return params.name;
				}
			}
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data:['北京 Top10', '上海 Top10', '广州 Top10'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'multiple',
		},

		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: true,
					color:'#fff'
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(0,254,255,0.7)'
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(2,126,255,0.7)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(2,132,255,0.7)'
                            }
                        ]
                    ),
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(0,254,255,0.7)'
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(2,126,255,0.7)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(2,132,255,0.7)'
                            }
                        ]
                    )
				}
			}
		},
		series: series
	};

	myChart.setOption(option);
}

loadChart1();
loadChart2();
loadChart3();
loadChart4();
loadChart5();
loadChart6();
loadMap();