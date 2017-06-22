/*
* @Author: Iris Hu
* @Date:   2017-05-12 11:15:05
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-06-15 10:51:07
*/

window.onload=function(){
	new Vue({
		el:'#mainApp',
		data:{
			platformLocationTo:navDatas.newsContent,
			navDatas:navDatas,
			// logo部分的数据
			logoDatas:[
				{
					img:'images/homeLogo/1.png',
					mainText:'20',
					smallText:'全国微软系孵化加速平台等您入驻',
					url:navDatas.platform
				},
				{
					img:'images/homeLogo/3.png',
					mainText:'234+',
					smallText:'优秀团队已经入驻',
					url:navDatas.team
				},
				{
					img:'images/homeLogo/4.png',
					mainText:'56+',
					smallText:'雄厚风投正在关注'
				},
			],
			// 图片banner数据
			imageBannerData:_GLOBE.homeDatas.imageBannerData,
			// 文字banner数据
			textBannerData:_GLOBE.homeDatas.textBannerData,
			// 项目概述导航数据
			projectNavData:_GLOBE.homeDatas.projectNavData,
			// 最新动态nav数据
			newsNavData:_GLOBE.homeDatas.newsNavData,
			// 孵化平台nav数据
			platformNavData:_GLOBE.homeDatas.platformNavData,
			// 优秀团队nav数据
			teamNavData:_GLOBE.homeDatas.teamNavData

		},
		
	});

}

// banner组件
Vue.component('banner',{
	props:['type','bannerData','duringTime','id'],
	template:
	'<div id="{{id}}" class="carousel slide" data-ride="carousel">'+
  		'<!-- Indicators -->'+
	  '<ol class="carousel-indicators" v-if="type===\'image\'">'+
	    '<li data-target="#{{id}}" data-slide-to="{{$index}}" v-bind:class="[$index == 0 ? className.active:\'\']" v-for="i in bannerData" style="margin:0 3px;"></li>'+
	  '</ol>'+

	  '<!-- Wrapper for slides -->'+
	  '<div class="carousel-inner" role="listbox">'+
	    '<div v-bind:class="[className.item, $index == 0 ? className.active:\'\', type == \'text\' ? className.textCenter : \'\']" v-for="i in bannerData">'+
	      // 显示图片形式
	      '<div v-if="type===\'image\'">'+
	      	'<a href="{{i.url}}" target="_blank" ><img :src="i.src" alt="{{i.alt}}" style="width:100%;"></a>'+
		      '<div class="carousel-caption">'+
				    '<h3>{{i.title}}</h3>'+
				    '<p>{{i.detail}}</p>'+
				  '</div>'+
	      '</div>'+
	      
	      // 显示文字形式
	      '<div v-if="type===\'text\'" class="text-right" style="display:inline-block;">'+
	      	'<p style="display:inline-block;text-align:left;">{{i.content}}</p><br/>'+
	      	'<p style="display:inline-block;">{{i.author}}</p>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+

	  '<!-- Controls -->'+
	  '<a class="left carousel-control" href="#{{id}}" role="button" data-slide="prev" v-if="type===\'image\'">'+
	    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
	    '<span class="sr-only">Previous</span>'+
	  '</a>'+
	  '<a class="right carousel-control" href="#{{id}}" role="button" data-slide="next" v-if="type===\'image\'">'+
	    '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
	    '<span class="sr-only">Next</span>'+
	  '</a>'+
	'</div>',
	data:function(){
		return {
			// banner组件的数据，src图片数据，alt图片信息，url跳转链接
			className:{
				active:'active',
				item:'item',
				textCenter:'text-center'
			}
		}
	},
	ready:function(){
		// 加载完成后实现组件事件
		var THIS=this;
		$('#'+THIS.id).carousel({
			interval: THIS.duringTime || 4000
		})

	}
});