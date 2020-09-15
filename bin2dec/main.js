const convertNumbers = () => {
    let binaryNumber = document.querySelector("#binary").value;
    document.querySelector("#decimal").value = parseInt(binaryNumber, 2);
};

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertNumbers();
    }
});

const deleteNumber = () => {
    document.querySelector("#binary").value = "";
    document.querySelector("#decimal").value = "";
};