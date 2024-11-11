class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `L'età di ${this.firstName} è maggiore dell'età di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `L'età di ${otherUser.firstName} è maggiore dell'età di ${this.firstName}.`;
    } else {
      return `L'età di ${otherUser.firstName} è la stessa di ${this.firstName}.`;
    }
  }
}
let user1 = new User("Mario", "Rossi", 30, "Roma");
let user2 = new User("John", "Doe", 25, "New York");
console.log(user1.compareAge(user2));
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = []; // Array vuoto per memorizzare tutti gli oggetti Pet

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Previene il refresh della pagina
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  displayPets();
  // Reset del form
  document.getElementById("petForm").reset();
});

function displayPets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = ""; // Pulisce la lista per aggiornarla
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${pet.petName} è un/una ${pet.species} ${pet.breed} e il suo proprietario è ${pet.ownerName}.`;
    petList.appendChild(listItem);
  });
}
