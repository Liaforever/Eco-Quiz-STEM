function calculateScore() {
  const form = document.getElementById('quizForm');
  const totalQuestions = 5;
  let score = 0;

  for(let i=1; i<=totalQuestions; i++){
    const answer = form['q'+i].value;
    score += Number(answer);
  }

  const percent = (score / totalQuestions) * 100;
  let levelText = "";
  let emoji = "";

  if(percent <= 25) {
    levelText = "Eco-frenemy: Need to upgrade!";
    emoji = "😬🌱";
  } else if(percent <= 50) {
    levelText = "Eco-friendly advocate: Could be better!";
    emoji = "🙂🌿";
  } else if(percent <= 75) {
    levelText = "Green Activist! - Levelling up!";
    emoji = "😎🌳";
  } else {
    levelText = "Climate Warrior! - working hard for the planet";
    emoji = "💪🌎";
  }

  document.getElementById('levelResult').textContent = `Your Score: ${percent}% - ${levelText} ${emoji}`;
}
