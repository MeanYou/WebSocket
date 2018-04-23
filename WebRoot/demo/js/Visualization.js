var status = 'country';
var globalInterval;

// 标题区域
function loadTitle(data) {
	$('.map-title > ul > li:nth-child(1) > div > span:nth-child(3)').html('&nbsp;' + data.saler);
	$('.map-title > ul > li:nth-child(2) > div > span:nth-child(3)').html('&nbsp;' + data.selfSupprotHall);
	$('.map-title > ul > li:nth-child(3) > div > span:nth-child(3)').html('&nbsp;' + data.sale);
}

//数据展示区1
var chart1;
var prevOption1;
function loadChart1(data) {
	console.log(data);
	var finishedData = data.finishedData;
	var unfinishedData = data.unfinishedData;
	var xData = finishedData.map(function(item) {
		return item.name
	});
	if(chart1) chart1.dispose();
	chart1 = echarts.init(document.querySelector('.chart1'));
	var option = {
		color : [ '#52AAFA', '#FFFFFF' ],
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'line',
				lineStyle : {
					opacity : 0
				}
			},
			formatter : function(params) {
				if (params.length === 1) {
					return params[0].seriesName + '：' + params[0].value + '辆';
				} else {
					return params[0].seriesName + '：' + params[0].value
							+ '辆<br/>' + params[1].seriesName + '：'
							+ params[1].value + '辆'
				}
			}
		},
		legend : {
			data : [ '已完成销售', '未完成销售' ],
			show : true,
			orient : 'vertical',
			itemWidth : 16,
			itemHeight : 10,
			itemGap : 5,
			textStyle : {
				color : '#ddd',
				fontSize : 12
			},
			right : 0
		},
		grid : {
			left : '2%',
			right : '10%',
			bottom : '2%',
			top : '10%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			data : xData,
			axisLabel : {
				show : true,
				color : '#ddd',
				fontSize : 12,
				formatter : function(value) {
					return value.split("").join("\n");
				}
			},
			axisLine : {
				lineStyle : {
					color : '#0177d4'
				},
				symbol : [ 'none', 'arrow' ],
				symbolSize : [ 6, 8 ]
			},
			axisTick : {
				show : false
			}
		},
		yAxis : {
			//name : "销售/辆",
			nameTextStyle : {
				color : '#fff',
				fontSize : 12
			},
			type : 'value',
			axisLine : {
				lineStyle : {
					color : '#36A8C1'
				},
				symbol : [ 'none', 'arrow' ],
				symbolSize : [ 6, 8 ]
			},
			axisLabel : {
				color : '#ddd',
				fontSize : 12
			},
			splitLine : {
				show : false,
				lineStyle : {
					color : '#0177d4'
				}
			},
			//interval : 1000,
			//max : 3200,
			splitNumber: 3
		},
		series : [ {
			name : '已完成销售',
			stack : 'total',
			type : 'bar',
			barWidth : 12,
			xAxisIndex : 0,
			yAxisIndex : 0,
			data : finishedData
		}, {
			name : '未完成销售',
			stack : 'total',
			type : 'bar',
			barWidth : 12,
			data : unfinishedData
		} ]
	};

	chart1.setOption(option);
	prevOption1 = chart1.getOption();
}
function reloadChart1(data) {
	console.log(data);
	var provinceData = data.province;
	var xData = [];
	var finishedData = [];
	var unfinishedData = [];
	for(var key in provinceData) {
		var detail = provinceData[key];
		finishedData.push({
			name: key,
			value: detail.sale,
			unfinishedValue: detail.unsale
		});
	}
	finishedData.sort(function(a, b) {
		return b.value - a.value;
	});
	finishedData.forEach(function(item, index) {
		xData.push(item.name);
		unfinishedData.push({
			name: item.name,
			value: item.unfinishedValue
		})
	});
	chart1.setOption({
		xAxis: {
			data: xData
		},
		yAxis: {
			//interval: 30,
			//max: Math.ceil(finishedData[0]*1.1)
		},
		series: [{
			name: '已完成销售',
			data: finishedData
		}, {
			name: '未完成销售',
			data: unfinishedData
		}]
	});
}

