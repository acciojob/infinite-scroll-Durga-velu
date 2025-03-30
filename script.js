//your code here!

let container = document.querySelector('#infi-list');
let item = 1;

window.addEventListener('scroll', function(){
  let scrollY = window.scrollY;
  let innerHeight = window.innerHeight;
  let offsetHeight = document.body.offsetHeight;
  
  if (scrollY + innerHeight >= offsetHeight) {
    infiniteScroll(2);
  }
});

infiniteScroll(10);

function infiniteScroll(num) {
  for (let i = 0; i < num; i++) {
    let li = document.createElement('li');
    li.innerText = 'List Item ' + item++;
    container.appendChild(li);
  }
}
