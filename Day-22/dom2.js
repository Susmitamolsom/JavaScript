  function generateNumbers() {
    let topHead = document.querySelector('.head');
    topHead.style.display = 'grid';
    topHead.style.justifyContent = 'center';

    let number = document.getElementById('ng');
    number.style.fontSize = '25px';
    number.style.listStyle = 'none';
    number.style.fontStyle = 'bold';

    let bulletList = document.getElementById('list1');
    bulletList.style.listStyle = 'none';
    bulletList.style.textDecoration = 'underline';

    let list2 = document.getElementById('auth');
    list2.style.listStyle = 'none';

    let body = document.querySelector('body');
    body.style.display = 'grid';
    body.style.justifyContent = 'center';

    let container = document.getElementById('numberContainer');
    container.style.display = 'grid';
    container.style.justifyContent = 'center';
    container.style.gridTemplateColumns = 'repeat(6, 1fr)';
    container.style.gap = '5px';
    container.style.width = '500px';
  
    for (let i = 0; i <= 101; i++) {
      let numberBox = document.createElement('div');
      numberBox.className = 'numberBox';
      numberBox.textContent = i;
  
      if (i % 2 === 0) {
        numberBox.style.backgroundColor = 'lightgreen';
      } else if (i % 2 !== 0) {
        numberBox.style.backgroundColor = 'yellow';
      }
  
      if (i > 1) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          numberBox.style.backgroundColor = 'red';
        }
      }
  
      numberBox.style.display = 'grid';
      numberBox.style.justifyContent = 'center';
      numberBox.style.alignItems = 'center';
      numberBox.style.width = '70px';
      numberBox.style.height = '60px';
      container.appendChild(numberBox);
    }
  }
  
  generateNumbers();
  