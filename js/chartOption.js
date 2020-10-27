
// 首页折线图
function createIndexOptionOne (a, b) {
    if (!a) {
        a = [
            ['1:00', 10631],
            ['2:00', 10631],
            ['3:00', 10631],
            ['4:00', 10631],
            ['5:00', 10631],
            ['6:00', 10631],
            ['7:00', 10631],
            ['8:00', 10761],
            ['9.00', 10033],
            ['10.00', 10550],
            ['11.00', 9737],
            ['12.00', 10153],
            ['13.00', 10270],
            ['14.00', 9524],
            ['15.00', 9204],
            ['16.00', 9259],
            ['17.00', 9268],
            ['16.00', 9268],
            ['18.00', 9268],
            ['19.00', 9268],
            ['20.00', 9268],
            ['21.00', 9268],
            ['22.00', 9268],
            ['23.00', 9268],
            ['24.00', 9268]
        ]
    }
    if (!b) {
        b = [
            ['1:00', 10631],
            ['2:00', 10631],
            ['3:00', 10631],
            ['4:00', 10631],
            ['5:00', 10631],
            ['6:00', 10631],
            ['7:00', 10631],
            ['8:00', 10761],
            ['9.00', 10033],
            ['10.00', 10550],
            ['11.00', 7237],
            ['12.00', 10153],
            ['13.00', 10270],
            ['14.00', 9524],
            ['15.00', 9204],
            ['16.00', 5559],
            ['17.00', 1568],
            ['16.00', 9268],
            ['18.00', 9268],
            ['19.00', 9268],
            ['20.00', 9268],
            ['21.00', 9268],
            ['22.00', 9268],
            ['23.00', 9268],
            ['24.00', 9268]
        
        ]
    }
    let option = {
        grid:{
            top: '25%',
            bottom: '3%',
            left: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                // interval: 2,
                // max:200,
                // min:1,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF'
                }
            },
            axisLabel: {
                show: true,
                interval: 4,
                // interval: function (index) {
                //     return (index % 100 === 0) || (index === a.length - 1);
                // },
                showMaxLabel: true,
                showMinLabel: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 12
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {show:true},
            axisTick: {show:true},
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        // color: ['#6ED8DF','#0091FF'],
        legend: {
            left: '22px',
            top: '10px',
            // height: 30,
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 50,  // 设置宽度
            itemHeight: 4, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '总发电预测',
                icon: 'rect'
            }, {
                name: '实际功率',
                icon: 'rect'
            }]
        },
        series: [
            {
                name: '总发电预测',
                type: 'line',
                smooth: true,//是否是瓶画曲线
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: '#6ED8DF',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#6ED8DF"
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                // areaStyle: {
                //     normal: {
                //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //             offset: 0,
                //             color: 'rgba(93,255,227,0.22)' // 0% 处的颜色
                //         }, {
                //             offset: 1,
                //             color: 'rgba(0,61,64,0.08)' // 100% 处的颜色
                //         }]), //背景渐变色
                //     }
                // },
                data: b
            },
            {
                name: '实际功率',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                       color: '#0091FF',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#0091FF"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                // areaStyle: {
                //     normal: {
                //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //             offset: 0,
                //             color: 'rgba(14,139,255,0.22)' // 0% 处的颜色
                //         }, {
                //             offset: 1,
                //             color: 'rgba(18,72,129,0.12)' // 100% 处的颜色
                //         }]), //背景渐变色
                //     }
                // },
                data: a
            },
        ]
    };
    return option
}
// 首页折线图
function createIndexOptionTwo (a, b) {
    if (!a) {
        a = [
            ['7:00', 514.5],
            ['8:00', 1144.5],
            ['9.00', 2362.5],
            ['10.00', 2835],
            ['11.00', 2688],
            ['12.00', 2394],
            ['13.00', 2499],
            ['14.00', 3391.5],
            ['15.00', 3055.5],
            ['16.00', 3213],
            ['17.00', 3444],
            ['11.00', 2560],
            ['12.00', 2280],
            ['13.00', 2380],
            ['14.00', 3230],
            ['15.00', 2910],
            ['16.00', 3060],
            ['17.00', 3280]
        ]
    }
    if (!b) {
        b = [
            ['7:00', 490],
            ['8:00', 1090],
            ['9.00', 2250],
            ['10.00', 2700],
            ['11.00', 2560],
            ['12.00', 2280],
            ['13.00', 2380],
            ['14.00', 3230],
            ['15.00', 2910],
            ['16.00', 3060],
            ['17.00', 3280],
            ['11.00', 2560],
            ['12.00', 2280],
            ['13.00', 2380],
            ['14.00', 3230],
            ['15.00', 2910],
            ['16.00', 3060],
            ['17.00', 3280]
        ]
    }
    let option = {
        grid:{
            top: '25%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },

        dataZoom:[	{
            type: 'slider',
            show: true,
            start: 0,
            end: 100,
      
        },
        {
            type: 'inside',
        
        },
      

],
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color: ['#6ED8DF','#0091FF'],
        legend: {
            left: 22,
            top: 10,
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 50,  // 设置宽度
            itemHeight: 4, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '总负荷预测',
                icon: 'rect'
            }, {
                name: '实际功率',
                icon: 'rect'
            }]
        },
        series: [
            {
                name: '总负荷预测',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#6ED8DF"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#6ED8DF" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(93,255,227,0.22)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,61,64,0.08)' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                },
                data: b
            },
            {
                name: '实际功率',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#0091FF"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(14,139,255,0.22)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(18,72,129,0.12)' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                },
                data: a
            }
        ]

    };
    return option
}
// 首页柱状图 电量交易
function createIndexBarOption (xAxisList, data) {
    var count = 0;
    data && data.forEach((item)=>{
        if(item ==0){
            count++;
        }
    })
    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data || data.length == count) {
        data = [24009, 28539, 26274, 30804, 24462, 27180, 29898]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: { //y轴刻度线
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#9CA6FF'
                    }, {
                        offset: 1,
                        color: '#0091FF'
                    }]),
                }
            },
        }]
    };
    return option;
}
// 首页柱状图
function createIndexBarOptionTwo (xAxisList, data) {
     var count = 0;
         data && data.forEach((item)=>{
             if(item ==0){
                 count++;
             }
         })

    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data || data.length == count) {
        data = [53, 63, 58, 68, 54, 60, 66]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisLine:{
                lineStyle:{
                    color:'#63A2DF'
                }
            },
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick:{ //y轴刻度线
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5DE3FF'
                    }, {
                        offset: 1,
                        color: '#007C8D'
                    }]),
                }
            },
        }]
    };
    return option;
}
// 首页柱状图负荷电量
function createIndexBarOptionThree (xAxisList, data) {
    var count = 0;
    data && data.forEach((item)=>{
        if(item ==0){
            count++;
        }
    })
    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data || data.length == count) {
        data = [25, 28, 24, 26, 22, 10, 15]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: ['2%','4%'],
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#046DC0 '
                    }, {
                        offset: 1,
                        color: '#0CADF4'
                    }]),
                }
            },
        }]
    };
    return option;
}


