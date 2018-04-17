//数据展示区1
function loadChart1() {
	var finishedData = [ {
		"name" : "华中",
		"value" : 3031
	}, {
		"name" : "华北",
		"value" : 1984
	}, {
		"name" : "华东",
		"value" : 522
	}, {
		"name" : "华南",
		"value" : 302
	}, {
		"name" : "西南",
		"value" : 282
	}, {
		"name" : "西北",
		"value" : 209
	}, {
		"name" : "东北",
		"value" : 156
	} ];
	var unfinishedData = [ {
		"name" : "华中",
		"value" : 0
	}, {
		"name" : "华北",
		"value" : 0
	}, {
		"name" : "华东",
		"value" : 0
	}, {
		"name" : "华南",
		"value" : 198
	}, {
		"name" : "西南",
		"value" : 218
	}, {
		"name" : "西北",
		"value" : 191
	}, {
		"name" : "东北",
		"value" : 144
	} ];
	var xData = [ '华中', '华北', '华东', '华南', '西南', '西北', '东北' ];
	var myChart = echarts.init(document.querySelector('.chart1'));
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
				fontSize : 10
			},
			right : 0
		},
		grid : {
			left : '0%',
			right : '0%',
			bottom : '0%',
			top : '10%',
			containLabel : true
		},
		xAxis : [ {
			type : 'category',
			data : xData,
			axisLabel : {
				show : true,
				color : '#ddd',
				fontSize : 10,
				formatter : function(value) {
					return value.split("").join("\n");
				}
			},
			axisLine : {
				lineStyle : {
					color : '#0177d4'
				}
			},
			axisTick : {
				show : false
			}
		} ],
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
				fontSize : 10
			},
			splitLine : {
				show : false,
				lineStyle : {
					color : '#0177d4'
				}
			},
			interval : 1000,
			max : 3200
		},
		series : [ {
			name : '已完成销售',
			stack : 'total',
			type : 'bar',
			barWidth : '30%',
			xAxisIndex : 0,
			yAxisIndex : 0,
			data : finishedData
		}, {
			name : '未完成销售',
			stack : 'total',
			type : 'bar',
			barWidth : '30%',
			data : unfinishedData,
		} ]
	};

	myChart.setOption(option);
}

function loadChart2() {
	var xData = [ 471, 346, 283, 176, 119, 269, 266, 210, 200, 188 ];
	var yData = [ '大众朗逸', ' 别克英朗', '起亚K3', '帕萨特', '华晨中华', '大众捷达', '大众宝来',
			'吉利帝豪', '本田雅阁', '丰田雷凌' ];
	var myChart = echarts.init(document.querySelector('.chart2'));

	option = {
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
			bottom : '-10%',
			left : '0%',
			right : '10%',
			containLabel : true
		},
		xAxis : {
			type : 'value',
			boundaryGap : [ 0, 0.01 ],
			show : false
		},
		yAxis : {
			"axisLabel" : {
				"interval" : 0,
				color : '#ddd',
				fontSize : 10,
				align : 'right'
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

	myChart.setOption(option);
}

function loadChart3() {
	var myChart = echarts.init(document.querySelector('.chart3'));

	var rendData = [ {
		"name" : "华中",
		"value" : 1364
	}, {
		"name" : "华北",
		"value" : 992
	}, {
		"name" : "华东",
		"value" : 203
	}, {
		"name" : "华南",
		"value" : 187
	}, {
		"name" : "西南",
		"value" : 169
	} ];
	var fullData = [ {
		"name" : "华中",
		"value" : 1667
	}, {
		"name" : "华北",
		"value" : 992
	}, {
		"name" : "华东",
		"value" : 119
	}, {
		"name" : "华南",
		"value" : 115
	}, {
		"name" : "西南",
		"value" : 113
	} ];
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
				fontSize : 10
			},
			itemWidth : 24,
			itemHeight : 8,
			data : [ '租赁', '全款' ]
		},
		grid : {
			top : '15%',
			left : '0%',
			right : '10%',
			bottom : '0%',
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
				fontSize: 10
			},
			splitLine : {
				show : false
			},
			interval : 1000
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
				fontSize: 10
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
			barGap : '0%',
			barCategoryGap : '50%',
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
			barGap : '0%',
			barCategoryGap : '50%',
			data : fullData.reverse()
		}

		]
	};
	myChart.setOption(option);
}

