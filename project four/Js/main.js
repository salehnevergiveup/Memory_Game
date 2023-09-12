for (let i = 0; i < card.length; i++) {
    card[i].style.order = Math.ceil(Math.random() * 12);
  }
  let counter = 0;
  let counter2 = 0;
  let x1;
  let x2;
  for (let i = 0; i < card.length; i++) {
    card[i].onclick = () => {
      card[i].style.transform = "rotatey(180deg)";
      setTimeout(() => {
        card[i].children[0].style = "transition: all 3s ease; filter: grayscale(0)  brightness(120%);"
  
      }, 500);
  
      counter++;
      if (counter === 1) {
        x1 = i;
      }
      if (counter === 2) {
        x2 = i;
        if (x2 === x1) {
          x2 = undefined;
          counter = 1;
        }
      }
      if (counter === 2) {
        if (card[x2].textContent !== card[x1].textContent && card[x1].classList.contains("click") && card[x2].classList.contains("click")) {
          setTimeout(() => {
            card[x1].style.transform = "rotatey(0)";
            card[x2].style.transform = "rotatey(0)";
            card[x1].children[0].style = "filter: grayscale(80%);"
            card[x2].children[0].style = "filter: grayscale(80%);"
          }, 500);
  
        } else {
          card[x1].classList.remove("click")
          card[x2].classList.remove("click")
  
          counter2 += 2;
  
        }
        counter = 0;
      }
      if (counter2 === card.length) {
  
        for (let i = 0; i < card.length; i++) {
          setTimeout(() => {
            card[i].style.order = Math.ceil(Math.random() * 12);
          }, 3100);
          setTimeout(() => {
            card[i].classList.add("click")
            card[i].style.transform = "rotatey(0)";
          }, 3000);
          counter2 = 0;
        }
      }
    }
  }