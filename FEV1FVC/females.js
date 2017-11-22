var coefficients = {
  L: {
    q0: 7.032, // intercept
    q1: -1.197, // age
  },
  M: {
    a0: 0.550559, // intercept
    a1: -0.107805, // height
    a2: -0.054419, // age
    a3: 0.005486, // ethnicity: african american
    a4: 0.00882, // ethnicity: north east asian
    a5: 0.028543, // ethnicity: south east asian
    a6: 0.0106, // ethnicity: other/mixed
  },
  S: {
    p0: -3.23948, // intercept
    p1: 0.18503, // age
    p2: -0.03072, // ethnicity: african american
    p3: -0.16403, // ethnicity: north east asian
    p4: -0.15209, // ethnicity: south east asian
    p5: -0.086, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 0,
    Mspline: -0.0443,
    Sspline: 0.0305,
  },
  4: {
    Lspline: 0,
    Mspline: -0.0286,
    Sspline: 0.0480,
  },
  5: {
    Lspline: 0,
    Mspline: -0.0233,
    Sspline: 0.0534,
  },
  6: {
    Lspline: 0,
    Mspline: -0.0259,
    Sspline: 0.0473,
  },
  7: {
    Lspline: 0,
    Mspline: -0.0243,
    Sspline: 0.0376,
  },
  8: {
    Lspline: 0,
    Mspline: -0.0185,
    Sspline: 0.0289,
  },
  9: {
    Lspline: 0,
    Mspline: -0.0145,
    Sspline: 0.0175,
  },
  10: {
    Lspline: 0,
    Mspline: -0.0106,
    Sspline: 0.0045,
  },
  11: {
    Lspline: 0,
    Mspline: -0.0029,
    Sspline: -0.0055,
  },
  12: {
    Lspline: 0,
    Mspline: 0.0080,
    Sspline: -0.0121,
  },
  13: {
    Lspline: 0,
    Mspline: 0.0194,
    Sspline: -0.0163,
  },
  14: {
    Lspline: 0,
    Mspline: 0.0289,
    Sspline: -0.0190,
  },
  15: {
    Lspline: 0,
    Mspline: 0.0355,
    Sspline: -0.0203,
  },
  16: {
    Lspline: 0,
    Mspline: 0.0393,
    Sspline: -0.0204,
  },
  17: {
    Lspline: 0,
    Mspline: 0.0409,
    Sspline: -0.0196,
  },
  18: {
    Lspline: 0,
    Mspline: 0.0411,
    Sspline: -0.0179,
  },
  19: {
    Lspline: 0,
    Mspline: 0.0403,
    Sspline: -0.0156,
  },
  20: {
    Lspline: 0,
    Mspline: 0.0389,
    Sspline: -0.0131,
  },
  21: {
    Lspline: 0,
    Mspline: 0.0370,
    Sspline: -0.0108,
  },
  22: {
    Lspline: 0,
    Mspline: 0.0350,
    Sspline: -0.0090,
  },
  23: {
    Lspline: 0,
    Mspline: 0.0329,
    Sspline: -0.0078,
  },
  24: {
    Lspline: 0,
    Mspline: 0.0309,
    Sspline: -0.0073,
  },
  25: {
    Lspline: 0,
    Mspline: 0.0289,
    Sspline: -0.0077,
  },
  26: {
    Lspline: 0,
    Mspline: 0.0270,
    Sspline: -0.0090,
  },
  27: {
    Lspline: 0,
    Mspline: 0.0253,
    Sspline: -0.0110,
  },
  28: {
    Lspline: 0,
    Mspline: 0.0237,
    Sspline: -0.0136,
  },
  29: {
    Lspline: 0,
    Mspline: 0.0223,
    Sspline: -0.0168,
  },
  30: {
    Lspline: 0,
    Mspline: 0.0208,
    Sspline: -0.0205,
  },
  31: {
    Lspline: 0,
    Mspline: 0.0194,
    Sspline: -0.0244,
  },
  32: {
    Lspline: 0,
    Mspline: 0.0180,
    Sspline: -0.0286,
  },
  33: {
    Lspline: 0,
    Mspline: 0.0165,
    Sspline: -0.0330,
  },
  34: {
    Lspline: 0,
    Mspline: 0.0149,
    Sspline: -0.0374,
  },
  35: {
    Lspline: 0,
    Mspline: 0.0133,
    Sspline: -0.0420,
  },
  36: {
    Lspline: 0,
    Mspline: 0.0116,
    Sspline: -0.0464,
  },
  37: {
    Lspline: 0,
    Mspline: 0.0099,
    Sspline: -0.0506,
  },
  38: {
    Lspline: 0,
    Mspline: 0.0082,
    Sspline: -0.0546,
  },
  39: {
    Lspline: 0,
    Mspline: 0.0065,
    Sspline: -0.0583,
  },
  40: {
    Lspline: 0,
    Mspline: 0.0049,
    Sspline: -0.0614,
  },
  41: {
    Lspline: 0,
    Mspline: 0.0034,
    Sspline: -0.0640,
  },
  42: {
    Lspline: 0,
    Mspline: 0.0020,
    Sspline: -0.0659,
  },
  43: {
    Lspline: 0,
    Mspline: 0.0007,
    Sspline: -0.0672,
  },
  44: {
    Lspline: 0,
    Mspline: -0.0005,
    Sspline: -0.0677,
  },
  45: {
    Lspline: 0,
    Mspline: -0.0015,
    Sspline: -0.0676,
  },
  46: {
    Lspline: 0,
    Mspline: -0.0024,
    Sspline: -0.0667,
  },
  47: {
    Lspline: 0,
    Mspline: -0.0032,
    Sspline: -0.0651,
  },
  48: {
    Lspline: 0,
    Mspline: -0.0040,
    Sspline: -0.0628,
  },
  49: {
    Lspline: 0,
    Mspline: -0.0046,
    Sspline: -0.0598,
  },
  50: {
    Lspline: 0,
    Mspline: -0.0052,
    Sspline: -0.0561,
  },
  51: {
    Lspline: 0,
    Mspline: -0.0058,
    Sspline: -0.0519,
  },
  52: {
    Lspline: 0,
    Mspline: -0.0063,
    Sspline: -0.0471,
  },
  53: {
    Lspline: 0,
    Mspline: -0.0068,
    Sspline: -0.0417,
  },
  54: {
    Lspline: 0,
    Mspline: -0.0073,
    Sspline: -0.0359,
  },
  55: {
    Lspline: 0,
    Mspline: -0.0078,
    Sspline: -0.0296,
  },
  56: {
    Lspline: 0,
    Mspline: -0.0083,
    Sspline: -0.0228,
  },
  57: {
    Lspline: 0,
    Mspline: -0.0088,
    Sspline: -0.0157,
  },
  58: {
    Lspline: 0,
    Mspline: -0.0093,
    Sspline: -0.0082,
  },
  59: {
    Lspline: 0,
    Mspline: -0.0098,
    Sspline: -0.0003,
  },
  60: {
    Lspline: 0,
    Mspline: -0.0103,
    Sspline: 0.0078,
  },
  61: {
    Lspline: 0,
    Mspline: -0.0109,
    Sspline: 0.0162,
  },
  62: {
    Lspline: 0,
    Mspline: -0.0115,
    Sspline: 0.0248,
  },
  63: {
    Lspline: 0,
    Mspline: -0.0121,
    Sspline: 0.0335,
  },
  64: {
    Lspline: 0,
    Mspline: -0.0128,
    Sspline: 0.0425,
  },
  65: {
    Lspline: 0,
    Mspline: -0.0135,
    Sspline: 0.0516,
  },
  66: {
    Lspline: 0,
    Mspline: -0.0142,
    Sspline: 0.0608,
  },
  67: {
    Lspline: 0,
    Mspline: -0.0150,
    Sspline: 0.0702,
  },
  68: {
    Lspline: 0,
    Mspline: -0.0157,
    Sspline: 0.0796,
  },
  69: {
    Lspline: 0,
    Mspline: -0.0165,
    Sspline: 0.0891,
  },
  70: {
    Lspline: 0,
    Mspline: -0.0173,
    Sspline: 0.0987,
  },
  71: {
    Lspline: 0,
    Mspline: -0.0181,
    Sspline: 0.1083,
  },
  72: {
    Lspline: 0,
    Mspline: -0.0188,
    Sspline: 0.1178,
  },
  73: {
    Lspline: 0,
    Mspline: -0.0196,
    Sspline: 0.1274,
  },
  74: {
    Lspline: 0,
    Mspline: -0.0204,
    Sspline: 0.1369,
  },
  75: {
    Lspline: 0,
    Mspline: -0.0211,
    Sspline: 0.1463,
  },
  76: {
    Lspline: 0,
    Mspline: -0.0218,
    Sspline: 0.1556,
  },
  77: {
    Lspline: 0,
    Mspline: -0.0226,
    Sspline: 0.1649,
  },
  78: {
    Lspline: 0,
    Mspline: -0.0233,
    Sspline: 0.1741,
  },
  79: {
    Lspline: 0,
    Mspline: -0.0240,
    Sspline: 0.1832,
  },
  80: {
    Lspline: 0,
    Mspline: -0.0246,
    Sspline: 0.1923,
  },
  81: {
    Lspline: 0,
    Mspline: -0.0253,
    Sspline: 0.2012,
  },
  82: {
    Lspline: 0,
    Mspline: -0.0259,
    Sspline: 0.2100,
  },
  83: {
    Lspline: 0,
    Mspline: -0.0266,
    Sspline: 0.2188,
  },
  84: {
    Lspline: 0,
    Mspline: -0.0272,
    Sspline: 0.2274,
  },
  85: {
    Lspline: 0,
    Mspline: -0.0278,
    Sspline: 0.2360,
  },
  86: {
    Lspline: 0,
    Mspline: -0.0284,
    Sspline: 0.2445,
  },
  87: {
    Lspline: 0,
    Mspline: -0.0291,
    Sspline: 0.2529,
  },
  88: {
    Lspline: 0,
    Mspline: -0.0297,
    Sspline: 0.2611,
  },
  89: {
    Lspline: 0,
    Mspline: -0.0303,
    Sspline: 0.2693,
  },
  90: {
    Lspline: 0,
    Mspline: -0.0308,
    Sspline: 0.2775,
  },
  91: {
    Lspline: 0,
    Mspline: -0.0314,
    Sspline: 0.2855,
  },
  92: {
    Lspline: 0,
    Mspline: -0.0320,
    Sspline: 0.2934,
  },
  93: {
    Lspline: 0,
    Mspline: -0.0326,
    Sspline: 0.3013,
  },
  94: {
    Lspline: 0,
    Mspline: -0.0331,
    Sspline: 0.3090,
  },
  95: {
    Lspline: 0,
    Mspline: -0.0337,
    Sspline: 0.3167,
  },
  3.25: {
    Lspline: 0,
    Mspline: -0.0397,
    Sspline: 0.0359,
  },
  3.5: {
    Lspline: 0,
    Mspline: -0.0356,
    Sspline: 0.0406,
  },
  3.75: {
    Lspline: 0,
    Mspline: -0.0318,
    Sspline: 0.0447,
  },
  4.25: {
    Lspline: 0,
    Mspline: -0.0261,
    Sspline: 0.0506,
  },
  4.5: {
    Lspline: 0,
    Mspline: -0.0244,
    Sspline: 0.0523,
  },
  4.75: {
    Lspline: 0,
    Mspline: -0.0235,
    Sspline: 0.0532,
  },
  5.25: {
    Lspline: 0,
    Mspline: -0.0237,
    Sspline: 0.0528,
  },
  5.5: {
    Lspline: 0,
    Mspline: -0.0244,
    Sspline: 0.0515,
  },
  5.75: {
    Lspline: 0,
    Mspline: -0.0252,
    Sspline: 0.0496,
  },
  6.25: {
    Lspline: 0,
    Mspline: -0.0262,
    Sspline: 0.0448,
  },
  6.5: {
    Lspline: 0,
    Mspline: -0.0260,
    Sspline: 0.0423,
  },
  6.75: {
    Lspline: 0,
    Mspline: -0.0253,
    Sspline: 0.0399,
  },
  7.25: {
    Lspline: 0,
    Mspline: -0.0230,
    Sspline: 0.0355,
  },
  7.5: {
    Lspline: 0,
    Mspline: -0.0215,
    Sspline: 0.0334,
  },
  7.75: {
    Lspline: 0,
    Mspline: -0.0200,
    Sspline: 0.0312,
  },
  8.25: {
    Lspline: 0,
    Mspline: -0.0172,
    Sspline: 0.0265,
  },
  8.5: {
    Lspline: 0,
    Mspline: -0.0161,
    Sspline: 0.0238,
  },
  8.75: {
    Lspline: 0,
    Mspline: -0.0152,
    Sspline: 0.0207,
  },
  9.25: {
    Lspline: 0,
    Mspline: -0.0137,
    Sspline: 0.0142,
  },
  9.5: {
    Lspline: 0,
    Mspline: -0.0129,
    Sspline: 0.0108,
  },
  9.75: {
    Lspline: 0,
    Mspline: -0.0119,
    Sspline: 0.0076,
  },
  10.25: {
    Lspline: 0,
    Mspline: -0.0091,
    Sspline: 0.0017,
  },
  10.5: {
    Lspline: 0,
    Mspline: -0.0073,
    Sspline: -0.0009,
  },
  10.75: {
    Lspline: 0,
    Mspline: -0.0052,
    Sspline: -0.0033,
  },
  11.25: {
    Lspline: 0,
    Mspline: -0.0004,
    Sspline: -0.0074,
  },
  11.5: {
    Lspline: 0,
    Mspline: 0.0023,
    Sspline: -0.0092,
  },
  11.75: {
    Lspline: 0,
    Mspline: 0.0051,
    Sspline: -0.0107,
  },
  12.25: {
    Lspline: 0,
    Mspline: 0.0109,
    Sspline: -0.0134,
  },
  12.5: {
    Lspline: 0,
    Mspline: 0.0138,
    Sspline: -0.0145,
  },
  12.75: {
    Lspline: 0,
    Mspline: 0.0167,
    Sspline: -0.0155,
  },
  13.25: {
    Lspline: 0,
    Mspline: 0.0221,
    Sspline: -0.0171,
  },
  13.5: {
    Lspline: 0,
    Mspline: 0.0245,
    Sspline: -0.0178,
  },
  13.75: {
    Lspline: 0,
    Mspline: 0.0268,
    Sspline: -0.0184,
  },
  14.25: {
    Lspline: 0,
    Mspline: 0.0309,
    Sspline: -0.0194,
  },
  14.5: {
    Lspline: 0,
    Mspline: 0.0326,
    Sspline: -0.0198,
  },
  14.75: {
    Lspline: 0,
    Mspline: 0.0342,
    Sspline: -0.0200,
  },
  15.25: {
    Lspline: 0,
    Mspline: 0.0367,
    Sspline: -0.0204,
  },
  15.5: {
    Lspline: 0,
    Mspline: 0.0377,
    Sspline: -0.0205,
  },
  15.75: {
    Lspline: 0,
    Mspline: 0.0386,
    Sspline: -0.0205,
  },
  16.25: {
    Lspline: 0,
    Mspline: 0.0399,
    Sspline: -0.0203,
  },
  16.5: {
    Lspline: 0,
    Mspline: 0.0403,
    Sspline: -0.0202,
  },
  16.75: {
    Lspline: 0,
    Mspline: 0.0407,
    Sspline: -0.0199,
  },
  17.25: {
    Lspline: 0,
    Mspline: 0.0411,
    Sspline: -0.0193,
  },
  17.5: {
    Lspline: 0,
    Mspline: 0.0411,
    Sspline: -0.0188,
  },
  17.75: {
    Lspline: 0,
    Mspline: 0.0411,
    Sspline: -0.0184,
  },
  18.25: {
    Lspline: 0,
    Mspline: 0.0409,
    Sspline: -0.0173,
  },
  18.5: {
    Lspline: 0,
    Mspline: 0.0408,
    Sspline: -0.0168,
  },
  18.75: {
    Lspline: 0,
    Mspline: 0.0406,
    Sspline: -0.0162,
  },
  19.25: {
    Lspline: 0,
    Mspline: 0.0400,
    Sspline: -0.0149,
  },
  19.5: {
    Lspline: 0,
    Mspline: 0.0396,
    Sspline: -0.0143,
  },
  19.75: {
    Lspline: 0,
    Mspline: 0.0393,
    Sspline: -0.0137,
  },
  20.25: {
    Lspline: 0,
    Mspline: 0.0384,
    Sspline: -0.0125,
  },
  20.5: {
    Lspline: 0,
    Mspline: 0.0380,
    Sspline: -0.0119,
  },
  20.75: {
    Lspline: 0,
    Mspline: 0.0375,
    Sspline: -0.0113,
  },
  21.25: {
    Lspline: 0,
    Mspline: 0.0366,
    Sspline: -0.0103,
  },
  21.5: {
    Lspline: 0,
    Mspline: 0.0360,
    Sspline: -0.0098,
  },
  21.75: {
    Lspline: 0,
    Mspline: 0.0355,
    Sspline: -0.0094,
  },
  22.25: {
    Lspline: 0,
    Mspline: 0.0345,
    Sspline: -0.0086,
  },
  22.5: {
    Lspline: 0,
    Mspline: 0.0340,
    Sspline: -0.0083,
  },
  22.75: {
    Lspline: 0,
    Mspline: 0.0334,
    Sspline: -0.0080,
  },
  23.25: {
    Lspline: 0,
    Mspline: 0.0324,
    Sspline: -0.0076,
  },
  23.5: {
    Lspline: 0,
    Mspline: 0.0319,
    Sspline: -0.0075,
  },
  23.75: {
    Lspline: 0,
    Mspline: 0.0314,
    Sspline: -0.0074,
  },
  24.25: {
    Lspline: 0,
    Mspline: 0.0304,
    Sspline: -0.0074,
  },
  24.5: {
    Lspline: 0,
    Mspline: 0.0299,
    Sspline: -0.0074,
  },
  24.75: {
    Lspline: 0,
    Mspline: 0.0294,
    Sspline: -0.0076,
  },
  25.25: {
    Lspline: 0,
    Mspline: 0.0284,
    Sspline: -0.0080,
  },
  25.5: {
    Lspline: 0,
    Mspline: 0.0279,
    Sspline: -0.0082,
  },
  25.75: {
    Lspline: 0,
    Mspline: 0.0275,
    Sspline: -0.0086,
  },
  26.25: {
    Lspline: 0,
    Mspline: 0.0266,
    Sspline: -0.0094,
  },
  26.5: {
    Lspline: 0,
    Mspline: 0.0261,
    Sspline: -0.0099,
  },
  26.75: {
    Lspline: 0,
    Mspline: 0.0257,
    Sspline: -0.0104,
  },
  27.25: {
    Lspline: 0,
    Mspline: 0.0249,
    Sspline: -0.0116,
  },
  27.5: {
    Lspline: 0,
    Mspline: 0.0245,
    Sspline: -0.0122,
  },
  27.75: {
    Lspline: 0,
    Mspline: 0.0241,
    Sspline: -0.0129,
  },
  28.25: {
    Lspline: 0,
    Mspline: 0.0234,
    Sspline: -0.0144,
  },
  28.5: {
    Lspline: 0,
    Mspline: 0.0230,
    Sspline: -0.0152,
  },
  28.75: {
    Lspline: 0,
    Mspline: 0.0226,
    Sspline: -0.0160,
  },
  29.25: {
    Lspline: 0,
    Mspline: 0.0219,
    Sspline: -0.0177,
  },
  29.5: {
    Lspline: 0,
    Mspline: 0.0216,
    Sspline: -0.0186,
  },
  29.75: {
    Lspline: 0,
    Mspline: 0.0212,
    Sspline: -0.0195,
  },
  30.25: {
    Lspline: 0,
    Mspline: 0.0205,
    Sspline: -0.0214,
  },
  30.5: {
    Lspline: 0,
    Mspline: 0.0201,
    Sspline: -0.0224,
  },
  30.75: {
    Lspline: 0,
    Mspline: 0.0198,
    Sspline: -0.0234,
  },
  31.25: {
    Lspline: 0,
    Mspline: 0.0191,
    Sspline: -0.0254,
  },
  31.5: {
    Lspline: 0,
    Mspline: 0.0187,
    Sspline: -0.0265,
  },
  31.75: {
    Lspline: 0,
    Mspline: 0.0183,
    Sspline: -0.0275,
  },
  32.25: {
    Lspline: 0,
    Mspline: 0.0176,
    Sspline: -0.0297,
  },
  32.5: {
    Lspline: 0,
    Mspline: 0.0172,
    Sspline: -0.0308,
  },
  32.75: {
    Lspline: 0,
    Mspline: 0.0169,
    Sspline: -0.0319,
  },
  33.25: {
    Lspline: 0,
    Mspline: 0.0161,
    Sspline: -0.0341,
  },
  33.5: {
    Lspline: 0,
    Mspline: 0.0157,
    Sspline: -0.0352,
  },
  33.75: {
    Lspline: 0,
    Mspline: 0.0153,
    Sspline: -0.0363,
  },
  34.25: {
    Lspline: 0,
    Mspline: 0.0145,
    Sspline: -0.0386,
  },
  34.5: {
    Lspline: 0,
    Mspline: 0.0141,
    Sspline: -0.0397,
  },
  34.75: {
    Lspline: 0,
    Mspline: 0.0137,
    Sspline: -0.0408,
  },
  35.25: {
    Lspline: 0,
    Mspline: 0.0129,
    Sspline: -0.0431,
  },
  35.5: {
    Lspline: 0,
    Mspline: 0.0124,
    Sspline: -0.0442,
  },
  35.75: {
    Lspline: 0,
    Mspline: 0.0120,
    Sspline: -0.0453,
  },
  36.25: {
    Lspline: 0,
    Mspline: 0.0112,
    Sspline: -0.0475,
  },
  36.5: {
    Lspline: 0,
    Mspline: 0.0107,
    Sspline: -0.0485,
  },
  36.75: {
    Lspline: 0,
    Mspline: 0.0103,
    Sspline: -0.0496,
  },
  37.25: {
    Lspline: 0,
    Mspline: 0.0095,
    Sspline: -0.0517,
  },
  37.5: {
    Lspline: 0,
    Mspline: 0.0090,
    Sspline: -0.0527,
  },
  37.75: {
    Lspline: 0,
    Mspline: 0.0086,
    Sspline: -0.0537,
  },
  38.25: {
    Lspline: 0,
    Mspline: 0.0077,
    Sspline: -0.0556,
  },
  38.5: {
    Lspline: 0,
    Mspline: 0.0073,
    Sspline: -0.0565,
  },
  38.75: {
    Lspline: 0,
    Mspline: 0.0069,
    Sspline: -0.0574,
  },
  39.25: {
    Lspline: 0,
    Mspline: 0.0061,
    Sspline: -0.0591,
  },
  39.5: {
    Lspline: 0,
    Mspline: 0.0057,
    Sspline: -0.0599,
  },
  39.75: {
    Lspline: 0,
    Mspline: 0.0053,
    Sspline: -0.0607,
  },
  40.25: {
    Lspline: 0,
    Mspline: 0.0045,
    Sspline: -0.0621,
  },
  40.5: {
    Lspline: 0,
    Mspline: 0.0041,
    Sspline: -0.0628,
  },
  40.75: {
    Lspline: 0,
    Mspline: 0.0037,
    Sspline: -0.0634,
  },
  41.25: {
    Lspline: 0,
    Mspline: 0.0030,
    Sspline: -0.0645,
  },
  41.5: {
    Lspline: 0,
    Mspline: 0.0026,
    Sspline: -0.0650,
  },
  41.75: {
    Lspline: 0,
    Mspline: 0.0023,
    Sspline: -0.0655,
  },
  42.25: {
    Lspline: 0,
    Mspline: 0.0016,
    Sspline: -0.0663,
  },
  42.5: {
    Lspline: 0,
    Mspline: 0.0013,
    Sspline: -0.0666,
  },
  42.75: {
    Lspline: 0,
    Mspline: 0.0010,
    Sspline: -0.0669,
  },
  43.25: {
    Lspline: 0,
    Mspline: 0.0004,
    Sspline: -0.0674,
  },
  43.5: {
    Lspline: 0,
    Mspline: 0.0001,
    Sspline: -0.0676,
  },
  43.75: {
    Lspline: 0,
    Mspline: -0.0002,
    Sspline: -0.0677,
  },
  44.25: {
    Lspline: 0,
    Mspline: -0.0007,
    Sspline: -0.0678,
  },
  44.5: {
    Lspline: 0,
    Mspline: -0.0010,
    Sspline: -0.0678,
  },
  44.75: {
    Lspline: 0,
    Mspline: -0.0012,
    Sspline: -0.0677,
  },
  45.25: {
    Lspline: 0,
    Mspline: -0.0017,
    Sspline: -0.0674,
  },
  45.5: {
    Lspline: 0,
    Mspline: -0.0020,
    Sspline: -0.0672,
  },
  45.75: {
    Lspline: 0,
    Mspline: -0.0022,
    Sspline: -0.0670,
  },
  46.25: {
    Lspline: 0,
    Mspline: -0.0026,
    Sspline: -0.0664,
  },
  46.5: {
    Lspline: 0,
    Mspline: -0.0028,
    Sspline: -0.0660,
  },
  46.75: {
    Lspline: 0,
    Mspline: -0.0030,
    Sspline: -0.0655,
  },
  47.25: {
    Lspline: 0,
    Mspline: -0.0034,
    Sspline: -0.0646,
  },
  47.5: {
    Lspline: 0,
    Mspline: -0.0036,
    Sspline: -0.0640,
  },
  47.75: {
    Lspline: 0,
    Mspline: -0.0038,
    Sspline: -0.0634,
  },
  48.25: {
    Lspline: 0,
    Mspline: -0.0041,
    Sspline: -0.0621,
  },
  48.5: {
    Lspline: 0,
    Mspline: -0.0043,
    Sspline: -0.0613,
  },
  48.75: {
    Lspline: 0,
    Mspline: -0.0045,
    Sspline: -0.0606,
  },
  49.25: {
    Lspline: 0,
    Mspline: -0.0048,
    Sspline: -0.0589,
  },
  49.5: {
    Lspline: 0,
    Mspline: -0.0049,
    Sspline: -0.0580,
  },
  49.75: {
    Lspline: 0,
    Mspline: -0.0051,
    Sspline: -0.0571,
  },
  50.25: {
    Lspline: 0,
    Mspline: -0.0054,
    Sspline: -0.0551,
  },
  50.5: {
    Lspline: 0,
    Mspline: -0.0055,
    Sspline: -0.0541,
  },
  50.75: {
    Lspline: 0,
    Mspline: -0.0056,
    Sspline: -0.0530,
  },
  51.25: {
    Lspline: 0,
    Mspline: -0.0059,
    Sspline: -0.0507,
  },
  51.5: {
    Lspline: 0,
    Mspline: -0.0060,
    Sspline: -0.0495,
  },
  51.75: {
    Lspline: 0,
    Mspline: -0.0061,
    Sspline: -0.0483,
  },
  52.25: {
    Lspline: 0,
    Mspline: -0.0064,
    Sspline: -0.0458,
  },
  52.5: {
    Lspline: 0,
    Mspline: -0.0065,
    Sspline: -0.0444,
  },
  52.75: {
    Lspline: 0,
    Mspline: -0.0067,
    Sspline: -0.0431,
  },
  53.25: {
    Lspline: 0,
    Mspline: -0.0069,
    Sspline: -0.0403,
  },
  53.5: {
    Lspline: 0,
    Mspline: -0.0070,
    Sspline: -0.0388,
  },
  53.75: {
    Lspline: 0,
    Mspline: -0.0072,
    Sspline: -0.0374,
  },
  54.25: {
    Lspline: 0,
    Mspline: -0.0074,
    Sspline: -0.0343,
  },
  54.5: {
    Lspline: 0,
    Mspline: -0.0075,
    Sspline: -0.0328,
  },
  54.75: {
    Lspline: 0,
    Mspline: -0.0077,
    Sspline: -0.0312,
  },
  55.25: {
    Lspline: 0,
    Mspline: -0.0079,
    Sspline: -0.0279,
  },
  55.5: {
    Lspline: 0,
    Mspline: -0.0080,
    Sspline: -0.0262,
  },
  55.75: {
    Lspline: 0,
    Mspline: -0.0082,
    Sspline: -0.0245,
  },
  56.25: {
    Lspline: 0,
    Mspline: -0.0084,
    Sspline: -0.0211,
  },
  56.5: {
    Lspline: 0,
    Mspline: -0.0085,
    Sspline: -0.0193,
  },
  56.75: {
    Lspline: 0,
    Mspline: -0.0087,
    Sspline: -0.0175,
  },
  57.25: {
    Lspline: 0,
    Mspline: -0.0089,
    Sspline: -0.0138,
  },
  57.5: {
    Lspline: 0,
    Mspline: -0.0090,
    Sspline: -0.0120,
  },
  57.75: {
    Lspline: 0,
    Mspline: -0.0092,
    Sspline: -0.0101,
  },
  58.25: {
    Lspline: 0,
    Mspline: -0.0094,
    Sspline: -0.0062,
  },
  58.5: {
    Lspline: 0,
    Mspline: -0.0095,
    Sspline: -0.0043,
  },
  58.75: {
    Lspline: 0,
    Mspline: -0.0097,
    Sspline: -0.0023,
  },
  59.25: {
    Lspline: 0,
    Mspline: -0.0099,
    Sspline: 0.0017,
  },
  59.5: {
    Lspline: 0,
    Mspline: -0.0100,
    Sspline: 0.0037,
  },
  59.75: {
    Lspline: 0,
    Mspline: -0.0102,
    Sspline: 0.0057,
  },
  60.25: {
    Lspline: 0,
    Mspline: -0.0104,
    Sspline: 0.0099,
  },
  60.5: {
    Lspline: 0,
    Mspline: -0.0106,
    Sspline: 0.0119,
  },
  60.75: {
    Lspline: 0,
    Mspline: -0.0107,
    Sspline: 0.0140,
  },
  61.25: {
    Lspline: 0,
    Mspline: -0.0110,
    Sspline: 0.0183,
  },
  61.5: {
    Lspline: 0,
    Mspline: -0.0112,
    Sspline: 0.0204,
  },
  61.75: {
    Lspline: 0,
    Mspline: -0.0113,
    Sspline: 0.0226,
  },
  62.25: {
    Lspline: 0,
    Mspline: -0.0116,
    Sspline: 0.0269,
  },
  62.5: {
    Lspline: 0,
    Mspline: -0.0118,
    Sspline: 0.0291,
  },
  62.75: {
    Lspline: 0,
    Mspline: -0.0119,
    Sspline: 0.0313,
  },
  63.25: {
    Lspline: 0,
    Mspline: -0.0123,
    Sspline: 0.0358,
  },
  63.5: {
    Lspline: 0,
    Mspline: -0.0124,
    Sspline: 0.0380,
  },
  63.75: {
    Lspline: 0,
    Mspline: -0.0126,
    Sspline: 0.0402,
  },
  64.25: {
    Lspline: 0,
    Mspline: -0.0129,
    Sspline: 0.0448,
  },
  64.5: {
    Lspline: 0,
    Mspline: -0.0131,
    Sspline: 0.0470,
  },
  64.75: {
    Lspline: 0,
    Mspline: -0.0133,
    Sspline: 0.0493,
  },
  65.25: {
    Lspline: 0,
    Mspline: -0.0136,
    Sspline: 0.0539,
  },
  65.5: {
    Lspline: 0,
    Mspline: -0.0138,
    Sspline: 0.0562,
  },
  65.75: {
    Lspline: 0,
    Mspline: -0.0140,
    Sspline: 0.0585,
  },
  66.25: {
    Lspline: 0,
    Mspline: -0.0144,
    Sspline: 0.0632,
  },
  66.5: {
    Lspline: 0,
    Mspline: -0.0146,
    Sspline: 0.0655,
  },
  66.75: {
    Lspline: 0,
    Mspline: -0.0148,
    Sspline: 0.0678,
  },
  67.25: {
    Lspline: 0,
    Mspline: -0.0151,
    Sspline: 0.0725,
  },
  67.5: {
    Lspline: 0,
    Mspline: -0.0153,
    Sspline: 0.0749,
  },
  67.75: {
    Lspline: 0,
    Mspline: -0.0155,
    Sspline: 0.0773,
  },
  68.25: {
    Lspline: 0,
    Mspline: -0.0159,
    Sspline: 0.0820,
  },
  68.5: {
    Lspline: 0,
    Mspline: -0.0161,
    Sspline: 0.0844,
  },
  68.75: {
    Lspline: 0,
    Mspline: -0.0163,
    Sspline: 0.0868,
  },
  69.25: {
    Lspline: 0,
    Mspline: -0.0167,
    Sspline: 0.0915,
  },
  69.5: {
    Lspline: 0,
    Mspline: -0.0169,
    Sspline: 0.0939,
  },
  69.75: {
    Lspline: 0,
    Mspline: -0.0171,
    Sspline: 0.0963,
  },
  70.25: {
    Lspline: 0,
    Mspline: -0.0175,
    Sspline: 0.1011,
  },
  70.5: {
    Lspline: 0,
    Mspline: -0.0177,
    Sspline: 0.1035,
  },
  70.75: {
    Lspline: 0,
    Mspline: -0.0179,
    Sspline: 0.1059,
  },
  71.25: {
    Lspline: 0,
    Mspline: -0.0183,
    Sspline: 0.1107,
  },
  71.5: {
    Lspline: 0,
    Mspline: -0.0185,
    Sspline: 0.1131,
  },
  71.75: {
    Lspline: 0,
    Mspline: -0.0186,
    Sspline: 0.1155,
  },
  72.25: {
    Lspline: 0,
    Mspline: -0.0190,
    Sspline: 0.1202,
  },
  72.5: {
    Lspline: 0,
    Mspline: -0.0192,
    Sspline: 0.1226,
  },
  72.75: {
    Lspline: 0,
    Mspline: -0.0194,
    Sspline: 0.1250,
  },
  73.25: {
    Lspline: 0,
    Mspline: -0.0198,
    Sspline: 0.1298,
  },
  73.5: {
    Lspline: 0,
    Mspline: -0.0200,
    Sspline: 0.1321,
  },
  73.75: {
    Lspline: 0,
    Mspline: -0.0202,
    Sspline: 0.1345,
  },
  74.25: {
    Lspline: 0,
    Mspline: -0.0206,
    Sspline: 0.1392,
  },
  74.5: {
    Lspline: 0,
    Mspline: -0.0207,
    Sspline: 0.1416,
  },
  74.75: {
    Lspline: 0,
    Mspline: -0.0209,
    Sspline: 0.1439,
  },
  75.25: {
    Lspline: 0,
    Mspline: -0.0213,
    Sspline: 0.1486,
  },
  75.5: {
    Lspline: 0,
    Mspline: -0.0215,
    Sspline: 0.1510,
  },
  75.75: {
    Lspline: 0,
    Mspline: -0.0217,
    Sspline: 0.1533,
  },
  76.25: {
    Lspline: 0,
    Mspline: -0.0220,
    Sspline: 0.1580,
  },
  76.5: {
    Lspline: 0,
    Mspline: -0.0222,
    Sspline: 0.1603,
  },
  76.75: {
    Lspline: 0,
    Mspline: -0.0224,
    Sspline: 0.1626,
  },
  77.25: {
    Lspline: 0,
    Mspline: -0.0227,
    Sspline: 0.1672,
  },
  77.5: {
    Lspline: 0,
    Mspline: -0.0229,
    Sspline: 0.1695,
  },
  77.75: {
    Lspline: 0,
    Mspline: -0.0231,
    Sspline: 0.1718,
  },
  78.25: {
    Lspline: 0,
    Mspline: -0.0234,
    Sspline: 0.1764,
  },
  78.5: {
    Lspline: 0,
    Mspline: -0.0236,
    Sspline: 0.1787,
  },
  78.75: {
    Lspline: 0,
    Mspline: -0.0238,
    Sspline: 0.1810,
  },
  79.25: {
    Lspline: 0,
    Mspline: -0.0241,
    Sspline: 0.1855,
  },
  79.5: {
    Lspline: 0,
    Mspline: -0.0243,
    Sspline: 0.1878,
  },
  79.75: {
    Lspline: 0,
    Mspline: -0.0245,
    Sspline: 0.1900,
  },
  80.25: {
    Lspline: 0,
    Mspline: -0.0248,
    Sspline: 0.1945,
  },
  80.5: {
    Lspline: 0,
    Mspline: -0.0250,
    Sspline: 0.1967,
  },
  80.75: {
    Lspline: 0,
    Mspline: -0.0251,
    Sspline: 0.1990,
  },
  81.25: {
    Lspline: 0,
    Mspline: -0.0254,
    Sspline: 0.2034,
  },
  81.5: {
    Lspline: 0,
    Mspline: -0.0256,
    Sspline: 0.2056,
  },
  81.75: {
    Lspline: 0,
    Mspline: -0.0258,
    Sspline: 0.2078,
  },
  82.25: {
    Lspline: 0,
    Mspline: -0.0261,
    Sspline: 0.2122,
  },
  82.5: {
    Lspline: 0,
    Mspline: -0.0263,
    Sspline: 0.2144,
  },
  82.75: {
    Lspline: 0,
    Mspline: -0.0264,
    Sspline: 0.2166,
  },
  83.25: {
    Lspline: 0,
    Mspline: -0.0267,
    Sspline: 0.2210,
  },
  83.5: {
    Lspline: 0,
    Mspline: -0.0269,
    Sspline: 0.2231,
  },
  83.75: {
    Lspline: 0,
    Mspline: -0.0270,
    Sspline: 0.2253,
  },
  84.25: {
    Lspline: 0,
    Mspline: -0.0274,
    Sspline: 0.2296,
  },
  84.5: {
    Lspline: 0,
    Mspline: -0.0275,
    Sspline: 0.2317,
  },
  84.75: {
    Lspline: 0,
    Mspline: -0.0277,
    Sspline: 0.2339,
  },
  85.25: {
    Lspline: 0,
    Mspline: -0.0280,
    Sspline: 0.2381,
  },
  85.5: {
    Lspline: 0,
    Mspline: -0.0281,
    Sspline: 0.2403,
  },
  85.75: {
    Lspline: 0,
    Mspline: -0.0283,
    Sspline: 0.2424,
  },
  86.25: {
    Lspline: 0,
    Mspline: -0.0286,
    Sspline: 0.2466,
  },
  86.5: {
    Lspline: 0,
    Mspline: -0.0287,
    Sspline: 0.2487,
  },
  86.75: {
    Lspline: 0,
    Mspline: -0.0289,
    Sspline: 0.2508,
  },
  87.25: {
    Lspline: 0,
    Mspline: -0.0292,
    Sspline: 0.2549,
  },
  87.5: {
    Lspline: 0,
    Mspline: -0.0294,
    Sspline: 0.2570,
  },
  87.75: {
    Lspline: 0,
    Mspline: -0.0295,
    Sspline: 0.2591,
  },
  88.25: {
    Lspline: 0,
    Mspline: -0.0298,
    Sspline: 0.2632,
  },
  88.5: {
    Lspline: 0,
    Mspline: -0.0300,
    Sspline: 0.2653,
  },
  88.75: {
    Lspline: 0,
    Mspline: -0.0301,
    Sspline: 0.2673,
  },
  89.25: {
    Lspline: 0,
    Mspline: -0.0304,
    Sspline: 0.2714,
  },
  89.5: {
    Lspline: 0,
    Mspline: -0.0305,
    Sspline: 0.2734,
  },
  89.75: {
    Lspline: 0,
    Mspline: -0.0307,
    Sspline: 0.2754,
  },
  90.25: {
    Lspline: 0,
    Mspline: -0.0310,
    Sspline: 0.2795,
  },
  90.5: {
    Lspline: 0,
    Mspline: -0.0311,
    Sspline: 0.2815,
  },
  90.75: {
    Lspline: 0,
    Mspline: -0.0313,
    Sspline: 0.2835,
  },
  91.25: {
    Lspline: 0,
    Mspline: -0.0316,
    Sspline: 0.2875,
  },
  91.5: {
    Lspline: 0,
    Mspline: -0.0317,
    Sspline: 0.2895,
  },
  91.75: {
    Lspline: 0,
    Mspline: -0.0319,
    Sspline: 0.2914,
  },
  92.25: {
    Lspline: 0,
    Mspline: -0.0321,
    Sspline: 0.2954,
  },
  92.5: {
    Lspline: 0,
    Mspline: -0.0323,
    Sspline: 0.2973,
  },
  92.75: {
    Lspline: 0,
    Mspline: -0.0324,
    Sspline: 0.2993,
  },
  93.25: {
    Lspline: 0,
    Mspline: -0.0327,
    Sspline: 0.3032,
  },
  93.5: {
    Lspline: 0,
    Mspline: -0.0329,
    Sspline: 0.3052,
  },
  93.75: {
    Lspline: 0,
    Mspline: -0.0330,
    Sspline: 0.3071,
  },
  94.25: {
    Lspline: 0,
    Mspline: -0.0333,
    Sspline: 0.3110,
  },
  94.5: {
    Lspline: 0,
    Mspline: -0.0334,
    Sspline: 0.3129,
  },
  94.75: {
    Lspline: 0,
    Mspline: -0.0336,
    Sspline: 0.3148,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
