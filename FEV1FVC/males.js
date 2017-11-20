var coefficients = {
  L: {
    q0: 0, // intercept
    q1: 0, // age
  },
  M: {
    a0: 0, // intercept
    a1: 0, // height
    a2: 0, // age
    a3: 0, // ethnicity: african american
    a4: 0, // ethnicity: north east asian
    a5: 0, // ethnicity: south east asian
    a6: 0, // ethnicity: other/mixed
  },
  S: {
    p0: 0, // intercept
    p1: 0, // age
    p2: 0, // ethnicity: african american
    p3: 0, // ethnicity: north east asian
    p4: 0, // ethnicity: south east asian
    p5: 0, // ethnicity: other/mixed
  },
  Mspline: {
    b0: 0, // intercept
    b1: 0, // age/100
    b2: 0, // (age/100)^2
    b3: 0, // (age/100)^3
    b4: 0, // (age/100)^4
    b5: 0, // (age/100)^5
  },
  Sspline: {
    c0: 0, // intercept
    c1: 0, // age/100
    c2: 0, // (age/100)^2
    c3: 0, // (age/100)^3
    c4: 0, // (age/100)^4
    c5: 0, // (age/100)^5
  },
  Lspline: {
    d0: 0, // intercept
    d1: 0, // age/100
    d2: 0, // (age/100)^2
    d3: 0, // (age/100)^3
    d4: 0, // (age/100)^4
    d5: 0, // (age/100)^5
    d6: 0, // (age/100)^6
    d7: 0, // (age/100)^7
  },
};

var lookupTable = {
  0: { // age
    Lspline: 0,
    Mspline: 0,
    Sspline: 0,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