var chart2;
var prevOption2;
var interval2;
function loadChart2(data) {
	console.log(data.rank);
	var rank = data.rank;
	if(interval2) clearInterval(interval2);
	var xData = rank.map(function(item) {
		return item.sale;
	});
	var yData = rank.map(function(item) {
		return item.name;
	});
	if(chart2) chart2.dispose();
	chart2 = echarts.init(document.querySelector('.chart2'));

	var option = {
		color : [ "#FD666D" ],
		textStyle : {
			color : '#fff'
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'shadow'
			},
			formatter : "{a} <br/>{b} : {c}%"
		},

		grid : {
			top : '10%',
			bottom : '-8%',
			left : '5%',
			right : '12%',
			containLabel : true
		},
		xAxis : {
			type : 'value',
			boundaryGap : [ 0, 0.01 ],
			show : false,
			max: xData[0]
		},
		yAxis : {
			"axisLabel" : {
				"interval" : 0,
				color : '#ddd',
				fontSize : 12,
				align : 'right',
				inside: false
			},
			type : 'category',
			data : yData.slice(0, 5).reverse()
		},
		series : [ {
			name : '销量',
			type : 'bar',
			barCategoryGap : '50%',
			data : xData.slice(0, 5).reverse(),
			label : {
				normal : {
					show : true,
					position : 'right',
					formatter : '{c}'
				}
			},
			itemStyle : {
				normal : {
					color : new echarts.graphic.LinearGradient(0, 0, 1, 1, [ {
						offset : 0,
						color : '#4CBDFC'
					}, {
						offset : 1,
						color : '#B4F7FE'
					} ])
				}
			}
		} ]
	};

	chart2.setOption(option);
    prevOption2 = chart2.getOption();
	
	var index = 1;
	interval2 = setInterval(function() {
		if(index > 4) index = 0;
		chart2.setOption({
			yAxis: {
				data : yData.slice(0+index, 5+index).reverse()
			},
			series: [{
				name : '销量',
				data: xData.slice(0+index, 5+index).reverse()
			}]
		});
		index++;
	}, 3000);
}
function reloadChart2(data) {
    clearInterval(interval2);
	var xData = [];
	var yData = [];
	data.carSale.forEach(function(item, index) {
		xData.push(item.sale);
		yData.push(item.name);
	});
	chart2.setOption({
		xAxis: {
			max: xData[0]
		},
		yAxis: {
			data: yData.slice(0, 5).reverse()
		},
		series: [{
			name: '销量',
            data : xData.slice(0, 5).reverse()
		}]
	});

    var index = 1;
    interval2 = setInterval(function() {
        if(index > 4) index = 0;
        chart2.setOption({
            yAxis: {
                data : yData.slice(0+index, 5+index).reverse()
            },
            series: [{
                name : '销量',
                data: xData.slice(0+index, 5+index).reverse()
            }]
        });
        index++;
    }, 3000);
}

