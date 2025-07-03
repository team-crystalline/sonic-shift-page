/**
 * Makes a string proper case.
 * @param {String} str 
 */
export function toProperCase(str){
    return str.substr(0,1).toUpperCase()+str.substr(1, str.length -1).toLowerCase();
}

export const mainStoryLine = [
    "Dr.Eggman is up to no good again! This time, he's built a giant drilling machine that bores holes into spacetime itself, letting him sap the resources from anytime and anywhere he pleases.",
    "Like any mining operation, it's not exactly clean. In fact, it leaves a lot of a waste product called phase matter all over the place. This waste, when exposed to it, can cause someone to fall into a different time or a different universe.",
    "You happened to be a part of a one-in-a-billion chance freak accident, where this stuff ended up on you. Now you're stuck in some weird void, and being asked a few questions."
]

/**
 * The data for the characters in the game.
 * @type {Array}
 * @property {String} name The character's full name.
 * @property {String} shortName The character's nickname.
 * @property {String} url The characarchetype: null,ter's URL.
 * @property {String} ability The character's main ability.
 * @property {String} alignment The character's alignment.
 * @property {String} icon The character's icon file path.
 * @property {Boolean} playable Whether the character is playable or not.
 * @property {String} plotBio The character's plot bio, if playable.
 * @property {String} charBio The character's bio that introduces their character in general.
 */
