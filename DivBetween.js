document.getElementById("Between").addEventListener('click', function() {  
   document.getElementById("G").insertAdjacentHTML('afterend','<div class="col">O</div>');        
   document.getElementById("Between").hidden=true;
});
let rows,cols;
document.getElementById("gendiv").addEventListener('click', function() {
    rows=window.prompt("Enter number of Rows","1");
    cols=window.prompt("Enter number of Column","1");
    for(let i=0; i<rows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";    
        for(let j=0; j<cols; j++) {
            let columnDiv = document.createElement("div");
            columnDiv.className = "col";                       
            columnDiv.id = i.toString()+j.toString();
            rowDiv.appendChild(columnDiv);
        }    
        document.getElementById("gen").appendChild(rowDiv);
    }
 });
 document.getElementById("colordiv").addEventListener('click', function() {     
    let r=window.prompt("Enter row number");
    if(r>=rows){
    alert("Invalid");
    }
    else {
        let c=window.prompt("Enter Column number");
        if(c>=cols){
            alert("Invalid");
            }
    else{
        let paint=window.prompt("Enter the name of color OR hex with #");
        document.getElementById(r.toString()+c.toString()).style.backgroundColor=paint;
    }
}
 });
