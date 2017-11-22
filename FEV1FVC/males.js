var coefficients = {
  L: {
    q0: 4.7101, // intercept
    q1: -0.6774, // age
  },
  M: {
    a0: 0.7403, // intercept
    a1: -0.1595, // height
    a2: -0.0366, // age
    a3: 0.0079, // ethnicity: african american
    a4: 0.0055, // ethnicity: north east asian
    a5: 0.0283, // ethnicity: south east asian
    a6: 0.0106, // ethnicity: other/mixed
  },
  S: {
    p0: -2.9595, // intercept
    p1: 0.1156, // age
    p2: -0.0381, // ethnicity: african american
    p3: -0.2227, // ethnicity: north east asian
    p4: -0.1414, // ethnicity: south east asian
    p5: -0.086, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 1.3876,
    Mspline: -0.0221,
    Sspline: -0.0832,
  },
  4: {
    Lspline: 0.9377,
    Mspline: -0.0132,
    Sspline: -0.0085,
  },
  5: {
    Lspline: 0.5953,
    Mspline: -0.0125,
    Sspline: 0.0287,
  },
  6: {
    Lspline: 0.3331,
    Mspline: -0.0167,
    Sspline: 0.0350,
  },
  7: {
    Lspline: 0.1397,
    Mspline: -0.0169,
    Sspline: 0.0327,
  },
  8: {
    Lspline: 0.0026,
    Mspline: -0.0140,
    Sspline: 0.0298,
  },
  9: {
    Lspline: -0.0912,
    Mspline: -0.0135,
    Sspline: 0.0159,
  },
  10: {
    Lspline: -0.1533,
    Mspline: -0.0143,
    Sspline: -0.0058,
  },
  11: {
    Lspline: -0.1953,
    Mspline: -0.0108,
    Sspline: -0.0204,
  },
  12: {
    Lspline: -0.2240,
    Mspline: -0.0021,
    Sspline: -0.0238,
  },
  13: {
    Lspline: -0.2410,
    Mspline: 0.0095,
    Sspline: -0.0177,
  },
  14: {
    Lspline: -0.2466,
    Mspline: 0.0215,
    Sspline: -0.0068,
  },
  15: {
    Lspline: -0.2427,
    Mspline: 0.0315,
    Sspline: 0.0054,
  },
  16: {
    Lspline: -0.2313,
    Mspline: 0.0385,
    Sspline: 0.0159,
  },
  17: {
    Lspline: -0.2142,
    Mspline: 0.0421,
    Sspline: 0.0233,
  },
  18: {
    Lspline: -0.1926,
    Mspline: 0.0432,
    Sspline: 0.0275,
  },
  19: {
    Lspline: -0.1678,
    Mspline: 0.0427,
    Sspline: 0.0284,
  },
  20: {
    Lspline: -0.1406,
    Mspline: 0.0414,
    Sspline: 0.0265,
  },
  21: {
    Lspline: -0.1119,
    Mspline: 0.0397,
    Sspline: 0.0226,
  },
  22: {
    Lspline: -0.0826,
    Mspline: 0.0377,
    Sspline: 0.0171,
  },
  23: {
    Lspline: -0.0533,
    Mspline: 0.0357,
    Sspline: 0.0102,
  },
  24: {
    Lspline: -0.0244,
    Mspline: 0.0335,
    Sspline: 0.0020,
  },
  25: {
    Lspline: 0.0037,
    Mspline: 0.0314,
    Sspline: -0.0073,
  },
  26: {
    Lspline: 0.0307,
    Mspline: 0.0292,
    Sspline: -0.0175,
  },
  27: {
    Lspline: 0.0563,
    Mspline: 0.0271,
    Sspline: -0.0282,
  },
  28: {
    Lspline: 0.0802,
    Mspline: 0.0252,
    Sspline: -0.0388,
  },
  29: {
    Lspline: 0.1022,
    Mspline: 0.0234,
    Sspline: -0.0489,
  },
  30: {
    Lspline: 0.1222,
    Mspline: 0.0217,
    Sspline: -0.0583,
  },
  31: {
    Lspline: 0.1400,
    Mspline: 0.0202,
    Sspline: -0.0669,
  },
  32: {
    Lspline: 0.1557,
    Mspline: 0.0189,
    Sspline: -0.0745,
  },
  33: {
    Lspline: 0.1690,
    Mspline: 0.0176,
    Sspline: -0.0813,
  },
  34: {
    Lspline: 0.1801,
    Mspline: 0.0163,
    Sspline: -0.0872,
  },
  35: {
    Lspline: 0.1889,
    Mspline: 0.0149,
    Sspline: -0.0922,
  },
  36: {
    Lspline: 0.1955,
    Mspline: 0.0135,
    Sspline: -0.0963,
  },
  37: {
    Lspline: 0.2000,
    Mspline: 0.0120,
    Sspline: -0.0995,
  },
  38: {
    Lspline: 0.2025,
    Mspline: 0.0105,
    Sspline: -0.1016,
  },
  39: {
    Lspline: 0.2031,
    Mspline: 0.0089,
    Sspline: -0.1027,
  },
  40: {
    Lspline: 0.2021,
    Mspline: 0.0074,
    Sspline: -0.1029,
  },
  41: {
    Lspline: 0.1995,
    Mspline: 0.0059,
    Sspline: -0.1020,
  },
  42: {
    Lspline: 0.1955,
    Mspline: 0.0045,
    Sspline: -0.1003,
  },
  43: {
    Lspline: 0.1904,
    Mspline: 0.0031,
    Sspline: -0.0976,
  },
  44: {
    Lspline: 0.1843,
    Mspline: 0.0018,
    Sspline: -0.0939,
  },
  45: {
    Lspline: 0.1773,
    Mspline: 0.0005,
    Sspline: -0.0894,
  },
  46: {
    Lspline: 0.1696,
    Mspline: -0.0006,
    Sspline: -0.0840,
  },
  47: {
    Lspline: 0.1613,
    Mspline: -0.0018,
    Sspline: -0.0779,
  },
  48: {
    Lspline: 0.1524,
    Mspline: -0.0029,
    Sspline: -0.0712,
  },
  49: {
    Lspline: 0.1430,
    Mspline: -0.0041,
    Sspline: -0.0639,
  },
  50: {
    Lspline: 0.1332,
    Mspline: -0.0053,
    Sspline: -0.0561,
  },
  51: {
    Lspline: 0.1230,
    Mspline: -0.0066,
    Sspline: -0.0477,
  },
  52: {
    Lspline: 0.1125,
    Mspline: -0.0079,
    Sspline: -0.0388,
  },
  53: {
    Lspline: 0.1016,
    Mspline: -0.0092,
    Sspline: -0.0294,
  },
  54: {
    Lspline: 0.0904,
    Mspline: -0.0106,
    Sspline: -0.0197,
  },
  55: {
    Lspline: 0.0789,
    Mspline: -0.0120,
    Sspline: -0.0095,
  },
  56: {
    Lspline: 0.0672,
    Mspline: -0.0134,
    Sspline: 0.0010,
  },
  57: {
    Lspline: 0.0553,
    Mspline: -0.0149,
    Sspline: 0.0118,
  },
  58: {
    Lspline: 0.0432,
    Mspline: -0.0163,
    Sspline: 0.0229,
  },
  59: {
    Lspline: 0.0310,
    Mspline: -0.0178,
    Sspline: 0.0343,
  },
  60: {
    Lspline: 0.0187,
    Mspline: -0.0192,
    Sspline: 0.0460,
  },
  61: {
    Lspline: 0.0064,
    Mspline: -0.0206,
    Sspline: 0.0578,
  },
  62: {
    Lspline: -0.0060,
    Mspline: -0.0220,
    Sspline: 0.0698,
  },
  63: {
    Lspline: -0.0183,
    Mspline: -0.0234,
    Sspline: 0.0820,
  },
  64: {
    Lspline: -0.0306,
    Mspline: -0.0248,
    Sspline: 0.0942,
  },
  65: {
    Lspline: -0.0429,
    Mspline: -0.0262,
    Sspline: 0.1064,
  },
  66: {
    Lspline: -0.0551,
    Mspline: -0.0276,
    Sspline: 0.1187,
  },
  67: {
    Lspline: -0.0672,
    Mspline: -0.0290,
    Sspline: 0.1308,
  },
  68: {
    Lspline: -0.0794,
    Mspline: -0.0304,
    Sspline: 0.1429,
  },
  69: {
    Lspline: -0.0914,
    Mspline: -0.0318,
    Sspline: 0.1549,
  },
  70: {
    Lspline: -0.1034,
    Mspline: -0.0332,
    Sspline: 0.1668,
  },
  71: {
    Lspline: -0.1153,
    Mspline: -0.0346,
    Sspline: 0.1786,
  },
  72: {
    Lspline: -0.1271,
    Mspline: -0.0359,
    Sspline: 0.1903,
  },
  73: {
    Lspline: -0.1387,
    Mspline: -0.0373,
    Sspline: 0.2018,
  },
  74: {
    Lspline: -0.1503,
    Mspline: -0.0386,
    Sspline: 0.2132,
  },
  75: {
    Lspline: -0.1618,
    Mspline: -0.0399,
    Sspline: 0.2245,
  },
  76: {
    Lspline: -0.1732,
    Mspline: -0.0411,
    Sspline: 0.2357,
  },
  77: {
    Lspline: -0.1845,
    Mspline: -0.0424,
    Sspline: 0.2468,
  },
  78: {
    Lspline: -0.1956,
    Mspline: -0.0436,
    Sspline: 0.2577,
  },
  79: {
    Lspline: -0.2067,
    Mspline: -0.0448,
    Sspline: 0.2686,
  },
  80: {
    Lspline: -0.2176,
    Mspline: -0.0459,
    Sspline: 0.2793,
  },
  81: {
    Lspline: -0.2284,
    Mspline: -0.0471,
    Sspline: 0.2899,
  },
  82: {
    Lspline: -0.2390,
    Mspline: -0.0482,
    Sspline: 0.3004,
  },
  83: {
    Lspline: -0.2496,
    Mspline: -0.0493,
    Sspline: 0.3107,
  },
  84: {
    Lspline: -0.2600,
    Mspline: -0.0504,
    Sspline: 0.3210,
  },
  85: {
    Lspline: -0.2703,
    Mspline: -0.0515,
    Sspline: 0.3311,
  },
  86: {
    Lspline: -0.2805,
    Mspline: -0.0526,
    Sspline: 0.3411,
  },
  87: {
    Lspline: -0.2906,
    Mspline: -0.0536,
    Sspline: 0.3511,
  },
  88: {
    Lspline: -0.3006,
    Mspline: -0.0547,
    Sspline: 0.3609,
  },
  89: {
    Lspline: -0.3104,
    Mspline: -0.0557,
    Sspline: 0.3706,
  },
  90: {
    Lspline: -0.3202,
    Mspline: -0.0567,
    Sspline: 0.3801,
  },
  91: {
    Lspline: -0.3298,
    Mspline: -0.0577,
    Sspline: 0.3896,
  },
  92: {
    Lspline: -0.3394,
    Mspline: -0.0587,
    Sspline: 0.3990,
  },
  93: {
    Lspline: -0.3488,
    Mspline: -0.0597,
    Sspline: 0.4083,
  },
  94: {
    Lspline: -0.3582,
    Mspline: -0.0606,
    Sspline: 0.4174,
  },
  95: {
    Lspline: -0.3674,
    Mspline: -0.0616,
    Sspline: 0.4265,
  },
  3.25: {
    Lspline: 1.2621,
    Mspline: -0.0191,
    Sspline: -0.0616,
  },
  3.5: {
    Lspline: 1.1460,
    Mspline: -0.0167,
    Sspline: -0.0420,
  },
  3.75: {
    Lspline: 1.0382,
    Mspline: -0.0147,
    Sspline: -0.0242,
  },
  4.25: {
    Lspline: 0.8437,
    Mspline: -0.0122,
    Sspline: 0.0047,
  },
  4.5: {
    Lspline: 0.7556,
    Mspline: -0.0117,
    Sspline: 0.0153,
  },
  4.75: {
    Lspline: 0.6729,
    Mspline: -0.0119,
    Sspline: 0.0232,
  },
  5.25: {
    Lspline: 0.5227,
    Mspline: -0.0136,
    Sspline: 0.0323,
  },
  5.5: {
    Lspline: 0.4549,
    Mspline: -0.0148,
    Sspline: 0.0342,
  },
  5.75: {
    Lspline: 0.3918,
    Mspline: -0.0159,
    Sspline: 0.0351,
  },
  6.25: {
    Lspline: 0.2788,
    Mspline: -0.0171,
    Sspline: 0.0345,
  },
  6.5: {
    Lspline: 0.2285,
    Mspline: -0.0173,
    Sspline: 0.0339,
  },
  6.75: {
    Lspline: 0.1822,
    Mspline: -0.0172,
    Sspline: 0.0332,
  },
  7.25: {
    Lspline: 0.1008,
    Mspline: -0.0163,
    Sspline: 0.0323,
  },
  7.5: {
    Lspline: 0.0651,
    Mspline: -0.0156,
    Sspline: 0.0318,
  },
  7.75: {
    Lspline: 0.0324,
    Mspline: -0.0148,
    Sspline: 0.0310,
  },
  8.25: {
    Lspline: -0.0244,
    Mspline: -0.0134,
    Sspline: 0.0278,
  },
  8.5: {
    Lspline: -0.0490,
    Mspline: -0.0131,
    Sspline: 0.0249,
  },
  8.75: {
    Lspline: -0.0712,
    Mspline: -0.0132,
    Sspline: 0.0208,
  },
  9.25: {
    Lspline: -0.1092,
    Mspline: -0.0139,
    Sspline: 0.0104,
  },
  9.5: {
    Lspline: -0.1254,
    Mspline: -0.0142,
    Sspline: 0.0048,
  },
  9.75: {
    Lspline: -0.1400,
    Mspline: -0.0143,
    Sspline: -0.0007,
  },
  10.25: {
    Lspline: -0.1653,
    Mspline: -0.0139,
    Sspline: -0.0103,
  },
  10.5: {
    Lspline: -0.1762,
    Mspline: -0.0132,
    Sspline: -0.0143,
  },
  10.75: {
    Lspline: -0.1862,
    Mspline: -0.0122,
    Sspline: -0.0177,
  },
  11.25: {
    Lspline: -0.2036,
    Mspline: -0.0091,
    Sspline: -0.0223,
  },
  11.5: {
    Lspline: -0.2112,
    Mspline: -0.0070,
    Sspline: -0.0235,
  },
  11.75: {
    Lspline: -0.2180,
    Mspline: -0.0047,
    Sspline: -0.0239,
  },
  12.25: {
    Lspline: -0.2294,
    Mspline: 0.0006,
    Sspline: -0.0230,
  },
  12.5: {
    Lspline: -0.2340,
    Mspline: 0.0035,
    Sspline: -0.0217,
  },
  12.75: {
    Lspline: -0.2378,
    Mspline: 0.0065,
    Sspline: -0.0199,
  },
  13.25: {
    Lspline: -0.2434,
    Mspline: 0.0126,
    Sspline: -0.0153,
  },
  13.5: {
    Lspline: -0.2451,
    Mspline: 0.0156,
    Sspline: -0.0126,
  },
  13.75: {
    Lspline: -0.2462,
    Mspline: 0.0186,
    Sspline: -0.0098,
  },
  14.25: {
    Lspline: -0.2465,
    Mspline: 0.0242,
    Sspline: -0.0038,
  },
  14.5: {
    Lspline: -0.2457,
    Mspline: 0.0268,
    Sspline: -0.0007,
  },
  14.75: {
    Lspline: -0.2445,
    Mspline: 0.0293,
    Sspline: 0.0024,
  },
  15.25: {
    Lspline: -0.2405,
    Mspline: 0.0336,
    Sspline: 0.0082,
  },
  15.5: {
    Lspline: -0.2378,
    Mspline: 0.0354,
    Sspline: 0.0110,
  },
  15.75: {
    Lspline: -0.2348,
    Mspline: 0.0370,
    Sspline: 0.0135,
  },
  16.25: {
    Lspline: -0.2275,
    Mspline: 0.0396,
    Sspline: 0.0180,
  },
  16.5: {
    Lspline: -0.2234,
    Mspline: 0.0406,
    Sspline: 0.0200,
  },
  16.75: {
    Lspline: -0.2189,
    Mspline: 0.0414,
    Sspline: 0.0218,
  },
  17.25: {
    Lspline: -0.2091,
    Mspline: 0.0425,
    Sspline: 0.0247,
  },
  17.5: {
    Lspline: -0.2039,
    Mspline: 0.0429,
    Sspline: 0.0258,
  },
  17.75: {
    Lspline: -0.1983,
    Mspline: 0.0431,
    Sspline: 0.0268,
  },
  18.25: {
    Lspline: -0.1867,
    Mspline: 0.0432,
    Sspline: 0.0280,
  },
  18.5: {
    Lspline: -0.1805,
    Mspline: 0.0431,
    Sspline: 0.0283,
  },
  18.75: {
    Lspline: -0.1742,
    Mspline: 0.0429,
    Sspline: 0.0285,
  },
  19.25: {
    Lspline: -0.1612,
    Mspline: 0.0424,
    Sspline: 0.0282,
  },
  19.5: {
    Lspline: -0.1544,
    Mspline: 0.0421,
    Sspline: 0.0278,
  },
  19.75: {
    Lspline: -0.1476,
    Mspline: 0.0418,
    Sspline: 0.0272,
  },
  20.25: {
    Lspline: -0.1335,
    Mspline: 0.0410,
    Sspline: 0.0257,
  },
  20.5: {
    Lspline: -0.1264,
    Mspline: 0.0406,
    Sspline: 0.0248,
  },
  20.75: {
    Lspline: -0.1192,
    Mspline: 0.0401,
    Sspline: 0.0238,
  },
  21.25: {
    Lspline: -0.1046,
    Mspline: 0.0392,
    Sspline: 0.0214,
  },
  21.5: {
    Lspline: -0.0973,
    Mspline: 0.0387,
    Sspline: 0.0200,
  },
  21.75: {
    Lspline: -0.0900,
    Mspline: 0.0382,
    Sspline: 0.0186,
  },
  22.25: {
    Lspline: -0.0753,
    Mspline: 0.0372,
    Sspline: 0.0155,
  },
  22.5: {
    Lspline: -0.0679,
    Mspline: 0.0367,
    Sspline: 0.0138,
  },
  22.75: {
    Lspline: -0.0606,
    Mspline: 0.0362,
    Sspline: 0.0120,
  },
  23.25: {
    Lspline: -0.0460,
    Mspline: 0.0351,
    Sspline: 0.0082,
  },
  23.5: {
    Lspline: -0.0388,
    Mspline: 0.0346,
    Sspline: 0.0062,
  },
  23.75: {
    Lspline: -0.0316,
    Mspline: 0.0341,
    Sspline: 0.0041,
  },
  24.25: {
    Lspline: -0.0173,
    Mspline: 0.0330,
    Sspline: -0.0003,
  },
  24.5: {
    Lspline: -0.0103,
    Mspline: 0.0325,
    Sspline: -0.0026,
  },
  24.75: {
    Lspline: -0.0033,
    Mspline: 0.0319,
    Sspline: -0.0049,
  },
  25.25: {
    Lspline: 0.0105,
    Mspline: 0.0308,
    Sspline: -0.0098,
  },
  25.5: {
    Lspline: 0.0173,
    Mspline: 0.0303,
    Sspline: -0.0124,
  },
  25.75: {
    Lspline: 0.0241,
    Mspline: 0.0297,
    Sspline: -0.0149,
  },
  26.25: {
    Lspline: 0.0372,
    Mspline: 0.0287,
    Sspline: -0.0202,
  },
  26.5: {
    Lspline: 0.0437,
    Mspline: 0.0281,
    Sspline: -0.0228,
  },
  26.75: {
    Lspline: 0.0500,
    Mspline: 0.0276,
    Sspline: -0.0255,
  },
  27.25: {
    Lspline: 0.0624,
    Mspline: 0.0266,
    Sspline: -0.0308,
  },
  27.5: {
    Lspline: 0.0684,
    Mspline: 0.0261,
    Sspline: -0.0335,
  },
  27.75: {
    Lspline: 0.0744,
    Mspline: 0.0256,
    Sspline: -0.0361,
  },
  28.25: {
    Lspline: 0.0859,
    Mspline: 0.0247,
    Sspline: -0.0413,
  },
  28.5: {
    Lspline: 0.0914,
    Mspline: 0.0243,
    Sspline: -0.0439,
  },
  28.75: {
    Lspline: 0.0969,
    Mspline: 0.0238,
    Sspline: -0.0464,
  },
  29.25: {
    Lspline: 0.1074,
    Mspline: 0.0230,
    Sspline: -0.0513,
  },
  29.5: {
    Lspline: 0.1124,
    Mspline: 0.0225,
    Sspline: -0.0537,
  },
  29.75: {
    Lspline: 0.1174,
    Mspline: 0.0221,
    Sspline: -0.0560,
  },
  30.25: {
    Lspline: 0.1268,
    Mspline: 0.0214,
    Sspline: -0.0606,
  },
  30.5: {
    Lspline: 0.1314,
    Mspline: 0.0210,
    Sspline: -0.0627,
  },
  30.75: {
    Lspline: 0.1358,
    Mspline: 0.0206,
    Sspline: -0.0648,
  },
  31.25: {
    Lspline: 0.1441,
    Mspline: 0.0199,
    Sspline: -0.0689,
  },
  31.5: {
    Lspline: 0.1481,
    Mspline: 0.0196,
    Sspline: -0.0708,
  },
  31.75: {
    Lspline: 0.1520,
    Mspline: 0.0192,
    Sspline: -0.0727,
  },
  32.25: {
    Lspline: 0.1592,
    Mspline: 0.0186,
    Sspline: -0.0763,
  },
  32.5: {
    Lspline: 0.1626,
    Mspline: 0.0182,
    Sspline: -0.0780,
  },
  32.75: {
    Lspline: 0.1659,
    Mspline: 0.0179,
    Sspline: -0.0797,
  },
  33.25: {
    Lspline: 0.1720,
    Mspline: 0.0173,
    Sspline: -0.0828,
  },
  33.5: {
    Lspline: 0.1748,
    Mspline: 0.0169,
    Sspline: -0.0843,
  },
  33.75: {
    Lspline: 0.1775,
    Mspline: 0.0166,
    Sspline: -0.0858,
  },
  34.25: {
    Lspline: 0.1825,
    Mspline: 0.0159,
    Sspline: -0.0885,
  },
  34.5: {
    Lspline: 0.1848,
    Mspline: 0.0156,
    Sspline: -0.0898,
  },
  34.75: {
    Lspline: 0.1869,
    Mspline: 0.0153,
    Sspline: -0.0910,
  },
  35.25: {
    Lspline: 0.1907,
    Mspline: 0.0146,
    Sspline: -0.0933,
  },
  35.5: {
    Lspline: 0.1924,
    Mspline: 0.0142,
    Sspline: -0.0944,
  },
  35.75: {
    Lspline: 0.1940,
    Mspline: 0.0139,
    Sspline: -0.0954,
  },
  36.25: {
    Lspline: 0.1968,
    Mspline: 0.0131,
    Sspline: -0.0972,
  },
  36.5: {
    Lspline: 0.1980,
    Mspline: 0.0127,
    Sspline: -0.0980,
  },
  36.75: {
    Lspline: 0.1990,
    Mspline: 0.0124,
    Sspline: -0.0988,
  },
  37.25: {
    Lspline: 0.2008,
    Mspline: 0.0116,
    Sspline: -0.1001,
  },
  37.5: {
    Lspline: 0.2014,
    Mspline: 0.0112,
    Sspline: -0.1007,
  },
  37.75: {
    Lspline: 0.2020,
    Mspline: 0.0108,
    Sspline: -0.1012,
  },
  38.25: {
    Lspline: 0.2028,
    Mspline: 0.0101,
    Sspline: -0.1020,
  },
  38.5: {
    Lspline: 0.2030,
    Mspline: 0.0097,
    Sspline: -0.1023,
  },
  38.75: {
    Lspline: 0.2031,
    Mspline: 0.0093,
    Sspline: -0.1025,
  },
  39.25: {
    Lspline: 0.2030,
    Mspline: 0.0085,
    Sspline: -0.1028,
  },
  39.5: {
    Lspline: 0.2028,
    Mspline: 0.0082,
    Sspline: -0.1029,
  },
  39.75: {
    Lspline: 0.2025,
    Mspline: 0.0078,
    Sspline: -0.1029,
  },
  40.25: {
    Lspline: 0.2016,
    Mspline: 0.0070,
    Sspline: -0.1027,
  },
  40.5: {
    Lspline: 0.2010,
    Mspline: 0.0066,
    Sspline: -0.1026,
  },
  40.75: {
    Lspline: 0.2003,
    Mspline: 0.0063,
    Sspline: -0.1023,
  },
  41.25: {
    Lspline: 0.1986,
    Mspline: 0.0055,
    Sspline: -0.1017,
  },
  41.5: {
    Lspline: 0.1976,
    Mspline: 0.0052,
    Sspline: -0.1013,
  },
  41.75: {
    Lspline: 0.1966,
    Mspline: 0.0048,
    Sspline: -0.1008,
  },
  42.25: {
    Lspline: 0.1943,
    Mspline: 0.0041,
    Sspline: -0.0997,
  },
  42.5: {
    Lspline: 0.1931,
    Mspline: 0.0038,
    Sspline: -0.0990,
  },
  42.75: {
    Lspline: 0.1918,
    Mspline: 0.0034,
    Sspline: -0.0983,
  },
  43.25: {
    Lspline: 0.1889,
    Mspline: 0.0027,
    Sspline: -0.0967,
  },
  43.5: {
    Lspline: 0.1874,
    Mspline: 0.0024,
    Sspline: -0.0958,
  },
  43.75: {
    Lspline: 0.1859,
    Mspline: 0.0021,
    Sspline: -0.0949,
  },
  44.25: {
    Lspline: 0.1826,
    Mspline: 0.0015,
    Sspline: -0.0929,
  },
  44.5: {
    Lspline: 0.1809,
    Mspline: 0.0011,
    Sspline: -0.0917,
  },
  44.75: {
    Lspline: 0.1791,
    Mspline: 0.0008,
    Sspline: -0.0906,
  },
  45.25: {
    Lspline: 0.1755,
    Mspline: 0.0002,
    Sspline: -0.0881,
  },
  45.5: {
    Lspline: 0.1736,
    Mspline: 0.0000,
    Sspline: -0.0868,
  },
  45.75: {
    Lspline: 0.1716,
    Mspline: -0.0003,
    Sspline: -0.0854,
  },
  46.25: {
    Lspline: 0.1676,
    Mspline: -0.0009,
    Sspline: -0.0826,
  },
  46.5: {
    Lspline: 0.1656,
    Mspline: -0.0012,
    Sspline: -0.0811,
  },
  46.75: {
    Lspline: 0.1635,
    Mspline: -0.0015,
    Sspline: -0.0795,
  },
  47.25: {
    Lspline: 0.1591,
    Mspline: -0.0021,
    Sspline: -0.0763,
  },
  47.5: {
    Lspline: 0.1569,
    Mspline: -0.0023,
    Sspline: -0.0747,
  },
  47.75: {
    Lspline: 0.1547,
    Mspline: -0.0026,
    Sspline: -0.0730,
  },
  48.25: {
    Lspline: 0.1501,
    Mspline: -0.0032,
    Sspline: -0.0695,
  },
  48.5: {
    Lspline: 0.1478,
    Mspline: -0.0035,
    Sspline: -0.0676,
  },
  48.75: {
    Lspline: 0.1454,
    Mspline: -0.0038,
    Sspline: -0.0658,
  },
  49.25: {
    Lspline: 0.1406,
    Mspline: -0.0044,
    Sspline: -0.0620,
  },
  49.5: {
    Lspline: 0.1382,
    Mspline: -0.0047,
    Sspline: -0.0601,
  },
  49.75: {
    Lspline: 0.1357,
    Mspline: -0.0050,
    Sspline: -0.0581,
  },
  50.25: {
    Lspline: 0.1307,
    Mspline: -0.0057,
    Sspline: -0.0540,
  },
  50.5: {
    Lspline: 0.1282,
    Mspline: -0.0060,
    Sspline: -0.0519,
  },
  50.75: {
    Lspline: 0.1256,
    Mspline: -0.0063,
    Sspline: -0.0498,
  },
  51.25: {
    Lspline: 0.1204,
    Mspline: -0.0069,
    Sspline: -0.0455,
  },
  51.5: {
    Lspline: 0.1178,
    Mspline: -0.0072,
    Sspline: -0.0433,
  },
  51.75: {
    Lspline: 0.1151,
    Mspline: -0.0076,
    Sspline: -0.0411,
  },
  52.25: {
    Lspline: 0.1098,
    Mspline: -0.0082,
    Sspline: -0.0365,
  },
  52.5: {
    Lspline: 0.1070,
    Mspline: -0.0086,
    Sspline: -0.0342,
  },
  52.75: {
    Lspline: 0.1043,
    Mspline: -0.0089,
    Sspline: -0.0318,
  },
  53.25: {
    Lspline: 0.0988,
    Mspline: -0.0096,
    Sspline: -0.0270,
  },
  53.5: {
    Lspline: 0.0960,
    Mspline: -0.0099,
    Sspline: -0.0246,
  },
  53.75: {
    Lspline: 0.0932,
    Mspline: -0.0103,
    Sspline: -0.0222,
  },
  54.25: {
    Lspline: 0.0876,
    Mspline: -0.0110,
    Sspline: -0.0172,
  },
  54.5: {
    Lspline: 0.0847,
    Mspline: -0.0113,
    Sspline: -0.0147,
  },
  54.75: {
    Lspline: 0.0818,
    Mspline: -0.0117,
    Sspline: -0.0121,
  },
  55.25: {
    Lspline: 0.0760,
    Mspline: -0.0124,
    Sspline: -0.0069,
  },
  55.5: {
    Lspline: 0.0731,
    Mspline: -0.0127,
    Sspline: -0.0043,
  },
  55.75: {
    Lspline: 0.0702,
    Mspline: -0.0131,
    Sspline: -0.0017,
  },
  56.25: {
    Lspline: 0.0643,
    Mspline: -0.0138,
    Sspline: 0.0036,
  },
  56.5: {
    Lspline: 0.0613,
    Mspline: -0.0142,
    Sspline: 0.0063,
  },
  56.75: {
    Lspline: 0.0583,
    Mspline: -0.0145,
    Sspline: 0.0090,
  },
  57.25: {
    Lspline: 0.0523,
    Mspline: -0.0152,
    Sspline: 0.0145,
  },
  57.5: {
    Lspline: 0.0493,
    Mspline: -0.0156,
    Sspline: 0.0173,
  },
  57.75: {
    Lspline: 0.0463,
    Mspline: -0.0160,
    Sspline: 0.0201,
  },
  58.25: {
    Lspline: 0.0402,
    Mspline: -0.0167,
    Sspline: 0.0257,
  },
  58.5: {
    Lspline: 0.0371,
    Mspline: -0.0170,
    Sspline: 0.0286,
  },
  58.75: {
    Lspline: 0.0341,
    Mspline: -0.0174,
    Sspline: 0.0314,
  },
  59.25: {
    Lspline: 0.0279,
    Mspline: -0.0181,
    Sspline: 0.0372,
  },
  59.5: {
    Lspline: 0.0249,
    Mspline: -0.0185,
    Sspline: 0.0401,
  },
  59.75: {
    Lspline: 0.0218,
    Mspline: -0.0188,
    Sspline: 0.0430,
  },
  60.25: {
    Lspline: 0.0156,
    Mspline: -0.0195,
    Sspline: 0.0489,
  },
  60.5: {
    Lspline: 0.0125,
    Mspline: -0.0199,
    Sspline: 0.0519,
  },
  60.75: {
    Lspline: 0.0095,
    Mspline: -0.0203,
    Sspline: 0.0548,
  },
  61.25: {
    Lspline: 0.0033,
    Mspline: -0.0210,
    Sspline: 0.0608,
  },
  61.5: {
    Lspline: 0.0002,
    Mspline: -0.0213,
    Sspline: 0.0638,
  },
  61.75: {
    Lspline: -0.0029,
    Mspline: -0.0217,
    Sspline: 0.0668,
  },
  62.25: {
    Lspline: -0.0091,
    Mspline: -0.0224,
    Sspline: 0.0729,
  },
  62.5: {
    Lspline: -0.0121,
    Mspline: -0.0227,
    Sspline: 0.0759,
  },
  62.75: {
    Lspline: -0.0152,
    Mspline: -0.0231,
    Sspline: 0.0789,
  },
  63.25: {
    Lspline: -0.0214,
    Mspline: -0.0238,
    Sspline: 0.0850,
  },
  63.5: {
    Lspline: -0.0244,
    Mspline: -0.0241,
    Sspline: 0.0881,
  },
  63.75: {
    Lspline: -0.0275,
    Mspline: -0.0245,
    Sspline: 0.0911,
  },
  64.25: {
    Lspline: -0.0337,
    Mspline: -0.0252,
    Sspline: 0.0973,
  },
  64.5: {
    Lspline: -0.0367,
    Mspline: -0.0255,
    Sspline: 0.1003,
  },
  64.75: {
    Lspline: -0.0398,
    Mspline: -0.0259,
    Sspline: 0.1034,
  },
  65.25: {
    Lspline: -0.0459,
    Mspline: -0.0266,
    Sspline: 0.1095,
  },
  65.5: {
    Lspline: -0.0490,
    Mspline: -0.0269,
    Sspline: 0.1125,
  },
  65.75: {
    Lspline: -0.0520,
    Mspline: -0.0273,
    Sspline: 0.1156,
  },
  66.25: {
    Lspline: -0.0581,
    Mspline: -0.0280,
    Sspline: 0.1217,
  },
  66.5: {
    Lspline: -0.0612,
    Mspline: -0.0283,
    Sspline: 0.1248,
  },
  66.75: {
    Lspline: -0.0642,
    Mspline: -0.0287,
    Sspline: 0.1278,
  },
  67.25: {
    Lspline: -0.0703,
    Mspline: -0.0293,
    Sspline: 0.1339,
  },
  67.5: {
    Lspline: -0.0733,
    Mspline: -0.0297,
    Sspline: 0.1369,
  },
  67.75: {
    Lspline: -0.0763,
    Mspline: -0.0300,
    Sspline: 0.1399,
  },
  68.25: {
    Lspline: -0.0824,
    Mspline: -0.0307,
    Sspline: 0.1459,
  },
  68.5: {
    Lspline: -0.0854,
    Mspline: -0.0311,
    Sspline: 0.1489,
  },
  68.75: {
    Lspline: -0.0884,
    Mspline: -0.0314,
    Sspline: 0.1519,
  },
  69.25: {
    Lspline: -0.0944,
    Mspline: -0.0321,
    Sspline: 0.1579,
  },
  69.5: {
    Lspline: -0.0974,
    Mspline: -0.0325,
    Sspline: 0.1609,
  },
  69.75: {
    Lspline: -0.1004,
    Mspline: -0.0328,
    Sspline: 0.1639,
  },
  70.25: {
    Lspline: -0.1064,
    Mspline: -0.0335,
    Sspline: 0.1698,
  },
  70.5: {
    Lspline: -0.1093,
    Mspline: -0.0339,
    Sspline: 0.1727,
  },
  70.75: {
    Lspline: -0.1123,
    Mspline: -0.0342,
    Sspline: 0.1757,
  },
  71.25: {
    Lspline: -0.1182,
    Mspline: -0.0349,
    Sspline: 0.1815,
  },
  71.5: {
    Lspline: -0.1212,
    Mspline: -0.0352,
    Sspline: 0.1844,
  },
  71.75: {
    Lspline: -0.1241,
    Mspline: -0.0356,
    Sspline: 0.1874,
  },
  72.25: {
    Lspline: -0.1300,
    Mspline: -0.0363,
    Sspline: 0.1932,
  },
  72.5: {
    Lspline: -0.1329,
    Mspline: -0.0366,
    Sspline: 0.1960,
  },
  72.75: {
    Lspline: -0.1358,
    Mspline: -0.0369,
    Sspline: 0.1989,
  },
  73.25: {
    Lspline: -0.1417,
    Mspline: -0.0376,
    Sspline: 0.2047,
  },
  73.5: {
    Lspline: -0.1446,
    Mspline: -0.0379,
    Sspline: 0.2075,
  },
  73.75: {
    Lspline: -0.1475,
    Mspline: -0.0382,
    Sspline: 0.2104,
  },
  74.25: {
    Lspline: -0.1532,
    Mspline: -0.0389,
    Sspline: 0.2161,
  },
  74.5: {
    Lspline: -0.1561,
    Mspline: -0.0392,
    Sspline: 0.2189,
  },
  74.75: {
    Lspline: -0.1590,
    Mspline: -0.0395,
    Sspline: 0.2217,
  },
  75.25: {
    Lspline: -0.1647,
    Mspline: -0.0402,
    Sspline: 0.2273,
  },
  75.5: {
    Lspline: -0.1675,
    Mspline: -0.0405,
    Sspline: 0.2301,
  },
  75.75: {
    Lspline: -0.1704,
    Mspline: -0.0408,
    Sspline: 0.2329,
  },
  76.25: {
    Lspline: -0.1760,
    Mspline: -0.0414,
    Sspline: 0.2385,
  },
  76.5: {
    Lspline: -0.1789,
    Mspline: -0.0417,
    Sspline: 0.2413,
  },
  76.75: {
    Lspline: -0.1817,
    Mspline: -0.0421,
    Sspline: 0.2440,
  },
  77.25: {
    Lspline: -0.1873,
    Mspline: -0.0427,
    Sspline: 0.2495,
  },
  77.5: {
    Lspline: -0.1901,
    Mspline: -0.0430,
    Sspline: 0.2523,
  },
  77.75: {
    Lspline: -0.1929,
    Mspline: -0.0433,
    Sspline: 0.2550,
  },
  78.25: {
    Lspline: -0.1984,
    Mspline: -0.0439,
    Sspline: 0.2605,
  },
  78.5: {
    Lspline: -0.2012,
    Mspline: -0.0442,
    Sspline: 0.2632,
  },
  78.75: {
    Lspline: -0.2039,
    Mspline: -0.0445,
    Sspline: 0.2659,
  },
  79.25: {
    Lspline: -0.2094,
    Mspline: -0.0451,
    Sspline: 0.2713,
  },
  79.5: {
    Lspline: -0.2121,
    Mspline: -0.0454,
    Sspline: 0.2739,
  },
  79.75: {
    Lspline: -0.2149,
    Mspline: -0.0456,
    Sspline: 0.2766,
  },
  80.25: {
    Lspline: -0.2203,
    Mspline: -0.0462,
    Sspline: 0.2820,
  },
  80.5: {
    Lspline: -0.2230,
    Mspline: -0.0465,
    Sspline: 0.2846,
  },
  80.75: {
    Lspline: -0.2257,
    Mspline: -0.0468,
    Sspline: 0.2872,
  },
  81.25: {
    Lspline: -0.2310,
    Mspline: -0.0474,
    Sspline: 0.2925,
  },
  81.5: {
    Lspline: -0.2337,
    Mspline: -0.0477,
    Sspline: 0.2951,
  },
  81.75: {
    Lspline: -0.2364,
    Mspline: -0.0479,
    Sspline: 0.2978,
  },
  82.25: {
    Lspline: -0.2417,
    Mspline: -0.0485,
    Sspline: 0.3030,
  },
  82.5: {
    Lspline: -0.2443,
    Mspline: -0.0488,
    Sspline: 0.3056,
  },
  82.75: {
    Lspline: -0.2470,
    Mspline: -0.0491,
    Sspline: 0.3082,
  },
  83.25: {
    Lspline: -0.2522,
    Mspline: -0.0496,
    Sspline: 0.3133,
  },
  83.5: {
    Lspline: -0.2548,
    Mspline: -0.0499,
    Sspline: 0.3159,
  },
  83.75: {
    Lspline: -0.2574,
    Mspline: -0.0502,
    Sspline: 0.3184,
  },
  84.25: {
    Lspline: -0.2626,
    Mspline: -0.0507,
    Sspline: 0.3235,
  },
  84.5: {
    Lspline: -0.2652,
    Mspline: -0.0510,
    Sspline: 0.3261,
  },
  84.75: {
    Lspline: -0.2678,
    Mspline: -0.0512,
    Sspline: 0.3286,
  },
  85.25: {
    Lspline: -0.2729,
    Mspline: -0.0518,
    Sspline: 0.3336,
  },
  85.5: {
    Lspline: -0.2754,
    Mspline: -0.0520,
    Sspline: 0.3361,
  },
  85.75: {
    Lspline: -0.2780,
    Mspline: -0.0523,
    Sspline: 0.3387,
  },
  86.25: {
    Lspline: -0.2831,
    Mspline: -0.0528,
    Sspline: 0.3436,
  },
  86.5: {
    Lspline: -0.2856,
    Mspline: -0.0531,
    Sspline: 0.3461,
  },
  86.75: {
    Lspline: -0.2881,
    Mspline: -0.0534,
    Sspline: 0.3486,
  },
  87.25: {
    Lspline: -0.2931,
    Mspline: -0.0539,
    Sspline: 0.3535,
  },
  87.5: {
    Lspline: -0.2956,
    Mspline: -0.0541,
    Sspline: 0.3560,
  },
  87.75: {
    Lspline: -0.2981,
    Mspline: -0.0544,
    Sspline: 0.3584,
  },
  88.25: {
    Lspline: -0.3031,
    Mspline: -0.0549,
    Sspline: 0.3633,
  },
  88.5: {
    Lspline: -0.3055,
    Mspline: -0.0552,
    Sspline: 0.3657,
  },
  88.75: {
    Lspline: -0.3080,
    Mspline: -0.0554,
    Sspline: 0.3681,
  },
  89.25: {
    Lspline: -0.3129,
    Mspline: -0.0559,
    Sspline: 0.3730,
  },
  89.5: {
    Lspline: -0.3153,
    Mspline: -0.0562,
    Sspline: 0.3754,
  },
  89.75: {
    Lspline: -0.3178,
    Mspline: -0.0564,
    Sspline: 0.3777,
  },
  90.25: {
    Lspline: -0.3226,
    Mspline: -0.0570,
    Sspline: 0.3825,
  },
  90.5: {
    Lspline: -0.3250,
    Mspline: -0.0572,
    Sspline: 0.3849,
  },
  90.75: {
    Lspline: -0.3274,
    Mspline: -0.0575,
    Sspline: 0.3873,
  },
  91.25: {
    Lspline: -0.3322,
    Mspline: -0.0579,
    Sspline: 0.3920,
  },
  91.5: {
    Lspline: -0.3346,
    Mspline: -0.0582,
    Sspline: 0.3943,
  },
  91.75: {
    Lspline: -0.3370,
    Mspline: -0.0584,
    Sspline: 0.3967,
  },
  92.25: {
    Lspline: -0.3417,
    Mspline: -0.0589,
    Sspline: 0.4013,
  },
  92.5: {
    Lspline: -0.3441,
    Mspline: -0.0592,
    Sspline: 0.4036,
  },
  92.75: {
    Lspline: -0.3465,
    Mspline: -0.0594,
    Sspline: 0.4060,
  },
  93.25: {
    Lspline: -0.3512,
    Mspline: -0.0599,
    Sspline: 0.4106,
  },
  93.5: {
    Lspline: -0.3535,
    Mspline: -0.0602,
    Sspline: 0.4129,
  },
  93.75: {
    Lspline: -0.3558,
    Mspline: -0.0604,
    Sspline: 0.4152,
  },
  94.25: {
    Lspline: -0.3605,
    Mspline: -0.0609,
    Sspline: 0.4197,
  },
  94.5: {
    Lspline: -0.3628,
    Mspline: -0.0611,
    Sspline: 0.4220,
  },
  94.75: {
    Lspline: -0.3651,
    Mspline: -0.0614,
    Sspline: 0.4243,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
