// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const { v4: uuidv4 } = require{'uuid'};
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  },
});

const formRef = document.querySelector('.js-form');
const cardList = document.querySelector('.js-card-list');
const todos = [];

formRef.addEventListener('submit', onSubmit);
cardList.addEventListener('click', deleteTodo);
cardList.addEventListener('click', onToggleTodo);


function onSubmit(e) {
    e.preventDefault();
    const title = formRef.elements.title.value.trim();
    const task = formRef.elements.task.value.trim();

    if (!title || !task) return  notyf.success('Please fill in all');

    const todo = {
        title,
        task,
        id: todos.length + 1,
    }
    console.table(todo);
    todos.push(todo);
    formRef.reset();
    renderMarkup();
    console.table(todos);

}

// function onSubmit(event) {
//   event.preventDefault();

//   const title = formRef.elements.title.value.trim();
//   const task = formRef.elements.task.value.trim();

//   if (!title || !task) return notyf.error('Please fill in all fields');

//   const todo = {
//     title,
//     task,
//     id: todos.length + 1,
//   };

//   todos.push(todo);
//   formRef.reset();
//   notyf.success('Todo added');

//   renderMarkup();

// }

function deleteTodo(event) {
  const { id } = event.target.dataset;
  // console.log(e.target.dataset.id);

  if (id) {
      const todo = todos.find((todo) => todo.id === id);
      todos.splice(todos.indexOf(todo), 1);
      renderMarkup();
      notyf.success('Todo deleted');
      // alert('Todo deleted');
  };
};



function onToggleTodo(event) {
  const parentElement = event.target.parentNode.parentNode.parentNode;
  console.log(event.target.parentNode.parentNode.parentNode);

  event.target.checked
  ? parentElement.classList.add('bg-success')
  : parentElement.classList.remove('bg-success');
 }


function renderMarkup() {
    cardList.innerHTML = "";
    const markup = todos.map( ({title, task, id}) => `
    <div class="col card w-50">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${task}</p>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Completed
        </label>
      </div>
      <button type="button" class="btn btn-primary js-btn" data-id=${id}>
        Delete
      </button>
    </div>
    </div>`).join('');

    cardList.insertAdjacentHTML('beforeend', markup);
}

console.log('toDo');
