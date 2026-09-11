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

    if (!input) {
        alert("Chat input not found!");
        return;
    }

    const question = input.value.trim().toLowerCase();

    if (question === "") {
        alert("Ask me something you're curious about!");
        return;
    }

    if (question === "") {
        alert("Ask me something you're curious about!");
        return;
    }

    let answer = "";


    // ==========================
    // 🔬 SCIENCE
    // ==========================

    if (
        question.includes("sky") &&
        question.includes("blue")
    ) {

        answer =
            "The sky looks blue because sunlight passes through Earth's atmosphere. " +
            "Blue light is scattered more strongly than most other colours, " +
            "so more blue light reaches our eyes from different parts of the sky.";

    }


    else if (
        question.includes("ice") &&
        question.includes("float")
    ) {

        answer =
            "Ice floats because solid water is less dense than liquid water. " +
            "When water freezes, its molecules arrange themselves into a structure " +
            "that takes up more space.";

    }


    else if (
        question.includes("rainbow") ||
        question.includes("rainbows")
    ) {

        answer =
            "A rainbow forms when sunlight enters tiny water droplets. " +
            "The light bends, reflects inside the droplet and separates into " +
            "different colours.";

    }


    else if (
        question.includes("static") ||
        question.includes("electric shock")
    ) {

        answer =
            "Static shocks happen when electric charge builds up on your body " +
            "and suddenly moves to another object. That quick movement of charge " +
            "can produce a tiny shock.";

    }


    else if (
        question.includes("plant") &&
        (
            question.includes("up") ||
            question.includes("grow")
        )
    ) {

        answer =
            "Plants sense gravity. Their roots usually grow downward because of " +
            "gravitropism, while shoots generally grow upward toward light. " +
            "Plant hormones help control this growth.";

    }


    else if (
        question.includes("fire") &&
        question.includes("oxygen")
    ) {

        answer =
            "Fire needs oxygen because burning is a chemical reaction called " +
            "combustion. Oxygen helps the fuel continue reacting and releasing energy.";

    }


    // ==========================
    // 🌌 SPACE
    // ==========================

    else if (
        question.includes("star") &&
        question.includes("twinkle")
    ) {

        answer =
            "Stars appear to twinkle because their light passes through Earth's " +
            "moving atmosphere. Different layers of air bend the light slightly, " +
            "making the star's brightness appear to change.";

    }


    else if (
        question.includes("black hole")
    ) {

        answer =
            "A black hole is a region of space where gravity is extremely strong. " +
            "Once something passes the event horizon, it cannot escape back out.";

    }


    else if (
        question.includes("sun") &&
        question.includes("hot")
    ) {

        answer =
            "The Sun is extremely hot because its core undergoes nuclear fusion. " +
            "Hydrogen nuclei combine to form helium and release enormous amounts of energy.";

    }


    else if (
        question.includes("earth") &&
        (
            question.includes("moving") ||
            question.includes("move")
        )
    ) {

        answer =
            "We don't normally feel Earth moving because we, the atmosphere and " +
            "everything around us are moving together with Earth. We mainly notice " +
            "changes in motion rather than smooth constant motion.";

    }


    else if (
        question.includes("moon") &&
        (
            question.includes("fall") ||
            question.includes("without")
        )
    ) {

        answer =
            "The Moon stays in orbit because Earth's gravity pulls it toward Earth " +
            "while its forward motion carries it around Earth. Without the Moon, " +
            "Earth's tides and some natural rhythms would change.";

    }


    // ==========================
    // 🧠 PSYCHOLOGY
    // ==========================

    else if (
        question.includes("dream") ||
        question.includes("dreams")
    ) {

        answer =
            "Dreams are experiences created by the brain during sleep. Scientists " +
            "think they may be connected with memory, emotions and brain activity " +
            "during sleep.";

    }


    else if (
        question.includes("forget") ||
        question.includes("memory")
    ) {

        answer =
            "We forget things for many reasons. Information may not have been stored " +
            "strongly, memories can become harder to retrieve, or new information " +
            "can interfere with older memories.";

    }


    else if (
        question.includes("deja vu") ||
        question.includes("déjà vu")
    ) {

        answer =
            "Déjà vu is the strange feeling that you have experienced a situation " +
            "before even though you know it is happening now. It may be related " +
            "to how the brain processes familiarity and memory.";

    }


    else if (
        question.includes("sleepy") ||
        question.includes("sleep")
    ) {

        answer =
            "Feeling sleepy is influenced by your body's internal clock and by " +
            "sleep pressure that builds while you stay awake. Together, these " +
            "signals help regulate when your body feels ready for sleep.";

    }


    else if (
        question.includes("nervous")
    ) {

        answer =
            "We can feel nervous when the brain thinks something important or " +
            "challenging is happening. The body's stress response can increase " +
            "alertness and cause sensations such as a faster heartbeat.";

    }


    // ==========================
    // 💻 TECHNOLOGY
    // ==========================

    else if (
        question.includes("phone") &&
        (
            question.includes("location") ||
            question.includes("where")
        )
    ) {

        answer =
            "Your phone can estimate your location using technologies such as GPS, " +
            "Wi-Fi networks and mobile towers. GPS uses signals from satellites " +
            "to help calculate where the phone is.";

    }


    else if (
        question.includes("internet")
    ) {

        answer =
            "The internet is a huge network of connected computers and devices. " +
            "When you open a website, your device sends and receives data through " +
            "networks using agreed communication rules called protocols.";

    }


    else if (
        question.includes("robot") ||
        question.includes("robots")
    ) {

        answer =
            "Robots follow instructions provided by their software and use sensors " +
            "to understand their surroundings. Their programs tell them how to " +
            "respond to different inputs.";

    }


    else if (
        question.includes("artificial intelligence") ||
        question.includes("ai")
    ) {

        answer =
            "Many AI systems learn patterns from large amounts of data. During " +
            "training, the system adjusts its internal parameters so that its " +
            "predictions become better at the task it is learning.";

    }


    else if (
        question.includes("password")
    ) {

        answer =
            "Passwords help protect information by acting as a secret used to verify " +
            "that someone is allowed to access an account. Strong security can also " +
            "use password hashing and multi-factor authentication.";

    }


    else if (
        question.includes("cloud")
    ) {

        answer =
            "The 'cloud' doesn't mean your files are floating in the sky. It usually " +
            "refers to computers and servers in data centres that store data and " +
            "run services over the internet.";

    }


    // ==========================
    // 🌍 WORLD
    // ==========================

    else if (
        question.includes("time zone") ||
        question.includes("time zones")
    ) {

        answer =
            "Earth rotates, so different parts of the planet face the Sun at " +
            "different times. Time zones help regions keep local times that " +
            "roughly match their position relative to the Sun.";

    }


    else if (
        question.includes("country") &&
        question.includes("shape")
    ) {

        answer =
            "Countries have different shapes because their borders were created " +
            "through history by geography, wars, treaties, political decisions " +
            "and the movement of people.";

    }


    else if (
        question.includes("ocean") ||
        question.includes("oceans")
    ) {

        answer =
            "The oceans are connected, so their waters do mix. However, differences " +
            "in temperature, salinity, density and currents can make some water " +
            "masses mix slowly.";

    }


    else if (
        question.includes("cold") &&
        (
            question.includes("place") ||
            question.includes("places")
        )
    ) {

        answer =
            "Some places are colder because they receive less direct sunlight. " +
            "Latitude, altitude, distance from oceans and winds also affect temperature.";

    }


    else if (
        question.includes("volcano") ||
        question.includes("volcanoes")
    ) {

        answer =
            "Volcanoes are often found near tectonic plate boundaries, where plates " +
            "move apart, collide or one plate moves beneath another. Some volcanoes " +
            "also form over hotspots.";

    }


    else if (
        question.includes("desert") ||
        question.includes("deserts")
    ) {

        answer =
            "Deserts form when an area receives very little precipitation. This can " +
            "happen because of global air circulation, mountains, distance from " +
            "moisture sources or cold ocean currents.";

    }


    // ==========================
    // 🏛️ HISTORY
    // ==========================

    else if (
        question.includes("pyramid") ||
        question.includes("pyramids")
    ) {

        answer =
            "Ancient civilizations built pyramids for important purposes, especially " +
            "as monumental structures and tombs. Their construction also showed the " +
            "organization and engineering skills of these societies.";

    }


    else if (
        question.includes("printing press")
    ) {

        answer =
            "The printing press made it much faster and cheaper to produce books " +
            "and written material. This helped ideas, information and education " +
            "spread to many more people.";

    }


    else if (
        question.includes("castle") &&
        question.includes("moat")
    ) {

        answer =
            "Moats could make castles harder to attack. A deep ditch, sometimes " +
            "filled with water, made it more difficult for attackers to reach " +
            "the castle walls.";

    }


    else if (
        question.includes("historian") ||
        question.includes("historians") ||
        question.includes("past")
    ) {

        answer =
            "Historians study evidence left behind by people in the past. They use " +
            "written records, objects, buildings, archaeological discoveries and " +
            "other evidence to understand what happened.";

    }


    else {

        answer =
            "Hmm... 🤔 I don't have an answer for that question yet.\n\n" +
            "Try asking me about Science, Space, Psychology, Technology, " +
            "World or History!";

    }


    const chatAnswer = document.getElementById("chatAnswer");

chatAnswer.innerHTML =
    "<strong>🤖 Wait, Why?</strong><br><br>" +
    answer;

chatAnswer.style.display = "block";

input.value = "";
    
}
