const toggle_btn=document.getElementById("demo");
const day=document.querySelector(".day");
const night=document.querySelector(".night");

toggle_btn.addEventListener("click",change)

function change(){
    day.classList.toggle("day1");
    night.classList.toggle("night1");
}