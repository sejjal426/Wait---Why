function searchArticles() {

    const searchInput = document.getElementById("searchInput");
    const question = searchInput.value.trim().toLowerCase();

    if (question === "") {
        alert("What are you curious about?");
        return;
    }

    const pages = [

        {
            keywords: ["sky", "blue sky", "why is the sky blue", "atmosphere", "light"],
            url: "article-sky-blue.html"
        },

        {
            keywords: ["moon", "moon fall", "why doesn't the moon fall", "gravity"],
            url: "moon-fall.html"
        },

        {
            keywords: ["song", "songs", "music", "song stuck", "earworm"],
            url: "songs.html"
        },

        {
            keywords: ["science", "scientific"],
            url: "science.html"
        },

        {
            keywords: ["space", "universe", "planet", "stars"],
            url: "space.html"
        },

        {
            keywords: ["psychology", "mind", "brain", "human behaviour"],
            url: "psychology.html"
        },

        {
            keywords: ["technology", "tech", "computer", "artificial intelligence", "ai"],
            url: "technology.html"
        },

        {
            keywords: ["history", "past", "ancient", "historical"],
            url: "history.html"
        },

        {
            keywords: ["world", "countries", "earth", "places"],
            url: "world.html"
        }

    ];


    for (let page of pages) {

        for (let keyword of page.keywords) {

            if (question.includes(keyword)) {

                window.location.href = page.url;

                return;
            }
        }
    }
    alert(
        "We haven't explored that question yet! Try another question or explore one of our categories."
    );
}


// ASK WAIT, WHY?

function askChatbot() {

    const input = document.getElementById("chatInput");
    const question = input.value.trim();

    if (question === "") {
        alert("Ask me something you're curious about!");
        return;
    }

    alert(
        "Great question! 🤔\n\n" +
        "The AI brain for Wait, Why? is coming next!"
    );

    input.value = "";
}
