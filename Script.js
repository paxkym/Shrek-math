"use strict";
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
var tabfiles = [];
const pi = 3.14159;
const e = 2.71828;
var global;
var global3;
var globalfunctiontype;
var tabs = [];
var picking = true;
  let global2;
let filehandle;
var c = document.getElementById("inwave");
var ctx = c.getContext("2d");
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = "#FFF";
var c2 = document.getElementById("outwave");
var ctx2 = c2.getContext("2d");
ctx2.fillStyle = "rgba(0, 0, 0, 0)";
ctx2.strokeStyle = "#FFF";
var settings = [false, []];
const line = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269,
    270,
    271,
    272,
    273,
    274,
    275,
    276,
    277,
    278,
    279,
    280,
    281,
    282,
    283,
    284,
    285,
    286,
    287,
    288,
    289,
    290,
    291,
    292,
    293,
    294,
    295,
    296,
    297,
    298,
    299,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    309,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    340,
    341,
    342,
    343,
    344,
    345,
    346,
    347,
    348,
    349,
    350,
    351,
    352,
    353,
    354,
    355,
    356,
    357,
    358,
    359,
    360,
    361,
    362,
    363,
    364,
    365,
    366,
    367,
    368,
    369,
    370,
    371,
    372,
    373,
    374,
    375,
    376,
    377,
    378,
    379,
    380,
    381,
    382,
    383,
    384,
    385,
    386,
    387,
    388,
    389,
    390,
    391,
    392,
    393,
    394,
    395,
    396,
    397,
    398,
    399,
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410,
    411,
    412,
    413,
    414,
    415,
    416,
    417,
    418,
    419,
    420,
    421,
    422,
    423,
    424,
    425,
    426,
    427,
    428,
    429,
    430,
    431,
    432,
    433,
    434,
    435,
    436,
    437,
    438,
    439,
    440,
    441,
    442,
    443,
    444,
    445,
    446,
    447,
    448,
    449,
    450,
    451,
    452,
    453,
    454,
    455,
    456,
    457,
    458,
    459,
    460,
    461,
    462,
    463,
    464,
    465,
    466,
    467,
    468,
    469,
    470,
    471,
    472,
    473,
    474,
    475,
    476,
    477,
    478,
    479,
    480,
    481,
    482,
    483,
    484,
    485,
    486,
    487,
    488,
    489,
    490,
    491,
    492,
    493,
    494,
    495,
    496,
    497,
    498,
    499,
    500,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    509,
    510,
    511,
    512,
    513,
    514,
    515,
    516,
    517,
    518,
    519,
    520,
    521,
    522,
    523,
    524,
    525,
    526,
    527,
    528,
    529,
    530,
    531,
    532,
    533,
    534,
    535,
    536,
    537,
    538,
    539,
    540,
    541,
    542,
    543,
    544,
    545,
    546,
    547,
    548,
    549,
    550,
    551,
    552,
    553,
    554,
    555,
    556,
    557,
    558,
    559,
    560,
    561,
    562,
    563,
    564,
    565,
    566,
    567,
    568,
    569,
    570,
    571,
    572,
    573,
    574,
    575,
    576,
    577,
    578,
    579,
    580,
    581,
    582,
    583,
    584,
    585,
    586,
    587,
    588,
    589,
    590,
    591,
    592,
    593,
    594,
    595,
    596,
    597,
    598,
    599,
    600,
    601,
    602,
    603,
    604,
    605,
    606,
    607,
    608,
    609,
    610,
    611,
    612,
    613,
    614,
    615,
    616,
    617,
    618,
    619,
    620,
    621,
    622,
    623,
    624,
    625,
    626,
    627,
    628,
    629,
    630,
    631,
    632,
    633,
    634,
    635,
    636,
    637,
    638,
    639,
    640,
    641,
    642,
    643,
    644,
    645,
    646,
    647,
    648,
    649,
    650,
    651,
    652,
    653,
    654,
    655,
    656,
    657,
    658,
    659,
    660,
    661,
    662,
    663,
    664,
    665,
    666,
    667,
    668,
    669,
    670,
    671,
    672,
    673,
    674,
    675,
    676,
    677,
    678,
    679,
    680,
    681,
    682,
    683,
    684,
    685,
    686,
    687,
    688,
    689,
    690,
    691,
    692,
    693,
    694,
    695,
    696,
    697,
    698,
    699,
    700,
    701,
    702,
    703,
    704,
    705,
    706,
    707,
    708,
    709,
    710,
    711,
    712,
    713,
    714,
    715,
    716,
    717,
    718,
    719,
    720,
    721,
    722,
    723,
    724,
    725,
    726,
    727,
    728,
    729,
    730,
    731,
    732,
    733,
    734,
    735,
    736,
    737,
    738,
    739,
    740,
    741,
    742,
    743,
    744,
    745,
    746,
    747,
    748,
    749,
    750,
    751,
    752,
    753,
    754,
    755,
    756,
    757,
    758,
    759,
    760,
    761,
    762,
    763,
    764,
    765,
    766,
    767,
    768,
    769,
    770,
    771,
    772,
    773,
    774,
    775,
    776,
    777,
    778,
    779,
    780,
    781,
    782,
    783,
    784,
    785,
    786,
    787,
    788,
    789,
    790,
    791,
    792,
    793,
    794,
    795,
    796,
    797,
    798,
    799,
    800,
    801,
    802,
    803,
    804,
    805,
    806,
    807,
    808,
    809,
    810,
    811,
    812,
    813,
    814,
    815,
    816,
    817,
    818,
    819,
    820,
    821,
    822,
    823,
    824,
    825,
    826,
    827,
    828,
    829,
    830,
    831,
    832,
    833,
    834,
    835,
    836,
    837,
    838,
    839,
    840,
    841,
    842,
    843,
    844,
    845,
    846,
    847,
    848,
    849,
    850,
    851,
    852,
    853,
    854,
    855,
    856,
    857,
    858,
    859,
    860,
    861,
    862,
    863,
    864,
    865,
    866,
    867,
    868,
    869,
    870,
    871,
    872,
    873,
    874,
    875,
    876,
    877,
    878,
    879,
    880,
    881,
    882,
    883,
    884,
    885,
    886,
    887,
    888,
    889,
    890,
    891,
    892,
    893,
    894,
    895,
    896,
    897,
    898,
    899,
    900,
    901,
    902,
    903,
    904,
    905,
    906,
    907,
    908,
    909,
    910,
    911,
    912,
    913,
    914,
    915,
    916,
    917,
    918,
    919,
    920,
    921,
    922,
    923,
    924,
    925,
    926,
    927,
    928,
    929,
    930,
    931,
    932,
    933,
    934,
    935,
    936,
    937,
    938,
    939,
    940,
    941,
    942,
    943,
    944,
    945,
    946,
    947,
    948,
    949,
    950,
    951,
    952,
    953,
    954,
    955,
    956,
    957,
    958,
    959,
    960,
    961,
    962,
    963,
    964,
    965,
    966,
    967,
    968,
    969,
    970,
    971,
    972,
    973,
    974,
    975,
    976,
    977,
    978,
    979,
    980,
    981,
    982,
    983,
    984,
    985,
    986,
    987,
    988,
    989,
    990,
    991,
    992,
    993,
    994,
    995,
    996,
    997,
    998,
    999
]
var itr = 0;
var sinetable = [];
if(false){
while(itr<2*Math.PI){
sinetable.push(Math.sin(itr.toFixed(6)))
  itr += 0.000001;
}
}
var outwave = new Chart("outwave", {
  type: "line",
  data: {
    labels: line,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "#006464",
      data: line,
      label: 'Output wave'
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      fontSize: 16
    }
  }
});
var inwave = new Chart("inwave", {
  type: "line",
  data: {
    labels: line,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "#00803E",
      data: line,
      label: 'Input wave'
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      fontSize: 16
    }
  }
});
function addData(chart, data) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}
function removeData(chart) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}
function quicksine(number){
return(sinetable[~~(~~(((number % 6.283184)*1000000) / 1000000)*1000000)])
}
function integral(wave){
  var i = 0;
  var output = 0;
  while(i<wave.length){
    if(i != wave.length-1){
        output += (((wave[i+1]-wave[i]))+((wave[i+1]-wave[i])/2))/2;
    }
   output += (wave[i]);
       i++;
  }
  return(output);
}
function compare(wave, compare){
  var i = 0;
  // generates a wave array for the transformed signal
    var sum = 0;
  var res = []
while(i<2*(wave.length)){
sum += Math.floor(Math.sin(i*compare)*(wave[Math.floor((Math.floor((i % wave.length)*10)) % wave.length)])*10000)

  i += 0.1;
}
  sum /= 100;
  sum *= -0.1;
  return(Math.floor(sum));
}
function fourier(real){
  function inverseTransform(real, imag) {
      transform(imag, real);
  }
  function transform(real, imag) {
      if (real.length != imag.length)
          throw "Mismatched lengths";
      
      var n = real.length;
      if (n == 0)
          return;
      else if ((n & (n - 1)) == 0)  // Is power of 2
          transformRadix2(real, imag);
      else  // More complicated algorithm for arbitrary sizes
          transformBluestein(real, imag);
  }
  function transformRadix2(real, imag) {
      
      // Initialization
      var output = [];
      if (real.length != imag.length)
          throw "Mismatched lengths";
      var n = real.length;
      if (n == 1)  // Trivial transform
          return;
      var levels = -1;
      for (var i = 0; i < 32; i++) {
          if (1 << i == n)
              levels = i;  // Equal to log2(n)
      }
      if (levels == -1)
          throw "Length is not a power of 2";
      var cosTable = new Array(n / 2);
      var sinTable = new Array(n / 2);
      for (var i = 0; i < n / 2; i++) {
          cosTable[i] = Math.cos(2 * Math.PI * i / n);
          sinTable[i] = Math.sin(2 * Math.PI * i / n);
      }
      
      // Bit-reversed addressing permutation
      for (var i = 0; i < n; i++) {
          var j = reverseBits(i, levels);
          if (j > i) {
              var temp = real[i];
              real[i] = real[j];
              real[j] = temp;
              temp = imag[i];
              imag[i] = imag[j];
              imag[j] = temp;
          }
      }
      
      // Cooley-Tukey decimation-in-time radix-2 FFT
      for (var size = 2; size <= n; size *= 2) {
          var halfsize = size / 2;
          var tablestep = n / size;
          for (var i = 0; i < n; i += size) {
              for (var j = i, k = 0; j < i + halfsize; j++, k += tablestep) {
                  var tpre =  real[j+halfsize] * cosTable[k] + imag[j+halfsize] * sinTable[k];
                  var tpim = -real[j+halfsize] * sinTable[k] + imag[j+halfsize] * cosTable[k];
                  real[j + halfsize] = real[j] - tpre;
                  imag[j + halfsize] = imag[j] - tpim;
                  real[j] += tpre;
                  imag[j] += tpim;
                  output.push([real[j], imag[j]])
              }
          }
      }
      
      // Returns the integer whose value is the reverse of the lowest 'bits' bits of the integer 'x'.
      function reverseBits(x, bits) {
          var y = 0;
          for (var i = 0; i < bits; i++) {
              y = (y << 1) | (x & 1);
              x >>>= 1;
          }
          return y;
      }
      //return output;
  }
  function transformBluestein(real, imag) {
      var output = [];
      // Find a power-of-2 convolution length m such that m >= n * 2 + 1
      if (real.length != imag.length)
          throw "Mismatched lengths";
      var n = real.length;
      var m = 1;
      while (m < n * 2 + 1)
          m *= 2;
      
      // Trignometric tables
      var cosTable = new Array(n);
      var sinTable = new Array(n);
      for (var i = 0; i < n; i++) {
          var j = i * i % (n * 2);  // This is more accurate than j = i * i
          cosTable[i] = Math.cos(Math.PI * j / n);
          sinTable[i] = Math.sin(Math.PI * j / n);
      }
      
      // Temporary vectors and preprocessing
      var areal = new Array(m);
      var aimag = new Array(m);
      for (var i = 0; i < n; i++) {
          areal[i] =  real[i] * cosTable[i] + imag[i] * sinTable[i];
          aimag[i] = -real[i] * sinTable[i] + imag[i] * cosTable[i];
      }
      for (var i = n; i < m; i++)
          areal[i] = aimag[i] = 0;
      var breal = new Array(m);
      var bimag = new Array(m);
      breal[0] = cosTable[0];
      bimag[0] = sinTable[0];
      for (var i = 1; i < n; i++) {
          breal[i] = breal[m - i] = cosTable[i];
          bimag[i] = bimag[m - i] = sinTable[i];
      }
      for (var i = n; i <= m - n; i++)
          breal[i] = bimag[i] = 0;
      
      // Convolution
      var creal = new Array(m);
      var cimag = new Array(m);
      convolveComplex(areal, aimag, breal, bimag, creal, cimag);
      
      // Postprocessing
      for (var i = 0; i < n; i++) {
          real[i] =  creal[i] * cosTable[i] + cimag[i] * sinTable[i];
          imag[i] = -creal[i] * sinTable[i] + cimag[i] * cosTable[i];
          output.push([real[i], imag[i]]);
      }
      //return output;
  }
  function convolveComplex(xreal, ximag, yreal, yimag, outreal, outimag) {
      if (xreal.length != ximag.length || xreal.length != yreal.length || yreal.length != yimag.length || xreal.length != outreal.length || outreal.length != outimag.length)
          throw "Mismatched lengths";
      
      var n = xreal.length;
      xreal = xreal.slice(0);
      ximag = ximag.slice(0);
      yreal = yreal.slice(0);
      yimag = yimag.slice(0);
      
      transform(xreal, ximag);
      transform(yreal, yimag);
      for (var i = 0; i < n; i++) {
          var temp = xreal[i] * yreal[i] - ximag[i] * yimag[i];
          ximag[i] = ximag[i] * yreal[i] + xreal[i] * yimag[i];
          xreal[i] = temp;
      }
      inverseTransform(xreal, ximag);
      for (var i = 0; i < n; i++) {  // Scaling (because this FFT implementation omits it)
          outreal[i] = xreal[i] / n;
          outimag[i] = ximag[i] / n;
      }
  }
      var imag = [];
      var output = [];
      var len = real.length;
      for (var i = 0; i < real.length; i++){
          imag.push(0.0);
      }
      transform(real,imag);
      var fsample = len/20;
      var counter = 0;
      for (var jo = len/2; jo < real.length; jo++){
          output.push(Math.sqrt(imag[jo] *imag[jo] + real[0] * real[0])/ len *2);
      }
      return output.reverse();
  }
