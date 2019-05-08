import React, {Component} from "react";
import {ProductConsumer} from "./TaskDescription";
import {Link} from "react-router-dom";



export default class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {name, description} = value.tasks;
                    return (
                        <div className="container py-5">
                            <div className="jumbotron">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center
                                       text-slanted text-blue my-5">
                                        <h1>{name}</h1>
                                    </div>
                                </div>
                                <p className="text-muted lead text-center">
                                    {description}</p>
                                <Link to="/">
                                    <button>back home</button>
                                </Link>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


