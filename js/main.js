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
            addNewTodo() {
                this.todos.push({
                    text: this.newTodoText,
                    done: false
                });
            },
            removeTodo(indexParameter) {
                this.todos.splice(indexParameter, 1);
            },
            changeTodoStatus(indexParameter) {
                if (this.todos[indexParameter].done == false) {
                    this.todos[indexParameter].done = true;
                } else {
                    this.todos[indexParameter].done = false;
                }
            }
        }
})