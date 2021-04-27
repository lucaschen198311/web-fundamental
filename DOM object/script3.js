let cookie = document.querySelector(".cookie");
let tempDOM = document.querySelectorAll("span");

function alertmessage(){
    alert("loading weather report....");
}

function closeCookie(){
    cookie.remove();
    console.log("deleted");
}

function tempConvert(element){
    console.log(element.value);
    let unit = tempDOM[0].textContent.slice(4);
    if(unit != element.value){
        for(let i=0; i<tempDOM.length; i++){
            let tempNum = parseFloat(tempDOM[i].textContent.slice(0,4));
            if(element.value == "°F"){
                tempNum = (tempNum*9/5+32).toFixed(1);
                tempDOM[i].textContent = tempNum + "°F";
            }else if(element.value == "°C"){
                tempNum = ((tempNum-32)*5/9).toFixed(1);
                tempDOM[i].textContent = tempNum+"°C";
            }
        }
    }
    
}