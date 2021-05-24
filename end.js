const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const Max_High_Scores = 5;
console.log(highScores);



saveHighScore = e => {

e.preventDefault();

const score = {
    score: ( Math.floor(Math.random()*200)),
    name:username.value
};
highScores.push(score);

highScores.sort((a,b) => b.score - a.score)

highScores.splice(5);

localStorage.setItem('highScores', JSON.stringify(highScores));

window.location.assign("index.html");

};
