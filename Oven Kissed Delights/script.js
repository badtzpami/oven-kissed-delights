
const toggleButton = document.querySelector('.toggleBtn');
const toggleButtonIcon = document.querySelector('.toggleBtn i');
const dpMenu=document.querySelector('.dropdownMenu')

toggleButton.onclick=function(){
  dpMenu.classList.toggle('open')
  const isOpen = dpMenu.classList.contains('open')

  toggleButtonIcon.classList=isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}
