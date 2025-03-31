document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
  
    document.querySelectorAll(".popup-trigger").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        const imgEl = el.tagName === "IMG" ? el : el.previousElementSibling;
        lightboxImg.src = imgEl.src;
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  