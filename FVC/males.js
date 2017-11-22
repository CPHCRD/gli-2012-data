var coefficients = {
  L: {
    q0: 0.9481, // intercept
    q1: 0, // UNUSED!
  },
  M: {
    a0: -11.2281, // intercept
    a1: 2.4135, // height
    a2: 0.0865, // age
    a3: -0.1684, // ethnicity: african american
    a4: -0.0405, // ethnicity: north east asian
    a5: -0.1177, // ethnicity: south east asian
    a6: -0.0825, // ethnicity: other/mixed
  },
  S: {
    p0: -2.2963, // intercept
    p1: 0.0718, // age
    p2: 0.0794, // ethnicity: african american
    p3: -0.46, // ethnicity: north east asian
    p4: 0.0325, // ethnicity: south east asian
    p5: -0.0503, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 0,
    Mspline: -0.0938,
    Sspline: 0.2986,
  },
  4: {
    Lspline: 0,
    Mspline: -0.0731,
    Sspline: 0.2263,
  },
  5: {
    Lspline: 0,
    Mspline: -0.0589,
    Sspline: 0.1691,
  },
  6: {
    Lspline: 0,
    Mspline: -0.0591,
    Sspline: 0.1202,
  },
  7: {
    Lspline: 0,
    Mspline: -0.0632,
    Sspline: 0.0766,
  },
  8: {
    Lspline: 0,
    Mspline: -0.0622,
    Sspline: 0.0381,
  },
  9: {
    Lspline: 0,
    Mspline: -0.0547,
    Sspline: 0.0048,
  },
  10: {
    Lspline: 0,
    Mspline: -0.0418,
    Sspline: -0.0211,
  },
  11: {
    Lspline: 0,
    Mspline: -0.0308,
    Sspline: -0.0383,
  },
  12: {
    Lspline: 0,
    Mspline: -0.0178,
    Sspline: -0.0484,
  },
  13: {
    Lspline: 0,
    Mspline: 0.0038,
    Sspline: -0.0542,
  },
  14: {
    Lspline: 0,
    Mspline: 0.0346,
    Sspline: -0.0580,
  },
  15: {
    Lspline: 0,
    Mspline: 0.0693,
    Sspline: -0.0611,
  },
  16: {
    Lspline: 0,
    Mspline: 0.1020,
    Sspline: -0.0641,
  },
  17: {
    Lspline: 0,
    Mspline: 0.1287,
    Sspline: -0.0673,
  },
  18: {
    Lspline: 0,
    Mspline: 0.1478,
    Sspline: -0.0706,
  },
  19: {
    Lspline: 0,
    Mspline: 0.1603,
    Sspline: -0.0738,
  },
  20: {
    Lspline: 0,
    Mspline: 0.1672,
    Sspline: -0.0767,
  },
  21: {
    Lspline: 0,
    Mspline: 0.1697,
    Sspline: -0.0790,
  },
  22: {
    Lspline: 0,
    Mspline: 0.1692,
    Sspline: -0.0807,
  },
  23: {
    Lspline: 0,
    Mspline: 0.1665,
    Sspline: -0.0818,
  },
  24: {
    Lspline: 0,
    Mspline: 0.1623,
    Sspline: -0.0823,
  },
  25: {
    Lspline: 0,
    Mspline: 0.1571,
    Sspline: -0.0822,
  },
  26: {
    Lspline: 0,
    Mspline: 0.1513,
    Sspline: -0.0817,
  },
  27: {
    Lspline: 0,
    Mspline: 0.1451,
    Sspline: -0.0809,
  },
  28: {
    Lspline: 0,
    Mspline: 0.1387,
    Sspline: -0.0799,
  },
  29: {
    Lspline: 0,
    Mspline: 0.1323,
    Sspline: -0.0786,
  },
  30: {
    Lspline: 0,
    Mspline: 0.1259,
    Sspline: -0.0771,
  },
  31: {
    Lspline: 0,
    Mspline: 0.1195,
    Sspline: -0.0754,
  },
  32: {
    Lspline: 0,
    Mspline: 0.1130,
    Sspline: -0.0735,
  },
  33: {
    Lspline: 0,
    Mspline: 0.1067,
    Sspline: -0.0714,
  },
  34: {
    Lspline: 0,
    Mspline: 0.1006,
    Sspline: -0.0690,
  },
  35: {
    Lspline: 0,
    Mspline: 0.0945,
    Sspline: -0.0665,
  },
  36: {
    Lspline: 0,
    Mspline: 0.0885,
    Sspline: -0.0637,
  },
  37: {
    Lspline: 0,
    Mspline: 0.0826,
    Sspline: -0.0607,
  },
  38: {
    Lspline: 0,
    Mspline: 0.0765,
    Sspline: -0.0574,
  },
  39: {
    Lspline: 0,
    Mspline: 0.0704,
    Sspline: -0.0539,
  },
  40: {
    Lspline: 0,
    Mspline: 0.0641,
    Sspline: -0.0501,
  },
  41: {
    Lspline: 0,
    Mspline: 0.0577,
    Sspline: -0.0461,
  },
  42: {
    Lspline: 0,
    Mspline: 0.0510,
    Sspline: -0.0417,
  },
  43: {
    Lspline: 0,
    Mspline: 0.0443,
    Sspline: -0.0371,
  },
  44: {
    Lspline: 0,
    Mspline: 0.0374,
    Sspline: -0.0322,
  },
  45: {
    Lspline: 0,
    Mspline: 0.0304,
    Sspline: -0.0270,
  },
  46: {
    Lspline: 0,
    Mspline: 0.0233,
    Sspline: -0.0216,
  },
  47: {
    Lspline: 0,
    Mspline: 0.0160,
    Sspline: -0.0159,
  },
  48: {
    Lspline: 0,
    Mspline: 0.0086,
    Sspline: -0.0100,
  },
  49: {
    Lspline: 0,
    Mspline: 0.0011,
    Sspline: -0.0039,
  },
  50: {
    Lspline: 0,
    Mspline: -0.0066,
    Sspline: 0.0025,
  },
  51: {
    Lspline: 0,
    Mspline: -0.0145,
    Sspline: 0.0090,
  },
  52: {
    Lspline: 0,
    Mspline: -0.0226,
    Sspline: 0.0156,
  },
  53: {
    Lspline: 0,
    Mspline: -0.0308,
    Sspline: 0.0224,
  },
  54: {
    Lspline: 0,
    Mspline: -0.0393,
    Sspline: 0.0293,
  },
  55: {
    Lspline: 0,
    Mspline: -0.0479,
    Sspline: 0.0363,
  },
  56: {
    Lspline: 0,
    Mspline: -0.0567,
    Sspline: 0.0434,
  },
  57: {
    Lspline: 0,
    Mspline: -0.0658,
    Sspline: 0.0505,
  },
  58: {
    Lspline: 0,
    Mspline: -0.0750,
    Sspline: 0.0577,
  },
  59: {
    Lspline: 0,
    Mspline: -0.0845,
    Sspline: 0.0649,
  },
  60: {
    Lspline: 0,
    Mspline: -0.0942,
    Sspline: 0.0722,
  },
  61: {
    Lspline: 0,
    Mspline: -0.1041,
    Sspline: 0.0796,
  },
  62: {
    Lspline: 0,
    Mspline: -0.1141,
    Sspline: 0.0869,
  },
  63: {
    Lspline: 0,
    Mspline: -0.1242,
    Sspline: 0.0943,
  },
  64: {
    Lspline: 0,
    Mspline: -0.1344,
    Sspline: 0.1017,
  },
  65: {
    Lspline: 0,
    Mspline: -0.1447,
    Sspline: 0.1091,
  },
  66: {
    Lspline: 0,
    Mspline: -0.1549,
    Sspline: 0.1164,
  },
  67: {
    Lspline: 0,
    Mspline: -0.1652,
    Sspline: 0.1238,
  },
  68: {
    Lspline: 0,
    Mspline: -0.1754,
    Sspline: 0.1311,
  },
  69: {
    Lspline: 0,
    Mspline: -0.1857,
    Sspline: 0.1384,
  },
  70: {
    Lspline: 0,
    Mspline: -0.1959,
    Sspline: 0.1456,
  },
  71: {
    Lspline: 0,
    Mspline: -0.2061,
    Sspline: 0.1527,
  },
  72: {
    Lspline: 0,
    Mspline: -0.2163,
    Sspline: 0.1598,
  },
  73: {
    Lspline: 0,
    Mspline: -0.2264,
    Sspline: 0.1669,
  },
  74: {
    Lspline: 0,
    Mspline: -0.2365,
    Sspline: 0.1738,
  },
  75: {
    Lspline: 0,
    Mspline: -0.2465,
    Sspline: 0.1807,
  },
  76: {
    Lspline: 0,
    Mspline: -0.2565,
    Sspline: 0.1875,
  },
  77: {
    Lspline: 0,
    Mspline: -0.2664,
    Sspline: 0.1943,
  },
  78: {
    Lspline: 0,
    Mspline: -0.2762,
    Sspline: 0.2010,
  },
  79: {
    Lspline: 0,
    Mspline: -0.2859,
    Sspline: 0.2076,
  },
  80: {
    Lspline: 0,
    Mspline: -0.2956,
    Sspline: 0.2141,
  },
  81: {
    Lspline: 0,
    Mspline: -0.3051,
    Sspline: 0.2205,
  },
  82: {
    Lspline: 0,
    Mspline: -0.3146,
    Sspline: 0.2269,
  },
  83: {
    Lspline: 0,
    Mspline: -0.3239,
    Sspline: 0.2332,
  },
  84: {
    Lspline: 0,
    Mspline: -0.3331,
    Sspline: 0.2394,
  },
  85: {
    Lspline: 0,
    Mspline: -0.3423,
    Sspline: 0.2455,
  },
  86: {
    Lspline: 0,
    Mspline: -0.3513,
    Sspline: 0.2516,
  },
  87: {
    Lspline: 0,
    Mspline: -0.3602,
    Sspline: 0.2576,
  },
  88: {
    Lspline: 0,
    Mspline: -0.3691,
    Sspline: 0.2636,
  },
  89: {
    Lspline: 0,
    Mspline: -0.3778,
    Sspline: 0.2694,
  },
  90: {
    Lspline: 0,
    Mspline: -0.3864,
    Sspline: 0.2752,
  },
  91: {
    Lspline: 0,
    Mspline: -0.3950,
    Sspline: 0.2810,
  },
  92: {
    Lspline: 0,
    Mspline: -0.4034,
    Sspline: 0.2866,
  },
  93: {
    Lspline: 0,
    Mspline: -0.4118,
    Sspline: 0.2922,
  },
  94: {
    Lspline: 0,
    Mspline: -0.4201,
    Sspline: 0.2978,
  },
  95: {
    Lspline: 0,
    Mspline: -0.4283,
    Sspline: 0.3033,
  },
  3.25: {
    Lspline: 0,
    Mspline: -0.0888,
    Sspline: 0.2785,
  },
  3.5: {
    Lspline: 0,
    Mspline: -0.0836,
    Sspline: 0.2598,
  },
  3.75: {
    Lspline: 0,
    Mspline: -0.0783,
    Sspline: 0.2425,
  },
  4.25: {
    Lspline: 0,
    Mspline: -0.0683,
    Sspline: 0.2109,
  },
  4.5: {
    Lspline: 0,
    Mspline: -0.0642,
    Sspline: 0.1963,
  },
  4.75: {
    Lspline: 0,
    Mspline: -0.0611,
    Sspline: 0.1824,
  },
  5.25: {
    Lspline: 0,
    Mspline: -0.0578,
    Sspline: 0.1562,
  },
  5.5: {
    Lspline: 0,
    Mspline: -0.0576,
    Sspline: 0.1439,
  },
  5.75: {
    Lspline: 0,
    Mspline: -0.0581,
    Sspline: 0.1318,
  },
  6.25: {
    Lspline: 0,
    Mspline: -0.0605,
    Sspline: 0.1088,
  },
  6.5: {
    Lspline: 0,
    Mspline: -0.0618,
    Sspline: 0.0978,
  },
  6.75: {
    Lspline: 0,
    Mspline: -0.0627,
    Sspline: 0.0871,
  },
  7.25: {
    Lspline: 0,
    Mspline: -0.0633,
    Sspline: 0.0665,
  },
  7.5: {
    Lspline: 0,
    Mspline: -0.0631,
    Sspline: 0.0567,
  },
  7.75: {
    Lspline: 0,
    Mspline: -0.0628,
    Sspline: 0.0472,
  },
  8.25: {
    Lspline: 0,
    Mspline: -0.0613,
    Sspline: 0.0292,
  },
  8.5: {
    Lspline: 0,
    Mspline: -0.0598,
    Sspline: 0.0207,
  },
  8.75: {
    Lspline: 0,
    Mspline: -0.0576,
    Sspline: 0.0126,
  },
  9.25: {
    Lspline: 0,
    Mspline: -0.0515,
    Sspline: -0.0024,
  },
  9.5: {
    Lspline: 0,
    Mspline: -0.0482,
    Sspline: -0.0092,
  },
  9.75: {
    Lspline: 0,
    Mspline: -0.0449,
    Sspline: -0.0155,
  },
  10.25: {
    Lspline: 0,
    Mspline: -0.0389,
    Sspline: -0.0262,
  },
  10.5: {
    Lspline: 0,
    Mspline: -0.0361,
    Sspline: -0.0308,
  },
  10.75: {
    Lspline: 0,
    Mspline: -0.0334,
    Sspline: -0.0348,
  },
  11.25: {
    Lspline: 0,
    Mspline: -0.0280,
    Sspline: -0.0414,
  },
  11.5: {
    Lspline: 0,
    Mspline: -0.0250,
    Sspline: -0.0441,
  },
  11.75: {
    Lspline: 0,
    Mspline: -0.0217,
    Sspline: -0.0464,
  },
  12.25: {
    Lspline: 0,
    Mspline: -0.0134,
    Sspline: -0.0502,
  },
  12.5: {
    Lspline: 0,
    Mspline: -0.0083,
    Sspline: -0.0517,
  },
  12.75: {
    Lspline: 0,
    Mspline: -0.0026,
    Sspline: -0.0530,
  },
  13.25: {
    Lspline: 0,
    Mspline: 0.0108,
    Sspline: -0.0553,
  },
  13.5: {
    Lspline: 0,
    Mspline: 0.0184,
    Sspline: -0.0563,
  },
  13.75: {
    Lspline: 0,
    Mspline: 0.0263,
    Sspline: -0.0571,
  },
  14.25: {
    Lspline: 0,
    Mspline: 0.0431,
    Sspline: -0.0588,
  },
  14.5: {
    Lspline: 0,
    Mspline: 0.0518,
    Sspline: -0.0596,
  },
  14.75: {
    Lspline: 0,
    Mspline: 0.0606,
    Sspline: -0.0603,
  },
  15.25: {
    Lspline: 0,
    Mspline: 0.0779,
    Sspline: -0.0618,
  },
  15.5: {
    Lspline: 0,
    Mspline: 0.0862,
    Sspline: -0.0626,
  },
  15.75: {
    Lspline: 0,
    Mspline: 0.0943,
    Sspline: -0.0634,
  },
  16.25: {
    Lspline: 0,
    Mspline: 0.1094,
    Sspline: -0.0649,
  },
  16.5: {
    Lspline: 0,
    Mspline: 0.1163,
    Sspline: -0.0657,
  },
  16.75: {
    Lspline: 0,
    Mspline: 0.1227,
    Sspline: -0.0665,
  },
  17.25: {
    Lspline: 0,
    Mspline: 0.1342,
    Sspline: -0.0682,
  },
  17.5: {
    Lspline: 0,
    Mspline: 0.1392,
    Sspline: -0.0690,
  },
  17.75: {
    Lspline: 0,
    Mspline: 0.1437,
    Sspline: -0.0698,
  },
  18.25: {
    Lspline: 0,
    Mspline: 0.1515,
    Sspline: -0.0714,
  },
  18.5: {
    Lspline: 0,
    Mspline: 0.1548,
    Sspline: -0.0722,
  },
  18.75: {
    Lspline: 0,
    Mspline: 0.1578,
    Sspline: -0.0730,
  },
  19.25: {
    Lspline: 0,
    Mspline: 0.1625,
    Sspline: -0.0746,
  },
  19.5: {
    Lspline: 0,
    Mspline: 0.1644,
    Sspline: -0.0753,
  },
  19.75: {
    Lspline: 0,
    Mspline: 0.1659,
    Sspline: -0.0760,
  },
  20.25: {
    Lspline: 0,
    Mspline: 0.1681,
    Sspline: -0.0773,
  },
  20.5: {
    Lspline: 0,
    Mspline: 0.1689,
    Sspline: -0.0779,
  },
  20.75: {
    Lspline: 0,
    Mspline: 0.1694,
    Sspline: -0.0785,
  },
  21.25: {
    Lspline: 0,
    Mspline: 0.1698,
    Sspline: -0.0795,
  },
  21.5: {
    Lspline: 0,
    Mspline: 0.1698,
    Sspline: -0.0800,
  },
  21.75: {
    Lspline: 0,
    Mspline: 0.1696,
    Sspline: -0.0804,
  },
  22.25: {
    Lspline: 0,
    Mspline: 0.1687,
    Sspline: -0.0811,
  },
  22.5: {
    Lspline: 0,
    Mspline: 0.1681,
    Sspline: -0.0814,
  },
  22.75: {
    Lspline: 0,
    Mspline: 0.1674,
    Sspline: -0.0816,
  },
  23.25: {
    Lspline: 0,
    Mspline: 0.1656,
    Sspline: -0.0820,
  },
  23.5: {
    Lspline: 0,
    Mspline: 0.1646,
    Sspline: -0.0821,
  },
  23.75: {
    Lspline: 0,
    Mspline: 0.1635,
    Sspline: -0.0822,
  },
  24.25: {
    Lspline: 0,
    Mspline: 0.1611,
    Sspline: -0.0823,
  },
  24.5: {
    Lspline: 0,
    Mspline: 0.1598,
    Sspline: -0.0823,
  },
  24.75: {
    Lspline: 0,
    Mspline: 0.1585,
    Sspline: -0.0823,
  },
  25.25: {
    Lspline: 0,
    Mspline: 0.1557,
    Sspline: -0.0821,
  },
  25.5: {
    Lspline: 0,
    Mspline: 0.1542,
    Sspline: -0.0820,
  },
  25.75: {
    Lspline: 0,
    Mspline: 0.1528,
    Sspline: -0.0819,
  },
  26.25: {
    Lspline: 0,
    Mspline: 0.1498,
    Sspline: -0.0816,
  },
  26.5: {
    Lspline: 0,
    Mspline: 0.1482,
    Sspline: -0.0814,
  },
  26.75: {
    Lspline: 0,
    Mspline: 0.1467,
    Sspline: -0.0812,
  },
  27.25: {
    Lspline: 0,
    Mspline: 0.1435,
    Sspline: -0.0807,
  },
  27.5: {
    Lspline: 0,
    Mspline: 0.1419,
    Sspline: -0.0804,
  },
  27.75: {
    Lspline: 0,
    Mspline: 0.1403,
    Sspline: -0.0801,
  },
  28.25: {
    Lspline: 0,
    Mspline: 0.1371,
    Sspline: -0.0795,
  },
  28.5: {
    Lspline: 0,
    Mspline: 0.1355,
    Sspline: -0.0792,
  },
  28.75: {
    Lspline: 0,
    Mspline: 0.1339,
    Sspline: -0.0789,
  },
  29.25: {
    Lspline: 0,
    Mspline: 0.1307,
    Sspline: -0.0782,
  },
  29.5: {
    Lspline: 0,
    Mspline: 0.1291,
    Sspline: -0.0779,
  },
  29.75: {
    Lspline: 0,
    Mspline: 0.1275,
    Sspline: -0.0775,
  },
  30.25: {
    Lspline: 0,
    Mspline: 0.1243,
    Sspline: -0.0767,
  },
  30.5: {
    Lspline: 0,
    Mspline: 0.1227,
    Sspline: -0.0763,
  },
  30.75: {
    Lspline: 0,
    Mspline: 0.1211,
    Sspline: -0.0758,
  },
  31.25: {
    Lspline: 0,
    Mspline: 0.1179,
    Sspline: -0.0749,
  },
  31.5: {
    Lspline: 0,
    Mspline: 0.1162,
    Sspline: -0.0745,
  },
  31.75: {
    Lspline: 0,
    Mspline: 0.1146,
    Sspline: -0.0740,
  },
  32.25: {
    Lspline: 0,
    Mspline: 0.1115,
    Sspline: -0.0730,
  },
  32.5: {
    Lspline: 0,
    Mspline: 0.1099,
    Sspline: -0.0725,
  },
  32.75: {
    Lspline: 0,
    Mspline: 0.1083,
    Sspline: -0.0719,
  },
  33.25: {
    Lspline: 0,
    Mspline: 0.1052,
    Sspline: -0.0708,
  },
  33.5: {
    Lspline: 0,
    Mspline: 0.1036,
    Sspline: -0.0702,
  },
  33.75: {
    Lspline: 0,
    Mspline: 0.1021,
    Sspline: -0.0696,
  },
  34.25: {
    Lspline: 0,
    Mspline: 0.0990,
    Sspline: -0.0684,
  },
  34.5: {
    Lspline: 0,
    Mspline: 0.0975,
    Sspline: -0.0678,
  },
  34.75: {
    Lspline: 0,
    Mspline: 0.0960,
    Sspline: -0.0671,
  },
  35.25: {
    Lspline: 0,
    Mspline: 0.0930,
    Sspline: -0.0658,
  },
  35.5: {
    Lspline: 0,
    Mspline: 0.0915,
    Sspline: -0.0651,
  },
  35.75: {
    Lspline: 0,
    Mspline: 0.0900,
    Sspline: -0.0644,
  },
  36.25: {
    Lspline: 0,
    Mspline: 0.0870,
    Sspline: -0.0630,
  },
  36.5: {
    Lspline: 0,
    Mspline: 0.0856,
    Sspline: -0.0622,
  },
  36.75: {
    Lspline: 0,
    Mspline: 0.0841,
    Sspline: -0.0615,
  },
  37.25: {
    Lspline: 0,
    Mspline: 0.0811,
    Sspline: -0.0599,
  },
  37.5: {
    Lspline: 0,
    Mspline: 0.0796,
    Sspline: -0.0591,
  },
  37.75: {
    Lspline: 0,
    Mspline: 0.0781,
    Sspline: -0.0583,
  },
  38.25: {
    Lspline: 0,
    Mspline: 0.0750,
    Sspline: -0.0566,
  },
  38.5: {
    Lspline: 0,
    Mspline: 0.0735,
    Sspline: -0.0557,
  },
  38.75: {
    Lspline: 0,
    Mspline: 0.0719,
    Sspline: -0.0548,
  },
  39.25: {
    Lspline: 0,
    Mspline: 0.0688,
    Sspline: -0.0530,
  },
  39.5: {
    Lspline: 0,
    Mspline: 0.0673,
    Sspline: -0.0521,
  },
  39.75: {
    Lspline: 0,
    Mspline: 0.0657,
    Sspline: -0.0511,
  },
  40.25: {
    Lspline: 0,
    Mspline: 0.0625,
    Sspline: -0.0491,
  },
  40.5: {
    Lspline: 0,
    Mspline: 0.0609,
    Sspline: -0.0481,
  },
  40.75: {
    Lspline: 0,
    Mspline: 0.0593,
    Sspline: -0.0471,
  },
  41.25: {
    Lspline: 0,
    Mspline: 0.0560,
    Sspline: -0.0450,
  },
  41.5: {
    Lspline: 0,
    Mspline: 0.0544,
    Sspline: -0.0439,
  },
  41.75: {
    Lspline: 0,
    Mspline: 0.0527,
    Sspline: -0.0428,
  },
  42.25: {
    Lspline: 0,
    Mspline: 0.0494,
    Sspline: -0.0406,
  },
  42.5: {
    Lspline: 0,
    Mspline: 0.0477,
    Sspline: -0.0394,
  },
  42.75: {
    Lspline: 0,
    Mspline: 0.0460,
    Sspline: -0.0383,
  },
  43.25: {
    Lspline: 0,
    Mspline: 0.0426,
    Sspline: -0.0359,
  },
  43.5: {
    Lspline: 0,
    Mspline: 0.0408,
    Sspline: -0.0347,
  },
  43.75: {
    Lspline: 0,
    Mspline: 0.0391,
    Sspline: -0.0334,
  },
  44.25: {
    Lspline: 0,
    Mspline: 0.0356,
    Sspline: -0.0309,
  },
  44.5: {
    Lspline: 0,
    Mspline: 0.0339,
    Sspline: -0.0296,
  },
  44.75: {
    Lspline: 0,
    Mspline: 0.0322,
    Sspline: -0.0283,
  },
  45.25: {
    Lspline: 0,
    Mspline: 0.0286,
    Sspline: -0.0257,
  },
  45.5: {
    Lspline: 0,
    Mspline: 0.0269,
    Sspline: -0.0243,
  },
  45.75: {
    Lspline: 0,
    Mspline: 0.0251,
    Sspline: -0.0230,
  },
  46.25: {
    Lspline: 0,
    Mspline: 0.0215,
    Sspline: -0.0202,
  },
  46.5: {
    Lspline: 0,
    Mspline: 0.0197,
    Sspline: -0.0188,
  },
  46.75: {
    Lspline: 0,
    Mspline: 0.0178,
    Sspline: -0.0173,
  },
  47.25: {
    Lspline: 0,
    Mspline: 0.0142,
    Sspline: -0.0144,
  },
  47.5: {
    Lspline: 0,
    Mspline: 0.0123,
    Sspline: -0.0130,
  },
  47.75: {
    Lspline: 0,
    Mspline: 0.0105,
    Sspline: -0.0115,
  },
  48.25: {
    Lspline: 0,
    Mspline: 0.0068,
    Sspline: -0.0085,
  },
  48.5: {
    Lspline: 0,
    Mspline: 0.0049,
    Sspline: -0.0069,
  },
  48.75: {
    Lspline: 0,
    Mspline: 0.0030,
    Sspline: -0.0054,
  },
  49.25: {
    Lspline: 0,
    Mspline: -0.0008,
    Sspline: -0.0023,
  },
  49.5: {
    Lspline: 0,
    Mspline: -0.0028,
    Sspline: -0.0007,
  },
  49.75: {
    Lspline: 0,
    Mspline: -0.0047,
    Sspline: 0.0009,
  },
  50.25: {
    Lspline: 0,
    Mspline: -0.0086,
    Sspline: 0.0041,
  },
  50.5: {
    Lspline: 0,
    Mspline: -0.0106,
    Sspline: 0.0057,
  },
  50.75: {
    Lspline: 0,
    Mspline: -0.0126,
    Sspline: 0.0073,
  },
  51.25: {
    Lspline: 0,
    Mspline: -0.0165,
    Sspline: 0.0106,
  },
  51.5: {
    Lspline: 0,
    Mspline: -0.0186,
    Sspline: 0.0123,
  },
  51.75: {
    Lspline: 0,
    Mspline: -0.0206,
    Sspline: 0.0139,
  },
  52.25: {
    Lspline: 0,
    Mspline: -0.0246,
    Sspline: 0.0173,
  },
  52.5: {
    Lspline: 0,
    Mspline: -0.0267,
    Sspline: 0.0190,
  },
  52.75: {
    Lspline: 0,
    Mspline: -0.0288,
    Sspline: 0.0207,
  },
  53.25: {
    Lspline: 0,
    Mspline: -0.0329,
    Sspline: 0.0241,
  },
  53.5: {
    Lspline: 0,
    Mspline: -0.0350,
    Sspline: 0.0258,
  },
  53.75: {
    Lspline: 0,
    Mspline: -0.0371,
    Sspline: 0.0276,
  },
  54.25: {
    Lspline: 0,
    Mspline: -0.0414,
    Sspline: 0.0310,
  },
  54.5: {
    Lspline: 0,
    Mspline: -0.0436,
    Sspline: 0.0328,
  },
  54.75: {
    Lspline: 0,
    Mspline: -0.0457,
    Sspline: 0.0345,
  },
  55.25: {
    Lspline: 0,
    Mspline: -0.0501,
    Sspline: 0.0380,
  },
  55.5: {
    Lspline: 0,
    Mspline: -0.0523,
    Sspline: 0.0398,
  },
  55.75: {
    Lspline: 0,
    Mspline: -0.0545,
    Sspline: 0.0416,
  },
  56.25: {
    Lspline: 0,
    Mspline: -0.0590,
    Sspline: 0.0451,
  },
  56.5: {
    Lspline: 0,
    Mspline: -0.0612,
    Sspline: 0.0469,
  },
  56.75: {
    Lspline: 0,
    Mspline: -0.0635,
    Sspline: 0.0487,
  },
  57.25: {
    Lspline: 0,
    Mspline: -0.0681,
    Sspline: 0.0523,
  },
  57.5: {
    Lspline: 0,
    Mspline: -0.0704,
    Sspline: 0.0541,
  },
  57.75: {
    Lspline: 0,
    Mspline: -0.0727,
    Sspline: 0.0559,
  },
  58.25: {
    Lspline: 0,
    Mspline: -0.0774,
    Sspline: 0.0595,
  },
  58.5: {
    Lspline: 0,
    Mspline: -0.0798,
    Sspline: 0.0613,
  },
  58.75: {
    Lspline: 0,
    Mspline: -0.0821,
    Sspline: 0.0631,
  },
  59.25: {
    Lspline: 0,
    Mspline: -0.0869,
    Sspline: 0.0668,
  },
  59.5: {
    Lspline: 0,
    Mspline: -0.0893,
    Sspline: 0.0686,
  },
  59.75: {
    Lspline: 0,
    Mspline: -0.0918,
    Sspline: 0.0704,
  },
  60.25: {
    Lspline: 0,
    Mspline: -0.0967,
    Sspline: 0.0741,
  },
  60.5: {
    Lspline: 0,
    Mspline: -0.0991,
    Sspline: 0.0759,
  },
  60.75: {
    Lspline: 0,
    Mspline: -0.1016,
    Sspline: 0.0777,
  },
  61.25: {
    Lspline: 0,
    Mspline: -0.1066,
    Sspline: 0.0814,
  },
  61.5: {
    Lspline: 0,
    Mspline: -0.1091,
    Sspline: 0.0832,
  },
  61.75: {
    Lspline: 0,
    Mspline: -0.1116,
    Sspline: 0.0851,
  },
  62.25: {
    Lspline: 0,
    Mspline: -0.1166,
    Sspline: 0.0888,
  },
  62.5: {
    Lspline: 0,
    Mspline: -0.1191,
    Sspline: 0.0906,
  },
  62.75: {
    Lspline: 0,
    Mspline: -0.1217,
    Sspline: 0.0925,
  },
  63.25: {
    Lspline: 0,
    Mspline: -0.1268,
    Sspline: 0.0962,
  },
  63.5: {
    Lspline: 0,
    Mspline: -0.1293,
    Sspline: 0.0980,
  },
  63.75: {
    Lspline: 0,
    Mspline: -0.1319,
    Sspline: 0.0998,
  },
  64.25: {
    Lspline: 0,
    Mspline: -0.1370,
    Sspline: 0.1035,
  },
  64.5: {
    Lspline: 0,
    Mspline: -0.1395,
    Sspline: 0.1054,
  },
  64.75: {
    Lspline: 0,
    Mspline: -0.1421,
    Sspline: 0.1072,
  },
  65.25: {
    Lspline: 0,
    Mspline: -0.1472,
    Sspline: 0.1109,
  },
  65.5: {
    Lspline: 0,
    Mspline: -0.1498,
    Sspline: 0.1128,
  },
  65.75: {
    Lspline: 0,
    Mspline: -0.1523,
    Sspline: 0.1146,
  },
  66.25: {
    Lspline: 0,
    Mspline: -0.1575,
    Sspline: 0.1183,
  },
  66.5: {
    Lspline: 0,
    Mspline: -0.1600,
    Sspline: 0.1201,
  },
  66.75: {
    Lspline: 0,
    Mspline: -0.1626,
    Sspline: 0.1220,
  },
  67.25: {
    Lspline: 0,
    Mspline: -0.1677,
    Sspline: 0.1256,
  },
  67.5: {
    Lspline: 0,
    Mspline: -0.1703,
    Sspline: 0.1274,
  },
  67.75: {
    Lspline: 0,
    Mspline: -0.1729,
    Sspline: 0.1293,
  },
  68.25: {
    Lspline: 0,
    Mspline: -0.1780,
    Sspline: 0.1329,
  },
  68.5: {
    Lspline: 0,
    Mspline: -0.1806,
    Sspline: 0.1347,
  },
  68.75: {
    Lspline: 0,
    Mspline: -0.1831,
    Sspline: 0.1366,
  },
  69.25: {
    Lspline: 0,
    Mspline: -0.1882,
    Sspline: 0.1402,
  },
  69.5: {
    Lspline: 0,
    Mspline: -0.1908,
    Sspline: 0.1420,
  },
  69.75: {
    Lspline: 0,
    Mspline: -0.1933,
    Sspline: 0.1438,
  },
  70.25: {
    Lspline: 0,
    Mspline: -0.1985,
    Sspline: 0.1474,
  },
  70.5: {
    Lspline: 0,
    Mspline: -0.2010,
    Sspline: 0.1492,
  },
  70.75: {
    Lspline: 0,
    Mspline: -0.2035,
    Sspline: 0.1510,
  },
  71.25: {
    Lspline: 0,
    Mspline: -0.2086,
    Sspline: 0.1545,
  },
  71.5: {
    Lspline: 0,
    Mspline: -0.2112,
    Sspline: 0.1563,
  },
  71.75: {
    Lspline: 0,
    Mspline: -0.2137,
    Sspline: 0.1581,
  },
  72.25: {
    Lspline: 0,
    Mspline: -0.2188,
    Sspline: 0.1616,
  },
  72.5: {
    Lspline: 0,
    Mspline: -0.2213,
    Sspline: 0.1634,
  },
  72.75: {
    Lspline: 0,
    Mspline: -0.2239,
    Sspline: 0.1651,
  },
  73.25: {
    Lspline: 0,
    Mspline: -0.2289,
    Sspline: 0.1686,
  },
  73.5: {
    Lspline: 0,
    Mspline: -0.2314,
    Sspline: 0.1704,
  },
  73.75: {
    Lspline: 0,
    Mspline: -0.2340,
    Sspline: 0.1721,
  },
  74.25: {
    Lspline: 0,
    Mspline: -0.2390,
    Sspline: 0.1756,
  },
  74.5: {
    Lspline: 0,
    Mspline: -0.2415,
    Sspline: 0.1773,
  },
  74.75: {
    Lspline: 0,
    Mspline: -0.2440,
    Sspline: 0.1790,
  },
  75.25: {
    Lspline: 0,
    Mspline: -0.2490,
    Sspline: 0.1824,
  },
  75.5: {
    Lspline: 0,
    Mspline: -0.2515,
    Sspline: 0.1841,
  },
  75.75: {
    Lspline: 0,
    Mspline: -0.2540,
    Sspline: 0.1858,
  },
  76.25: {
    Lspline: 0,
    Mspline: -0.2590,
    Sspline: 0.1892,
  },
  76.5: {
    Lspline: 0,
    Mspline: -0.2615,
    Sspline: 0.1909,
  },
  76.75: {
    Lspline: 0,
    Mspline: -0.2639,
    Sspline: 0.1926,
  },
  77.25: {
    Lspline: 0,
    Mspline: -0.2689,
    Sspline: 0.1960,
  },
  77.5: {
    Lspline: 0,
    Mspline: -0.2713,
    Sspline: 0.1976,
  },
  77.75: {
    Lspline: 0,
    Mspline: -0.2738,
    Sspline: 0.1993,
  },
  78.25: {
    Lspline: 0,
    Mspline: -0.2787,
    Sspline: 0.2026,
  },
  78.5: {
    Lspline: 0,
    Mspline: -0.2811,
    Sspline: 0.2043,
  },
  78.75: {
    Lspline: 0,
    Mspline: -0.2835,
    Sspline: 0.2059,
  },
  79.25: {
    Lspline: 0,
    Mspline: -0.2884,
    Sspline: 0.2092,
  },
  79.5: {
    Lspline: 0,
    Mspline: -0.2908,
    Sspline: 0.2108,
  },
  79.75: {
    Lspline: 0,
    Mspline: -0.2932,
    Sspline: 0.2125,
  },
  80.25: {
    Lspline: 0,
    Mspline: -0.2980,
    Sspline: 0.2157,
  },
  80.5: {
    Lspline: 0,
    Mspline: -0.3004,
    Sspline: 0.2173,
  },
  80.75: {
    Lspline: 0,
    Mspline: -0.3027,
    Sspline: 0.2189,
  },
  81.25: {
    Lspline: 0,
    Mspline: -0.3075,
    Sspline: 0.2221,
  },
  81.5: {
    Lspline: 0,
    Mspline: -0.3098,
    Sspline: 0.2237,
  },
  81.75: {
    Lspline: 0,
    Mspline: -0.3122,
    Sspline: 0.2253,
  },
  82.25: {
    Lspline: 0,
    Mspline: -0.3169,
    Sspline: 0.2285,
  },
  82.5: {
    Lspline: 0,
    Mspline: -0.3192,
    Sspline: 0.2300,
  },
  82.75: {
    Lspline: 0,
    Mspline: -0.3216,
    Sspline: 0.2316,
  },
  83.25: {
    Lspline: 0,
    Mspline: -0.3262,
    Sspline: 0.2347,
  },
  83.5: {
    Lspline: 0,
    Mspline: -0.3285,
    Sspline: 0.2363,
  },
  83.75: {
    Lspline: 0,
    Mspline: -0.3308,
    Sspline: 0.2379,
  },
  84.25: {
    Lspline: 0,
    Mspline: -0.3354,
    Sspline: 0.2409,
  },
  84.5: {
    Lspline: 0,
    Mspline: -0.3377,
    Sspline: 0.2425,
  },
  84.75: {
    Lspline: 0,
    Mspline: -0.3400,
    Sspline: 0.2440,
  },
  85.25: {
    Lspline: 0,
    Mspline: -0.3445,
    Sspline: 0.2471,
  },
  85.5: {
    Lspline: 0,
    Mspline: -0.3468,
    Sspline: 0.2486,
  },
  85.75: {
    Lspline: 0,
    Mspline: -0.3491,
    Sspline: 0.2501,
  },
  86.25: {
    Lspline: 0,
    Mspline: -0.3535,
    Sspline: 0.2531,
  },
  86.5: {
    Lspline: 0,
    Mspline: -0.3558,
    Sspline: 0.2546,
  },
  86.75: {
    Lspline: 0,
    Mspline: -0.3580,
    Sspline: 0.2561,
  },
  87.25: {
    Lspline: 0,
    Mspline: -0.3625,
    Sspline: 0.2591,
  },
  87.5: {
    Lspline: 0,
    Mspline: -0.3647,
    Sspline: 0.2606,
  },
  87.75: {
    Lspline: 0,
    Mspline: -0.3669,
    Sspline: 0.2621,
  },
  88.25: {
    Lspline: 0,
    Mspline: -0.3713,
    Sspline: 0.2650,
  },
  88.5: {
    Lspline: 0,
    Mspline: -0.3735,
    Sspline: 0.2665,
  },
  88.75: {
    Lspline: 0,
    Mspline: -0.3756,
    Sspline: 0.2680,
  },
  89.25: {
    Lspline: 0,
    Mspline: -0.3800,
    Sspline: 0.2709,
  },
  89.5: {
    Lspline: 0,
    Mspline: -0.3821,
    Sspline: 0.2723,
  },
  89.75: {
    Lspline: 0,
    Mspline: -0.3843,
    Sspline: 0.2738,
  },
  90.25: {
    Lspline: 0,
    Mspline: -0.3886,
    Sspline: 0.2767,
  },
  90.5: {
    Lspline: 0,
    Mspline: -0.3907,
    Sspline: 0.2781,
  },
  90.75: {
    Lspline: 0,
    Mspline: -0.3929,
    Sspline: 0.2795,
  },
  91.25: {
    Lspline: 0,
    Mspline: -0.3971,
    Sspline: 0.2824,
  },
  91.5: {
    Lspline: 0,
    Mspline: -0.3992,
    Sspline: 0.2838,
  },
  91.75: {
    Lspline: 0,
    Mspline: -0.4013,
    Sspline: 0.2852,
  },
  92.25: {
    Lspline: 0,
    Mspline: -0.4055,
    Sspline: 0.2880,
  },
  92.5: {
    Lspline: 0,
    Mspline: -0.4076,
    Sspline: 0.2894,
  },
  92.75: {
    Lspline: 0,
    Mspline: -0.4097,
    Sspline: 0.2908,
  },
  93.25: {
    Lspline: 0,
    Mspline: -0.4139,
    Sspline: 0.2936,
  },
  93.5: {
    Lspline: 0,
    Mspline: -0.4160,
    Sspline: 0.2950,
  },
  93.75: {
    Lspline: 0,
    Mspline: -0.4180,
    Sspline: 0.2964,
  },
  94.25: {
    Lspline: 0,
    Mspline: -0.4221,
    Sspline: 0.2992,
  },
  94.5: {
    Lspline: 0,
    Mspline: -0.4242,
    Sspline: 0.3006,
  },
  94.75: {
    Lspline: 0,
    Mspline: -0.4262,
    Sspline: 0.3019,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
