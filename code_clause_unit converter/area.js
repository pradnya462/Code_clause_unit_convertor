var mm = document.getElementById("mm");
var cm = document.getElementById("cm");

mm.addEventListener('input',function(){
 
    let m = this.value;
    let c = (m * 10000) ;
    cm.value = c;

});


cm.addEventListener('input',function(){
    let c = this.value;
    let m = (c / 10000);
    mm.value = m;
});
