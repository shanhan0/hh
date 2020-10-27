$(function(){
    function dataFun(){
        var token= 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxOTEwMDU1MDU0fQ.lnVvv_YiuBVkLVA76okOTseLEgBAAEAyudnRQpTnkTU'
        var arra;
        $.ajax({
            async:false,
            type:'get',
            url:'http://172.172.33.34:8088/v1/total/getPowerCurveData?access_token='+token,
            success:function(response){

                console.log(response)
                if(response){
                    arra =response
                }
            }
        })
        return arra
    }

})