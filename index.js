function paintcell(a,b){

document.getElementById(a).style.backgroundColor=b;   

document.getElementById(a).style.borderColor=b;

      

}

function run(a){

var btn = document.createElement("script");  

     // Create a <button> element

var t = document.createTextNode(a);    

   // Create a text node

btn.appendChild(t); 

                               // Append the text to <button>

document.body.appendChild(btn); 

}

function runtext(){

var btn = document.createElement("script");  

     // Create a <button> element

var t = document.createTextNode( document.getElementById("textarea2").value );  

  

   // Create a text node

btn.appendChild(t); 

                               // Append the text to <button>

document.body.appendChild(btn); 

}

function setColor(){

var elements=document.getElementsByTagName("TD");

for (var i = 0; i < elements.length; i++) {

if(elements[i].style.display != "none"){

if (typeof(Storage) !== "undefined") {

run(localStorage.getItem(elements[i].id));

    

    

}   

     

}

}        

}

function writeTo(y,z){

document.getElementById("tablenum").value=y;

document.getElementById("tdid").value=z; 

   

}

function select(A){

var createbut= document.createElement("BUTTON");

createbut.style.position= "relative";

createbut.style.right= "-460px";

var textNode= document.createTextNode(A); 

createbut.appendChild(textNode);

createbut.onclick= function(){var ele=document.getElementsByTagName("Table"); for (var i = 0; i < ele.length; i++) { if(ele[i].id != A){ele[i].style.display="none";}}if (typeof(Storage) !== "undefined") { run(localStorage.getItem(A)); setColor(); }

    };

document.body.appendChild(createbut);

document.getElementById("menu").appendChild(createbut);

}

function saveoption(){

var s="var " + 

document.getElementById("tablenum").value + "arr = ['" + document.getElementById("tablenum").value + "'," + document.getElementById("rowsnum").value + "," + document.getElementById("columnnum").value + ",0,0,'" + document.getElementById("tdid").value + "'];\n\n";

var s1=  "var " + document.getElementById("tablenum").value + "myVar;\n\n";

var s2= "function create" + document.getElementById("tablenum").value +"(){\n\n" + "var maketable= document.createElement('table');\n\n maketable.id= " + document.getElementById("tablenum").value+"arr[0];\n\n maketable.style.position='fixed';\n\n document.body.appendChild(maketable);\n\n}\n\n function "; 

var s3=document.getElementById("tablenum").value +"maker(){\n\n var rows= " + document.getElementById("tablenum").value + "arr[1];\n\n var columns= " + document.getElementById("tablenum").value + "arr[2];\n\n var makeTr;\n\n var makeTd;\n\n" + document.getElementById("tablenum").value +"arr[3]+=1;\n\n makeTr= document.createElement('tr');\n\n makeTr.id= " + document.getElementById("tablenum").value +"arr[0] + " + document.getElementById("tablenum").value;

var s4= "arr[3];\n\n document.body.appendChild(makeTr);\n\n" + "document.getElementById(" +document.getElementById("tablenum").value +"arr[0]).appendChild(document.getElementById("+document.getElementById("tablenum").value + "arr[0] + " +document.getElementById("tablenum").value + "arr[3]));\n\n";  

var s5="for(;" + document.getElementById("tablenum").value + "arr[3]*rows > " + document.getElementById("tablenum").value + "arr[4]; " + document.getElementById("tablenum").value + "arr[4]+=1){" + 'makeTd=document.createElement("td");\n\n'+'makeTd.id=' + document.getElementById("tablenum").value +"arr[5] + " ;

var s6=document.getElementById("tablenum").value + "arr[4];\n\n" + 'makeTd.style.backgroundColor="orange";\n\n makeTd.style.width="5px";\n\n makeTd.style.height="5px";\n\n makeTd.style.borderWidth="1px";\n\n makeTd.style.borderColor="grey"; \n\n makeTd.style.borderStyle="ridge";\n\n document.body.appendChild(makeTd);\n\n' + "document.getElementById(" + document.getElementById("tablenum").value + "arr[0] + " + document.getElementById("tablenum").value + "arr[3]).appendChild(makeTd);\n\n}\n\n}\n\n" + "function create" + document.getElementById("tablenum").value + "Tr(){\n\n var columns= " +document.getElementById("tablenum").value + "arr[2];\n\n if(" +document.getElementById("tablenum").value + "arr[3] != columns){\n\n" + document.getElementById("tablenum").value + "maker();\n\n}\n\n}\n\n" + "function start" + document.getElementById("tablenum").value + "build(){\n\n" + document.getElementById("tablenum").value + "myVar = setInterval(create" +document.getElementById("tablenum").value + "Tr,0);\n\n create" + document.getElementById("tablenum").value + "();\n\n setTimeout(function(){clearInterval("+ document.getElementById("tablenum").value + "myVar);},10000);\n\n}\n\n select('"+document.getElementById("tablenum").value + "');\n\n writeTo('"+document.getElementById("tablenum").value+"','"+document.getElementById("tdid").value+"');";

var save=s+s1+s2+s3+s4+s5+s6;

select(document.getElementById("tablenum").value);

 

if (typeof(Storage) !== "undefined") {

localStorage.document.getElementById("tablenum").value

= save;  

localStorage.listoftables+= "select('"+document.getElementById("tablenum").value + "');";

    

}

}

