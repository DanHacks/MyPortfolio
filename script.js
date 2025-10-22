document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "Name: Hydan Koech",
    "Hobbies: coding, Piano, Typing",
    "Interests: web development, web security, game dev, UI/UX Designs",
    "Projects: VinLex Photography, NFS 2D Racing, FalconWealth"
  ];

  const typingSpeed = 100; 
  const erasingSpeed = 120; 
  const pauseBetweenLines = 1500; 
  const consoleOutput = document.getElementById("console-output");

  let lineIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function type() {
    const currentLine = lines[lineIndex];

    if (!isErasing) {
      consoleOutput.textContent = currentLine.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentLine.length) {
        isErasing = true;
        setTimeout(type, pauseBetweenLines);
      } else {
        setTimeout(type, typingSpeed);
      }
    } else {
      consoleOutput.textContent = currentLine.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isErasing = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, erasingSpeed);
      }
    }
  }

  type();
});
