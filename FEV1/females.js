var coefficients = {
  L: {
    q0: 1.154, // intercept
    q1: 0, // UNUSED!
  },
  M: {
    a0: -9.6987, // intercept
    a1: 2.1211, // height
    a2: -0.027, // age
    a3: -0.1484, // ethnicity: african american
    a4: -0.0149, // ethnicity: north east asian
    a5: -0.1208, // ethnicity: south east asian
    a6: -0.0708, // ethnicity: other/mixed
  },
  S: {
    p0: -2.3765, // intercept
    p1: 0.0972, // age
    p2: 0.1016, // ethnicity: african american
    p3: -0.0109, // ethnicity: north east asian
    p4: 0.0733, // ethnicity: south east asian
    p5: 0.0114, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 0,
    Mspline: -0.2311,
    Sspline: 0.3351,
  },
  4: {
    Lspline: 0,
    Mspline: -0.1817,
    Sspline: 0.2439,
  },
  5: {
    Lspline: 0,
    Mspline: -0.1548,
    Sspline: 0.1749,
  },
  6: {
    Lspline: 0,
    Mspline: -0.1452,
    Sspline: 0.1208,
  },
  7: {
    Lspline: 0,
    Mspline: -0.1310,
    Sspline: 0.0780,
  },
  8: {
    Lspline: 0,
    Mspline: -0.1125,
    Sspline: 0.0452,
  },
  9: {
    Lspline: 0,
    Mspline: -0.0897,
    Sspline: 0.0206,
  },
  10: {
    Lspline: 0,
    Mspline: -0.0573,
    Sspline: 0.0037,
  },
  11: {
    Lspline: 0,
    Mspline: -0.0172,
    Sspline: -0.0076,
  },
  12: {
    Lspline: 0,
    Mspline: 0.0274,
    Sspline: -0.0160,
  },
  13: {
    Lspline: 0,
    Mspline: 0.0709,
    Sspline: -0.0233,
  },
  14: {
    Lspline: 0,
    Mspline: 0.1086,
    Sspline: -0.0305,
  },
  15: {
    Lspline: 0,
    Mspline: 0.1379,
    Sspline: -0.0373,
  },
  16: {
    Lspline: 0,
    Mspline: 0.1583,
    Sspline: -0.0437,
  },
  17: {
    Lspline: 0,
    Mspline: 0.1711,
    Sspline: -0.0495,
  },
  18: {
    Lspline: 0,
    Mspline: 0.1785,
    Sspline: -0.0546,
  },
  19: {
    Lspline: 0,
    Mspline: 0.1823,
    Sspline: -0.0590,
  },
  20: {
    Lspline: 0,
    Mspline: 0.1839,
    Sspline: -0.0627,
  },
  21: {
    Lspline: 0,
    Mspline: 0.1841,
    Sspline: -0.0660,
  },
  22: {
    Lspline: 0,
    Mspline: 0.1832,
    Sspline: -0.0691,
  },
  23: {
    Lspline: 0,
    Mspline: 0.1812,
    Sspline: -0.0722,
  },
  24: {
    Lspline: 0,
    Mspline: 0.1785,
    Sspline: -0.0751,
  },
  25: {
    Lspline: 0,
    Mspline: 0.1753,
    Sspline: -0.0780,
  },
  26: {
    Lspline: 0,
    Mspline: 0.1721,
    Sspline: -0.0808,
  },
  27: {
    Lspline: 0,
    Mspline: 0.1690,
    Sspline: -0.0836,
  },
  28: {
    Lspline: 0,
    Mspline: 0.1658,
    Sspline: -0.0862,
  },
  29: {
    Lspline: 0,
    Mspline: 0.1625,
    Sspline: -0.0887,
  },
  30: {
    Lspline: 0,
    Mspline: 0.1590,
    Sspline: -0.0909,
  },
  31: {
    Lspline: 0,
    Mspline: 0.1553,
    Sspline: -0.0929,
  },
  32: {
    Lspline: 0,
    Mspline: 0.1512,
    Sspline: -0.0945,
  },
  33: {
    Lspline: 0,
    Mspline: 0.1467,
    Sspline: -0.0957,
  },
  34: {
    Lspline: 0,
    Mspline: 0.1418,
    Sspline: -0.0964,
  },
  35: {
    Lspline: 0,
    Mspline: 0.1365,
    Sspline: -0.0967,
  },
  36: {
    Lspline: 0,
    Mspline: 0.1308,
    Sspline: -0.0964,
  },
  37: {
    Lspline: 0,
    Mspline: 0.1246,
    Sspline: -0.0955,
  },
  38: {
    Lspline: 0,
    Mspline: 0.1180,
    Sspline: -0.0940,
  },
  39: {
    Lspline: 0,
    Mspline: 0.1112,
    Sspline: -0.0919,
  },
  40: {
    Lspline: 0,
    Mspline: 0.1040,
    Sspline: -0.0892,
  },
  41: {
    Lspline: 0,
    Mspline: 0.0966,
    Sspline: -0.0859,
  },
  42: {
    Lspline: 0,
    Mspline: 0.0889,
    Sspline: -0.0821,
  },
  43: {
    Lspline: 0,
    Mspline: 0.0811,
    Sspline: -0.0777,
  },
  44: {
    Lspline: 0,
    Mspline: 0.0731,
    Sspline: -0.0728,
  },
  45: {
    Lspline: 0,
    Mspline: 0.0650,
    Sspline: -0.0674,
  },
  46: {
    Lspline: 0,
    Mspline: 0.0568,
    Sspline: -0.0616,
  },
  47: {
    Lspline: 0,
    Mspline: 0.0486,
    Sspline: -0.0554,
  },
  48: {
    Lspline: 0,
    Mspline: 0.0403,
    Sspline: -0.0488,
  },
  49: {
    Lspline: 0,
    Mspline: 0.0318,
    Sspline: -0.0418,
  },
  50: {
    Lspline: 0,
    Mspline: 0.0232,
    Sspline: -0.0345,
  },
  51: {
    Lspline: 0,
    Mspline: 0.0144,
    Sspline: -0.0270,
  },
  52: {
    Lspline: 0,
    Mspline: 0.0054,
    Sspline: -0.0192,
  },
  53: {
    Lspline: 0,
    Mspline: -0.0037,
    Sspline: -0.0112,
  },
  54: {
    Lspline: 0,
    Mspline: -0.0131,
    Sspline: -0.0030,
  },
  55: {
    Lspline: 0,
    Mspline: -0.0227,
    Sspline: 0.0054,
  },
  56: {
    Lspline: 0,
    Mspline: -0.0326,
    Sspline: 0.0139,
  },
  57: {
    Lspline: 0,
    Mspline: -0.0426,
    Sspline: 0.0226,
  },
  58: {
    Lspline: 0,
    Mspline: -0.0529,
    Sspline: 0.0314,
  },
  59: {
    Lspline: 0,
    Mspline: -0.0634,
    Sspline: 0.0402,
  },
  60: {
    Lspline: 0,
    Mspline: -0.0741,
    Sspline: 0.0492,
  },
  61: {
    Lspline: 0,
    Mspline: -0.0850,
    Sspline: 0.0581,
  },
  62: {
    Lspline: 0,
    Mspline: -0.0961,
    Sspline: 0.0671,
  },
  63: {
    Lspline: 0,
    Mspline: -0.1075,
    Sspline: 0.0761,
  },
  64: {
    Lspline: 0,
    Mspline: -0.1190,
    Sspline: 0.0852,
  },
  65: {
    Lspline: 0,
    Mspline: -0.1308,
    Sspline: 0.0942,
  },
  66: {
    Lspline: 0,
    Mspline: -0.1428,
    Sspline: 0.1032,
  },
  67: {
    Lspline: 0,
    Mspline: -0.1550,
    Sspline: 0.1122,
  },
  68: {
    Lspline: 0,
    Mspline: -0.1674,
    Sspline: 0.1212,
  },
  69: {
    Lspline: 0,
    Mspline: -0.1799,
    Sspline: 0.1301,
  },
  70: {
    Lspline: 0,
    Mspline: -0.1926,
    Sspline: 0.1389,
  },
  71: {
    Lspline: 0,
    Mspline: -0.2055,
    Sspline: 0.1477,
  },
  72: {
    Lspline: 0,
    Mspline: -0.2184,
    Sspline: 0.1564,
  },
  73: {
    Lspline: 0,
    Mspline: -0.2315,
    Sspline: 0.1651,
  },
  74: {
    Lspline: 0,
    Mspline: -0.2445,
    Sspline: 0.1736,
  },
  75: {
    Lspline: 0,
    Mspline: -0.2576,
    Sspline: 0.1821,
  },
  76: {
    Lspline: 0,
    Mspline: -0.2707,
    Sspline: 0.1905,
  },
  77: {
    Lspline: 0,
    Mspline: -0.2838,
    Sspline: 0.1988,
  },
  78: {
    Lspline: 0,
    Mspline: -0.2968,
    Sspline: 0.2070,
  },
  79: {
    Lspline: 0,
    Mspline: -0.3098,
    Sspline: 0.2151,
  },
  80: {
    Lspline: 0,
    Mspline: -0.3226,
    Sspline: 0.2231,
  },
  81: {
    Lspline: 0,
    Mspline: -0.3354,
    Sspline: 0.2310,
  },
  82: {
    Lspline: 0,
    Mspline: -0.3480,
    Sspline: 0.2389,
  },
  83: {
    Lspline: 0,
    Mspline: -0.3606,
    Sspline: 0.2466,
  },
  84: {
    Lspline: 0,
    Mspline: -0.3730,
    Sspline: 0.2543,
  },
  85: {
    Lspline: 0,
    Mspline: -0.3852,
    Sspline: 0.2618,
  },
  86: {
    Lspline: 0,
    Mspline: -0.3974,
    Sspline: 0.2693,
  },
  87: {
    Lspline: 0,
    Mspline: -0.4094,
    Sspline: 0.2767,
  },
  88: {
    Lspline: 0,
    Mspline: -0.4213,
    Sspline: 0.2841,
  },
  89: {
    Lspline: 0,
    Mspline: -0.4330,
    Sspline: 0.2913,
  },
  90: {
    Lspline: 0,
    Mspline: -0.4446,
    Sspline: 0.2985,
  },
  91: {
    Lspline: 0,
    Mspline: -0.4561,
    Sspline: 0.3056,
  },
  92: {
    Lspline: 0,
    Mspline: -0.4675,
    Sspline: 0.3126,
  },
  93: {
    Lspline: 0,
    Mspline: -0.4788,
    Sspline: 0.3195,
  },
  94: {
    Lspline: 0,
    Mspline: -0.4899,
    Sspline: 0.3264,
  },
  95: {
    Lspline: 0,
    Mspline: -0.5009,
    Sspline: 0.3332,
  },
  3.25: {
    Lspline: 0,
    Mspline: -0.2170,
    Sspline: 0.3098,
  },
  3.5: {
    Lspline: 0,
    Mspline: -0.2040,
    Sspline: 0.2862,
  },
  3.75: {
    Lspline: 0,
    Mspline: -0.1922,
    Sspline: 0.2643,
  },
  4.25: {
    Lspline: 0,
    Mspline: -0.1727,
    Sspline: 0.2248,
  },
  4.5: {
    Lspline: 0,
    Mspline: -0.1651,
    Sspline: 0.2071,
  },
  4.75: {
    Lspline: 0,
    Mspline: -0.1592,
    Sspline: 0.1905,
  },
  5.25: {
    Lspline: 0,
    Mspline: -0.1518,
    Sspline: 0.1602,
  },
  5.5: {
    Lspline: 0,
    Mspline: -0.1494,
    Sspline: 0.1464,
  },
  5.75: {
    Lspline: 0,
    Mspline: -0.1474,
    Sspline: 0.1333,
  },
  6.25: {
    Lspline: 0,
    Mspline: -0.1426,
    Sspline: 0.1091,
  },
  6.5: {
    Lspline: 0,
    Mspline: -0.1393,
    Sspline: 0.0981,
  },
  6.75: {
    Lspline: 0,
    Mspline: -0.1354,
    Sspline: 0.0877,
  },
  7.25: {
    Lspline: 0,
    Mspline: -0.1264,
    Sspline: 0.0690,
  },
  7.5: {
    Lspline: 0,
    Mspline: -0.1217,
    Sspline: 0.0605,
  },
  7.75: {
    Lspline: 0,
    Mspline: -0.1171,
    Sspline: 0.0526,
  },
  8.25: {
    Lspline: 0,
    Mspline: -0.1076,
    Sspline: 0.0383,
  },
  8.5: {
    Lspline: 0,
    Mspline: -0.1022,
    Sspline: 0.0319,
  },
  8.75: {
    Lspline: 0,
    Mspline: -0.0963,
    Sspline: 0.0260,
  },
  9.25: {
    Lspline: 0,
    Mspline: -0.0825,
    Sspline: 0.0157,
  },
  9.5: {
    Lspline: 0,
    Mspline: -0.0747,
    Sspline: 0.0112,
  },
  9.75: {
    Lspline: 0,
    Mspline: -0.0663,
    Sspline: 0.0072,
  },
  10.25: {
    Lspline: 0,
    Mspline: -0.0479,
    Sspline: 0.0004,
  },
  10.5: {
    Lspline: 0,
    Mspline: -0.0380,
    Sspline: -0.0025,
  },
  10.75: {
    Lspline: 0,
    Mspline: -0.0278,
    Sspline: -0.0052,
  },
  11.25: {
    Lspline: 0,
    Mspline: -0.0063,
    Sspline: -0.0099,
  },
  11.5: {
    Lspline: 0,
    Mspline: 0.0048,
    Sspline: -0.0120,
  },
  11.75: {
    Lspline: 0,
    Mspline: 0.0161,
    Sspline: -0.0140,
  },
  12.25: {
    Lspline: 0,
    Mspline: 0.0386,
    Sspline: -0.0178,
  },
  12.5: {
    Lspline: 0,
    Mspline: 0.0496,
    Sspline: -0.0197,
  },
  12.75: {
    Lspline: 0,
    Mspline: 0.0604,
    Sspline: -0.0215,
  },
  13.25: {
    Lspline: 0,
    Mspline: 0.0810,
    Sspline: -0.0251,
  },
  13.5: {
    Lspline: 0,
    Mspline: 0.0907,
    Sspline: -0.0269,
  },
  13.75: {
    Lspline: 0,
    Mspline: 0.0999,
    Sspline: -0.0287,
  },
  14.25: {
    Lspline: 0,
    Mspline: 0.1168,
    Sspline: -0.0322,
  },
  14.5: {
    Lspline: 0,
    Mspline: 0.1244,
    Sspline: -0.0339,
  },
  14.75: {
    Lspline: 0,
    Mspline: 0.1315,
    Sspline: -0.0356,
  },
  15.25: {
    Lspline: 0,
    Mspline: 0.1438,
    Sspline: -0.0390,
  },
  15.5: {
    Lspline: 0,
    Mspline: 0.1492,
    Sspline: -0.0406,
  },
  15.75: {
    Lspline: 0,
    Mspline: 0.1540,
    Sspline: -0.0422,
  },
  16.25: {
    Lspline: 0,
    Mspline: 0.1621,
    Sspline: -0.0452,
  },
  16.5: {
    Lspline: 0,
    Mspline: 0.1655,
    Sspline: -0.0467,
  },
  16.75: {
    Lspline: 0,
    Mspline: 0.1684,
    Sspline: -0.0481,
  },
  17.25: {
    Lspline: 0,
    Mspline: 0.1733,
    Sspline: -0.0509,
  },
  17.5: {
    Lspline: 0,
    Mspline: 0.1753,
    Sspline: -0.0522,
  },
  17.75: {
    Lspline: 0,
    Mspline: 0.1770,
    Sspline: -0.0534,
  },
  18.25: {
    Lspline: 0,
    Mspline: 0.1797,
    Sspline: -0.0558,
  },
  18.5: {
    Lspline: 0,
    Mspline: 0.1808,
    Sspline: -0.0569,
  },
  18.75: {
    Lspline: 0,
    Mspline: 0.1816,
    Sspline: -0.0579,
  },
  19.25: {
    Lspline: 0,
    Mspline: 0.1829,
    Sspline: -0.0600,
  },
  19.5: {
    Lspline: 0,
    Mspline: 0.1833,
    Sspline: -0.0609,
  },
  19.75: {
    Lspline: 0,
    Mspline: 0.1837,
    Sspline: -0.0618,
  },
  20.25: {
    Lspline: 0,
    Mspline: 0.1841,
    Sspline: -0.0636,
  },
  20.5: {
    Lspline: 0,
    Mspline: 0.1842,
    Sspline: -0.0644,
  },
  20.75: {
    Lspline: 0,
    Mspline: 0.1842,
    Sspline: -0.0652,
  },
  21.25: {
    Lspline: 0,
    Mspline: 0.1840,
    Sspline: -0.0668,
  },
  21.5: {
    Lspline: 0,
    Mspline: 0.1838,
    Sspline: -0.0676,
  },
  21.75: {
    Lspline: 0,
    Mspline: 0.1835,
    Sspline: -0.0684,
  },
  22.25: {
    Lspline: 0,
    Mspline: 0.1828,
    Sspline: -0.0699,
  },
  22.5: {
    Lspline: 0,
    Mspline: 0.1823,
    Sspline: -0.0707,
  },
  22.75: {
    Lspline: 0,
    Mspline: 0.1818,
    Sspline: -0.0714,
  },
  23.25: {
    Lspline: 0,
    Mspline: 0.1806,
    Sspline: -0.0729,
  },
  23.5: {
    Lspline: 0,
    Mspline: 0.1799,
    Sspline: -0.0736,
  },
  23.75: {
    Lspline: 0,
    Mspline: 0.1792,
    Sspline: -0.0744,
  },
  24.25: {
    Lspline: 0,
    Mspline: 0.1777,
    Sspline: -0.0758,
  },
  24.5: {
    Lspline: 0,
    Mspline: 0.1769,
    Sspline: -0.0766,
  },
  24.75: {
    Lspline: 0,
    Mspline: 0.1761,
    Sspline: -0.0773,
  },
  25.25: {
    Lspline: 0,
    Mspline: 0.1745,
    Sspline: -0.0787,
  },
  25.5: {
    Lspline: 0,
    Mspline: 0.1737,
    Sspline: -0.0794,
  },
  25.75: {
    Lspline: 0,
    Mspline: 0.1729,
    Sspline: -0.0801,
  },
  26.25: {
    Lspline: 0,
    Mspline: 0.1713,
    Sspline: -0.0815,
  },
  26.5: {
    Lspline: 0,
    Mspline: 0.1705,
    Sspline: -0.0822,
  },
  26.75: {
    Lspline: 0,
    Mspline: 0.1697,
    Sspline: -0.0829,
  },
  27.25: {
    Lspline: 0,
    Mspline: 0.1682,
    Sspline: -0.0842,
  },
  27.5: {
    Lspline: 0,
    Mspline: 0.1674,
    Sspline: -0.0849,
  },
  27.75: {
    Lspline: 0,
    Mspline: 0.1666,
    Sspline: -0.0856,
  },
  28.25: {
    Lspline: 0,
    Mspline: 0.1650,
    Sspline: -0.0868,
  },
  28.5: {
    Lspline: 0,
    Mspline: 0.1642,
    Sspline: -0.0875,
  },
  28.75: {
    Lspline: 0,
    Mspline: 0.1634,
    Sspline: -0.0881,
  },
  29.25: {
    Lspline: 0,
    Mspline: 0.1617,
    Sspline: -0.0893,
  },
  29.5: {
    Lspline: 0,
    Mspline: 0.1608,
    Sspline: -0.0898,
  },
  29.75: {
    Lspline: 0,
    Mspline: 0.1599,
    Sspline: -0.0904,
  },
  30.25: {
    Lspline: 0,
    Mspline: 0.1581,
    Sspline: -0.0914,
  },
  30.5: {
    Lspline: 0,
    Mspline: 0.1572,
    Sspline: -0.0919,
  },
  30.75: {
    Lspline: 0,
    Mspline: 0.1562,
    Sspline: -0.0924,
  },
  31.25: {
    Lspline: 0,
    Mspline: 0.1543,
    Sspline: -0.0933,
  },
  31.5: {
    Lspline: 0,
    Mspline: 0.1533,
    Sspline: -0.0937,
  },
  31.75: {
    Lspline: 0,
    Mspline: 0.1523,
    Sspline: -0.0941,
  },
  32.25: {
    Lspline: 0,
    Mspline: 0.1501,
    Sspline: -0.0948,
  },
  32.5: {
    Lspline: 0,
    Mspline: 0.1490,
    Sspline: -0.0951,
  },
  32.75: {
    Lspline: 0,
    Mspline: 0.1479,
    Sspline: -0.0954,
  },
  33.25: {
    Lspline: 0,
    Mspline: 0.1456,
    Sspline: -0.0959,
  },
  33.5: {
    Lspline: 0,
    Mspline: 0.1444,
    Sspline: -0.0961,
  },
  33.75: {
    Lspline: 0,
    Mspline: 0.1431,
    Sspline: -0.0963,
  },
  34.25: {
    Lspline: 0,
    Mspline: 0.1406,
    Sspline: -0.0965,
  },
  34.5: {
    Lspline: 0,
    Mspline: 0.1392,
    Sspline: -0.0966,
  },
  34.75: {
    Lspline: 0,
    Mspline: 0.1379,
    Sspline: -0.0967,
  },
  35.25: {
    Lspline: 0,
    Mspline: 0.1351,
    Sspline: -0.0967,
  },
  35.5: {
    Lspline: 0,
    Mspline: 0.1337,
    Sspline: -0.0966,
  },
  35.75: {
    Lspline: 0,
    Mspline: 0.1322,
    Sspline: -0.0965,
  },
  36.25: {
    Lspline: 0,
    Mspline: 0.1292,
    Sspline: -0.0962,
  },
  36.5: {
    Lspline: 0,
    Mspline: 0.1277,
    Sspline: -0.0960,
  },
  36.75: {
    Lspline: 0,
    Mspline: 0.1262,
    Sspline: -0.0958,
  },
  37.25: {
    Lspline: 0,
    Mspline: 0.1230,
    Sspline: -0.0952,
  },
  37.5: {
    Lspline: 0,
    Mspline: 0.1214,
    Sspline: -0.0948,
  },
  37.75: {
    Lspline: 0,
    Mspline: 0.1197,
    Sspline: -0.0944,
  },
  38.25: {
    Lspline: 0,
    Mspline: 0.1164,
    Sspline: -0.0935,
  },
  38.5: {
    Lspline: 0,
    Mspline: 0.1147,
    Sspline: -0.0930,
  },
  38.75: {
    Lspline: 0,
    Mspline: 0.1129,
    Sspline: -0.0925,
  },
  39.25: {
    Lspline: 0,
    Mspline: 0.1094,
    Sspline: -0.0913,
  },
  39.5: {
    Lspline: 0,
    Mspline: 0.1076,
    Sspline: -0.0906,
  },
  39.75: {
    Lspline: 0,
    Mspline: 0.1058,
    Sspline: -0.0899,
  },
  40.25: {
    Lspline: 0,
    Mspline: 0.1022,
    Sspline: -0.0884,
  },
  40.5: {
    Lspline: 0,
    Mspline: 0.1003,
    Sspline: -0.0876,
  },
  40.75: {
    Lspline: 0,
    Mspline: 0.0985,
    Sspline: -0.0868,
  },
  41.25: {
    Lspline: 0,
    Mspline: 0.0947,
    Sspline: -0.0850,
  },
  41.5: {
    Lspline: 0,
    Mspline: 0.0928,
    Sspline: -0.0841,
  },
  41.75: {
    Lspline: 0,
    Mspline: 0.0909,
    Sspline: -0.0831,
  },
  42.25: {
    Lspline: 0,
    Mspline: 0.0870,
    Sspline: -0.0810,
  },
  42.5: {
    Lspline: 0,
    Mspline: 0.0850,
    Sspline: -0.0799,
  },
  42.75: {
    Lspline: 0,
    Mspline: 0.0830,
    Sspline: -0.0788,
  },
  43.25: {
    Lspline: 0,
    Mspline: 0.0791,
    Sspline: -0.0765,
  },
  43.5: {
    Lspline: 0,
    Mspline: 0.0771,
    Sspline: -0.0753,
  },
  43.75: {
    Lspline: 0,
    Mspline: 0.0751,
    Sspline: -0.0740,
  },
  44.25: {
    Lspline: 0,
    Mspline: 0.0710,
    Sspline: -0.0715,
  },
  44.5: {
    Lspline: 0,
    Mspline: 0.0690,
    Sspline: -0.0701,
  },
  44.75: {
    Lspline: 0,
    Mspline: 0.0670,
    Sspline: -0.0688,
  },
  45.25: {
    Lspline: 0,
    Mspline: 0.0630,
    Sspline: -0.0660,
  },
  45.5: {
    Lspline: 0,
    Mspline: 0.0609,
    Sspline: -0.0646,
  },
  45.75: {
    Lspline: 0,
    Mspline: 0.0589,
    Sspline: -0.0631,
  },
  46.25: {
    Lspline: 0,
    Mspline: 0.0548,
    Sspline: -0.0601,
  },
  46.5: {
    Lspline: 0,
    Mspline: 0.0527,
    Sspline: -0.0585,
  },
  46.75: {
    Lspline: 0,
    Mspline: 0.0507,
    Sspline: -0.0570,
  },
  47.25: {
    Lspline: 0,
    Mspline: 0.0465,
    Sspline: -0.0537,
  },
  47.5: {
    Lspline: 0,
    Mspline: 0.0445,
    Sspline: -0.0521,
  },
  47.75: {
    Lspline: 0,
    Mspline: 0.0424,
    Sspline: -0.0504,
  },
  48.25: {
    Lspline: 0,
    Mspline: 0.0382,
    Sspline: -0.0470,
  },
  48.5: {
    Lspline: 0,
    Mspline: 0.0361,
    Sspline: -0.0453,
  },
  48.75: {
    Lspline: 0,
    Mspline: 0.0339,
    Sspline: -0.0436,
  },
  49.25: {
    Lspline: 0,
    Mspline: 0.0297,
    Sspline: -0.0400,
  },
  49.5: {
    Lspline: 0,
    Mspline: 0.0275,
    Sspline: -0.0382,
  },
  49.75: {
    Lspline: 0,
    Mspline: 0.0254,
    Sspline: -0.0364,
  },
  50.25: {
    Lspline: 0,
    Mspline: 0.0210,
    Sspline: -0.0327,
  },
  50.5: {
    Lspline: 0,
    Mspline: 0.0188,
    Sspline: -0.0308,
  },
  50.75: {
    Lspline: 0,
    Mspline: 0.0166,
    Sspline: -0.0289,
  },
  51.25: {
    Lspline: 0,
    Mspline: 0.0122,
    Sspline: -0.0251,
  },
  51.5: {
    Lspline: 0,
    Mspline: 0.0099,
    Sspline: -0.0231,
  },
  51.75: {
    Lspline: 0,
    Mspline: 0.0077,
    Sspline: -0.0212,
  },
  52.25: {
    Lspline: 0,
    Mspline: 0.0032,
    Sspline: -0.0172,
  },
  52.5: {
    Lspline: 0,
    Mspline: 0.0009,
    Sspline: -0.0152,
  },
  52.75: {
    Lspline: 0,
    Mspline: -0.0014,
    Sspline: -0.0132,
  },
  53.25: {
    Lspline: 0,
    Mspline: -0.0061,
    Sspline: -0.0092,
  },
  53.5: {
    Lspline: 0,
    Mspline: -0.0084,
    Sspline: -0.0071,
  },
  53.75: {
    Lspline: 0,
    Mspline: -0.0108,
    Sspline: -0.0051,
  },
  54.25: {
    Lspline: 0,
    Mspline: -0.0155,
    Sspline: -0.0009,
  },
  54.5: {
    Lspline: 0,
    Mspline: -0.0179,
    Sspline: 0.0012,
  },
  54.75: {
    Lspline: 0,
    Mspline: -0.0203,
    Sspline: 0.0033,
  },
  55.25: {
    Lspline: 0,
    Mspline: -0.0252,
    Sspline: 0.0075,
  },
  55.5: {
    Lspline: 0,
    Mspline: -0.0276,
    Sspline: 0.0097,
  },
  55.75: {
    Lspline: 0,
    Mspline: -0.0301,
    Sspline: 0.0118,
  },
  56.25: {
    Lspline: 0,
    Mspline: -0.0350,
    Sspline: 0.0161,
  },
  56.5: {
    Lspline: 0,
    Mspline: -0.0375,
    Sspline: 0.0183,
  },
  56.75: {
    Lspline: 0,
    Mspline: -0.0401,
    Sspline: 0.0204,
  },
  57.25: {
    Lspline: 0,
    Mspline: -0.0451,
    Sspline: 0.0248,
  },
  57.5: {
    Lspline: 0,
    Mspline: -0.0477,
    Sspline: 0.0270,
  },
  57.75: {
    Lspline: 0,
    Mspline: -0.0503,
    Sspline: 0.0292,
  },
  58.25: {
    Lspline: 0,
    Mspline: -0.0555,
    Sspline: 0.0336,
  },
  58.5: {
    Lspline: 0,
    Mspline: -0.0581,
    Sspline: 0.0358,
  },
  58.75: {
    Lspline: 0,
    Mspline: -0.0607,
    Sspline: 0.0380,
  },
  59.25: {
    Lspline: 0,
    Mspline: -0.0660,
    Sspline: 0.0425,
  },
  59.5: {
    Lspline: 0,
    Mspline: -0.0687,
    Sspline: 0.0447,
  },
  59.75: {
    Lspline: 0,
    Mspline: -0.0714,
    Sspline: 0.0469,
  },
  60.25: {
    Lspline: 0,
    Mspline: -0.0768,
    Sspline: 0.0514,
  },
  60.5: {
    Lspline: 0,
    Mspline: -0.0795,
    Sspline: 0.0536,
  },
  60.75: {
    Lspline: 0,
    Mspline: -0.0822,
    Sspline: 0.0559,
  },
  61.25: {
    Lspline: 0,
    Mspline: -0.0878,
    Sspline: 0.0604,
  },
  61.5: {
    Lspline: 0,
    Mspline: -0.0905,
    Sspline: 0.0626,
  },
  61.75: {
    Lspline: 0,
    Mspline: -0.0933,
    Sspline: 0.0649,
  },
  62.25: {
    Lspline: 0,
    Mspline: -0.0989,
    Sspline: 0.0694,
  },
  62.5: {
    Lspline: 0,
    Mspline: -0.1018,
    Sspline: 0.0716,
  },
  62.75: {
    Lspline: 0,
    Mspline: -0.1046,
    Sspline: 0.0739,
  },
  63.25: {
    Lspline: 0,
    Mspline: -0.1103,
    Sspline: 0.0784,
  },
  63.5: {
    Lspline: 0,
    Mspline: -0.1132,
    Sspline: 0.0807,
  },
  63.75: {
    Lspline: 0,
    Mspline: -0.1161,
    Sspline: 0.0829,
  },
  64.25: {
    Lspline: 0,
    Mspline: -0.1219,
    Sspline: 0.0874,
  },
  64.5: {
    Lspline: 0,
    Mspline: -0.1249,
    Sspline: 0.0897,
  },
  64.75: {
    Lspline: 0,
    Mspline: -0.1278,
    Sspline: 0.0919,
  },
  65.25: {
    Lspline: 0,
    Mspline: -0.1338,
    Sspline: 0.0964,
  },
  65.5: {
    Lspline: 0,
    Mspline: -0.1368,
    Sspline: 0.0987,
  },
  65.75: {
    Lspline: 0,
    Mspline: -0.1398,
    Sspline: 0.1010,
  },
  66.25: {
    Lspline: 0,
    Mspline: -0.1458,
    Sspline: 0.1055,
  },
  66.5: {
    Lspline: 0,
    Mspline: -0.1488,
    Sspline: 0.1077,
  },
  66.75: {
    Lspline: 0,
    Mspline: -0.1519,
    Sspline: 0.1100,
  },
  67.25: {
    Lspline: 0,
    Mspline: -0.1580,
    Sspline: 0.1144,
  },
  67.5: {
    Lspline: 0,
    Mspline: -0.1611,
    Sspline: 0.1167,
  },
  67.75: {
    Lspline: 0,
    Mspline: -0.1642,
    Sspline: 0.1189,
  },
  68.25: {
    Lspline: 0,
    Mspline: -0.1705,
    Sspline: 0.1234,
  },
  68.5: {
    Lspline: 0,
    Mspline: -0.1736,
    Sspline: 0.1256,
  },
  68.75: {
    Lspline: 0,
    Mspline: -0.1768,
    Sspline: 0.1278,
  },
  69.25: {
    Lspline: 0,
    Mspline: -0.1831,
    Sspline: 0.1323,
  },
  69.5: {
    Lspline: 0,
    Mspline: -0.1863,
    Sspline: 0.1345,
  },
  69.75: {
    Lspline: 0,
    Mspline: -0.1895,
    Sspline: 0.1367,
  },
  70.25: {
    Lspline: 0,
    Mspline: -0.1958,
    Sspline: 0.1411,
  },
  70.5: {
    Lspline: 0,
    Mspline: -0.1991,
    Sspline: 0.1433,
  },
  70.75: {
    Lspline: 0,
    Mspline: -0.2023,
    Sspline: 0.1455,
  },
  71.25: {
    Lspline: 0,
    Mspline: -0.2087,
    Sspline: 0.1499,
  },
  71.5: {
    Lspline: 0,
    Mspline: -0.2120,
    Sspline: 0.1521,
  },
  71.75: {
    Lspline: 0,
    Mspline: -0.2152,
    Sspline: 0.1543,
  },
  72.25: {
    Lspline: 0,
    Mspline: -0.2217,
    Sspline: 0.1586,
  },
  72.5: {
    Lspline: 0,
    Mspline: -0.2249,
    Sspline: 0.1608,
  },
  72.75: {
    Lspline: 0,
    Mspline: -0.2282,
    Sspline: 0.1629,
  },
  73.25: {
    Lspline: 0,
    Mspline: -0.2347,
    Sspline: 0.1672,
  },
  73.5: {
    Lspline: 0,
    Mspline: -0.2380,
    Sspline: 0.1694,
  },
  73.75: {
    Lspline: 0,
    Mspline: -0.2413,
    Sspline: 0.1715,
  },
  74.25: {
    Lspline: 0,
    Mspline: -0.2478,
    Sspline: 0.1758,
  },
  74.5: {
    Lspline: 0,
    Mspline: -0.2511,
    Sspline: 0.1779,
  },
  74.75: {
    Lspline: 0,
    Mspline: -0.2543,
    Sspline: 0.1800,
  },
  75.25: {
    Lspline: 0,
    Mspline: -0.2609,
    Sspline: 0.1842,
  },
  75.5: {
    Lspline: 0,
    Mspline: -0.2642,
    Sspline: 0.1863,
  },
  75.75: {
    Lspline: 0,
    Mspline: -0.2674,
    Sspline: 0.1884,
  },
  76.25: {
    Lspline: 0,
    Mspline: -0.2740,
    Sspline: 0.1926,
  },
  76.5: {
    Lspline: 0,
    Mspline: -0.2773,
    Sspline: 0.1946,
  },
  76.75: {
    Lspline: 0,
    Mspline: -0.2805,
    Sspline: 0.1967,
  },
  77.25: {
    Lspline: 0,
    Mspline: -0.2871,
    Sspline: 0.2008,
  },
  77.5: {
    Lspline: 0,
    Mspline: -0.2903,
    Sspline: 0.2029,
  },
  77.75: {
    Lspline: 0,
    Mspline: -0.2936,
    Sspline: 0.2049,
  },
  78.25: {
    Lspline: 0,
    Mspline: -0.3001,
    Sspline: 0.2090,
  },
  78.5: {
    Lspline: 0,
    Mspline: -0.3033,
    Sspline: 0.2110,
  },
  78.75: {
    Lspline: 0,
    Mspline: -0.3065,
    Sspline: 0.2131,
  },
  79.25: {
    Lspline: 0,
    Mspline: -0.3130,
    Sspline: 0.2171,
  },
  79.5: {
    Lspline: 0,
    Mspline: -0.3162,
    Sspline: 0.2191,
  },
  79.75: {
    Lspline: 0,
    Mspline: -0.3194,
    Sspline: 0.2211,
  },
  80.25: {
    Lspline: 0,
    Mspline: -0.3258,
    Sspline: 0.2251,
  },
  80.5: {
    Lspline: 0,
    Mspline: -0.3290,
    Sspline: 0.2271,
  },
  80.75: {
    Lspline: 0,
    Mspline: -0.3322,
    Sspline: 0.2291,
  },
  81.25: {
    Lspline: 0,
    Mspline: -0.3386,
    Sspline: 0.2330,
  },
  81.5: {
    Lspline: 0,
    Mspline: -0.3417,
    Sspline: 0.2350,
  },
  81.75: {
    Lspline: 0,
    Mspline: -0.3449,
    Sspline: 0.2369,
  },
  82.25: {
    Lspline: 0,
    Mspline: -0.3512,
    Sspline: 0.2408,
  },
  82.5: {
    Lspline: 0,
    Mspline: -0.3543,
    Sspline: 0.2427,
  },
  82.75: {
    Lspline: 0,
    Mspline: -0.3574,
    Sspline: 0.2447,
  },
  83.25: {
    Lspline: 0,
    Mspline: -0.3637,
    Sspline: 0.2485,
  },
  83.5: {
    Lspline: 0,
    Mspline: -0.3668,
    Sspline: 0.2505,
  },
  83.75: {
    Lspline: 0,
    Mspline: -0.3699,
    Sspline: 0.2524,
  },
  84.25: {
    Lspline: 0,
    Mspline: -0.3760,
    Sspline: 0.2562,
  },
  84.5: {
    Lspline: 0,
    Mspline: -0.3791,
    Sspline: 0.2581,
  },
  84.75: {
    Lspline: 0,
    Mspline: -0.3822,
    Sspline: 0.2600,
  },
  85.25: {
    Lspline: 0,
    Mspline: -0.3883,
    Sspline: 0.2637,
  },
  85.5: {
    Lspline: 0,
    Mspline: -0.3913,
    Sspline: 0.2656,
  },
  85.75: {
    Lspline: 0,
    Mspline: -0.3944,
    Sspline: 0.2675,
  },
  86.25: {
    Lspline: 0,
    Mspline: -0.4004,
    Sspline: 0.2712,
  },
  86.5: {
    Lspline: 0,
    Mspline: -0.4034,
    Sspline: 0.2731,
  },
  86.75: {
    Lspline: 0,
    Mspline: -0.4064,
    Sspline: 0.2749,
  },
  87.25: {
    Lspline: 0,
    Mspline: -0.4124,
    Sspline: 0.2786,
  },
  87.5: {
    Lspline: 0,
    Mspline: -0.4153,
    Sspline: 0.2804,
  },
  87.75: {
    Lspline: 0,
    Mspline: -0.4183,
    Sspline: 0.2822,
  },
  88.25: {
    Lspline: 0,
    Mspline: -0.4242,
    Sspline: 0.2859,
  },
  88.5: {
    Lspline: 0,
    Mspline: -0.4272,
    Sspline: 0.2877,
  },
  88.75: {
    Lspline: 0,
    Mspline: -0.4301,
    Sspline: 0.2895,
  },
  89.25: {
    Lspline: 0,
    Mspline: -0.4359,
    Sspline: 0.2931,
  },
  89.5: {
    Lspline: 0,
    Mspline: -0.4389,
    Sspline: 0.2949,
  },
  89.75: {
    Lspline: 0,
    Mspline: -0.4418,
    Sspline: 0.2967,
  },
  90.25: {
    Lspline: 0,
    Mspline: -0.4475,
    Sspline: 0.3003,
  },
  90.5: {
    Lspline: 0,
    Mspline: -0.4504,
    Sspline: 0.3020,
  },
  90.75: {
    Lspline: 0,
    Mspline: -0.4533,
    Sspline: 0.3038,
  },
  91.25: {
    Lspline: 0,
    Mspline: -0.4590,
    Sspline: 0.3073,
  },
  91.5: {
    Lspline: 0,
    Mspline: -0.4618,
    Sspline: 0.3091,
  },
  91.75: {
    Lspline: 0,
    Mspline: -0.4647,
    Sspline: 0.3108,
  },
  92.25: {
    Lspline: 0,
    Mspline: -0.4703,
    Sspline: 0.3143,
  },
  92.5: {
    Lspline: 0,
    Mspline: -0.4732,
    Sspline: 0.3161,
  },
  92.75: {
    Lspline: 0,
    Mspline: -0.4760,
    Sspline: 0.3178,
  },
  93.25: {
    Lspline: 0,
    Mspline: -0.4816,
    Sspline: 0.3212,
  },
  93.5: {
    Lspline: 0,
    Mspline: -0.4844,
    Sspline: 0.3229,
  },
  93.75: {
    Lspline: 0,
    Mspline: -0.4871,
    Sspline: 0.3247,
  },
  94.25: {
    Lspline: 0,
    Mspline: -0.4927,
    Sspline: 0.3281,
  },
  94.5: {
    Lspline: 0,
    Mspline: -0.4954,
    Sspline: 0.3298,
  },
  94.75: {
    Lspline: 0,
    Mspline: -0.4982,
    Sspline: 0.3315,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
