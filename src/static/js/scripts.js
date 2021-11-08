const filterCards = () => {
  const selectAuthors1 = document.querySelector('#authors1 .dropdown-menu');
  const selectAuthors2 = document.querySelector('#authors2 .dropdown-menu');
  const cards1 = document.querySelectorAll('#authors1 .item');
  const cards2 = document.querySelectorAll('#authors2 .item');
  let selected1 = 'all';
  let selected2 = 'all';

  const filter = (select, cards, selected) => {
    select.addEventListener('click', event => {
      let target = event.target;
    	let liNode = target.nodeName.toUpperCase();
      while (liNode != 'LI') {
        target = target.parentNode;
        liNode = target.nodeName.toUpperCase();
      }
      selected = target.id;
      select.previousElementSibling.innerText = target.innerText;
      cards.forEach(item => {
        if (selected === item.getAttribute('data-status') || selected === 'all') {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      })
    })
  }
  filter(selectAuthors1, cards1, selected1);
  filter(selectAuthors2, cards2, selected2);
}

window.onload = function () {
  filterCards();
}