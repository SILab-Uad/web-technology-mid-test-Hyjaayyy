// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet = "";

    // Append character sets based on user selection
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

    if (!charSet) {
        return "Choose Criteria";
    }

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    // TODO: Return the generated password
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    const options = {
        includeUppercase: includeUppercase.checked,
        includeLowercase: includeLowercase.checked,
        includeNumbers: includeNumbers.checked,
        includeSpecialChars: includeSpecialChars.checked
    };

    // TODO: Generate the password and display it
    const password = generatePassword(length, options);
    passwordOutput.innerText = password;  
    passwordField.value = password;       
});

// BONUS: Implement the copy to clipboard functionality
copyBtn.addEventListener('click', () => {
    passwordField.select();
    alert('Password copied to clipboard!');
});
