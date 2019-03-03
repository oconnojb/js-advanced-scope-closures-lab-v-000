function produceDrivingRange(range) {
  return function(block1, block2) {
    let b1 = block1.slice(0, -2);
    let b2 = block2.slice(0, -2);
    let dif = Math.abs(b1 - b2);

    if (dif > range) {
      return (dif - range) + " blocks out of range";
    }
    else {
      return "within range by " + (range - dif);
    }
  }
}

function produceTipCalculator(perc) {
  return function(bill) {
    return bill * perc;
  }
}
