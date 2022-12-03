window.onload = () => {
  const countNumber = document.getElementById('count__number-js');
  const increasebtn = document.getElementById('count__btn-increase-js');
  const decreaseBtn = document.getElementById('count__btn-decrease-js');
  const resetbtn    = document.getElementById('count__btn-reset-js');

  function checkState(element) {
    let currentValue = Number(element.innerText);

    if(currentValue > 0) 
      element.setAttribute('data-state', 'increase');
    else if(currentValue < 0) 
      element.setAttribute('data-state', 'decrease');
    else 
      element.setAttribute('data-state', 'reset');
  }

  function checkValue(target) {
    let currentNumber = Number(countNumber.innerText);

    if(target.id.includes('increase')) 
      countNumber.innerText = currentNumber + 1;
    else if(target.id.includes('decrease')) 
      countNumber.innerText = currentNumber - 1;
    else 
      countNumber.innerText = 0;
  }

  function changeValue({target}) {
    checkValue(target);
    checkState(countNumber);
  }

  decreaseBtn.addEventListener('click', changeValue);
  resetbtn.addEventListener('click', changeValue);
  increasebtn.addEventListener('click', changeValue);
}