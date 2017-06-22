/*
* @Author: Iris Hu
* @Date:   2017-05-15 15:16:22
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-15 15:16:22
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
				name:'优秀团队',
				activity:false
			},
			{
				url:'#',
				name:'物联网',
				activity:true
			},
			],
			// tab数据
			tabDatas:_GLOBE.teamDatas
		},
		components:{
			'ms-tab':msTab
		},
		created:function(){

			var page = '&page=team';
			var THIS = this;

			var id = _GLOBE.getUrlAttr('id');

	    if (id === '')  
	    	id = 'Ethings';

			this.tabDatas.nav.map(function(a){

				// 找到相同id的改变活动状态和breadcrums的当前值
	    	if(a.id === id){
	    		THIS.breadDatas[THIS.breadDatas.length - 1].name = a.name;
	    		a.activity = true;
	    	}
	    	else
	    		a.activity = false;

				THIS.tabDatas[a.id].map(function(d){
					d.locationParams += page + '&type=' + a.id;
				});
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