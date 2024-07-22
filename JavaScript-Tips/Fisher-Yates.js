
// This code implements a most common and modern Shuffling Algorithm called Fisher-Yates

const arr = [2,3,4,5,6,7,8]

Array.prototype.shuffle = function() {
    const shuffledArray = this.slice();
    
    const length = shuffledArray.length;
    for (let i = length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    
    return shuffledArray;
}
console.log(arr.shuffle())