var chart3;
var prevOption3;
function loadChart3(data) {
	var rendData = data.rendData;
	var fullData = data.fullData;
	if(chart3) chart3.dispose();
	chart3 = echarts.init(document.querySelector('.chart3'));

	var sumData = [];
	for(var i = 0; i < 5; i++) {
		sumData.push(rendData[i].value + fullData[i].value)
	}
	var option = {
		legend : {
			right : 0,
			top : 0,
			textStyle : {
				color : '#fff',
				fontSize : 12
			},
			itemWidth : 24,
			itemHeight : 8,
			data : [ '租赁', '全款' ]
		},
		grid : {
			top : '15%',
			left : '3%',
			right : '10%',
			bottom : '2%',
			containLabel : true
		},
		tooltip : {
			show : "true",
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function(e) {
				var result = e[1].seriesName + '：' + (e[1].value - e[0].value);
				result += '<br/>' + e[0].seriesName + '：' + e[0].value;
				return result;
			}
		},
		xAxis : {
			type : 'value',
			axisTick : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#36A8C1'
				},
				symbol : [ 'none', 'arrow' ],
				symbolSize : [ 6, 8 ]
			},
			axisLabel: {
				color: '#ddd',
				fontSize: 12
			},
			splitLine : {
				show : false
			},
			splitNumber: 3
		},
		yAxis : [ {
			type : 'category',
			axisTick : {
				show : false
			},
			axisLine : {
				lineStyle : {
					color : '#36A8C1'
				},
				symbol : [ 'none', 'arrow' ],
				symbolSize : [ 6, 8 ]
			},
			axisLabel: {
				color: '#ddd',
				fontSize: 12
			},
			data : [ '华中', '华北', '华东', '华南', '西南' ].reverse()
		}, {
			type : 'category',
			axisLine : {
				show : false
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : false
			},
			splitArea : {
				show : false
			},
			splitLine : {
				show : false
			},
			data : [ '华中', '华北', '华东', '华南', '西南' ].reverse()
		}

		],
		series : [ {
			name : '租赁',
			type : 'bar',
			yAxisIndex : 1,
			itemStyle : {
				normal : {
					show : true,
					color : '#277ace',
					barBorderRadius : 50,
					borderWidth : 0,
					borderColor : '#333'
				}
			},
			barWidth : 9,
			data : sumData.reverse()
		}, {
			name : '全款',
			type : 'bar',
			itemStyle : {
				normal : {
					show : true,
					color : '#5de3e1',
					barBorderRadius : 50,
					borderWidth : 0,
					borderColor : '#333'
				}
			},
			barWidth : 9,
			data : fullData.reverse()
		}

		]
	};
	chart3.setOption(option);
    prevOption3 = chart3.getOption();
}
function reloadChart3(data) {
	console.log(data);
	var sumData = [];
	var fullData = [];
	var yData = [];
	var provinceData = data.province;
	var i = 0;
	for(var key in provinceData) {
		if (i < 5) {
			var detail = provinceData[key];
			sumData.push({
				name: key,
				value: detail.sale,
				full: detail.full
			});
		}
		i++;
	}
	sumData.sort(function(a, b) {
		return a.value - b.value;
	});
	sumData.forEach(function(item, index) {
		fullData.push({
			name: item.name,
			value: item.full
		});
		yData.push(item.name);
	});
	chart3.setOption({
		yAxis: [{
			data: yData
		}, {
			data: yData
		}],
		series: [{
			name: '租赁',
			data: sumData
		}, {
			name: '全款',
			data: fullData
		}]
	});
}

var chart4;
var prevOption4;
function loadChart4(data) {
	var indicator = data.map(function(item) {
		return {
			text: item.name + item.percent + '%'
		}
	});
	var radarData = data.map(function(item) {
		return item.percent;
	});
	
	if(chart4) chart4.dispose();
	chart4 = echarts.init(document.querySelector('.chart4'));
	var option = {
		radar : [ {
			indicator : indicator,
			center : [ '50%', '50%' ],
			radius : '65%',
			startAngle : 90,
			splitNumber : 4,
			shape : 'polygon',
			name : {
				formatter : '{value}',
				textStyle : {
					color : '#ddd',
					fontSize: 12
				},
				padding: 0
			},
			splitArea: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#449cff'
	            }
	        },
			axisLabel: {
				margin: 0
			},
			splitLine : {
				lineStyle : {
					color : 'rgba(255, 255, 255, 0.5)'
				}
			}
		} ],
		series : [ {
			name : '雷达图',
			type : 'radar',
			itemStyle : {
				normal : {
					// color: 各异,
					lineStyle : {
						width : 4
					}
				}
			},
			areaStyle: {
	            normal: {
	                color: {
	                    type: 'linear',
	                    x: 0,
	                    y: 0,
	                    x2: 0,
	                    y2: 1,
	                    colorStops: [{
	                        offset: 0,
	                        color: '#44ff86'
	                    }, {
	                        offset: 1,
	                        color: '#0060ff'
	                    }],
	                    globalCoord: false
	                }
	            }
	        },
			data : [ {
				value : radarData,
				name : '及时率',
				symbol: 'none',
				lineStyle : {
					normal : {
						color: '#00ffff',
                		width: 3
					}
				}
			} ]
		} ]
	};
	chart4.setOption(option);
	prevOption4 = chart4.getOption();
}
function reloadChart4(data) {
	var indicator = [];
	var value = [];
	var provinceData = data.province;
	for(var key in provinceData) {
		var detail = provinceData[key];
		if(detail.inTime === '100%') continue;
		indicator.push({
			text: key + detail.inTime
		});
		value.push(parseInt(detail.inTime));
	}
	chart4.clear();
	var newOption = prevOption4;
	newOption.radar[0].indicator = indicator;
	newOption.series[0].data[0].value = value;
	chart4.setOption(newOption);
}

