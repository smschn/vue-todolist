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
                    done: false
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
            }
        }
    })