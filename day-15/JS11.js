// Blaise Pascal Pyramid

function blaisePascalsPyramid(x) {
    if (x <= 0) 
    return 1;
    return gnrtNextLine(blaisePascalsPyramid(x - 1))
  }
  
  function gnrtNextLine(finalLine) {
    let followingLine = []
    followingLine.push(1)
    for (let i = 0; i < finalLine.length - 1; i++) {

        followingLine.push(finalLine[i] + finalLine[i + 1])

    }
    followingLine.push(1)
    return followingLine
  }
  console.log(blaisePascalsPyramid(1));
  console.log(blaisePascalsPyramid(2));
  console.log(blaisePascalsPyramid(3));
  console.log(blaisePascalsPyramid(4));
  console.log(blaisePascalsPyramid(5));
