
for (let i = 0; i < 15; i++) {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.opacity = Math.random();
  document.body.appendChild(heart);
}


const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');


noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


yesBtn.addEventListener('click', () => {
  document.body.innerHTML = `
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;">
      <h1 style="color:#ff3366;font-size:2.5rem;">Yayyy!!! 💕</h1>
      <p style="font-size:1.5rem;color:#ff6699;">I knew you'd say yes 😍</p>
      <img src="https://i.imgur.com/ptd5ZcD.png" style="width:150px;margin-top:20px;">
      <audio autoplay loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_b6c51fa3b3.mp3?filename=romantic-ambient-112986.mp3" type="audio/mpeg">
      </audio>
  </div>`;
});
