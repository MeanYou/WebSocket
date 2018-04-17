//数据展示区1
function loadChart1() {
	var finishedData = [ {
		"name" : "华南",
		"value" : 1020
	}, {
		"name" : "华北",
		"value" : 725
	}, {
		"name" : "华东",
		"value" : 673
	}, {
		"name" : "华中",
		"value" : 486
	}, {
		"name" : "东北",
		"value" : 379
	}, {
		"name" : "西北",
		"value" : 330
	}, {
		"name" : "西南",
		"value" : 262
	} ];
	var unfinishedData = [ {
		"name" : "华南",
		"value" : 0
	}, {
		"name" : "华北",
		"value" : 275
	}, {
		"name" : "华东",
		"value" : 77
	}, {
		"name" : "华中",
		"value" : 114
	}, {
		"name" : "东北",
		"value" : 0
	}, {
		"name" : "西北",
		"value" : 70
	}, {
		"name" : "西南",
		"value" : 138
	} ];
	var xData = [ '华南', '华北', '华东', '华中', '东北', '西北', '西南' ];
	var myChart = echarts.init(document.querySelector('.chart1'));
	var option = {
		// backgroundColor:"#111c4e",
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
				fontSize : 12,
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
			name : "销售/辆",
			nameTextStyle : {
				color : '#fff',
				fontSize : 12
			},
			type : 'value',
			splitNumber : 2,
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
			interval : 500,
			minInterval : 500,
			max : 1100
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

	// var index = 1;
	// setInterval(function() {
	// xData = [];
	// yData = [];
	// data.map(function(a, b) {
	// if (index > 6)
	// index = 0;
	// if (b >= index && b < 6 + index) {
	// xData.push(a.name);
	// if (a.value === 0) {
	// yData.push(a.value + min);
	// } else {
	// yData.push(a.value);
	// }
	// }
	// });
	// myChart.setOption({
	// xAxis : {
	// data : xData
	// },
	// series : [ {
	// name : '指标',
	// data : yData
	// } ]
	// });
	// index++;
	// }, 3000)
}

function loadChart2() {
	var xData = [ 471, 422, 410, 376, 346, 269, 266, 210, 200, 188 ];
	var yData = [ '大众朗逸', ' 丰田卡罗拉', '日产轩逸', '大众速腾', '别克英朗', '大众捷达', '大众宝来',
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
				fontSize : 12,
				align : 'right'
			},
			type : 'category',
			data : yData.slice(0, 5).reverse()
		},
		series : [ {
			name : '销量',
			type : 'bar',
			barCategoryGap : '30%',
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
					} ]),
				}
			}
		} ]
	};

	myChart.setOption(option);

	// var i = 4;
	// setInterval(function() {
	// if (i === data.length)
	// i = 0;
	// showData.shift();
	// showData.push(data[i]);
	// i++;
	// myChart.setOption({
	// series : [ {
	// name : '2011年',
	// data : showData
	// } ]
	// });
	// }, 3000);
}

function loadChart3() {
	var myChart = echarts.init(document.querySelector('.chart3'));

	var finishedData = [ {
		"name" : "华南",
		"value" : 1020
	}, {
		"name" : "华北",
		"value" : 725
	}, {
		"name" : "华东",
		"value" : 673
	}, {
		"name" : "华中",
		"value" : 486
	}, {
		"name" : "东北",
		"value" : 379
	}, {
		"name" : "西北",
		"value" : 330
	}, {
		"name" : "西南",
		"value" : 262
	} ];
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
			interval : 300
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
		},

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
					borderColor : '#333',
				}
			},
			barGap : '0%',
			barCategoryGap : '50%',
			data : finishedData.slice(0, 5).map(function(item, index) {
				return item.value
			}).reverse()
		}, {
			name : '全款',
			type : 'bar',
			itemStyle : {
				normal : {
					show : true,
					color : '#5de3e1',
					barBorderRadius : 50,
					borderWidth : 0,
					borderColor : '#333',
				}
			},
			barGap : '0%',
			barCategoryGap : '50%',
			data : finishedData.slice(0, 5).map(function(item, index) {
				return Math.round(item.value / 2)
			}).reverse()
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
				text : '华中'
			}, {
				text : '华北'
			}, {
				text : '华东'
			}, {
				text : '华南'
			}, {
				text : '西南'
			}, {
				text : '西北'
			}, {
				text : '东北'
			} ],
			center : [ '50%', '50%' ],
			radius : '50%',
			startAngle : 90,
			splitNumber : 4,
			shape : 'polygon',
			name : {
				formatter : '{value}',
				textStyle : {
					color : '#ddd',
					fontSize: 12
				}
			},
			splitArea: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#449cff'
	            }
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
				value : [ 92, 95, 87, 82, 90, 91, 88 ],
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
	}
	myChart.setOption(option);
}

