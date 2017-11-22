var coefficients = {
  L: {
    q0: 0.8236, // intercept
    q1: 0, // UNUSED!
  },
  M: {
    a0: -10.403, // intercept
    a1: 2.2633, // height
    a2: 0.0234, // age
    a3: -0.1555, // ethnicity: african american
    a4: -0.0262, // ethnicity: north east asian
    a5: -0.1516, // ethnicity: south east asian
    a6: -0.0833, // ethnicity: other/mixed
  },
  S: {
    p0: -2.3549, // intercept
    p1: 0.1017, // age
    p2: 0.081, // ethnicity: african american
    p3: -0.1809, // ethnicity: north east asian
    p4: 0.0459, // ethnicity: south east asian
    p5: -0.0503, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 0,
    Mspline: -0.1940,
    Sspline: 0.3694,
  },
  4: {
    Lspline: 0,
    Mspline: -0.1530,
    Sspline: 0.2744,
  },
  5: {
    Lspline: 0,
    Mspline: -0.1276,
    Sspline: 0.1995,
  },
  6: {
    Lspline: 0,
    Mspline: -0.1153,
    Sspline: 0.1355,
  },
  7: {
    Lspline: 0,
    Mspline: -0.1045,
    Sspline: 0.0815,
  },
  8: {
    Lspline: 0,
    Mspline: -0.0918,
    Sspline: 0.0396,
  },
  9: {
    Lspline: 0,
    Mspline: -0.0731,
    Sspline: 0.0074,
  },
  10: {
    Lspline: 0,
    Mspline: -0.0461,
    Sspline: -0.0137,
  },
  11: {
    Lspline: 0,
    Mspline: -0.0154,
    Sspline: -0.0246,
  },
  12: {
    Lspline: 0,
    Mspline: 0.0166,
    Sspline: -0.0289,
  },
  13: {
    Lspline: 0,
    Mspline: 0.0473,
    Sspline: -0.0304,
  },
  14: {
    Lspline: 0,
    Mspline: 0.0749,
    Sspline: -0.0310,
  },
  15: {
    Lspline: 0,
    Mspline: 0.0977,
    Sspline: -0.0316,
  },
  16: {
    Lspline: 0,
    Mspline: 0.1151,
    Sspline: -0.0326,
  },
  17: {
    Lspline: 0,
    Mspline: 0.1273,
    Sspline: -0.0339,
  },
  18: {
    Lspline: 0,
    Mspline: 0.1355,
    Sspline: -0.0354,
  },
  19: {
    Lspline: 0,
    Mspline: 0.1406,
    Sspline: -0.0371,
  },
  20: {
    Lspline: 0,
    Mspline: 0.1436,
    Sspline: -0.0391,
  },
  21: {
    Lspline: 0,
    Mspline: 0.1453,
    Sspline: -0.0414,
  },
  22: {
    Lspline: 0,
    Mspline: 0.1460,
    Sspline: -0.0442,
  },
  23: {
    Lspline: 0,
    Mspline: 0.1459,
    Sspline: -0.0474,
  },
  24: {
    Lspline: 0,
    Mspline: 0.1449,
    Sspline: -0.0511,
  },
  25: {
    Lspline: 0,
    Mspline: 0.1436,
    Sspline: -0.0550,
  },
  26: {
    Lspline: 0,
    Mspline: 0.1422,
    Sspline: -0.0592,
  },
  27: {
    Lspline: 0,
    Mspline: 0.1408,
    Sspline: -0.0635,
  },
  28: {
    Lspline: 0,
    Mspline: 0.1392,
    Sspline: -0.0680,
  },
  29: {
    Lspline: 0,
    Mspline: 0.1374,
    Sspline: -0.0723,
  },
  30: {
    Lspline: 0,
    Mspline: 0.1355,
    Sspline: -0.0767,
  },
  31: {
    Lspline: 0,
    Mspline: 0.1333,
    Sspline: -0.0808,
  },
  32: {
    Lspline: 0,
    Mspline: 0.1309,
    Sspline: -0.0847,
  },
  33: {
    Lspline: 0,
    Mspline: 0.1280,
    Sspline: -0.0883,
  },
  34: {
    Lspline: 0,
    Mspline: 0.1248,
    Sspline: -0.0915,
  },
  35: {
    Lspline: 0,
    Mspline: 0.1212,
    Sspline: -0.0942,
  },
  36: {
    Lspline: 0,
    Mspline: 0.1172,
    Sspline: -0.0962,
  },
  37: {
    Lspline: 0,
    Mspline: 0.1129,
    Sspline: -0.0976,
  },
  38: {
    Lspline: 0,
    Mspline: 0.1082,
    Sspline: -0.0981,
  },
  39: {
    Lspline: 0,
    Mspline: 0.1031,
    Sspline: -0.0977,
  },
  40: {
    Lspline: 0,
    Mspline: 0.0977,
    Sspline: -0.0965,
  },
  41: {
    Lspline: 0,
    Mspline: 0.0919,
    Sspline: -0.0945,
  },
  42: {
    Lspline: 0,
    Mspline: 0.0858,
    Sspline: -0.0916,
  },
  43: {
    Lspline: 0,
    Mspline: 0.0794,
    Sspline: -0.0880,
  },
  44: {
    Lspline: 0,
    Mspline: 0.0727,
    Sspline: -0.0837,
  },
  45: {
    Lspline: 0,
    Mspline: 0.0658,
    Sspline: -0.0787,
  },
  46: {
    Lspline: 0,
    Mspline: 0.0587,
    Sspline: -0.0731,
  },
  47: {
    Lspline: 0,
    Mspline: 0.0514,
    Sspline: -0.0669,
  },
  48: {
    Lspline: 0,
    Mspline: 0.0439,
    Sspline: -0.0602,
  },
  49: {
    Lspline: 0,
    Mspline: 0.0362,
    Sspline: -0.0529,
  },
  50: {
    Lspline: 0,
    Mspline: 0.0283,
    Sspline: -0.0453,
  },
  51: {
    Lspline: 0,
    Mspline: 0.0202,
    Sspline: -0.0373,
  },
  52: {
    Lspline: 0,
    Mspline: 0.0119,
    Sspline: -0.0289,
  },
  53: {
    Lspline: 0,
    Mspline: 0.0034,
    Sspline: -0.0202,
  },
  54: {
    Lspline: 0,
    Mspline: -0.0053,
    Sspline: -0.0113,
  },
  55: {
    Lspline: 0,
    Mspline: -0.0143,
    Sspline: -0.0022,
  },
  56: {
    Lspline: 0,
    Mspline: -0.0234,
    Sspline: 0.0071,
  },
  57: {
    Lspline: 0,
    Mspline: -0.0328,
    Sspline: 0.0165,
  },
  58: {
    Lspline: 0,
    Mspline: -0.0424,
    Sspline: 0.0260,
  },
  59: {
    Lspline: 0,
    Mspline: -0.0523,
    Sspline: 0.0356,
  },
  60: {
    Lspline: 0,
    Mspline: -0.0623,
    Sspline: 0.0453,
  },
  61: {
    Lspline: 0,
    Mspline: -0.0726,
    Sspline: 0.0550,
  },
  62: {
    Lspline: 0,
    Mspline: -0.0830,
    Sspline: 0.0647,
  },
  63: {
    Lspline: 0,
    Mspline: -0.0936,
    Sspline: 0.0744,
  },
  64: {
    Lspline: 0,
    Mspline: -0.1043,
    Sspline: 0.0841,
  },
  65: {
    Lspline: 0,
    Mspline: -0.1152,
    Sspline: 0.0938,
  },
  66: {
    Lspline: 0,
    Mspline: -0.1263,
    Sspline: 0.1034,
  },
  67: {
    Lspline: 0,
    Mspline: -0.1375,
    Sspline: 0.1131,
  },
  68: {
    Lspline: 0,
    Mspline: -0.1488,
    Sspline: 0.1228,
  },
  69: {
    Lspline: 0,
    Mspline: -0.1603,
    Sspline: 0.1325,
  },
  70: {
    Lspline: 0,
    Mspline: -0.1718,
    Sspline: 0.1421,
  },
  71: {
    Lspline: 0,
    Mspline: -0.1835,
    Sspline: 0.1517,
  },
  72: {
    Lspline: 0,
    Mspline: -0.1952,
    Sspline: 0.1612,
  },
  73: {
    Lspline: 0,
    Mspline: -0.2069,
    Sspline: 0.1707,
  },
  74: {
    Lspline: 0,
    Mspline: -0.2187,
    Sspline: 0.1801,
  },
  75: {
    Lspline: 0,
    Mspline: -0.2305,
    Sspline: 0.1895,
  },
  76: {
    Lspline: 0,
    Mspline: -0.2422,
    Sspline: 0.1987,
  },
  77: {
    Lspline: 0,
    Mspline: -0.2540,
    Sspline: 0.2079,
  },
  78: {
    Lspline: 0,
    Mspline: -0.2656,
    Sspline: 0.2170,
  },
  79: {
    Lspline: 0,
    Mspline: -0.2772,
    Sspline: 0.2260,
  },
  80: {
    Lspline: 0,
    Mspline: -0.2887,
    Sspline: 0.2350,
  },
  81: {
    Lspline: 0,
    Mspline: -0.3001,
    Sspline: 0.2438,
  },
  82: {
    Lspline: 0,
    Mspline: -0.3114,
    Sspline: 0.2526,
  },
  83: {
    Lspline: 0,
    Mspline: -0.3226,
    Sspline: 0.2613,
  },
  84: {
    Lspline: 0,
    Mspline: -0.3337,
    Sspline: 0.2699,
  },
  85: {
    Lspline: 0,
    Mspline: -0.3447,
    Sspline: 0.2784,
  },
  86: {
    Lspline: 0,
    Mspline: -0.3555,
    Sspline: 0.2868,
  },
  87: {
    Lspline: 0,
    Mspline: -0.3662,
    Sspline: 0.2952,
  },
  88: {
    Lspline: 0,
    Mspline: -0.3768,
    Sspline: 0.3034,
  },
  89: {
    Lspline: 0,
    Mspline: -0.3872,
    Sspline: 0.3116,
  },
  90: {
    Lspline: 0,
    Mspline: -0.3976,
    Sspline: 0.3196,
  },
  91: {
    Lspline: 0,
    Mspline: -0.4079,
    Sspline: 0.3276,
  },
  92: {
    Lspline: 0,
    Mspline: -0.4180,
    Sspline: 0.3355,
  },
  93: {
    Lspline: 0,
    Mspline: -0.4280,
    Sspline: 0.3433,
  },
  94: {
    Lspline: 0,
    Mspline: -0.4379,
    Sspline: 0.3510,
  },
  95: {
    Lspline: 0,
    Mspline: -0.4477,
    Sspline: 0.3586,
  },
  3.25: {
    Lspline: 0,
    Mspline: -0.1824,
    Sspline: 0.3431,
  },
  3.5: {
    Lspline: 0,
    Mspline: -0.1717,
    Sspline: 0.3186,
  },
  3.75: {
    Lspline: 0,
    Mspline: -0.1619,
    Sspline: 0.2958,
  },
  4.25: {
    Lspline: 0,
    Mspline: -0.1451,
    Sspline: 0.2542,
  },
  4.5: {
    Lspline: 0,
    Mspline: -0.1382,
    Sspline: 0.2352,
  },
  4.75: {
    Lspline: 0,
    Mspline: -0.1324,
    Sspline: 0.2170,
  },
  5.25: {
    Lspline: 0,
    Mspline: -0.1238,
    Sspline: 0.1827,
  },
  5.5: {
    Lspline: 0,
    Mspline: -0.1206,
    Sspline: 0.1664,
  },
  5.75: {
    Lspline: 0,
    Mspline: -0.1179,
    Sspline: 0.1507,
  },
  6.25: {
    Lspline: 0,
    Mspline: -0.1128,
    Sspline: 0.1209,
  },
  6.5: {
    Lspline: 0,
    Mspline: -0.1102,
    Sspline: 0.1069,
  },
  6.75: {
    Lspline: 0,
    Mspline: -0.1074,
    Sspline: 0.0938,
  },
  7.25: {
    Lspline: 0,
    Mspline: -0.1014,
    Sspline: 0.0700,
  },
  7.5: {
    Lspline: 0,
    Mspline: -0.0983,
    Sspline: 0.0592,
  },
  7.75: {
    Lspline: 0,
    Mspline: -0.0952,
    Sspline: 0.0491,
  },
  8.25: {
    Lspline: 0,
    Mspline: -0.0881,
    Sspline: 0.0307,
  },
  8.5: {
    Lspline: 0,
    Mspline: -0.0838,
    Sspline: 0.0223,
  },
  8.75: {
    Lspline: 0,
    Mspline: -0.0787,
    Sspline: 0.0145,
  },
  9.25: {
    Lspline: 0,
    Mspline: -0.0669,
    Sspline: 0.0010,
  },
  9.5: {
    Lspline: 0,
    Mspline: -0.0604,
    Sspline: -0.0046,
  },
  9.75: {
    Lspline: 0,
    Mspline: -0.0534,
    Sspline: -0.0095,
  },
  10.25: {
    Lspline: 0,
    Mspline: -0.0386,
    Sspline: -0.0173,
  },
  10.5: {
    Lspline: 0,
    Mspline: -0.0310,
    Sspline: -0.0203,
  },
  10.75: {
    Lspline: 0,
    Mspline: -0.0232,
    Sspline: -0.0227,
  },
  11.25: {
    Lspline: 0,
    Mspline: -0.0074,
    Sspline: -0.0261,
  },
  11.5: {
    Lspline: 0,
    Mspline: 0.0006,
    Sspline: -0.0273,
  },
  11.75: {
    Lspline: 0,
    Mspline: 0.0086,
    Sspline: -0.0282,
  },
  12.25: {
    Lspline: 0,
    Mspline: 0.0244,
    Sspline: -0.0294,
  },
  12.5: {
    Lspline: 0,
    Mspline: 0.0322,
    Sspline: -0.0298,
  },
  12.75: {
    Lspline: 0,
    Mspline: 0.0399,
    Sspline: -0.0301,
  },
  13.25: {
    Lspline: 0,
    Mspline: 0.0546,
    Sspline: -0.0306,
  },
  13.5: {
    Lspline: 0,
    Mspline: 0.0616,
    Sspline: -0.0307,
  },
  13.75: {
    Lspline: 0,
    Mspline: 0.0684,
    Sspline: -0.0308,
  },
  14.25: {
    Lspline: 0,
    Mspline: 0.0811,
    Sspline: -0.0311,
  },
  14.5: {
    Lspline: 0,
    Mspline: 0.0870,
    Sspline: -0.0312,
  },
  14.75: {
    Lspline: 0,
    Mspline: 0.0925,
    Sspline: -0.0314,
  },
  15.25: {
    Lspline: 0,
    Mspline: 0.1026,
    Sspline: -0.0318,
  },
  15.5: {
    Lspline: 0,
    Mspline: 0.1071,
    Sspline: -0.0320,
  },
  15.75: {
    Lspline: 0,
    Mspline: 0.1113,
    Sspline: -0.0323,
  },
  16.25: {
    Lspline: 0,
    Mspline: 0.1186,
    Sspline: -0.0329,
  },
  16.5: {
    Lspline: 0,
    Mspline: 0.1217,
    Sspline: -0.0332,
  },
  16.75: {
    Lspline: 0,
    Mspline: 0.1247,
    Sspline: -0.0336,
  },
  17.25: {
    Lspline: 0,
    Mspline: 0.1297,
    Sspline: -0.0343,
  },
  17.5: {
    Lspline: 0,
    Mspline: 0.1318,
    Sspline: -0.0346,
  },
  17.75: {
    Lspline: 0,
    Mspline: 0.1338,
    Sspline: -0.0350,
  },
  18.25: {
    Lspline: 0,
    Mspline: 0.1370,
    Sspline: -0.0358,
  },
  18.5: {
    Lspline: 0,
    Mspline: 0.1384,
    Sspline: -0.0362,
  },
  18.75: {
    Lspline: 0,
    Mspline: 0.1396,
    Sspline: -0.0366,
  },
  19.25: {
    Lspline: 0,
    Mspline: 0.1415,
    Sspline: -0.0375,
  },
  19.5: {
    Lspline: 0,
    Mspline: 0.1423,
    Sspline: -0.0380,
  },
  19.75: {
    Lspline: 0,
    Mspline: 0.1430,
    Sspline: -0.0385,
  },
  20.25: {
    Lspline: 0,
    Mspline: 0.1442,
    Sspline: -0.0396,
  },
  20.5: {
    Lspline: 0,
    Mspline: 0.1446,
    Sspline: -0.0402,
  },
  20.75: {
    Lspline: 0,
    Mspline: 0.1450,
    Sspline: -0.0408,
  },
  21.25: {
    Lspline: 0,
    Mspline: 0.1456,
    Sspline: -0.0421,
  },
  21.5: {
    Lspline: 0,
    Mspline: 0.1458,
    Sspline: -0.0428,
  },
  21.75: {
    Lspline: 0,
    Mspline: 0.1459,
    Sspline: -0.0435,
  },
  22.25: {
    Lspline: 0,
    Mspline: 0.1461,
    Sspline: -0.0450,
  },
  22.5: {
    Lspline: 0,
    Mspline: 0.1461,
    Sspline: -0.0458,
  },
  22.75: {
    Lspline: 0,
    Mspline: 0.1460,
    Sspline: -0.0466,
  },
  23.25: {
    Lspline: 0,
    Mspline: 0.1457,
    Sspline: -0.0483,
  },
  23.5: {
    Lspline: 0,
    Mspline: 0.1455,
    Sspline: -0.0492,
  },
  23.75: {
    Lspline: 0,
    Mspline: 0.1452,
    Sspline: -0.0501,
  },
  24.25: {
    Lspline: 0,
    Mspline: 0.1446,
    Sspline: -0.0520,
  },
  24.5: {
    Lspline: 0,
    Mspline: 0.1443,
    Sspline: -0.0530,
  },
  24.75: {
    Lspline: 0,
    Mspline: 0.1440,
    Sspline: -0.0540,
  },
  25.25: {
    Lspline: 0,
    Mspline: 0.1433,
    Sspline: -0.0560,
  },
  25.5: {
    Lspline: 0,
    Mspline: 0.1429,
    Sspline: -0.0571,
  },
  25.75: {
    Lspline: 0,
    Mspline: 0.1426,
    Sspline: -0.0581,
  },
  26.25: {
    Lspline: 0,
    Mspline: 0.1419,
    Sspline: -0.0603,
  },
  26.5: {
    Lspline: 0,
    Mspline: 0.1415,
    Sspline: -0.0614,
  },
  26.75: {
    Lspline: 0,
    Mspline: 0.1411,
    Sspline: -0.0625,
  },
  27.25: {
    Lspline: 0,
    Mspline: 0.1404,
    Sspline: -0.0646,
  },
  27.5: {
    Lspline: 0,
    Mspline: 0.1400,
    Sspline: -0.0657,
  },
  27.75: {
    Lspline: 0,
    Mspline: 0.1396,
    Sspline: -0.0669,
  },
  28.25: {
    Lspline: 0,
    Mspline: 0.1388,
    Sspline: -0.0691,
  },
  28.5: {
    Lspline: 0,
    Mspline: 0.1383,
    Sspline: -0.0702,
  },
  28.75: {
    Lspline: 0,
    Mspline: 0.1379,
    Sspline: -0.0713,
  },
  29.25: {
    Lspline: 0,
    Mspline: 0.1370,
    Sspline: -0.0734,
  },
  29.5: {
    Lspline: 0,
    Mspline: 0.1365,
    Sspline: -0.0745,
  },
  29.75: {
    Lspline: 0,
    Mspline: 0.1360,
    Sspline: -0.0756,
  },
  30.25: {
    Lspline: 0,
    Mspline: 0.1350,
    Sspline: -0.0777,
  },
  30.5: {
    Lspline: 0,
    Mspline: 0.1344,
    Sspline: -0.0788,
  },
  30.75: {
    Lspline: 0,
    Mspline: 0.1339,
    Sspline: -0.0798,
  },
  31.25: {
    Lspline: 0,
    Mspline: 0.1327,
    Sspline: -0.0818,
  },
  31.5: {
    Lspline: 0,
    Mspline: 0.1321,
    Sspline: -0.0828,
  },
  31.75: {
    Lspline: 0,
    Mspline: 0.1315,
    Sspline: -0.0837,
  },
  32.25: {
    Lspline: 0,
    Mspline: 0.1302,
    Sspline: -0.0856,
  },
  32.5: {
    Lspline: 0,
    Mspline: 0.1295,
    Sspline: -0.0865,
  },
  32.75: {
    Lspline: 0,
    Mspline: 0.1288,
    Sspline: -0.0874,
  },
  33.25: {
    Lspline: 0,
    Mspline: 0.1273,
    Sspline: -0.0891,
  },
  33.5: {
    Lspline: 0,
    Mspline: 0.1265,
    Sspline: -0.0899,
  },
  33.75: {
    Lspline: 0,
    Mspline: 0.1257,
    Sspline: -0.0907,
  },
  34.25: {
    Lspline: 0,
    Mspline: 0.1239,
    Sspline: -0.0922,
  },
  34.5: {
    Lspline: 0,
    Mspline: 0.1231,
    Sspline: -0.0929,
  },
  34.75: {
    Lspline: 0,
    Mspline: 0.1221,
    Sspline: -0.0935,
  },
  35.25: {
    Lspline: 0,
    Mspline: 0.1202,
    Sspline: -0.0947,
  },
  35.5: {
    Lspline: 0,
    Mspline: 0.1193,
    Sspline: -0.0953,
  },
  35.75: {
    Lspline: 0,
    Mspline: 0.1183,
    Sspline: -0.0958,
  },
  36.25: {
    Lspline: 0,
    Mspline: 0.1162,
    Sspline: -0.0966,
  },
  36.5: {
    Lspline: 0,
    Mspline: 0.1151,
    Sspline: -0.0970,
  },
  36.75: {
    Lspline: 0,
    Mspline: 0.1140,
    Sspline: -0.0973,
  },
  37.25: {
    Lspline: 0,
    Mspline: 0.1117,
    Sspline: -0.0978,
  },
  37.5: {
    Lspline: 0,
    Mspline: 0.1106,
    Sspline: -0.0979,
  },
  37.75: {
    Lspline: 0,
    Mspline: 0.1094,
    Sspline: -0.0980,
  },
  38.25: {
    Lspline: 0,
    Mspline: 0.1069,
    Sspline: -0.0981,
  },
  38.5: {
    Lspline: 0,
    Mspline: 0.1057,
    Sspline: -0.0980,
  },
  38.75: {
    Lspline: 0,
    Mspline: 0.1044,
    Sspline: -0.0979,
  },
  39.25: {
    Lspline: 0,
    Mspline: 0.1018,
    Sspline: -0.0975,
  },
  39.5: {
    Lspline: 0,
    Mspline: 0.1004,
    Sspline: -0.0972,
  },
  39.75: {
    Lspline: 0,
    Mspline: 0.0991,
    Sspline: -0.0969,
  },
  40.25: {
    Lspline: 0,
    Mspline: 0.0963,
    Sspline: -0.0961,
  },
  40.5: {
    Lspline: 0,
    Mspline: 0.0949,
    Sspline: -0.0956,
  },
  40.75: {
    Lspline: 0,
    Mspline: 0.0934,
    Sspline: -0.0951,
  },
  41.25: {
    Lspline: 0,
    Mspline: 0.0904,
    Sspline: -0.0938,
  },
  41.5: {
    Lspline: 0,
    Mspline: 0.0889,
    Sspline: -0.0931,
  },
  41.75: {
    Lspline: 0,
    Mspline: 0.0874,
    Sspline: -0.0924,
  },
  42.25: {
    Lspline: 0,
    Mspline: 0.0842,
    Sspline: -0.0908,
  },
  42.5: {
    Lspline: 0,
    Mspline: 0.0826,
    Sspline: -0.0899,
  },
  42.75: {
    Lspline: 0,
    Mspline: 0.0810,
    Sspline: -0.0890,
  },
  43.25: {
    Lspline: 0,
    Mspline: 0.0777,
    Sspline: -0.0870,
  },
  43.5: {
    Lspline: 0,
    Mspline: 0.0761,
    Sspline: -0.0859,
  },
  43.75: {
    Lspline: 0,
    Mspline: 0.0744,
    Sspline: -0.0848,
  },
  44.25: {
    Lspline: 0,
    Mspline: 0.0710,
    Sspline: -0.0825,
  },
  44.5: {
    Lspline: 0,
    Mspline: 0.0693,
    Sspline: -0.0813,
  },
  44.75: {
    Lspline: 0,
    Mspline: 0.0675,
    Sspline: -0.0800,
  },
  45.25: {
    Lspline: 0,
    Mspline: 0.0640,
    Sspline: -0.0774,
  },
  45.5: {
    Lspline: 0,
    Mspline: 0.0622,
    Sspline: -0.0760,
  },
  45.75: {
    Lspline: 0,
    Mspline: 0.0605,
    Sspline: -0.0746,
  },
  46.25: {
    Lspline: 0,
    Mspline: 0.0569,
    Sspline: -0.0716,
  },
  46.5: {
    Lspline: 0,
    Mspline: 0.0551,
    Sspline: -0.0701,
  },
  46.75: {
    Lspline: 0,
    Mspline: 0.0532,
    Sspline: -0.0685,
  },
  47.25: {
    Lspline: 0,
    Mspline: 0.0495,
    Sspline: -0.0653,
  },
  47.5: {
    Lspline: 0,
    Mspline: 0.0477,
    Sspline: -0.0636,
  },
  47.75: {
    Lspline: 0,
    Mspline: 0.0458,
    Sspline: -0.0619,
  },
  48.25: {
    Lspline: 0,
    Mspline: 0.0420,
    Sspline: -0.0584,
  },
  48.5: {
    Lspline: 0,
    Mspline: 0.0401,
    Sspline: -0.0566,
  },
  48.75: {
    Lspline: 0,
    Mspline: 0.0381,
    Sspline: -0.0548,
  },
  49.25: {
    Lspline: 0,
    Mspline: 0.0342,
    Sspline: -0.0511,
  },
  49.5: {
    Lspline: 0,
    Mspline: 0.0323,
    Sspline: -0.0492,
  },
  49.75: {
    Lspline: 0,
    Mspline: 0.0303,
    Sspline: -0.0472,
  },
  50.25: {
    Lspline: 0,
    Mspline: 0.0263,
    Sspline: -0.0433,
  },
  50.5: {
    Lspline: 0,
    Mspline: 0.0243,
    Sspline: -0.0413,
  },
  50.75: {
    Lspline: 0,
    Mspline: 0.0223,
    Sspline: -0.0393,
  },
  51.25: {
    Lspline: 0,
    Mspline: 0.0182,
    Sspline: -0.0352,
  },
  51.5: {
    Lspline: 0,
    Mspline: 0.0161,
    Sspline: -0.0331,
  },
  51.75: {
    Lspline: 0,
    Mspline: 0.0140,
    Sspline: -0.0310,
  },
  52.25: {
    Lspline: 0,
    Mspline: 0.0098,
    Sspline: -0.0268,
  },
  52.5: {
    Lspline: 0,
    Mspline: 0.0077,
    Sspline: -0.0246,
  },
  52.75: {
    Lspline: 0,
    Mspline: 0.0055,
    Sspline: -0.0224,
  },
  53.25: {
    Lspline: 0,
    Mspline: 0.0012,
    Sspline: -0.0180,
  },
  53.5: {
    Lspline: 0,
    Mspline: -0.0009,
    Sspline: -0.0158,
  },
  53.75: {
    Lspline: 0,
    Mspline: -0.0031,
    Sspline: -0.0136,
  },
  54.25: {
    Lspline: 0,
    Mspline: -0.0075,
    Sspline: -0.0091,
  },
  54.5: {
    Lspline: 0,
    Mspline: -0.0098,
    Sspline: -0.0068,
  },
  54.75: {
    Lspline: 0,
    Mspline: -0.0120,
    Sspline: -0.0045,
  },
  55.25: {
    Lspline: 0,
    Mspline: -0.0165,
    Sspline: 0.0001,
  },
  55.5: {
    Lspline: 0,
    Mspline: -0.0188,
    Sspline: 0.0024,
  },
  55.75: {
    Lspline: 0,
    Mspline: -0.0211,
    Sspline: 0.0047,
  },
  56.25: {
    Lspline: 0,
    Mspline: -0.0257,
    Sspline: 0.0094,
  },
  56.5: {
    Lspline: 0,
    Mspline: -0.0281,
    Sspline: 0.0118,
  },
  56.75: {
    Lspline: 0,
    Mspline: -0.0304,
    Sspline: 0.0141,
  },
  57.25: {
    Lspline: 0,
    Mspline: -0.0352,
    Sspline: 0.0189,
  },
  57.5: {
    Lspline: 0,
    Mspline: -0.0376,
    Sspline: 0.0213,
  },
  57.75: {
    Lspline: 0,
    Mspline: -0.0400,
    Sspline: 0.0236,
  },
  58.25: {
    Lspline: 0,
    Mspline: -0.0449,
    Sspline: 0.0284,
  },
  58.5: {
    Lspline: 0,
    Mspline: -0.0473,
    Sspline: 0.0308,
  },
  58.75: {
    Lspline: 0,
    Mspline: -0.0498,
    Sspline: 0.0332,
  },
  59.25: {
    Lspline: 0,
    Mspline: -0.0548,
    Sspline: 0.0381,
  },
  59.5: {
    Lspline: 0,
    Mspline: -0.0573,
    Sspline: 0.0405,
  },
  59.75: {
    Lspline: 0,
    Mspline: -0.0598,
    Sspline: 0.0429,
  },
  60.25: {
    Lspline: 0,
    Mspline: -0.0649,
    Sspline: 0.0477,
  },
  60.5: {
    Lspline: 0,
    Mspline: -0.0674,
    Sspline: 0.0502,
  },
  60.75: {
    Lspline: 0,
    Mspline: -0.0700,
    Sspline: 0.0526,
  },
  61.25: {
    Lspline: 0,
    Mspline: -0.0751,
    Sspline: 0.0574,
  },
  61.5: {
    Lspline: 0,
    Mspline: -0.0777,
    Sspline: 0.0598,
  },
  61.75: {
    Lspline: 0,
    Mspline: -0.0804,
    Sspline: 0.0623,
  },
  62.25: {
    Lspline: 0,
    Mspline: -0.0856,
    Sspline: 0.0671,
  },
  62.5: {
    Lspline: 0,
    Mspline: -0.0882,
    Sspline: 0.0695,
  },
  62.75: {
    Lspline: 0,
    Mspline: -0.0909,
    Sspline: 0.0720,
  },
  63.25: {
    Lspline: 0,
    Mspline: -0.0962,
    Sspline: 0.0768,
  },
  63.5: {
    Lspline: 0,
    Mspline: -0.0989,
    Sspline: 0.0792,
  },
  63.75: {
    Lspline: 0,
    Mspline: -0.1016,
    Sspline: 0.0817,
  },
  64.25: {
    Lspline: 0,
    Mspline: -0.1070,
    Sspline: 0.0865,
  },
  64.5: {
    Lspline: 0,
    Mspline: -0.1097,
    Sspline: 0.0889,
  },
  64.75: {
    Lspline: 0,
    Mspline: -0.1125,
    Sspline: 0.0913,
  },
  65.25: {
    Lspline: 0,
    Mspline: -0.1180,
    Sspline: 0.0962,
  },
  65.5: {
    Lspline: 0,
    Mspline: -0.1207,
    Sspline: 0.0986,
  },
  65.75: {
    Lspline: 0,
    Mspline: -0.1235,
    Sspline: 0.1010,
  },
  66.25: {
    Lspline: 0,
    Mspline: -0.1290,
    Sspline: 0.1059,
  },
  66.5: {
    Lspline: 0,
    Mspline: -0.1318,
    Sspline: 0.1083,
  },
  66.75: {
    Lspline: 0,
    Mspline: -0.1347,
    Sspline: 0.1107,
  },
  67.25: {
    Lspline: 0,
    Mspline: -0.1403,
    Sspline: 0.1155,
  },
  67.5: {
    Lspline: 0,
    Mspline: -0.1431,
    Sspline: 0.1180,
  },
  67.75: {
    Lspline: 0,
    Mspline: -0.1460,
    Sspline: 0.1204,
  },
  68.25: {
    Lspline: 0,
    Mspline: -0.1517,
    Sspline: 0.1252,
  },
  68.5: {
    Lspline: 0,
    Mspline: -0.1545,
    Sspline: 0.1276,
  },
  68.75: {
    Lspline: 0,
    Mspline: -0.1574,
    Sspline: 0.1300,
  },
  69.25: {
    Lspline: 0,
    Mspline: -0.1631,
    Sspline: 0.1349,
  },
  69.5: {
    Lspline: 0,
    Mspline: -0.1660,
    Sspline: 0.1373,
  },
  69.75: {
    Lspline: 0,
    Mspline: -0.1689,
    Sspline: 0.1397,
  },
  70.25: {
    Lspline: 0,
    Mspline: -0.1747,
    Sspline: 0.1445,
  },
  70.5: {
    Lspline: 0,
    Mspline: -0.1776,
    Sspline: 0.1469,
  },
  70.75: {
    Lspline: 0,
    Mspline: -0.1806,
    Sspline: 0.1493,
  },
  71.25: {
    Lspline: 0,
    Mspline: -0.1864,
    Sspline: 0.1541,
  },
  71.5: {
    Lspline: 0,
    Mspline: -0.1893,
    Sspline: 0.1564,
  },
  71.75: {
    Lspline: 0,
    Mspline: -0.1922,
    Sspline: 0.1588,
  },
  72.25: {
    Lspline: 0,
    Mspline: -0.1981,
    Sspline: 0.1636,
  },
  72.5: {
    Lspline: 0,
    Mspline: -0.2010,
    Sspline: 0.1659,
  },
  72.75: {
    Lspline: 0,
    Mspline: -0.2040,
    Sspline: 0.1683,
  },
  73.25: {
    Lspline: 0,
    Mspline: -0.2099,
    Sspline: 0.1730,
  },
  73.5: {
    Lspline: 0,
    Mspline: -0.2128,
    Sspline: 0.1754,
  },
  73.75: {
    Lspline: 0,
    Mspline: -0.2157,
    Sspline: 0.1778,
  },
  74.25: {
    Lspline: 0,
    Mspline: -0.2216,
    Sspline: 0.1824,
  },
  74.5: {
    Lspline: 0,
    Mspline: -0.2246,
    Sspline: 0.1848,
  },
  74.75: {
    Lspline: 0,
    Mspline: -0.2275,
    Sspline: 0.1871,
  },
  75.25: {
    Lspline: 0,
    Mspline: -0.2334,
    Sspline: 0.1918,
  },
  75.5: {
    Lspline: 0,
    Mspline: -0.2364,
    Sspline: 0.1941,
  },
  75.75: {
    Lspline: 0,
    Mspline: -0.2393,
    Sspline: 0.1964,
  },
  76.25: {
    Lspline: 0,
    Mspline: -0.2452,
    Sspline: 0.2010,
  },
  76.5: {
    Lspline: 0,
    Mspline: -0.2481,
    Sspline: 0.2033,
  },
  76.75: {
    Lspline: 0,
    Mspline: -0.2510,
    Sspline: 0.2056,
  },
  77.25: {
    Lspline: 0,
    Mspline: -0.2569,
    Sspline: 0.2102,
  },
  77.5: {
    Lspline: 0,
    Mspline: -0.2598,
    Sspline: 0.2125,
  },
  77.75: {
    Lspline: 0,
    Mspline: -0.2627,
    Sspline: 0.2148,
  },
  78.25: {
    Lspline: 0,
    Mspline: -0.2685,
    Sspline: 0.2193,
  },
  78.5: {
    Lspline: 0,
    Mspline: -0.2714,
    Sspline: 0.2215,
  },
  78.75: {
    Lspline: 0,
    Mspline: -0.2743,
    Sspline: 0.2238,
  },
  79.25: {
    Lspline: 0,
    Mspline: -0.2801,
    Sspline: 0.2283,
  },
  79.5: {
    Lspline: 0,
    Mspline: -0.2830,
    Sspline: 0.2305,
  },
  79.75: {
    Lspline: 0,
    Mspline: -0.2859,
    Sspline: 0.2328,
  },
  80.25: {
    Lspline: 0,
    Mspline: -0.2916,
    Sspline: 0.2372,
  },
  80.5: {
    Lspline: 0,
    Mspline: -0.2945,
    Sspline: 0.2394,
  },
  80.75: {
    Lspline: 0,
    Mspline: -0.2973,
    Sspline: 0.2416,
  },
  81.25: {
    Lspline: 0,
    Mspline: -0.3030,
    Sspline: 0.2460,
  },
  81.5: {
    Lspline: 0,
    Mspline: -0.3058,
    Sspline: 0.2482,
  },
  81.75: {
    Lspline: 0,
    Mspline: -0.3086,
    Sspline: 0.2504,
  },
  82.25: {
    Lspline: 0,
    Mspline: -0.3143,
    Sspline: 0.2548,
  },
  82.5: {
    Lspline: 0,
    Mspline: -0.3171,
    Sspline: 0.2570,
  },
  82.75: {
    Lspline: 0,
    Mspline: -0.3198,
    Sspline: 0.2591,
  },
  83.25: {
    Lspline: 0,
    Mspline: -0.3254,
    Sspline: 0.2635,
  },
  83.5: {
    Lspline: 0,
    Mspline: -0.3282,
    Sspline: 0.2656,
  },
  83.75: {
    Lspline: 0,
    Mspline: -0.3309,
    Sspline: 0.2678,
  },
  84.25: {
    Lspline: 0,
    Mspline: -0.3365,
    Sspline: 0.2720,
  },
  84.5: {
    Lspline: 0,
    Mspline: -0.3392,
    Sspline: 0.2742,
  },
  84.75: {
    Lspline: 0,
    Mspline: -0.3419,
    Sspline: 0.2763,
  },
  85.25: {
    Lspline: 0,
    Mspline: -0.3474,
    Sspline: 0.2805,
  },
  85.5: {
    Lspline: 0,
    Mspline: -0.3501,
    Sspline: 0.2826,
  },
  85.75: {
    Lspline: 0,
    Mspline: -0.3528,
    Sspline: 0.2847,
  },
  86.25: {
    Lspline: 0,
    Mspline: -0.3582,
    Sspline: 0.2889,
  },
  86.5: {
    Lspline: 0,
    Mspline: -0.3608,
    Sspline: 0.2910,
  },
  86.75: {
    Lspline: 0,
    Mspline: -0.3635,
    Sspline: 0.2931,
  },
  87.25: {
    Lspline: 0,
    Mspline: -0.3688,
    Sspline: 0.2972,
  },
  87.5: {
    Lspline: 0,
    Mspline: -0.3715,
    Sspline: 0.2993,
  },
  87.75: {
    Lspline: 0,
    Mspline: -0.3741,
    Sspline: 0.3013,
  },
  88.25: {
    Lspline: 0,
    Mspline: -0.3794,
    Sspline: 0.3054,
  },
  88.5: {
    Lspline: 0,
    Mspline: -0.3820,
    Sspline: 0.3075,
  },
  88.75: {
    Lspline: 0,
    Mspline: -0.3846,
    Sspline: 0.3095,
  },
  89.25: {
    Lspline: 0,
    Mspline: -0.3898,
    Sspline: 0.3136,
  },
  89.5: {
    Lspline: 0,
    Mspline: -0.3924,
    Sspline: 0.3156,
  },
  89.75: {
    Lspline: 0,
    Mspline: -0.3950,
    Sspline: 0.3176,
  },
  90.25: {
    Lspline: 0,
    Mspline: -0.4002,
    Sspline: 0.3216,
  },
  90.5: {
    Lspline: 0,
    Mspline: -0.4027,
    Sspline: 0.3236,
  },
  90.75: {
    Lspline: 0,
    Mspline: -0.4053,
    Sspline: 0.3256,
  },
  91.25: {
    Lspline: 0,
    Mspline: -0.4104,
    Sspline: 0.3296,
  },
  91.5: {
    Lspline: 0,
    Mspline: -0.4129,
    Sspline: 0.3315,
  },
  91.75: {
    Lspline: 0,
    Mspline: -0.4155,
    Sspline: 0.3335,
  },
  92.25: {
    Lspline: 0,
    Mspline: -0.4205,
    Sspline: 0.3374,
  },
  92.5: {
    Lspline: 0,
    Mspline: -0.4230,
    Sspline: 0.3394,
  },
  92.75: {
    Lspline: 0,
    Mspline: -0.4255,
    Sspline: 0.3413,
  },
  93.25: {
    Lspline: 0,
    Mspline: -0.4305,
    Sspline: 0.3452,
  },
  93.5: {
    Lspline: 0,
    Mspline: -0.4330,
    Sspline: 0.3471,
  },
  93.75: {
    Lspline: 0,
    Mspline: -0.4355,
    Sspline: 0.3491,
  },
  94.25: {
    Lspline: 0,
    Mspline: -0.4404,
    Sspline: 0.3529,
  },
  94.5: {
    Lspline: 0,
    Mspline: -0.4429,
    Sspline: 0.3548,
  },
  94.75: {
    Lspline: 0,
    Mspline: -0.4453,
    Sspline: 0.3567,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
