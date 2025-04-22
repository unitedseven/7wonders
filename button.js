document.addEventListener("DOMContentLoaded", () =>{
  const exploreBtn = document.querySelector(".btn");
  if(exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "wonders.html";
    });
  }
});