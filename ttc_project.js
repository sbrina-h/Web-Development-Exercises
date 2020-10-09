var button = document.querySelector('#b');

var boxes = document.querySelectorAll('td')

button.addEventListener('click', function(){
  for (var i = 0; i < boxes.length; i++) {
   boxes[i].textContent = " ";
  }
})


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(){
    if(this.textContent === ' '){
      this.textContent = 'X';
    }else if(this.textContent === 'X'){
      this.textContent = 'O';
    }else {
      this.textContent = ' ';
    }
  })
}