var chart5;
function loadChart5(data) {
	if(chart5) chart5.dispose();
	chart5 = echarts.init(document.querySelector('.chart5'), null, {renderer: 'svg'});
	var scaleData = data;
	var sum = 0;
	data.forEach(function(item) {
		sum += item.value;
	});
	var option = {
		color: ['#5AB1FE', '#B5F7FD', '#54D7FF', '#64A5FF', '#6EBBFF', '#C0FFFF', '#8DAFFF'],
		tooltip : {
			show : false
		},
		legend : {
			show : false
		},
		toolbox : {
			show : false
		},
		series : [{
			name: '区域库存',
			type:'pie',
			radius: ['30%', '70%'],
			//roseType: 'radius',
			animation: false,
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					position: 'outside',
					fontSize: 12,
					padding: 0,
					formatter: function(e) {
						return e.data.name + Math.round(e.percent) + '%'
							//+ '\n' + e.data.value + '辆' 
					}
				}
			},
			labelLine: {
				length: 10,
				length2: 7
			},
			startAngle: 90,
			minAngle: 25,
			data: scaleData.map(function(item, index) {
				return {
					name: item.name,
					value: item.value,
					itemStyle: {
						radius: ['80%', '80%']
					}
				}
			})
		}, {
			name: '总量',
			type: 'pie',
			radius: ['50%', '50%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold',
						color: '#ddd'
					},
					formatter: '{c}\n辆'
				}
			},
			data: [{name: '总量', value: sum}]
		}]
	};
	chart5.setOption(option);
	//var center = [myChart.getWidth()/2, myChart.getHeight()/2];
	//$('.chart5 svg > path:nth-child(9)').attr('transform', 'translate('+center[0]+','+center[1]+') scale(1.1) translate(-'+center[0]+',-'+center[1]+')');
	//$('.chart5 svg > path:nth-child(11)').attr('transform', 'translate('+center[0]+','+center[1]+') scale(1.2) translate(-'+center[0]+',-'+center[1]+')');
	//$('.chart5 svg > path:nth-child(13)').attr('transform', 'translate('+center[0]+','+center[1]+') scale(1.2) translate(-'+center[0]+',-'+center[1]+')');
	//$('.chart5 svg > path:nth-child(14)').attr('transform', 'translate('+center[0]+','+center[1]+') scale(1.2) translate(-'+center[0]+',-'+center[1]+')');

	chart5.getZr().storage.getDisplayList().forEach(function(item, index) {
		buildPath(item.path, item.shape, index);
	});
}
function buildPath (ctx, shape, index) {
	if(!shape || !shape.cx) return;
	var x = shape.cx;
	var y = shape.cy;
	var r0 = Math.max(shape.r0 || 0, 0) * 1.2;
	var r = Math.max(shape.r, 0) * 1.2;
	var startAngle = shape.startAngle;
	var endAngle = shape.endAngle;
	var clockwise = shape.clockwise;

	var unitX = Math.cos(startAngle);
	var unitY = Math.sin(startAngle);

	ctx.moveTo(unitX * r0 + x, unitY * r0 + y);

	ctx.lineTo(unitX * r + x, unitY * r + y);

	ctx.arc(x, y, r, startAngle, endAngle, !clockwise);

	ctx.lineTo(
		Math.cos(endAngle) * r0 + x,
		Math.sin(endAngle) * r0 + y
	);

	if (r0 !== 0) {
		ctx.arc(x, y, r0, endAngle, startAngle, clockwise);
	}

	ctx.closePath();

	var path = pathDataToString(ctx);
	if(index+1 === 9 || index+1 === 11 || index+1 === 13 || index+1 === 14)
		$('.chart5 svg > path:nth-child('+(index+1)+')').attr('d', path);
}
function reloadChart5() {
	chart5.setOption({});
}

function loadChart6(data) {
	$('.yuqing-num:eq(0)').html(data.positive);
	$('.yuqing-num:eq(1)').html(data.neutral);
	$('.yuqing-num:eq(2)').html(data.negative);
}