export const charactersData = [
    {
        name: "Sonic the Hedgehog", 
        shortName: "Sonic",
        url: "sonic",
        ability: "Speed",
        alignment: "Chaotic Good",
        icon: "/images/characters/sonic.png",
        playable: true,
        archetype: "Adventurous",
        plotBio: [
            "So... you're Sonic now. It's strange, it's new, it's a lot to take in, but that's just how you like it. You enjoy going where the wind takes you? Well, it's taken you to a different world entirely this time.",
            "According to your new buddy Tails, you ended up here because Dr. Eggman has been drilling holes in the spacetime continuum, and one of those holes pulled you in. And sure, you might be a bit stumped that you're now a hedgehog, but you've faced tougher challenges before. Probably.", 
            "Don't sweat it; you'll find your way and show that egghead just what you're made of! But time's ticking! More of those holes have been popping up, and letting them get worse is a really, really bad idea. So let's get going!"
        ],
        charBio: [
            "Sonic is famous for his incredible speed.",
        ],
        defaultAbility: {name: "Somersault", description: "You curl into a ball and roll forward, smashing weak obstacles and sliding under narrow gaps."},
        unlockableAbilities: [
            {name: "Spin Dash", description: "You curl into a ball and spin in place, building up speed before launching yourself forward. Excellent for smashing through enemies and obstacles, as well as giving yourself a quick boost of speed."},
            {name: "Homing Attack", description: "You lock onto an enemy and launch yourself at them, dealing damage and bouncing off of them. This is a great way to take out enemies quickly and reach higher places."},
            {name: "Sonic Boom", description: "With a powerful burst of speed, you go from 0 to Mach 1 instantly, with rings as your fuel. When you're out of rings, you'll slow down, so make sure to keep collecting them!"},
            {name: "Light Speed Dash", description: "You can run along a path of rings at the speed of light, allowing you to cross large gaps and reach new areas."}
        ]
    },
    {
        name: "Miles \"Tails\" Prower", 
        shortName: "Tails",
        url: "tails",
        ability: "Flight",
        alignment: "Neutral Good",
        icon: "/images/characters/tails.png",
        playable: true,
        plotBio:[
            "You want to fly high, and you want to be by your friends' sides. No matter what, you know that they'll be by your side, too.",
            "After a seemingly rough landing with the Tornado, you wake up on the shore with Sonic rushing over. 'Oh geez! Tails, buddy, are you okay?' It became pretty obvious at that point that you weren't exactly yourself anymore.",
            "But that's ok! You have your fox-like intelligence on your side, and you'll find a way to outsmart Doctor Eggman and get back home."
        ],
        archetype: "Loyal",
        charBio: [
            "Tails is a young fox with two tails that he can use to fly. He is a skilled inventor and mechanic who is always eager to help his friends. Tails is known for his intelligence and resourcefulness, often using his technical skills to assist Sonic in his adventures. He is a loyal friend and a valuable member of the team."
        ],
        defaultAbility: {name: "Tail Whip", description: "You can use your two tails to attack enemies and break obstacles."},
        unlockableAbilities: [
            {name: "Double Jump", description: "You can jump a second time in mid-air, allowing you to reach higher places and avoid obstacles."},
            {name: "Flight", description: "You can use your two tails like a helicopter to fly for a short period of time, allowing you to reach high places and avoid obstacles."},
            {name: "Tornado Spin", description: "Use a funnel of air to gain vertical momentum, allowing you to reach high places and avoid obstacles."},
            {name: "Hacker", description: "You can hack into Dr.Eggman's machines and systems, allowing you to access new areas and disable security measures."}
        ]
    },
    {
        name: "Knuckles the Echidna", 
        shortName: "Knuckles",
        url: "knuckles",
        ability: "Power",
        alignment: "Neutral Good",
        icon: "/images/characters/knuckles.png",
        playable: true,
        plotBio: ["in the Mystic Ruins."],
        archetype: "Protective",
        charBio: ["Knuckles is the last echidna, and he serves as the guardian of the Master Emerald. He is strong and determined, with the abiliy to glide and climb walls. Knuckles is serious and focused, often preferring to work alone rather than with others. He is fiercely loyal to his duty as the protector of the Master Emerald and will do whatever it takes to keep it safe."],
        defaultAbility: {name: "Punch", description: "You can use your powerful fists to attack enemies and break obstacles."},
        unlockableAbilities: [
            {name: "Climb", description: "You can climb walls and other surfaces, giving you access to new areas and shortcuts. This is a useful ability for navigating the environment and avoiding obstacles."},
            {name: "Glide", description: "You can glide through the air, allowing you to reach new heights and cross large gaps. This is a great way to explore the world and find hidden secrets."},
            {name: "Dig", description: "You can dig into the ground to uncover hidden items and pathways. This is a great way to find hidden secrets and collect valuable resources."},
            {name: "Emerald Chakra", description: "You can use the power of the Master Emerald to gain temporary invincibility and increased strength. This ability has a long cooldown. This is a great way to take out tough enemies and overcome obstacles."}
        ]
    },
    {
        name: "Amy Rose the Hedgehog", 
        shortName: "Amy",
        url: "amy",
        ability: "Speed",
        alignment: "Neutral Good",
        icon: "/images/characters/amy.png",
        playable: true,
        plotBio: ["in Station Square."],
        archetype: "Sweet",
        charBio: ["Amy is a pink hedgehog who is known for her cheerful and optimistic personality. She is kind-hearted and caring, always looking out for her friends. Amy is also a skilled fighter, using her Piko Piko Hammer to defend herself and others. She is fiercely independent and determined, never backing down from a challenge."],
        defaultAbility: {name: "Hammer Swing", description: "You can use your Piko Piko Hammer to attack enemies and break obstacles."},
        unlockableAbilities: [
            {name: "Hammer Jump", description: "You can use your Piko Piko Hammer to perform a powerful jump, allowing you to reach high places and avoid obstacles."},
            {name: "Spin Attack", description: "You can spin your Piko Piko Hammer around you, hitting enemies in all directions. This is a great way to take out multiple enemies at once."},
            {name: "Tarot Flip", description: "One random effect will occur, which could help or harm you. This ability has a long cooldown."},
            {name: "Lovestruck", description: "You can blind enemies with a bright pink light, stunning them and making them vulnerable to attacks. This is a great way to take out tough enemies and turn the tide of battle in your favor."}
        ]
    },
    {
        name: "Shadow the Hedgehog", 
        shortName: "Shadow",
        url: "shadow",
        ability: "Power",
        alignment: "Chaotic Neutral",
        icon: "/images/characters/shadow.png",
        playable: true,
        plotBio: ["in the strange hallways of the Space Colony ARK."],
        archetype: "Fearless",
        charBio: ["Shadow is a black hedgehog created by Dr. Eggman's grandfather, Gerald Robotnik. He is a powerful and skilled fighter with the ability to use Chaos Control. He is mysterious and brooding, with a tragic past that haunts him. Despite his dark nature, Shadow has a sense of honor and will fight to protect those he cares about."],
        defaultAbility: {name: "Chaos Spear", description: "You can fire energy spears at enemies, dealing damage and knocking them back."},
        unlockableAbilities: [
            {name: "Chaos Control", description: "Harnessing the power of a Chaos Emerald, you can slow down time and move quickly through obstacles, giving an illustion of teleportation."},
            {name: "Absolute Chaos", description: "For a brief period of time, you drop your inhibitor rings and go all out in power and speed. Be mindful of how long you use this ability, because you may burn up into ash if you use it for too long."},
            // {name: "Doom ", description: ""}
        ]
    },
    {
        name: "Rouge the Bat", 
        shortName: "Rouge",
        url: "rouge",
        ability: "Stealth",
        alignment: "True Neutral",
        icon: "/images/characters/rouge.png",
        playable: true,
        plotBio: ["in the dark alleys of Central City."],
        archetype: "Cunning",
        charBio: ["Rouge is a white bat who works as a government spy and treasure hunter. She is confident and flirtatious, using her charm and intelligence to get what she wants. Rouge is skilled in combat and acrobatics, often using her agility to outmaneuver her enemies. She loves jewels and gems. All the world's gems are hers to keep!"],
        defaultAbility: {name: "Heel Kick", description: "Use your stiletto heels to attack enemies and break weak obstacles."},
        unlockableAbilities: [
            {name: "Glide", description: "Your bat wings allow you to glide through the air, giving you access to new areas and shortcuts. This is a useful ability for navigating the environment and avoiding obstacles."},
            {name: "Incognito Mode", description: "For a brief period of time, you can turn invisible, allowing you to sneak past enemies and avoid detection."},
            {name: "X-Ray", description: "You can see through walls and other obstacles, revealing hidden treasures and secrets."},
        ]
    },
    {
        name: "Dr.Eggman", 
        shortName: "Eggman",
        url: "eggman",
        ability: "Chaos",
        alignment: "Chaotic Evil",
        icon: "/images/characters/eggman.png",
        playable: false,
        plotBio: ["in the Egg Carrier."],
        archetype: null,
        charBio: [
            "Dr.Eggman is a mad scientist and the main antagonist of the Sonic series. He is obsessed with world domination and will stop at nothing to achieve his goals and squash that annoying blue hedgehog. Eggman is a genius inventor and engineer, creating all sorts of robots and machines to aid him in his schemes.",
            "This time, Dr.Eggman has constructed a massive machine designed to pierce through other universes and timelines in order to gather resources for his world domination plans. Unbeknownst to him, the machine has not only altered reality for those in his immediate surroundings, but the core of the machine is beginning to malfunction, threatening to irreparably jumble every universe and timeline.", 
            "That is... unless someone can shut it down?"
        ],
        defaultAbility: null,
        unlockableAbilities: null
    },
    {
        name: "Silver the Hedgehog", 
        shortName: "Silver",
        url: "silver",
        ability: "Psychic",
        alignment: "Lawful Good",
        icon: "/images/characters/silver.png",
        playable: false,
        plotBio: ["Silver is an NPC and will not have a plot bio."],
        archetype: null,
        charBio: ["Silver is a hedgehog from the future who has the ability to manipulate psychic energy. He is a kind-hearted and compassionate individual who is always willing to help those in need. Silver is a skilled fighter and uses his psychic powers to protect the innocent and fight against evil. He is determined and focused, never giving up on his mission to create a better future for all."],
        defaultAbility: null,
        unlockableAbilities: null
    },
    {
        name: "Blaze the Cat", 
        shortName: "Blaze",
        url: "blaze",
        ability: "Combat",
        alignment: "Lawful Good",
        icon: "/images/characters/blaze.png",
        playable: false,
        plotBio: ["Blaze is an NPC and will not have a plot bio."],
        archetype: null,
        charBio: ["Blaze is a princess from another dimension who has the ability to control fire. She is calm and collected, with a strong sense of duty and honor. Blaze is a skilled fighter and uses her fire powers to protect her kingdom and her friends. She is fiercely independent and will do whatever it takes to achieve her goals. Blaze is also known for her leadership skills and her ability to remain calm in even the most dire situations."],
        defaultAbility: null,
        unlockableAbilities: null
    },
    {
        name: "Cream the Rabbit", 
        shortName: "Cream",
        url: "cream",
        ability: "Support",
        alignment: "Lawful Good",
        icon: "/images/characters/cream.png",
        playable: false,
        plotBio: ["Cream is an NPC and will not have a plot bio."],
        archetype: null,
        charBio: [
            "Cream is a young rabbit who is always accompanied by her Chao friend, Cheese. She is a kind-hearted and polite, and is always willing to help others. Rather than adventuring and fighting, Cream spends her days helping her mother at Bunny Burrow Chao Rescue Center in the city.",
            "You can donate your rings to Bunny Burrow Chao Rescue Center. Doing so allows them to give more items, food and care for their Chao."
        ],
        defaultAbility: null,
        unlockableAbilities: null
    },
];
export const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const shuffleQuestions = (questions) => {
    // Find the first question. That one will always be first!
    const question1 = questions.find(q => q.id === 1);
    const remainingQuestions = questions.filter(q => q.id !== 1);
    const shuffledRemaining = shuffleArray(remainingQuestions);
    let pickedQs = [];
    for (let i = 0; i < 7; i++) {
        pickedQs.push(shuffledRemaining[i])
       }
       return [question1, ...pickedQs]
    // return [question1, ...shuffledRemaining];
};

