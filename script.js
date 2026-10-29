
/*
  COMWEB
  Altere SEU_USUARIO para o nome real do Instagram da empresa,
  sem o símbolo @.
*/

const INSTAGRAM_USERNAME = "SEU_USUARIO";

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const contactLink = document.getElementById("contact-link");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

if (contactLink) {
  const validUsername =
    INSTAGRAM_USERNAME &&
    INSTAGRAM_USERNAME !== "SEU_USUARIO";

  contactLink.href = validUsername
    ? `https://ig.me/m/${encodeURIComponent(INSTAGRAM_USERNAME)}`
    : "https://www.instagram.com/direct/inbox/";

  contactLink.addEventListener("click", () => {
    // O link abre o Instagram; não registra nem confirma uma venda.
  });
}
