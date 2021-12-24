/*$(document).ready(function(){
    if(sessionStorage.getItem("moodsCtr") == null) {
        sessionStorage.setItem("moodsCtr", 0);
    }
});*/

/** Makes tags darker on click and saves selected moods **/

var colorMatchesArr = [0,0,0,0,0,0,0,0,0,0,0,0]; //Keeps track of which moods have been selected - index where arr = 1 indicates mood
var moodsCtr = 0; //Keeps track of number of moods selected

$(document).ready(function(){

    $('#quiz-submit-btn').attr('disabled','disabled');
   
});

/* Change tag color on click (only 3 tags can be selected) */
function setColor(tag) {

    //Get tag by id number and store in moodIndex
    var moodTag = document.getElementById(tag);
    var moodIndex = parseInt(tag);

    var i;
    
    if (moodsCtr > -1){
        $('#quiz-submit-btn').removeAttr('disabled');
    } else if (moodsCtr == 0 ){
        $('#quiz-submit-btn').attr('disabled','disabled');
    }
    
    
    //If tag already selected, on click, make white again & deselect
    if (colorMatchesArr[moodIndex] == 1) {
        
        moodTag.style.backgroundImage = "url('../images/quiz-assets/tag-white.png')";
        moodTag.style.color = "rgb(90, 90, 90)";
        colorMatchesArr[moodIndex] = 0;      
        moodsCtr--;  
        if (moodsCtr == 0 ){
            $('#quiz-submit-btn').attr('disabled','disabled');
            //location.reload();
        }

    }
    else {
        //If 3 already selected, keep tag clicked white
        if(moodsCtr > 2){
            moodTag.style.backgroundImage = "url('../images/quiz-assets/tag-white.png')";
            moodTag.style.color = "rgb(90, 90, 90)";
            colorMatchesArr[moodIndex] = 0; 
        }
        //If tag not selected & < 3, select tag and make gray
        else{
            moodTag.style.backgroundImage = "url('../images/quiz-assets/tag-gray.png')";
            moodTag.style.color = "#fff";
            colorMatchesArr[moodIndex] = 1;
            moodsCtr++;
        }
    }
}

/* Store moods in mood cookie */
var cookieMoodValue = ""; //Holds moods selected
var i;
var mood = ""; 
var counter = 0;
$(document).ready(function(){
    saveMood = function() {
        for(i = 0; i < 13; i++){ 
            if(colorMatchesArr[i] == 1){ //Check which moods have been selected
                var id = i.toString();
                mood = document.getElementById(id); 
                //If first mood, don't add comma
                if(cookieMoodValue == ""){
                    cookieMoodValue = $.trim($(mood).text());
                    sessionStorage.setItem("q3", cookieMoodValue);
                }
                //Add commas after moods
                else{
                    cookieMoodValue += ", " + $.trim($(mood).text());
                    sessionStorage.setItem("q3", cookieMoodValue);
                }
                counter++;
            }
        }
        if(counter == 0){
            sessionStorage.setItem("q3", "NONE"); //If mood question is skipped, store none in mood cookie
        }
        window.location.replace("quiz-result.html");
    }
});