var chart7;
function loadChart7(data) {
	if(chart7) chart7.dispose();
	chart7 = echarts.init(document.querySelector('.chart7'));

	var today = new Date();
	var xData = [];
	for(var i = 0; i < 8; i++) {
		today.setDate(today.getDate() - 1);
		var month = today.getMonth() + 1;
		var date = today.getDate();
		xData.push(month + '.' + date);
	}
	xData.reverse();
	var fullData = data.fullSale;
	var stageData = data.stageSale;
	var option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        }
	    },
	    legend: {
	        icon: 'rect',
	        itemWidth: 14,
	        itemHeight: 5,
	        itemGap: 13,
	        data: ['全款销量', '租赁销量'],
			top: '-5%',
	        right: '4%',
	        textStyle: {
	            fontSize: 12,
	            color: '#F1F1F3'
	        }
	    },
	    grid: {
	    	top: '20%',
	        left: '3%',
	        right: '4%',
	        bottom: '10%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
			axisLabel: {
				color: '#ddd',
				fontSize: 12
			},
	        axisLine: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        },
	        data: xData
	    },
	    yAxis: {
	        type: 'value',
//	        name: '销量/台',
	        axisTick: {
	            show: true,
	            inside: true
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        },
	        axisLabel: {
	            margin: 10,
				color: '#ddd',
	            textStyle: {
	                fontSize: 12
	            }
	        },
	        splitLine: {
	        	show: false,
	            lineStyle: {
	                color: '#57617B'
	            }
	        },
			interval: 20
	    },
	    series: [{
	        name: '全款销量',
	        type: 'line',
	        smooth: false,
	        symbol: 'circle',
	        symbolSize: 5,
	        showSymbol: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(54, 86, 213, 0.8)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(54, 86, 213, 0.3)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.2)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'rgb(54, 86, 213)',
	                borderColor: 'rgba(54, 86, 213,0.4)',
	                borderWidth: 8
	            }
	        },
	        data: fullData
	    }, {
	        name: '租赁销量',
	        type: 'line',
	        smooth: false,
	        symbol: 'circle',
	        symbolSize: 5,
	        showSymbol: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(65, 193, 221, 0.8)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(65, 193, 221, 0.2)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'rgb(0,136,212)',
	                borderColor: 'rgba(0,136,212,0.4)',
	                borderWidth: 8
	            }
	        },
	        data: stageData
	    } ]
	};

	chart7.setOption(option);
}

