//var deviceWidth = document.documentElement.clientWidth;
//if(deviceWidth > 750) deviceWidth = 750;
//document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

(function(){
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 750 ){
            a = 750;
        } 
        //750/w = 100/font-size
        rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();
