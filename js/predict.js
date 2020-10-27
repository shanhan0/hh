
$(function() {
        var socket = new WebSocket("ws://172.172.32.187:9500/webSocket/forecastSchedul");
        var url = 'http://172.172.32.187:9500/';
        socket.onmessage = function(msg) {
            if(msg.data && msg.data!='连接成功'){
                var  response = JSON.parse(msg.data)
                if(response[0]['position']=='left'){
                    brokenLineFun(response[0].value)
                }
                else if(response[0]['position']=='right'){
                    predFun(response[0].value);

                }else if(response[0]['position']=='top'){
                    progress(response[0].value);
                }
            }
        };




     var brokenLineData = brokenLineData();
     brokenLineFun(brokenLineData);



    var rightBrokenLine = rightBrokenLine();
    predFun(rightBrokenLine);


    var scaleData = scaleData();
    progress(scaleData);

    var choseIndex = 0; //左侧折线切换tab时的变量
    var particularIndex = 0, //右侧预测功率和实际功率折线的下标
        particularShortIndex = 0; //右侧 particularShortIndex=0短期；=1超短期
        

    function clickFun(brokenLineData){
           if(window['choseIndex'] == 0){ //短期
               $('.predictlist .predictShort span').html('超短期');
                window['choseIndex'] += 1;
           }else{
                 $('.predictlist .predictShort span').html('短期');
                 window['choseIndex'] = 0;
           }
           $('.predictlist .predictShort span').each(function(i , item){
               if($(item).html() == '超短期'){
                   choseIndex = i;
                   switch(choseIndex){
                       case 0:
                           windFun(brokenLineData.Short_Time, brokenLineData.Short_Wind_Power)
                           break;
                       case 1:
                           lightFun(brokenLineData.Short_Time, brokenLineData.Short_Light_Power)
                           break;
                       case 2:
                           loadFun(brokenLineData.Short_Time, brokenLineData.Short_Load_Power)
                           break;
                       case 3:
                           chargeFun(brokenLineData.Short_Time, brokenLineData.Short_Discharge_Power)
                           break;
                       default:
                           break;
                   }
               }else{
                   choseIndex = i;
                   switch(choseIndex){
                       case 0:
                           windFun(brokenLineData.TIME,  brokenLineData.Wind_Power)
                           break;
                       case 1:
                           lightFun(brokenLineData.TIME, brokenLineData.Light_Power)
                           break;
                       case 2:
                           loadFun(brokenLineData.TIME, brokenLineData.Load_Power)
                           break;
                       case 3:
                           chargeFun(brokenLineData.TIME, brokenLineData.Discharge_Power)
                           break;
                       default:
                           break;
                   }
               }

           })

   }

  
   
    //创建左侧图表，用的首页的option函数，一共三个
    function brokenLineFun(brokenLineData){

        // 风功率预测data
        windFun(brokenLineData.TIME, brokenLineData.Wind_Power)

        // 光功率预测data
        lightFun(brokenLineData.TIME, brokenLineData.Light_Power)

        // 负荷预测data
        loadFun(brokenLineData.TIME, brokenLineData.Load_Power)

        // 充电曲线
        chargeFun(brokenLineData.TIME, brokenLineData.Discharge_Power)

    }
    function windFun(TIME,Wind_Power ){

        let predictFXdata =TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictFYdata = Wind_Power || [ 9880, 8950, 7750, 8090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let leftChartPredictTwo = echarts.init( document.getElementById('leftChartPredictTwo'));
        let optionLeftChartPredictTwo = createPredictLineChartTwo(predictFXdata, predictFYdata);
        leftChartPredictTwo.setOption( optionLeftChartPredictTwo );
    }
    function lightFun(TIME, Light_Power){
        let predictGXdata = TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictGYdata = Light_Power || [ 245.15, 1299.05, 1805.375, 1958.5, 2023.75, 1969.7, 1831.6, 1320.525, 676.175, 568.75, 76.75];
        let leftChartPredictThree = echarts.init( document.getElementById('leftChartPredictThree'));
        let optionLeftChartPredictThree = createPredictLineChartOne(predictGXdata, predictGYdata);
        leftChartPredictThree.setOption( optionLeftChartPredictThree );
    }
    function loadFun(TIME, Load_Power){
        let predictFHXdata = TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictFHYdata = Load_Power || [ 490, 1090, 2250, 2700, 2560, 2280, 2380, 3230, 2910, 3060, 3280];
        let leftChartPredictFour = echarts.init( document.getElementById('leftChartPredictFour'));
        let optionLeftChartPredictFour = createPredictLineChartTwo(predictFHXdata, predictFHYdata);
        leftChartPredictFour.setOption( optionLeftChartPredictFour );
    }
    function chargeFun(TIME, Discharge_Power){
        let predictOutletXdata = TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictOutletYdata = Discharge_Power ||  [ -31, -152, 595, -236, 275, 93, 525, -387, 163, -974, -259];
        let leftChartPredictFive = echarts.init( document.getElementById('leftChartPredictFive'));
        let optionLeftChartPredictFive = createPredictLineChartOne(predictOutletXdata, predictOutletYdata);
        leftChartPredictFive.setOption( optionLeftChartPredictFive );
    }
    // 头部中间的比例图
    function progress(scaleData){
        var {Total_Revenue, Total_Cost, Today_Wf, Today_Gf, Today_Energy_Storage, Today_Electricity_Bill} =  scaleData;
        var arr = [ Today_Wf, Today_Gf, Today_Energy_Storage, Today_Electricity_Bill];
        $('.predictKpiOne h2').empty()
        $('.secondKpi h2').html('')
        $('.mainHeader .kpiProgress div  h2').html('')

        $('.predictKpiOne h2').prepend(Total_Revenue + '<span>元</span>')
        $('.secondKpi h2').prepend(Total_Cost + '<span>元</span>')
        $('.mainHeader .kpiProgress').each(function(i,item){
            $(item).children().find('h2').prepend(arr[i]+ '<span>元</span>')

        });

        let chartProgressOne = echarts.init( document.getElementById('KPIProgressChartOne'));
        let optionProgressOne = createSourceProgress(scaleData.Today_Wf_Percentage);
        chartProgressOne.setOption( optionProgressOne );

        let chartProgressTwo = echarts.init( document.getElementById('KPIProgressChartTwo'));
        let optionProgressTwo = createSourceProgress(scaleData.Today_Gf_Percentage);
        chartProgressTwo.setOption( optionProgressTwo );

        let chartProgressThree = echarts.init( document.getElementById('KPIProgressChartThree'));
        let optionProgressThree = createSourceProgress(scaleData.Today_Energy_Storage_Percentage);
        chartProgressThree.setOption( optionProgressThree );

        let chartProgressFour = echarts.init( document.getElementById('KPIProgressChartFour'));
        let optionProgressFour = createSourceProgress(scaleData.Today_Electricity_Bill_Percentage);
        chartProgressFour.setOption( optionProgressFour );

    }

    function rightShort(rightBrokenLine){
        // $('.predictRightContent .predictRightHeader .predictShort').on('click',function(){
           
            if(window['particularShortIndex'] == 0){ //短期
                 $('.predictRightContent .predictRightHeader .predictShort span').html('超短期');
                 window['particularShortIndex'] += 1;
            } else{//超短期
                 $('.predictRightContent .predictRightHeader .predictShort span').html('短期');
                 window['particularShortIndex'] = 0;
            }
         
            //particularIndex 
            var jqDom = $('.predictRightHeader p').not('.predictShort');
           
           setInterval(function(){
               console.log( window['particularIndex'],999)
            if(window['particularIndex'] == 0){
                $(jqDom[0]).css('color','#fff').siblings().not('.predictShort').css('color','#81E8EF');
                window['particularIndex'] + 1;
                console.log(window['particularIndex'],0)
            }else if(window['particularIndex'] == 1){
                console.log(window['particularIndex'],1)
                $(jqDom[1]).css('color','#fff').siblings().not('.predictShort').css('color','#81E8EF');
                window['particularIndex'] = 2;
            } else if(window['particularIndex'] == 2){
                console.log(window['particularIndex'],2)
                $(jqDom[2]).css('color','#fff').siblings().not('.predictShort').css('color','#81E8EF');
                window['particularIndex'] = 0;
            }
           

           },8000)
        

            // jqDom.each(function(i, item){
            //     (function(i,item){
            //         setInterval(() => {
            //             console.log(i,item)
            //             $(item).css('color','#fff').siblings().not('.predictShort').css('color','#81E8EF');
            //             // if($(item).css('color') == 'rgb(236, 246, 255)'){ //选中，保存下表
            //             window['particularIndex'] = i;
            //         }, 8000);
            //     })(i,item)
             
                
            // })
            var dom = $('.predictRightContent .predictRightHeader .predictShort span').html();
            var xData, yData, Time;
            if( dom == '超短期'){
                Time = rightBrokenLine.Short_Time;
                switch(window['particularIndex']){
                    case 0:
                        xData = rightBrokenLine.Short_Wf_Predicted_Power || [280,300,250,770,450,230,840];
                        yData = rightBrokenLine.Short_Wf_Actual_Power || [210,190,559,760,450,230,840];
                        TabClick(Time, xData, yData);
                    break;
                    case 1:
                        xData =  rightBrokenLine.Short_Gf_Predicted_Power || [200,330,550,770,450,230,840];
                        yData = rightBrokenLine.Short_Gf_Actual_Power || [200,330,250,570,450,230,840];
                        TabClick(Time, xData, yData);
                        break;
                    case 2:
                        xData = rightBrokenLine.Short_Load_Predicted_Power || [200,300,550,770,450,230,840];
                        yData = rightBrokenLine.Short_Load_Actual_Power || [200,310,550,770,450,230,840];
                        TabClick(Time, xData, yData);
                    default:
                        break;
                }

            }else if(dom == '短期'){
                 Time = rightBrokenLine.TIME;
                switch(window['particularIndex']){
                    case 0:
                        xData =  rightBrokenLine.Wf_Predicted_Power || [200,330,550,770,450,230,140];
                        yData = rightBrokenLine.Wf_Actual_Power || [200,330,550,770,450,230,740];
                        TabClick(Time, xData, yData);
                        break;
                    case 1:
                        xData =  rightBrokenLine.Gf_Predicted_Power || [200,330,550,770,450,230,840];
                        yData = rightBrokenLine.Gf_Actual_Power || [200,330,550,770,450,230,840];
                        TabClick(Time, xData, yData);
                        break;
                    case 2:
                        xData = rightBrokenLine.Load_Predicted_Power || [200,330,550,770,450,230,840];
                        yData = rightBrokenLine.Load_Actual_Power || [200,330,550,770,450,230,840];
                        TabClick(Time, xData, yData);
                    default:
                        TabClick(Time, xData, yData);
                        break;
                }

            }

        // })
    }
  

    function TabClick(Time,xData,yData){
        // 预测功率和实际功率
        let predictRealXdata = Time || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictRealAdata = xData ||  [ 9880, 8950, 7750, 8090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let predictRealBdata = yData || [ 9442, 8250, 5750, 3090, 5250, 7200, 2950, 7350, 8090, 8250, 8750];
        let predictRightPieOne = echarts.init( document.getElementById('predictRightPieOne'));
        let optionPredictRightPieOne = createPredictLineChartRightOne(predictRealXdata, predictRealAdata, predictRealBdata);
        predictRightPieOne.setOption( optionPredictRightPieOne );
    }
    // function DS(i,item){
    //       var timerD;
    //       new Promise((resolve,reject)=>{
    //             timerD=  setInterval(function () {
    //                  console.log(i)
    //                  $(item).css('color','#ECF6FF').siblings().not('.predictShort').css('color','#81E8EF');
    //                  window['particularIndex'] = i;
                  
    //             }, i*5000+1000);
    //       })
        
    // }
    function loopTab(rightBrokenLine){
        var timerD;
      
         var dom = $('.predictRightHeader p').not('.predictShort');
         dom.each(function(i,item){
            (function(i,item) {
                   
                  
                // timerD=  setInterval(function () {
                //       clearInterval(timerD)
                //      console.log(i)
                //      $(item).css('color','#ECF6FF').siblings().not('.predictShort').css('color','#81E8EF');
                //      window['particularIndex'] = i;
                  
                // }, i*1000);
             })(i, item)
                    
                  
              var flag = $('.predictRightContent .predictRightHeader .predictShort span').html();
              switch(window['particularIndex']){ //风机
                  case 0:
                      xData = flag == '短期' ?  rightBrokenLine.Fan_Power : rightBrokenLine.Short_Fan_Power;
                      yData = flag == '短期' ?  rightBrokenLine.Gf_Actual_Power : [3000,2000,4200,2400,6400,5400];
                      Time = flag == '短期' ? rightBrokenLine.TIME : rightBrokenLine.Short_Time
                      TabClick(Time,xData,yData)
                      break;
                  case 1: //光伏
                      xData = flag == '短期' ?  rightBrokenLine.Gf_Photovoltaic_Power :  rightBrokenLine.Short_Gf_Photovoltaic_Power;
                      yData = flag == '短期' ? rightBrokenLine.Load_Actual_Power :  [2000,2100,2200,2300,2400,2500];
                      Time = flag == '短期' ? rightBrokenLine.TIME : rightBrokenLine.Short_Time
                      TabClick(Time,xData,yData)
                      break;
                  case 2: //负荷
                      xData = flag == '短期' ? rightBrokenLine.Fh_Storage_Power : rightBrokenLine.Short_Fh_Storage_Power;
                      yData = flag == '短期' ? rightBrokenLine.Wf_Actual_Power: [5000,5100,5200,5300,5400,5500];
                      Time = flag == '短期' ? rightBrokenLine.TIME : rightBrokenLine.Short_Time
                      TabClick(Time,xData,yData)
                      break;
              }
      })
      
    }

    //右侧的曲线
    function predFun(rightBrokenLine){
        TabClick(rightBrokenLine.TIME, rightBrokenLine.Wf_Predicted_Power ,rightBrokenLine.Wf_Actual_Power);
       
        // loopTab(rightBrokenLine);
   
      
        //日前調度指令曲綫
        let predictDispatchXdata = rightBrokenLine.TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictDispatchAdata = rightBrokenLine.Fan_Power || [ 9486, 8950, 7750, 5090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let predictDispatchBdata = rightBrokenLine.Gf_Photovoltaic_Power || [ 9442, 8950, 7750, 8090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let predictDispatchCdata = rightBrokenLine.Energy_Storage_Power || [ 9442, 8950, 7750, 2090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let predictRightPieTwo = echarts.init( document.getElementById('predictRightPieTwo'));
        let optionPredictRightPieTwo = createPredictLineChartRightTwo(predictDispatchXdata, predictDispatchAdata,predictDispatchBdata,predictDispatchCdata);
        predictRightPieTwo.setOption( optionPredictRightPieTwo );


        //日前調度指令曲綫
        let predictInDayDispatchXdata = rightBrokenLine.TIME || ['7:00', '8:00', '9:00','10:00','11:00','12:00','13:00','14:00', '15:00', '16:00','17:00'];
        let predictInDayDispatchAdata = rightBrokenLine.Daytime_Fan_Power ||  [ 8090, 8437, 7670, 6903, 7250, 8222.5, 7475, 6727.5, 7700, 8607.5, 7825];
        let rightLineBdata =  rightBrokenLine.Daytime_Photovoltaic_Power || [ 9442, 8950, 7750, 8090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let rightLineCdata = rightBrokenLine.Daytime_Energy_Storage_Power || [ 9442, 8950, 7750, 8090, 7250, 7700, 7950, 7750, 8090, 8250, 8750];
        let predictRightPieThree = echarts.init( document.getElementById('predictRightPieThree'));
        let optionPredictRightPieThree = createPredictLineChartRightTwo(predictInDayDispatchXdata, predictInDayDispatchAdata, rightLineBdata, rightLineCdata );
        predictRightPieThree.setOption( optionPredictRightPieThree );
    }
   

   setInterval(() => {    
        clickFun(brokenLineData);
    }, 10000);
    setInterval(() => {
         rightShort(rightBrokenLine);
        //   var timers;
        //     timers = setInterval(() => {
        //              clearInterval(timers)
        //              loopTab(rightBrokenLine)
        //     }, 4000);
        }, 10000);
    

    // 头部的比例图
    function scaleData(){
        var arr = [];
        HttpRequest({
            type:'get',
            url: url + 'v1/forecastSchedul/getTopData',
            success:function(response){
                if(response){
                    arr = response
                }
            }
        })
        return arr
    }
    // 左侧
    function brokenLineData(){
                var arr = [];
                HttpRequest({
                    type:'get',
                    url: url + 'v1/forecastSchedul/getCurveData',
                    success:function(response){
                        if(response){
                            arr = response
                        }
                    }
                })
                return arr;

    }
    // 右侧
    function rightBrokenLine(){
        var arr = [];
        HttpRequest({
            type:'get',
            url: url + 'v1/forecastSchedul/getRightData',
            success:function(response){
                if(response){
                    arr = response
                }
            }
        })
        return arr

    }

})
