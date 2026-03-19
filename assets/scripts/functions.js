// ============================================
// PARTICLES ANIMATION
// ============================================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const colors = [
    'rgba(124,58,237,',  // purple
    'rgba(201,168,76,',  // gold
    'rgba(234,88,12,',   // orange
    'rgba(212,212,216,', // silver
];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// ============================================
// TYPEWRITER EFFECT
// ============================================
const text = "Desenvolvedor Web Front End Wordpress";
const speed = 42;
const startDelay = 1400;
let index = 0;

function typeWriter() {
    const phraseText = document.getElementById('phrase-text');
    const cursor = document.getElementById('cursor');

    if (index < text.length) {
        phraseText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        cursor.style.display = 'none';
    }
}

setTimeout(() => {
    document.getElementById('cursor').style.display = 'inline-block';
    typeWriter();
}, startDelay);

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();