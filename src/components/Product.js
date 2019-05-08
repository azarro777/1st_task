import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "./TaskDescription";

export default class Product extends Component{
    render(){
        const {id, name, tags, actual_effort, estimated_effort, due_date} =
        this.props.tasks;
        return(
            <ProductConsumer>
                {(value)=>
                    <tbody>
                    <tr>
                        <Link to="/Details">
                        <th onClick={()=> value.handleDetail(id)}>{name}</th>
                        </Link>
                        <th>{tags}</th>
                        <th>{actual_effort}</th>
                        <th>{estimated_effort}</th>
                        <th>{due_date}</th>
                    </tr>
                    </tbody>
                }
            </ProductConsumer>
        )
    }
}

