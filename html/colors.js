var Body = {
    setColor:function(color){
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}

var Link = {
    setColor:function(color){
        $('a').css('color', color);
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        // alist[i].style.color = color;
        // i++;
        // }
    }
}
function setLinkColor(color){
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i++;
    }
}
function DayNightHandler(self){
    var target = document.querySelector('body');
    var modelist = ['day', 'night'];
    var colorList = ['white', 'black'];
    var aColorList = ['yellow', 'blueviolet'];
    var l = 0;

    if(self.value === modelist[l]) {l = 1;}

    Body.setBackgroundColor(colorList[(l+1)%2]);
    Body.setColor(colorList[l]);
    target.dataset.mode = colorList[(l+1)%2];
    self.value = modelist[l];
    Link.setColor(aColorList[l]);
}