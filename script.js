// Ein einfaches Script für Interaktivität oder später Erweiterungen
document.querySelectorAll('.link-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Link geöffnet: ' + button.textContent.trim());
    });
});
