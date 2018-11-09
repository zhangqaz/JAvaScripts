(function () {

    //将变量闭包在匿名函数里
    function jsonToGet(data) {
        var str = '';
        //1遍历json数据
        for (var i in data) {
            str += i + '=' + data[i] + "&"; //data[i]属性值
        }
        //3.去掉最后一个多余的&符号
        str = str.replace(/&+$/, "");
        //4.将处理好的数据返回
        return str;
    }

    function merge(ini) {
        //2配置默认
        let config = {
            type: 'get',
            url: '',
            async: true, //异步
            cache: false, //缓存
            data: {},
            success: function () {},
            beforeSend: function () {},
            complete: function () {},
        };
        //2.1创建一个变量不给值,这就是undefined,用于比较属性是否是undefind;
        let z;
        //2.2如果没有传递参数   让默认参数为空对象
        ini = ini || {} //如果没有传递参数   默认传入空对象
        //3.遍历默认选项，即使传进来的是选项中没有的属性也不会被添加进来


        for (let i in config) {
            config[i] = ini[i] === z ? config[i] : ini[i];
        }
        //返回合并结果
        return config;
    }
    //1.定义ajax函数
    function ajax(config) {
        console.log("config", config)
        //使用merage将config 初始化合并一下
        config = merage(config);
        //3.创建ajax对象
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('microsoft.XMLHTTP');
        //4.先去判断请求是否为post
        let isPost = /post/i.test(config.type);
        //4.1无论是get还是post都要把json数据转化为get参数类型
        config.data = jsonToGet(config.data);
        //5.如果get方式要判断是否要缓存,如果不要缓存就加时间戳。向地址上加时间的时候要判断之前是否有？号
        if (!isPost) {
            config.url += (config.url.indexOf('?') > -1 ? '&' : '?') + (config.cache ? "" : new Date().getTime() + "=1" + "&" + config.data);
        }
        //6.打开地址
        xhr.open(config.type, config.url, config, async);
        //7.如果是poet
        if (isPost) {
            //8.加请求头
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        }
        //9.执行发送之前的回调，要执行回调函数一定要判断他是不是函数
        if (typeof config.beforeSend == 'function') {
            config.beforeSend();
        }
        //10.发送数据
        xhr.send(config.data);
        //         //11.添加监听事件

        //         xhr.onreadystatechange = function () {

        //             //12.判断是否完成

        //             if (xhr.readyState == 4) {

        //                 //13.如果请求完成，并且有回调函数就执行

        //                 if (typeof config.complete == "function") {

        //                     config.complete(xhr.status, xhr);

        //                 }
        //                 if (typeof config.success == "function") {

        //                     config.success(xhr.responseText, xhr);
        //                 }
        //             }
        //         }
        //     }

    }

    ajax();
})();

// (function () {
//     //1.定义ajax函数
//     function ajax(config) {

//         //2.使用merge将config初始化合并一下

//         config = merge(config);

//         //3.创建ajax对象

//         var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("microsoft.XMLHTTP");

//         //4.先去判断请求是否为post

//         var isPost = /post/i.test(config.type);

//         //4.1无论是get还是post都要把json数据转化成get参数类型

//         config.data = jsonToGet(config.data);

//         //5.如果是get方式要判断是否要缓存，如果不要缓存就加时间戳。向地址上加时间的时候要判断之前是否有？号

//         if (!isPost) {

//             config.url += (config.url.indexOf("?") > -1 ? "&" : "?") + (config.cache ? "" : new Date().getTime() + "=1") + "&" + config.data;

//         }

//         //6.打开地址

//         xhr.open(config.type, config.url, config.async);

//         //7.如果是post

//         if (isPost) {

//             //8.添加请求头

//             xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

//         }

//         //9.执行发送之前的回调函数，要执行回调函数一定要判断它是不是函数

//         if (typeof config.beforeSend == "function") {

//             config.beforeSend();

//         }

//         //10.发送数据

//         xhr.send(config.data);

//         //11.添加监听事件

//         xhr.onreadystatechange = function () {

//             //12.判断是否完成

//             if (xhr.readyState == 4) {

//                 //13.如果请求完成，并且有回调函数就执行

//                 if (typeof config.complete == "function") {

//                     config.complete(xhr.status, xhr);

//                 }
//                 if (typeof config.success == "function") {

//                     config.success(xhr.responseText, xhr);
//                 }
//             }
//         }
//     }



//     /*
//      * 所有的全局变量都是window的属性
//      *
//      * */
//     window.ajax = ajax;
// })();