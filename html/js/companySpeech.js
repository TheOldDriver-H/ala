(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=8",
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
(function () {
	$.ajax({
		type:"get",
		url:"../php/code/companySpeech.php?id=2",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
			var speech_pic = $(".speech_pic");
			var img = $("<img/>");
			img.attr("src","../php/img/"+arr[0].contain);
			speech_pic.append(img);
		}
	});
})();
(function () {
	$.ajax({
		type:"get",
		url:"../php/code/companySpeech.php?id=1",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
			var speech_contain = $(".speech_contain");
			speech_contain.append(arr[0].contain);
		}
	});
})();
