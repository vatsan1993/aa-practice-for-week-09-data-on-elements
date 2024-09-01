// Your code here
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('#add').addEventListener('click', (event) => {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let type = document.querySelector('#type').value;
    let li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('data-type', type);
    document.querySelector('#shopping-list').appendChild(li);
  });
});
