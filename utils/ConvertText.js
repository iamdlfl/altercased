const convertText = function(text) {
    const wordArray = text.split(' ');
    let resultArray = [];
    for (let word of wordArray) {
        let counter = 1;
        let lastCharWasL = false;
        for (let char of word) {
            if ((char == 'l' || char == 'L') && !lastCharWasL) {
                resultArray.push('L');
                counter = 1;
                lastCharWasL = true;
            } else {
                if (counter % 2 == 0) {
                    resultArray.push(char.toUpperCase());
                } else {
                    resultArray.push(char.toLowerCase());
                }
                counter++;
                lastCharWasL = false;
            }
        }
        resultArray.push(' ');
    }
    return resultArray;
}

module.exports = convertText;