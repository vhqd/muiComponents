define(function(){
	var html = ''
	var obj = {
		init:function(data,type){
			switch (parseInt(type)){
				case 1:
					html = `
					<ul class="mui-table-view">
						 <li class="mui-table-view-cell">Item 1</li>
					</ul>
					`
					break;
				case 2:
					html = `
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								Item 1
							</a>
						</li>
					</ul>
					`
					break;
				case 3:
					html = `
					<div class="mui-card" style="margin-bottom: 35px;">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 1
								</a>
							</li>
						</ul>
					<div>
					`
					break;
				default:
					break;
			}
			return html;
		}
	}
	return obj;
})