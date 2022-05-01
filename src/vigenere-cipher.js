const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.latinAlphabetLength = 26;
    this.charsToEncrypt = [];
    for(let i = 65; i < 91; i++) {
      this.charsToEncrypt.push(String.fromCharCode(i));
    }
  }

  process(message, key, operation) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let resultString = '';
    for(let i = 0, j = 0; i < message.length; i++) {
      if (!~this.charsToEncrypt.indexOf(message[i])) {
        resultString += message[i];
      } else {
        const messageCharCodeNorm = message[i].charCodeAt(0) - 65;
        const keyCharCodeNorm = key[j].charCodeAt(0) - 65;
        const shift = operation ? keyCharCodeNorm : -1 * keyCharCodeNorm;
        const shiftedCharCode = (messageCharCodeNorm + 26 + shift) % this.latinAlphabetLength + 65;
        j = (j + 1) % key.length
        resultString += String.fromCharCode(shiftedCharCode);
      }
    }
    return resultString;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let resultString = this.process(message, key, true);
    return this.isDirect ? resultString : resultString.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let resultString = this.process(message, key, false);
    return this.isDirect ? resultString : resultString.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
