import React, {Component} from 'react';
import data from './../data';
import {Container, Col , Row} from "reactstrap"

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: data.Todos,
            todo: ''
        }
    };

    onChangeTodo = (e) => {
        const todo = e.target.value;
        this.setState({todo})
    };

    removeTodo = (props) => {
        this.state.todoList.splice(props, 1)
        this.setState({todoList: this.state.todoList})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {todoList, todo} = this.state
        this.setState({todoList: [...todoList, {id: this.state.todoList.length, text: todo}], todo: ''})
    };

    render() {
        let elements = this.state.todoList.map((todo, index) => (
            <Row className="todo-list">
                <Col sm={10} key={todo.id}>
                    {todo.text}
                </Col>
                <Col sm={2}>
                    <button onClick={() => this.removeTodo(index)}>Xóa</button>
                </Col>
            </Row>
        ))
        return (
            <Container fluid className="app">
                <Col sm={3}></Col>
                <Col sm={6} className="from-todo">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            value={this.state.todo}
                            onChange={this.onChangeTodo}
                        />
                    </form>
                    {elements}
                </Col>
                <Col sm={3}></Col>
            </Container>
        )
    };
};

export default State;
