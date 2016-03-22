/**
 * Created by sck on 2015/12/28.
 */
window.onload = function () {
    imgSwitch();
    switch1();
    switch2();
    switch3();
    switch4();
};
/*图片轮播*/
function imgSwitch() {
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var animated = false;//储存动画是否运行
    var timer;
//轮播按钮
    function showButton() {
        for (var i = 0; i < buttons.length; i++) { //遍历按钮，去掉焦点状态
            if (buttons[i].className == 'swiper-pagination-active-switch') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'swiper-pagination-active-switch';//为当前按钮加上class
    }

    //箭头切换图片
    function animate(offset) { //传入一个参数，该参数等于图片大小
        animated = true;
        var newleft = parseInt(list.style.left) + offset;
        var time = 300;//位移总的时间;
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if (speed < 0 && parseInt(list.style.left) > newleft || speed > 0 && parseInt(list.style.left) < newleft) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                animated = false;
                list.style.left = newleft + 'px';
                if (newleft > -560) {     //当照片位于第一张，向前切换，跳到最后一张图片
                    list.style.left = -2800 + 'px';
                }
                if (newleft < -2800) {     //当照片位于最后一张，向后切换，跳到第一张图片
                    list.style.left = -560 + 'px';
                }
            }
        }

        go();
    }

    //自动播放
    function autoplay() {
        timer = setInterval(function () {    //每隔3秒执行函数
            next.onclick();
        }, 3000);
    }

    function stopplay() {
        clearInterval(timer);
    }

    //右箭头 切换
    next.onclick = function () {
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        if (!animated) {
            animate(-560);
        }

    };
    //左箭头切换
    prev.onclick = function () {
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        showButton();
        if (!animated) {
            animate(560);
        }
    };
    //按钮点击切换
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var myindex = parseInt(this.getAttribute('index'));
            var offset = -560 * (myindex - index);
            animate(offset);
            index = myindex;
            showButton();
        }
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;
    autoplay();
}
/*课程轮播*/
function switch1() {
    var lessonlist1 = document.getElementById("lessonlist1");
    var prev1 = document.getElementById("prev1");
    var next1 = document.getElementById("next1");
    var animated = false;

    function animate(offset) {
        var newLeft = parseInt(lessonlist1.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(lessonlist1.style.left) > newLeft) || (speed > 0 && parseInt(lessonlist1.style.left) < newLeft)) {
                lessonlist1.style.left = parseInt(lessonlist1.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                animated = false;
                lessonlist1.style.left = newLeft + "px";
                if (newLeft > -186) {
                    lessonlist1.style.left = -744 + "px";
                }
                if (newLeft < -744) {
                    lessonlist1.style.left = -186 + "px";
                }
            }
        }

        go();
    }

    prev1.onclick = function () {
        if (animated == false) {
            animate(186);
        }
    };
    next1.onclick = function () {
        if (animated == false) {
            animate(-186);
        }
    }

}
/*战略合作企业 轮播*/

function switch2() {
    var enterprise2 = document.getElementById("enterprise2");
    var prev2 = document.getElementById("prev2");
    var next2 = document.getElementById("next2");
    var animated = false;

    function animate(offset) {
        var newLeft = parseInt(enterprise2.style.left) + offset;
        var time = 60;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(enterprise2.style.left) > newLeft) || (speed > 0 && parseInt(enterprise2.style.left) < newLeft)) {
                enterprise2.style.left = parseInt(enterprise2.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                animated = false;
                enterprise2.style.left = newLeft + "px";
                if (newLeft > -160) {
                    enterprise2.style.left = -960 + "px";
                }
                if (newLeft < -960) {
                    enterprise2.style.left = -160 + "px";
                }
            }
        }

        go();
    }

    prev2.onclick = function () {
        if (animated == false) {
            animate(160);
        }
    };
    next2.onclick = function () {
        if (animated == false) {
            animate(-160);
        }
    }

}

/*合作院校 轮播*/

function switch3() {
    var university3 = document.getElementById("university3");
    var prev3 = document.getElementById("prev3");
    var next3 = document.getElementById("next3");
    var animated = false;

    function animate(offset) {
        var newLeft = parseInt(university3.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(university3.style.left) > newLeft) || (speed > 0 && parseInt(university3.style.left) < newLeft)) {
                university3.style.left = parseInt(university3.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                animated = false;
                university3.style.left = newLeft + "px";
                if (newLeft > -160) {
                    university3.style.left = -960 + "px";
                }
                if (newLeft < -960) {
                    university3.style.left = -160 + "px";
                }
            }
        }

        go();
    }

    prev3.onclick = function () {
        if (animated == false) {
            animate(160);
        }
    };
    next3.onclick = function () {
        if (animated == false) {
            animate(-160);
        }
    }

}

/*媒体报道 轮播*/

function switch4() {
    var media4 = document.getElementById("media4");
    var prev4 = document.getElementById("prev4");
    var next4 = document.getElementById("next4");
    var animated = false;

    function animate(offset) {
        var newLeft = parseInt(media4.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 10;//位移间隔时间
        var speed = offset / (time / interval);//每次位移量

        function go() {
            if ((speed < 0 && parseInt(media4.style.left) > newLeft) || (speed > 0 && parseInt(media4.style.left) < newLeft)) {
                media4.style.left = parseInt(media4.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                animated = false;
                media4.style.left = newLeft + "px";
                if (newLeft > -160) {
                    media4.style.left = -960 + "px";
                }
                if (newLeft < -960) {
                    media4.style.left = -160 + "px";
                }
            }
        }

        go();
    }

    prev4.onclick = function () {
        if (animated == false) {
            animate(160);
        }
    };
    next4.onclick = function () {
        if (animated == false) {
            animate(-160);
        }
    }

}

