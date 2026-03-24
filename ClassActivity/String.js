let str = "Neha"
console.log(typeof(str))

//String interpolation
console.log(`Hello, my name ${str}`)

let fname = "Rob"
console.log(`${fname}`)


const gameCount = new String("Neha Bongarde")
console.log(gameCount.length)
console.log(gameCount.toLowerCase())
console.log(gameCount.toUpperCase())
console.log(gameCount.charAt(0))
console.log(gameCount.indexOf('h'))
console.log(gameCount.lastIndexOf("a"))
console.log(gameCount.indexOf('h'))


/*activity 2 - check all string functions
1.slice
2.repeat
3.include
4.trim
5.startsWith
6.endsWith
7.replace
*/
console.log("Strings methods:");

const myStr = new String("I am learning JS")
console.log(myStr.slice(2,4)); //give the element from 2(include) to 4(exclude)
console.log(myStr.repeat(2)); //repeat str 2 times
console.log(myStr.substring(5,13)); //give string from 5 to 13 index
console.log(myStr.toLowerCase()); //give string in lower case
console.log(myStr.toUpperCase()); //give string in upper case
console.log(myStr.includes("am")); //return true if element is present otherwise false
console.log(myStr.startsWith("I")); //return true is string starts with I otherwise false
console.log(myStr.endsWith("JS")); //return true is string endss with JS otherwise false
console.log(myStr.replace("JS","JavaScript")); //replace one element with other
console.log(myStr.replaceAll(" ","-")); //replace all space with -
console.log(myStr.charAt(3)); //give char at index 3
console.log(myStr.charCodeAt(0)); //gives the ASCII value of that letter
console.log(myStr.indexOf("learning")); //gives indexof learning where i starts from
console.log(myStr.lastIndexOf("a")); //gives the last indexof a where i appear at last
console.log(myStr.split(" ")); //split all words into 1 word in array separated by comma
console.log(myStr.trim()); //trims the extra space from string.Remove only start and ends extra space NOT FROM MIDDLE
console.log(myStr.concat(" everyday.")); //add the 1 string into the original string at the end





//multicast delegate ex
//replace methods with lamda expression
//sort list using lamba
//where we use delegate and lamda in company
//what is LINQ queries










