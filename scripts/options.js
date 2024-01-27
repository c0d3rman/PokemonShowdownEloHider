document.addEventListener('DOMContentLoaded', () => {
    browser.storage.sync.get({
        hideHoverElo: true,
    }, (items) => {
        document.getElementById('hideHoverElo').checked = items.hideHoverElo;
    });
});

document.getElementById('save').addEventListener('click', () => {
    browser.storage.sync.set({
        hideHoverElo: document.getElementById('hideHoverElo').checked,
    }, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => status.textContent = '', 750);
    });
});