var index = 0;

function compDialog() {
	require(["bncList", "mui", "zepto", "base"], function(bncList, mui, $, base) {
		/*	console.log(bncList.init({},1));
			console.log('=======================================');
			console.log(bncList.init({},2));
			console.log('=======================================');
			console.log(bncList.init({},3));*/
		$("#list-box").empty();
		$("#list-box").append(bncList.init({}, 1, index));
		$("#list-box").append(bncList.init({}, 2, index));
		mui("#list-box")[0].insertAdjacentHTML('beforeend', bncList.init({}, 3, index));
		index++;
		mui.ajax({
			url: 'http://yapi.demo.qunar.com/mock/65528/api/login',
			type: 'get',
			dataType: 'json',
			data: {},
			async: true,
			timeout: 10000,
			cache: false,
			success: function(data) {
				console.log('测试ajax返回数据：');
				console.log(JSON.stringify(data));
				$('#ajax-box').empty().append(JSON.stringify(data))
			},
			error: function(data) {
				mui.toast(data.msg);
			}
		});
		/*base.ajax({
				url:'http://yapi.demo.qunar.com/mock/65528/api/login',
		    data:{ },
		    method:'get',
		    dataType:'json',
		    async:true
			},function(data){
				console.log('执行成功了哦');
				console.log(JSON.stringify(data));
				$('#padded-box').append(JSON.stringify(data))
			})*/
	})
}

function goAlert() {
	require(["mui"], function(mui) {
		mui.openWindow({
			url: "resources/plugins/bnc-alert/testAlert.html",
			id: "s",
			styles: {
				popGesture: "close",
				statusbar: {
					background: "#f7f7f7"
				}
			},
		});

	})
}
require(["bncalert", "zepto"], function(bncAlert, $) {
	$("body div").on('click', '.alert', function() {
		var $this = $(this);
		var type = $this.attr('data-flag');
		console.log(type);
		bncAlert({
			content: '<h1 style="display:flex;justify-content:center;">我是弹框</h1>',
			effect: type,
			blankclose: true,
			//autoClose: true
		})

	})
})

require(["bncbuttons"],function(bncBtn){
		bncBtn({
			soltid:'padded-box',
			content:"按钮测试"
		})
})
/*function a(){
	require(["bncalert","zepto"],function(bnc,$){
		console.log($);
		console.log(bnc);
		bnc({
        content: '<h1 style="display:flex;justify-content:center;">我是弹框</h1>',
        effect: "fadeIn",
        blankclose: true,
        //autoClose: true
    })
	})
}*/