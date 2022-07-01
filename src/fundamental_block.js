// 101. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one

function compareTwoObject(first, second) {
  const firstObj = Object.getOwnPropertyNames(first);
  for (let i = 0; i < firstObj.length; i++) {
    const obj = firstObj[i];
    if (first[obj] !== second[obj]) return false;
  }
  return true;
}

compareTwoObject({ name: 'Alexey', age: '20' }, { name: 'Alexey', age: '20' });

// 102.  Write a JavaScript program to copy a string to the clipboard.
