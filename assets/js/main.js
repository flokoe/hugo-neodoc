import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('closeToc', () => ({
  closeToc(event) {
    // Only act if an <a> tag was clicked
    const target = event.target.closest('a');
    if (target) {
      this.showToc = !this.showToc
    }
  }
}))

Alpine.start()
