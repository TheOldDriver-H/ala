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