function file2wave(fil){
      var wave = [];
  const reader = new FileReader()
  reader.onload = function () {
          result = reader.result;
const out = new Int8Array(result.slice(404))
    global2 = ((Array.from(out)))
    }
      reader.readAsArrayBuffer(fil.files[0])
      return(global2)
}
function defaul(tab, type, value){
if(type == 0){
  console.log(tabs[tab][5][0])
  if(tabs[tab][5][1] == value){
    return 'selected';
  }else{
    return '';
  }
}
  if(type == 1){
    return(tabs[tab][5][0])
  }
  if(type == 2){
    return(tabs[tab][5][value])
  }
}
function hartley(wave){
  var i = 0;
  var i2 = 0;
  var wav = [];
  var output = [];
  const mult = (1/Math.sqrt(2*Math.PI));
  if(settings[0]){
  const offset = Math.PI/2;
  while(i2<wave.length){
while(i<wave.length){
  wav.push((wave[i]*(quicksine(i*i2) + quicksine((i*i2)+offset))))
  i++;
}
    i = 0;
    output.push((integral(wav)/2) * mult);
    wav = [];
    i2++;
  }
}else{
  while(i2<wave.length){
while(i<wave.length){
  wav.push((wave[i]*(Math.sin(i*i2) + Math.cos(i*i2))))
  i++;
}
    i = 0;
    output.push((integral(wav)/2) * mult);
    wav = [];
    i2++;
  }
}
  return(output);
}
function gamma(z){
  var i = 0;
  var wave = [];
  while(i<z.length){
wave.push((Math.sqrt(2*pi))*(e**(-1*(z[i])))*(z[i]**(z[i]+0.5)))
    i++
  }
  return wave;
}
function constfunc(tab){
const file = tabs[tab][5][0];
var constant = 0;
if(file == 'PI'){
  constant =(Math.PI)
}else if(file == 'E'){
  constant =(Math.E)
}else if(file == 'PHI'){
  constant =(1.61803398875)
}else if(file == 'SQ2'){
  constant =(1.41421356237)
}else if(file == 'LN2'){
  constant =(0.69314718056)
}else{
  constant = (parseInt(file))
}
var i = 0;
var output = [];
while(i<10000){
output.push(constant);
i++;
}
return output;
}
function arith(tab){
  const type = tabs[tab][5][1];
  var i = 0;
  var input1;
  var input2;
  var output = [];
    input1 = tabfiles[tabs[tab][5][2]];
    input2 = tabfiles[tabs[tab][5][3]];
  var max = input1.length;
  if(input1 < input2){
    max = input2.length;
  }
if(type == 0){
  i = 0;
  while(i<max){
output.push(input1[i] + input2[i])
i++;
  }
}
if(type == 1){
  i = 0;
  while(i<max){
output.push(input1[i] - input2[i])
i++;
  }
}
if(type == 2){
  i = 0;
  while(i<max){
output.push(input1[i] * input2[i])
i++;
  }
}
if(type == 3){
    i = 0;
    while(i<max){
  output.push(input1[i] / input2[i])
  i++;
    }
}
if(type == 4){
  
  i = 0;
  while(i<max){
output.push(input1[i] ** input2[i])
i++;
  }
}
if(type == 5){
  i = 0;
  while(i<max){
output.push(input2[i] ** 1/input1[i])
i++;
  }
}
if(type == 6){
  i = 0;
  while(i<max){
output.push(Math.log(input2[i])/Math.log(input1[i]))
i++;
  }
}
return output;
}
function zeta(wave){
  var i = 0;
  var i2 = 0;
  var output = [];
  var out = 0;
  while(i2<wave.length){
    while(i<1000){
      out += 1/((i+1)**wave[i2])
      
      i++;
    }
    i2++;
    output.push(out);
    out = 0;
    i=0;
  }
  return(output);
}
function mellin(wave){
    var i = 0;
  var i2 = 0;
  var wav = [];
  var output = [];
  while(i2<wave.length){
while(i<wave.length){
  wav.push((i**(i2-1))*wave[i])
  i++;
}
    i = 0;
   const integ = integral(wav);
    if(!!integ){
    output.push(integ);
    }
    wav = [];
    i2++;
  }
  return output;
}
function boolean(tab){
  const type = tabs[tab][5][1];
  var i = 0;
  var input1;
  var input2;
  var output = [];
    input1 = tabfiles[tabs[tab][5][2]];
    input2 = tabfiles[tabs[tab][5][3]];
  var max = input1.length;
  if(input1 < input2){
    max = input2.length;
  }
if(type == 0){
  i = 0;
  while(i<max){
output.push(input1[i] == input2[i])
i++;
  }
}
if(type == 1){
  i = 0;
  while(i<max){
output.push(input1[i] < input2[i])
i++;
  }
}
if(type == 2){
  i = 0;
  while(i<max){
output.push(input1[i] || input2[i])
i++;
  }
}
if(type == 3){
  i = 0;
  while(i<max){
output.push(input1[i] && input2[i])
i++;
  }
}
if(type == 4){
  i = 0;
  while(i<max){
output.push(!input1[i])
i++;
  }
}
if(type == 5){
  i = 0;
  while(i<max){
output.push(!(input1[i] || input1[i]))
i++;
  }
}
if(type == 6){
  i = 0;
  while(i<max){
output.push(!(input2[i] && input1[i]))
i++;
  }
}
if(type == 7){
  i = 0;
  while(i<max){
output.push((input2[i] && !input1[i]) || (!input2[i] && input1[i]))
i++;
  }
}
if(type == 8){
  i = 0;
  while(i<max){
    output.push((!input2[i] && !input1[i]) || (input2[i] && input1[i]))
i++;
  }
}
return output;
}
function calc(tab, file){
  const Func = tabs[tab][5][1];
  if(Func == 0){
   var i = 0;
   var output = [];
   while(i<file.length-1){
   output.push((file[i+1]-file[i]))
   i++;
   }
   output.push(file[file.length-1])
    }
    if(Func == 1){
      var i = 0;
      var output = [];
      const out = integral(file);
      while(i<10000){
      output.push(out)
      i++;
      }
      }
      if(Func == 2){
       var i = 0;
       var output = [];
       var current = 0;
       while(i<file.length){
        current += file[i];
       output.push(current)
       i++;
       } 
        }
          console.log(output, file, 'slime')
    return(output)
 }