function getoption(){

if (typeof(Storage) !== "undefined") {

document.getElementById("textarea").value+= localStorage.getItem(document.getElementById("tablenum").value);

}

var elements=document.getElementsByTagName("TD");

for (var i = 0; i < elements.length; i++) {

if(elements[i].style.display != "none"){

if (typeof(Storage) !== "undefined") {

document.getElementById("textarea").value+= localStorage.getItem(elements[i].id);

      

}   

     

}

}        

}

var tr=0;

var td=0;

var count=0;

var draw = 0;

var paintid;

var myvar;

function myStopFunction() {

clearInterval(myVar);

    alert("done");

    

}

function erase(){

document.getElementById(paintid).style.backgroundColor="orange"; 

document.getElementById(paintid).style.borderColor="grey";    

  

}

function paint(){

if (typeof(Storage) !== "undefined") {

localStorage.paintid="paintcell('"+paintid+"',"+"rgb("+output+","+output2+","+output3+"));"

        

}

document.getElementById(paintid).style.backgroundColor="rgb("+output+","+output2+","+output3+")";   

document.getElementById(paintid).style.borderColor="rgb("+output+","+output2+","+output3+")";   

}

function createTable(){

var maketable= document.createElement("table");

maketable.id= document.getElementById("tablenum").value;

maketable.style.position="fixed";

maketable.style.top="40px";

document.body.appendChild(maketable); 

document.getElementById("wrapper").appendChild(maketable); 

 

}

function maker(){

var rows= document.getElementById("rowsnum").value;

var columns= document.getElementById("columnnum").value;

var makeTd;

var makeTr;

tr++;   

makeTr=document.createElement("tr");

makeTr.id=document.getElementById("tablenum").value + tr;

makeTr.style.backgroundColor="red";

document.body.appendChild(makeTr);

document.getElementById(document.getElementById("tablenum").value).appendChild(document.getElementById(document.getElementById("tablenum").value + tr));  

for(;tr*rows > count;count++){

makeTd=document.createElement("td");

makeTd.id=document.getElementById("tdid").value + count;

makeTd.onclick= function(){ paintid= this.id; paint();                 };

makeTd.style.backgroundColor="orange";

makeTd.style.width="5px";

makeTd.style.height="5px";

makeTd.style.borderWidth="1px";

makeTd.style.borderColor="grey";

makeTd.style.borderStyle="ridge";

document.body.appendChild(makeTd);

document.getElementById(document.getElementById("tablenum").value + tr).appendChild(makeTd);    

}    

}

function createTr(){

var columns= document.getElementById("columnnum").value;

if(tr != columns){

maker();

}

}

function menu(){

document.getElementById("wrapper").style.display="none";    

document.getElementById("header").style.display="none";

document.getElementById("menu").style.display="block";

}

function startbuild(){

closemenu();

myVar = setInterval(createTr, 1);

createTable();

setTimeout(myStopFunction,20000);

    

}

function closemenu(){

document.getElementById("wrapper").style.display="block";    

document.getElementById("header").style.display="block";

document.getElementById("menu").style.display="none";

    

}

window.onload= function onload(){

 

 if (typeof(Storage) !== "undefined") {

 

run(localStorage.getItem(listoftables));

 

 }

    

}
