var app = new Vue ({
        el: '#app',
        data: {
            todos: [
                {
                    text: 'Primo elemento della lista',
                    done: false
                },
                {
                    text: 'Secondo elemento della lista',
                    done: true
                },
                {
                    text: 'Terzo elemento della lista',
                    done: false
                }
            ],
            newTodoText: ''
        },
        methods: {
            // Bonus_3: aggiunte parti relative a questo bonus
            addNewTodo() {
                if (this.newTodoText == '') {
                    alert('Errore! Devi inserire una parola!')
                } else {
                    this.todos.push({
                        text: this.newTodoText,
                        done: false
                    });
                    this.newTodoText = '';
                }
            },
            removeTodo(indexParameter) {
                this.todos.splice(indexParameter, 1);
            },
            // Bonus_2: cambiare il valore di 'done' del 'todo' corrispondente
            changeTodoStatus(indexParameter) {
                if (this.todos[indexParameter].done == false) {
                    this.todos[indexParameter].done = true;
                } else {
                    this.todos[indexParameter].done = false;
                }
            }
        }
})