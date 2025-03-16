const pipe = (...func) => (input) =>
    func.reduce((acc, f) => f(acc), input);

// Functions should return values instead of logging directly
const name = (x) => x; // Just returns the input
const place = (x) => x + " Sajipa"; // Adds place to input
const age = (x) => x + " 22"; // Adds age to input

const result = pipe(name, place, age);

console.log(result("Mausooq")); // ✅ "Mausooq Sajipa 22"
