function unique(arr) {
/* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
function unique(arr) {
    return Array.from(new Set(arr));
}