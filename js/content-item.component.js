/*
* @Author: Iris Hu
* @Date:   2017-05-14 02:44:55
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-15 02:12:16
*/

Vue.component('content-item',{
	props:['datas','type','direction','imgMargin','titleAlign','imgClass','textDivClass','locationUrl'],
	data:function(){
		return {
			// flex 布局style
			flexStyle:{
				display:this.direction === "cloumn" ? 'flex' :'block',
				flexDirection:this.direction,
				cursor:this.type == 'news' || this.type == 'nav' ? 'pointer' : 'auto',
				height:'100%',
				minWidth:'140px',
				marginRight:'0',
				width:'100%'
			},
			// image 布局style
			imgStyle:{
				margin:this.imgMargin || 0,
				// height:'100%',
				maxWidth:'100%',
				width:this.direction === 'row' ? '' : '100%',
				height:this.direction === 'column' ? '' : '100%'
			},
			// 标题文本布局
			titleStyle:{
				margin:'0.7rem 0',
				textAlign:this.titleAlign || 'left'
			},
			// p标签的样式
			pStyle:{
				textIndent:this.type == 'nav' ? '' : '2.1rem',
				color:'grey'
			}
		}
	},
	template:
	'<div v-bind:style="flexStyle" @click="clickItem" v-bind:class="[direction === \'row\' ? \'row\' :\'\',\'content-item\']">'+
		'<img v-bind:src="datas.imgUrl" alt="{{datas.imgAlt}}" v-bind:style="imgStyle" v-bind:class="[\'content-item-img\',imgClass]"/>'+
		'<div style="padding-right:0;position:static;" v-bind:class="textDivClass">'+
			'<h4 v-bind:style="titleStyle">{{datas.title}}</h4>'+
			'<p v-bind:style="pStyle" v-if="datas.content" class="content-item-textCon">{{datas.content}}</p>'+
			// 除了nav类型其他都会有
			'<div v-if="type!=\'nav\'" class="content-item-right-bottom">'+  //会根据设备大小改样式，所以写在了common.js里
				// 只有news会有
				'<div v-if="type==\'news\'" >'+
					'<span style="margin-right:5rem;" v-if="datas.author">作者：{{datas.author}}</span>'+
					'<span class="glyphicon glyphicon-time" aria-hidden="true" style="margin-right:0.3rem;"></span>{{datas.time}}'+
				'</div>'+
				// 只有team和platform会有
				'<span v-if="(type==\'team\' || type==\'platform\') && datas.qrcode" style="font-size:2.4rem;">'+
					'<a tabindex="0" class="aBtn" role="button" data-toggle="popover" data-trigger="focus" data-placement="right" data-html="true" title="扫描二维码，关注公众号" data-content="<img src=\'{{datas.qrcode}}\' style=\'width:150px;height:150px;\' />" >'+
						'<span class="glyphicon glyphicon-qrcode" aria-hidden="true"></span>'+
					'</a>'+
				'</span>'+
				'<span v-if="type==\'platform\' && datas.locationUrl" style="margin-left:20px;">'+
					'<a href={{datas.locationUrl}} target="_blank">浏览官方网站</a>'+
				'</span>'+
				// 除了nav和news都会有
				'<a class="aNone" target="_blank" v-if="type!=\'nav\' && type!=\'news\'"  style="float:right;" href="{{datas.locationUrl && type == \'team\' ? datas.locationUrl : (locationUrl + (datas.locationParams ? \'?\'+datas.locationParams : \'\')) }}">'+
					'<button class="btn ms-btn-blue" disabled="{{!datas.locationUrl && type==\'team\' ? \'disabled\' : false}}" v-bind:style="{float: type==\'team\' || type==\'platform\'? \'right\' :\'none\'}">{{datas.detailBtn}}</button>'+
				'</a>'+
			'</div>'+
		'</div>'+
	'</div>',
	ready:function(){
		if (this.type === 'team' || this.type === 'platform') {
			// 绑定二维码点击出弹出框事件。可以定义template属性设置data-content格式
			$('[data-toggle="popover"]').popover();

		}
	},
	methods:{
		clickItem:function(e){
			if (this.type == 'nav' || this.type == 'news') {
				window.location.href = this.datas.locationUrl ? this.datas.locationUrl : (this.locationUrl + (this.datas.locationParams ? '?'+this.datas.locationParams : ''));
			}

		},

	}
})