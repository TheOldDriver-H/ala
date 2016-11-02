(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=3",
		async: true,
		success: function(obj) {
			var str = JSON.parse(obj);
			$("#banner_news").css({
					background: "url(../php/img/" + str[0].pic + ") no-repeat center",
					backgroundSize: "cover",
			})
		}
	});
})();
(function() {
	var a = 16;
	$("#more").text("查看更多");
	$("#more").on("click", function() {
		$("#more").text("已经没有更多了");
		a = 32;
		$(".uls").remove();
		request(a);
		$("#more").unbind("click");
	})

	function request(a) {
		$.ajax({
			type: "get",
			url: "../php/code/companyFocus.php?id=" + a,
			async: true,
			success: function(obj) {
				var arr = JSON.parse(obj);
				var list = $(".adv_list");
				var ul = $("<ul/>");
				ul.addClass("uls");
				list.append(ul);
				for (var i = 0; i < arr.length; i++) {
					var li = $("<li/>");
					li.css({
						background:"url(../php/img/" + arr[i].img + ") no-repeat center left"
					})
					var a = $("<a/>");
					a.attr("href","#");
					a.text(arr[i].title);
					var span = $("<span/>");
					span.text(arr[i].time);
					li.append(a);
					li.append(span);
					ul.append(li);
				}
			}
		});
	}
	request(a);
})();