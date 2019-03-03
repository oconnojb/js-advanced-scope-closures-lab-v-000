function produceDrivingRange(range) {
  return function(block1, block2) {
    let b1 = block1.slice(0, -2);
    let b2 = block2.slice(0, -2);
    let dif = abs(b1 - b2);
    console.log("b1: " + b1 + " b2: " + b2)
    console.log("dif: ", dif)


    /*
    if (b1-b2 < range) {
      console.log("range: " + range);
      console.log("b1: " + b1 + " b2: " + b2)
      console.log(range-(b1-b2));
    }
    */
  }
}
