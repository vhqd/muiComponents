define(["mui"],function(mui){
	var service = {
		ajax:function(ajaxrequire,callback) {
		    this.url = ajaxrequire.url;
		    this.dataType = ajaxrequire.dataType || 'post';
		    this.async = ajaxrequire.async || true ;
		    this.method = ajaxrequire.method || "get";
		    this.data = ajaxrequire.data || {};
		    /*this.data.token = 'token';
		    this.data.device = 'weixin';*/
		
		    return mui.ajax({
		        url: this.url,
		        dataType: this.dataType,
		        cache: false,
		        async: this.async,
		        type: this.method,
		        data: this.data,
		        timeout:10000,
		        success:function(data){
		            callback(data);
		        },
		        error:function(data){
		            mui.toast(data.msg);
		        }
		    });
		}
	}
	return service;
})
