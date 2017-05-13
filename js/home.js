/*
* @Author: Iris Hu
* @Date:   2017-05-12 11:15:05
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-14 02:19:49
*/

window.onload=function(){
	new Vue({
		el:'#mainApp',
		data:{
			// logo部分的数据
			logoDatas:[
				{
					img:'images/homeLogo/1.png',
					mainText:'23',
					smallText:'各地平台等你入驻'
				},
				{
					img:'images/homeLogo/3.png',
					mainText:'234+',
					smallText:'优秀团队已经入驻'
				},
				{
					img:'images/homeLogo/4.png',
					mainText:'56+',
					smallText:'雄厚风投正在关注'
				},
			],
			// 图片banner数据
			imageBannerData:[
				{
					src:'images/banner/1.jpg',
					alt:'picture'
				},
				{
					src:'images/banner/2.jpg',
					alt:'picture'
				},
				{
					src:'images/banner/3.jpg',
					alt:'picture'
				},
			],
			// 文字banner数据
			textBannerData:[
			{
				author:'——深圳孵化平台运营商',
				content:'希望微软能持续有这样的平台与交流活动，鼓励更多的优秀孵化平台参与交流，互相学习。'
			},
			{
				author:'——上海浦东张江新区管委会领导',
				content:'很高兴被邀请参加微软创新峰会，并与微软高管面对面地圆桌会议座谈。欣喜地看到，上海张江的创业团队在全国竞赛中，进入前三名。我们将继续努力做到更好。'
			},
			{
				author:'——徐州政府领导',
				content:'了解微软创新创业布局，参观微软全国的运营商的成果，愿意尽快加入微软的孵化计划。'
			},
			]
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
	    '<li data-target="#carousel-example-generic" data-slide-to="{{$index}}" v-bind:class="[$index == 0 ? className.active:\'\']" v-for="i in bannerData" style="margin:0 3px;"></li>'+
	  '</ol>'+

	  '<!-- Wrapper for slides -->'+
	  '<div class="carousel-inner" role="listbox">'+
	    '<div v-bind:class="[className.item, $index == 0 ? className.active:\'\', type == \'text\' ? className.textCenter : \'\']" v-for="i in bannerData">'+
	      '<a href="{{i.url}}" v-if="type===\'image\'"><img :src="i.src" alt="{{i.alt}}" style="width:100%;"></a>'+
	      '<div v-if="type===\'text\'" class="text-right" style="display:inline-block;">'+
	      	'<p style="display:inline-block;">{{i.content}}</p><br/>'+
	      	'<p style="display:inline-block;">{{i.author}}</p>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+

	  '<!-- Controls -->'+
	  '<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" v-if="type===\'image\'">'+
	    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
	    '<span class="sr-only">Previous</span>'+
	  '</a>'+
	  '<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" v-if="type===\'image\'">'+
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