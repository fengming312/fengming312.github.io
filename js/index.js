jQuery(".foucebox").slide({ mainCell:".bd ul", effect:"fold", autoPlay:true, delayTime:300, triggerTime:50, startFun:function(i){
    //下面代码控制鼠标状态滑动
    jQuery(".foucebox .hoverBg").animate({"margin-top":100*i},150);
}
});
