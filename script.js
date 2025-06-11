const answers = {
    1: 'b',
    2: 'c',
    3: 'c'
  };
  
  let score = 0;
  
  function checkAnswer(questionNum, selected) {
    if (selected === answers[questionNum]) {
      score++;
    }
  
    document.getElementById('q' + questionNum).classList.add('hidden');
    const nextQ = document.getElementById('q' + (questionNum + 1));
    if (nextQ) {
      nextQ.classList.remove('hidden');
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const result = document.getElementById('result');
    result.classList.remove('hidden');
  
    if (score === 3) {
      result.innerHTML = `🎉 You know me *so* well! I love you! ❤️`;
    } else if (score === 2) {
      result.innerHTML = `🥰 Almost perfect! You're amazing! 💕`;
    } else {
      result.innerHTML = `😅 You need to brush up on your boyfriend facts 😆 But I still love you tons! 💘`;
    }
  
    document.getElementById('bonus').classList.remove('hidden');
  }
  
  function bonusAnswer(lovesMe) {
    const final = document.getElementById('final');
    final.classList.remove('hidden');
    document.getElementById('bonus').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
  
    if (lovesMe) {
      final.innerHTML = `
        😍 Yay! Then I’d like:<br>
        👉 1 large hug 🤗<br>
        👉 1 serve of long kiss 😘<br>
        👉 With a side of extra love 💞<br><br>
        Can I have it this Saturday when you see me? 🥹<br><br>
        <button onclick="finalAnswer(true)">Yes</button>
        <button onclick="finalAnswer(false)">No</button>
      `;
    } else {
      final.innerHTML = `😢 Well... I’ll still keep loving you anyway! ❤️`;
    }
  }
  
  function finalAnswer(yes) {
    const final = document.getElementById('final');
    if (yes) {
      final.innerHTML = `💖 Yayyy! Can't wait for my hug, kiss, and all your love this Saturday! 😍`;
    } else {
      final.innerHTML = `
        🙃 Hmm... wrong answer. Let's try again!<br><br>
        Can I have it this Saturday when you see me? 🥹<br><br>
        <button onclick="finalAnswer(true)">Yes</button>
        <button onclick="finalAnswer(false)">No</button>
      `;
    }
  }
  