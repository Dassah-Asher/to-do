import React from "react";
import "./App.css";

class  App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            newItem: "",
            list:[]
        }
    }

    addItem(todoValue) {
        if (todoValue !== "") {
            const newItem ={
                id: Date.now(),
                value: todoValue,
                isDone: false
            };
            const list=[...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            });
        }
    }

deleteItem(id){
    const list =[...this.state.list];
    const updatedlist = list.filter(item =>item.id);
    this.setState({list: updatedlist})
}

updateInput(input){
    this.setState({newItem: input});
}
 

    render(){
        return(
            <div>
                <h1 className="app-title">To Do App</h1>
                <div className="container">
                    Add Item
                    <br/>
                    <input type="text" className="input-text" placeholder="Enter To Do" 
                    required
                    value={this.state.newItem}
                    onChange={e => this.updateInput(e.target.value)}/>
     
                    <button
                     classsName="add-btn"
                     onClick={() =>this.addItem(this.state.newItem)}
                     disabled={!this.state.newItem.length}
                     >Add Todo</button>
                    <div className="List">
                        <ul>
                            {this.state.list.map(item =>{
                                return(
                                  <li key={item.id}>
                                      <input 
                                      type="checkbox"
                                      name="idDone"
                                      checked={item.isDone}
                                      onChange={()=>{}}
                                      />
                                      {item.value}
                                      

                                      </li>
                                );
                            })}
                            <li>
                                <input type="checkbox" name="" id=""/>
                                Play Music
                                
                            </li>
                        </ul>
                    </div>
                </div>
                
     
            </div>
         );
    }
    
}

export default App