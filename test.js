var index = 0;
  function compDialog(){
    require(["listviews","mui","zepto","base"],function(listviews,mui,$,base){
    /*	console.log(listviews.init({},1));
    	console.log('=======================================');
    	console.log(listviews.init({},2));
    	console.log('=======================================');
    	console.log(listviews.init({},3));*/
    	$("#list-box").empty();
    	$("#list-box").append(listviews.init({},1,index));
    	$("#list-box").append(listviews.init({},2,index));
    	mui("#list-box")[0].insertAdjacentHTML('beforeend', listviews.init({},3,index));
    	index++;
    	mui.ajax({
				url:'http://yapi.demo.qunar.com/mock/65528/api/login',
				type:'get',
				dataType:'json',
		    data:{ },
		    async:true,
		    timeout:10000,
	      cache: false,
	      success:function(data){
          console.log('测试ajax返回数据：');
					console.log(JSON.stringify(data));
					$('#ajax-box').empty().append(JSON.stringify(data))
        },
        error:function(data){
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