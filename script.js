// all labels (returns node list)
const labels = document.querySelectorAll(".form-control label");

// iterate through labels 
labels.forEach(label => {
    // in inner HTML of each label
    // split each letter of each label into array 
    // then map to give each letter its own span
    // span style has a transition delay which multiplies the index by 50ms
    // then join spans back into string
    label.innerHTML = label.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join("");
});