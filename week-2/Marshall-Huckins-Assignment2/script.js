/*
Marshall Huckins
Assignment 2
script.js
Richard Krasso
WEB-330
*/

function createCharacterObject(name, gender, characterClass) {
    return {
        getName: function() {
            return name;
        },
        getGender: function() {
            return gender;
        },
        getClass: function() {
            return characterClass;
        }
    };
}

function createCharacter() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const characterClass = document.getElementById('class').value;

    const character = createCharacterObject(name, gender, characterClass);

    document.getElementById('characterInfo').innerHTML = `
        <h2>Character Created!</h2>
        <p><strong>Name:</strong> ${character.getName()}</p>
        <p><strong>Gender:</strong> ${character.getGender()}</p>
        <p><strong>Class:</strong> ${character.getClass()}</p>
    `;
}