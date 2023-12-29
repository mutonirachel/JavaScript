// Figure 1 program

function figureProgram(x) {
    if (x <= 5) return "*";
    return  figureProgram(x);
  }
  console.log(figureProgram(1));
  console.log(figureProgram(2));
  console.log(figureProgram(3));
  console.log(figureProgram(4));
  console.log(figureProgram(5));
 
 