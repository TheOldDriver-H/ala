(function () {
	$.ajax({
		type:"get",
		url:"../php/code/middlePic.php?pic_id=4",
		async:true,
		success:function (obj) {
			var str = JSON.parse(obj);
			console.log(str[0].pic);
			$("#banner_news").css({
				background: "url(../php/img/" + str[0].pic + ") no-repeat center",
				backgroundSize: "cover",
			})
//			console.log('ii')
		}
	});
})();
(function() {
	$.ajax({
		type: "get",
		url: "../php/code/companySpeech.php?id=4",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr);
			var pic = $(".org_pic");
			var img = $("<img/>");
			img.attr("src","../php/img/"+arr[0].contain);
			pic.append(img);
		}
	});
})();
