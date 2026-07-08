// ==============================
// SAVE FARMER DETAILS
// ==============================

function saveDetails() {

    let name = document.getElementById("name").value;
    let village = document.getElementById("village").value;
    let mobile = document.getElementById("mobile").value;
    let acres = document.getElementById("acres").value;
    let trees = document.getElementById("trees").value;
    let soil = document.getElementById("soil").value;
    let irrigation = document.getElementById("irrigation").value;

    if(name=="" || village=="" || mobile=="" || acres==""){
        alert("Please fill all required details.");
        return;
    }

    localStorage.setItem("farmerName",name);
    localStorage.setItem("village",village);
    localStorage.setItem("mobile",mobile);
    localStorage.setItem("acres",acres);
    localStorage.setItem("trees",trees);
    localStorage.setItem("soil",soil);
    localStorage.setItem("irrigation",irrigation);

    window.location.href="farmer.html";
}



// ==============================
// LOAD FARMER DETAILS
// ==============================

window.onload=function(){

    if(document.getElementById("farmerName")){

        document.getElementById("farmerName").innerHTML=
        localStorage.getItem("farmerName");

        document.getElementById("farmerVillage").innerHTML=
        localStorage.getItem("village");

        document.getElementById("farmerAcres").innerHTML=
        localStorage.getItem("acres")+" Acres";

    }

}



// ==============================
// WEATHER RECOMMENDATION
// ==============================

function getRecommendation(){

    let weather=document.getElementById("weather").value;

    let advice="";

    if(weather=="Rainy"){

        advice="🌧 Rain Expected. Do NOT Irrigate Today.";

    }

    else if(weather=="Sunny"){

        advice="☀ Weather is Sunny. Irrigation Recommended.";

    }

    else if(weather=="Cloudy"){

        advice="☁ Monitor Soil Moisture Before Irrigation.";

    }

    else{

        advice="Please Select Weather.";

    }

    document.getElementById("recommendation").innerHTML=advice;

}



// ==============================
// YIELD PREDICTION
// ==============================

function predictYield(){

    let acres=parseFloat(localStorage.getItem("acres"));

    let trees=parseFloat(localStorage.getItem("trees"));

    if(isNaN(acres))
        acres=1;

    if(isNaN(trees))
        trees=50;

    let yieldValue=(trees*25).toFixed(0);

    document.getElementById("yieldResult").innerHTML=
    "🌴 Estimated Yield : "+yieldValue+" Kg";

}



// ==============================
// CROP HEALTH
// ==============================

function checkCrop(){

    let disease=document.getElementById("crop").value;

    let solution="";

    if(disease=="Healthy"){

        solution="✅ Crop is Healthy.";

    }

    else if(disease=="Yellow Leaf"){

        solution="🟡 Apply Micronutrients and Proper Irrigation.";

    }

    else if(disease=="Leaf Spot"){

        solution="🍃 Apply Recommended Fungicide.";

    }

    else{

        solution="Please Select Crop Condition.";

    }

    document.getElementById("cropResult").innerHTML=solution;

}



// ==============================
// TAMIL LANGUAGE
// ==============================

function tamil(){

    document.getElementById("title").innerHTML=
    "🌴 எண்ணெய் பனை விவசாயிகள் தளம்";

}



// ==============================
// VOICE ASSISTANT
// ==============================

function speakTamil(){

    let msg="வணக்கம் விவசாயி. இந்த தளம் வானிலை, விளைச்சல் கணிப்பு மற்றும் அரசு திட்ட தகவல்களை வழங்குகிறது.";

    let speech=new SpeechSynthesisUtterance(msg);

    speech.lang="ta-IN";

    speech.rate=1;

    speech.pitch=1;

    speech.volume=1;

    speechSynthesis.speak(speech);

}



// ==============================
// LOGOUT
// ==============================

function logout(){

    window.location.href="index.html";

}