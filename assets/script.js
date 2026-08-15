document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = `© ${new Date().getFullYear()} — گزارش آزمایش`;
  }

  document.querySelectorAll(".toc a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".toc a").forEach((item) => {
        item.removeAttribute("aria-current");
      });

      link.setAttribute("aria-current", "page");
    });
  });
});
