(function () {
	$.ajax({
		type:"get",
		url:"../php/code/middlePic.php?pic_id=1",
		async:true,
		success:function (obj) {
			var str = JSON.parse(obj);
			console.log(str[0].pic);
			$("#banner_news").css({
				background: "url(../php/img/" + str[0].pic + ") no-repeat center",
				backgroundSize: "cover",
			})
			console.log('ii')
		}
	});
})();

(function() {
	$.ajax({
		type:"get",
		url:"../php/code/companyNews.php",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj)
			console.log(arr[0]); 
			var middle = $(".middle_news");
			for (var i = 0; i < arr.length; i++) {
				var news_list = $("<div/>");
				news_list.addClass("news_list");
				middle.append(news_list);
				
				var news_img = $("<div/>");
				news_img.addClass("news_img");
				news_list.append(news_img);
				var img = $("<img/>");
				img.attr("src","../php/img/" + arr[i].img);
				news_img.append(img);
				
				var news_main = $("<div/>");
				news_main.addClass("news_main");
				news_list.append(news_main);
				var h3 = $("<h3/>");
				var a = $("<a/>");
				a.attr("href","#");
				a.text(arr[i].title);
				h3.append(a);
				news_main.append(h3);
				
				var news_text = $("<div/>");
				news_text.addClass("news_text");
				news_main.append(news_text);
				var p1 = $("<p/>");
				var span1 = $("<span/>");
				span1.text(arr[i].text);
				p1.append(span1);
				news_text.append(p1);
				
//				var p2 = $("<p/>");
//				var h = $("<br/>");
//				p2.append(h);
//				news_text.append(p2);
				
				var span2 = $("<span/>");
				span2.addClass("news_detail");
				span2.text(arr[i].details); 
				news_text.append(span2);
				
				var news_time = $("<p/>");
				news_time.addClass("news_time");
				news_time.text(arr[i].time);
				news_main.append(news_time);
				
				
				
			}
		}
	});
})();
