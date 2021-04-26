let numberLike = document.querySelector(".navp");
let count = 0;
function likeLink(){
    count++;
    console.log(count)
    numberLike.innerText = count + " like(s)";
}