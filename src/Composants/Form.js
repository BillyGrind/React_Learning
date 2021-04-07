import React, { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        { txt: "promener le chien", id: uuidv4() },
        { txt: "Coder avec react", id: uuidv4() },
        { txt: "Sport", id: uuidv4() },
    ])

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    const [stateInput, setstateInput] = useState();

    const linkedInput = (e) => {
        setstateInput(e);
    }
    const addToDo = e => {
        e.preventDefault();
        const newArr = [...dataArr]
        const newToDo = {};
        newToDo.txt = stateInput;
        newToDo.id = uuidv4();
        newArr.push(newToDo);
        setDataArr(newArr);
        setstateInput('');
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addToDo(e)} className="mb-3">
                <label htmlFor="" className="form-label mt-3">
                    Chose a Faire
                  </label>
                <input value={stateInput} type="text" className="form-control" id="todo" onInput={e => linkedInput(e.target.value)} />
                <button className="mt-2 btn-primary d-block">
                    Envoyer
                  </button>
                <h2>Liste des choses a faire:</h2>
                <ul className="list-group">
                    {dataArr.map((item) => {
                        return (<Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                        />)
                    })}
                </ul>
            </form>
        </div>);
}
