// plain-shell.js — frameless shell so the same app body can render as a plain
// responsive surface (web / tablet) instead of inside a device bezel.
customElements.define('plain-shell', class extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.overflow = 'hidden';
    this.style.background = this.getAttribute('background') || 'transparent';
  }
});
window.PlainShell = true;