export const zoneInfo=[
    {
        name: "Rolling Hills Zone",
        description: "The first zone in the game, inspired by farmlands. It is a grassy area with rolling hills and windmills. The zone is home to the first boss.",
        // collectibles:[
        //     {name: "Rings", number: 200},
        //     {name: "Stray Chao", number: 3}
        // ]
    },
    {
        name: "Urban Zone",
        description: "The name is not final. This zone is inspired by a city, with skyscrapers and other urban elements. The zone is the prelude to the hub world, where players can roam freely and interact with the citizens.",
        // collectibles:[
        //     {name: "Rings", number: 200},
        //     {name: "Stray Chao", number: 2}
        // ]
    },
    {
        name: "Industrial District",
        description: "The name is not final. This zone is inspired by factories and industrial areas.",
        // collectibles:[
        //     {name: "Rings", number: 100},
        //     {name: "Stray Chao", number: 2}
        // ]
    },
    {
        name: "Casino Zone",
        description: "The name is not final. This zone is inspired by casinos and gambling. It is a colorful and vibrant area with slot machines and other games.",
        // collectibles:[
        //     {name: "Rings", number: 200},
        //     {name: "Stray Chao", number: 3}
        // ]
    },
    {
        name: "Spooky Zone",
        description: "The name is not final. This zone is inspired by haunted houses and spooky themes. It is a dark and eerie area with ghosts and other supernatural elements.",
        // collectibles:[
        //     {name: "Rings", number: 100},
        //     {name: "Stray Chao", number: 2}
        // ]
    },
    {
        name: "Pinesylvania Zone",
        description: "This zone is inspired by Pennsylvania, where the developer lives. At the base, it is a dense boreal forest (unlike Pennsylvania), but as you ascend, it becomes a snowy mountain.",
        // collectibles:[
        //     {name: "Rings", number: 200},
        //     {name: "Stray Chao", number: 3}
        // ]
    },
    {
        name: "Egg Vulture",
        description: "This zone is atop Eggman's airship, where the final boss battle takes place.",
        // collectibles:[
        //     {name: "Rings", number: 10},
        //     {name: "Stray Chao", number: 2}
        // ]
    }
]

