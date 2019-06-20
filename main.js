var frontMode = "dev";
var frontLocalUrl = "/" + window.location.pathname.split("/")[1];
var requireConfig = {
	paths : {
		"mui":"static/js/mui.min",
		"index":"static/index",
		"listviews" : "resources/plugins/bnc-list-default/bnc-list-default",
	}
}
/**
 * require 加载配置
 */
require.config(requireConfig);
/**
 * require 加载默认组件
 */
var defaultLoad = ["listviews","mui","index"];
require(defaultLoad, function(listviews,mui,index) {
	console.log("默认加载了以下模块:" + JSON.stringify(defaultLoad));
});