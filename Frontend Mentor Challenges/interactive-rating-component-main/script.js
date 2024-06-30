const overview = document.querySelector(".hello");
const container = document.querySelector(".container");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
function myToggle(){    
    container.style.display = "none"; 
    overview.style.display = "block";
}
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})