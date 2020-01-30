// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOuput/UserOutput';
class App extends Component {


  state = {
        persons: [
          {id: 'sjfhsf', name: 'Max', age:28 },
          {id: 'kjkj', name: 'Milovan', age:38 },
          {id: 'rwrywi', name: 'Milanka', age:18 }
        ],
        otherState: 'some other state',
        showPerson: false,
        userInput: ''
 }

 nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id
   });

   const person = {...this.state.persons[personIndex]};
   person.name = event.target.value;

   const persons = this.state.persons;
  persons[personIndex] = person;

   this.setState( { persons: persons } )

 }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age:78 },
        { name: 'Milovan', age:38 },
        { name: 'Milanka', age:48 }
      ]
    });
  }

 deletePersonHandler = (personIndex) => {
  //  const persons = this.state.persons.slice();  // jedan nacin kopiranja stejta
  const persons = [...this.state.persons]  // drugi bolji nacin
   persons.splice(personIndex,1);
   this.setState({persons: persons})

 }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow })
  };

    // state = {
    //   userInput: ''
    // }

  inputChengedHandler = ( event ) => {
    this.setState({userInput: event.target.value})
  };

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({userInput: updateText});
  }
  render () {
    const style = {
      backgroundColor : 'white',
      border: '1px solid blue',
      marginBottom: '30px',
      padding: '8px',
      borderRadius: '6px',
      color: 'black',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPerson) {


      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={ (event) => this.nameChangedHandler(event, person.id)}/>
          })}
         
      </div> 
      );
      style.backgroundColor = 'red'

    }



    const charList = this.state.userInput.split('').map( (ch, index) => {
      return <Char 
                  character={ch}
                  key={index}
                  clicked={() => this.deleteCharHandler(index)} />;
    } );

    return ( 

      <div className = "App">
      <h1> HELLO from REACT APP </h1> 
      <p>this is rely working</p>
      <button style={style} onClick={this.togglePersonHandler} >Toggle persons</button>
      {persons}
      <hr />
          <input type="text"
          onChange={this.inputChengedHandler}
          value={this.state.userInput}/>
      <hr />
    <p>{this.state.userInput}</p>
    <Validation inputLength={this.state.userInput.length} />
    {charList}
      </div >
      
    );
  }
}

// export default App;
export default App;

