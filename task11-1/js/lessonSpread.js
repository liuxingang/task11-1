/**
 * Created by sck on 2015/12/30.
 */

$(document).ready(function () {
    lessonSpread();
    hotLessonLable();
    wayInfor();
    learnCard();
    onFocus();
    goTop();
    onclick1();

    window.onscroll = function () {
        goTop();
    }

});
//点击  返回顶部
function onclick1() {
    $("span.top").click(function () {
        $('html,body').animate({scrollTop: 0}, 700);
    });
}
//搜索框
function onFocus() {  //获得焦点时 改变样式
    $(".search-text").focus(function () {
            $(".hot-words").css("display", "none");
            $(".search-text").css("outline", "none");
            $(".search-btn").css({
                "background": "#35b558 url(images/topsearch-icon28c8d8b0.png) no-repeat center center",
                "border-color": "#35b558"
            })
        }
    );
}

//课程展开
function lessonSpread() {
    $('.one-classfiy-lesson li').each(function () {
        $(this).hover(function () {
            $(this).find('.lessionplay').css('opacity', 1);
            $(this).find('.lesson-infor').css('height', '175px');
            $(this).find('.lesson-infor>p').css({'opacity': '1', 'height': '55px'});
            $(this).find('.zhongji').css('display', 'block');
            $(this).find('.learn-number').css('display', 'block');
            $(this).find('.lessonicon-box').css('bottom', '-5px');

        }, function () {
            $(this).find('.lessionplay').css('opacity', 0);
            $(this).find('.lesson-infor').css('height', '88px');
            $(this).find('.lesson-infor>p').css({'opacity': '0', 'height': '55px'});
            $(this).find('.zhongji').css('display', 'none');
            $(this).find('.learn-number').css('display', 'none');
            $(this).find('.lessonicon-box').css('bottom', '4px');
        })
    });
}

//hot-lesson 选项卡切换
function demo(i) {
    $("#fivelesson").children().css("display", "none");
    $("#fivelesson-0").css("display", "none");
    $("#fivelesson-" + i).css("display", "block");
}
function hotLessonLable() {
    $('.hot-lesson li').each(function (index) {
        $(this).mouseenter(function () {
            $("li.on").removeClass("on");
            $(".hot-lesson li").eq(index).addClass("on");
            //切换相应div
            if (index == 1) {
                demo(1);
            } else if (index == 2) {
                demo(2);
            } else if (index == 3) {
                demo(3);
            } else if (index == 4) {
                demo(4);
            } else if (index == 5) {
                demo(5);
            } else {
                $("#fivelesson").children().css("display", "none");
                $("#fivelesson-0").css("display", "block");
            }
        })
    });
}
//way-infor
function wayInfor() {
    $("#projectpath .way").hover(function () {
        $("#projectpath .way-infor").css({"opacity": "1", "margin-left": 0});
    }, function () {
        $("#projectpath .way-infor").css({"opacity": "0", "margin-left": "-5px"});
    });
    $("#system .way").hover(function () {
        $("#system .way-infor").css({"opacity": "1", "margin-left": 0});
    }, function () {
        $("#system .way-infor").css({"opacity": "0", "margin-left": "-5px"});
    });
    $("#excellent .way").hover(function () {
        $("#excellent .way-infor").css({"opacity": "1", "margin-left": 0});
    }, function () {
        $("#excellent .way-infor").css({"opacity": "0", "margin-left": "-5px"});
    });
    $("#wiki .way").hover(function () {
        $("#wiki .way-infor").css({"opacity": "1", "margin-left": 0});
    }, function () {
        $("#wiki .way-infor").css({"opacity": "0", "margin-left": "-5px"});
    });
}

//learn-card
function learnCard() {
    $(".learn-card a").each(function (index) {
        if (index < 4) {
            $(this).hover(function () {
                $(this).css("border-color", "#35b588");
                $(this).next().css("border-left-color", "#35b588");
            }, function () {
                $(this).css("border-color", "#e4e4e4");
                $(this).next().css("border-left-color", "#e4e4e4");
            })
        } else if (index == 4) {
            $(this).hover(function () {
                $(this).css("border-color", "#35b588");
            }, function () {
                $(this).css("border-color", "#e4e4e4");
            })
        } else if (index > 4 && index < 9) {
            var myindex = index - 5;
            $(this).hover(function () {
                $(this).css("border-color", "#35b588");
                $(this).next().css("border-left-color", "#35b588");
                $(".learn-card a").eq(myindex).css("border-bottom-color", "#35b588");
            }, function () {
                $(this).css("border-color", "#e4e4e4");
                $(this).next().css("border-left-color", "#e4e4e4");
                $(".learn-card a").eq(myindex).css("border-bottom-color", "#e4e4e4");
            })
        } else if (index == 9) {
            var myindex = index - 5;
            $(this).hover(function () {
                $(this).css("border-color", "#35b588");
                $(".learn-card a").eq(myindex).css("border-bottom-color", "#35b588");
            }, function () {
                $(this).css("border-color", "#e4e4e4");
                $(".learn-card a").eq(myindex).css("border-bottom-color", "#e4e4e4");
            })
        }
    });
}

/*返回顶部*/
function goTop() {
    var scrollHeight = $(window).scrollTop();
    console.log("scrollHeight");
    if (scrollHeight > 100) {
        $(".top").css("display", "block");
    } else {
        $(".top").css("display", "none");
    }
}
