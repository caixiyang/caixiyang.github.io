(function() {
	$(window).on('resize', function() {
		let json = [{
				background: "url(images/slide_01_2000x410.jpg)",
				img: "images/slide_01_640x340.jpg"
			},
			{
				background: "url(images/slide_02_2000x410.jpg)",
				img: "images/slide_02_640x340.jpg"
			},
			{
				background: "url(images/slide_03_2000x410.jpg)",
				img: "images/slide_03_640x340.jpg"
			},
			{
				background: "url(images/slide_04_2000x410.jpg)",
				img: "images/slide_04_640x340.jpg"
			}
		];
		let text = template("focus",{length:json.length});
		$('#focusbox').html(text);
		
		let width = $('#sliderbanner').width();
		let isMobile = true;
		if(width < 768) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		let html = template("sliderWrapper", {
			data: json,
			isMobile
		});
		$('#inner').html(html);

		let isMove = false;
		let startX = 0;
		let moveX = 0;
		$('#inner').on('touchstart', function(e) {
			startX = e.originalEvent.touches[0].clientX;
		});
		$('#inner').on('touchmove', function(e) {
			isMove = true;
			moveX = e.originalEvent.touches[0].clientX;
		});
		$('#inner').on('touchend', function(e) {
			if(isMove) {
				if(startX > moveX) {
					$('#inner').carousel('next');
				} else if(startX < moveX) {
					$('#inner').carousel('prev');
				}
			}
			isMove = false;
			startX = 0;
			moveX = 0;
		})
	}).trigger('resize');

	
})()