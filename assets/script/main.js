// Code by Michael Wildnauer in collaboration with Joshua Gaucin, Giovanni Zaccaro, & Timothy Terry 6/15/2020

const mainElement = document.querySelector("main")
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/
const kata1Heading = document.createElement("h2")
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
const kata2Heading = document.createElement("h2")
kata2Heading.id = "h2"
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
const kata3Heading = document.createElement("h2")
kata3Heading.id = "h3"
mainElement.append(kata3Heading)
kata3Heading.append("Kata 03")

const section3List = document.createElement("ul")
kata3Heading.append(section3List)

for (let counter3 = 1; counter3 <=20; counter3++) {
  if (counter3 % 2 == 1) {
    const listElement = document.createElement("li")
    section3List.append(listElement)
    listElement.append(counter3)
  }
}

/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
const kata4Heading = document.createElement("h2")
kata4Heading.id = "h4"
mainElement.append(kata4Heading)
kata4Heading.append("Kata 04")

const section4List = document.createElement("ul")
kata4Heading.append(section4List)

for (let counter4 = 1; counter4 <= 100; counter4++) {
  if (counter4 % 5 == 0) {
    const listElement = document.createElement("li")
    section4List.append(listElement)
    listElement.append(counter4)
  }
}

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
const kata5Heading = document.createElement("h2")
kata5Heading.id = "h5"
mainElement.append(kata5Heading)
kata5Heading.append("Kata 05")

const section5List = document.createElement("ul")
kata5Heading.append(section5List)

for (let counter5 = 1; counter5 <= 100; counter5++) {
  if ((Math.sqrt(counter5))%1 == 0) {
    const listElement = document.createElement("li")
    section5List.append(listElement)
    listElement.append(counter5)
  }
}

/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
const kata6Heading = document.createElement("h2")
kata6Heading.id = "h6"
mainElement.append(kata6Heading)
kata6Heading.append("Kata 06")

const section6List = document.createElement("ul")
kata6Heading.append(section6List)

for (let counter6 = 20; counter6 > 0; counter6--) {
  const listElement = document.createElement("li")
  section6List.append(listElement)
  listElement.append(counter6)
}

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
const kata7Heading = document.createElement("h2")
kata7Heading.id = "h7"
mainElement.append(kata7Heading)
kata7Heading.append("Kata 07")

const section7List = document.createElement("ul")
kata7Heading.append(section7List)

for (let counter7 = 20; counter7 > 0; counter7--) {
  if (counter7 % 2 == 0) {
    const listElement = document.createElement("li")
    section7List.append(listElement)
    listElement.append(counter7)
  }
}

/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
const kata8Heading = document.createElement("h2")
kata8Heading.id = "h8"
mainElement.append(kata8Heading)
kata8Heading.append("Kata 08")

const section8List = document.createElement("ul")
kata8Heading.append(section8List)

for (let counter8 = 20; counter8 > 0; counter8--) {
  if (counter8 % 2 == 1) {
    const listElement = document.createElement("li")
    section8List.append(listElement)
    listElement.append(counter8)
  }
}

/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
const kata9Heading = document.createElement("h2")
kata9Heading.id = "h9"
mainElement.append(kata9Heading)
kata9Heading.append("Kata 09")

const section9List = document.createElement("ul")
kata9Heading.append(section9List)

for (let counter9 = 100; counter9 > 0; counter9--) {
  if (counter9 % 5 == 0) {
    const listElement = document.createElement("li")
    section9List.append(listElement)
    listElement.append(counter9)
  }
}

/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
const kata10Heading = document.createElement("h2")
kata10Heading.id = "h10"
mainElement.append(kata10Heading)
kata10Heading.append("Kata 10")

const section10List = document.createElement("ul")
kata10Heading.append(section10List)

for (let counter10 = 100; counter10 > 0; counter10--) {
  if ((Math.sqrt(counter10))%1 == 0) {
    const listElement = document.createElement("li")
    section10List.append(listElement)
    listElement.append(counter10)
  }
}

/** KATA 11 ⮕
***
*** Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
***
***/
const kata11Heading = document.createElement("h2")
kata11Heading.id = "h11"
mainElement.append(kata11Heading)
kata11Heading.append("Kata 11")

const section11List = document.createElement("ul")
kata11Heading.append(section11List)

for (let counter11 = 0; counter11 < sampleArray.length; counter11++) {
    const listElement = document.createElement("li")
    section11List.append(listElement)
    listElement.append(sampleArray[counter11])
}

/** KATA 12 ⮕
***
*** Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
***
***/
const kata12Heading = document.createElement("h2")
kata12Heading.id = "h12"
mainElement.append(kata12Heading)
kata12Heading.append("Kata 12")

const section12List = document.createElement("ul")
kata12Heading.append(section12List)

for (let counter12 = 0; counter12 < sampleArray.length; counter12++) {
    if (sampleArray[counter12]%2 == 0) {
        const listElement = document.createElement("li")
        section12List.append(listElement)
        listElement.append(sampleArray[counter12])
    }
}

/** KATA 13 ⮕
***
*** Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
***
***/
const kata13Heading = document.createElement("h2")
kata13Heading.id = "h13"
mainElement.append(kata13Heading)
kata13Heading.append("Kata 13")

const section13List = document.createElement("ul")
kata13Heading.append(section13List)

for (let counter13 = 0; counter13 < sampleArray.length; counter13++) {
    if (sampleArray[counter13]%2 == 1) {
        const listElement = document.createElement("li")
        section13List.append(listElement)
        listElement.append(sampleArray[counter13])
    }
}

