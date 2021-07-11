yee = [];
function submit ()
{
var yeet = [];
for (var a = 1; a <= 4; a++)
{
var naemofdastudente = document.getElementById("name_of_the_student_"+a).value;
console.log (naemofdastudente);
yee.push(naemofdastudente);    
}
console.log (yee);
var studentelengthe = yee.length;
console.log (studentelengthe);
for (var b = 0; b < studentelengthe; b++)
{
yeet.push("<h4> name-"+ yee[b]+"</h4>");
console.log (yeet);
}
console.log (yeet);
document.getElementById("display_name_with_commas").innerHTML = yeet;
var diecommas = yeet.join("");
console.log (diecommas);
document.getElementById("display_name_without_commas").innerHTML = diecommas; 
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
yee.sort();
console.log(yee);
var yeetsortinge = [];
var studentelengthe = yee.length;
console.log (studentelengthe);
for (var b = 0; b < studentelengthe; b++)
{
yeetsortinge.push("<h4> name-"+ yee[b]+"</h4>");
console.log (yeetsortinge);
}
var diecommas = yeetsortinge.join("");
console.log (diecommas);
document.getElementById("display_name_without_commas").innerHTML = diecommas; 


}








