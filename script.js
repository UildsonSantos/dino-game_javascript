const dino = document.querySelector( '.dino' );
const backgroun = document.querySelector('.background');
let isJumping = false;
let position = 0;

//variavel do tipo 'const' não pode ser subscrita a 'let' sim

// console.log(dino);
function handleKeyUP(event) {
    if (event.keyCode === 32) {
      if (!isJumping) {
        jump();
      }
    }
}

function jump() {

  isJumping = true;

  let upInterval = setInterval(() => {
    // codigo para ser repetido a cada 20ms
    if ( position >= 150) {
      clearInterval(upInterval);

      // Descendo
      let downInterval = setInterval(() => {
        // codigo para ser repetido a cada 20ms
        
        if ( position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
    
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 15);
    } else {

      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 15);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  backgroun.appendChild(cactus);

  let leftInterval = setInterval(() => {
    
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      backgroun.removeChild(cactus);
    } else  if (cactusPosition > 0 && cactusPosition < 60 && position < 60){

      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo </h1>';
    }else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 40);
// executa uma função apos um determinado tempo
  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener( 'keyup' , handleKeyUP);