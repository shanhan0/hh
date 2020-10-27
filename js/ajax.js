var HttpRequest = function (options) {
    var defaults = {
        type: 'get',
        headers: {},
        data: {},
        dataType: 'json',
        async: false,
        cache: false,
        beforeSend: null,
        success: null,
        complete: null,
        contentType: 'application/json;charset=UTF-8',
        access_token:'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxOTEwMDU1MDU0fQ.lnVvv_YiuBVkLVA76okOTseLEgBAAEAyudnRQpTnkTU'
    };
    var o = $.extend({}, defaults, options);
    $.ajax({
        url: o.url + '?access_token='+ o.access_token,
        type: o.type,
        headers: {
            'Content-Type': o.contentType,
        },
        data: o.data,
        dataType: o.dataType,
        async: o.async,

        beforeSend: function (xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        },
        success: function (res) {
            o.success && o.success(res);
        },
        complete: function () {
            o.complete && o.complete();
        }
    });
};

