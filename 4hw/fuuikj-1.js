function VigenèreCipher(key, abc) {
    let self = this;
    let size = abc.length;
      
    this.transform = function (str, getIndex) {
      return str.split('').map(function(ch, index) {
        return abc.indexOf(ch) >= 0 ? abc[getIndex(ch, index)] : ch;
      }).join('');
    }
  
    this.enocodeIndex = function(ch, index) {
      return (abc.indexOf(ch) + abc.indexOf(key.charAt(index % key.length)) + size) % size
    }
  
    this.decodeIndex = function(ch, index) {
      return (abc.indexOf(ch) - abc.indexOf(key.charAt(index % key.length)) + size) % size
    }
  
    this.encode = function (str) {
      return this.transform(str, this.enocodeIndex)
    };
    this.decode = function (str) {
      return this.transform(str, this.decodeIndex)
    };
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';

const c = new VigenèreCipher(key, alphabet);
  console.log(c.encode('codewars')); 
  console.log(c.decode('laxxhsj'));  
  console.log(c.encode('XT\'K S OVZII CAHDSI!'));
