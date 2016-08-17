/**
 *
 * Random Array Generator
 * It generates the array of given length and range which contains random values 
 *
 * @example
 *
 * var randomArray = require('path-this-file/RandomArray.js').getRandomArray;
 *
 *
 * console.log(randomArray(5,1,10)); // Array with Random Data
 * console.log(randomArray(5,1,10).sort()); // Array with Random sorted Data
 *
 * @module dummy-data/randomArray
 */

(function(exports){
    'use strict'
    
    /**
     * Random Array Generator
     * @method randomArray
     * @param {} length
     * @param {} startLimit
     * @param {} endLimit
     * @return randomArray
     */
    function randomArray(length,startLimit,endLimit) {
        var randomArray = [];
        var i = 0;
        if((endLimit - startLimit) < length ){
            console.log('Sorry your limit ' + length + ' is less then difference of startLimit ' + startLimit + ' and '+ endLimit);
            return [];
        }
        while(i<length){
            var randomNumber = Math.round( startLimit + Math.random() * (endLimit - startLimit)  );
            if(randomArray.indexOf(randomNumber) === -1){
                randomArray.push(randomNumber);
                i++;
            }
        }
        return randomArray;
    }

    exports.getRandomArray = randomArray;

})(typeof window === 'undefined' ? module.exports : window);
