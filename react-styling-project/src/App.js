import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit/Fruit';

class App extends Component {
  state={

    fruits:[],
    fruit:'',
    showFruit:false
  }
  deletePersonHandler = (fruitIndex) =>{
    const fruits=this.state.fruits;
    fruits.splice(fruitIndex,1);
    this.setState({fruits: fruits})
  }
  changeHandler=(event)=>{
    var fruitName=event.target.value;
    this.setState({fruit:fruitName})
  }
  inputFruitHandler=(event)=>{
    event.preventDefault();
      const fruit=this.state.fruit;
      if(fruit==''){
        this.state.showFruit=false;
      }
      else{
        this.state.showFruit=true;
        const fruits=[...this.state.fruits];
        var string=fruit.split("-");
        
        fruits.push({
          name:string[0],
        quantity:string[1]
        });
        console.log(fruits);
        this.setState({
          fruit:'',
          fruits:fruits
      })
      }
     
  }
  render() {
    let fruits=null;
    if(this.state.showFruit){
    fruits=(
      <div>
        {
          this.state.fruits.map((fruit,index)=>{
            return <Fruit 
            click={()=>this.deletePersonHandler(index)}
            name={fruit.name}
            quantity={fruit.quantity}/>
          })}
        </div> 
      );
  } 
  console.log(fruits);
    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <br/>
          <form onSubmit={this.inputFruitHandler} >
            <input type="text" onChange={this.changeHandler}  placeholder="Fruit-Name" /><br/><br/>
            <input type="submit"/>
          </form>
        
        </div>
        <br/>
        {fruits}
        
      </div>
    );
  }
}

export default App;
