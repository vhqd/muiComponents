var frontMode = "dev";
var frontLocalUrl = "/" + window.location.pathname.split("/")[1];
var pluginsUrl = "../resources/plugins/";
var staticUrl = "js/";

var requireConfig = {
	paths : {
		"mui":staticUrl+"mui.min",
		"zepto":staticUrl+"zepto.min",
		"index":"index",
		"base":staticUrl+"base",
		"listviews" : pluginsUrl+"bnc-list-default/bnc-list-default",
		"bncalert" : pluginsUrl+"bnc-alert/bnc-alert",
		"test":"test"
	},
	shim : {
		
	}
}
/**
 * require 加载配置
 */
require.config(requireConfig);
/**
 * require 加载默认组件
 */
var defaultLoad = ["mui","index","base","zepto","test"];
require(defaultLoad, function() {
	console.log("默认加载了以下模块:" + JSON.stringify(defaultLoad));
});