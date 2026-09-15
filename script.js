// ==========================================
// 🔎 SEARCH ARTICLES
// ==========================================

function searchArticles() {

    const searchInput = document.getElementById("searchInput");
    const question = searchInput.value.trim().toLowerCase();

    if (question === "") {
        alert("What are you curious about?");
        return;
    }

    const pages = [

        // SCIENCE
        {
            keywords: ["sky", "blue sky", "why is the sky blue", "atmosphere", "light"],
            url: "article-sky-blue.html"
        },

        {
            keywords: ["ice", "ice float", "why does ice float", "water"],
            url: "ice-float.html"
        },

        {
            keywords: ["rainbow", "rainbows", "how does a rainbow form"],
            url: "rainbow.html"
        },

        {
            keywords: ["static", "static shock", "static shocks", "electric shock"],
            url: "static-shocks.html"
        },

        {
            keywords: ["plant", "plants", "which way is up", "roots", "grow"],
            url: "plants.html"
        },

        {
            keywords: ["fire", "oxygen", "why does fire need oxygen", "combustion"],
            url: "fire-oxygen.html"
        },


        // SPACE
        {
            keywords: ["moon", "moon fall", "why doesn't the moon fall", "gravity"],
            url: "moon-fall.html"
        },

        {
            keywords: ["stars", "star twinkle", "stars twinkle", "twinkle"],
            url: "stars-twinkle.html"
        },

        {
            keywords: ["black hole", "black holes"],
            url: "black-hole.html"
        },

        {
            keywords: ["sun hot", "why is the sun hot", "sun", "solar"],
            url: "sun-hot.html"
        },

        {
            keywords: ["earth moving", "earth move", "earth rotation", "why don't we feel earth moving"],
            url: "earth-moving.html"
        },

        {
            keywords: ["without moon", "what happens without the moon", "moon disappear"],
            url: "without-moon.html"
        },

        {
            keywords: ["song", "songs", "music", "song stuck", "earworm"],
            url: "songs.html"
        },


        // PSYCHOLOGY
        {
            keywords: ["dream", "dreams", "why do we dream"],
            url: "dreams.html"
        },

        {
            keywords: ["forget", "forget things", "memory", "why do we forget"],
            url: "forget-things.html"
        },

        {
            keywords: ["deja vu", "déjà vu", "already experienced"],
            url: "deja-vu.html"
        },

        {
            keywords: ["sleepy", "sleep", "why do we feel sleepy", "tired"],
            url: "sleepy.html"
        },

        {
            keywords: ["nervous", "nervousness", "why do we get nervous"],
            url: "nervous.html"
        },


        // TECHNOLOGY
        {
            keywords: ["phone location", "phone know where", "gps", "location"],
            url: "phone-location.html"
        },

        {
            keywords: ["internet", "how does the internet work", "internet work"],
            url: "internet.html"
        },

        {
            keywords: ["robot", "robots", "how do robots know what to do"],
            url: "robots.html"
        },

        {
            keywords: ["artificial intelligence", "ai learn", "how does ai learn", "machine learning"],
            url: "artificial-intelligence.html"
        },

        {
            keywords: ["password", "password security", "information safe", "password keep safe"],
            url: "password-security.html"
        },

        {
            keywords: ["cloud", "cloud computing", "what is the cloud"],
            url: "cloud.html"
        },


        // WORLD
        {
            keywords: ["time zone", "time zones", "different time zones"],
            url: "time-zones.html"
        },

        {
            keywords: ["country shapes", "countries different shapes", "country shape"],
            url: "country-shapes.html"
        },

        {
            keywords: ["ocean", "oceans", "oceans mix", "why don't oceans mix"],
            url: "oceans-mix.html"
        },

        {
            keywords: ["cold", "cold places", "why are some places cold"],
            url: "cold-places.html"
        },

        {
            keywords: ["volcano", "volcanoes", "where volcanoes are found"],
            url: "volcanoes.html"
        },

        {
            keywords: ["desert", "deserts", "how do deserts form"],
            url: "deserts.html"
        },


        // HISTORY
        {
            keywords: ["pyramid", "pyramids", "ancient civilizations", "ancient civilization"],
            url: "pyramids.html"
        },

        {
            keywords: ["communication before phones", "communicate before phones", "before phones"],
            url: "communication-before-phones.html"
        },

        {
            keywords: ["ancient cities", "cities near rivers", "ancient cities rivers"],
            url: "ancient-cities-rivers.html"
        },

        {
            keywords: ["printing press", "printing press change world"],
            url: "printing-press.html"
        },

        {
            keywords: ["castle", "castles", "moat", "moats"],
            url: "castles-moats.html"
        },

        {
            keywords: ["historian", "historians", "history", "past", "how historians know"],
            url: "historians-past.html"
        },


        // CATEGORIES
        {
            keywords: ["science", "scientific"],
            url: "science.html"
        },

        {
            keywords: ["space", "universe", "planet"],
            url: "space.html"
        },

        {
            keywords: ["psychology", "mind", "brain", "human behaviour"],
            url: "psychology.html"
        },

        {
            keywords: ["technology", "tech", "computer"],
            url: "technology.html"
        },

        {
            keywords: ["world", "countries", "places"],
            url: "world.html"
        },

        {
            keywords: ["history", "historical"],
            url: "history.html"
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
        "We haven't explored that question yet! 🤔\n\n" +
        "Try another question or explore one of our categories."
    );
}



// ==========================================
// 🤖 ASK WAIT, WHY?
// ==========================================

function askChatbot() {

    const input = document.getElementById("chatInput");
    const question = input.value.trim().toLowerCase();

    if (question === "") {
        alert("Ask me something you're curious about!");
        return;
    }

    let answer = "";

    // 🔬 SCIENCE
    if (question.includes("sky") && question.includes("blue")) {
        answer = "The sky looks blue because Earth's atmosphere scatters blue light from sunlight more strongly than most other colours.";
    }

    else if (question.includes("ice") && question.includes("float")) {
        answer = "Ice floats because solid water is less dense than liquid water. When water freezes, its molecules form a structure that takes up more space.";
    }

    else if (question.includes("rainbow")) {
        answer = "A rainbow forms when sunlight enters water droplets. The light bends, reflects and separates into different colours.";
    }

    else if (question.includes("static") || question.includes("electric shock")) {
        answer = "A static shock happens when electric charge builds up and suddenly moves from one object to another.";
    }

    else if (question.includes("fire") && question.includes("oxygen")) {
        answer = "Fire needs oxygen because burning is a chemical reaction called combustion. Oxygen helps the fuel continue reacting and releasing energy.";
    }

    else if (question.includes("plant") && (question.includes("grow") || question.includes("up") || question.includes("root"))) {
        answer = "Plants respond to gravity and light. Roots generally grow downward while shoots usually grow upward toward light.";
    }

    else if (question.includes("hiccup")) {
        answer = "Hiccups happen when the diaphragm suddenly contracts. This causes a quick intake of air followed by the familiar 'hic' sound.";
    }

    else if (question.includes("yawn")) {
        answer = "Yawning is a natural reflex linked with changes in alertness and brain and body activity. Scientists are still studying exactly why we yawn.";
    }

    // 🌌 SPACE
    else if (question.includes("star") && question.includes("twinkle")) {
        answer = "Stars appear to twinkle because their light passes through Earth's moving atmosphere, which bends the light slightly.";
    }

    else if (question.includes("black hole")) {
        answer = "A black hole is a region of space with extremely strong gravity. Beyond its event horizon, light cannot escape.";
    }

    else if (question.includes("sun") && question.includes("hot")) {
        answer = "The Sun is hot because nuclear fusion takes place in its core. Hydrogen nuclei combine and release enormous amounts of energy.";
    }

    else if (question.includes("earth") && (question.includes("move") || question.includes("moving") || question.includes("rotation"))) {
        answer = "Earth is constantly moving, but we don't normally feel it because we, the atmosphere and everything around us are moving together.";
    }

    else if (question.includes("moon") && question.includes("fall")) {
        answer = "The Moon stays in orbit because Earth's gravity pulls it inward while the Moon's forward motion carries it around Earth.";
    }

    // 🧠 PSYCHOLOGY
    else if (question.includes("dream")) {
        answer = "Dreams are experiences created by the brain during sleep. They may be connected with memory, emotions and brain activity.";
    }

    else if (question.includes("forget") || question.includes("memory")) {
        answer = "We can forget things because memories may not have been stored strongly, may become harder to retrieve, or may be affected by other information.";
    }

    else if (question.includes("deja vu") || question.includes("déjà vu")) {
        answer = "Déjà vu is the feeling that you have experienced something before even though you know it is happening now. It may be connected to how the brain processes familiarity and memory.";
    }

    else if (question.includes("sleepy") || question.includes("sleep")) {
        answer = "Sleepiness is influenced by your body's internal clock and by sleep pressure that builds while you are awake.";
    }

    else if (question.includes("nervous")) {
        answer = "We can feel nervous when our brain thinks something important or challenging is happening. The body's stress response can increase alertness.";
    }

    else if (question.includes("goosebumps")) {
        answer = "Goosebumps happen when tiny muscles around hair follicles contract. They can be triggered by cold or strong emotions.";
    }

    // 💻 TECHNOLOGY
    else if (question.includes("phone") && (question.includes("location") || question.includes("where"))) {
        answer = "Your phone can estimate its location using GPS, Wi-Fi networks and mobile towers.";
    }

    else if (question.includes("internet")) {
        answer = "The internet is a huge network of connected computers and devices that exchange data using communication protocols.";
    }

    else if (question.includes("robot") || question.includes("robots")) {
        answer = "Robots use software, instructions and sensors to respond to their surroundings and perform tasks.";
    }

   else if (
    question.includes("artificial intelligence") ||
    question.includes("what is ai") ||
    question.includes("what is artificial intelligence") ||
    question.includes("how does ai work") ||
    question.includes("how does artificial intelligence work") ||
    question.includes("how does ai learn") ||
    question.includes("how does artificial intelligence learn") ||
    question === "ai"
) {
    answer =
        "Artificial Intelligence, or AI, is technology that allows computers " +
        "to perform tasks that normally require human-like thinking. " +
        "AI can learn patterns from data and use them to make predictions, " +
        "recognise information and solve problems.";
}
    else if (question.includes("password")) {
        answer = "Passwords help protect accounts by verifying that someone is allowed to access them. Strong security can also use password managers and multi-factor authentication.";
    }

    else if (question.includes("cloud")) {
        answer = "The 'cloud' refers to computers and servers in data centres that store information and provide services over the internet.";
    }

    // 🌍 WORLD
    else if (question.includes("time zone") || question.includes("time zones")) {
        answer = "Earth rotates, so different parts of the planet experience daylight at different times. Time zones help regions use a common local time.";
    }

    else if (question.includes("country") && question.includes("shape")) {
        answer = "Countries have different shapes because their borders developed through geography, history, treaties, political decisions and conflicts.";
    }

    else if (question.includes("ocean") && (question.includes("mix") || question.includes("mixing"))) {
        answer = "The oceans are connected and their waters do mix. Differences in temperature, salinity, density and currents can make some water masses mix slowly.";
    }

    else if (question.includes("volcano")) {
        answer = "Many volcanoes form near tectonic plate boundaries, although some also form over hotspots.";
    }

    else if (question.includes("desert")) {
        answer = "Deserts form when regions receive very little precipitation. Several factors, including air circulation, mountains and ocean currents, can cause this.";
    }

    // 🏛️ HISTORY
    else if (question.includes("pyramid")) {
        answer = "Ancient civilizations built pyramids for important purposes, including monumental structures and tombs. Their construction showed impressive organization and engineering.";
    }

    else if (question.includes("printing press")) {
        answer = "The printing press made books and written material much faster and cheaper to produce, helping information and ideas spread more widely.";
    }

    else if (question.includes("castle") && question.includes("moat")) {
        answer = "Moats could make castles harder to attack by creating a deep ditch between attackers and the castle walls.";
    }

    else if (question.includes("historian") || question.includes("historians")) {
        answer = "Historians study evidence from the past, including written records, objects, buildings and archaeological discoveries.";
    }

    // 🎵 MUSIC
    else if (question.includes("song") || question.includes("music") || question.includes("earworm")) {
        answer = "Songs can get stuck in our heads because the brain sometimes repeats familiar musical patterns. This is often called an 'earworm'.";
    }

    // ❓ UNKNOWN //
else {

    // Try to understand more natural questions

    if (
        question.includes("hiccup") ||
        question.includes("hiccups") ||
        question.includes("diaphragm")
    ) {
        answer =
            "Hiccups happen when your diaphragm suddenly contracts. " +
            "This causes a quick intake of air and produces the familiar hiccup sound.";
    }

    else if (
        question.includes("why am i sleepy") ||
        question.includes("why do i feel sleepy") ||
        question.includes("why am i tired") ||
        question.includes("feel tired")
    ) {
        answer =
            "Feeling sleepy or tired can happen when your body needs rest. " +
            "Your internal body clock and the amount of time you've been awake " +
            "both influence how sleepy you feel.";
    }

    else if (
        question.includes("how are rainbows made") ||
        question.includes("how is a rainbow made") ||
        question.includes("how are rainbows created") ||
        question.includes("how does a rainbow happen")
    ) {
        answer =
            "Rainbows form when sunlight interacts with water droplets. " +
            "The light bends, reflects inside the droplets and separates into different colours.";
    }

    else if (
        question.includes("why is earth moving") ||
        question.includes("why does earth move") ||
        question.includes("why is our planet moving") ||
        question.includes("does earth move")
    ) {
        answer =
            "Yes, Earth is always moving. It rotates on its axis and travels around the Sun. " +
            "We don't normally feel this movement because everything around us is moving with Earth.";
    }

    else if (
        question.includes("why do we get goosebumps") ||
        question.includes("why goosebumps") ||
        question.includes("goose bumps")
    ) {
        answer =
            "Goosebumps happen when tiny muscles around your hair follicles contract. " +
            "They can be caused by cold temperatures or strong emotions.";
    }

    else if (
        question.includes("why does rain smell") ||
        question.includes("smell of rain") ||
        question.includes("rain smell good")
    ) {
        answer =
            "The pleasant smell after rain is partly caused by compounds released from " +
            "soil and plants. One important compound is called geosmin.";
    }

    else if (
        question.includes("why do cats purr") ||
        question.includes("cat purr") ||
        question.includes("cats purr")
    ) {
        answer =
            "Cats often purr when they are comfortable or relaxed, but they can also " +
            "purr in other situations. Purring may be connected with communication and comfort.";
    }

    else {
        answer =
            "Hmm... 🤔 I don't know the answer to that one yet!\n\n" +
            "Try asking me about Science, Space, Psychology, Technology, World, History or Music.";
    }
}
    const chatAnswer = document.getElementById("chatAnswer");

    chatAnswer.innerHTML =
        "<div class='user-question'>" +
        "<strong>👤 You</strong><br><br>" +
        question +
        "</div>" +

        "<div class='bot-answer'>" +
        "<strong>🤖 Wait, Why?</strong><br><br>" +
        answer +
        "</div>";

    chatAnswer.style.display = "block";

    input.value = "";
}
       
   
       

   
    
       
// ==========================================
// 🎲 RANDOM QUESTION
// ==========================================

function randomQuestion() {

    const questions = [

        {
            question: "Why is the sky blue? 🌤️",
            url: "aticle-sky-blue.html"
        },

        {
            question: "Why doesn't the Moon fall? 🌙",
            url: "moon-fall.html"
        },

        {
            question: "Why do songs get stuck in our heads? 🎵",
            url: "songs.html"
        },

        {
            question: "Why does ice float on water? 🧊",
            url: "ice-float.html"
        },

        {
            question: "How does a rainbow form? 🌈",
            url: "raibow.html"
        },

        {
            question: "Why do stars twinkle? ✨",
            url: "stars-twinkle.html"
        },

        {
            question: "Why do we dream? 🌙",
            url: "why-dream.html"
        },

        {
            question: "Why do we get nervous? 🧠",
            url: "why-nervous.html"
        },

        {
            question: "How does the internet work? 💻",
            url: "how-internet-works.html"
        },

        {
            question: "Why do volcanoes form? 🌋",
            url: "volcanoes.html"
        },

        {
            question: "Why are some places so cold? ❄️",
            url: "places-cold.html"
        },

        {
            question: "How did people communicate before phones? 📜",
            url: "before-phones.html"
        }

    ];

    const randomIndex =
        Math.floor(Math.random() * questions.length);

    const selectedQuestion = questions[randomIndex];

    const box = document.getElementById("randomQuestion");

    box.innerHTML =
        "<h3>" + selectedQuestion.question + "</h3>" +
        "<a href='" + selectedQuestion.url + "'>" +
        "Discover the answer →" +
        "</a>";

    box.style.display = "block";
}
// ==========================================
// 🌟 QUESTION OF THE DAY
// ==========================================

function showQuestionOfTheDay() {

    const dailyQuestions = [

        {
            title: "Why does ice float on water? 🧊",
            description: "It seems strange that solid ice can float on liquid water. Here's why.",
            url: "ice-float.html"
        },

        {
            title: "Why do stars twinkle? ✨",
            description: "Stars don't actually flicker. Earth's atmosphere makes them appear to.",
            url: "stars-twinkle.html"
        },

        {
            title: "Why is the sky blue? 🌤️",
            description: "Sunlight contains many colours, but our atmosphere changes what we see.",
            url: "aticle-sky-blue.html"
        },

        {
            title: "Why do we dream? 🌙",
            description: "Our brains stay surprisingly active while we sleep.",
            url: "why-dream.html"
        },

        {
            title: "Why do volcanoes form? 🌋",
            description: "Volcanoes are not randomly scattered around Earth. Their locations have a reason.",
            url: "volcanoes.html"
        },

        {
            title: "How did people communicate before phones? 📜",
            description: "Long before smartphones, people had clever ways to send messages.",
            url: "before-phones.html"
        },

        {
            title: "Why don't oceans simply mix together? 🌊",
            description: "The oceans are connected, but several factors affect how their waters mix.",
            url: "oceans-mix.html"
        },

        {
            title: "Why are some places so cold? ❄️",
            description: "Latitude, altitude and other factors can make some parts of Earth much colder.",
            url: "places-cold.html"
        }

    ];

    // Use today's date to choose the same question throughout the day
    const today = new Date();

    const dayNumber =
        Math.floor(
            Date.UTC(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            ) / 86400000
        );

    const index = dayNumber % dailyQuestions.length;

    const question = dailyQuestions[index];

    document.getElementById("dailyTitle").textContent =
        question.title;

    document.getElementById("dailyDescription").textContent =
        question.description;

    document.getElementById("dailyLink").href =
        question.url;
}


// Run when the page loads
showQuestionOfTheDay();
