import React from 'react'
import ReactDOM from 'react-dom'


import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


/*class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Ziggy"/>
        <Greeting />
      </div>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}! </p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "Morning"
    }
    else if (hours < 16) {
      timeOfDay = "Afternoon"
    }
    else if (hours < 20) {
      timeOfDay = "Evening"
    }
    else {
      timeOfDay = "Night"
    }
    return (
      <p>Good {timeOfDay}</p>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))*/

// function App() {

//   let date = new Date(2018, 5, 2, 17)
//   let hours = date.getHours()
//   let timeOfDay
//   const styles = {
//     fontSize: 30
//   }

//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = "blue"
//   } else if (hours > 12 && hours < 16) {
//     timeOfDay = "afternoon"
//     styles.color = "red"
//   } else if (hours > 16 && hours < 20) {
//     timeOfDay = "evening"
//     styles.color = "green"
//   } else {
//     timeOfDay = "night"
//     styles.color = "grey"
//   }


//   return (
//     <h1 style={styles}>Good {timeOfDay}</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))