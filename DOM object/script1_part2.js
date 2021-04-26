let userlike_1 = document.querySelector(".navp1");
let userlike_2 = document.querySelector(".navp2");
let userlike_3 = document.querySelector(".navp3");
let count1 = 0;
let count2 = 0;
let count3 = 0;

function likeLink(element){
    if(element.id == "btn1"){
        count1++;
        userlike_1.innerText = count1 + " like(s)";
    }else if(element.id == "btn2"){
        count2++;
        userlike_2.innerText = count2 + " like(s)";
    }else if(element.id == "btn3"){
        count3++;
        userlike_3.innerText = count3 + " like(s)";
    }

}