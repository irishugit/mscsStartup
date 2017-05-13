// miscrosoft标准头部组件
Window.msHeader = Vue.extend({
	template:
	'<div class="header"  ms.pgarea="uhffooter">'+
        '<div class="header-wrapper clearfix">'+
            '<div class="header-content">'+
                '<div class="ms-logo">'+
                    '<img src="https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png" alt="Microsoft">'+
                '</div>'+
        
                '<div class="shell-header-actions" ms.cmpgrp="header actions">'+
                    '<form id="srv_shellHeaderSearchForm" class="shell-search" role="search" action="https://www.microsoft.com/zh-cn/search/result.aspx" method="GET" autocomplete="off" onsubmit="">'+
                        '<div class="shell-search-wrapper">'+
                            '<label for="cli_shellHeaderSearchInput" class="sr-only">Search Microsoft</label>'+
                            '<input id="cli_shellHeaderSearchInput" type="search" title="在 Microsoft.com 中搜索" name="q" data-bi-dnt="" placeholder="在 Microsoft.com 中搜索" maxlength="200" tabindex="30">'+
                            '<input type="hidden" name="form" data-bi-dnt="" value="MSHOME">'+
                            '<button type="submit" title="搜索" data-bi-dnt="" tabindex="40"><i class="fa fa-search" aria-hidden="true"></i>'+
                                '<span class="sr-only">Search</span>'+
                                '</button>'+
                       	 	'<div id="cli_searchSuggestionsContainer" class="shell-search-dropdown-container">'+
                            	'<div class="search-dropdown">'+
                                	'<div class="dropdown-item">'+
                                    	'<ul id="cli_searchSuggestionsResults" data-bi-name="Search Suggestions" data-bi-source="UnifiedSearch" ms.cmpgrp="search suggestions"></ul>'+
                                		'</div>'+
                            	'</div>'+
                        	'</div>'+
                    	'</div>'+
               		'</form>'+
            	'</div>'+
        	'</div>'+
    	'</div>'+
    '</div>'
});


