// CRUD: Create Read Update Delete
// Alles wat je met data kan doen!

// Create
const years = [2020, 2021, 2022, 2023, 2024];
years.push(2025); // voeg toe aan het einde van de array
years.splice(0, 0, 2019); // Argumente: index, aantal te verwijderen items vanaf die index, nieuwe value
console.log("create", years);

// Read
const yearTwo = years[1];
console.log("Het tweede jaar is", yearTwo);

const lastIndex = years.length - 1;
const lastYear = years[lastIndex];
console.log("Het laatste jaar is", lastYear);

// Update
console.log(years, "we gaan nu het 3e jaar updaten!");
years[2] = 4003; // het 3e jaar staat op index nummer 2
console.log(years, "het derde jaar is geupdate!");

// Delete
years.pop(); // gooit de laatste value weg
console.log(years, "pop gooit het laatste jaar weg");

years.shift(); // gooit de eerste value weg
console.log(years, "shift gooit het eerste jaar weg");

years.splice(1, 1) // index, aantal items om weg te gooien vanaf die index
console.log(years, "splice verwijderde 1 value vanaf index 1");