function loadChart5() {
	var myChart = echarts.init(document.querySelector('.chart5'));
	var scaleData = [ {
		'name' : '华中',
		'value' : 220
	}, {
		'name' : '华北',
		'value' : 180
	}, {
		'name' : '华东',
		'value' : 99
	}, {
		'name' : '华南',
		'value' : 66
	}, {
		'name' : '西南',
		'value' : 48
	}, {
		'name' : '西北',
		'value' : 77
	}, {
		'name' : '东北',
		'value' : 86
	} ];
	var rich = {
		white : {
			color : '#ddd',
			align : 'center',
			padding : [ 5, 0 ]
		}
	};
	var placeHolderStyle = {
		normal : {
			label : {
				show : false
			},
			labelLine : {
				show : false
			},
			color : 'rgba(0, 0, 0, 0)',
			borderColor : 'rgba(0, 0, 0, 0)',
			borderWidth : 0
		}
	};
	var data = [];
	for (var i = 0; i < scaleData.length; i++) {
		data.push({
			value : scaleData[i].value,
			name : scaleData[i].name,
			itemStyle : {
				normal : {
					borderWidth : 5,
					shadowBlur : 30,
					borderColor : new echarts.graphic.LinearGradient(0, 0, 1,
							1, [ {
								offset : 0,
								color : '#7777eb'
							}, {
								offset : 1,
								color : '#70ffac'
							} ]),
					shadowColor : 'rgba(142, 152, 241, 0.6)'
				}
			}
		}, {
			value : 10,
			name : '',
			itemStyle : placeHolderStyle
		});
	}
	var seriesObj = [ {
		name : '',
		type : 'pie',
		clockWise : false,
		radius : [ '45%', '50%' ],
		hoverAnimation : false,
		itemStyle : {
			normal : {
				label : {
					show : true,
					position : 'outside',
					color : '#ddd',
					formatter : function(params) {
						var percent = 0;
						var total = 0;
						for (var i = 0; i < scaleData.length; i++) {
							total += scaleData[i].value;
						}
						percent = ((params.value / total) * 100).toFixed(0);
						if (params.name !== '') {
							return params.name + '{white|' + '：' + percent
									+ '%}';
						} else {
							return '';
						}
					},
					rich : rich
				},
				labelLine : {
					show : true
				}
			}
		},
		data : data
	} ];
	var option = {
		tooltip : {
			show : false
		},
		legend : {
			show : false
		},
		toolbox : {
			show : false
		},
		series : seriesObj
	}
	myChart.setOption(option);
}

