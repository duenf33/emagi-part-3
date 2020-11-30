const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');
const getCategory = require('./get-category')

const command = process.argv[2];
const words = process.argv.slice(3);

if (command === 'encode') {
    const encoding = words.map(encodeWord);
    console.log(encoding.join(' '));
} else if (command === 'translate') {
    const translation = words.map(translateWord)
    console.log(translation.join(' '));
} else if(command === 'category') {
    // console.log('This category ELSE IF is working')
    const categories = words.includes(getCategory);
    console.log(categories.join(' '))
} else {
    console.log('Your choices for what to write after "node main.js" (and a space!) are:');
    console.log('* "encode" followed by a space and then as many letters as you want');
    console.log('* "translate" followed by a space and then as many words as you want');
}