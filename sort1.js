function compareValues(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a-b;
    } else if (typeof a === "number") {
      return -1;
    } else if (typeof b === "number") {
      return 1;
    } else {
      return a.localCompare(b);
    }
  }
  
  function sortNumbersAndCharacters(arr) {
    let numbers = arr.filter((item) => typeof item === "number");
    let Characters = arr.filter((item) => typeof item === "string");
  
    numbers.sort((a,b) => a-b);
    Characters.sort();
  
    let sortedArr = [];
    let numIndex = 0;
    let charIndex = 0;
  
    for (let item of arr) {
      if (typeof item === "number") {
        sortedArr.push(numbers[numIndex]);
        numIndex++;
      } else {
        sortedArr.push(Characters[charIndex]);
        charIndex++;
      }
    }
  
    return sortedArr;
  }
  
  function numbersThenCharacters(inputArray) {

    return inputArray.map((subArray) => sortNumbersAndCharacters(subArray));
  }
  

  const input = [
    [11, 26, 45.4, "f", "a", "b"],
    [0], [1.5, "d","X",35,"s"],
    ["f", "e", 58],
    ["p","Y","Z"],
    [98,72]
  ];
  const output = numbersThenCharacters(input);
  console.log(output);