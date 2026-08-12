function generateSecretSantaPairs(arr) {
    const shuffledArr = [...arr];

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    const secretSantaPairs = {};

    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        let secretSantaIndex = (i + 1) % arr.length;

        if (shuffledArr[secretSantaIndex] === person) {
            secretSantaIndex = (secretSantaIndex + 1) % arr.length;
        }

        const secretSanta = shuffledArr[secretSantaIndex];
        secretSantaPairs[person] = secretSanta;
    }

    return secretSantaPairs;
}

const people = ["Price", "Simon", "Soap", "Gaz", "Roach", "Joseph", "Nikolai", "Yuri"];
const pairs = generateSecretSantaPairs(people);

console.log(pairs);

const pairsContainer = document.getElementById("person");
const peopleContainer = document.getElementById("secretSanta");

for (const person in pairs) {
    const pairElement = document.createElement("li");
    pairElement.textContent = person;

    const personElement = document.createElement("li");
    personElement.textContent = pairs[person];
    
    pairsContainer.appendChild(pairElement);
    peopleContainer.appendChild(personElement);
}
