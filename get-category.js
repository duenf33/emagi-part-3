const emojis = require('./emojis.js');

const getCategory = function(category) {
    return emojis.filter(emoji => {
        emoji.categories.includes(category)
    });
}

module.exports = getCategory;



// PREVIEWS CODE:

// // const { push } = require('./emojis.js');
// const emojis = require('./emojis.js');

// const getCategory = function(word){
//     for(const emoji of emojis){
//         if(emoji.categories === word.toLowerCase()){
//             return emoji.symbol
//         }

//     }
//     return word;//?
// }
// // getCategory('baby')//?

// // console.log(emojis[0].categories)//?

// module.exports = getCategory;