function trig(tab, file){
 const trigFunc = tabs[tab][5][1];
 if(trigFunc == 0){
  var i = 0;
  var output = [];
  while(i<file.length){
  output.push(Math.sin(file[i]))
  i++;
  }
   }
   if(trigFunc == 1){
    var i = 0;
    var output = [];
    while(i<file.length){
    output.push(Math.cos(file[i]))
    i++;
    }
     }
     if(trigFunc == 2){
      var i = 0;
      var output = [];
      while(i<file.length){
        const ans = Math.tan(file[i]);
        if(!!ans){
      output.push(ans)
        }else{
          output.push(0)
        }
      i++;
      } 
       }
       if(trigFunc == 3){
        var i = 0;
        var output = [];
        while(i<file.length){
          const ans = (Math.sin(file[i])/file[i]);
          if(!!ans){
        output.push(ans)
          }else{
            output.push(0)
          }
        i++;
        } 
         }
         if(trigFunc == 4){
          var i = 0;
          var output = [];
          while(i<file.length){
          output.push(Math.sinh(file[i]))
          i++;
          }
           }
           if(trigFunc == 5){
            var i = 0;
            var output = [];
            while(i<file.length){
            output.push(Math.cosh(file[i]))
            i++;
            }
             }
             if(trigFunc == 6){
              var i = 0;
              var output = [];
              while(i<file.length){
              output.push(Math.tanh(file[i]))
              i++;
              }
               }
               if(trigFunc == 7){
                var i = 0;
                var output = [];
                while(i<file.length){
                output.push(1/Math.cos(file[i]))
                i++;
                }
                 }
                 if(trigFunc == 8){
                  var i = 0;
                  var output = [];
                  while(i<file.length){
                  output.push(1/Math.sin(file[i]))
                  i++;
                  }
                   }
                   if(trigFunc == 9){
                    var i = 0;
                    var output = [];
                    while(i<file.length){
                    output.push(1/Math.tan(file[i]))
                    i++;
                    }
                     }
         console.log(output, file, 'slime')
   return(output)
}
function transf(tab, file){
  const file2 = file;
const type = tabs[tab][5][1];
var output = [];
if(type == 0){
  var i = 0;
var line2 = [];
while(i<file2.length){
  line2.push(file2[i])
 i++
}
output = fourier(line2)
}
if(type == 1){
  output = mellin(file);
  }
  if(type == 2){
    output = hartley(file);
    }
    console.log(output, file, 'jss', type)
    return output;
}
function statistic(tab, file){
  const Func = tabs[tab][5][1];
  var output = [];
  var out = 0;
  if(Func == 0){
   var i = 0;
   while(i<file.length){
   out += (file[i])
   i++;
   }
   out /= file.length;
    }
    if(Func == 1){
      function mode(array)
      {
          if(array.length == 0)
              return null;
          var modeMap = {};
          var maxEl = array[0], maxCount = 1;
          for(var i = 0; i < array.length; i++)
          {
              var el = array[i];
              if(modeMap[el] == null)
                  modeMap[el] = 1;
              else
                  modeMap[el]++;  
              if(modeMap[el] > maxCount)
              {
                  maxEl = el;
                  maxCount = modeMap[el];
              }
          }
          return maxEl;
      }
      out = mode(file);
      }
      if(Func == 2){
        var i = 0;
        out = file[Math.ceil(file.length/2)]
         }
         if(Func == 3){
          var i = 0;
          var mean = 0;
          while(i<file.length){
            mean += file[i];
            i++;
          }
          mean /= file.length;
           i = 0;
          while(i<file.length){
            output.push((file[i] - mean)**2);
            i++
          }
          i = 0;
          mean = 0;
          while(i<output.length){
            mean += output[i];
            i++;
          }
          mean /= output.length;
          out = Math.sqrt(mean);
          output = [];
           }
          var i = 0;
          while(i<10000){
output.push(out);
i++;
          };
          console.log(output, file, 'slime')
    return(output)
 }
 function theme(){
  const palette = settings[1];
document.body.style.backgroundColor = palette[0];
 }
 theme();
