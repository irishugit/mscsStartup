/*
* @Author: Iris Hu
* @Date:   2017-05-15 02:16:22
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-15 02:32:38
*/

window.onload=function(){
	new Vue({
		el:'#mainApp',
		data:{
			breadDatas:[
				{
					url:navDatas.home,
					name:'首页',
					activity:false
				},
				{
					url:'news.html?id=news',
					name:'新闻动态',
					activity:false
				},
				{
					url:'news.html?id=news',
					name:'新闻动态',
					activity:false
				},
				{
					url:'#',
					name:'新闻动态',
					activity:true
				},
			],
			newsContent:{
				html:'<h2 class="text-center">内容加载错误！</h2>'
			},
			trans:{
				platform: '孵化平台',
				news: '新闻动态'
			}
		},
		created:function(){
			// 在创建的时候分析连接参数，设置data
			// 获得连接中的id参数
	    	var id = _GLOBE.getUrlAttr('id');
	    	var type = _GLOBE.getUrlAttr('type');
	    	var page = _GLOBE.getUrlAttr('page');

	    	if (id === '' || page ==='')  return;

	    	this.newsContent = _GLOBE[page + 'Datas'][type][id-1];


	    	this.breadDatas[this.breadDatas.length-1].name = this.newsContent.title;
	    	this.breadDatas[1].url = navDatas[page] + (type ? '?id=' + type : '');
	    	this.breadDatas[2].url = navDatas[page] + (type ? '?id=' + type : '');

	    	var  navName;
		    _GLOBE[page + 'Datas'].nav.map(function(d){
		    	if (d.id === type) {
		    		navName = d.name;
		    	}
		    })
	    	this.breadDatas[1].name = this.trans[page];
	    	this.breadDatas[2].name =  navName;

		},

	});
}