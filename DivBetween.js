document.getElementById("Between").addEventListener('click', function() {
   document.getElementById("G").insertAdjacentHTML('afterend','<div class="col">O</div>');    
});
let p=0;
document.getElementById("gendiv").addEventListener('click', function() {
    let rows=window.prompt("Enter number of Rows","1");
    let cols=window.prompt("Enter number of Column","1");
    for(let i=0; i<rows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";    
        for(let j=0; j<cols; j++) {
            let columnDiv = document.createElement("div");
            columnDiv.className = "col";                       
            columnDiv.innerHTML = p;
            columnDiv.id = p++;
            rowDiv.appendChild(columnDiv);
        }    
        document.getElementById("gen").appendChild(rowDiv);
    }
 });
 document.getElementById("colordiv").addEventListener('click', function() {     
    let input=window.prompt("Enter div id");
    if(input>=p){
    alert("Invalid");
    }
    else{
        let paint=window.prompt("Enter the name of color OR hex with #");
        document.getElementById(input).style.backgroundColor=paint;
    }
   input.innerHTML="Kajal";
    
 });