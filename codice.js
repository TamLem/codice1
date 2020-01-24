//write vowel-consonant function
//check if cx[i] is a vowel and add it to another variable

// italian vowels (a,e,i,o,u,)

//alert("debug is working");


function isVowel(c) {
    vowels="aeiou";
    for (i=0; i<=vowels.length; i++){
        if (s==vowels[i]){
            return true;
        } else {
            return false;
        }
    }
    
}
/* vowel teller interface

if (isVowel(s)==true){
    alert("It is a vowel")
} else {
    alert("It is false")
}

 */



x = prompt("Enter Surname");
alert(x);

for (i=0; i<x.length; i++){
    if(isVowel(x[i])==false){
        var cx[i]=x[i];
    }
}

alert("cx is " + cx);
