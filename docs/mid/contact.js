function validateForm(){
    let validName = false;
    let validEmail = false; 
    let validMessage = false;
    let errorMessages = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === null || name === "" || name.length > 50 || !name.match(/^[A-Za-z]+$/))
        errorMessages += "<p>Please enter a valid name (50 characters or fewer).</p>";
    else validName = true;

    if(!/\S+@\S+\.\S+/.test(email))
        errorMessages += "<p>Email is required and must be a valid address.</p>";
    else validEmail = true;

    if(message.length < 10 || message.length > 2000)
        errorMessages += "<p>Message required (at least 10 characters and fewer than 2000 characters).</p>";
    else validMessage = true;

    document.getElementById("errorMessages").innerHTML = errorMessages;

    return (validName && validEmail && validMessage);
}