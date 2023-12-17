// Create an array of characters with their names, images, and bios
var characters = [
    {
        name: "Finn",
        image: "Finn_Adventure.jpeg",// Source = https://adventuretime.fandom.com/wiki/Finn
        bio: "As a little child, Finn was adopted by Jake's parents, Joshua and Margaret. He was first thought to be the last human on Ooo following the \"Great Mushroom War,\" a shadowy struggle that took place a thousand years before the first episode of the series."
    },
    {
        name: "Jake",
        image: "Jake_Adventure.jpg",// Source = https://poohadventures.fandom.com/wiki/Jake_the_Dog
        bio: "Jake has the ability to stretch, contract, or mould any part of his body into practically any form and size, from enormous to minuscule. He mentors his vivacious adopted brother Finn the Human with assurance, despite his propensity for giving dubious advise."
    },
    {
        name: "Princess Bubblegum",
        image: "Princess_Adventure.jpg",// Source = https://www.bitchmedia.org/post/adventure-time-princess-bubblegum-rejecting-the-princess-narrative-feminist
        bio: "Princess Bubblegum is the Candy Element's present manifestation, like the people who live in the Candy Kingdom, who are all made of various sweets and candies. She is in charge of the Candy Kingdom."
    },
    {
        name: "Ice King",
        image: "IceKing_Adventure.png",// Source = https://www.deviantart.com/lmead/art/Ice-King-333618953
        bio: "The Ice King served as Adventure Time's primary nemesis in the past. Finn and Jake consistently stop him from doing his usual crime, which is to abduct a princess and force her to marry him. Ice King is his official title and he is the monarch of the Ice Kingdom."
    },
    {
        name: "BMO",
        image: "Beemo_Adventure.png",// Source = https://adventuretime.fandom.com/wiki/BMO
        bio: "BMO is a living prototype video game console system that Finn owns. It also functions as a portable electrical outlet, computer, music player,, video editor, camera, alarm clock, toaster, flashlight, strobe light, tape player, chef, detective, and friend."
    },
    {
        name: "Marceline",
        image: "Marceline_Adventure.jpg",// Source = https://atfanfic.fandom.com/wiki/Marceline_Abadeer
        bio: "One of the primary characters in Adventure Time is Marceline, the Vampire Queen, a half-demon, half-vampire who has been around for more than a millennium. Her full name is Marceline Abadeer."
    },
    // Add more characters here...
];

var nameOfCharacter = ""
var randomCharacter = ""

function gameSelect() {
    // Get a reference to the button and the character info div
    var characterInfo = document.getElementById("character-info");

    // Get a random index for the character array
    var index = Math.floor(Math.random() * characters.length);

    // Get the character at the selected index
    var character = characters[index];

    // Update the character info div with the character's name, image, and bio
    document.getElementById("character-name").innerHTML = character.name;
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-bio").innerHTML = character.bio;

    // Show the character info div
    characterInfo.style.display = "block";
    randomCharacter = character.name;
}

function showMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function changeImg() {
    document.getElementById("myImg").src = "JakeFinnChange.webp";
}

function revertImg() {
    document.getElementById("myImg").src = "JakeFinnOrginal.png";
}

function displayCharacter() {
    var characterInput = document.getElementById("characterInput").value;
    var display =  document.getElementById("displayArea")
    document.getElementById("displayArea").innerHTML = "<h3 class='Characterh3'>Your Favourite Character is:</h3>" + characterInput;
    display.style.display = "block";
    nameOfCharacter = characterInput;
}

function compareCharacters() {

    if (nameOfCharacter === randomCharacter) {
        alert("You win! The entered character and the random character match.");
    }
    else if (nameOfCharacter === "" || randomCharacter === ""){
        alert("You can not play yet!, make sure you have entered in a character name and selected a character")
    }
    else {
        alert("You lose! The entered character and the random character do not match.");
    }
}

function rateWebsite() {
    var rating = document.getElementById("WebsiteRating").value;
    if (rating >= 0 && rating < 3) {
        alert("We apologize for the poor experience you have had on our website. We will work on improving it.");
    } else if (rating >= 3 && rating < 6) {
        alert("Thank you for your feedback. We will try to improve the website to provide a better experience for you.");
    } else if (rating >= 6 && rating < 8) {
        alert("Thank you for your positive feedback. We will continue to work on improving our website to provide the best possible experience for our users.");
    } else if (rating >= 8 && rating <= 10) {
        alert("Wow, thank you for your glowing review of our website! We are thrilled that you are enjoying your experience on our website and will continue to strive for excellence.");
    }

}