function loadChart4() {
	var myChart = echarts.init(document.querySelector('.chart4'));
	var option = {
		radar : [ {
			indicator : [ {
				text : '华中98%'
			}, {
				text : '华北96%'
			}, {
				text : '华东92%'
			}, {
				text : '华南90%'
			}, {
				text : '西南89%'
			}, {
				text : '西北87%'
			}, {
				text : '东北85%'
			} ],
			center : [ '50%', '50%' ],
			radius : '70%',
			startAngle : 90,
			splitNumber : 4,
			shape : 'polygon',
			name : {
				formatter : '{value}',
				textStyle : {
					color : '#ddd',
					fontSize: 10
				},
				padding: -10
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
				value : [ 98, 96, 92, 90, 89, 87, 85 ],
				name : '',
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
	myChart.setOption(option);
}

function loadChart5() {
	var myChart = echarts.init(document.querySelector('.chart5'));
	var scaleData = [ {
		'name' : '华中',
		'value' : 357
	}, {
		'name' : '华北',
		'value' : 89
	}, {
		'name' : '华东',
		'value' : 82
	}, {
		'name' : '华南',
		'value' : 62
	}, {
		'name' : '西南',
		'value' : 48
	}, {
		'name' : '西北',
		'value' : 27
	}, {
		'name' : '东北',
		'value' : 20
	} ];
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
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					position: 'outside',
					fontSize: 10,
					formatter: function(e) {
						console.log(e);
						return e.data.name + e.data.value + '辆'
							//+ '\n' + Math.round(e.percent) + '%'
					}
				}
			},
			labelLine: {
				length: 7,
				length2: 3
			},
			startAngle: 90,
			minAngle: 25,
			data: scaleData
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
						fontSize: '10',
						fontWeight: 'bold',
						color: '#ddd'
					},
					formatter: '{c}\n辆'
				}
			},
			data: [{name: '总量', value: '658'}]
		}]
	};
	myChart.setOption(option);
}

function loadChart6() {
	//var myChart = echarts.init(document.querySelector('.chart6'));
    //
	//var option = {
	//	    series: [
	//	        {
	//	            name: '正面舆情',
	//	            type: 'pie',
	//	            radius: ['45%', '55%'],
	//	            center: ['16.66%', '50%'],
	//	            startAngle: 225,
	//	            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	//	                offset: 0,
	//	                color: '#00a2ff'
	//	            }, {
	//	                offset: 1,
	//	                color: '#70ffac'
	//	            }]), "transparent"],
	//	            labelLine: {
	//	                normal: {
	//	                    show: false
	//	                }
	//	            },
	//	            label: {
	//	                    normal: {
	//	                        position: 'center'
	//	                    }
	//	                },
	//	            data: [{
	//	                value: 75,
	//	                 name: '',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '正面舆情',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            }, {
	//	                value: 25,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '\n221',
	//	                            textStyle: {
	//	                                color: '#007ac6',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            },
	//	            {
	//	                value: 0,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '件',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14
	//	                            }
	//	                        }
	//	                    }
	//	            }]
	//	        },
	//	        {
	//	            name: ' 中性舆情',
	//	            type: 'pie',
	//	            radius: ['45%', '55%'],
	//	            center: ['50%', '50%'],
	//	            startAngle: 225,
	//	            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	//	                offset: 0,
	//	                color: '#00a2ff'
	//	            }, {
	//	                offset: 1,
	//	                color: '#70ffac'
	//	            }]), "transparent"],
	//	            labelLine: {
	//	                normal: {
	//	                    show: false
	//	                }
	//	            },
	//	            label: {
	//	                    normal: {
	//	                        position: 'center'
	//	                    }
	//	                },
	//	            data: [{
	//	                value: 75,
	//	                 name: '中性舆情',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '中性舆情',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            }, {
	//	                value: 25,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '\n43',
	//	                            textStyle: {
	//	                                color: '#007ac6',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            },
	//	            {
	//	                value: 0,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '件',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14
    //
	//	                            }
	//	                        }
	//	                    }
	//	            }]
	//	        },
	//	        {
	//	            name: ' 负面舆情',
	//	            type: 'pie',
	//	            radius: ['45%', '55%'],
	//	            center: ['83.33%', '50%'],
	//	            startAngle: 225,
	//	            labelLine: {
	//	                normal: {
	//	                    show: false
	//	                }
	//	            },
	//	            label: {
	//	                    normal: {
	//	                        position: 'center'
	//	                    }
	//	                },
	//	            data: [{
	//	                value: 75,
	//	                "itemStyle": {
	//	                    "normal": {
	//	                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	//	                            "offset": 0,
	//	                            "color": '#f125ff'
	//	                        }, {
	//	                            "offset": 1,
	//	                            "color": '#2dcbff'
	//	                        }]),
	//	                    }
	//	                },
	//	                 name: '负面舆情',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '负面舆情',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            }, {
	//	                value: 25,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '\n9',
	//	                            textStyle: {
	//	                                color: '#f125ff',
	//	                                fontSize: 14,
	//	                                fontWeight: 'bold'
	//	                            }
	//	                        }
	//	                    }
	//	            },
	//	            {
	//	                value: 0,
	//	                name: '%',
	//	                    label: {
	//	                        normal: {
	//	                            formatter: '件',
	//	                            textStyle: {
	//	                                color: '#fff',
	//	                                fontSize: 14
	//	                            }
	//	                        }
	//	                    }
	//	            }]
	//	        }
	//	    ]
	//	};
    //
	//myChart.setOption(option);
}

