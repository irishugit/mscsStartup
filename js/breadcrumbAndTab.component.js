/*
* @Author: Iris Hu
* @Date:   2017-05-15 01:59:41
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-15 02:41:18
*/

// 面包屑组件
Vue.component('bread-crumb',{
	props:['datas'],
	template:
	'<div class="fixed-content bread">'+
	'<ol class="breadcrumb" style="background:none;display:inline-block;margin-bottom:.6rem;width:100%;padding-left:0;">'+
		'<span>当前位置：</span>'+
	  '<li v-for="d in datas" v-if="!d.activity"><a href="{{d.url}}">{{d.name}}</a></li>'+
	  '<li class="active" v-for="d in datas" v-if="d.activity">{{d.name}}</li>'+
	'</ol>'+
	'</div>',
});


// list组件
window.contentList = Vue.extend({
	template:
	'<ul style="margin-bottom:2rem;">'+
	    '<slot></slot>'+
	'</ul>'
})

// list-item组件
window.listItem = Vue.extend({
	props:['itemHeight','itemWidth'],
	data:function(){
		return {
			// 每个item的style属性，主要控制高度显示和padding
			itemStyle:{
				padding:'.5rem 0 .5rem .5rem',
				height: this.itemHeight || 'auto',
				width:this.itemWidth || '100%',
				display:'inline-block',
				minHeight:'100px',
				position:'relative',
				margin:'1rem 0'
			}
		}
	},
	template:
	'<li v-bind:style="[itemStyle,{marginRight: itemWidth!= undefined && $index%2==0 ? \'4%\' : \'\'}]">'+
		'<slot></slot>'+
	'</li>'
});

window.tabNav = Vue.extend({
	props:['datas'],
	data:function(){
		return {
			className:{
				active:'active'
			}
		}
	},
	template:
	'<div>'+
		// <!-- Nav tabs -->
		'<div class="fixed-content" id="nav-div" >'+
		'<ul class="nav nav-tabs container ">'+
		  '<li role="presentation" v-for="n in datas" v-bind:class="[n.activity ? className.active : \'\']" @click="clickTab(n)" style="float:right;">'+
		  	'<a aria-controls="{{n.id}}" role="tab" data-toggle="tab" href="#{{n.id}}">{{n.name}}</a>'+
		  '</li>'+
		'</ul>'+
		'</div>'+
		// <!-- Tab panes -->
	    '<div class="tab-content">'+
	      	'<slot></slot>'+
	    '</div>'+
    '</div>',
    methods:{
    	clickTab:function(d){
    		$('#' + d.id).tab('show');
    		// 将改变的对象传给父组件
    		this.$dispatch('change-tab', d);
    	}
    }
});


// tab页内容组件
window.tabPanel = Vue.extend({
	props:['datas'],
	data:function(){
		return {
			className:{
				tabPane:'tab-pane',
				fade:'fade',
				activeIn:'active in'
			}
		}
	},
	template:
	'<div role="tabpanel" v-bind:class="[className.tabPane,className.fade, datas.activity ? className.activeIn : \'\']" id="{{datas.id}}">'+
		'<slot></slot>'+
	'</div>'
});

window.msTab = Vue.extend({
	props:['datas','itemHeight','itemWidth','itemClass','imgClass','textDivClass','locationUrl'],
	components:{
		'list-item':window.listItem,
		'content-list':window.contentList,
		'tab-panel':window.tabPanel,
		'tab-nav':window.tabNav,
	},
	template:
	'<tab-nav :datas="datas.nav" >'+
		'<tab-panel v-for="c in datas.nav" :datas="c">'+
			'<content-list>'+
				'<list-item v-for="cc in datas[c.id]"  :item-height="itemHeight" :class="itemClass">'+
	    			'<content-item :datas="cc" :type="c.contentType" direction="row" :location-url="locationUrl" :img-class="imgClass" :text-div-class="textDivClass"></content-item>'+
				'</list-item>'+
			'</content-list>'+
		'</tab-panel>'+
	'</tab-nav>'
})