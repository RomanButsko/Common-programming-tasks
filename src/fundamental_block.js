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

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
}
document.querySelector('.copyBtn').addEventListener('click', () => {
  const text = document.querySelector('.copyStr').value;
  copyTextToClipboard(text);
});

// 103. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

function conver2DArray(str) {
  const result = [];
  str.split(',').map((item) => result.push([item]));
  return result;
}

conver2DArray('str, dds, fdf, hgygi');
