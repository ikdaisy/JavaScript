mark=prompt("Enter your mark out of 100: ")

if( mark<0 || mark>100 ){
    alert("Your mark is invalid")
}
else if (mark>=90){
    alert("Your grade is: A+")
}
else if(mark>=80){
    alert("Your grade is: A")
}
else if(mark>=70){
    alert("Your grade is: B+")
}
else if(mark>=60){
    alert("Your grade is: B")
}
else if(mark>=50){
    alert("Your grade is: C+")
}
else if(mark>=40){
    alert("Your grade is: C")
}

else if(mark>=30){
    alert("Your grade is: D+")
}

else if(mark>=20){
    alert("Your grade is: D")
}
else{
    alert("Failed")
}


