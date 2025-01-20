let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

function todolistDo() {
    let todolistHTML = '';

    todolist.forEach((value, i) => {
        const { inputTodo, inputDate } = value;
        const htmlTodo = `
        <p>
            ${inputTodo} (${inputDate})
            <button onclick="removeTodo(${i})">Hapus</button>
        </p>`;
        todolistHTML += htmlTodo;
    });

    document.querySelector('#js-todolist').innerHTML = todolistHTML;
}

function addTodo() {
    const inputElement = document.querySelector('#js-input');
    const inputTodo = inputElement.value;
    const dateElement = document.querySelector('#js-dateInput');
    const inputDate = dateElement.value;

    if (inputTodo && inputDate) {
        todolist.push({
            inputTodo,
            inputDate
        });

        localStorage.setItem('todolist', JSON.stringify(todolist));

        inputElement.value = ''; 
        dateElement.value = ''; 
        todolistDo();
    } else {
        alert('Harap masukkan rencana dan tanggal!');
    }
}

function removeTodo(index) {
    todolist.splice(index, 1); 
    localStorage.setItem('todolist', JSON.stringify(todolist)); 
    todolistDo(); 
}


todolistDo();