async function getFile(){
 [filehandle] = await window.showOpenFilePicker()
  let filedata = await filehandle.getFile(); 
await filedata.text().then(result => {
        return(result);
  })
}
document.getElementById('settings').addEventListener('click', function(){
  filer.innerHTML = '<table><tr><td><h4 style="color:aqua">Quick mode</h4><label class="switch" title="Quick mode will increase the speed of certain functions, but decrease their resolution. This is achieved through a precalculated function table. This process increases boot up time." id="quick"><input type="checkbox"><span class="slider round"></span></label></td><td><select id="theme"><option selected disabled hidden>Theme</option><option value="0">Light</option><option value="1">Dark</option><option value="2">Opalescent</option><option value="3">Prismatic</option><option value="4">Midnight</option><option value="5">Sunset</option></select></td></tr></table>';
  document.getElementById('quick').addEventListener('change', function(){
    settings[0] = !settings[0];
  })
  document.getElementById('theme').addEventListener('change', function(){
  const theme = document.getElementById('theme').value;
  if(theme == 0){
    settings[1] = ['#D0CCD0', '#FBFCFF', '#329F5B', '#5C95FF', '#6F2DBD']
  }
  if(theme == 1){
    settings[1] = ['#D0CCD0', '#FBFCFF', '#329F5B', '#5C95FF', '#6F2DBD']
  }
  if(theme == 2){
    settings[1] = ['#FFD4E9', '#FCC5C9', '#BFC3EE', '#25EADA', '#70FAA5']
  }
  if(theme == 3){
    settings[1] = ['#3B5A9D', '#C87DE3', '#739250', '#AE9E67', '#7465E2']
  }
  if(theme == 4){
    settings[1] = ['#330036', '#38182F', '#2F394D', '#56666B', '#82A3A1']
  }
  theme();
  })
})
const input = document.getElementById('fileInput');
input.addEventListener('change', function (e) {
  ctx.clearRect(0, 0, c.width, c.height);
global2 = (file2wave(input));
}, false)
document.getElementById('input').addEventListener('click', async function(){
  globalfunctiontype = 0;
  document.getElementById('input').innerHTML = "Cancel"
  if(picking == false){
    document.getElementById('input').innerHTML = "Set input"
    picking = true;
    document.getElementById('tab').style.backgroundColor = '#B6B6B6';
  }else{
    picking = false;
    document.getElementById('tab').style.backgroundColor = '#183985';
  }
// get tab which input is coming from

})
async function write(){
  const writable = await filehandle.createWritable();
  await writable.write(contents);
  await writable.close();
}
async function createTab(type){
  close();
  if(type == true){
        const link = document.getElementById('filepicker');
  link.style.visibility = 'visible';
        document.getElementById('name').textContent = 'myTab ' + (tabs.length + 1);
            document.getElementById('name2').textContent = 'myTab ' + (tabs.length + 1);
  }
  if(type == false){
            const link = document.getElementById('functionpicker');
  link.style.visibility = 'visible';
        document.getElementById('name2').textContent = 'myTab ' + (tabs.length+1);
  }
}
function create(){
           const name = document.getElementById('name').value;
           var i = 0;
           var tabnames = []
           while(i<tabs.length){
            tabnames.push(tabs[i][2])
            i++
           }
            if(tabnames.includes(name)){
              alert('Tabs cannot have identical names!')
              return
            }
    console.log(global2)
   tabs.push([true,true,name,0,'',global2]);
  
let list = document.getElementById("files").innerHTML;
  list+="<li><button onclick = 'tab("+ (tabs.length - 1) +")' id ='tab'>"+name+"</button></li>";
    document.getElementById("files").innerHTML = list;
  console.log(tabs[0][2])
  const link = document.getElementById('filepicker');
  link.style.visibility = 'hidden';
  tab(tabs.length)
}
function create2(){
           const name = document.getElementById('name2').value;
           var i = 0;
           var tabnames = []
           while(i<tabs.length){
            tabnames.push(tabs[i][2])
            i++
           }
            if(tabnames.includes(name)){
              alert('Tabs cannot have identical names!')
              return
            }
    console.log(name)
   tabs.push([true,false,name,document.getElementById('functionType').value,'0',[1,0,0,0,0,0]]);
   if(document.getElementById('functionType').value == 7){
    tabs[tabs.length-1][5][2] = '';
    tabs[tabs.length-1][5][3] = '';
   }
let list = document.getElementById("functions").innerHTML;
  list+="<li><button onclick = 'tab("+ (tabs.length - 1) +")' id ='tab'>"+name+"</button></li>";
    document.getElementById("functions").innerHTML = list;
  const link = document.getElementById('functionpicker');
  link.style.visibility = 'hidden';
}
function customFunc(tab, file){
  if(!file){
    alert('Please add a function input!')
  }else{
  return(eval('function h(){var io = {input:[' + file + '], output:0}; ' + String(tabs[tab][5][1]) + '; return(io.output);}; h();'))
  }
}
function customWave(tab){
const freq = tabs[tab][5][0];
const type = tabs[tab][5][1];
const peak = tabs[tab][5][2];
const length = tabs[tab][5][3];
var output =[];
if(type == 0){
  var i = 0;
  var i2 = 0;
  var up = true;
  while(i<length){
if(i2>freq/2){
  up = false;
}else if(i2<0){
  up = true;
}
if(up){
  i2 += 1/freq;
  output.push(0);
}else if(!up){
  i2 -= 1/freq;
  output.push(peak);
  }
  i++
}
}
if(type == 1){
  var i = 0;
  var i2 = 0;
  var up = true;
  while(i<length){
if(i2>freq/2){
  up = false;
}else if(i2<0){
  up = true;
}
if(up){
  i2 += 1/freq;
}else if(!up){
  i2 -= 1/freq;
  }
  output.push((i2/freq)*peak);
  i++
}
}
if(type == 2){
  var i = 0;
  var i2 = 0;
  while(i<length){
if(i2>freq){
  i2 = 0;
}
output.push((i2/freq)*peak)
i ++;
i2 += 1/freq;
  }
}
if(type == 3){
  var i = 0;
  var i2 = 0;
  while(i<length){
if(i2>freq){
  i2 = 0;
}
output.push(peak - ((i2/freq)*peak))
i ++;
i2 += 1/freq;
  }
}
if(type == 4){
  var i = 0;
  var i2 = 0;
  while(i<length){
    output.push(Math.sin(Math.PI * i2)*peak);
    i++;
    i2 += 1/freq;
  }  
}
if(type == 5){
  var i = 0;
  var i2 = 0;
  while(i<length){
    output.push(i2)
    i++;
    i2 += 1/freq;
  }

}
if(type == 6){
  var i = 0;
  var i2 = 0;
  var randint = Math.random() * peak;
  while(i<length){
    if(i2 == freq){
      randint = Math.random() * peak;
    i2 = 0;
    }
    output.push(randint)
    i++;
    i2++;
  }
}
if(type == 7){
  var i = 0;
  var out = 0;
  while(i<length){
out = Math.floor(Math.E**(i/freq));
if(out != 'Infinity'){
    output.push(out);
}else{
  break;
}
    i++;
  }
}
console.log('   gdsdsdds', output)
return output;
}
function close(){ 
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
document.getElementById('filer').innerHTML = '';
}
function tab(numb){
  // decides if picking or using tab

  if(picking){
    if(tabs[numb][1] || tabs[numb][3] == 3 || tabs[numb][3] == 10 || tabs[numb][3] == 9 || tabs[numb][3] == 7){
      document.getElementById('input').style.display = 'none';
    }else{
      document.getElementById('input').style.display = 'block';
    }
  var i = 0;
  while(i<tabs.length){
    tabs[i][0] = false;
    i++;
  }
  tabs[numb][0] = true;
  global = numb;
  let tabdata = tabs[numb];
  if(tabdata[1]){
   let filedata = tabdata[5];
    console.log("tabdata", tabdata);
    const filer = document.getElementById("filer");
filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace">');
   console.log('hello');
   if(true){
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      var output = [];
      while(i<1000){
        output.push(tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
outwave.data.datasets[0].data = output;
      outwave.update();
    } 
    document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      var output = [];
      while(i<1000){
        output.push(tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
      outwave.data.datasets[0].data = output;
      outwave.update();
    })
    
}
  if(!tabdata[1]){
    console.log("hello1")
    if(true){
      if(!tabfiles[global]){
tabfiles[global] = ['']
      }
      let filedata = tabfiles[global];
    console.log("tabdata", tabdata);
    const filer = document.getElementById("filer");
    //
if(tabs[numb][3] == 3){
        console.log('tabfiles:', defaul(numb, 1, 0))
        filer.innerHTML = String('<label for="wavePlace">Wave place</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><label for="waveType">Options</label><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Square wave</option><option value="1" ' + defaul(numb, 0, 1) + '>Triangle wave</option><option value="2" ' + defaul(numb, 0, 2) + '>Rising edge sawtooth wave</option><option value="3" ' + defaul(numb, 0, 3) + '>Falling edge sawtooth wave</option><option value="4" ' + defaul(numb, 0, 4) + '>Sine wave</option><option value="5" ' + defaul(numb, 0, 5) + '>Straight line</option><option value="6" ' + defaul(numb, 0, 6) + '>Noise</option><option value="7" ' + defaul(numb, 0, 7) + '>Exponential function</option></select><label for="waveFreq">Frequency 1-0.01</label><input type="range" min="1" max="100" value="' + defaul(numb, 1, 0) + '" id="waveFreq"><label for="waveLength">Length 1-10000</label><input type="range" min="1" max="10000" value="' + defaul(numb, 2, 3) + '" id="waveLength"><label for=wavePeak">Maximum wave value 1-100</label><input type="range" min="1" max="100" value="' + defaul(numb, 2, 2) + '" id="wavePeak">');
        console.log('type', tabs[numb][3])
        document.getElementById('waveFreq').addEventListener('change', function(){
          var i = 0;
          while(i<tabs.length){
            if(tabs[i][0]){
              
                tabs[i][5][0] = document.getElementById('waveFreq').value;
              break;
            }
            i++
          }
        })
        document.getElementById('wavePeak').addEventListener('change', function(){
                tabs[numb][5][2] = document.getElementById('wavePeak').value;
        })
        document.getElementById('waveLength').addEventListener('change', function(){
          tabs[numb][5][3] = document.getElementById('waveLength').value;
  })
        document.getElementById('waveType').addEventListener('change', function(){
          var output = [];
          var i = 0;
          var i = 0;
          while(i<tabs.length){
            if(tabs[i][0]){
              
                tabs[i][5][1] = document.getElementById('waveType').value;
              break;
            }
            i++
          }
          })
}else if(tabs[numb][3] == 4){
      console.log('tabfiles:', defaul(numb, 1, 0))
      filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Sine</option><option value="1" ' + defaul(numb, 0, 1) + '>Cosine</option><option value="2" ' + defaul(numb, 0, 2) + '>Tangeant</option><option value="3" ' + defaul(numb, 0, 3) + '>Sinc</option><option value="4" ' + defaul(numb, 0, 4) + '>Hyperbolic sine</option><option value="5" ' + defaul(numb, 0, 5) + '>Hyperbolic cosine</option><option value="6" ' + defaul(numb, 0, 6) + '>Hyperbolic tangent</option><option value="7" ' + defaul(numb, 0, 7) + '>Secant</option><option value="8" ' + defaul(numb, 0, 8) + '>Cosecant</option><option value="9" ' + defaul(numb, 0, 9) + '>Cotangeant</option></select>');
      console.log('type', tabs[numb][3])
      document.getElementById('waveType').addEventListener('change', function(){
        var output = [];
        var i = 0;
        var i = 0;
        while(i<tabs.length){
          if(tabs[i][0]){
            
              tabs[i][5][1] = document.getElementById('waveType').value;
            break;
          }
          i++
        }
        })
}else if(tabs[numb][3] == 10){
    filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><textarea placeholder="Type a number. For specialized constants like π or e, type in the values: PI, E, PHI, SQ2, LN2" id="setConst">' + defaul(numb, 1, 0) + '</textarea>');
    document.getElementById('setConst').addEventListener('change', function(){
            tabs[numb][5][0] = document.getElementById('setConst').value;
      })
}else if(tabs[numb][3] == 7){
    filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><button id="in1">Input</button><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>+</option><option value="1" ' + defaul(numb, 0, 1) + '>-</option><option value="2" ' + defaul(numb, 0, 2) + '>&times</option><option value="3" ' + defaul(numb, 0, 3) + '>&divide</option><option value="4" ' + defaul(numb, 0, 4) + '>^</option><option value="5" ' + defaul(numb, 0, 5) + '>&#8730</option><option value="6" ' + defaul(numb, 0, 6) + '>log</option></select><button id="in2">Input</button>');
    document.getElementById('waveType').addEventListener('change', function(){
            tabs[numb][5][1] = document.getElementById('waveType').value;
      })
      document.getElementById('in1').addEventListener('click', function(){
        globalfunctiontype = 1;
        document.getElementById('in1').innerHTML = "Cancel"
        if(picking == false){
          document.getElementById('in1').innerHTML = "Input"
          picking = true;
          document.getElementById('tab').style.backgroundColor = '#B6B6B6';
        }else{
          picking = false;
          document.getElementById('tab').style.backgroundColor = '#183985';
        }
  })
  document.getElementById('in2').addEventListener('click', function(){
    globalfunctiontype = 2;
    document.getElementById('in2').innerHTML = "Cancel"
    if(picking == false){
      document.getElementById('in2').innerHTML = "Input"
      picking = true;
      document.getElementById('tab').style.backgroundColor = '#B6B6B6';
    }else{
      picking = false;
      document.getElementById('tab').style.backgroundColor = '#183985';
    }
})
}else if(tabs[numb][3] == 6){
    filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Derivative</option><option value="1" ' + defaul(numb, 0, 1) + '>Integral</option><option value="2" ' + defaul(numb, 0, 2) + '>Antiderivative</option></select>');
    console.log('type', tabs[numb][3])
    document.getElementById('waveType').addEventListener('change', function(){
      var output = [];
      var i = 0;
      var i = 0;
      while(i<tabs.length){
        if(tabs[i][0]){
          
            tabs[i][5][1] = document.getElementById('waveType').value;
          break;
        }
        i++
      }
      })
}else if(tabs[numb][3] == 9){
  filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><button id="in1">Input</button><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>=</option><option value="1" ' + defaul(numb, 0, 1) + '><</option><option value="2" ' + defaul(numb, 0, 2) + '>OR</option><option value="3" ' + defaul(numb, 0, 3) + '>AND</option><option value="4" ' + defaul(numb, 0, 4) + '>NOT</option><option value="5" ' + defaul(numb, 0, 5) + '>NOR</option><option value="6" ' + defaul(numb, 0, 6) + '>NAND</option><option value="7" ' + defaul(numb, 0, 7) + '>XOR</option><option value="8" ' + defaul(numb, 0, 8) + '>XNOR</option></select><button id="in2">Input</button>');
  if(4 == tabs[numb][5][1]){
    document.getElementById('in2').disabled = true;
  }else{
    document.getElementById('in2').disabled = false;
  }
  document.getElementById('waveType').addEventListener('change', function(){
          tabs[numb][5][1] = document.getElementById('waveType').value;
          if(4 == tabs[numb][5][1]){
            document.getElementById('in2').disabled = true;
          }else{
            document.getElementById('in2').disabled = false;
          }
    })
    document.getElementById('in1').addEventListener('click', function(){
      globalfunctiontype = 1;
      document.getElementById('in1').innerHTML = "Cancel"
      if(picking == false){
        document.getElementById('in1').innerHTML = "Input"
        picking = true;
        document.getElementById('tab').style.backgroundColor = '#B6B6B6';
      }else{
        picking = false;
        document.getElementById('tab').style.backgroundColor = '#183985';
      }
})
document.getElementById('in2').addEventListener('click', function(){
  globalfunctiontype = 2;
  document.getElementById('in2').innerHTML = "Cancel"
  if(picking == false){
    document.getElementById('in2').innerHTML = "Input"
    picking = true;
    document.getElementById('tab').style.backgroundColor = '#B6B6B6';
  }else{
    picking = false;
    document.getElementById('tab').style.backgroundColor = '#183985';
  }
})
}else if(tabs[numb][3] == 11){
  filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Mean</option><option value="1" ' + defaul(numb, 0, 1) + '>Mode</option><option value="2" ' + defaul(numb, 0, 2) + '>Median</option><option value="3" ' + defaul(numb, 0, 3) + '>Standard deviation</option></select>');
  console.log('type', tabs[numb][3])
  document.getElementById('waveType').addEventListener('change', function(){
    var output = [];
    var i = 0;
    var i = 0;
    while(i<tabs.length){
      if(tabs[i][0]){
        
          tabs[i][5][1] = document.getElementById('waveType').value;
        break;
      }
      i++
    }
    })
}else if(tabs[numb][3] == 12){
  filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><textarea rows="10" cols="40" placeholder="Type the function in JavaScript. The object named -io- contains the function input (-io.input-), and should have the function output placed in -io.output-. Please be careful when creating functions, as they make use of the JavaScript eval function. Infinite loops, and variables with identical names to program variables may cause error." id="text">' + defaul(numb, 2, 1) + '</textarea>');
  document.getElementById('text').addEventListener('input', function(){
   tabs[numb][5][1] = document.getElementById('text').value;
  })
}else if(tabs[numb][3] == 8){
  filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Fourier transform</option><option value="1" ' + defaul(numb, 0, 1) + '>Mellin transform</option><option value="2" ' + defaul(numb, 0, 2) + '>Hartley transform</option></select>');
  console.log('type', tabs[numb][3])
  document.getElementById('waveType').addEventListener('change', function(){
          tabs[numb][5][1] = document.getElementById('waveType').value;
    })
}else{  
filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace">');
      }
   console.log('hello');
   if(true){
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
var output = [];
      while(i<1000){
        output.push(tabfiles[global][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
      outwave.data.datasets[0].data = output;
      outwave.update();
    } 
    document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      var output = [];
      while(i<1000){
        output.push(tabfiles[global][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
      outwave.data.datasets[0].data = output;
      outwave.update();
    })
    
}
    if(!tabs[numb][1]){
    console.log("tabdata", tabdata);
    const filer = document.getElementById("filer");
   console.log('hello');
   if(true){
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      var output = [];
      while(i<1000){
        output.push(tabfiles[tabs[global][4]][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
      inwave.data.datasets[0].data = output;
      inwave.update();
    } document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      var output = [];
      while(i<1000){
        output.push(tabfiles[tabs[global][4]][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
      inwave.data.datasets[0].data = output;
      inwave.update();
    })
    
}
  }
  console.log(tabfiles)

}else if(!picking){
  document.getElementById('tab').style.backgroundColor = '#B6B6B6';
  var i = 0;
  var opentab;
  // find the tab which is open
  while(i<tabs.length){
    if(tabs[i][0]){
      opentab = i;
      break;
    }
    i++
  }
  // process the data
if(globalfunctiontype == 0){
  tabs[opentab][4] = numb;
  document.getElementById('input').innerHTML = "Set input";
}else if(globalfunctiontype == 1){
  tabs[opentab][5][2] = numb;
  document.getElementById('in1').innerHTML = "Input";

}else if(globalfunctiontype == 2){
  tabs[opentab][5][3] = numb;
  document.getElementById('in2').innerHTML = "Input";

}
  picking = true;
}
}
function process(){
  tabfiles = [];
  var i = 0;
  var files = [];
  while(i<tabs.length){
    if(tabs[i][1]){
      files.push(tabs[i]);
    }else{
      files.push([]);
    }
          i++;
  }
     i = 0;
  while(i<tabs.length){
if(tabs[i] == files[i]){
  tabfiles.push(files[i][5])
}else{
  tabfiles.push(['']);
}
          i++;
  }
  i = 0;
  var i2 = 0;
  while(i2<10){
 while(i<tabs.length){
var file = tabfiles[tabs[i][4]];
   console.log("file", file, i)
   const doneFunction = tabs[i][3];
if(!tabs[i][1]){
   if(doneFunction == 3){
    tabfiles[i] = customWave(i);
  }
  if(doneFunction == 4){
    tabfiles[i] = trig(i, file)
  }
  if(doneFunction == 10){
    tabfiles[i] = constfunc(i)
  }
  if(doneFunction == 7){
    tabfiles[i] = arith(i)
  }
  if(doneFunction == 6){
    tabfiles[i] = calc(i, file)
  }
  if(doneFunction == 9){
    tabfiles[i] = boolean(i)
  }
  if(doneFunction == 11){
    tabfiles[i] = statistic(i, file)
  }
  if(doneFunction == 12){
    tabfiles[i] = customFunc(i, file)
  }
  if(doneFunction == 8){
    tabfiles[i] = transf(i, file)
  }
}
   i++
 }
i2++
}
}

function delet(){
  process();
}