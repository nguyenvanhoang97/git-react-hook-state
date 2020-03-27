import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HooksTodo from "./HooksTodo/HooksTodo";
import State from "./StateTodo/State";
import {Container, Col , Row} from "reactstrap"

function App() {
    return (
        <div>
            <HooksTodo/>
            <State/>
        </div>
    );
}

export default App;
