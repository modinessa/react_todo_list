import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


export default class TodoInput extends Component {

    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <FontAwesomeIcon className="fs-4" icon={faBook} />
                            </div>
                        </div>
                        <input 
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                <button
                    type="submit"
                    className={
                        editItem ? 'btn btn-block btn-success text-capitalize mt-3 w-100' : 
                        'btn btn-block btn-primary text-capitalize mt-3 w-100'
                    }>
                    {editItem ? "edit item" : "add item"}
                </button>
                </form>
            </div>
        )
    }
}