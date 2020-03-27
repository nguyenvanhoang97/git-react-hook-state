import React, {useState} from 'react';
import "./../App.css";
import data from './../data';
import {Container, Col , Row} from "reactstrap"

const Todos = data.Todos

function Todo({ todo, index, removeTodo }) {
    return (
        <Row className="todo-list">
            <Col sm={10} key={todo.id}>
                {todo.text}
            </Col>
            <Col sm={2}>
                <button onClick={() => removeTodo(index)}>Xóa</button>
            </Col>
        </Row>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function HooksTodo() {
    const [todos, setTodos] = useState(Todos);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <Container fluid className="app">
            <Col sm={3}></Col>
            <Col sm={6} className="from-todo">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
            </Col>
            <Col sm={3}></Col>
        </Container>
    );
}

export default HooksTodo;
