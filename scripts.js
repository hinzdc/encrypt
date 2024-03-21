const CryptoJS = require('crypto-js'); // Assuming you've added crypto-js via CDN or npm

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const secretKey = document.getElementById('secretKey').value;
    const initializationVector = document.getElementById('initializationVector').value;

    if (inputText.length === 0 || secretKey.length !== 32 || initializationVector.length !== 16) {
        alert('Please provide valid input, key (32 characters), and IV (16 characters).');
        return;
    }

    const wordArray = CryptoJS.enc.Utf8.parse(inputText);
    const secretKeyWordArray = CryptoJS.enc.Hex.parse(secretKey);
    const ivWordArray = CryptoJS.enc.Hex.parse(initializationVector);

    const encrypted = CryptoJS.AES.encrypt(wordArray, secretKeyWordArray, {
        iv: ivWordArray,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    const ciphertext = encrypted.toString();
    document.getElementById('outputText').textContent = `Encrypted Text: ${ciphertext}`;
}

function decrypt() {
    const ciphertext = document.getElementById('outputText').textContent.split('Encrypted Text: ')[1];
    const secretKey = document.getElementById('secretKey').value;
    const initializationVector = document.getElementById('initializationVector').value;

    if (ciphertext.length === 0 || secretKey.length !== 32 || initializationVector.length !== 16) {
        alert('Please provide ciphertext, key (32 characters), and IV (16 characters).');
        return;
    }

    const secretKeyWordArray = CryptoJS.enc.Hex.parse(secretKey);
    const ivWordArray = CryptoJS.enc.Hex.parse(initializationVector);

    const decrypted = CryptoJS.AES.decrypt(ciphertext, secretKeyWordArray, {
        iv: ivWordArray,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    const plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    document.getElementById('inputText').value = plaintext;
}
