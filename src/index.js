module.exports = function toReadable (number) {
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
    if (number === 0) {
        return 'zero';
    }

    const readableNumber = []

    if (number >= 100) readableNumber.push(units[number / 100 | 0], 'hundred');
    if (number % 100 / 10 >= 2) readableNumber.push(tens[number % 100 / 10 | 0]);
    if (number % 100 < 20) readableNumber.push(units[number % 100]);
    else if (number % 10) readableNumber.push(units[number % 10]);
    
    return readableNumber.join(' ').trim();
}