/** KATA 14 ⮕
***
*** Display the square of each element in sampleArray. (219961, 570025, …, 222784)
***
***/
const kata14Heading = document.createElement("h2")
kata14Heading.id = "h14"
mainElement.append(kata14Heading)
kata14Heading.append("Kata 14")

const section14List = document.createElement("ul")
kata14Heading.append(section14List)

for (let counter14 = 0; counter14 < sampleArray.length; counter14++) {
    let value = sampleArray[counter14] * sampleArray[counter14]
    const listElement = document.createElement("li")
    section14List.append(listElement)
    listElement.append(value)
}

/** KATA 15 ⮕
***
*** Display the sum of all the numbers from 1 to 20.
***
***/
const kata15Heading = document.createElement("h2")
kata15Heading.id = "h15"
mainElement.append(kata15Heading)
kata15Heading.append("Kata 15")

const section15List = document.createElement("ul")
kata15Heading.append(section15List)

const array15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let sum15 = array15.reduce(function(a, b){
    return a + b
}, 0)

const listElement15 = document.createElement("li")
section15List.append(listElement15)
listElement15.append(sum15)

/** KATA 16 ⮕
***
*** Display the sum of all the elements in sampleArray.
***
***/
const kata16Heading = document.createElement("h2")
kata16Heading.id = "h16"
mainElement.append(kata16Heading)
kata16Heading.append("Kata 16")

const section16List = document.createElement("ul")
kata16Heading.append(section16List)

let sum16 = sampleArray.reduce(function(a, b){
    return a + b
}, 0)

const listElement16 = document.createElement("li")
section16List.append(listElement16)
listElement16.append(sum16)

/** KATA 17 ⮕
***
*** Display the smallest element in sampleArray.
***
***/
const kata17Heading = document.createElement("h2")
kata17Heading.id = "h17"
mainElement.append(kata17Heading)
kata17Heading.append("Kata 17")

const section17List = document.createElement("ul")
kata17Heading.append(section17List)

let smallest = sampleArray[0]
for (let counter17 = 1; counter17 < sampleArray.length; counter17++) {
    if (sampleArray[counter17] < smallest) {
        smallest = sampleArray[counter17]
    }
}
const listElement17 = document.createElement("li")
section17List.append(listElement17)
listElement17.append(smallest)

/** KATA 18 ⮕
***
*** Display the largest element in sampleArray.
***
***/
const kata18Heading = document.createElement("h2")
kata18Heading.id = "h18"
mainElement.append(kata18Heading)
kata18Heading.append("Kata 18")

const section18List = document.createElement("ul")
kata18Heading.append(section18List)

let largest = sampleArray[0]
for (let counter18 = 1; counter18 < sampleArray.length; counter18++) {
    if (sampleArray[counter18] > largest) {
        largest = sampleArray[counter18]
    }
}
const listElement18 = document.createElement("li")
section18List.append(listElement18)
listElement18.append(largest)

/** KATA 19 ⮕
***
*** Display 20 solid gray rectangles, each 20px high and 100px wide.
***
***/
const kata19Heading = document.createElement("h2")
kata19Heading.id = "h19"
mainElement.append(kata19Heading)
kata19Heading.append("Kata 19")

for (let counter19 = 0; counter19 < 20; counter19++) {
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = "100px"
    block.style.height = "20px"
    block.style.margin = "5px"
    kata19Heading.append(block)
}

/** KATA 20 ⮕
***
*** Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
***
***/
const kata20Heading = document.createElement("h2")
kata20Heading.id = "h20"
mainElement.append(kata20Heading)
kata20Heading.append("Kata 20")

for (let counter20 = 5; counter20 <= 100; counter20 += 5) {
    let width = 100 + counter20
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata20Heading.append(block)
}

/** KATA 21 ⮕
***
*** Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
***
***/
const kata21Heading = document.createElement("h2")
kata21Heading.id = "h21"
mainElement.append(kata21Heading)
kata21Heading.append("Kata 21")

for (let counter21 = 0; counter21 < sampleArray.length; counter21++) {
    let width = sampleArray[counter21]
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata21Heading.append(block)
}

/** KATA 22 ⮕
***
*** As in #21, but alternate colors so that every other rectangle is red.
***
***/
const kata22Heading = document.createElement("h2")
kata22Heading.id = "h22"
mainElement.append(kata22Heading)
kata22Heading.append("Kata 22")

let color22 = "gray"
for (let counter22 = 0; counter22 < sampleArray.length; counter22++) {
    let width = sampleArray[counter22]
    const block = document.createElement("div")
    if (color22 == "gray") {
        block.style.backgroundColor = `${color22}`
        color22 = "red"
    }
    else if (color22 == "red") {
        block.style.backgroundColor = `${color22}`
        color22 = "gray"
    }
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata22Heading.append(block)
}

/** KATA 22 ⮕
***
*** As in #21, but color the rectangles with even widths red.
***
***/
const kata23Heading = document.createElement("h2")
kata23Heading.id = "h23"
mainElement.append(kata23Heading)
kata23Heading.append("Kata 23")

for (let counter23 = 0; counter23 < sampleArray.length; counter23++) {
    let width = sampleArray[counter23]
    const block = document.createElement("div")
    if (sampleArray[counter23]%2 == 0) {
        color23 = "red"
        block.style.backgroundColor = `${color23}`
    }
    else {
        color23 = "gray"
        block.style.backgroundColor = `${color23}`
    }
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata23Heading.append(block)
}