const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes?.length > 0) {
            [].forEach.call(mutation.addedNodes, el => {
                if (el.classList != null
                    && el.classList.contains('chat')
                    && [...el.classList].every(cls => !cls.startsWith("chatmessage-"))
                    && el.innerText?.includes("'s rating: ")) {
                    el.style.display = 'none'
                    console.log("ShowdownEloHider: suppressed elo rating message.")
                }
            });
        }
    });
});
observer.observe(document.body, { childList: true, subtree: true });
