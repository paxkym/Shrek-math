const alphabet = ['A','B','C','E','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/']
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
var tabfiles = [];
const pi = 3.14;
var global;
var global3;
var tabs = [];
  let global2;
let filehandle;
var c = document.getElementById("inwave");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FFF";
var c2 = document.getElementById("outwave");
var ctx2 = c2.getContext("2d");
ctx2.strokeStyle = "#FFF";
function draw(x,y,canv){
  if(canv){
  y+=75;
ctx.moveTo(x, y);
ctx.lineTo(x+1, y);
ctx.lineTo(x+1, y+1);
ctx.lineTo(x, y+1);
ctx.stroke();
  }
  if(!canv){
      y+=75;
    ctx2.moveTo(x, y);
ctx2.lineTo(x+1, y);
ctx2.lineTo(x+1, y+1);
ctx2.lineTo(x, y+1);
ctx2.stroke();
  }
}
function compare(wave, compare){
  var i = 0;
  // generates a wave array for the transformed signal
    var sum = 0;
while(i<wave.length){
sum += Math.floor(Math.sin(i*compare)*(wave[Math.floor(i)])*1000)
  i += 0.5;
}
  sum /= wave.length/0.5;
  return(Math.floor(sum));
}
function transform(wave){
  var wave = wave;
  var i = -10;
  var wave2 = [];
  while(i<1000){
  wave2.push(compare(wave,i));
    i += 1;
  }
  return wave2;
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
function tan(wave){
  var i = 0;
  var output = [];
  while(i<wave.length){
    output.push(Math.ceil(Math.tan(wave[i])*20))
    i++
  }
  return output;
}
async function getFile(){
 [filehandle] = await window.showOpenFilePicker()
  let filedata = await filehandle.getFile(); 
await filedata.text().then(result => {
        return(result);
  })
}
const input = document.getElementById('fileInput');
input.addEventListener('change', function (e) {
  ctx.clearRect(0, 0, c.width, c.height);
global2 = (file2wave(input));
}, false)
document.getElementById('input').addEventListener('change', function(){
  var i = 0;
  while(i<tabs.length){
    if(tabs[i][0]){
      tabs[i][4] = parseInt(((document.getElementById('input').value).split("\n"))[0]);
        console.log(i, tabs);
      break;
    }
    i++
  }
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
        document.getElementById('name').textContent = 'myFile ' + (tabs.length + 1);
            document.getElementById('name2').textContent = 'myFile ' + (tabs.length + 1);
  }
  if(type == false){
            const link = document.getElementById('functionpicker');
  link.style.visibility = 'visible';
        document.getElementById('name').textContent = 'myFile ' + (tabs.length);
  }
}
function create(){
           const name = document.getElementById('name').value;
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
    console.log(name)
   tabs.push([true,false,name,document.getElementById('functionType').value,document.getElementById('input').value,global]);
let list = document.getElementById("functions").innerHTML;
  list+="<li><button onclick = 'tab("+ (tabs.length - 1) +")' id ='tab'>"+name+"</button></li>";
    document.getElementById("functions").innerHTML = list;
  const link = document.getElementById('functionpicker');
  link.style.visibility = 'hidden';
}
function close(){ 
  document.getElementById('filepicker').style.visibility = 'hidden';
document.getElementById('functionpicker').style.visibility = 'hidden';
}
function tab(numb){
  ctx.fillRect(0, 0, 1040, 150);
    ctx2.fillRect(0, 0, 1040, 150);
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
      while(i<1000){
        draw(i,tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))],true)
        i+=1;
      }
    } document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      while(i<1000){
        draw(i,tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))],true)
        console.log(tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
    })
    
}
  
  if(!tabdata[1] && !!tabfiles[numb]){
    console.log("hello1")
    if(true){
    let filedata = tabfiles[global];
    console.log("tabdata", tabdata);
    const filer = document.getElementById("filer");
filer.innerHTML = String('<input type="range" min="1" max="' + filedata.length + '" value="50" id="WavePlace">');
   console.log('hello');
   if(true){
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      while(i<1000){
        draw(i,tabfiles[global][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))],true)
        i+=1;
      }
    } document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      while(i<1000){
        draw(i,tabs[global][5][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
    })
    
}
    if(true){
    console.log("tabdata", tabdata);
    const filer = document.getElementById("filer");
filer.innerHTML = String('<input type="range" min="1" max="' + tabfiles[tabs[global][4]].length + '" value="50" id="WavePlace">');
   console.log('hello');
   if(true){
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      while(i<1000){
        draw(i,tabfiles[tabs[global][4]][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))],false)
        i+=1;
      }
    } document.getElementById('WavePlace').addEventListener("change", function() {
      var place;
    place += document.getElementById('WavePlace').value;
      var i = 0;
      while(i<1000){
        draw(i,tabfiles[global][Math.ceil(i+parseFloat(document.getElementById('WavePlace').value))])
        i+=1;
      }
    })
    
}
  }
  console.log(tabfiles)
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
  tabfiles.push([]);
}
          i++;
  }
  i = 0;
  var i2 = 0;
 while(i<tabs.length){
var file = tabfiles[tabs[i][4]];
   console.log("file", file, i)
   const doneFunction = tabs[i][3];
if(!tabs[i][1]){
   if(doneFunction == 1){
     tabfiles[i] = transform(file);
     
   }
      if(doneFunction == 0){
     console.log('custom:', file, i)
   }
}
   i++
 }
  console.log(tabfiles)
}

function delet(){
  process();
}
