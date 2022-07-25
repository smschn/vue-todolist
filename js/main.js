var app = new Vue ({
        el: '#app',
        data: {
            todos: [
                {
                    text: 'Primo elemento della lista',
                    done: false
                },
                {
                    text: 'secondo elemento della lista',
                    done: true
                },
                {
                    text: 'terzo elemento della lista',
                    done: false
                }
            ],
            newTodo: {
                text: '',
                done: false
            },
        },
        methods: {
            addNewTodo() {
                this.todos.push(this.newTodo);
                console.log(this.todos);
            },
            removeTodo(indexParameter) {
                console.log(`Before: ${this.todos}`);
                this.todos.splice(indexParameter, 1);
                console.log(`After: ${this.todos}`);
            }
        }
})