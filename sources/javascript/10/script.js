let i = 0; // Index for characters in a string
let arrIndex = 0; // Index for strings in the array
let txtArray = ['Unica77', 'Brown', 'Ruder', 'Geigy Duplex', 'Riforma Mono']; // Array of strings
let speed = 120; // Typing speed

function typeWriter() {
  if (arrIndex < txtArray.length) {
    if (i < txtArray[arrIndex].length) {
      document.getElementById("textTypeWriting").innerHTML += txtArray[arrIndex].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(typeDelete, 1000); // Start deleting after the text is typed
    }
  } else {
    arrIndex = 0; // Reset to first string in array after last one is deleted
    setTimeout(typeWriter, 1000); // Loop back to start typing again
  }
}

function typeDelete() {
  if (i > 0) {
    document.getElementById("textTypeWriting").innerHTML = txtArray[arrIndex].substring(0, i - 1);
    i--;
    setTimeout(typeDelete, speed);
  } else {
    arrIndex++; // Move to the next string in the array
    setTimeout(typeWriter, 1000); // Wait a bit before starting to type the next string
  }
}

setTimeout(typeWriter, 1000);
