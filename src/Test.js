import React from 'react';
import ReactDom from 'react-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[],
            todo:''
        }
    };

    onValueChange=(e)=>{
        const todo=e.target.value;
        this.setState({todo})
    };

    removeItem = (props)=> {
        this.state.todoList.splice(props, 1)
        this.setState({todoList: this.state.todoList})
        console.log(this.state.todoList)
    };

    onSubmit=(e)=>{
        e.preventDefault();
        const {todoList,todo}=this.state
        this.setState({todoList:[...todoList,todo]})
        this.setState({todo:''})
        console.log(this.state.todoList)
    };

    render(){
        const myList=this.state.todoList.map((todo,index)=>(
            <li key={index}>
                {todo}
                <button onClick={()=>this.removeItem(index)}>x</button>
            </li>
        ))
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.onValueChange}
                        autoFocus
                        placeholder='todo'
                    />
                </form>
                <ol>
                    {myList}
                </ol>
            </div>
        )
    };
};

export default TodoList;
