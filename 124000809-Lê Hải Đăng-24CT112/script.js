// Hiệu ứng xuất hiện từng phần khi cuộn
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".left-section, .right-section");
    sections.forEach(section => {
      const pos = section.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        section.style.transition = "opacity 1s ease, transform 1s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  });
  
  // Ban đầu ẩn
  document.querySelectorAll(".left-section, .right-section").forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
  });
  