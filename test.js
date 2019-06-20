  function compDialog(){
    require(["listviews","mui"],function(listviews,mui){
    	console.log(listviews.init({},1));
    	console.log('=======================================');
    	console.log(listviews.init({},2));
    	console.log('=======================================');
    	console.log(listviews.init({},3));
    	mui("#offCanvasContentScroll .mui-scroll")[0].insertAdjacentHTML('beforeend', listviews.init({},1));
    	mui("#offCanvasContentScroll .mui-scroll")[0].insertAdjacentHTML('beforeend', listviews.init({},2)); 
    	mui("#offCanvasContentScroll .mui-scroll")[0].insertAdjacentHTML('beforeend', listviews.init({},3));
    })
  }