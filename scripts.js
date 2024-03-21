function encryptECB() {
    const plaintext = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const keyLength = parseInt(document.getElementById("keyLength").value);
    const options = { mode: CryptoJS.mode.ECB, keySize: keyLength / 8 };
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key, options).toString();
    document.getElementById("outputText").value = ciphertext;
}

function decryptECB() {
    const ciphertext = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const keyLength = parseInt(document.getElementById("keyLength").value);
    const options = { mode: CryptoJS.mode.ECB, keySize: keyLength / 8 };
    const decryptedBytes = CryptoJS.AES.decrypt(ciphertext, key, options);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("outputText").value = decryptedText;
}