// source左侧柱状图 风机1 日发电量
function createSourceBarOption (xAxisList, data) {
    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data) {
        data = [21.02, 24.97, 22.37, 25.60, 20.52, 19.64, 22.51]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#9CA6FF'
                    }, {
                        offset: 1,
                        color: '#0091FF'
                    }]),
                }
            },
        }]
    };
    return option;
}
// source左侧柱状图 风机2 日发电量
function createSourceBarOptionTwo (xAxisList, data) {
    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data) {
        data = [42.04, 49.93, 44.74, 51.20, 41.05, 39.28, 45.02]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5DE3FF'
                    }, {
                        offset: 1,
                        color: '#007C8D'
                    }]),
                }
            },
        }]
    };
    return option;
}
//source左侧柱状图 光伏日发电量
function createSourceBarOptionThree (xAxisList, data) {
    if (!xAxisList) {
        xAxisList = ['7.14','7.15', '7.16', '7.17', '7.18', '7.19', '7.20']
    }
    if (!data) {
        data = [13.14, 15.60, 13.98, 16.00, 12.83, 12.28, 14.07]
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:  xAxisList,
            boundaryGap: true,
            axisTick:{ //y轴刻度线
                show: false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: ['2%','4%'],
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: data,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius:[8,8,0,0],
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#046DC0 '
                    }, {
                        offset: 1,
                        color: '#0CADF4'
                    }]),
                }
            },
        }]
    };
    return option;
}

