// Gaming crew members list
const members = [
    "Skater",
    "Bongstonky",
    "CowEnchanter",
    "daviddevaull",
    "epic gamer skele",
    "hobob",
    "Jbrown",
    "MeinRya",
    "meowdrien",
    "Mustasho",
    "Neil5",
    "Peter",
    "QuaintGeorgeProductionsGayminFN",
    "Qusic Bot",
    "SoupB",
    "Sussus Amogus",
    "tstart",
    "Yoshininja",
    "ZaydenPlayz"
];

// Fact templates
const factTemplates = [
    "Did you know that [member] once completed an entire game without dying?",
    "Fun fact: [member] has a secret collection of vintage gaming controllers.",
    "According to legend, [member] can type 200 words per minute during intense gaming sessions.",
    "Surprisingly, [member] once slipped on a banana peel while gaming and still won the match!",
    "Did you know [member] holds the crew record for longest gaming marathon at 24 hours straight?",
    "A little-known fact: [member] has a lucky gaming sock that is never washed.",
    "Fascinating discovery: [member] can play games upside down with surprising accuracy.",
    "The crew historian notes that [member] once broke three keyboards in a single rage-quit.",
    "Gaming scientists confirm that [member] consumes exactly 2.7 energy drinks per gaming session.",
    "Secret documents reveal [member] practices gaming techniques in their sleep.",
    "Few people know [member] was actually born with a controller in hand.",
    "Statisticians note that [member] blinks 50% less than average while gaming.",
    "Archaeological evidence suggests [member] has never properly organized their cable management.",
    "Crew anthropologists discovered [member] has developed a unique gaming posture known as 'The Pretzel'.",
    "Shocking but true: [member] can identify any game just by hearing the startup sound."
];

// Generate a random daily member
function getDailyMember() {
    const startDate = new Date('2025-03-31'); // Start from today's date
    const currentDate = new Date();
    const diffDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    return members[diffDays % members.length];
}

// Generate a random fact about a member
function getRandomFact(member) {
    const randomTemplate = factTemplates[Math.floor(Math.random() * factTemplates.length)];
    return randomTemplate.replace('[member]', member);
}

// Check if it's time to update (8:00 AM CST)
function checkForDailyUpdate() {
    const now = new Date();
    // Convert to CST (UTC-6)
    const cstHour = (now.getUTCHours() - 6 + 24) % 24;
    const cstMinute = now.getUTCMinutes();
    
    // Update DOM if it's a new day or if the content hasn't been set yet
    const savedDate = localStorage.getItem('lastUpdateDate');
    const currentDate = now.toDateString();
    
    // Set member of the day
    const memberElement = document.getElementById('daily-member');
    if (memberElement) {
        memberElement.textContent = getDailyMember();
    }
    
    // Check if we should update the fact (if it's 8AM CST or if it's a new day or first load)
    if ((cstHour === 8 && cstMinute === 0) || savedDate !== currentDate || !localStorage.getItem('dailyFact')) {
        // Get random member and fact
        const member = getDailyMember();
        const fact = getRandomFact(member);
        
        // Update the DOM
        const factElement = document.getElementById('fun-fact-content');
        if (factElement) {
            factElement.textContent = fact;
        }
        
        // Save the date and fact
        localStorage.setItem('lastUpdateDate', currentDate);
        localStorage.setItem('dailyFact', fact);
    } else {
        // Load saved fact if it exists
        const savedFact = localStorage.getItem('dailyFact');
        const factElement = document.getElementById('fun-fact-content');
        if (factElement && savedFact) {
            factElement.textContent = savedFact;
        }
    }
}

// Run on page load and set timer to check every minute
document.addEventListener('DOMContentLoaded', () => {
    checkForDailyUpdate();
    // Check every minute if it's time to update
    setInterval(checkForDailyUpdate, 60000);
});
