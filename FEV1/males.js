var coefficients = {
  L: {
    q0: 0.8866, // intercept
    q1: 0.0850, // age
  },
  M: {
    a0: -10.3420, // intercept
    a1: 2.2196, // height
    a2: 0.0574, // age
    a3: -0.1589, // ethnicity: african american
    a4: -0.0351, // ethnicity: north east asian
    a5: -0.0881, // ethnicity: south east asian
    a6: -0.0708, // ethnicity: other/mixed
  },
  S: {
    p0: -2.3268, // intercept
    p1: 0.0798, // age
    p2: 0.1096, // ethnicity: african american
    p3: -0.3973, // ethnicity: north east asian
    p4: 0.0327, // ethnicity: south east asian
    p5: 0.0114, // ethnicity: other/mixed
  },
};

var lookupTable = {
  3: {
    Lspline: 0,
    Mspline: -0.1133,
    Sspline: 0.2143,
  },
  4: {
    Lspline: 0,
    Mspline: -0.0893,
    Sspline: 0.1794,
  },
  5: {
    Lspline: 0,
    Mspline: -0.0752,
    Sspline: 0.1535,
  },
  6: {
    Lspline: 0,
    Mspline: -0.0787,
    Sspline: 0.1285,
  },
  7: {
    Lspline: 0,
    Mspline: -0.0822,
    Sspline: 0.0912,
  },
  8: {
    Lspline: 0,
    Mspline: -0.0778,
    Sspline: 0.0439,
  },
  9: {
    Lspline: 0,
    Mspline: -0.0691,
    Sspline: -0.0092,
  },
  10: {
    Lspline: 0,
    Mspline: -0.0549,
    Sspline: -0.0461,
  },
  11: {
    Lspline: 0,
    Mspline: -0.0395,
    Sspline: -0.0525,
  },
  12: {
    Lspline: 0,
    Mspline: -0.0176,
    Sspline: -0.0387,
  },
  13: {
    Lspline: 0,
    Mspline: 0.0169,
    Sspline: -0.0199,
  },
  14: {
    Lspline: 0,
    Mspline: 0.0612,
    Sspline: -0.0091,
  },
  15: {
    Lspline: 0,
    Mspline: 0.1068,
    Sspline: -0.0108,
  },
  16: {
    Lspline: 0,
    Mspline: 0.1460,
    Sspline: -0.0234,
  },
  17: {
    Lspline: 0,
    Mspline: 0.1744,
    Sspline: -0.0421,
  },
  18: {
    Lspline: 0,
    Mspline: 0.1924,
    Sspline: -0.0614,
  },
  19: {
    Lspline: 0,
    Mspline: 0.2029,
    Sspline: -0.0781,
  },
  20: {
    Lspline: 0,
    Mspline: 0.2081,
    Sspline: -0.0901,
  },
  21: {
    Lspline: 0,
    Mspline: 0.2091,
    Sspline: -0.0965,
  },
  22: {
    Lspline: 0,
    Mspline: 0.2071,
    Sspline: -0.0980,
  },
  23: {
    Lspline: 0,
    Mspline: 0.2030,
    Sspline: -0.0956,
  },
  24: {
    Lspline: 0,
    Mspline: 0.1970,
    Sspline: -0.0905,
  },
  25: {
    Lspline: 0,
    Mspline: 0.1899,
    Sspline: -0.0844,
  },
  26: {
    Lspline: 0,
    Mspline: 0.1821,
    Sspline: -0.0783,
  },
  27: {
    Lspline: 0,
    Mspline: 0.1739,
    Sspline: -0.0729,
  },
  28: {
    Lspline: 0,
    Mspline: 0.1656,
    Sspline: -0.0686,
  },
  29: {
    Lspline: 0,
    Mspline: 0.1574,
    Sspline: -0.0652,
  },
  30: {
    Lspline: 0,
    Mspline: 0.1495,
    Sspline: -0.0625,
  },
  31: {
    Lspline: 0,
    Mspline: 0.1417,
    Sspline: -0.0603,
  },
  32: {
    Lspline: 0,
    Mspline: 0.1340,
    Sspline: -0.0585,
  },
  33: {
    Lspline: 0,
    Mspline: 0.1265,
    Sspline: -0.0572,
  },
  34: {
    Lspline: 0,
    Mspline: 0.1190,
    Sspline: -0.0566,
  },
  35: {
    Lspline: 0,
    Mspline: 0.1116,
    Sspline: -0.0568,
  },
  36: {
    Lspline: 0,
    Mspline: 0.1040,
    Sspline: -0.0575,
  },
  37: {
    Lspline: 0,
    Mspline: 0.0962,
    Sspline: -0.0584,
  },
  38: {
    Lspline: 0,
    Mspline: 0.0883,
    Sspline: -0.0591,
  },
  39: {
    Lspline: 0,
    Mspline: 0.0803,
    Sspline: -0.0596,
  },
  40: {
    Lspline: 0,
    Mspline: 0.0721,
    Sspline: -0.0596,
  },
  41: {
    Lspline: 0,
    Mspline: 0.0638,
    Sspline: -0.0593,
  },
  42: {
    Lspline: 0,
    Mspline: 0.0554,
    Sspline: -0.0585,
  },
  43: {
    Lspline: 0,
    Mspline: 0.0469,
    Sspline: -0.0570,
  },
  44: {
    Lspline: 0,
    Mspline: 0.0386,
    Sspline: -0.0548,
  },
  45: {
    Lspline: 0,
    Mspline: 0.0302,
    Sspline: -0.0517,
  },
  46: {
    Lspline: 0,
    Mspline: 0.0219,
    Sspline: -0.0478,
  },
  47: {
    Lspline: 0,
    Mspline: 0.0135,
    Sspline: -0.0431,
  },
  48: {
    Lspline: 0,
    Mspline: 0.0050,
    Sspline: -0.0374,
  },
  49: {
    Lspline: 0,
    Mspline: -0.0036,
    Sspline: -0.0311,
  },
  50: {
    Lspline: 0,
    Mspline: -0.0125,
    Sspline: -0.0240,
  },
  51: {
    Lspline: 0,
    Mspline: -0.0216,
    Sspline: -0.0164,
  },
  52: {
    Lspline: 0,
    Mspline: -0.0309,
    Sspline: -0.0082,
  },
  53: {
    Lspline: 0,
    Mspline: -0.0404,
    Sspline: 0.0003,
  },
  54: {
    Lspline: 0,
    Mspline: -0.0502,
    Sspline: 0.0092,
  },
  55: {
    Lspline: 0,
    Mspline: -0.0603,
    Sspline: 0.0183,
  },
  56: {
    Lspline: 0,
    Mspline: -0.0706,
    Sspline: 0.0276,
  },
  57: {
    Lspline: 0,
    Mspline: -0.0812,
    Sspline: 0.0372,
  },
  58: {
    Lspline: 0,
    Mspline: -0.0920,
    Sspline: 0.0469,
  },
  59: {
    Lspline: 0,
    Mspline: -0.1030,
    Sspline: 0.0569,
  },
  60: {
    Lspline: 0,
    Mspline: -0.1143,
    Sspline: 0.0671,
  },
  61: {
    Lspline: 0,
    Mspline: -0.1257,
    Sspline: 0.0774,
  },
  62: {
    Lspline: 0,
    Mspline: -0.1373,
    Sspline: 0.0879,
  },
  63: {
    Lspline: 0,
    Mspline: -0.1490,
    Sspline: 0.0985,
  },
  64: {
    Lspline: 0,
    Mspline: -0.1608,
    Sspline: 0.1091,
  },
  65: {
    Lspline: 0,
    Mspline: -0.1727,
    Sspline: 0.1196,
  },
  66: {
    Lspline: 0,
    Mspline: -0.1846,
    Sspline: 0.1301,
  },
  67: {
    Lspline: 0,
    Mspline: -0.1966,
    Sspline: 0.1404,
  },
  68: {
    Lspline: 0,
    Mspline: -0.2086,
    Sspline: 0.1504,
  },
  69: {
    Lspline: 0,
    Mspline: -0.2207,
    Sspline: 0.1603,
  },
  70: {
    Lspline: 0,
    Mspline: -0.2328,
    Sspline: 0.1698,
  },
  71: {
    Lspline: 0,
    Mspline: -0.2449,
    Sspline: 0.1792,
  },
  72: {
    Lspline: 0,
    Mspline: -0.2569,
    Sspline: 0.1882,
  },
  73: {
    Lspline: 0,
    Mspline: -0.2690,
    Sspline: 0.1971,
  },
  74: {
    Lspline: 0,
    Mspline: -0.2810,
    Sspline: 0.2057,
  },
  75: {
    Lspline: 0,
    Mspline: -0.2929,
    Sspline: 0.2141,
  },
  76: {
    Lspline: 0,
    Mspline: -0.3048,
    Sspline: 0.2223,
  },
  77: {
    Lspline: 0,
    Mspline: -0.3166,
    Sspline: 0.2304,
  },
  78: {
    Lspline: 0,
    Mspline: -0.3282,
    Sspline: 0.2383,
  },
  79: {
    Lspline: 0,
    Mspline: -0.3398,
    Sspline: 0.2461,
  },
  80: {
    Lspline: 0,
    Mspline: -0.3512,
    Sspline: 0.2538,
  },
  81: {
    Lspline: 0,
    Mspline: -0.3625,
    Sspline: 0.2614,
  },
  82: {
    Lspline: 0,
    Mspline: -0.3737,
    Sspline: 0.2689,
  },
  83: {
    Lspline: 0,
    Mspline: -0.3848,
    Sspline: 0.2763,
  },
  84: {
    Lspline: 0,
    Mspline: -0.3957,
    Sspline: 0.2836,
  },
  85: {
    Lspline: 0,
    Mspline: -0.4065,
    Sspline: 0.2909,
  },
  86: {
    Lspline: 0,
    Mspline: -0.4172,
    Sspline: 0.2980,
  },
  87: {
    Lspline: 0,
    Mspline: -0.4277,
    Sspline: 0.3051,
  },
  88: {
    Lspline: 0,
    Mspline: -0.4381,
    Sspline: 0.3122,
  },
  89: {
    Lspline: 0,
    Mspline: -0.4484,
    Sspline: 0.3191,
  },
  90: {
    Lspline: 0,
    Mspline: -0.4586,
    Sspline: 0.3260,
  },
  91: {
    Lspline: 0,
    Mspline: -0.4687,
    Sspline: 0.3327,
  },
  92: {
    Lspline: 0,
    Mspline: -0.4787,
    Sspline: 0.3395,
  },
  93: {
    Lspline: 0,
    Mspline: -0.4885,
    Sspline: 0.3461,
  },
  94: {
    Lspline: 0,
    Mspline: -0.4983,
    Sspline: 0.3527,
  },
  95: {
    Lspline: 0,
    Mspline: -0.5079,
    Sspline: 0.3592,
  },
  3.25: {
    Lspline: 0,
    Mspline: -0.1073,
    Sspline: 0.2043,
  },
  3.5: {
    Lspline: 0,
    Mspline: -0.1011,
    Sspline: 0.1954,
  },
  3.75: {
    Lspline: 0,
    Mspline: -0.0951,
    Sspline: 0.1872,
  },
  4.25: {
    Lspline: 0,
    Mspline: -0.0841,
    Sspline: 0.1721,
  },
  4.5: {
    Lspline: 0,
    Mspline: -0.0799,
    Sspline: 0.1653,
  },
  4.75: {
    Lspline: 0,
    Mspline: -0.0769,
    Sspline: 0.1592,
  },
  5.25: {
    Lspline: 0,
    Mspline: -0.0750,
    Sspline: 0.1479,
  },
  5.5: {
    Lspline: 0,
    Mspline: -0.0758,
    Sspline: 0.1421,
  },
  5.75: {
    Lspline: 0,
    Mspline: -0.0771,
    Sspline: 0.1356,
  },
  6.25: {
    Lspline: 0,
    Mspline: -0.0803,
    Sspline: 0.1205,
  },
  6.5: {
    Lspline: 0,
    Mspline: -0.0816,
    Sspline: 0.1115,
  },
  6.75: {
    Lspline: 0,
    Mspline: -0.0823,
    Sspline: 0.1016,
  },
  7.25: {
    Lspline: 0,
    Mspline: -0.0815,
    Sspline: 0.0801,
  },
  7.5: {
    Lspline: 0,
    Mspline: -0.0804,
    Sspline: 0.0685,
  },
  7.75: {
    Lspline: 0,
    Mspline: -0.0792,
    Sspline: 0.0565,
  },
  8.25: {
    Lspline: 0,
    Mspline: -0.0763,
    Sspline: 0.0308,
  },
  8.5: {
    Lspline: 0,
    Mspline: -0.0745,
    Sspline: 0.0174,
  },
  8.75: {
    Lspline: 0,
    Mspline: -0.0721,
    Sspline: 0.0039,
  },
  9.25: {
    Lspline: 0,
    Mspline: -0.0658,
    Sspline: -0.0210,
  },
  9.5: {
    Lspline: 0,
    Mspline: -0.0622,
    Sspline: -0.0313,
  },
  9.75: {
    Lspline: 0,
    Mspline: -0.0586,
    Sspline: -0.0397,
  },
  10.25: {
    Lspline: 0,
    Mspline: -0.0513,
    Sspline: -0.0504,
  },
  10.5: {
    Lspline: 0,
    Mspline: -0.0476,
    Sspline: -0.0528,
  },
  10.75: {
    Lspline: 0,
    Mspline: -0.0437,
    Sspline: -0.0535,
  },
  11.25: {
    Lspline: 0,
    Mspline: -0.0350,
    Sspline: -0.0503,
  },
  11.5: {
    Lspline: 0,
    Mspline: -0.0299,
    Sspline: -0.0472,
  },
  11.75: {
    Lspline: 0,
    Mspline: -0.0241,
    Sspline: -0.0432,
  },
  12.25: {
    Lspline: 0,
    Mspline: -0.0101,
    Sspline: -0.0339,
  },
  12.5: {
    Lspline: 0,
    Mspline: -0.0019,
    Sspline: -0.0290,
  },
  12.75: {
    Lspline: 0,
    Mspline: 0.0071,
    Sspline: -0.0243,
  },
  13.25: {
    Lspline: 0,
    Mspline: 0.0274,
    Sspline: -0.0162,
  },
  13.5: {
    Lspline: 0,
    Mspline: 0.0384,
    Sspline: -0.0130,
  },
  13.75: {
    Lspline: 0,
    Mspline: 0.0497,
    Sspline: -0.0107,
  },
  14.25: {
    Lspline: 0,
    Mspline: 0.0728,
    Sspline: -0.0083,
  },
  14.5: {
    Lspline: 0,
    Mspline: 0.0844,
    Sspline: -0.0084,
  },
  14.75: {
    Lspline: 0,
    Mspline: 0.0958,
    Sspline: -0.0092,
  },
  15.25: {
    Lspline: 0,
    Mspline: 0.1175,
    Sspline: -0.0131,
  },
  15.5: {
    Lspline: 0,
    Mspline: 0.1276,
    Sspline: -0.0160,
  },
  15.75: {
    Lspline: 0,
    Mspline: 0.1371,
    Sspline: -0.0195,
  },
  16.25: {
    Lspline: 0,
    Mspline: 0.1542,
    Sspline: -0.0278,
  },
  16.5: {
    Lspline: 0,
    Mspline: 0.1616,
    Sspline: -0.0324,
  },
  16.75: {
    Lspline: 0,
    Mspline: 0.1684,
    Sspline: -0.0372,
  },
  17.25: {
    Lspline: 0,
    Mspline: 0.1798,
    Sspline: -0.0471,
  },
  17.5: {
    Lspline: 0,
    Mspline: 0.1845,
    Sspline: -0.0520,
  },
  17.75: {
    Lspline: 0,
    Mspline: 0.1887,
    Sspline: -0.0568,
  },
  18.25: {
    Lspline: 0,
    Mspline: 0.1956,
    Sspline: -0.0659,
  },
  18.5: {
    Lspline: 0,
    Mspline: 0.1984,
    Sspline: -0.0702,
  },
  18.75: {
    Lspline: 0,
    Mspline: 0.2008,
    Sspline: -0.0743,
  },
  19.25: {
    Lspline: 0,
    Mspline: 0.2046,
    Sspline: -0.0816,
  },
  19.5: {
    Lspline: 0,
    Mspline: 0.2060,
    Sspline: -0.0848,
  },
  19.75: {
    Lspline: 0,
    Mspline: 0.2072,
    Sspline: -0.0876,
  },
  20.25: {
    Lspline: 0,
    Mspline: 0.2087,
    Sspline: -0.0922,
  },
  20.5: {
    Lspline: 0,
    Mspline: 0.2090,
    Sspline: -0.0940,
  },
  20.75: {
    Lspline: 0,
    Mspline: 0.2092,
    Sspline: -0.0954,
  },
  21.25: {
    Lspline: 0,
    Mspline: 0.2089,
    Sspline: -0.0973,
  },
  21.5: {
    Lspline: 0,
    Mspline: 0.2084,
    Sspline: -0.0978,
  },
  21.75: {
    Lspline: 0,
    Mspline: 0.2079,
    Sspline: -0.0981,
  },
  22.25: {
    Lspline: 0,
    Mspline: 0.2063,
    Sspline: -0.0977,
  },
  22.5: {
    Lspline: 0,
    Mspline: 0.2053,
    Sspline: -0.0972,
  },
  22.75: {
    Lspline: 0,
    Mspline: 0.2042,
    Sspline: -0.0965,
  },
  23.25: {
    Lspline: 0,
    Mspline: 0.2016,
    Sspline: -0.0945,
  },
  23.5: {
    Lspline: 0,
    Mspline: 0.2002,
    Sspline: -0.0933,
  },
  23.75: {
    Lspline: 0,
    Mspline: 0.1987,
    Sspline: -0.0919,
  },
  24.25: {
    Lspline: 0,
    Mspline: 0.1954,
    Sspline: -0.0891,
  },
  24.5: {
    Lspline: 0,
    Mspline: 0.1936,
    Sspline: -0.0875,
  },
  24.75: {
    Lspline: 0,
    Mspline: 0.1918,
    Sspline: -0.0860,
  },
  25.25: {
    Lspline: 0,
    Mspline: 0.1880,
    Sspline: -0.0828,
  },
  25.5: {
    Lspline: 0,
    Mspline: 0.1861,
    Sspline: -0.0813,
  },
  25.75: {
    Lspline: 0,
    Mspline: 0.1841,
    Sspline: -0.0798,
  },
  26.25: {
    Lspline: 0,
    Mspline: 0.1801,
    Sspline: -0.0769,
  },
  26.5: {
    Lspline: 0,
    Mspline: 0.1781,
    Sspline: -0.0755,
  },
  26.75: {
    Lspline: 0,
    Mspline: 0.1760,
    Sspline: -0.0742,
  },
  27.25: {
    Lspline: 0,
    Mspline: 0.1718,
    Sspline: -0.0717,
  },
  27.5: {
    Lspline: 0,
    Mspline: 0.1697,
    Sspline: -0.0706,
  },
  27.75: {
    Lspline: 0,
    Mspline: 0.1677,
    Sspline: -0.0696,
  },
  28.25: {
    Lspline: 0,
    Mspline: 0.1635,
    Sspline: -0.0677,
  },
  28.5: {
    Lspline: 0,
    Mspline: 0.1615,
    Sspline: -0.0668,
  },
  28.75: {
    Lspline: 0,
    Mspline: 0.1594,
    Sspline: -0.0660,
  },
  29.25: {
    Lspline: 0,
    Mspline: 0.1554,
    Sspline: -0.0645,
  },
  29.5: {
    Lspline: 0,
    Mspline: 0.1534,
    Sspline: -0.0638,
  },
  29.75: {
    Lspline: 0,
    Mspline: 0.1514,
    Sspline: -0.0631,
  },
  30.25: {
    Lspline: 0,
    Mspline: 0.1475,
    Sspline: -0.0619,
  },
  30.5: {
    Lspline: 0,
    Mspline: 0.1455,
    Sspline: -0.0613,
  },
  30.75: {
    Lspline: 0,
    Mspline: 0.1436,
    Sspline: -0.0608,
  },
  31.25: {
    Lspline: 0,
    Mspline: 0.1397,
    Sspline: -0.0598,
  },
  31.5: {
    Lspline: 0,
    Mspline: 0.1378,
    Sspline: -0.0593,
  },
  31.75: {
    Lspline: 0,
    Mspline: 0.1359,
    Sspline: -0.0589,
  },
  32.25: {
    Lspline: 0,
    Mspline: 0.1321,
    Sspline: -0.0581,
  },
  32.5: {
    Lspline: 0,
    Mspline: 0.1302,
    Sspline: -0.0578,
  },
  32.75: {
    Lspline: 0,
    Mspline: 0.1283,
    Sspline: -0.0575,
  },
  33.25: {
    Lspline: 0,
    Mspline: 0.1246,
    Sspline: -0.0570,
  },
  33.5: {
    Lspline: 0,
    Mspline: 0.1227,
    Sspline: -0.0568,
  },
  33.75: {
    Lspline: 0,
    Mspline: 0.1209,
    Sspline: -0.0567,
  },
  34.25: {
    Lspline: 0,
    Mspline: 0.1172,
    Sspline: -0.0566,
  },
  34.5: {
    Lspline: 0,
    Mspline: 0.1153,
    Sspline: -0.0566,
  },
  34.75: {
    Lspline: 0,
    Mspline: 0.1135,
    Sspline: -0.0567,
  },
  35.25: {
    Lspline: 0,
    Mspline: 0.1097,
    Sspline: -0.0569,
  },
  35.5: {
    Lspline: 0,
    Mspline: 0.1078,
    Sspline: -0.0571,
  },
  35.75: {
    Lspline: 0,
    Mspline: 0.1059,
    Sspline: -0.0573,
  },
  36.25: {
    Lspline: 0,
    Mspline: 0.1021,
    Sspline: -0.0577,
  },
  36.5: {
    Lspline: 0,
    Mspline: 0.1001,
    Sspline: -0.0579,
  },
  36.75: {
    Lspline: 0,
    Mspline: 0.0982,
    Sspline: -0.0582,
  },
  37.25: {
    Lspline: 0,
    Mspline: 0.0943,
    Sspline: -0.0586,
  },
  37.5: {
    Lspline: 0,
    Mspline: 0.0923,
    Sspline: -0.0588,
  },
  37.75: {
    Lspline: 0,
    Mspline: 0.0903,
    Sspline: -0.0590,
  },
  38.25: {
    Lspline: 0,
    Mspline: 0.0863,
    Sspline: -0.0593,
  },
  38.5: {
    Lspline: 0,
    Mspline: 0.0843,
    Sspline: -0.0594,
  },
  38.75: {
    Lspline: 0,
    Mspline: 0.0823,
    Sspline: -0.0595,
  },
  39.25: {
    Lspline: 0,
    Mspline: 0.0782,
    Sspline: -0.0596,
  },
  39.5: {
    Lspline: 0,
    Mspline: 0.0762,
    Sspline: -0.0597,
  },
  39.75: {
    Lspline: 0,
    Mspline: 0.0742,
    Sspline: -0.0597,
  },
  40.25: {
    Lspline: 0,
    Mspline: 0.0700,
    Sspline: -0.0596,
  },
  40.5: {
    Lspline: 0,
    Mspline: 0.0680,
    Sspline: -0.0595,
  },
  40.75: {
    Lspline: 0,
    Mspline: 0.0659,
    Sspline: -0.0595,
  },
  41.25: {
    Lspline: 0,
    Mspline: 0.0617,
    Sspline: -0.0592,
  },
  41.5: {
    Lspline: 0,
    Mspline: 0.0596,
    Sspline: -0.0590,
  },
  41.75: {
    Lspline: 0,
    Mspline: 0.0575,
    Sspline: -0.0588,
  },
  42.25: {
    Lspline: 0,
    Mspline: 0.0533,
    Sspline: -0.0582,
  },
  42.5: {
    Lspline: 0,
    Mspline: 0.0511,
    Sspline: -0.0579,
  },
  42.75: {
    Lspline: 0,
    Mspline: 0.0490,
    Sspline: -0.0575,
  },
  43.25: {
    Lspline: 0,
    Mspline: 0.0448,
    Sspline: -0.0566,
  },
  43.5: {
    Lspline: 0,
    Mspline: 0.0427,
    Sspline: -0.0560,
  },
  43.75: {
    Lspline: 0,
    Mspline: 0.0406,
    Sspline: -0.0554,
  },
  44.25: {
    Lspline: 0,
    Mspline: 0.0365,
    Sspline: -0.0541,
  },
  44.5: {
    Lspline: 0,
    Mspline: 0.0344,
    Sspline: -0.0534,
  },
  44.75: {
    Lspline: 0,
    Mspline: 0.0323,
    Sspline: -0.0526,
  },
  45.25: {
    Lspline: 0,
    Mspline: 0.0281,
    Sspline: -0.0508,
  },
  45.5: {
    Lspline: 0,
    Mspline: 0.0261,
    Sspline: -0.0499,
  },
  45.75: {
    Lspline: 0,
    Mspline: 0.0240,
    Sspline: -0.0489,
  },
  46.25: {
    Lspline: 0,
    Mspline: 0.0198,
    Sspline: -0.0467,
  },
  46.5: {
    Lspline: 0,
    Mspline: 0.0177,
    Sspline: -0.0455,
  },
  46.75: {
    Lspline: 0,
    Mspline: 0.0156,
    Sspline: -0.0443,
  },
  47.25: {
    Lspline: 0,
    Mspline: 0.0114,
    Sspline: -0.0417,
  },
  47.5: {
    Lspline: 0,
    Mspline: 0.0093,
    Sspline: -0.0404,
  },
  47.75: {
    Lspline: 0,
    Mspline: 0.0072,
    Sspline: -0.0389,
  },
  48.25: {
    Lspline: 0,
    Mspline: 0.0029,
    Sspline: -0.0359,
  },
  48.5: {
    Lspline: 0,
    Mspline: 0.0007,
    Sspline: -0.0344,
  },
  48.75: {
    Lspline: 0,
    Mspline: -0.0015,
    Sspline: -0.0327,
  },
  49.25: {
    Lspline: 0,
    Mspline: -0.0058,
    Sspline: -0.0294,
  },
  49.5: {
    Lspline: 0,
    Mspline: -0.0080,
    Sspline: -0.0276,
  },
  49.75: {
    Lspline: 0,
    Mspline: -0.0103,
    Sspline: -0.0258,
  },
  50.25: {
    Lspline: 0,
    Mspline: -0.0147,
    Sspline: -0.0222,
  },
  50.5: {
    Lspline: 0,
    Mspline: -0.0170,
    Sspline: -0.0203,
  },
  50.75: {
    Lspline: 0,
    Mspline: -0.0193,
    Sspline: -0.0183,
  },
  51.25: {
    Lspline: 0,
    Mspline: -0.0239,
    Sspline: -0.0144,
  },
  51.5: {
    Lspline: 0,
    Mspline: -0.0262,
    Sspline: -0.0124,
  },
  51.75: {
    Lspline: 0,
    Mspline: -0.0285,
    Sspline: -0.0103,
  },
  52.25: {
    Lspline: 0,
    Mspline: -0.0332,
    Sspline: -0.0061,
  },
  52.5: {
    Lspline: 0,
    Mspline: -0.0356,
    Sspline: -0.0040,
  },
  52.75: {
    Lspline: 0,
    Mspline: -0.0380,
    Sspline: -0.0018,
  },
  53.25: {
    Lspline: 0,
    Mspline: -0.0428,
    Sspline: 0.0025,
  },
  53.5: {
    Lspline: 0,
    Mspline: -0.0453,
    Sspline: 0.0047,
  },
  53.75: {
    Lspline: 0,
    Mspline: -0.0478,
    Sspline: 0.0070,
  },
  54.25: {
    Lspline: 0,
    Mspline: -0.0527,
    Sspline: 0.0115,
  },
  54.5: {
    Lspline: 0,
    Mspline: -0.0552,
    Sspline: 0.0137,
  },
  54.75: {
    Lspline: 0,
    Mspline: -0.0578,
    Sspline: 0.0160,
  },
  55.25: {
    Lspline: 0,
    Mspline: -0.0629,
    Sspline: 0.0206,
  },
  55.5: {
    Lspline: 0,
    Mspline: -0.0654,
    Sspline: 0.0229,
  },
  55.75: {
    Lspline: 0,
    Mspline: -0.0680,
    Sspline: 0.0253,
  },
  56.25: {
    Lspline: 0,
    Mspline: -0.0732,
    Sspline: 0.0300,
  },
  56.5: {
    Lspline: 0,
    Mspline: -0.0759,
    Sspline: 0.0324,
  },
  56.75: {
    Lspline: 0,
    Mspline: -0.0785,
    Sspline: 0.0348,
  },
  57.25: {
    Lspline: 0,
    Mspline: -0.0839,
    Sspline: 0.0396,
  },
  57.5: {
    Lspline: 0,
    Mspline: -0.0866,
    Sspline: 0.0420,
  },
  57.75: {
    Lspline: 0,
    Mspline: -0.0893,
    Sspline: 0.0444,
  },
  58.25: {
    Lspline: 0,
    Mspline: -0.0947,
    Sspline: 0.0494,
  },
  58.5: {
    Lspline: 0,
    Mspline: -0.0975,
    Sspline: 0.0519,
  },
  58.75: {
    Lspline: 0,
    Mspline: -0.1002,
    Sspline: 0.0544,
  },
  59.25: {
    Lspline: 0,
    Mspline: -0.1058,
    Sspline: 0.0594,
  },
  59.5: {
    Lspline: 0,
    Mspline: -0.1086,
    Sspline: 0.0620,
  },
  59.75: {
    Lspline: 0,
    Mspline: -0.1114,
    Sspline: 0.0645,
  },
  60.25: {
    Lspline: 0,
    Mspline: -0.1171,
    Sspline: 0.0696,
  },
  60.5: {
    Lspline: 0,
    Mspline: -0.1199,
    Sspline: 0.0722,
  },
  60.75: {
    Lspline: 0,
    Mspline: -0.1228,
    Sspline: 0.0748,
  },
  61.25: {
    Lspline: 0,
    Mspline: -0.1286,
    Sspline: 0.0800,
  },
  61.5: {
    Lspline: 0,
    Mspline: -0.1315,
    Sspline: 0.0826,
  },
  61.75: {
    Lspline: 0,
    Mspline: -0.1344,
    Sspline: 0.0853,
  },
  62.25: {
    Lspline: 0,
    Mspline: -0.1402,
    Sspline: 0.0905,
  },
  62.5: {
    Lspline: 0,
    Mspline: -0.1431,
    Sspline: 0.0932,
  },
  62.75: {
    Lspline: 0,
    Mspline: -0.1461,
    Sspline: 0.0958,
  },
  63.25: {
    Lspline: 0,
    Mspline: -0.1519,
    Sspline: 0.1011,
  },
  63.5: {
    Lspline: 0,
    Mspline: -0.1549,
    Sspline: 0.1038,
  },
  63.75: {
    Lspline: 0,
    Mspline: -0.1578,
    Sspline: 0.1064,
  },
  64.25: {
    Lspline: 0,
    Mspline: -0.1638,
    Sspline: 0.1117,
  },
  64.5: {
    Lspline: 0,
    Mspline: -0.1667,
    Sspline: 0.1143,
  },
  64.75: {
    Lspline: 0,
    Mspline: -0.1697,
    Sspline: 0.1170,
  },
  65.25: {
    Lspline: 0,
    Mspline: -0.1757,
    Sspline: 0.1222,
  },
  65.5: {
    Lspline: 0,
    Mspline: -0.1786,
    Sspline: 0.1249,
  },
  65.75: {
    Lspline: 0,
    Mspline: -0.1816,
    Sspline: 0.1275,
  },
  66.25: {
    Lspline: 0,
    Mspline: -0.1876,
    Sspline: 0.1327,
  },
  66.5: {
    Lspline: 0,
    Mspline: -0.1906,
    Sspline: 0.1352,
  },
  66.75: {
    Lspline: 0,
    Mspline: -0.1936,
    Sspline: 0.1378,
  },
  67.25: {
    Lspline: 0,
    Mspline: -0.1996,
    Sspline: 0.1429,
  },
  67.5: {
    Lspline: 0,
    Mspline: -0.2026,
    Sspline: 0.1454,
  },
  67.75: {
    Lspline: 0,
    Mspline: -0.2056,
    Sspline: 0.1479,
  },
  68.25: {
    Lspline: 0,
    Mspline: -0.2116,
    Sspline: 0.1529,
  },
  68.5: {
    Lspline: 0,
    Mspline: -0.2147,
    Sspline: 0.1554,
  },
  68.75: {
    Lspline: 0,
    Mspline: -0.2177,
    Sspline: 0.1578,
  },
  69.25: {
    Lspline: 0,
    Mspline: -0.2237,
    Sspline: 0.1627,
  },
  69.5: {
    Lspline: 0,
    Mspline: -0.2267,
    Sspline: 0.1651,
  },
  69.75: {
    Lspline: 0,
    Mspline: -0.2298,
    Sspline: 0.1675,
  },
  70.25: {
    Lspline: 0,
    Mspline: -0.2358,
    Sspline: 0.1722,
  },
  70.5: {
    Lspline: 0,
    Mspline: -0.2388,
    Sspline: 0.1745,
  },
  70.75: {
    Lspline: 0,
    Mspline: -0.2418,
    Sspline: 0.1769,
  },
  71.25: {
    Lspline: 0,
    Mspline: -0.2479,
    Sspline: 0.1815,
  },
  71.5: {
    Lspline: 0,
    Mspline: -0.2509,
    Sspline: 0.1837,
  },
  71.75: {
    Lspline: 0,
    Mspline: -0.2539,
    Sspline: 0.1860,
  },
  72.25: {
    Lspline: 0,
    Mspline: -0.2599,
    Sspline: 0.1905,
  },
  72.5: {
    Lspline: 0,
    Mspline: -0.2630,
    Sspline: 0.1927,
  },
  72.75: {
    Lspline: 0,
    Mspline: -0.2660,
    Sspline: 0.1949,
  },
  73.25: {
    Lspline: 0,
    Mspline: -0.2720,
    Sspline: 0.1993,
  },
  73.5: {
    Lspline: 0,
    Mspline: -0.2750,
    Sspline: 0.2014,
  },
  73.75: {
    Lspline: 0,
    Mspline: -0.2780,
    Sspline: 0.2036,
  },
  74.25: {
    Lspline: 0,
    Mspline: -0.2840,
    Sspline: 0.2078,
  },
  74.5: {
    Lspline: 0,
    Mspline: -0.2869,
    Sspline: 0.2099,
  },
  74.75: {
    Lspline: 0,
    Mspline: -0.2899,
    Sspline: 0.2120,
  },
  75.25: {
    Lspline: 0,
    Mspline: -0.2959,
    Sspline: 0.2162,
  },
  75.5: {
    Lspline: 0,
    Mspline: -0.2989,
    Sspline: 0.2182,
  },
  75.75: {
    Lspline: 0,
    Mspline: -0.3018,
    Sspline: 0.2203,
  },
  76.25: {
    Lspline: 0,
    Mspline: -0.3077,
    Sspline: 0.2243,
  },
  76.5: {
    Lspline: 0,
    Mspline: -0.3107,
    Sspline: 0.2264,
  },
  76.75: {
    Lspline: 0,
    Mspline: -0.3136,
    Sspline: 0.2284,
  },
  77.25: {
    Lspline: 0,
    Mspline: -0.3195,
    Sspline: 0.2324,
  },
  77.5: {
    Lspline: 0,
    Mspline: -0.3224,
    Sspline: 0.2343,
  },
  77.75: {
    Lspline: 0,
    Mspline: -0.3253,
    Sspline: 0.2363,
  },
  78.25: {
    Lspline: 0,
    Mspline: -0.3311,
    Sspline: 0.2403,
  },
  78.5: {
    Lspline: 0,
    Mspline: -0.3340,
    Sspline: 0.2422,
  },
  78.75: {
    Lspline: 0,
    Mspline: -0.3369,
    Sspline: 0.2442,
  },
  79.25: {
    Lspline: 0,
    Mspline: -0.3427,
    Sspline: 0.2480,
  },
  79.5: {
    Lspline: 0,
    Mspline: -0.3455,
    Sspline: 0.2499,
  },
  79.75: {
    Lspline: 0,
    Mspline: -0.3484,
    Sspline: 0.2519,
  },
  80.25: {
    Lspline: 0,
    Mspline: -0.3541,
    Sspline: 0.2557,
  },
  80.5: {
    Lspline: 0,
    Mspline: -0.3569,
    Sspline: 0.2576,
  },
  80.75: {
    Lspline: 0,
    Mspline: -0.3597,
    Sspline: 0.2595,
  },
  81.25: {
    Lspline: 0,
    Mspline: -0.3654,
    Sspline: 0.2633,
  },
  81.5: {
    Lspline: 0,
    Mspline: -0.3682,
    Sspline: 0.2651,
  },
  81.75: {
    Lspline: 0,
    Mspline: -0.3709,
    Sspline: 0.2670,
  },
  82.25: {
    Lspline: 0,
    Mspline: -0.3765,
    Sspline: 0.2707,
  },
  82.5: {
    Lspline: 0,
    Mspline: -0.3793,
    Sspline: 0.2726,
  },
  82.75: {
    Lspline: 0,
    Mspline: -0.3820,
    Sspline: 0.2744,
  },
  83.25: {
    Lspline: 0,
    Mspline: -0.3875,
    Sspline: 0.2781,
  },
  83.5: {
    Lspline: 0,
    Mspline: -0.3903,
    Sspline: 0.2800,
  },
  83.75: {
    Lspline: 0,
    Mspline: -0.3930,
    Sspline: 0.2818,
  },
  84.25: {
    Lspline: 0,
    Mspline: -0.3984,
    Sspline: 0.2854,
  },
  84.5: {
    Lspline: 0,
    Mspline: -0.4011,
    Sspline: 0.2873,
  },
  84.75: {
    Lspline: 0,
    Mspline: -0.4038,
    Sspline: 0.2891,
  },
  85.25: {
    Lspline: 0,
    Mspline: -0.4092,
    Sspline: 0.2927,
  },
  85.5: {
    Lspline: 0,
    Mspline: -0.4119,
    Sspline: 0.2945,
  },
  85.75: {
    Lspline: 0,
    Mspline: -0.4145,
    Sspline: 0.2963,
  },
  86.25: {
    Lspline: 0,
    Mspline: -0.4198,
    Sspline: 0.2998,
  },
  86.5: {
    Lspline: 0,
    Mspline: -0.4225,
    Sspline: 0.3016,
  },
  86.75: {
    Lspline: 0,
    Mspline: -0.4251,
    Sspline: 0.3034,
  },
  87.25: {
    Lspline: 0,
    Mspline: -0.4303,
    Sspline: 0.3069,
  },
  87.5: {
    Lspline: 0,
    Mspline: -0.4329,
    Sspline: 0.3087,
  },
  87.75: {
    Lspline: 0,
    Mspline: -0.4355,
    Sspline: 0.3104,
  },
  88.25: {
    Lspline: 0,
    Mspline: -0.4407,
    Sspline: 0.3139,
  },
  88.5: {
    Lspline: 0,
    Mspline: -0.4433,
    Sspline: 0.3156,
  },
  88.75: {
    Lspline: 0,
    Mspline: -0.4459,
    Sspline: 0.3174,
  },
  89.25: {
    Lspline: 0,
    Mspline: -0.4510,
    Sspline: 0.3208,
  },
  89.5: {
    Lspline: 0,
    Mspline: -0.4536,
    Sspline: 0.3225,
  },
  89.75: {
    Lspline: 0,
    Mspline: -0.4561,
    Sspline: 0.3243,
  },
  90.25: {
    Lspline: 0,
    Mspline: -0.4612,
    Sspline: 0.3277,
  },
  90.5: {
    Lspline: 0,
    Mspline: -0.4637,
    Sspline: 0.3294,
  },
  90.75: {
    Lspline: 0,
    Mspline: -0.4662,
    Sspline: 0.3311,
  },
  91.25: {
    Lspline: 0,
    Mspline: -0.4712,
    Sspline: 0.3344,
  },
  91.5: {
    Lspline: 0,
    Mspline: -0.4737,
    Sspline: 0.3361,
  },
  91.75: {
    Lspline: 0,
    Mspline: -0.4762,
    Sspline: 0.3378,
  },
  92.25: {
    Lspline: 0,
    Mspline: -0.4811,
    Sspline: 0.3411,
  },
  92.5: {
    Lspline: 0,
    Mspline: -0.4836,
    Sspline: 0.3428,
  },
  92.75: {
    Lspline: 0,
    Mspline: -0.4861,
    Sspline: 0.3444,
  },
  93.25: {
    Lspline: 0,
    Mspline: -0.4910,
    Sspline: 0.3477,
  },
  93.5: {
    Lspline: 0,
    Mspline: -0.4934,
    Sspline: 0.3494,
  },
  93.75: {
    Lspline: 0,
    Mspline: -0.4959,
    Sspline: 0.3510,
  },
  94.25: {
    Lspline: 0,
    Mspline: -0.5007,
    Sspline: 0.3543,
  },
  94.5: {
    Lspline: 0,
    Mspline: -0.5031,
    Sspline: 0.3559,
  },
  94.75: {
    Lspline: 0,
    Mspline: -0.5055,
    Sspline: 0.3575,
  },
};

module.exports = exports = {
  coefficients: coefficients,
  lookupTable: lookupTable,
};
