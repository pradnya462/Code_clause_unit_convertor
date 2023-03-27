let kgbtn = document.getElementById('kg');
let poundbtn = document.getElementById('pound');

kgbtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
   document.getElementById('output').value = input/10000 +" Kg";
});

poundbtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input*0.0022 +" Pound";

})