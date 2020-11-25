function getscore(){
    score=localStorage.getItem("Score_Key");
    document.getElementById("score").innerHTML="score:"+score;
}
function back(){
    window.location="activity_1.html";
}