var chart8;
function loadMap(data) {
	if(chart8) chart8.dispose();
	chart8 = echarts.init(document.querySelector('.map-container'));

	var geoCoordMap = {
		"西北": [96.408, 40.432],
		"华东": [120.178, 29.243],
		"华北": [114.143, 40.769],
		"华中": [113.628, 34.758],
		"西南": [101.491, 29.694],
		"华南": [113.187, 23.275],
		"东北": [126.506, 43.507]
	};

	var ZZData = data.map(function(item) {
		return [
			{name: '华中'},
			item
		]
	});

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName : dataItem[0].name,
					toName : dataItem[1].name,
					coords : [ fromCoord, toCoord ],
					value : dataItem[1].value
				});
			}
		}
		return res;
	};

	var color = [ '#a6c84c', '#ffa022', '#46bee9' ];
	var series = [];
	[ [ '华中', ZZData ] ].forEach(function(
			item, i) {
		series.push({
			name : item[0],
			type : 'lines',
			zlevel : 1,
			effect : {
				show : true,
				period : 6,
				trailLength : 0.7,
				color : '#fff',
				symbolSize : 6
			},
			lineStyle : {
				normal : {
					color : '#fff',
					width : 0,
					curveness : 0.3
				}
			},
			data : convertData(item[1])
		}, {
			name : item[0],
			type : 'lines',
			zlevel : 2,
			symbol : [ 'none', 'arrow' ],
			symbolSize : 12,
			effect : {
				show : true,
				period : 6,
				trailLength : 0,
				symbol : 'pin',
				symbolSize : 12
			},
			lineStyle : {
				normal : {
					color : '#fff',
					width : 1,
					opacity : 0.8,
					curveness : 0.3
				}
			},
			data : convertData(item[1])
		}, {
			name : item[0],
			type : 'effectScatter',
			coordinateSystem : 'geo',
			zlevel : 2,
			rippleEffect : {
				brushType : 'fill',
				scale: 3.5
			},
			label : {
				normal : {
					show : true,
					position : 'right',
					fontSize: 14,
					formatter : function(e) {
						return e.name + '\n' + e.value[2]
					}
				}
			},
			symbolSize : function(val) {
				var size = val[2] / 100;
				if(size < 8) {
					return 8;
				} else if (size > 13) {
					return 13;
				} else {
					return size;
				}
			},
			itemStyle : {
				normal : {
					color : function(e) {
						switch(e.name)
						{
							case '东北':
								return '#00FFFF';
							default:
								return '#00FFFF'
						}
					}
				}
			},
			data : item[1].map(function(dataItem) {
				var position = '';
				switch(dataItem[1].name) {
					case '西北':
						position = [-27, -27];
						break;
					case '西南':
						position = [-32, -10];
						break;
					case '华南':
						position = [-20, 12];
						break;
					case '华东':
						position = [-10, 13];
						break;
					case '华中':
						position = [25, -13];
						break;
					case '华北':
						position = [-5, -35];
						break;
					case '东北':
						position = [13, -17];
						break;
					default:
						position = 'right';
					break;
				}
				return {
					name : dataItem[1].name,
					value : geoCoordMap[dataItem[1].name]
							.concat([ dataItem[1].value ]),
					label: {
						normal : {
							position : position
						}
					}
				};
			})
		});
	});

	var option = {
		tooltip : {
			trigger : 'item',
			formatter : function(params, ticket, callback) {
				if (params.seriesType == "effectScatter") {
					return params.data.name + "" + params.data.value[2];
				} else if (params.seriesType == "lines") {
					return params.data.fromName + ">" + params.data.toName
							+ "<br />" + params.data.value;
				} else {
					return params.name;
				}
			}
		},

		geo : {
			map : 'china',
			label : {
				emphasis : {
					show : true,
					color : '#fff'
				}
			},
			roam : true,
			zoom: 1,
			center: [108.5, 34.2],
			itemStyle : {
				normal : {
					areaColor: 'rgba(39, 88, 156,0.6)',
					borderColor : '#328CFF',
					shadowBlur: 100
				},
				emphasis : {
					areaColor : new echarts.graphic.LinearGradient(0, 0, 1, 0,
							[ {
								offset : 0,
								color : 'rgba(0,254,255,0.7)'
							}, {
								offset : 0.8,
								color : 'rgba(2,126,255,0.7)'
							}, {
								offset : 1,
								color : 'rgba(2,132,255,0.7)'
							} ])
				}
			}
		},
		series : series
	};

	chart8.setOption(option);

	chart8.on('click', function(e) {
		var name = e.name;
		if(e.componentSubType === 'effectScatter') {
			$.ajax({
				async: true,
				url: './data/data.json',
				type: 'GET',
				dataType: 'text',
				success: function(result) {
					var data = JSON.parse(result);
					for(var key in data) {
						if(key === name) {
							reloadChart1(data[key]);
							reloadChart2(data[key]);
							reloadChart3(data[key]);
							reloadChart4(data[key]);
                            $('.map-title > ul > li:nth-child(2)').hide();
                            $('.map-title ul li').css('width', '50%');
							$('.map-title > ul > li:nth-child(1) > div > span:nth-child(3)').html(data[key].saler);
                            $('.map-title > ul > li:nth-child(3) > div > span:nth-child(3)').html(data[key].sum);
                            $('.return').show();
                            status = 'district';
						}
					}
				},
				error: function(err) {
					console.log('请求失败！')
				}
			});
		}
	});
}
$('.return').click(function() {
	status = 'country';
    $('.map-title > ul > li:nth-child(2)').show();
    $('.map-title ul li').css('width', '33%');
//    $('.map-title > ul > li:nth-child(1) > div > span:nth-child(3)').html('351');
//    $('.map-title > ul > li:nth-child(3) > div > span:nth-child(3)').html('6286');
    $('.return').hide();
    loadCountry();
});

function timeTicker() {
	setInterval(function() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var html = year+'年'+month+'月'+day+'日&nbsp;&nbsp;&nbsp;<span>'+hour+':'+(minute<10?'0'+minute:minute)+':'+(second<10?'0'+second:second)+'</span>';
		
		$('.title-time').html(html);
	}, 1000);
}

