interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// const todo: {
//     id: number; 
//     title: string; 
//     completed: boolean 
// }[] = [];

const todo: Todo[]=[];
let currentId: number = 1;

function addTodo(title: string): void {
    const newTodo = {id: currentId++, title, completed: false }; //객체 구조 설정
    todo.push(newTodo);
    console.log('Todo added: ', newTodo);
}

addTodo("자바스크립트 공부");
addTodo("타입스크립트 공부");
addTodo("잠자기");

console.log('Todos: ', todo);