function loadChart7() {
	var myChart = echarts.init(document.querySelector('.chart7'));

	var xData = ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'];
	var fullData = [31, 35, 19, 26, 32, 29, 34, 32];
	var stageData = [19, 21, 16, 24, 23, 28, 36, 33];
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
	            fontSize: 10,
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
				fontSize: 10
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
	                fontSize: 10
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

	myChart.setOption(option);
}

function loadMap() {
	var myChart = echarts.init(document.querySelector('.map-container'));

	var geoCoordMap = {
		"西北": [96.408, 40.432],
		"华东": [120.178, 29.243],
		"华北": [114.143, 40.769],
		"华中": [113.628, 34.758],
		"西南": [101.491, 29.694],
		"华南": [113.187, 23.275],
		"东北": [126.506, 43.507]
	};

	var ZZData = [
		[
			{name: '华中'},
			{name: '西北', value: 209}
		],
		[
			{name: '华中'},
			{name: '华东', value: 322}
		],
		[
			{name: '华中'},
			{name: '华北', value: 1984}
		],
		[
			{name: '华中'},
			{name: '华南', value: 302}
		],
		[
			{name: '华中'},
			{name: '西南', value: 282}
		],
		[
			{name: '华中'},
			{name: '东北', value: 156}
		],
		[
			{name: '华中'},
			{name: '华中', value: 3031}
		]
	];

	var convertData = function(data) {
		console.log(data);
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
		// console.log(item,i);
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
				brushType : 'stroke'
			},
			label : {
				normal : {
					show : true,
					position : 'right',
					fontSize: 14,
					formatter : function(e) {
						console.log(e)
						return e.name + '\n' + e.value[2]
					}
				}
			},
			symbolSize : function(val) {
				var size = val[2] / 100;
				if(size < 8) {
					return 8;
				} else if (size > 16) {
					return 16;
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
								return '#FF0000';
							default:
								return '#00FFFF'
						}
					}
				}
			},
			data : item[1].map(function(dataItem) {
				return {
					name : dataItem[1].name,
					value : geoCoordMap[dataItem[1].name]
							.concat([ dataItem[1].value ])
				};
			})
		});
	});

	var option = {
		tooltip : {
			trigger : 'item',
			formatter : function(params, ticket, callback) {
				console.log(params);
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
			center: [108.5, 33.5],
			itemStyle : {
				normal : {
					areaColor: 'rgba(18, 34, 67,0.7)',
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

	myChart.setOption(option);
}

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

loadChart1();
loadChart2();
loadChart3();
loadChart4();
loadChart5();
loadChart6();
timeTicker();
loadChart7();
loadMap();

