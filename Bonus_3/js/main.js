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
            // Bonus_3: aggiunte parti relative al bonus_3
            addNewTodo() {
                if (this.newTodoText == '') { // se l'utente non ha digitato nulla, allora lo avviso di inserire una parola
                    alert('Errore! Devi inserire una parola!')
                } else {
                    this.newTodoText.trim(); // Bonus_3: cancello spazi prima e dopo la parola inserita dall'utente
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