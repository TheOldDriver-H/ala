//轮播图
(function() {
	$.ajax({
		type: "get",
		url: "../php/code/homeBanner.php",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			//console.log(arr.length);
			var wrapper = $("#swiper-wrapper");
			for(var i = 0; i < arr.length; i++) {
				var div = $("<div/>");
				div.addClass("swiper-slide");
				var span = $("<span/>");
				span.css({
					display: "block",
					width: "100%",
					height: "500px",
					background: "url(../php/img/" + arr[i].banner + ") center top no-repeat",
					backgroundSize: "cover"
				})
				div.append(span);
				wrapper.append(div);
			}
			//swiper调用
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000, //可选选项，自动滑动
				autoplayDisableOnInteraction: false,
				speed: 1200,
				keyboardControl: true,
				loop: true,
				paginationClickable: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			})
		}
	});
})();
//产品介绍
(function() {
	$.ajax({
		type: "get",
		url: "../php/code/homeProduct.php",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
//			console.log(arr)
			var product = $(".product");
			var ul = $("<ul/>");
			ul.css({
				marginBottom: "10px"
			})
			product.append(ul);
			for(var i = 0; i < arr.length; i++) {
				var a = $("<a/>");
				a.attr("href", '#');
				ul.append(a);

				var li = $("<li/>");
				li.addClass("product_li");
				a.append(li);

				var div = $("<div/>");
				div.addClass("icon");
				li.append(div);
				var divs = $(".icon")
				div.css({
					background: "url(../php/img/" + arr[i].img + ") center no-repeat",
				})

				var p1 = $("<p/>");
				p1.addClass("title");
				p1.text(arr[i].title);
				li.append(p1)

				var p2 = $("<p/>");
				p2.addClass("text");
				p2.text(arr[i].content);
				li.append(p2);
			}
			var lis = $('.product_li');
			var divs = $(".icon");
			for(var i = 0; i < lis.length; i++) {
				lis[i].index = i;
				$(lis[i]).hover(function() {
					$(divs[this.index]).css({
						background: "url(../php/img/" + arr[this.index].img2 + ") center no-repeat",						
					})
				}, function() {
					$(divs[this.index]).css({
						background: "url(../php/img/" + arr[this.index].img + ") center no-repeat",
					})
				})
			}
		}
	});
})();
//地图展示
(function () {
	$.ajax({
		type:"get",
		url:"../php/code/homeMap.php",
		async:true,
		success:function(obj){
			var arr = JSON.parse(obj);
//			console.log(arr)
			$("#map").css({
				background: "url(../php/img/" + arr[0].img1 + ") center no-repeat",
				backgroundSize: "cover"
			})
			var a1 = $("<a/>");
			a1.attr("href","#");
			a1.css({top:"465px"})
			$("#map").append(a1)
			var img1 = $("<img/>");
			img1.attr("src","../php/img/" + arr[0].img2);
			a1.append(img1)
			
			var a2 = $("<a/>");
			a2.attr("href","#");
			a2.css({top:"525px"})
			$("#map").append(a2)
			var img2 = $("<img/>");
			img2.attr("src","../php/img/" + arr[0].img3);
			a2.append(img2)
		}
	});
})();
//项目合作
(function () {
	$.ajax({
		type:"get",
		url:"../php/code/homeProject.php",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
//			console.log(arr)
			var program = $("#program_1");
			var ul = $("<ul/>");
			program.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var a = $("<a/>");
				a.attr("href",arr[i].net);
				ul.append(a);
				
				var li = $("<li/>");
				li.addClass("pr_li");
				a.append(li);
				
				var div = $("<div/>")
				div.addClass("pr_img");
				div.css({
					background: "url(../php/img/" + arr[i].img1 + ") center no-repeat",
				});
				var p = $("<p/>");
				p.text(arr[i].name);
				li.append(div);
				li.append(p);
			}
			var lis = $('.pr_li');
			var divs = $(".pr_img");
			for(var i = 0; i < lis.length; i++) {
				if (i == 0 || i == 1 || i == 3 || i == 4) {
					$(lis[i]).css({
						marginRight: "30px",
					})
//					console.log("iii")
				}
				lis[i].index = i;
				$(lis[i]).hover(function() {
					$(divs[this.index]).css({
						background: "url(../php/img/" + arr[this.index].img2 + ") center no-repeat",						
					})
				}, function() {
					$(divs[this.index]).css({
						background: "url(../php/img/" + arr[this.index].img1 + ") center no-repeat",
					})
				})
			}			
		}
	});
})();
//公司动态
(function () {
	$.ajax({
		type:"get",
		url:"../php/code/homeNew.php",
		async:true,
		success:function (obj) {
			var arr = JSON.parse(obj);
//			console.log(arr);
			var news = $("#news");
			var ul = $("<ul/>");
			news.append(ul);
			for (var i = 0; i < arr.length; i++) {
				var li = $("<li/>");
				li.css({
					background: "url(../php/img/" + arr[i].img + ") no-repeat left",
				})
				ul.append(li);
				
				var p = $("<p/>");
				li.append(p);
				
				var a = $("<a/>");
				a.attr("href",arr[i].net);
				a.text(arr[i].notice);
				p.append(a);
				
				var span = $("<span/>");
				span.text(arr[i].time);
				p.append(span);				
			}
			var p1 = $("<p/>");
		}
	});		
})();

(function() {
	$.ajax({
		type: "get",
		url: "../php/code/homeZ.php",
		async: true,
		success: function(obj) {
			var arr = JSON.parse(obj);
			console.log(arr[1].img1);
			var wrapper = $("#bottom-wrapper");
			for(var i = 0; i < arr.length; i++) {
				var div = $("<div/>");
				div.addClass("swiper-slide");
				wrapper.append(div);
				
				var div1 =$("<div/>");
				div1.addClass("bto_img");
				var pic1 = $("<img/>");
				pic1.attr("src","../php/img/" + arr[i].img1);
				div1.append(pic1);
				div.append(div1);
				
				var div2 =$("<div/>");
				div2.addClass("bto_img");
				var pic2 = $("<img/>");
				pic2.attr("src","../php/img/" + arr[i].img2);
				div2.append(pic2);
				div.append(div2);
				
				var div3 =$("<div/>");
				div3.addClass("bto_img");
				var pic3 = $("<img/>");
				pic3.attr("src","../php/img/" + arr[i].img3);
				div3.append(pic3);
				div.append(div3);
				
				var div4 =$("<div/>");
				div4.addClass("bto_img");
				var pic4 = $("<img/>");
				pic4.attr("src","../php/img/" + arr[i].img4);
				div4.append(pic4);
				div.append(div4);
				
			}
			$(".bto_img").css({
				width:"232px",
				height:"250px",
				float:"left",
				marginLeft:"21px"
			})
			//swiper调用
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000, //可选选项，自动滑动
				autoplayDisableOnInteraction: false,
				speed: 1200,
				keyboardControl: true,
				loop: true,
				paginationClickable: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				
			})
		}
	});
})();