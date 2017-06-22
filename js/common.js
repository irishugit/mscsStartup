/*
* @Author: Iris Hu
* @Date:   2017-05-15 01:59:41
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-05-25 15:01:07
*/


// 包含整站的公共数据和方法
// 全局定义导航页对象，要引用到vue的data里才能使用
var navDatas = {
    home:'home.html',
    news:'news.html',
    project:'project.html',
    team:'team.html',
    platform:'platform.html',
    about:'about-us.html',
    newsContent:'news-content.html'
}
navDatas.projectContent = [
    {
    	text:'项目介绍',
    	url:navDatas.project + '?id=' + 'introduction'
    },
    {
    	text:'项目愿景',
    	url:navDatas.project + '?id=' + 'mission'
    },
    {
    	text:'合作目标',
    	url:navDatas.project + '?id=' + 'aims'
    },
    {
    	text:'合作模式',
    	url:navDatas.project + '?id=' + 'mode'
    },
    {
    	text:'项目收益',
    	url:navDatas.project + '?id=' + 'profit'
    },
    {
    	text:'项目价值',
    	url:navDatas.project + '?id=' + 'value'
    },
]

var _GLOBE = {};	
_GLOBE.getUrlAttr = function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null)  
        return unescape(r[2]);  
    return "";
}
