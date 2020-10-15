const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let obj = {
            '10': '.',
            '11': '-'
        },
        i = 0,
        arr = [],
        resArr = [],
        resStr = '';

    arr = expr.match(/.{1,10}/g);

    for (let key of arr) {
        for (let j = 0; j <= key.length; j++) {
            if (j % 2 === 0) {
                if (obj.hasOwnProperty(key[j] + key[j + 1])) {
                    resStr += obj[key[j] + key[j + 1]];
                } else if (key[j] === '*') {
                    resStr = ' ';
                }
            }
        }
        resArr[i] = resStr;
        resStr = '';
        i += 1;
    }
    for (let key of resArr) {
        if (MORSE_TABLE.hasOwnProperty(key)) {
            resStr += MORSE_TABLE[key];
        } else if (key === ' ') {
            resStr += ' ';
        }
    }
    return resStr;
}

module.exports = {
    decode
};