const headers = document.querySelectorAll(".filosofia__acordeon__header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});
