(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=6",
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
		url: "../php/code/companyJob.php?id1=1&id2=4",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr);
			var zp_left = $(".zp_left");
			var ul = $("<ul/>");
			zp_left.append(ul);

			for(var i = 0; i < arr.length; i++) {
				var li = $("<li/>");
				li.addClass("lis");
				li.text(arr[i].text);
				ul.append(li);
			}
			var lis = $(".lis");
			function removeClass () {
				for (var i = 0; i < lis.length; i++) {
					$(lis[i]).removeClass("active");
				}
			}			
			request(5,8,9,13);
			$(lis[0]).on("click",function(){
				removeClass();
				$(lis[0]).toggleClass("active");
				request(5,8,9,13);
				$(".oli").remove();
			})
			$(lis[1]).on("click",function(){
				removeClass();
				$(lis[1]).toggleClass("active");
				request(14,16,17,22);
				$(".oli").remove();
			})
			$(lis[2]).on("click",function(){
				removeClass();
				$(lis[2]).toggleClass("active");
				request(23,26,27,31);
				$(".oli").remove();
			})
			$(lis[3]).on("click",function(){
				removeClass();
				$(lis[3]).toggleClass("active");
				request(31,34,35,40);
				$(".oli").remove();
			})

			function request(a, b, c, d) {
				$.ajax({
					type: "get",
					url: "../php/code/companyJob.php?id1=" + a + "&id2=" + b,
					async: true,
					success: function(obj) {
						var arr = JSON.parse(obj);
						console.log(arr);
						var describe = $(".describe");
						var ul = $("<ul/>");
						describe.append(ul);
						for(var i = 0; i < arr.length; i++) {
							var li = $("<li/>");
							li.addClass("oli");
							li.text(arr[i].text);
							ul.append(li);
						}
					}
				});
				$.ajax({
					type: "get",
					url: "../php/code/companyJob.php?id1=" + c + "&id2=" + d,
					async: true,
					success: function(obj) {
						var arr = JSON.parse(obj);
						console.log(arr);
						var require = $(".require");
						var ul = $("<ul/>");
						require.append(ul);

						for(var i = 0; i < arr.length; i++) {
							var li = $("<li/>");
							li.addClass("oli");
							li.text(arr[i].text);
							ul.append(li);
						}
					}
				});
			}
		}
	});

})();