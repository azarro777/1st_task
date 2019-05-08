import React, {Component} from 'react';
import {ProductConsumer} from "./TaskDescription";
import Product from "./Product";



export default class TaskList extends Component {
    render() {

        return <React.Fragment>
            <div className="container">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Tags</th>
                        <th>Actual effort</th>
                        <th>Estimated effort</th>
                        <th>Due date</th>
                    </tr>
                    </thead>
                    <ProductConsumer>
                        {value => {
                            return value.task.map(product => {
                                if (product.obj_status === "active") {
                                return <Product key={product.id} tasks={product}/>
                            }})
                        }
                        }
                    </ProductConsumer>
                </table>
            </div>
        </React.Fragment>
    }
}

