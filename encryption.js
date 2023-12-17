function encrypt(text, shift) {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const start = code <= 90 ? 65 : 97;
          return String.fromCharCode((code - start + shift) % 26 + start);
        }
        return char;
      })
      .join('');
  }
  
  function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
  }
  
  // Example usage:
  const originalText = "Hello, World!";
  const shiftAmount = 3;
  
  const encryptedText = encrypt(originalText, shiftAmount);
  const decryptedText = decrypt(encryptedText, shiftAmount);
  
  console.log("Original: ", originalText);
  console.log("Encrypted: ", encryptedText);
  console.log("Decrypted: ", decryptedText);
  