// Microsoft标准底部组件
Window.msFooter = Vue.extend({
	template:
	'<div class="shell-footer clearfix" ms.pgarea="uhffooter" data-bi-area="Footer" data-bi-view="5xLinks">'+
        '<div class="shell-footer-wrapper">'+
            '<div class="shell-footer-menugroups" ms.cmpgrp="footer nav">'+
                '<div class="sfm-group" ms.cmpnm="Learn">'+
                    '<div class="grp-title">学习<i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/windows" ms.title="Windows" data-bi-name="Learn_Windows" data-bi-slot="1" data-bi-source="Compass" ms.ea_action="ntd">Windows</a></li>'+
                        '<li><a href="https://products.office.com/zh-cn/home" ms.title="Office" data-bi-name="Learn_Office" data-bi-slot="2" data-bi-source="Compass" ms.ea_action="ntd">Office</a></li>'+
                        '<li><a href="https://www.skype.com/" ms.title="Skype" data-bi-name="Learn_Skype" data-bi-slot="3" data-bi-source="Compass" ms.ea_action="ntd">Skype</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/outlook-com/?cb=v8ho" ms.title="Outlook" data-bi-name="Learn_Outlook" data-bi-slot="4" data-bi-source="Compass" ms.ea_action="ntd">Outlook</a></li>'+
                        '<li><a href="https://onedrive.live.com/about/zh-cn/" ms.title="OneDrive" data-bi-name="Learn_OneDrive" data-bi-slot="5" data-bi-source="Compass" ms.ea_action="ntd">OneDrive</a></li>'+
                        '<li><a href="https://www.msn.com/?ocid=FOO000" ms.title="MSN" data-bi-name="Learn_MSN" data-bi-slot="6" data-bi-source="Compass">MSN</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="sfm-group" ms.cmpnm="Devices">'+
                    '<div class="grp-title">设备 <i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://www.microsoft.com/surface/zh-cn" ms.title="Microsoft Surface" data-bi-name="Devices_MicrosoftSurface" data-bi-slot="1" data-bi-source="Compass">Microsoft Surface</a></li>'+
                        '<li><a href="https://www.xbox.com/zh-cn/" ms.title="Xbox" data-bi-name="Devices_Xbox" data-bi-slot="2" data-bi-source="Compass">Xbox</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/windows/view-all" ms.title="PC" data-bi-name="Devices_PCandLaptops" data-bi-slot="3" data-bi-source="Compass">PC</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/mobile/" ms.title="Microsoft Lumia" data-bi-name="Devices_Lumia" data-bi-slot="4" data-bi-source="Compass">Microsoft Lumia</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="sfm-group" ms.cmpnm="Microsoft Store">'+
                    '<div class="grp-title">微软官方商城 <i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://www.microsoftstore.com.cn/my-account" ms.title="我的订单" data-bi-name="MicrosoftStore_ViewAccount" data-bi-slot="1" data-bi-source="Compass">我的订单</a></li>'+
                        '<li><a href="https://support.microsoft.com/contactus/?ws=support" ms.title="与我们联系" data-bi-name="MicrosoftStore_ShoppingHelp" data-bi-slot="2" data-bi-source="Compass">与我们联系</a></li>'+
                    '</ul>'+
               '</div>'+
                '<div class="sfm-group" ms.cmpnm="Downloads">'+
                    '<div class="grp-title">下载 <i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/download/default.aspx" ms.title="微软中国下载中心" data-bi-name="Downloads_DownloadCenter" data-bi-slot="1" data-bi-source="Compass">微软中国下载中心</a></li>'+
                        '<li><a href="https://windows.microsoft.com/zh-cn/windows/downloads" ms.title="所有 Windows 下载" data-bi-name="Downloads_WindowsDownloads" data-bi-slot="2" data-bi-source="Compass">所有 Windows 下载</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/windows/apps-and-games" ms.title="Windows 10 Apps" data-bi-name="Downloads_Windows10Apps" data-bi-slot="3" data-bi-source="Compass">Windows 10 Apps</a></li>'+
                        '<li><a href="https://store.office.com/zh-cn" ms.title="Office Apps" data-bi-name="Downloads_OfficeApps" data-bi-slot="4" data-bi-source="Compass">Office Apps</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/mobile/apps/lumia/" ms.title="Microsoft Lumia Apps" data-bi-name="Downloads_LumiaApps" data-bi-slot="5" data-bi-source="Compass">Microsoft Lumia Apps</a></li>'+
                        '<li><a href="https://windows.microsoft.com/zh-cn/internet-explorer/download-ie" ms.title="Internet Explorer" data-bi-name="Downloads_InternetExplorer" data-bi-slot="6" data-bi-source="Compass">Internet Explorer</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="sfm-group" ms.cmpnm="Values">'+
                    '<div class="grp-title">价值观<i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://privacy.microsoft.com/zh-cn" ms.title="Microsoft 隐私" data-bi-name="Values_PrivacyatMicrosoft" data-bi-slot="1" data-bi-source="Compass">Microsoft 隐私</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/education" ms.title="教育" data-bi-name="Values_MicrosoftinEducation" data-bi-slot="2" data-bi-source="Compass">教育</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="sfm-group" ms.cmpnm="Company">'+
                    '<div class="grp-title">公司 <i class="shell-icon-dropdown"></i></div>'+
                    '<ul>'+
                        '<li><a href="https://careers.microsoft.com/careers/zh-cn/cn/home.aspx" ms.title="招贤纳士" data-bi-name="Company_Careers" data-bi-slot="1" data-bi-source="Compass">招贤纳士</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/about" ms.title="关于微软" data-bi-name="Company_AboutMicrosoft" data-bi-slot="2" data-bi-source="Compass">关于微软</a></li>'+
                        '<li><a href="https://news.microsoft.com/zh-cn" ms.title="公司新闻" data-bi-name="Company_CompanyNews" data-bi-slot="3" data-bi-source="Compass">公司新闻</a></li>'+
                        '<li><a href="https://www.microsoft.com/zh-cn/sitemap.aspx" ms.title="网站地图" data-bi-name="Company_SiteMap" data-bi-slot="4" data-bi-source="Compass">网站地图</a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '<div class="shell-footer-lang" ms.cmpgrp="loc picker" ms.cmpnm="loc picker">'+
                '<ul>'+
                    '<li><i class="fa fa-globe" aria-hidden="true"></i></li>'+
                    '<li><a id="locale-picker-link" ms.title="中文(中华人民共和国)" href="http://www.microsoft.com/zh-cn/locale.aspx" data-bi-name="LocalePicker">中文(中华人民共和国)‎</a></li>'+
                '</ul>'+
            '</div>'+
            '<div class="shell-footer-copyright" ms.cmpgrp="corp links" ms.cmpnm="corp" role="contentinfo">'+
                '<ul>'+
                    '<li><a id="shellmenu_0" href="http://support.microsoft.com/contactus/?ws=support" ms.title="与我们联系" class="ctl_footerNavLink" data-bi-name="Footer_ContactUs" data-bi-slot="1">与我们联系</a></li>'+
                    '<li><a id="shellmenu_1" href="https://go.microsoft.com/fwlink/?LinkId=521839" ms.title="隐私权声明" class="ctl_footerNavLink" data-bi-name="Footer_PrivacyandCookies" data-bi-slot="2">隐私权声明</a></li>'+
                    '<li><a id="shellmenu_2" href="http://go.microsoft.com/fwlink/?LinkID=206977" ms.title="使用条款" class="ctl_footerNavLink" data-bi-name="Footer_TermsOfUse" data-bi-slot="3">使用条款</a></li>'+
                    '<li><a id="shellmenu_3" href="https://www.microsoft.com/trademarks" ms.title="商标" class="ctl_footerNavLink" data-bi-name="Footer_Trademarks" data-bi-slot="4">商标</a></li>'+
                    '<li><a id="shellmenu_4" href="http://choice.microsoft.com/" ms.title="关于我们的广告" class="ctl_footerNavLink" data-bi-name="Footer_AboutourAds" data-bi-slot="5">关于我们的广告</a></li>'+
                    '<li><a id="shellmenu_5" href="#" ms.title="京ICP备09042378号-6" class="ctl_footerNavLink" data-bi-name="Footer_Special" data-bi-slot="6">京ICP备09042378号-6</a></li>'+
                    '<li><a id="shellmenu_6" href="#" ms.title="京公网安备 11010802010597" class="ctl_footerNavLink" data-bi-name="Footer_Special" data-bi-slot="7">京公网安备 11010802010597</a></li>'+
                    '<li class="ctl_footerCopyright">© 2017 Microsoft</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>'
});



