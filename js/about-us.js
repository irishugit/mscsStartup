window.onload=function(){
	new Vue({
		el:'#mainApp',
		data:{
			teacherDatas:_GLOBE.aboutDatas.teacherDatas,
			partnerDatas:_GLOBE.aboutDatas.partnerDatas
		}
	});

}