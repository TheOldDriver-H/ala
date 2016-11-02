(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=5",
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

(function(){
	$.ajax({
		type:"get",
		url:"../php/code/companyRelations.php?id1=1&id2=6",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
			var div = $(".inv_contact");
			var ul = $("<ul/>");
			div.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var li = $("<li/>");
				li.text(arr[i].text);
				ul.append(li);
			}
		}
	});
})();

(function(){
	$.ajax({
		type:"get",
		url:"../php/code/companyRelations.php?id1=7&id2=12",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
			var div = $(".inv_contact");
			var ul = $("<ul/>");
			div.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var li = $("<li/>");
				li.append(arr[i].text);
				ul.append(li);
			}
		}
	});
})();
$("#more").text("查看更多");
	$("#more").on("click", function() {
		$("#more").text("已经没有更多了");
	})
