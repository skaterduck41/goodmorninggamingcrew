// Gaming crew members list
const members = [
    "Skater", "Bongstonky", "CowEnchanter", "daviddevaull", "epic gamer skele", 
    "hobob", "Jbrown", "MeinRya", "meowdrien", "Mustasho", "Neil5", "Peter", 
    "QuaintGeorgeProductionsGayminFN", "Qusic Bot", "SoupB", "Sussus Amogus", 
    "tstart", "Yoshininja", "ZaydenPlayz"
];

// Simple fact templates
const factTemplates = [
    "[member] once completed an entire game without dying!",
    "[member] has a secret collection of vintage gaming controllers.",
    "[member] can type 200 words per minute during intense gaming sessions.",
    "[member] once slipped on a banana peel while gaming and still won!",
    "[member] holds the crew record for longest gaming marathon at 24 hours.",
    "[member] has a lucky gaming cum sock that is never washed.",
    "[member] can play games upside down with surprising accuracy.",
    "[member] once broke three keyboards in a single rage-quit.",
    "[member] sweats enough in one gaming session to quench a small village in Africa of their thirst."
    "[member] consumes exactly 2.7 bags of hot chips per gaming session."
];

// Immediately display a random fact on page load
document.addEventListener('DOMContentLoaded', function() {
    // Select a random member
    const randomMember = members[Math.floor(Math.random() * members.length)];
    
    // Select a random fact template
    const randomTemplate = factTemplates[Math.floor(Math.random() * factTemplates.length)];
    
    // Create the fact by inserting the member name
    const fact = randomTemplate.replace('[member]', randomMember);
    
    // Update the element on the page
    const factElement = document.getElementById('fun-fact-content');
    if (factElement) {
        factElement.textContent = "Did you know? " + fact;
    }
    
    // Update member of the day
    const memberElement = document.getElementById('daily-member');
    if (memberElement) {
        memberElement.textContent = randomMember;
    }
});
