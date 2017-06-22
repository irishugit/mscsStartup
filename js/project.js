/*
* @Author: Iris Hu
* @Date:   2017-05-15 02:16:22
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-15 02:32:38
*/

window.onload=function(){
	new Vue({
		el:'#mainApp',
		created:function(){
			
			var body = $('body')

			resizeCallBack(body[0].clientWidth)

			$(window).resize(function(){
				this.innerWidth;
				resizeCallBack(this.innerWidth)
			})
			function resizeCallBack(bodyWidth){
				var navbar = $('#navbar-example .nav-pills')
				if (bodyWidth >= 1350) {
					navbar.css('display','')
					navbar.css('left',(bodyWidth - 1000)/2-175)  
				}
				else{
					navbar.css('display','none')
				}
			}
			
			body.scrollspy({ target: '#navbar-example' })
			
			// 在创建的时候分析连接参数，设置data
			// 获得连接中的id参数
	    	var id = _GLOBE.getUrlAttr('id');

	    	if (id === '')  return;

	    	window.location.href = navDatas.project + '#' + id;

	    	
		}


	});
}