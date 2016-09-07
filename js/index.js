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
    if (scrollHeight<50) {
        $(".fm-name").removeClass("bounceInRight animated")
        $(".fm-info").removeClass("bounceInLeft animated")
    }
    if (scrollHeight>50&scrollHeight<=200) {
        $(".fm-name").addClass("bounceInRight animated")
        $(".fm-info").addClass("bounceInLeft animated")
        $(".fm-image>img").removeClass("hover")
    }
    if (scrollHeight>200&scrollHeight<=300) {
        $(".fm-image>img").addClass("hover")
        $(".fm-image>img").removeClass("flip animated")
    }

    if (scrollHeight>300&scrollHeight<=600){
        $(".fm-image>img").removeClass("hover")
        $(".fm-image>img").addClass("flip animated")
        $(".drop-shadow").removeClass("about-hover")
        $(".about-grids").removeClass("grids-hover")
    }
    if (scrollHeight>600){
        $(".drop-shadow").addClass("about-hover")
    }
    if (scrollHeight>800){
        $(".drop-shadow").removeClass("about-hover")
        $(".about-grids").addClass("grids-hover")
    }
    if (scrollHeight<1000){
        $(".skills .dance").css({"opacity":'0.2','left':'0'})
    }
    if (scrollHeight>1000){
        $(".skills .dance").css({"opacity":'1','left':'80%'})
    }
    if (scrollHeight>1300){
        $(".skills .dance").addClass("flip animated")
    }
    if (scrollHeight>1600){
        $(".skills .dance").removeClass("flip animated")
        $(".skills .dance").addClass("hinge animated")

    }
}
