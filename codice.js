
//check if cx[i] is a vowel and add it to another variable

// italian vowels (a,e,i,o,u,)

//alert("debug is working");

//letter checking function

function isVowel(s) {
   let vowels="aeiouAEIOU";

    for (i=0; i<=vowels.length; i++){

       // console.log(vowels[i]);  //loop check

        if (s==vowels[i])
        {amon.local
            return true;
        } 
    }

    return false;        
}

//consontant collector function

function collector (word){

     consts=[];

    for (i=0; i<word.length; i++){

        if((isVowel(word[i]))==false)
            {
                consts.push(word[i]);
            }
    }
    return consts.toString();

}


console.log("Running till here");



/* vowel teller interface

if (isVowel(s)==true){
    alert("It is a vowel")
} else {
    alert("It is false")
}

 */



//x = prompt("Enter Surname");
//alert(x);


//alert("cx is " + cx); 
