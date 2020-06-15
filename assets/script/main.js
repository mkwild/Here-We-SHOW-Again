const mainElement = document.querySelector("main")
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/
const kata1Heading = document.createElement("h1")
kata1Heading.id = "h1"
mainElement.append(kata1Heading)
kata1Heading.append("Kata 01")

const section1List = document.createElement("ul")
kata1Heading.append(section1List)

for (let counter1 = 1; counter1 <= 20; counter1++) {
    const listElement = document.createElement("li")
    section1List.append(listElement)
    listElement.append(counter1)
}

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/
const kata2Heading = document.createElement("h1")
kata2Heading.id = "h1"
mainElement.append(kata2Heading)
kata2Heading.append("Kata 02")

const section2List = document.createElement("ul")
kata2Heading.append(section2List)

for (let counter2 = 1; counter2 <= 20; counter2++) {
  if (counter2 % 2 == 0) {
    const listElement = document.createElement("li")
    section2List.append(listElement)
    listElement.append(counter2)
  }
}


/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter3 = 1
while (counter3 <=20) {
  if (counter3 % 2 == 1) {
    console.log(counter3)
  }
  counter3++
}


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter4 = 1
while (counter4 <= 100) {
  if (counter4 % 5 == 0) {
    console.log(counter4)
  }
  counter4++
}


/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter5 = 1
while (counter5 <= 100) {
  if ((Math.sqrt(counter5))%1 == 0) {
    console.log(counter5)
  }
  counter5++
}


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter6 = 20
while (counter6 > 0) {
  console.log(counter6)
  counter6--
}


/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter7 = 20
while (counter7 > 0) {
  if (counter7 % 2 == 0) {
    console.log(counter7)
  }
  counter7--
}


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter8 = 20
while (counter8 > 0) {
  if (counter8 % 2 == 1) {
    console.log(counter8)
  }
  counter8--
}


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
//const kata1Heading = document.createElement("h1")
//kata1Heading.id = "h1"
//mainElement.append(kata1Heading)
//kata1Heading.append("Kata 01")
//
//const section1List = document.createElement("ul")
//kata1Heading.append(section1List)

let counter9 = 100
while (counter9 > 0) {
  if (counter9 % 5 == 0) {
    console.log(counter9)
  }
  counter9--
}


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
// const kata1Heading = document.createElement("h1")
// kata1Heading.id = "h1"
// mainElement.append(kata1Heading)
// kata1Heading.append("Kata 01")
// 
// const section1List = document.createElement("ul")
// kata1Heading.append(section1List)

let counter10 = 100
while (counter10 > 0) {
  if ((Math.sqrt(counter10))%1 == 0) {
    console.log(counter10)
  }
  counter10--
}


