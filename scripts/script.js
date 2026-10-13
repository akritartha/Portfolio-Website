function toggleMode(){
    if(document.getElementById("toggle").textContent=="☀"){
        document.getElementById("toggle").textContent="⏾";
        document.documentElement.setAttribute("data-theme","light");
    }
    else{
        document.getElementById("toggle").textContent="☀";
        document.documentElement.removeAttribute("data-theme","light");
    }
}
const rail = document.querySelector(".rail");
const stickman = document.getElementById("stickman");

function updateStickman() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const travel = rail.clientHeight - stickman.clientHeight;
  // 0 = top of page = bottom of rail; 1 = bottom of page = top of rail
  const y = (1 - progress) * travel;
  stickman.style.setProperty("--y", y + "px");
}

window.addEventListener("scroll", updateStickman, { passive: true });
window.addEventListener("resize", updateStickman);
updateStickman();