function pathDataToString(path) {
	var CMD$4 = {"M":1,"L":2,"C":3,"Q":4,"A":5,"Z":6,"R":7};
	var mathSin$3 = Math.sin;
	var mathCos$3 = Math.cos;
	var mathRound = Math.round;
	var PI$5 = Math.PI;
	var PI2$7 = Math.PI * 2;
	var degree = 180 / PI$5;
	var EPSILON$4 = 1e-4;
	function round4(val) {
		return mathRound(val * 1e4) / 1e4;
	}
	function isAroundZero$1(val) {
		return val < EPSILON$4 && val > -EPSILON$4;
	}
	var str = [];
	var data = path.data;
	var dataLength = path.len();
	for (var i = 0; i < dataLength;) {
		var cmd = data[i++];
		var cmdStr = '';
		var nData = 0;
		switch (cmd) {
			case CMD$4.M:
				cmdStr = 'M';
				nData = 2;
				break;
			case CMD$4.L:
				cmdStr = 'L';
				nData = 2;
				break;
			case CMD$4.Q:
				cmdStr = 'Q';
				nData = 4;
				break;
			case CMD$4.C:
				cmdStr = 'C';
				nData = 6;
				break;
			case CMD$4.A:
				var cx = data[i++];
				var cy = data[i++];
				var rx = data[i++];
				var ry = data[i++];
				var theta = data[i++];
				var dTheta = data[i++];
				var psi = data[i++];
				var clockwise = data[i++];

				var dThetaPositive = Math.abs(dTheta);
				var isCircle = isAroundZero$1(dThetaPositive - PI2$7)
					&& !isAroundZero$1(dThetaPositive);

				var large = false;
				if (dThetaPositive >= PI2$7) {
					large = true;
				}
				else if (isAroundZero$1(dThetaPositive)) {
					large = false;
				}
				else {
					large = (dTheta > -PI$5 && dTheta < 0 || dTheta > PI$5)
						=== !!clockwise;
				}

				var x0 = round4(cx + rx * mathCos$3(theta));
				var y0 = round4(cy + ry * mathSin$3(theta));

				// It will not draw if start point and end point are exactly the same
				// We need to shift the end point with a small value
				// FIXME A better way to draw circle ?
				if (isCircle) {
					if (clockwise) {
						dTheta = PI2$7 - 1e-4;
					}
					else {
						dTheta = -PI2$7 + 1e-4;
					}

					large = true;

					if (i === 9) {
						// Move to (x0, y0) only when CMD.A comes at the
						// first position of a shape.
						// For instance, when drawing a ring, CMD.A comes
						// after CMD.M, so it's unnecessary to move to
						// (x0, y0).
						str.push('M', x0, y0);
					}
				}

				var x = round4(cx + rx * mathCos$3(theta + dTheta));
				var y = round4(cy + ry * mathSin$3(theta + dTheta));

				// FIXME Ellipse
				str.push('A', round4(rx), round4(ry),
					mathRound(psi * degree), +large, +clockwise, x, y);
				break;
			case CMD$4.Z:
				cmdStr = 'Z';
				break;
			case CMD$4.R:
				var x = round4(data[i++]);
				var y = round4(data[i++]);
				var w = round4(data[i++]);
				var h = round4(data[i++]);
				str.push(
					'M', x, y,
					'L', x + w, y,
					'L', x + w, y + h,
					'L', x, y + h,
					'L', x, y
				);
				break;
		}
		cmdStr && str.push(cmdStr);
		for (var j = 0; j < nData; j++) {
			// PENDING With scale
			str.push(round4(data[i++]));
		}
	}
	return str.join(' ');
}

//loadChart1();
//loadChart2();
//loadChart3();
//loadChart4();
//loadChart5();
//loadChart6();
timeTicker();
//loadChart7();
//loadMap();

function loadCountry() {
	$.ajax({
		url: './data/countryData.json',
		dataType: 'text',
		success: function(result) {
			var data = JSON.parse(result);
			
			loadTitle(data["title"]);
			loadChart1(data["chart1"]);
			loadChart2(data["chart2"]);
			loadChart3(data["chart3"]);
			loadChart4(data["chart4"]);
			loadChart5(data["chart5"]);
			loadChart6(data["chart6"]);
			loadChart7(data["chart7"]);
			loadMap(data["mapData"]);
		},
		error: function(msg) {
			console.log('请求失败！');
		}
	});
}

loadCountry();
globalInterval = setInterval(function() {
	if(status === 'country') {
		loadCountry();
	}
	if(status === 'district') {
		
	}
}, 1000*60);
