(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }

    var result = $.ajax({
        url: './geojson/china_district.json',
        type: 'get',
        async: false,
        dataType: 'json'
    }).responseJSON;
    echarts.registerMap('chinaDistrict', result);

    var result2 = $.ajax({
        url: './geojson/china.json',
        type: 'get',
        async: false,
        dataType: 'json'
    }).responseJSON;
    echarts.registerMap('china', result2);
}));