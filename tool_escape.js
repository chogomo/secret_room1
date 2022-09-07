
const dialogue =["鎖上了","這裡似乎有個機關?","一幅畫,上面好像寫了什麼?","是個樂譜,試著彈看看吧?","一本日記,似乎上鎖了","抽屜鎖上了"];
let p = $("<p></p>");
let txt ="";
let index = 0;
function txtchange(dnumber) {
    $(".people").show()
    $(".dialogue").show()
    let time=setInterval(function (){
        txt = txt.concat(dialogue[dnumber].charAt(index));
        $(".dialogue").append(p.text(txt));
        index++;
        if (index>dialogue[dnumber].length-1) {
            clearInterval(time);
        }
    },100);   
};

function playAudio(){
    const audio = document.createElement("audio");
    audio.src = "music/431118__inspectorj__door-front-closing-a.wav";
    audio.play();
}
function bgmusic(){
    const audio2 = document.createElement("audio");
    audio2.src = "music/scott-buckley-undertow.mp3";
    audio2.play();
}
$(function (){
    bgmusic();
    
    $(".door").click(function (){
        playAudio();
        txtchange(0);
    })
    $(".piano-box").click(function (){
        playAudio();
        txtchange(1);
    })
    $(".panting").click(function (){
        $(".music_teach").show();
        $(".cross").show();
        txtchange(2);
    })
    $(".music_teach").click(function (){
        $(".people").hide()
        $(".dialogue").hide().empty()
    })
    $(".music").click(function (){
        $(".sheet_music").show();
        $(".cross").show();
        txtchange(3);
    })
    $(".sheet_music").click(function (){
        $(".people").hide()
        $(".dialogue").hide().empty()
    })
    $(".piano_key").click(function (){
        $(".piano").show();
        $(".cross").show();
        $(".people").hide()
        $(".dialogue").hide().empty()
    })
    const pianobopen = document.createElement("audio");
          pianobopen.src = "music/536092__eminyildirim__old-metalic-door-locked.wav";
    const pianoaudio = ["music/DO.m4a","music/RE.m4a","music/MI.m4a","music/FA.m4a","music/SO.m4a","music/LA.m4a","music/SI.m4a"];
    let pianoanswer = "0,0,4,4,5,5,4";
    let plpianoan = [];
    let num = 0;
    let allkeys = document.querySelectorAll(".pkeys");
    allkeys.forEach(onekey => {
        let pianokey = document.createElement("audio");
        pianokey.src = pianoaudio[num];
        let keynum = num
        $(onekey).click(function (){
            pianokey.play();
            plpianoan.push(keynum)
            console.log(plpianoan)
            console.log(plpianoan.toString()===pianoanswer);
            if (plpianoan.toString()===pianoanswer) {
                pianobopen.play();
                $("#pbox").attr("src","image/piano-box2.png");
                $(".piano-box").off("click");
                $(".piano-box").click(function (){
                       $(".piano_box_event").show();
                       $(".cross").show();
                })
            }
        });
        num++;
    });
    let uiboxindex = 0 ;
    let diarykeyuinum;
        $(".diary_key").click(
            function (){
                $(this).animate({bottom:'20%',opacity:'0'},"fast")
                $(".ui_box").eq(uiboxindex).append('<img src="image/diary_key.png" alt="diary_key"></img>')
                diarykeyuinum=uiboxindex;
                uiboxindex++
            }
        )
    $(".pillow").click(function (){
        $(".diary").show();
        if ($(this).offset().top < 500) {
            $(this).animate({top:'56%'},"slow")
        }else{
            $(this).animate({top:'47%'},"slow")
        }
    })
    $(".diary").click(function (){
        $(".diary_big").show()
        $(".cross").show();
        txtchange(4);
    })
    $(".diary_big").click(function (){
        $(".people").hide()
        $(".dialogue").hide().empty()
    })
    $(".table").click(function (){
        if (plpassan.toString()===passanswer) {
            $(".drawer_open").show();
            $(".cross").show();  
        }else{
            playAudio();
            $(".drawer").show();
            $(".cross").show();  
            txtchange(5);    
        }
    })
    $(".drawer").click(function (){
        $(".people").hide()
        $(".dialogue").hide().empty()      
    })
    const passanswer = "5,5,7,3";
    let plpassan = [0,0,0,0]
    $(".passbox").each(
        function(boxindex){
            let passindex = 0;
            let allimg = $(this).children()
            $(this).click(function(){
                allimg.eq(passindex).animate({top:'130%'},"normal");
                allimg.eq(passindex+1).animate({top:'-130%'},10)
                .animate({opacity:"1"},10).animate({top:'50%'},"normal")
                passindex++
                if (passindex>allimg.length-1) {
                    passindex=0;
                    allimg.eq(passindex).animate({top:'-130%'},10).animate({top:'50%'},"normal")
                }
                plpassan.splice(boxindex,1,passindex);
                // console.log(boxindex)
                // console.log(plpassan)
                if (plpassan.toString()===passanswer) {
                    pianobopen.play();
                    $(".drawer").hide();
                    $(".drawer_open").show();
                }
            })
        }
    )
    let doorkeyuinum;
    $(".door_key").click(
        function (){
            $(this).animate({bottom:'20%',opacity:'0'},"fast")
            $(".ui_box").eq(uiboxindex).append('<img src="image/door_key.png" alt="diary_key"></img>')
            doorkeyuinum=uiboxindex;
            uiboxindex++
        }
    )
    $(".dialogue").click(function (){
        $(".people").hide()
        $(this).hide().empty()
        $(".music_teach").hide()
        $(".sheet_music").hide()
        $(".diary_big").hide()
        $(".drawer").hide()
        $(".cross").hide()
        txt="";
        index=0;
    })
    $(".cross").click(function (){
        $(".people").hide()
        $(this).hide()
        $(".dialogue").hide().empty()
        $(".music_teach").hide()
        $(".sheet_music").hide()
        $(".diary_big").hide()
        $(".drawer").hide()
        $(".drawer_open").hide()
        $(".piano").hide()
        $(".piano_box_event").hide()
        txt="";
        index=0;
        plpianoan = [];
    })
    function ui_box(){
        $(".ui_box").each(
            function (){
                $(this).css("background"," url(image/box.png)")
            }
        )
    }
    $(".ui_box").each(function (clickindex){
        $(this).click(function (){
            ui_box();
            $(this).css("background"," url(image/box_2.png)")
            if (clickindex===diarykeyuinum) {
                $(".diary_big").one("click",function(){
                    pianobopen.play();
                    $(this).css("background","url(image/diary_open.png)")
                    })
                $(".diary").off("click");
                $(".diary").click(
                    function (){
                        $(".diary_big").show()
                        $(".cross").show();
                    }) 
            }
            if (clickindex===doorkeyuinum) {
                $(".door").off("click");
                $(".door").one("click",function(){
                    pianobopen.play();
                    $(".door").css("background","url(image/door_open.png)");
                    })
            }
        })
    })

});