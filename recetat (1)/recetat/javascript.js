const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.className = "scroll-top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.querySelectorAll(".idea img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

  img.addEventListener("click", () => {
    alert("Po hapet kategoria e recetave 🍽️");
  });
});


const elements = document.querySelectorAll(".idea, .ideas");

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "0.6s ease";
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".menu a")
      .forEach(l => l.classList.remove("active"));

    link.classList.add("active");
  });
});