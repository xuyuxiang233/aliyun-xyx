$(function(){
	var timePlay=null;
	var _index=0;
	//初始化
	function Init(){
		$('#carouselFigure').find('li').eq(0).fadeIn().siblings('li').fadeOut();
		$('.Adv1>ul').find('li').eq(0).addClass('Adv2').siblings().removeClass('Adv2');
		$('.topicintroduction').find('div').eq(0).animate({top:'50px', opacity:'1'})
		.siblings().css({'opacity':'0'}).animate({ top:'-50px'});
		
	};
	Init();
	//定时器
	function  starttime(){
		timePlay=setInterval(function(){myTimer()},3000);
	};
	//显示背景图片
	function myTimer(){
		_index=(_index+1)%5;
		$('#carouselFigure').find('li').eq(_index).fadeIn().siblings('li').fadeOut();
		$('.Adv1>ul').find('li').eq(_index).addClass('Adv2').siblings().removeClass('Adv2');
		$('.topicintroduction').find('div').eq(_index).animate({top:'50px', opacity:'1'})
		.siblings().css({'opacity':'0'}).animate({ top:'-50px'});
	};
	
	
	
	
	
	//鼠标输入移出
	$('#carouselFigure').mouseenter(function(){
		if(timePlay){
			clearInterval(timePlay);
		}
	}).mouseleave(function(){
		starttime();
	}).trigger('mouseleave');
	//图片切换
	$('.Adv1>ul').find('li').click(function(){
		_index=$(this).index();	
		$('#carouselFigure').find('li').eq(_index).fadeIn().siblings('li').fadeOut();
		$('.Adv1>ul').find('li').eq(_index).addClass('Adv2').siblings().removeClass('Adv2');
		$('.topicintroduction').find('div').eq(_index).animate({top:'50px', opacity:'1'})
		.siblings().css({'opacity':'0'}).animate({ top:'-50px'});
	});
	//下拉菜单
	$('.menu ul').find('li').hover(function(){
		$(this).find('.solutionmenu').stop(true,false).slideDown();
	},function(){
		$(this).find('.solutionmenu').stop(true,false).slideUp();
	});
})
