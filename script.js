// script.js
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

function getDailyMember() {
    const startDate = new Date('2025-03-31'); // Start from today's date
    const currentDate = new Date();
    const diffDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    return members[diffDays % members.length];
}

document.addEventListener('DOMContentLoaded', () => {
    const memberElement = document.getElementById('daily-member');
    memberElement.textContent = getDailyMember();
});