// 进度圆形
function createSourceProgress (progress) {
    if (!progress) {
        progress = 25
    } else {

    }
    let option = {
        title: {
            text: progress + "%",
            textStyle: {
                color: '#48FFFF',
                fontSize: 24
            },
            left: 'center',
            top: 'center'
        },
        grid:{
            left:'0',
            right:'0',
            top:'0%',
            containLabel:false
        },
        angleAxis: {
            max: 100, // 满分
            clockwise: false, // 逆时针
            // 隐藏刻度线
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            // 隐藏刻度线
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        polar: {
            center: ['50%', '50%'],
            radius: '140%' //图形大小
        },
        series: [{
            type: 'bar',
            data: [{
                // name: '作文得分',
                value: progress,
                itemStyle: {
                    normal: {
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 16    //文字的字体大小
                        },
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#73F7FF' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0079D2' // 100% 处的颜色
                            }]
                        }
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 10,
            barGap: '-100%', // 两环重叠
            radius: ['49%', '52%'],
            z: 2,
        },{ // 灰色环
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#3B4068',
                }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 10,
            barGap: '-110%', // 两环重叠
            radius: ['48%', '53%'],
            z: 1
        }]
    }
    return option;
}

// source页折线图
function createMainSourceChartOne (Xdata, Ydata) {
    if (!Xdata) {
        Xdata = ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
    }
    if (!Ydata) {
        Ydata = [ 2855, 2983, 2583, 2363, 2083, 2233, 2650, 2583, 2697, 2750, 2917];
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: Xdata,
            axisTick:{ //y轴刻度线
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            axisTick:{ //y轴刻度线
                show:false
            },
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine:{
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(93,240,253,0.25)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(3,128,218,0.12)' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#008FFF"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: Ydata
            }
        ]
    };
    return option
}
// source页折线图
function createMainSourceChartTwo (Xdata, Ydata) {
    if (!Xdata) {
        Xdata = ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
    }
    if (!Ydata) {
        Ydata = [ 6587, 5967, 5167, 5727, 5167, 5467, 5300, 5167, 5393, 5500, 5833];
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: Xdata,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisTick:{ //y轴刻度线
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            axisTick:{ //y轴刻度线
                show:false
            },
            type: 'value',
            boundaryGap: [0, '0%'],
            splitLine: false,
            axisLine:{
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                name: '总发电预测',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(93,240,253,0.25) ' // 0% 处的颜色
                        },{
                            offset: 1,
                            color: 'rgba(3,128,218,0.12)' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#0ed5f7"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#00E0FF" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: Ydata
            }
        ]
    };
    return option
}
// source页折线图
function createMainSourceChartThree (Xdata, Ydata) {
    if (!Xdata) {
        Xdata = ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
    }
    if (!Ydata) {
        Ydata = [ 363, 1264, 1805, 1959, 2024, 1970, 1832, 1321, 676, 569, 77];
    }
    let option = {
        grid:{
            top: '3%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: Xdata,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisTick:{ //y轴刻度线
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            axisTick:{ //y轴刻度线
                show:false
            },
            axisLine:{
                show:false
            },
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                name: '总发电预测',
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(93,240,253,0.25)' // 0% 处的颜色
                        },{
                            offset: 1,
                            color: 'rgba(3,128,218,0.10)' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#065CFF"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: Ydata
            }
        ]
    };
    return option
}
//network左侧chart
function createNetworkChart (a, b) {
    var count = 0;
    var countB = 0;
    var arr = a && a.reduce(function(prev,next){
        return prev.concat(next)
    })
    var arrB =b && b.reduce(function(prev,next){
        return prev.concat(next)
    })
    arr.forEach((item,i)=>{
        item==0 ? count++ : count;
    })

    arrB.forEach((item,i)=>{
        item==0 ? countB++ : countB;
    })

    if (!a || count == a.length ) {
        a = [
            ['7.14', 1.99],
            ['7.15', 2.36],
            ['7.16', 2.17],
            ['7.17', 2.55],
            ['7.18', 2.02],
            ['7.19', 2.25],
            ['7.20', 2.47]
        ]
    }
    if (!b || countB == b.length) {
        b = [
            ['7.14', 0.41],
            ['7.15', 0.49],
            ['7.16', 0.45],
            ['7.17', 0.53],
            ['7.18', 0.42],
            ['7.19', 0.47],
            ['7.20', 0.52]
        ]
    }
    let option = {
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            },
            axisTick: false,
            axisLine:{
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#63A2DF',
                    width:1,//这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color: ['#0445C0','#007C8D'],
        legend: {
            left: '15px',
            top: '3px',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 14,  // 设置宽度
            itemHeight: 14, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '风机',
                icon: 'rect'
            }, {
                name: '光伏',
                icon: 'rect'
            }]
        },
        series: [
            {
                name: '风机',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4174FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0445C0' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: b
            },
            {
                name: '光伏',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5DE3FF' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#007C8D'// 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: a
            }
        ]
    };
    return option
}

