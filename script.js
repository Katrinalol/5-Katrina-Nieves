let clickbutton1 = document.querySelector(".ClickMe");

let result1 = "Anne Shirley";
let result2 = "Gilbert Blythe";
let result3 = "Ka'kwet";
let result4 = "Matthew Cuthburt";

let resultDiv = document.querySelector(".result");

clickbutton1.onclick = function() {
    let input1 = document.querySelector(".Input1").value;
    let input2 = document.querySelector(".Input2").value;

    if (input1 === "extrovert" && input2 <= 16) {
        let resultString1;
        resultString1 = "Your anne with an e character would be " + result1;
        resultDiv.innerHTML = resultString1;
        let anne = document.querySelector(".anne");
        anne.style.display="block";
    }
        else if (input1=== "extrovert" && input2 >16){
        let resultString2;
        resultString2 = "Your anne with an e character would be " + result2;
        resultDiv.innerHTML = resultString2;
            let gilbert = document.querySelector(".gilbert");
        gilbert.style.display="block";
    } else if(input1==="introvert" && input2 <=16){
       let resultString3;
        let Kakwet = document.querySelector(".Kakwet");
        Kakwet.style.display="block";
        resultString3 = "Your anne with an e character would be " + result3;
        resultDiv.innerHTML = resultString3;
    } else if (input1==="introvert" && input2 >16){
        let Matthew = document.querySelector(".Matthew");
        Matthew.style.display="block";
        let resultString4 = "Your anne with an e character would be " + result4;
        resultDiv.innerHTML = resultString4;
    }
    else{
    resultDiv.innerHTML="Try again";
    }
    };
 