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