// network 中间折线图
function createMainNetwork (Xdata, Ydata) {
    if (!Xdata) {
        Xdata = ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
    }
    if (!Ydata) {
        Ydata = [ 8921, 8972, 7900, 7112, 6989, 7483, 7927, 5453, 6019, 4784, 5287];
    }
    let option = {
        grid:{
            top: '15%',
            bottom: '3%',
            left: '1%',
            right: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: Xdata,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisTick: {
              show: false
            },
            axisLine:{
                show: true,
                lineStyle: {
                    color: '#63a2df'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine:{
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                type: 'line',
                // smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0380DA' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'transparent' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#0091FF"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: Ydata
            }
        ]
    };
    return option
}

function initPiechartNetwork(a, b, total, unit) {
    if (!a) {
        a = 28;
    }
    if (!b) {
        b = 32;
    }
    if (!total) {
        total = '1000';
    }
    if (!unit) {
        unit = '1000MWh';
    }
    let option = {
        title:{
            text: parseInt(total) + '\nMWh',
            x:'center',
            y:'center',
            textAlign:'left',
            textStyle:{
                //文字颜色
                color:'#87F1F8',
                //字体风格,'normal','italic','oblique'
                fontStyle:'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight:'bold',
                //字体系列
                fontFamily:'sans-serif',
                //字体大小
                fontSize:32
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['55%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle : {
                        fontWeight : 300 ,
                        color: '#fff',
                        fontSize : 25    //文字的字体大小
                    },
                    // normal: {
                    //     formatter: ' {a|{a}%} ',       //图形外文字上下显示
                    //     // borderWidth: 80,
                    //     // borderRadius: 4,
                    //     // padding: [50, -100],          //文字和图的边距
                    //     rich: {
                    //         a: {
                    //             color: '#333',
                    //             fontSize: 33,
                    //             lineHeight: 20
                    //         },
                    //         b: {                        //name 文字样式
                    //             fontSize: 20,
                    //             lineHeight: 20,
                    //             color: 'transparent'
                    //         },
                    //         c: {                   //value 文字样式
                    //             fontSize: 25,
                    //             lineHeight: 20,
                    //             color: '#fff',
                    //             align: "center"
                    //         }
                    //     }
                    // }
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                center: ["50%", "50%"],
                data: [
                    {
                        value: a,
                        name: a + '%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#00AEFF'},
                                        {offset: 1, color: '#B0D0FF'}
                                    ]
                                )
                            }
                        },
                        // formatter: function (param) {
                        //     return param.value
                        // }
                    },
                    {
                        value: b,
                        name: b + '%',
                        itemStyle: {
                            normal: {//颜色渐变
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#4174FF'},
                                        {offset: 1, color: '#0445C0'}
                                    ]
                                )
                            }
                        }
                    },
                ]
            }
        ]
    };
    return option;
}



