document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
  
        sections.forEach(sec => {
          sec.classList.add("fade-out");
          setTimeout(() => {
            sec.style.display = "none";
            sec.classList.remove("fade-out");
          }, 300);
        });
  
        const active = document.getElementById(target);
        setTimeout(() => {
          active.style.display = "block";
          active.classList.add("fade-in");
          setTimeout(() => active.classList.remove("fade-in"), 300);
        }, 300);
      });
    });
  });

  
    