// 孵化器网页的导航栏
Window.startupNav = Vue.extend({
	props:['activeItem'],
	template:
		'<div class="nav-wrapper">'+
            '<div class="nav-content" role="navigation">'+
                '<div class="site_name">'+
                    '<a href="#">'+
                        '云暨移动技术孵化计划'+
                    '</a>'+
                '</div>'+
                '<div class="nav-list">'+
                    '<ul>'+
                        '<li v-bind:class="[className.navItem, activeItem==\'project\' ? className.active : \'\']" v-on:click="clickNav">项目概述<i class="fa fa-angle-down" aria-hidden="true"></i>'+
                            '<ul>'+
                                '<li v-for="c in projectContent">'+
                                    '<a :href="c.url">{{c.text}}</a>'+
                                '</li>'+
                            '</ul>'+
                        '</li>'+
                        '<li v-bind:class="[className.navItem, activeItem==\'news\' ? className.active : \'\']" v-on:click="clickNav"><a href="#">动态</a></li>'+
                        '<li v-bind:class="[className.navItem, activeItem==\'platform\' ? className.active : \'\']" v-on:click="clickNav"><a href="#">孵化平台</a></li>'+
                        '<li v-bind:class="[className.navItem, activeItem==\'team\' ? className.active : \'\']" v-on:click="clickNav"><a href="#">优秀团队</a></li>'+
                        '<li v-bind:class="[className.navItem, activeItem==\'about\' ? className.active : \'\']" v-on:click="clickNav"><a href="#">关于我们</a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
        '</div>',
    data:function(){
    	// 使用URL传不同值的方法加载项目页
    	var url = './project.html?name=';
    	return {
    		projectContent:[
    			{
    				text:'项目介绍',
    				url:url + 'introduciton'
    			},
    			{
    				text:'项目愿景',
    				url:url + 'mission'
    			},
    			{
    				text:'项目目标',
    				url:url + 'aims'
    			},
    			{
    				text:'项目模式',
    				url:url + 'mode'
    			},
    			{
    				text:'项目收益',
    				url:url + 'profit'
    			},
    			{
    				text:'项目价值',
    				url:url + 'value'
    			},
    			{
    				text:'项目资源',
    				url:url + 'resources'
    			},
    		],
    		className:{
    			navItem:'nav-item',
    			active:'active'
    		}
    	}
    },
    methods:{
    	clickNav:function(e){
    		var target = $(e.currentTarget);

    		// 切换活动的导航栏样式
    		$('.nav-item').removeClass('active');
    		target.addClass('active');


    		if (!target.hasClass("on")) {
				target.addClass("on").siblings().removeClass("on")
			} else {
				target.removeClass("on");
			}

			// 导航栏里监听事件打开和隐藏二级栏目
			target.find("ul").slideToggle("fast");
			target.siblings().find("ul").hide();

			// body监听隐藏二级栏目
			$("body").on("click", function(e) {
				var $ele = $(e.srcElement || e.target);
				// console.log($ele.parents(".nav-list"))
				if ($ele.parents(".nav-list").size() <= 0) {
					$(".nav-item").removeClass("active").removeClass("on").find("ul").hide()
				}
			})
    	}
    },

});


// 全局注册包含微软头部底部以及网站导航栏的组件
Vue.component('main-contain',{
	props:['activeItem'],
	template:
    '<div v-show="isLoading">'+
    '<ms-header></ms-header>'+
    	'<startup-nav :active-item="activeItem"></startup-nav>'+
    	'<div class="container-fluid">'+
    	'<slot><h1 style="text-align:center;">抱歉没有内容显示。</h1></slot>'+
    	'<div>'+
    '<ms-footer></ms-footer>'+
    '</div>',
	components:{
		'ms-header':Window.msHeader,
		'ms-footer':Window.msFooter,
		'startup-nav':Window.startupNav
	},
    ready:function(){
        // 监听滚动事件使导航在顶部
        window.addEventListener('scroll', this.handleScroll);
        this.isLoading = true;
    },
    data:function(){
        return {
            isLoading:false
        }
    },
    methods:{
        handleScroll:function(){
            if ($('body').scrollTop()>55) {
                $('.nav-wrapper').addClass('fixed');
            }else{
                $('.nav-wrapper').removeClass('fixed');
            }
        }
    }
})