//storage左侧chart
function createStorageLineChart (a, b) {
    if (!a) {
        a = [
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 450],
            ['5.5', 550],
            ['5.6', 120],
            ['5.7', 350]
        ]
    }
    if (!b) {
        b = [
            ['5.1', 400],
            ['5.2', 32],
            ['5.3', 210],
            ['5.4', 150],
            ['5.5', 250],
            ['5.6', 120],
            ['5.7', 350]
        ]
    }
    let option = {
        grid:{
            top: '17%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        color: ['#007C8D','#0445C0'],
        legend: {
            left: 10,
            top: 10,
            align:'left',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            itemWidth: 12,  // 设置宽度
            itemHeight: 12, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '储能A',
                icon: 'rect'
            }, {
                name: '储能B',
                icon: 'rect'
            }]
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisTick: false,
            axisLine: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                name: '储能A',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4174FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0445C0' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                // areaStyle: {
                //     normal: {}
                // },
                data: a
            },
            {
                name: '储能B',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5DE3FF' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#007C8D'// 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: b
            }
        ]
    };
    return option
}

// storage 中间三折线图
function createStorageChart (xData, a, b, allData) {
    let option = {
        grid:{
            top: '20%',
            bottom: '10%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            data: xData,
            axisLine: {
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: false,
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color:['#0ed5f7','#065CFF','#5F8EFF'],
        legend: {
            left: '15px',
            top: '3px',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 50,  // 设置宽度
            itemHeight: 3, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '总',
                icon: 'rect'
            }, {
                name: '储能集装箱A',
                icon: 'rect'
            }, {
                name: '储能集装箱B',
                icon: 'rect'
            }]
        },
        series: [
            {
                name: '总',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#0ed5f7"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: allData
            },
            {
                name: '储能集装箱B',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#065CFF"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: b
            },
            {
                name: '储能集装箱A',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#5F8EFF"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: a
            }
        ]
    };
    return option
}

// load 中间折线图
function createLoadLineChartOne (a) {
    if (!a) {
        a = [
            ['7:00', 21.5],
            ['8:00', 21.5],
            ['9.00', 22.5],
            ['10.00', 22.5],
            ['11.00', 23.5],
            ['12.00', 23.5],
            ['13.00', 22.5],
            ['14.00', 22.5],
            ['15.00', 22.5],
            ['16.00', 20.5],
            ['17.00', 20.5]
        ]
    }
    let option = {
        grid:{
            top: '5%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                // interval:0,
                // rotate:-30,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color:['#0ed5f7'],
        series: [
            {
                name: '总',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 4,
                            type: 'solid',
                            color: "#0091FF"
                        }
                    },
                }, //线条样式
                areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(14,139,255,0.42)'  // 0% 处的颜色 rgba(93,255,227,0.22)
                      }, {
                          offset: 1,
                          color: 'rgba(18,72,129,0.12)' // 100% 处的颜色
                      }]) //背景渐变色
                  }
                },
                symbolSize: 5, //折线点的大小
                data: a
            },
        ]
    };
    return option
}

// load 中间折线图二
function createLoadLineChartTwo (a) {
    if (!a) {
        a = [
            ['7:00', 51],
            ['8:00', 53.5],
            ['9.00', 52.5],
            ['10.00', 52.5],
            ['11.00', 51.5],
            ['12.00', 54.5],
            ['13.00', 54.5],
            ['14.00', 52.5],
            ['15.00', 52.5],
            ['16.00', 53.5],
            ['17.00', 52.5]
        ]
    }
    let option = {
        grid:{
            top: '5%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine: {
              lineStyle: {
                  color: '#63A2DF'
              }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: {       //y轴
                show: false
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color:['#0ed5f7'],
        series: [
            {
                name: '总',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#6EB5DF"
                        }
                    },
                }, //线条样式
                areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(93,255,227,0.42)'  // 0% 处的颜色 rgba(93,255,227,0.22)
                      }, {
                          offset: 1,
                          color: 'rgba(0,61,64,0.08) ' // 100% 处的颜色
                      }]) //背景渐变色
                  }
                },
                symbolSize: 5, //折线点的大小
                data: a
            },
        ]
    };
    return option
}

