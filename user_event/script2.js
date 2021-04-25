function videoPlay(element){
    element.play();
}

function videoPause(element){
    element.pause();
}

function videoMute(element){
    ismuted = element.muted;
    if(ismuted){
        element.muted = false;
    }else{
        element.muted = true;
    }
}