$(function() {


	$(".header-menu").click(function() {
		if (!$(this).hasClass("on")) {
			$(this).addClass("on").siblings().removeClass("on")
		} else {
			$(this).removeClass("on")
		}


		$(this).find("ul").slideToggle("fast")
		$(this).siblings().find("ul").hide();
		$(this).find("li").on("mouseover", function() {
			$(this).addClass("active").siblings().removeClass("active")
		});


		$("body").on("click", function(e) {
			var $ele = $(e.srcElement || e.target);
			// console.log($ele.parents(".header-menu-wrapper"))
			if ($ele.parents(".header-menu-wrapper").size() <= 0) {
				$(".header-menu").removeClass("active").removeClass("on").find("ul").hide()
			}


		})

	}).on("mouseover", function() {
		$(this).addClass("active").siblings(":not(li.on)").removeClass("active")
	}).parent().on("mouseout", function() {
		$(this).find("li").not(".on").removeClass("active")
	});
	// $(".nav-item").on("click", function() {
	// 	if (!$(this).hasClass("on")) {
	// 		$(this).addClass("on").siblings().removeClass("on")
	// 	} else {
	// 		$(this).removeClass("on")
	// 	}



	// 	$(this).find("ul").slideToggle("fast")
	// })

	// .on("mouseover", function() {
	// 	$(this).addClass("active").siblings(":not(li.on)").removeClass("active")
	// })


	$(".nav-item").click(function() {
		if (!$(this).hasClass("on")) {
			$(this).addClass("on").siblings().removeClass("on")
		} else {
			$(this).removeClass("on");
		}



		$(this).find("ul").slideToggle("fast");
		$(this).siblings().find("ul").hide();



		$("body").on("click", function(e) {
			var $ele = $(e.srcElement || e.target);
			// console.log($ele.parents(".nav-item"))
			if ($ele.parents(".nav-list").size() <= 0) {
				$(".nav-item").removeClass("active").removeClass("on").find("ul").hide()
			}


		})

	})

	.on("mouseover", function() {
		$(this).addClass("active").siblings(":not(li.on)").removeClass("active")
	}).parent().on("mouseout", function() {
		$(this).find("li").not(".on").removeClass("active")
	});


	$(".shell-footer-copyright ul,.shell-footer-menugroups").contents().filter(function() {
		return this.nodeType === 3;
	}).remove();

	$("body").on("click", function(e) {
		console.log(e.target);
		console.log(e.currentTarget);
		console.log(e.srcElement)
	})

})