export const otherLocations=[
    {
        name: "Hub World",
        description: "The hub world is a central location where players can interact with NPCs, access different zones, and complete side quests.",
        notableLocations:[
            "Bunny Burrow Chao Rescue Center",
            "Shops",
            "Metro Station",
            "Amy's Apartment",
            "Tails' Workshop",
            "Shadow and Rouge's Apartment",
            "Master Emerald Shrine"
        ]
    },
    {
        name: "Special Zones",
        description: "Special zones are hidden areas that contain unique challenges and rewards.",
        notableLocations:null
    }
]

let sonic = 'Sonic the Hedgehog';
let tails = 'Miles "Tails" Prower';
let knuckles = 'Knuckles the Echidna';
let shadow = 'Shadow the Hedgehog';
let amy = 'Amy Rose the Hedgehog';
let rouge = 'Rouge the Bat';

export const questions = [
    { id: 1, text: "Let's start off easy: Pick a color.", options: [
        // Easy first question to keep ties to a minimum.
        {answer: "Blue", increment:[sonic]},
        {answer: "Yellow", increment:[tails]},
        {answer: "Red", increment:[knuckles]},
        {answer: "Black", increment:[shadow]},
        {answer: "Pink", increment:[amy]},
        {answer: "Purple", increment:[rouge]},
    ] },
    { id: 2, text: "Do you work alone or in a team?", options: [
        {answer: "I work alone.", increment:[shadow, knuckles, rouge]}, 
        {answer: "In a team!", increment:[sonic, tails, amy]}] 
    },
    { id: 3, text: "How do you handle new situations?", options: [
        {answer: "I'll take it slow.", increment:[shadow, knuckles, rouge]}, 
        {answer: "Go fast and break stuff!", increment:[sonic, tails, amy]}
    ] },
    { id: 4, text: "Pick a super power.", options: [
        {answer: "Super speed", increment:[sonic, shadow]}, 
        {answer: "Flight", increment:[tails, rouge]},
        {answer: "Super strength", increment:[knuckles, amy]},
        {answer: "Super intelligence", increment:[rouge]}, // Rouge is a double increment here because both abilities apply to her tbh
    ] },
    { id: 5, text: "If you could live anywhere right now, where would you live?", options: [
        {answer: "Wherever I find myself.", increment:[sonic]}, 
        {answer: "In my workshop.", increment:[tails]},
        {answer: "In the mountains.", increment:[knuckles]},
        {answer: "In a big city.", increment:[amy]},
        {answer: "In a secret base.", increment:[shadow]},
        {answer: "In the shadows.", increment:[rouge]}
    ] },
    {
        id: 6,
        text: "What is your favorite season?",
        options: [
            { answer: "Winter", increment: [knuckles] },
            { answer: "Spring", increment: [amy, tails] },
            { answer: "Summer", increment: [sonic] },
            { answer: "Autumn", increment: [shadow, rouge] },
        ]
    },
    { 
        id: 7, 
        text: "What's your ideal way to spend a day off?", 
        options: [
            {answer: "Racing through the hills!", increment:[sonic]},
            {answer: "Building something cool!", increment:[tails]},
            {answer: "Training to be the best.", increment:[knuckles]},
            {answer: "Relaxing with a good book!", increment:[amy]},
            {answer: "Exploring the unknown.", increment:[shadow]},
            {answer: "Shopping for the latest fashion!", increment:[rouge]},
        ] 
    },
    { 
        id: 8, 
        text: "What's your favorite type of music?", 
        options: [
            {answer: "Rock", increment:[sonic]},
            {answer: "Electronic", increment:[tails]},
            {answer: "Reggae", increment:[knuckles]},
            {answer: "Pop", increment:[amy]},
            {answer: "Metal", increment:[shadow]},
            {answer: "Jazz", increment:[rouge]},
        ] 
    },
    { 
        id: 9, 
        text: "You find a wallet on the ground! What do you do?", 
        options: [
            {answer: "Take it to the nearest lost and found!", increment:[tails, knuckles]},
            {answer: "Look for the owner nearby!", increment:[sonic, amy]},
            {answer: "Leave it where it is. Not my problem.", increment:[shadow]},
            {answer: "Finders, Keepers.", increment:[rouge]},
        ] 
    },
    { 
        id: 10, 
        text: "You spend your free time…", 
        options: [
            {answer: "…Collecting.", increment:[rouge]},
            {answer: "…Making new things.", increment:[tails]},
            {answer: "…Alone.", increment:[shadow, knuckles]},
            {answer: "…With friends", increment:[sonic, amy]},
        ] 
    },
    { 
        id: 11, 
        text: "If you had a chao, what alignment would it be?", 
        options: [
            {answer: "Hero", increment:[sonic, tails]},
            {answer: "Neutral", increment:[knuckles, amy]},
            {answer: "Dark", increment:[shadow, rouge]},
        ] 
    },
    { 
        id: 12, 
        text: "What time of day is the best to you?", 
        options: [
            {answer: "Morning", increment:[amy, tails]},
            {answer: "Afternoon", increment:[knuckles, sonic]},
            {answer: "Night", increment:[shadow, rouge]},
        ] 
    },
    { 
        id: 13, 
        text: "How do you typically handle stressful situations?", 
        options: [
            {answer: "Stay calm and calculate my next move", increment:[rouge]},
            {answer: "Talk it out with someone", increment:[tails]},
            {answer: "Talk it out with my fists", increment:[knuckles, amy, shadow]},
            {answer: "Dive right in and tackle it head-on", increment:[sonic]},
        ] 
    },
];