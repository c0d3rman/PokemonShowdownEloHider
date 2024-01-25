chrome.storage.sync.get({
    hideHoverElo: true,
}, options => {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes?.length > 0) {
                [].forEach.call(mutation.addedNodes, el => {
                    if (el.classList != null
                        && el.classList.contains('chat')
                        && [...el.classList].every(cls => !cls.startsWith("chatmessage-"))
                        && el.innerText?.includes("'s rating: ")) {
                        el.style.display = 'none';
                        console.log("PokemonShowdownEloHider: suppressed elo rating message.");
                    } else if (options.hideHoverElo
                        && el.classList != null
                        && el.classList.contains('trainer')) {
                        el.querySelector(".trainersprite").title = '';
                        console.log("PokemonShowdownEloHider: suppressed elo tooltip.");
                    }
                });
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

