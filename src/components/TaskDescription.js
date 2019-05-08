import React, {Component} from 'react';
import tasks from '../data/tasks';


const ProductContext = React.createContext();


class ProductProvider extends Component{
    state ={
        task: [],
        tasks: tasks
    };

    componentDidMount(){
        this.setTask();
    }

    setTask = () =>{
      let tempTask = [];
      tasks.forEach(item=>{
          const singleItem = {...item};
          tempTask = [...tempTask, singleItem];
      });
        this.setState(()=>{
            return { task: tempTask}
        })
    };

    getItem = (id) =>{
        const product = this.state.task.find(item => item.id === id);
        return product
    };

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {tasks: product}
        });
    };

    render(){
        return(
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail
                }}
            >

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};