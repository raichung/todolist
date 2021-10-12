import React, {Component} from "react"

/*import Product from './Product'
import productsData from './schoolProducts'*/

/*import Joke from './Joke.js'
import jokesData from './jokesData'*/

/*import ContactCard from './ContactCard'*/

import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    /*this.setState(prevState => {
      if (this.state.todos.completed === true) {
        this.state.todos.completed: false
      }
      else {
        this.state.todos.completed: true
      }
    })*/
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} /> )

    return (
      <div className="todo-list">
        {todoItems}
        
      </div>
    )
  }
}

export default App

/*class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn : false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "You are currently logged in" : "You are currently logged out"
    return (
      <div>
        <h1>{displayText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default App*/

/*class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default App*/

/*class App extends Component {
  render() {
    return (
      <div>
        <img onMouseOver={() => console.log("Hovered")} src="https://www.fillmurray.com/g/200/200" />
        <br />
        <br />
        <button onClick={() => alert("I was clicked")}>Click Me</button>
      </div>
    )
  }
}

export default App*/

/*class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    let session
    if (this.state.isLoggedIn)
      session = "in"
    else
      session = "out"
    return (
      <h2>You are currently logged {session}</h2>
    )
  }
}

export default App*/

/*class App extends Component {
  constructor () {
    super()
    this.state = {
      name: "John",
      age: "22"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}
export default App*/


/*function App() {
  const productComponents = productsData.map(item => <Product key={item.id} stuff={item} />)
  return (
    <div>
      {productComponents}
    </div>  
  )
}
 
export default App*/

/*class App extends React.Component {
  render () {
    const productComponents = productsData.map(item => <Product key={item.id} stuff={item} />)
    return (
      <div>
        {productComponents}
      </div>
    )
  }
}

export default App*/

/*function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} ques={joke.ques} ans={joke.ans} />)

  return(
    <div>
      {jokeComponents}
    </div>
  )
}

export default App */

/// function App() {
//   return (
//       <div className = "contacts">
        
//         <ContactCard
//           contact={{name:"Mr Jack", imgUrl:"https://placekitten.com/200/300",
//           phone:"123 765 234", email:"kittenkitten@yahoo.com"}} 
//         />

//         <ContactCard 
//           contact={{name:"Ms Jannie", imgUrl:"https://placekitten.com/400/300",
//           phone:"123 654 123", email:"kittenkitten@yahoo.com"}}
//         />

//         <ContactCard 
//           contact={{name:"Ms Jannie", imgUrl:"https://placekitten.com/200/400",
//           phone:"123 654 123", email:"kittenkitten@yahoo.com"}}
//         />

//         <ContactCard
//           contact={{name:"Ms Jannie", imgUrl:"https://placekitten.com/600/500",
//           phone:"123 654 123", email:"kittenkitten@yahoo.com"}} 
//         />

        
//       </div>
//   )
// }

// export default App

