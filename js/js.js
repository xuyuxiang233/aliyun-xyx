$(".car2").find(".cen9").eq(1).fadeIn().siblings('li').fadeOut();

var _index=0;
var timePlay=null;
//显示背景图片
function myTimer(){
	console.log(_index);
		_index=(_index+1)%5;
		$(".car2").find("li").eq(_index).fadeIn().siblings('li').fadeOut()
};
//定时器
function  starttime(){
		timePlay=setInterval(function(){myTimer()},2000);
	};

//鼠标输入移出
	$('.cen2').mouseenter(function(){
		if(timePlay){
			clearInterval(timePlay);
		}
	}).mouseleave(function(){
		starttime();
	}).trigger('mouseleave');