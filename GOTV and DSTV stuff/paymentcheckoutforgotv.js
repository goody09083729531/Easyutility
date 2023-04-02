const mySelect = document.getElementById("mySelect");
const gotvSelect = document.createElement("select");
const dstvSelect = document.createElement("select");

const firstOption = new Option('Select Package..', '4');
const secondOption = new Option('GOTV SUPA - ₦ 5,500/Month', '5');
const thirdOption = new Option('GOTV MAX - ₦ 4,150/Month', '6');
const fourthOption = new Option('GOTV JOLLI - ₦ 2,800/Month', '7');
const fifthOption = new Option('GOTV JINJA - ₦ 1,900/Month', '8');
const sixthOption = new Option('GOTV SMALLIE', '9');

const seventhOption = new Option('Select Package..', '10');
const eightOption = new Option('DSTV PREMIUM - 21,000/Month', '11');
const ninthOption = new Option('DSTV COMPACT PLUS - ₦ 14,250/Month', '12');
const tenthOption = new Option('DSTV COMPACT - ₦ 9,000/Month', '13');
const eleventhOption = new Option('DSTV CONFAM - ₦ 5,300/Month', '14');
const twelvethOption = new Option('DSTV YANGA - ₦ 2,950/Month', '15');
const thirteenthOption = new Option('DSTV PADI - ₦ 2,150/Month', '16');

gotvSelect.appendChild(firstOption);
gotvSelect.appendChild(secondOption);
gotvSelect.appendChild(thirdOption);
gotvSelect.appendChild(fourthOption);
gotvSelect.appendChild(fifthOption);
gotvSelect.appendChild(sixthOption);

dstvSelect.appendChild(seventhOption);
dstvSelect.appendChild(eightOption);
dstvSelect.appendChild(ninthOption);
dstvSelect.appendChild(tenthOption);
dstvSelect.appendChild(eleventhOption);
dstvSelect.appendChild(twelvethOption);
dstvSelect.appendChild(thirteenthOption);

document.getElementById("multichoiceselect").addEventListener("change", function(){
    if(document.getElementById("multichoiceselect").value == 2){
        dstvSelect.replaceWith(gotvSelect);
        mySelect.replaceWith(gotvSelect);
        document.getElementById("demo").innerHTML = "REMINDER: GOTV SMALLIE - ₦ 900/Month, ₦ 2,400/Quarter, ₦ 7,000/Annum";
    }else if(document.getElementById("multichoiceselect").value == 3){
        mySelect.replaceWith(dstvSelect);
        gotvSelect.replaceWith(dstvSelect);
        document.getElementById("demo").innerHTML = "";
    }else{
        gotvSelect.replaceWith(mySelect);
        dstvSelect.replaceWith(mySelect);
        document.getElementById("demo").innerHTML = "";
    };
});

document.getElementById("proceeder").addEventListener("click", function(){
    if(document.getElementById("multichoiceselect").value == 2 && gotvSelect.value == 5){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayforgotvsupa.html";
    }
    else if(document.getElementById("multichoiceselect").value == 2 && gotvSelect.value == 6){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayforgotvmax.html";
    }
    else if(document.getElementById("multichoiceselect").value == 2 && gotvSelect.value == 7){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayforgotvjolli.html";
    }
    else if(document.getElementById("multichoiceselect").value == 2 && gotvSelect.value == 8){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayforgotvjinja.html";
    }
    else if(document.getElementById("multichoiceselect").value == 2 && gotvSelect.value == 9){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayforgotvsmallie.html";
    }
    
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 11){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvpremium.html";
    }
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 12){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvcompactplus.html";
    }
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 13){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvcompact.html";
    }
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 14){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvconfam.html";
    }
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 15){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvyanga.html";
    }
    else if(document.getElementById("multichoiceselect").value == 3 && dstvSelect.value == 16){
        window.location.href="/GOTV and DSTV stuff/paymentgatewayfordstvpadi.html";
    }
});