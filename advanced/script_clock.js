
let HrIdx = document.querySelector("#hour");
let MinIdx = document.querySelector("#minutes");
let SecIdx = document.querySelector("#seconds");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      let time = getSecondsSinceStartOfDay();
      console.log(time);
      let hrdegree = (time/3600>=12)? (time/3600-12)*30: time/3600 * 30;
      let mindegree = (time%3600)/60*6;
      let secdegree = time%60*6;
      HrIdx.style.transform = `rotate(${hrdegree-180}deg)`;
      MinIdx.style.transform = `rotate(${mindegree-180}deg)`;
      SecIdx.style.transform = `rotate(${secdegree-180}deg)`;
  }, 1000);