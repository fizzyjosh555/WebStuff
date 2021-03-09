function validateForm(){
    document.getElementById("errorMessages").innerText = "";

    //Step 1: Initialize false statuses
    let validFirstName = false;
    let validLastName = false;
    let validEmail = false;
    let validPhone = false;
    let validUsername = false;
    let validPassword = false;

    let validAddress = false;
    let validCity = false;
    let validState = false;
    let validCountry = false;
    let validZipCode = false;

    let letters = /^[A-Za-z]+$/;
    let errorMessages = "";

    //Step 2: Grab inputs
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let uname = document.getElementById("username").value;
    let pword = document.getElementById("password").value;

    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("states").value;
    let country = document.getElementById("countries").value;
    let zipcode = document.getElementById("zipcode").value;

    //Step 3: Validation

    //First Name
    if (fname === null || fname === "" || fname.length > 20 || !fname.match(letters))
        errorMessages += "<p>The first name is required, it must be letters, and cannot be greater than 20 characters</p>";
    else validFirstName = true;

    //Last Name
    if (lname === null || lname === "" || lname.length > 50 || !lname.match(letters))
        errorMessages += "<p>The last name is required, it must be letters, and cannot be greater than 50 characters.</p>";
    else validLastName = true;
    
    //Email
    /* var atpos = email.indexOf("@"); 
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
        errorMessages += "<p>Email is required and must be a valid address.</p>";
    else validEmail = true; */

    if(!/\S+@\S+\.\S+/.test(email))
        errorMessages += "<p>Email is required and must be a valid address.</p>";
    else validEmail = true;

    //Phone
    if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
        errorMessages += "<p>The phone number is required, it must be a number, and it cannot be greater than 15 characters.</p>";
    else validPhone = true;

    //Username
    if(uname === null || uname === "" || uname.length > 12)
        errorMessages += "<p>The username is required and cannot be greater than 12 characters.</p>";
    else validUsername = true;
    
    //Password
    if(pword === null || pword === "" || pword.length > 7)
        errorMessages += "<p>The password is required and cannot be greater than 7 characters.</p>";
    else validPassword = true;

    //Address
    if(address === null || address === "")
        errorMessages += "<p>Address is required.</p>";
    else validAddress = true;

    //City
    if (city === null || city === "")
        errorMessages += "<p>City is required.</p>";
    else validCity = true;

    //State
    if(country != "USA" && state != "nostate")
        errorMessages += "<p>State must be N/A if you're not from the United States.</p>";
    else if(country === "USA" && state === "nostate")
        errorMessages += "<p>State is required.</p>";
    else validState = true;

    //Country
    if(country === "nocountry")
        errorMessages += "<p>Country is required.</p>";
    else validCountry = true;

    //Zipcode
    if(country != "USA" && zipcode.length > 0)
        errorMessages += "<p>Zipcode is required only if you're from the United States.</p>";
    else if(country === "USA" && zipcode.length != 5)
        errorMessages += "<p>Zipcode must be exactly 5 characters.</p>";
    else validZipCode = true;

    //Step 4: Error messages
    document.getElementById("errorMessages").innerHTML = errorMessages;

    //Step 5: Return validation statuses
    return (validUsername && validPassword && validFirstName && validLastName && validEmail &&
            validPhone && validAddress && validCity && validState && validCountry && validZipCode);
}