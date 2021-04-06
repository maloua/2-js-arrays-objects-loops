const students = ["Henk", "Piet", "Jan"];

// deze variable buiten de scope van de for loop
// zodat we hem na de for loop nog kunnen gebruiken! (regel 15)
let output = "";

for (let i = 0; i < students.length; i++) {
    console.log("Aan het begin van de for loop:", output);
    
    output = output + students[i];

    console.log("Aan het einde van de for loop:", output);
}

console.log("Na de for loop:", output);