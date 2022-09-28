"use strict";
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
var tabfiles = [];
const pi = 3.14159;
const e = 2.71828;
var global;
var global3;
var globalhandle;
var existingfile = false;
var globalfunctiontype;
var tabs = [];
var picking = true;
  let global2;
let filehandle;
var sinetable = [];
var globalar = "";
const letStart = true;
var constmax = 10000;
var settings = [false, [], 600, 10000];
var outwave;
var inwave;
var itr = 0;
var line = [];
async function begin(){
if(letStart){
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
const tempar = document.body.innerHTML;

document.body.innerHTML = "<p style='background-color:gray;color:blue;text-align:center;font-size:90px;'>Shrek math</p1><p style='background-color:gray;color:blue;text-align:center;font-size:20px;'>by paxon kymissis</p>"
await delay(1000)
itr = 0;
while(itr<2*Math.PI){
sinetable.push(Math.sin(itr.toFixed(6)))
  itr += 0.000001;
}
document.body.innerHTML = tempar;
await delay(10);
itr = 0;
while(itr<600){
  line.push(itr);
  itr++;
}
outwave = new Chart("outwave", {
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
    },
  }
});
 inwave = new Chart("inwave", {
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
}
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
function fourier(i){
      return []
}
function inversefourier(i){
return []
}
function file2wave(fil){
      var wave = [];
  const reader = new FileReader()
  reader.onload = function () {
         const result = reader.result;
const out = new Int8Array(result.slice(404))
    global2 = ((Array.from(out)))
    }
      reader.readAsArrayBuffer(fil.files[0])
      console.log(global2)
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
  return(Math.sqrt(2*Math.PI*z)*((z/Math.E)**z));
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
while(i<constmax){
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
    if(!input1 || !input2){
      return;
    }
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
output.push((input2[i])**(1/input1[i]))
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
function zeta(s){
  var i = 1;
  var out = 0;
  if(settings[0]){
    while(i<100){
      out += 1/((i)**s)
      i++;
    }
  }else{
    while(i<1000){
      out += 1/((i)**s)
      i++;
    }
  }
  return(out);
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
      while(i<constmax){
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
    return(output)
}
function misc(tab, file){
  const Func = tabs[tab][5][1];
  if(Func == 0){
   var i = 0;
   var output = [];
   while(i<file.length){
   output.push(Math.floor(file[i]))
   i++;
   }
    }
    if(Func == 1){
     var i = 0;
     var output = [];
     while(i<file.length){
     output.push(Math.ceil(file[i]))
     i++;
     }
      }
      if(Func == 2){
       var i = 0;
       var output = [];
       while(i<file.length){
         output.push(Math.abs(file[i]));
       i++;
       } 
        }
        if(Func == 3){
         var output = []
         var i = 0;
         while(i<file.length){
          output.push(gamma(file[i]));
          i++;
         }
         }
          if(Func == 4){
            var output = []
            var i = 0;
            while(i<file.length){
             output.push(zeta(file[i]));
             i++;
            }
            }
            if(Func == 5){
             var i = 0;
             var output = [];
             while(i<file.length){
             output.push(Math.sqrt(file[i]))
             i++;
             }
              }
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
  if(type == 2){
    output = hartley(file);
    }
    if(type == 1){
      var i = 0;
      var line2 = [];
      while(i<file2.length){
        line2.push(file2[i])
       i++
      }
      output = inversefourier(line2)
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
        out = file.sort()[Math.ceil(file.length/2)]
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
           if(Func == 4){
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
            const avg = mean;
            mean = 0;
            while(i<output.length){
              mean += output[i];
              i++;
            }
            mean /= output.length;
           const sdv = Math.sqrt(mean);
            i = 0;
            var sum = 0;
            while(i<file.length){
              sum += ((file[i]-avg)**3)
              i++;
            }
            out = sum/((file.length) * (sdv**3))
            output = [];
             }
             if(Func == 5){
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
              const avg = mean;
              mean = 0;
              while(i<output.length){
                mean += output[i];
                i++;
              }
              mean /= output.length;
             const sdv = Math.sqrt(mean);
              i = 0;
              var sum = 0;
              while(i<file.length){
                sum += ((file[i]-avg)**4)
                i++;
              }
              out = sum/((file.length) * (sdv**4))
              output = [];
               }
          var i = 0;
          while(i<constmax){
output.push(out);
i++;
          };
    return(output)
}
function setTheme(){
  const palette = settings[1];
document.body.style.backgroundColor = palette[0];
console.log(document.getElementsByName('label0'))
if(document.getElementsByName('label0').length != 0){
const labels = document.getElementsByName('label0')
const buttons = document.getElementsByTagName('button')
var i = 0;
while(i<labels.length){
 labels.item(i).style.backgroundColor = palette[1];
 i++;
}
i = 0;
while(i<labels.length){
  labels.item(i).style.color = palette[2];
  i++;
 }
 i = 0;
while(i<buttons.length){
  buttons.item(i).style.backgroundColor = palette[3];
  i++;
 }
 i = 0;
 while(i<buttons.length){
  buttons.item(i).style.color = palette[4];
  i++;
 }
}
}
 setTheme();
async function getFile(){
 [filehandle] = await window.showOpenFilePicker()
  let filedata = await filehandle.getFile(); 
await filedata.text().then(result => {
        return(result);
  })
}
function settings0(){
  close();
  filer.innerHTML = '<table><tr><td><h4 style="color:#003826">Quick mode</h4><label class="switch" title="Quick mode will increase the speed of certain functions, but decrease their resolution. This is achieved through a precalculated function table. This process increases boot up time." id="quick"><input type="checkbox"><span class="slider round"></span></label></td><td><select id="theme"><option selected disabled hidden>Theme</option><option value="0">Snow</option><option value="1">Midnight</option><option value="2">Standard</option></select></td><td><h4 style="color:#003826">Graph length</h4><input type="range" id="length" max="1000" min="10"></input></td><td><h4 style="color:#003826">Maximum wave length</h4><input type="range" id="maxlength" max="100000" min="100"></input></td><td><li><button onclick = "save(false);" aria-label="Save project as new">Save as new</button></li><li><button onclick = "openProject(false);" aria-label="Open project">Open</button></li><li><button onclick = "save(true);" aria-label="">Save</button></li>'
  document.getElementById('quick').addEventListener('change', function(){
    settings[0] = !settings[0];
  })
  document.getElementById('length').addEventListener('change', async function(){
    const value = document.getElementById('length').value;
    settings[2] = value;
    var itr = 0;
    line = []
    while(itr<value){
      line.push(itr);
      itr++;
    }
   await inwave.destroy();
   await outwave.destroy();
     outwave = new Chart("outwave", {
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
     inwave = new Chart("inwave", {
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
       await inwave.render();
   await outwave.render();
  })
  document.getElementById('maxlength').addEventListener('change', async function(){
    const value = document.getElementById('maxlength').value;
    settings[3] = value;
    constmax = value;
  })
  document.getElementById('theme').addEventListener('change', function(){
  const theme = document.getElementById('theme').value;
  if(theme == 0){
    settings[1] = ['#D0CCD0', '#F8F4F9', '#37392E', '#777777', '#EDEDED']
  }
  if(theme == 1){
    settings[1] = ['#121212', 'teal', '#000', '#B6B6B6', '#EDEDED']
  }
  if(theme == 2){
    settings[1] = ['#121212', '#F8F4F9', '#37392E', '#B6B6B6', '#EDEDED']
  }
  setTheme();
  })
}
function fileinput(){
global2 = (file2wave(input));
console.log(global2)
}
async function input(){
  globalfunctiontype = 0;
  const buttons = document.getElementsByName('tab');
  document.getElementById('input').innerHTML = "Cancel"
  if(picking == false){
    document.getElementById('input').innerHTML = "Set input"
    picking = true;
    var i = 0;
    buttons.item(0).style.backgroundColor = '#B6B6B6'
    while(i<buttons.length){
    buttons.item(i).style.backgroundColor = '#B6B6B6';
    i++;
    }
  }else{
    picking = false;
    var i = 0;
    buttons.item(0).style.backgroundColor = '#183985'
    while(i<buttons.length){
    buttons.item(i).style.backgroundColor = '#183985';
    i++;
    }
  }
// get tab which input is coming from

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
   tabs.push([true,true,name,0,'',global2]);
  
let list = document.getElementById("files").innerHTML;
  list+="<li><button onclick = 'tab("+ (tabs.length - 1) +")' id ='tab' name='tab'>"+name+"</button></li>";
    document.getElementById("files").innerHTML = list;
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
   tabs.push([true,false,name,document.getElementById('functionType').value,'0',[1,0,0,0,0,0]]);
   if(document.getElementById('functionType').value == 7){
    tabs[tabs.length-1][5][2] = '';
    tabs[tabs.length-1][5][3] = '';
   }
let list = document.getElementById("functions").innerHTML;
  list+="<li><button onclick = 'tab("+ (tabs.length - 1) +")' id ='tab' name='tab'>"+name+"</button></li>";
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
const length = tabs[tab][5][3] - 1;
var output =[0];
if(type == 0){
  var i = 0;
  var i2 = 0;
  var up = true;
  while(i<length){
if(i2>freq){
  up = false;
}else if(i2<0){
  up = true;
}
if(up){
  i2 += 1;
  output.push(0);
}else if(!up){
  i2 -= 1;
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
if(i2>peak){
  up = false;
}else if(i2<0){
  up = true;
}
if(up){
  i2 += peak/freq;
}else if(!up){
  i2 -= peak/freq;
  }
  output.push(i2);
  i++
}
}
if(type == 2){
  var i = 0;
  var i2 = 0;
  var up = true;
  while(i<length){
if(i2>peak){
  up = false;
}else if(i2 <= 0){
  up = true;
}
if(up){
  i2 += (peak/freq)/2;
}else if(!up){
  i2 = 0;
  }
  output.push(i2);
  i++
}
}
if(type == 3){
  var i = 0;
  var i2 = peak;
  while(i<length){
if(i2 >= 0){
  i2 -= (peak/freq)/2;
}else if(i2 <= 0){
  i2 = peak;
  }
  output.push(i2);
  i++
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
return output;
}
function close(){ 
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
document.getElementById('filer').innerHTML = '';
}
function tab(numb){
  const buttons = document.getElementsByName('tab');
  var i = 0;
  while(i<buttons.length){
  buttons.item(i).style = "#tab:hover{background-color: #242424;color: white;}";
  i++;
  }
  "#tab:hover{background-color: #242424;color: white;}"
  // decides if picking or using tab
  if(picking){
close()
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
if(tabs[numb][3] == 3){
        console.log('tabfiles:', defaul(numb, 1, 0))
        filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><label for="waveType" name="label0">Options</label><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Square wave</option><option value="1" ' + defaul(numb, 0, 1) + '>Triangle wave</option><option value="2" ' + defaul(numb, 0, 2) + '>Rising edge sawtooth wave</option><option value="3" ' + defaul(numb, 0, 3) + '>Falling edge sawtooth wave</option><option value="4" ' + defaul(numb, 0, 4) + '>Sine wave</option><option value="5" ' + defaul(numb, 0, 5) + '>Straight line</option><option value="6" ' + defaul(numb, 0, 6) + '>Noise</option></select><label for="waveFreq" name="label0" id="lwf">Frequency 1-0.01</label><input type="range" min="1" max="100" value="' + defaul(numb, 1, 0) + '" id="waveFreq"><label for="waveLength" name="label0" id="lwl">Length 1-10000</label><input type="range" min="1" max="10000" value="' + defaul(numb, 2, 3) + '" id="waveLength"><label for=wavePeak" name="label0" id="lwp">Maximum wave value 1-100</label><input type="range" min="1" max="100" value="' + defaul(numb, 2, 2) + '" id="wavePeak">');
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
          process();
          document.getElementById('lwf').innerHTML = ("Frequency: " + String((0.001 * Math.ceil(1000 / parseInt(document.getElementById('waveFreq').value))).toFixed(3)))
        })
        document.getElementById('wavePeak').addEventListener('change', function(){
          document.getElementById('lwp').innerHTML = ("Maximum wave value: " + String(document.getElementById('wavePeak').value))
                tabs[numb][5][2] = parseFloat(document.getElementById('wavePeak').value);
                process();
        })
        document.getElementById('waveLength').addEventListener('change', function(){
          tabs[numb][5][3] = document.getElementById('waveLength').value;
          document.getElementById('lwl').innerHTML = ("Length: " + String(document.getElementById('waveLength').value))
          process();
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
          process()
          })
}else if(tabs[numb][3] == 4){
      console.log('tabfiles:', defaul(numb, 1, 0))
      filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><label for="waveType" name="label0">Options</label><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Sine</option><option value="1" ' + defaul(numb, 0, 1) + '>Cosine</option><option value="2" ' + defaul(numb, 0, 2) + '>Tangeant</option><option value="3" ' + defaul(numb, 0, 3) + '>Sinc</option><option value="4" ' + defaul(numb, 0, 4) + '>Hyperbolic sine</option><option value="5" ' + defaul(numb, 0, 5) + '>Hyperbolic cosine</option><option value="6" ' + defaul(numb, 0, 6) + '>Hyperbolic tangent</option><option value="7" ' + defaul(numb, 0, 7) + '>Secant</option><option value="8" ' + defaul(numb, 0, 8) + '>Cosecant</option><option value="9" ' + defaul(numb, 0, 9) + '>Cotangeant</option></select>');
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
        process();
        })
}else if(tabs[numb][3] == 10){
    filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><label for="setConst" name="label0">Constant</label><textarea placeholder="Type a number. For specialized constants like π or e, type in the values: PI, E, PHI, SQ2, LN2" id="setConst">' + defaul(numb, 1, 0) + '</textarea>');
    document.getElementById('setConst').addEventListener('change', function(){
            tabs[numb][5][0] = document.getElementById('setConst').value;
            process();
      })
}else if(tabs[numb][3] == 7){
    filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><label for="in1" name="label0">Options</label><button id="in1">Input</button><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>+</option><option value="1" ' + defaul(numb, 0, 1) + '>-</option><option value="2" ' + defaul(numb, 0, 2) + '>&times</option><option value="3" ' + defaul(numb, 0, 3) + '>&divide</option><option value="4" ' + defaul(numb, 0, 4) + '>^</option><option value="5" ' + defaul(numb, 0, 5) + '>&#8730</option><option value="6" ' + defaul(numb, 0, 6) + '>log</option></select><button id="in2">Input</button>');
    document.getElementById('waveType').addEventListener('change', function(){
            tabs[numb][5][1] = document.getElementById('waveType').value;
            process()
      })
      document.getElementById('in1').addEventListener('click', function(){
        globalfunctiontype = 1;
        document.getElementById('in1').innerHTML = "Cancel"
        if(picking == false){
          document.getElementById('in1').innerHTML = "Input"
          picking = true;
          var i = 0;
          const buttons = document.getElementsByName('tab');
          buttons.item(0).style.backgroundColor = '#B6B6B6'
          while(i<buttons.length){
          buttons.item(i).style.backgroundColor = '#B6B6B6';
          i++;
          }
        }else{
          picking = false;
          var i = 0;
          const buttons = document.getElementsByName('tab');
          buttons.item(0).style.backgroundColor = '#183985'
          while(i<buttons.length){
          buttons.item(i).style.backgroundColor = '#183985';
          i++;
          }
        }
        process();
  })
  document.getElementById('in2').addEventListener('click', function(){
    globalfunctiontype = 2;
    document.getElementById('in2').innerHTML = "Cancel"
    if(picking == false){
      document.getElementById('in2').innerHTML = "Input"
      picking = true;
      var i = 0;
      const buttons = document.getElementsByName('tab');
      buttons.item(0).style.backgroundColor = '#B6B6B6'
      while(i<buttons.length){
      buttons.item(i).style.backgroundColor = '#B6B6B6';
      i++;
      }
    }else{
      picking = false;
      var i = 0;
      const buttons = document.getElementsByName('tab');
      buttons.item(0).style.backgroundColor = '#183985'
      while(i<buttons.length){
      buttons.item(i).style.backgroundColor = '#183985';
      i++;
      }
    }
    process();
})
}else if(tabs[numb][3] == 6){
    filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Derivative</option><option value="1" ' + defaul(numb, 0, 1) + '>Integral</option><option value="2" ' + defaul(numb, 0, 2) + '>Antiderivative</option></select>');
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
      process();
      })
}else if(tabs[numb][3] == 9){
  filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><button id="in1">Input</button><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>=</option><option value="1" ' + defaul(numb, 0, 1) + '><</option><option value="2" ' + defaul(numb, 0, 2) + '>OR</option><option value="3" ' + defaul(numb, 0, 3) + '>AND</option><option value="4" ' + defaul(numb, 0, 4) + '>NOT</option><option value="5" ' + defaul(numb, 0, 5) + '>NOR</option><option value="6" ' + defaul(numb, 0, 6) + '>NAND</option><option value="7" ' + defaul(numb, 0, 7) + '>XOR</option><option value="8" ' + defaul(numb, 0, 8) + '>XNOR</option></select><button id="in2">Input</button>');
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
          process();
    })
    document.getElementById('in1').addEventListener('click', function(){
      globalfunctiontype = 1;
      document.getElementById('in1').innerHTML = "Cancel"
      if(picking == false){
        document.getElementById('in1').innerHTML = "Input"
        picking = true;
        var i = 0;
        const buttons = document.getElementsByName('tab');
        buttons.item(0).style.backgroundColor = '#B6B6B6'
        while(i<buttons.length){
        buttons.item(i).style.backgroundColor = '#B6B6B6';
        i++;
        }
      }else{
        picking = false;
        var i = 0;
        const buttons = document.getElementsByName('tab');
        buttons.item(0).style.backgroundColor = '#183985'
        while(i<buttons.length){
        buttons.item(i).style.backgroundColor = '#183985';
        i++;
        }
      }
      process();
})
document.getElementById('in2').addEventListener('click', function(){
  globalfunctiontype = 2;
  document.getElementById('in2').innerHTML = "Cancel"
  if(picking == false){
    document.getElementById('in2').innerHTML = "Input"
    picking = true;
    var i = 0;
    const buttons = document.getElementsByName('tab');
    buttons.item(0).style.backgroundColor = '#B6B6B6'
    while(i<buttons.length){
    buttons.item(i).style.backgroundColor = '#B6B6B6';
    i++;
    }
  }else{
    picking = false;
    var i = 0;
    const buttons = document.getElementsByName('tab');
    buttons.item(0).style.backgroundColor = '#183985'
    while(i<buttons.length){
    buttons.item(i).style.backgroundColor = '#183985';
    i++;
    }
  }
  process();
})
}else if(tabs[numb][3] == 11){
  filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Mean</option><option value="1" ' + defaul(numb, 0, 1) + '>Mode</option><option value="2" ' + defaul(numb, 0, 2) + '>Median</option><option value="3" ' + defaul(numb, 0, 3) + '>Standard deviation</option><option value="4" ' + defaul(numb, 0, 4) + '>Skewness</option><option value="5" ' + defaul(numb, 0, 5) + '>Kurtosis</option></select>');
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
    process();
    })
}else if(tabs[numb][3] == 12){
  filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><textarea rows="10" cols="40" placeholder="Type the function in JavaScript. The object named -io- contains the function input (-io.input-), and should have the function output placed in -io.output-. Please be careful when creating functions, as they make use of the JavaScript eval function. Infinite loops, and variables with identical names to program variables may cause error." id="text">' + defaul(numb, 2, 1) + '</textarea>');
  document.getElementById('text').addEventListener('input', function(){
   tabs[numb][5][1] = document.getElementById('text').value;
  })
}else if(tabs[numb][3] == 8){
  filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Fourier transform</option><option value="1" ' + defaul(numb, 0, 1) + '>Inverse fourier transform</option><option value="2" ' + defaul(numb, 0, 2) + '>Hartley transform</option></select>');
  console.log('type', tabs[numb][3])
  document.getElementById('waveType').addEventListener('change', function(){
          tabs[numb][5][1] = document.getElementById('waveType').value;
          process();
    })
}else if(tabs[numb][3] == 5){
      console.log('tabfiles:', defaul(numb, 1, 0))
      filer.innerHTML = String('<label for="wavePlace" name="label0">Scroll</label><input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace"><select id="waveType" ><option value="0" ' + defaul(numb, 0, 0) + '>Floor</option><option value="1" ' + defaul(numb, 0, 1) + '>Ceiling</option><option value="2" ' + defaul(numb, 0, 2) + '>Absolute</option><option value="3" ' + defaul(numb, 0, 3) + '>Gamma</option><option value="4" ' + defaul(numb, 0, 4) + '>Zeta</option><option value="5" ' + defaul(numb, 0, 5) + '>Square root</option></select>');
      console.log('type', tabs[numb][3])
      document.getElementById('waveType').addEventListener('change', function(){
              tabs[numb][5][1] = document.getElementById('waveType').value;
              process();
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
  console.log(tabfiles);
}else if(!picking){
  const buttons = document.getElementsByName('tab');
  var i = 0;
  while(i<buttons.length){
  buttons.item(i).style.backgroundColor = '#B6B6B6';
  i++;
  }
   i = 0;
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
setTheme();
}
function process(){
  tabfiles = [];
  var i = 0;
  while(i<tabs.length){
    if(tabs[i][1]){
      tabfiles.push(tabs[i][5]);
    }else if(tabs[i][3] == 10){
      tabfiles.push(constfunc(i));
    }else if(tabs[i][3] == 3){
      tabfiles.push(customWave(i));
    }else{
      tabfiles.push([]);
    }
          i++;
  }
  i = 0;
  var i2 = 0;
  while(i2<tabs.length){
    i = 0;
 while(i<tabs.length){
var file = tabfiles[tabs[i][4]];
   const doneFunction = tabs[i][3];
if(!tabs[i][1]){
  if(doneFunction == 4){
    tabfiles[i] = trig(i, file)
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
  if(doneFunction == 5){
    tabfiles[i] = misc(i, file)
  }
}
   i++
 }
i2++
}
}
async function openProject(){
//get the project file and decode it
function decode(filein){
  var file = filein;
  if(filein[filein.length - 1] != '∂'){
    file += ('∂')
  }
var i4 = 0;
var i3 = 0;
var i2 = 0;
var i = 0;
let temptext = "";
var temptype = "";
var temparray = [];
var tempdata = [];
var final = [];
while(i4 < file.split('∂').length - 2){
  tempdata = []
  temparray = []
  temptext = ""
while(file[i] != '∂'){
  i++;
}
i++;
while(file[i] != 'å'){
temptext += file[i];
i++;
}
i++;
if(temptext == "true"){
  temparray.push(true);
}else{
  temparray.push(false);
}
temptext = "";
while(file[i] != 'å'){
  temptext += file[i];
  i++;
  }
  i++
  if(temptext == "true"){
    temparray.push(true);
  }else{
    temparray.push(false);
  }
temptext = "";
  while(file[i] != 'å'){
    temptext += file[i];
    i++;
    }
    i++
    temparray.push(temptext);
  temptext = "";
    while(file[i] != 'å'){
      temptext += file[i];
      i++;
      }
      i++
      temparray.push(parseInt(temptext));
    temptext = "";
      while(file[i] != 'å'){
        temptext += file[i];
        i++;
        }
        i++;
        temparray.push(parseInt(temptext));
        temptext = "";
          while(file[i] != '∂'){
            temptext += file[i];
            i++;
            }
            temptype = "";
            tempdata = [];
if(!temparray[1]){
i2 = 0;
i3 = 0;
while(i2<6){
while(temptext[i3] != 'ß'){
  temptype += temptext[i3];
  i3++;
  }
  i3++;
tempdata.push(temptype)
temptype = "";
i2++
}
temparray.push(tempdata)
}
if(temparray[1]){
  i2 = 0;
  i3 = 0;
  while(i2 < temptext.split('ß').length - 1){
  while(temptext[i3] != 'ß'){
    temptype += temptext[i3];
    i3++;
    }
    i3++;
  tempdata.push(temptype)
  temptype = "";
  i2++
  }
  temparray.push(tempdata)
  }
final.push(temparray)
i4++;
}
process()
return(final)
}
const pickerOpts = {
  types: [
    {
      description: 'Project file (stored as text)',
      accept: {
        'Text/*': ['.shrek']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};
var [filehandle] = await window.showOpenFilePicker(pickerOpts)
globalhandle = filehandle;
  let filedata = await filehandle.getFile(); 
await filedata.text().then(result => {
       tabs = decode(result);
  })
  //reset the tabs
  document.getElementById('files').innerHTML = "<li><button onclick = 'createTab(true);' aria-label='Add file'>+</button></li><li><button onclick = 'delet()' id ='tab' aria-label='Delete file'>Delete</button></li>"
  document.getElementById('functions').innerHTML = "<li><button onclick = 'createTab(false);' aria-label='Add function'>+</button></li><li><button onclick = 'delet()' id ='tab' aria-label='Delete function'>Delete</button></li>"
  //add each file tab
  var i = 0;
  var list;
  while(i<tabs.length){
    if(tabs[i][1]){
      document.getElementById('files').innerHTML += "<li><button onclick = 'tab("+ i +")' id ='tab' name='tab'>"+tabs[i][2]+"</button></li>";
    }
    i++;
  }
  i = 0;
  while(i<tabs.length){
    if(!tabs[i][1]){
      document.getElementById('functions').innerHTML += "<li><button onclick = 'tab("+ i +")' id ='tab' name='tab'>"+tabs[i][2]+"</button></li>";
    }
    i++;
  }
  console.log(tabs)
}
async function save(savetype){
  function encode(){
    var i2 = 0
    var i = 0
    var text = ""
    while(i2<tabs.length){
      text += ('∂')
      text += (tabs[i2][0])
      text += ('å')
      text += (tabs[i2][1])
      text += ('å')
      text += (tabs[i2][2])
      text += ('å')
      text += (tabs[i2][3])
      text += ('å')
      text += (tabs[i2][4])
      text += ('å')
      i = 0;
      while(i<tabs[i2][5].length){
        text += (tabs[i2][5][i])
        text += ('ß')
        i++
      }
      i2++;
    }
    text += '∂'
    console.log(text)
    return(text);
  }
  if(!savetype){
 const options = {
      types: [
        {
          description: "Project file",
          accept: {
            "text/plain": [".shrek"],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    globalhandle = handle;
    const writable = await handle.createWritable();
    await writable.write(encode());
    await writable.close();
    existingfile = true;
  }
  if(savetype){
    const options = {
         types: [
           {
             description: "Project file",
             accept: {
               "text/plain": [".txt"],
             },
           },
         ],
       };
       const handle = globalhandle;
       const writable = await handle.createWritable();
       await writable.write(encode());
       await writable.close();
       existingfile = true;
     }
}
function delet(){
  var i = 0;
  var opentab;
  var newarr = '';
  while(i<tabs.length){
    if(tabs[i][0]){
        opentab = i;
      break;
    }
    i++
  }
  if(tabs[opentab][1]){
    tabs.splice(opentab, 1);
    i = 0;
    var namelist = [];
    while(i<tabs.length){
    if(tabs[i][1]){
      namelist.push(tabs[i][2]);
    }
    i++;
    }
    i = 0;
    while(i<namelist.length){
     newarr += '<button onclick="tab(' + i + ')" id="tab" name="tab">' + namelist[i] + '</button>';
      console.log(i != opentab, i, opentab,namelist, namelist[i])
      i++
    }
    console.log(newarr)
    document.getElementById('files').innerHTML = "<li><button onclick = 'createTab(true);' aria-label='Add file'>+</button></li><li><button onclick = 'delet()' id ='tab' aria-label='Delete file'>Delete</button></li>" + newarr;
  }
if(!tabs[opentab][1]){
  tabs.splice(opentab, 1);
  i = 0;
  var namelist = [];
  while(i<tabs.length){
  if(!tabs[i][1]){
    namelist.push(tabs[i][2]);
    i++;
  }
  }
  i = 0;
  while(i<namelist.length){
   newarr += '<button onclick="tab(' + i + ')" id="tab" name="tab">' + namelist[i] + '</button>';
    i++
  }
  document.getElementById('functions').innerHTML = "<li><button onclick = 'createTab(false);' aria-label='Add function'>+</button></li><li><button onclick = 'delet()' id ='tab' aria-label='Delete function'>Delete</button></li>" + newarr;
}
}
begin()
