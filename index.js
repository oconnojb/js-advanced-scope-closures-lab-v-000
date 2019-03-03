function produceDrivingRange(range) {
  return function(block1, block2) {
    let b1 = block1.slice(0, -2);
    let b2 = block2.slice(0, -2);
    if (b1-b2 < range) {
      console.log(range-(b1-b2))
    }
  }
}
