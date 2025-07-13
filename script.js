document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", (e) => {
      e.stopPropagation();
      const link = planet.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank");
      }
    });
  });
});
