var score=0;
function Update_Score(){
    score=score+1;
    document.getElementById("score").innerHTML="Score : "+score;
}
function Save_Score(){
    localStorage.setItem("Score_Key",score);
}
function Next_Page(){
    window.location="activity_2.html";
}