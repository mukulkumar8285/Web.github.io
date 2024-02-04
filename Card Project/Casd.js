const storeinformation = localStorage.getItem("userInformation");

if (storeinformation) {
    console.log(storeinformation);
    const data = JSON.parse(storeinformation);
    console.log(data);

    document.getElementById("firstName").textContent = data.firstname;
    document.getElementById("lastname").textContent = data.lastname;
    document.getElementById("country").textContent = data.country;
    document.getElementById("phone").textContent = data.phone;
    document.getElementById("state").textContent = data.state;
    document.getElementById("city").textContent = data.city;
    document.getElementById("village").textContent = data.village;
}
else {
    printinformation();
}


function printinformation() {
    const firstname = prompt("Enter Your First Name");
    const lastname = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phone = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");



    const data = {
        firstname,
        lastname,
        country,
        phone,
        state,
        city,
        village
    };

    localStorage.setItem("userInformation", JSON.stringify(data));


    document.getElementById("firstName").textContent = data.firstname;
    document.getElementById("lastname").textContent = data.lastname;
    document.getElementById("country").textContent = data.country;
    document.getElementById("phone").textContent = data.phone;
    document.getElementById("state").textContent = data.state;
    document.getElementById("city").textContent = data.city;
    document.getElementById("village").textContent = data.village;

}

   