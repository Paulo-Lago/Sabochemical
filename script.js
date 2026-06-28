(function () {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const header = document.querySelector("[data-header]");
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  const emailButton = document.querySelector("[data-email-button]");

  const whatsappNumber = "5592991648231";
  const emailTo = "gerencia@sabochemical.com,comercial@sabochemical.com";

  function updateMenuTop() {
    if (!header || !menu) return;
    document.documentElement.style.setProperty("--menu-top", `${header.offsetHeight + 10}px`);
  }

  function closeMenu() {
    if (!menuButton || !menu) return;
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  }

  function getField(name) {
    return form.elements[name];
  }

  function setStatus(message, success) {
    status.textContent = message;
    status.classList.toggle("is-success", Boolean(success));
  }

  function validateForm() {
    const fields = ["nome", "email", "telefone", "assunto", "mensagem"].map(getField);
    let firstInvalid = null;

    fields.forEach((field) => {
      const isValid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!isValid));
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setStatus("Preencha os campos obrigatórios antes de enviar.", false);
      firstInvalid.focus();
      return false;
    }

    setStatus("", true);
    return true;
  }

  function buildMessage() {
    const nome = getField("nome").value.trim();
    const email = getField("email").value.trim();
    const telefone = getField("telefone").value.trim();
    const assunto = getField("assunto").value.trim();
    const mensagem = getField("mensagem").value.trim();

    return [
      "Olá, vim pelo site da SABOCHEMICAL Engenharia de Águas.",
      "Solicito atendimento para Tratamento de Água e Efluentes.",
      "",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      `Tipo de atendimento: ${assunto}`,
      "",
      `Mensagem: ${mensagem}`
    ].join("\n");
  }

  function openWhatsApp() {
    if (!validateForm()) return;
    const message = encodeURIComponent(buildMessage());
    setStatus("Mensagem pronta. Abrindo o WhatsApp...", true);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  }

  function openEmail() {
    if (!validateForm()) return;
    const subject = encodeURIComponent("Solicitação de contato pelo site SABOCHEMICAL");
    const body = encodeURIComponent(buildMessage());
    setStatus("Mensagem pronta. Abrindo seu e-mail...", true);
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", toggleMenu);
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    window.addEventListener("resize", updateMenuTop);
    updateMenuTop();
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      openWhatsApp();
    });

    form.addEventListener("input", (event) => {
      if (event.target.matches("input, select, textarea")) {
        event.target.removeAttribute("aria-invalid");
        if (status.textContent) setStatus("", false);
      }
    });
  }

  if (emailButton) {
    emailButton.addEventListener("click", openEmail);
  }
})();
