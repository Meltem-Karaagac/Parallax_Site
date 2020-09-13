const toggle_btn=document.getElementById("demo");
const day=document.querySelector(".day");
const night=document.querySelector(".night");

toggle_btn.addEventListener("click",change)

function change(){
    day.classList.toggle("day1");
    night.classList.toggle("night1");
    var elements = document.querySelectorAll("section, section p");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("section-dark")
    }

}
