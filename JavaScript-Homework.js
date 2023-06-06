//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(theString, aList){
    var lower = theString.toLowerCase()
    for(let i = 0; i < aList.length; i++){
        if (lower.includes(aList[i].toLowerCase())){
            console.log(`Matched ${aList[i]}`) 
        } else {
            console.log(`No Match`) 
        }
    }
}

findWords(dog_string, dog_names)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // looping through list backwards because javascript skips an index when splice is used
    for (let i = arr.length-1; i >= 0; i--){
        if (i % 2 == 0){
            console.log(i)
            arr.splice(i, 1, "even index")
        }
    }

    console.log(arr) 
}

replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let split_string = numbers.split(' ')

    // using .apply because Math.max is looking for a number not a string
    let maximum = Math.max.apply(Math, split_string)
    let minimum = Math.min.apply(Math, split_string)

    return `${maximum} ${minimum}`
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let vowels = 'aeiouAEIOU'
    counter = 0
    for(let i = 0; i < str.length; i++)
        if (vowels.includes(str[i])){
            counter++
        }
    return counter
  }