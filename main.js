var frontMode = "dev";
var frontLocalUrl = "/" + window.location.pathname.split("/")[1];
var pluginsUrl = "resources/plugins/";
var staticUrl = "static/js/";

var requireConfig = {
	paths : {
		"mui":staticUrl+"mui.min",
		"zepto":staticUrl+"zepto.min",
		"index":"static/index",
		"base":staticUrl+"base",
		"listviews" : pluginsUrl+"bnc-list-default/bnc-list-default",
	}
}
/**
 * require 加载配置
 */
require.config(requireConfig);
/**
 * require 加载默认组件
 */
var defaultLoad = ["listviews","mui","index","base","zepto"];
require(defaultLoad, function(listviews,mui,index) {
	console.log("默认加载了以下模块:" + JSON.stringify(defaultLoad));
});