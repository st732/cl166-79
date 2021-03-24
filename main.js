var nameofthestudentarray =[];
function submit()
{
    var name1 =document.getElementById("nameofthestudent1").value;
    var name2 =document.getElementById("nameofthestudent2").value;
    var name3 =document.getElementById("nameofthestudent3").value;
    var name4 =document.getElementById("nameofthestudent4").value;
    
    nameofthestudentarray.push(name1);
    nameofthestudentarray.push(name2);
    nameofthestudentarray.push(name3);
    nameofthestudentarray.push(name4);
    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML=nameofthestudentarray;
}