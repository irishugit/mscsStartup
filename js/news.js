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
			locationTo:navDatas.newsContent,
			// 按先后顺序赋值，会顺序显示，最后一个就是当前的位置
			breadDatas:[
			{
				url:'#',
				name:'新闻动态',
				activity:false
			},
			{
				url:'#',
				name:'新闻动态',
				activity:true
			},
			],
			// tab数据
			tabDatas:_GLOBE.newsDatas
		},
		components:{
			'ms-tab':msTab
		},
		created:function(){
			var page = '&page=news';
			var arr = [];
			var newsLen = this.tabDatas.news.length;

	    	this.tabDatas.news.map(function(d,index){
	    		d.locationParams += page + '&type=news';
	    		arr[newsLen - index - 1] = d;
	    	});

	    	this.tabDatas.news = arr;

	    	this.tabDatas.example.map(function(d){
	    		d.locationParams += page + '&type=example';
	    	});

	    	this.tabDatas.activity.map(function(d){
	    		d.locationParams += page + '&type=activity';
	    	});
	    	
			// 在创建的时候分析连接参数，设置data
			// 获得连接中的id参数
	    	var id = _GLOBE.getUrlAttr('id');

	    	if (id === '')  return;

	    	var THIS = this;
	    	this.tabDatas.nav.map(function(D){
	    		// 找到相同id的改变活动状态和breadcrums的当前值
	    		if(D.id === id){
	    			THIS.breadDatas[THIS.breadDatas.length - 1].name = D.name;
	    			D.activity = true;
	    		}
	    		else
	    			D.activity = false;
	    	});

	    	
		},
		events:{
			// tab组件传来的改变对象
			'change-tab':function(obj){
				// 将name改变breadDatas
				this.breadDatas[this.breadDatas.length - 1].name = obj.name;
				
			}
		},

	});
}