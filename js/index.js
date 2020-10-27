$(function() {
    var socket = new WebSocket("ws://172.172.33.34:8088/webSocket/total");
    socket.onmessage = function(msg) {
        if(msg.data && msg.data!='连接成功'){
            var  response = JSON.parse(msg.data)
            if(response[0]['position']=='left'){
                renderLeft(response[0].value)
            }
            else if(response[0]['position']=='right'){
                renderRightColumnChart(response[0].value);

            }else if(response[0]['position']=='top'){
                renderTitle(response[0].value);
            }
        }
    };

    //首页的折线左侧
        var arr = leftPoint();
        renderLeft(arr);


    // 首页的柱形图右侧
        var columnChartData = columnChart();
        renderRightColumnChart(columnChartData);

    //头部
        renderTitle(topTitleReq())




   // 头部
    function renderTitle(data){
        var arr = [];
        if(data) {
            var {Total_Load_Energy, Total_OnGrid_Energy, Total_Energy_Earnings, Total_CO2_EmisReduc,Total_Coal_EmisReduc } = data
            arr = [ Total_Load_Energy,Total_OnGrid_Energy,Total_Energy_Earnings,
                Total_CO2_EmisReduc,Total_Coal_EmisReduc
            ];
        }

        $('.KPI h2').html('');
        $('.KPI h2').each(function(v,item){
           var spanHtml = `<span>${( v===0 || v===1 ? "MWh" :v==2  ? "万元" :"T")}</span>`;
            $(item).prepend(arr[v] + spanHtml);
            //数字滚动
            // animateNUM($(item)[0],arr[v])

        })
    }


    //左侧的折线图
    function renderLeft(arr){
        let chartOne = echarts.init( document.getElementById('chartOneContent'));
        let optionOne = createIndexOptionOne(arr.Total_ActualPower_Gene,arr.TP_ST_PD_Gene);
        chartOne.setOption( optionOne );

        let chartTwo = echarts.init( document.getElementById('chartTwoContent'));
        let optionTwo = createIndexOptionTwo(arr.Total_ActualPower_Cons,arr.LP_ST_PD_Cons);
        chartTwo.setOption( optionTwo );
    }

    //右侧柱形图
    function renderRightColumnChart(columnChartData){
       console.log(columnChartData,'111')
        let chartBarOne = echarts.init( document.getElementById('rightChartContentOne'));
        let optionBarOne = createIndexBarOption(columnChartData.TIME, columnChartData.Load_Power );
        chartBarOne.setOption( optionBarOne );

        let chartBarTwo = echarts.init( document.getElementById('rightChartContentTwo'));
        let optionBarTwo = createIndexBarOptionTwo(columnChartData.TIME, columnChartData.Electricity_Trading );
        chartBarTwo.setOption( optionBarTwo );

        let chartBarThree = echarts.init( document.getElementById('rightChartContentThree'));
        let optionBarThree = createIndexBarOptionThree(columnChartData.TIME, columnChartData.On_Grid );
        chartBarThree.setOption( optionBarThree );
    }



    function leftPoint(){
        var arr = [];
        HttpRequest({
            type: 'get',
            url: 'http://172.172.33.34:8088/v1/total/getPowerCurveData',
            success: function( response ){
                if( response ){
                    arr = response
                }
            }
        })
        return arr
    }
    function  columnChart(){
        var arr = [];
        HttpRequest({
            type: 'get',
            url: 'http://172.172.33.34:8088/v1/total/getNearlySevenDayData',
            success: function( response ){
                if( response ){
                    arr = response;
                }
            }
        })

        return arr;
    }
    function topTitleReq(){
        var obj = {}
        HttpRequest({
            type: 'get',
            url: 'http://172.172.33.34:8088/v1/total/getTotalData',
            success:function(response){
                if(response){
                    obj = response;
                }
            }
        })
        return obj;
    }

})
