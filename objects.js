// CRUD: Create Read Update Delete
// Alles wat je met data kan doen!

// Create
const teacher = {
    name: "Malou",
    age: 27,
    "d-o-b": new Date(1993, 10, 14) // Maanden beginnen bij 0, dus november is maand 10
}

teacher.city = "Leiden"; // punt notatie
teacher["moeilijke-naam"] = "Goed voorbeeld man"; // blokhaken notatie

console.log(teacher);

// Read
console.log(`Hi, my name is ${teacher.name}`); // punt notatie (en interpolatie)
console.log("Dit is mijn geboortedatum:", teacher["d-o-b"]); // blokhaken notatie

// Update
teacher.name = "Rein";
console.log(teacher.name);

// Delete
delete teacher.age; // punt notatie
delete teacher['moeilijke-naam']; // blokhaken notatie

console.log(teacher);