// load 中间柱状图
function createLoadBarChart (a, b, c, d) {

    if (!a) {
        a = [
            ['7.14', 20],
            ['7.15', 22.4],
            ['7.16', 19.2],
            ['7.17', 20.8],
            ['7.18', 17.6],
            ['7.19', 8],
            ['7.20', 12],
        ]
    }
    if (!b) {
        b = [
            ['7.14', 1.5],
            ['7.15', 1.68],
            ['7.16', 1.44],
            ['7.17', 1.56],
            ['7.18', 1.32],
            ['7.19', 0.6],
            ['7.20', 0.9],
        ]
    }
    if (!c) {
        b = [
            ['7.14', 2.5],
            ['7.15', 2.8],
            ['7.16', 2.4],
            ['7.17', 2.6],
            ['7.18', 2.2],
            ['7.19', 1],
            ['7.20', 1.5],
        ]
    }
    let option = {
        grid:{
            top: '20%',
            bottom: '3%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisTick: false,
            axisLine: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color: ['#007C8D','#0445C0','#046DC0','#AC5FFF'],
        legend: {
            left: 0,
            top: 10,
            align:'left',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            borderRadius: [8, 8, 0, 0],
            itemWidth: 15,  // 设置宽度
            itemHeight: 17, // 设置高度
            itemGap: 40, // 设置间距
            data: [{
                name: '生产',
                // icon: 'rect'
            }, {
                name: '照明',
                // icon: 'rect'
            }, {
                name: '空调',
                // icon: 'rect'
            }, {
                name: '消防',
                // icon: 'rect'
            }]
        },
        series: [
            {
                name: '生产',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4174FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0445C0' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: a
            },
            {
                name: '照明',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5DE3FF' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#007C8D'// 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: b
            },
            {
                name: '空调',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#046DC0' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3EC4FF' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: c
            },
            {
                name: '消防',
                type: 'bar',
                smooth: true,
                symbol: "none", //去掉折线点
                // stack: 100,
                barWidth : 18,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        barBorderRadius:[10,10,0,0,],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#AC5FFF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#5B04FF' // 100% 处的颜色
                        }]), //背景渐变色
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: d
            }
        ]
    };
    return option
}


// predict 左侧折线图
function createPredictLineChartOne (a, b) {
    if (!a) {
        a = [
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 120],
            ['5.5', 120],
            ['5.6', 120],
            ['5.7', 350]
        ]
    }
    let option = {
        grid: {
            top: 10,
            bottom: 30,
            left: 80,
            right: 10
        },

        // dataZoom:[{
        //     type:'slider',
        //     show:true,
        //     start:0,
        //     end:0
        // }],
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            data: a,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: false,
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        // color:['#0ed5f7'],
        series: [
            {
                // name: '总',
                type: 'line',
                symbol: "none", //去掉折线点
                smooth:true,
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(14,139,255,0.22)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(18,72,129,0.12)' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#477EFF "
                        }
                    },
                }, //线条样式
                areaStyle: {
                    normal: {}
                },
                symbolSize: 5, //折线点的大小
                data: b
            },
        ]
    };
    return option
}
// predict 左侧折线图
function createPredictLineChartTwo (a, b) {
    if (!a) {
        a = [
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 120],
            ['5.5', 120],
            ['5.6', 120],
            ['5.7', 350],
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 120],
            ['5.5', 120],
            ['5.6', 120],
            ['5.7', 350],
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 120],
            ['5.5', 120],
            ['5.6', 120],
            ['5.7', 350],
            ['5.1', 200],
            ['5.2', 100],
            ['5.3', 350],
            ['5.4', 120],
            ['5.5', 120],
            ['5.6', 120],
            ['5.7', 350]
        ]
    }
    let option = {
        grid: {
            top: 10,
            bottom: 30,
            left: 70,
            right: 10
        },
        dataZoom: [//滑动条
            {
                xAxisIndex: 0,//这里是从X轴的0刻度开始
                show: false,//是否显示滑动条，不影响使用
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 6  // 一次性展示6个。
            }
        ],
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            data: a,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: false,
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        color:['#0ed5f7'],
        series: [
            {
                name: '总',
                type: 'line',
                symbol: "none", //去掉折线点
                smooth:true,
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: 'rgba(93,255,227,0.22)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,61,64,0.08)' // 100% 处的颜色
                                }
                            ]
                        ), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#95D9FF "
                        }
                    },
                }, //线条样式
                areaStyle: {
                    normal: {}
                },
                symbolSize: 5, //折线点的大小
                data: b
            },
        ]
    };
    return option
}


