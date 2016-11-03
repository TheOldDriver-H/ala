(function() {
	$.ajax({
		type: "get",
		url: "../php/code/middlePic.php?pic_id=10",
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