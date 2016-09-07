jQuery(".foucebox").slide({ mainCell:".bd ul", effect:"fold", autoPlay:true, delayTime:300, triggerTime:50, startFun:function(i){
    //下面代码控制鼠标状态滑动
    jQuery(".foucebox .hoverBg").animate({"margin-top":100*i},150);
}
});


function getScrollTop() {
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    var scrollLeft=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
    return {
        scrollTop:scrollTop,
        scrollLeft:scrollLeft
    }
}

window.onscroll=function () {
    var scrollHeight=getScrollTop().scrollTop;
    console.log(scrollHeight);
    if (scrollHeight<=100) {
        $(".fm-image>img").removeClass("hover")
    }
    else if(scrollHeight>100&scrollHeight<=300) {
        $(".fm-image>img").addClass("hover")
    }else if (scrollHeight>300){
        $(".fm-image>img").removeClass("hover")
    }
}