function loadChart6() {
	var myChart = echarts.init(document.querySelector('.chart6'));

	var option = {
		    series: [
		        {
		            name: '正面舆情',
		            type: 'pie',
		            radius: ['45%', '55%'],
		            center: ['16.66%', '50%'],
		            startAngle: 225,
		            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: '#00a2ff'
		            }, {
		                offset: 1,
		                color: '#70ffac'
		            }]), "transparent"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                    normal: {
		                        position: 'center'
		                    }
		                },
		            data: [{
		                value: 75,
		                 name: '',
		                    label: {
		                        normal: {
		                            formatter: '正面舆情',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            }, {
		                value: 25,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '\n221',
		                            textStyle: {
		                                color: '#007ac6',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            },
		            {
		                value: 0,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '件',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14
		                            }
		                        }
		                    }
		            }]
		        },
		        {
		            name: ' 中性舆情',
		            type: 'pie',
		            radius: ['45%', '55%'],
		            center: ['50%', '50%'],
		            startAngle: 225,
		            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: '#00a2ff'
		            }, {
		                offset: 1,
		                color: '#70ffac'
		            }]), "transparent"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                    normal: {
		                        position: 'center'
		                    }
		                },
		            data: [{
		                value: 75,
		                 name: '中性舆情',
		                    label: {
		                        normal: {
		                            formatter: '中性舆情',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            }, {
		                value: 25,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '\n43',
		                            textStyle: {
		                                color: '#007ac6',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            },
		            {
		                value: 0,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '件',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14

		                            }
		                        }
		                    }
		            }]
		        },
		        {
		            name: ' 负面舆情',
		            type: 'pie',
		            radius: ['45%', '55%'],
		            center: ['83.33%', '50%'],
		            startAngle: 225,
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                    normal: {
		                        position: 'center'
		                    }
		                },
		            data: [{
		                value: 75,
		                "itemStyle": {
		                    "normal": {
		                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                            "offset": 0,
		                            "color": '#f125ff'
		                        }, {
		                            "offset": 1,
		                            "color": '#2dcbff'
		                        }]),
		                    }
		                },
		                 name: '负面舆情',
		                    label: {
		                        normal: {
		                            formatter: '负面舆情',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            }, {
		                value: 25,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '\n9',
		                            textStyle: {
		                                color: '#f125ff',
		                                fontSize: 14,
		                                fontWeight: 'bold'
		                            }
		                        }
		                    }
		            },
		            {
		                value: 0,
		                name: '%',
		                    label: {
		                        normal: {
		                            formatter: '件',
		                            textStyle: {
		                                color: '#fff',
		                                fontSize: 14
		                            }
		                        }
		                    }
		            }]
		        }
		    ]
		};

	myChart.setOption(option);
}

