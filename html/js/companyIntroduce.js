(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=7",
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
	$.ajax({
		type: "get",
		url: "../php/code/companyIntroduce.php?id1=1&id2=2",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr);
			var about_main = $(".about_main");
			for(var i = 0; i < arr.length; i++) {
				var p = $("<p/>");
				p.text(arr[i].contain);
				about_main.append(p);
			}
		}
	});
	$.ajax({
		type: "get",
		url: "../php/code/companyIntroduce.php?id1=3&id2=10",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr);
			var certificate1 = $(".certificate1");
			var ul = $("<ul/>");
			certificate1.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var li = $("<li/>");	
				if (i == 3 || i == 7) {
					li.css({
						marginRight: "0",
					})
				}
				var img = $("<img/>");
				img.attr("src","../php/img/"+arr[i].contain);
				li.append(img);
				ul.append(li)
			}
		}
	});
	$.ajax({
		type: "get",
		url: "../php/code/companyIntroduce.php?id1=11&id2=15",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr);
			var certificate2 = $(".certificate2");
			var ul = $("<ul/>");
			certificate2.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var li = $("<li/>");
				if (i == 4) {
					li.css({
						marginRight: "0",
					})
				}
				var img = $("<img/>");
				img.attr("src","../php/img/"+arr[i].contain);
				li.append(img);
				ul.append(li)
			}
		}
	});
})();