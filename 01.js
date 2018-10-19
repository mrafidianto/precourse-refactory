function isPalindrome(teks)
    {
        // find the reverse of the text
        let reverse = teks.split("").reverse().join("");

        return teks === reverse;
    }

// test the output
console.log(isPalindrome('ibu ratna antar ubi')); // true
console.log(isPalindrome('cbc')); // true
console.log(isPalindrome('abcda')); // false