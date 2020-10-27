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