function loadChart7() {
	var myChart = echarts.init(document.querySelector('.chart7'));

	var xData = ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'];
	var fullData = [31, 39, 23, 29, 37, 34, 45, 41];
	var stageData = [19, 21, 18, 22, 22, 26, 30, 27];
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
	        right: '4%',
	        textStyle: {
	            fontSize: 12,
	            color: '#F1F1F3'
	        }
	    },
	    grid: {
	    	top: '10%',
	        left: '3%',
	        right: '4%',
	        bottom: '10%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        axisLine: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        },
	        data: xData
	    },
	    yAxis: {
	        type: 'value',
	        name: '销量/台',
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
	            textStyle: {
	                fontSize: 14
	            }
	        },
	        splitLine: {
	        	show: false,
	            lineStyle: {
	                color: '#57617B'
	            }
	        }
	    },
	    series: [{
	        name: '全款销量',
	        type: 'line',
	        smooth: false,
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
	                borderColor: 'rgba(54, 86, 213,0.27)',
	                borderWidth: 12

	            }
	        },
	        data: fullData
	    }, {
	        name: '租赁销量',
	        type: 'line',
	        smooth: false,
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
	                borderColor: 'rgba(0,136,212,0.2)',
	                borderWidth: 12

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
		'上海' : [ 121.4648, 31.2891 ],
		'东莞' : [ 113.8953, 22.901 ],
		'东营' : [ 118.7073, 37.5513 ],
		'中山' : [ 113.4229, 22.478 ],
		'临汾' : [ 111.4783, 36.1615 ],
		'临沂' : [ 118.3118, 35.2936 ],
		'丹东' : [ 124.541, 40.4242 ],
		'丽水' : [ 119.5642, 28.1854 ],
		'乌鲁木齐' : [ 87.9236, 43.5883 ],
		'佛山' : [ 112.8955, 23.1097 ],
		'保定' : [ 115.0488, 39.0948 ],
		'兰州' : [ 103.5901, 36.3043 ],
		'包头' : [ 110.3467, 41.4899 ],
		'北京' : [ 116.4551, 40.2539 ],
		'北海' : [ 109.314, 21.6211 ],
		'南京' : [ 118.8062, 31.9208 ],
		'南宁' : [ 108.479, 23.1152 ],
		'南昌' : [ 116.0046, 28.6633 ],
		'南通' : [ 121.1023, 32.1625 ],
		'厦门' : [ 118.1689, 24.6478 ],
		'台州' : [ 121.1353, 28.6688 ],
		'合肥' : [ 117.29, 32.0581 ],
		'呼和浩特' : [ 111.4124, 40.4901 ],
		'咸阳' : [ 108.4131, 34.8706 ],
		'哈尔滨' : [ 127.9688, 45.368 ],
		'唐山' : [ 118.4766, 39.6826 ],
		'嘉兴' : [ 120.9155, 30.6354 ],
		'大同' : [ 113.7854, 39.8035 ],
		'大连' : [ 122.2229, 39.4409 ],
		'天津' : [ 117.4219, 39.4189 ],
		'太原' : [ 112.3352, 37.9413 ],
		'威海' : [ 121.9482, 37.1393 ],
		'宁波' : [ 121.5967, 29.6466 ],
		'宝鸡' : [ 107.1826, 34.3433 ],
		'宿迁' : [ 118.5535, 33.7775 ],
		'常州' : [ 119.4543, 31.5582 ],
		'广州' : [ 113.5107, 23.2196 ],
		'廊坊' : [ 116.521, 39.0509 ],
		'延安' : [ 109.1052, 36.4252 ],
		'张家口' : [ 115.1477, 40.8527 ],
		'徐州' : [ 117.5208, 34.3268 ],
		'德州' : [ 116.6858, 37.2107 ],
		'惠州' : [ 114.6204, 23.1647 ],
		'成都' : [ 103.9526, 30.7617 ],
		'扬州' : [ 119.4653, 32.8162 ],
		'承德' : [ 117.5757, 41.4075 ],
		'拉萨' : [ 91.1865, 30.1465 ],
		'无锡' : [ 120.3442, 31.5527 ],
		'日照' : [ 119.2786, 35.5023 ],
		'昆明' : [ 102.9199, 25.4663 ],
		'杭州' : [ 119.5313, 29.8773 ],
		'枣庄' : [ 117.323, 34.8926 ],
		'柳州' : [ 109.3799, 24.9774 ],
		'株洲' : [ 113.5327, 27.0319 ],
		'武汉' : [ 114.3896, 30.6628 ],
		'汕头' : [ 117.1692, 23.3405 ],
		'江门' : [ 112.6318, 22.1484 ],
		'沈阳' : [ 123.1238, 42.1216 ],
		'沧州' : [ 116.8286, 38.2104 ],
		'河源' : [ 114.917, 23.9722 ],
		'泉州' : [ 118.3228, 25.1147 ],
		'泰安' : [ 117.0264, 36.0516 ],
		'泰州' : [ 120.0586, 32.5525 ],
		'济南' : [ 117.1582, 36.8701 ],
		'济宁' : [ 116.8286, 35.3375 ],
		'海口' : [ 110.3893, 19.8516 ],
		'淄博' : [ 118.0371, 36.6064 ],
		'淮安' : [ 118.927, 33.4039 ],
		'深圳' : [ 114.5435, 22.5439 ],
		'清远' : [ 112.9175, 24.3292 ],
		'温州' : [ 120.498, 27.8119 ],
		'渭南' : [ 109.7864, 35.0299 ],
		'湖州' : [ 119.8608, 30.7782 ],
		'湘潭' : [ 112.5439, 27.7075 ],
		'滨州' : [ 117.8174, 37.4963 ],
		'潍坊' : [ 119.0918, 36.524 ],
		'烟台' : [ 120.7397, 37.5128 ],
		'玉溪' : [ 101.9312, 23.8898 ],
		'珠海' : [ 113.7305, 22.1155 ],
		'盐城' : [ 120.2234, 33.5577 ],
		'盘锦' : [ 121.9482, 41.0449 ],
		'石家庄' : [ 114.4995, 38.1006 ],
		'福州' : [ 119.4543, 25.9222 ],
		'秦皇岛' : [ 119.2126, 40.0232 ],
		'绍兴' : [ 120.564, 29.7565 ],
		'聊城' : [ 115.9167, 36.4032 ],
		'肇庆' : [ 112.1265, 23.5822 ],
		'舟山' : [ 122.2559, 30.2234 ],
		'苏州' : [ 120.6519, 31.3989 ],
		'莱芜' : [ 117.6526, 36.2714 ],
		'菏泽' : [ 115.6201, 35.2057 ],
		'营口' : [ 122.4316, 40.4297 ],
		'葫芦岛' : [ 120.1575, 40.578 ],
		'衡水' : [ 115.8838, 37.7161 ],
		'衢州' : [ 118.6853, 28.8666 ],
		'西宁' : [ 101.4038, 36.8207 ],
		'西安' : [ 109.1162, 34.2004 ],
		'贵阳' : [ 106.6992, 26.7682 ],
		'连云港' : [ 119.1248, 34.552 ],
		'邢台' : [ 114.8071, 37.2821 ],
		'邯郸' : [ 114.4775, 36.535 ],
		'郑州' : [ 113.4668, 34.6234 ],
		'鄂尔多斯' : [ 108.9734, 39.2487 ],
		'重庆' : [ 107.7539, 30.1904 ],
		'金华' : [ 120.0037, 29.1028 ],
		'铜川' : [ 109.0393, 35.1947 ],
		'银川' : [ 106.3586, 38.1775 ],
		'镇江' : [ 119.4763, 31.9702 ],
		'长春' : [ 125.8154, 44.2584 ],
		'长沙' : [ 113.0823, 28.2568 ],
		'长治' : [ 112.8625, 36.4746 ],
		'阳泉' : [ 113.4778, 38.0951 ],
		'青岛' : [ 120.4651, 36.3373 ],
		'韶关' : [ 113.7964, 24.7028 ]
	};

	var ZZData = [
		[
			{name: '郑州'},
			{name: '北京', value: 95}
		],
		[
			{name: '郑州'},
			{name: '上海', value: 95}
		],
		[
			{name: '郑州'},
			{name: '天津', value: 95}
		],
		[
			{name: '郑州'},
			{name: '重庆', value: 95}
		],
		[
			{name: '郑州'},
			{name: '哈尔滨', value: 95}
		],[
			{name: '郑州'},
			{name: '长春', value: 95}
		],
		[
			{name: '郑州'},
			{name: '沈阳', value: 95}
		],
		[
			{name: '郑州'},
			{name: '呼和浩特', value: 95}
		],
		[
			{name: '郑州'},
			{name: '石家庄', value: 95}
		],
		[
			{name: '郑州'},
			{name: '乌鲁木齐', value: 95}
		],
		[
			{name: '郑州'},
			{name: '兰州', value: 95}
		],
		[
			{name: '郑州'},
			{name: '西宁', value: 95}
		],
		[
			{name: '郑州'},
			{name: '西安', value: 95}
		],
		[
			{name: '郑州'},
			{name: '银川', value: 95}
		],
		[
			{name: '郑州'},
			{name: '济南', value: 95}
		],
		[
			{name: '郑州'},
			{name: '太原', value: 95}
		],
		[
			{name: '郑州'},
			{name: '合肥', value: 95}
		],
		[
			{name: '郑州'},
			{name: '长沙', value: 95}
		],
		[
			{name: '郑州'},
			{name: '武汉', value: 95}
		],
		[
			{name: '郑州'},
			{name: '南京', value: 95}
		],
		[
			{name: '郑州'},
			{name: '成都', value: 95}
		],
		[
			{name: '郑州'},
			{name: '贵阳', value: 95}
		],
		[
			{name: '郑州'},
			{name: '昆明', value: 95}
		],
		[
			{name: '郑州'},
			{name: '南宁', value: 95}
		],
		[
			{name: '郑州'},
			{name: '拉萨', value: 95}
		],
		[
			{name: '郑州'},
			{name: '杭州', value: 95}
		],
		[
			{name: '郑州'},
			{name: '南昌', value: 95}
		],
		[
			{name: '郑州'},
			{name: '广州', value: 95}
		],
		[
			{name: '郑州'},
			{name: '福州', value: 95}
		],
		[
			{name: '郑州'},
			{name: '海口', value: 95}
		]
	];

	var BJData = [ [ {
		name : '北京'
	}, {
		name : '上海',
		value : 95
	} ], [ {
		name : '北京'
	}, {
		name : '广州',
		value : 90
	} ], [ {
		name : '北京'
	}, {
		name : '大连',
		value : 80
	} ], [ {
		name : '北京'
	}, {
		name : '南宁',
		value : 70
	} ], [ {
		name : '北京'
	}, {
		name : '南昌',
		value : 60
	} ], [ {
		name : '北京'
	}, {
		name : '拉萨',
		value : 50
	} ], [ {
		name : '北京'
	}, {
		name : '长春',
		value : 40
	} ], [ {
		name : '北京'
	}, {
		name : '包头',
		value : 30
	} ], [ {
		name : '北京'
	}, {
		name : '重庆',
		value : 20
	} ], [ {
		name : '北京'
	}, {
		name : '常州',
		value : 10
	} ] ];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

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
	[ [ '郑州', ZZData ] ].forEach(function(
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
				symbolSize : 3
			},
			lineStyle : {
				normal : {
					color : '#fff',
					width : 0,
					curveness : 0.2
				}
			},
			data : convertData(item[1])
		}, {
			name : item[0],
			type : 'lines',
			zlevel : 2,
			symbol : [ 'none', 'arrow' ],
			symbolSize : 10,
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
					opacity : 0.6,
					curveness : 0.2
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
					formatter : '{b}'
				}
			},
			symbolSize : function(val) {
				return val[2] / 16;
			},
			itemStyle : {
				normal : {
					color : '#00FFFF'
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
	console.log(series)

	option = {
		tooltip : {
			trigger : 'item',
			formatter : function(params, ticket, callback) {
				console.log(params);
				if (params.seriesType == "effectScatter") {
					return "线路：" + params.data.name + "" + params.data.value[2];
				} else if (params.seriesType == "lines") {
					return params.data.fromName + ">" + params.data.toName
							+ "<br />" + params.data.value;
				} else {
					return params.name;
				}
			}
		},
		legend : {
			orient : 'vertical',
			top : 'bottom',
			left : 'right',
			data : [ '北京 Top10', '上海 Top10', '广州 Top10' ],
			textStyle : {
				color : '#fff'
			},
			selectedMode : 'multiple',
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
			itemStyle : {
				normal : {
					// areaColor : new echarts.graphic.LinearGradient(0, 0, 1, 0,
					// 		[ {
					// 			offset : 0,
					// 			color : 'rgba(18, 34, 67,0.7)'
					// 		}, {
					// 			offset : 1,
					// 			color : 'rgba(21, 40, 81,0.7)'
					// 		} ]),
					areaColor: 'rgba(18, 34, 67,0.7)',
					borderColor : '#328CFF',
					shadowBlur: 100,
					// shadowColor: '#328CFF'
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

