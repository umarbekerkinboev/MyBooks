// Select elements
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const addBtn = document.querySelector('.btn');
let tableBody = document.querySelector('.table tbody');
const deleteBtn = document.querySelector('.delete-btn');

// Add input value to the table
addBtn.addEventListener('click', () => {
  const tr = document.createElement('tr');
  const titleTd = document.createElement('td');
  const authorTd = document.createElement('td');
  const deleteBtnTd = document.createElement('td');
  titleTd.innerText = titleInput.value;
  authorTd.innerText = authorInput.value;
  deleteBtnTd.innerHTML = `<button class="delete-btn">X</button>`;
  tr.appendChild(titleTd);
  tr.appendChild(authorTd);
  tr.appendChild(deleteBtnTd);
  tableBody.appendChild(tr);
  titleInput.value = '';
  authorInput.value = '';
});

// Delete book name from the table
tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const row = event.target.closest('tr');
    row.remove();
  }
});
