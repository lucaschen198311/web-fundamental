
let userName = document.querySelector('h2');
let reqIndicator = document.querySelector(".indicator1");
let connIndicator = document.querySelector(".indicator2");
let reqNum = parseInt(reqIndicator.textContent);
let connNum = parseInt(connIndicator.textContent);


function changeUser(){
    console.log(userName);
    userName.innerHTML = "Lucas Chen";
}

function acceptButn(element){
    reqNum--;
    connNum++;
    reqIndicator.textContent = reqNum;
    connIndicator.textContent = connNum;
    if(element.className == "requestor1"){
        let row = document.querySelector(".requestor1");
        row.remove();
    }else if (element.className == "requestor2"){
        let row = document.querySelector(".requestor2");
        row.remove();
    }
}

function closeButn(element){
    reqNum--;
    reqIndicator.textContent = reqNum;
    if(element.className == "requestor1"){
        let row = document.querySelector(".requestor1");
        row.remove();
    }else if (element.className == "requestor2"){
        let row = document.querySelector(".requestor2");
        row.remove();
    }
}