// predict 右侧折线图 二折线 風功率预测曲线
function createPredictLineChartRightOne (a, b, c) {
    let option = {
        grid: {
            top: 80,
            bottom: 30,
            left: 80
        },
        color: ['#00E0FF','#5F8EFF'],
        legend: {
            left: '0px',
            top: '3px',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 50,  // 设置宽度
            itemHeight: 3, // 设置高度
            itemGap: 40, // 设置间距
            data: [ {
                name: '预测功率',
                icon: 'rect'
            },{
                name: '实际功率',
                icon: 'rect'
            }]
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            data: a,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#63A2DF'
                }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: false,
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                name: '预测功率',
                type: 'line',
                symbol: "none", //去掉折线点
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#00E0FF "
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: b
            },
            {
                name: '实际功率',
                type: 'line',
                symbol: "none", //去掉折线点
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#5F8EFF "
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: c
            }
        ]
    };
    return option
}

// predict 右侧折线图 三折线
function createPredictLineChartRightTwo (a, b, c, d) {
    if (!a) {
        a = [
            ['7:00', 20],
            ['7:15', 100],
            ['7:30', 350],
            ['7:45', 120],
            ['8:00', 120],
            ['8:15', 120],
            ['8:30', 350],
            ['8:45', 350],
            ['9:00', 350],
            ['9:15', 20],
        ]
    }
    if (!b) {
        b = [
            ['7:00', 20],
            ['7:15', 100],
            ['7:30', 350],
            ['7:45', 20],
            ['8:00', 120],
            ['8:15', 100],
            ['8:30', 250],
            ['8:45', 200],
            ['9:00', 130],
            ['9:15', 20],
        ]
    }
    if (!c) {
        c = [
            ['7:00', 20],
            ['7:15', 130],
            ['7:30', 50],
            ['7:45', 120],
            ['8:00', 320],
            ['8:15', 120],
            ['8:30', 100],
            ['8:45', 30],
            ['9:00', 200],
            ['9:15', 20],
        ]
    }
    if(!d){
        d  =[
            ['7:00', 40],
            ['7:15', 100],
            ['7:30', 10],
            ['7:45', 10],
            ['8:00', 30],
            ['8:15', 120],
            ['8:30', 80],
            ['8:45', 30],
            ['9:00', 200],
            ['9:15', 20],
        ]
    }
    let option = {
        grid: {
            top: 80,
            bottom: 30,
            left: 80
        },
        color: ['#5F8EFF','#00E0FF','#065CFF'],
        legend: {
            left: '0px',
            top: '3px',
            textStyle: {
                color: '#71B9FF',
                fontSize: 20
            },
            align:'right',
            itemWidth: 50,  // 设置宽度
            itemHeight: 3, // 设置高度
            itemGap: 20, // 设置间距
            data: [
                {
                    name: '风机功率',
                    icon: 'rect'
                },
                {
                    name: '光伏功率',
                    icon: 'rect'
                },
                {
                    name: '储能功率',
                    icon: 'rect'
                }
            ]
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#1f4b95',
                    width: 1
                }
            },
            axisLine: {
              show: true,
              lineStyle: {
                  color: '#63A2DF'
              }
            },
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            },
            data: a
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            splitLine: false,
            axisLine: false,
            axisTick: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#6AACEB',
                    fontSize: 20
                }
            }
        },
        series: [
            {
                name: '光伏功率',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#5F8EFF"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: b
            },
            {
                name: '风机功率',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#00E0FF"
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: c
            },
            {
                name: '储能功率',
                type: 'line',
                symbol: "none", //去掉折线点
                // stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        lineStyle: { // 系列级个性化折线样式
                            width: 5,
                            type: 'solid',
                            color: "#065CFF "
                        }
                    },
                }, //线条样式
                symbolSize: 5, //折线点的大小
                data: d
            },
        ]
    };
    return option
}

//文件位置

const filePath = 'file:///C:/Users/lixy/Desktop/bigScreen/'
