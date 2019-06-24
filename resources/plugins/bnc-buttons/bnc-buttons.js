/**
 * 常用的按钮组件
 * @return {[]} [depend zepto
 */
define(["zepto"], function ($) {
    var button = function (opts) {
        var defaultOpts = {
            slotid:'',//插入div的id
            content: '', //内容  文字 || html
            color: '',
            background: '',
            okCallback: function () { }, //确定回调
            before: function () {
                console.log('before');
            },
            close: function () {
                console.log('close');
            }
        }

        for (i in defaultOpts) {
            if (opts[i] === undefined) {
                opts[i] = defaultOpts[i];
            }
        }

        opts.before && opts.before();

        var buttonHtml = '<button type="button" class="mui-btn bnc-btn">' +
            opts.content+
            '</button>';
        $('#'+opts.soltid).append(buttonHtml);
       /*  var buttonHtml = [
            '<button type="button" class="mui-btn bnc-btn">',
            opts.content,
            '</button>'
        ] 
        $('#'+opts.soltid).append(buttonHtml.join(''));*/

    }
    return button;
});