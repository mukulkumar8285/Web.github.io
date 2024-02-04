
function calculateAge(birthday) {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthday).getFullYear();

    let age = currentYear - birthYear;

    if (new Date().getMonth() < new Date(birthday).getMonth() ||
        (new Date().getMonth() === new Date(birthday).getMonth() && new Date().getDate() < new Date(birthday).getDate())) {
        age--;
    }

    return age;
}

function handleButtonClick() {
    const ageElement = document.getElementById("age");
    const inputElement = document.getElementById("input");

    if (inputElement.value === "") {
        alert("Please Enter Your Birthday!!!");
    } else {
        const calculatedAge = calculateAge(inputElement.value);
        ageElement.innerHTML = calculatedAge;
    }
}

document.getElementById("button").addEventListener("click", handleButtonClick);



