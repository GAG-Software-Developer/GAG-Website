import React, { Component } from './node_modules/react'
import Navigasi from '../components/Navigasi'
import logo from '../../logo.svg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigasi />
                <Post />
            </div>
        )
    }
}

class Post extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Greeting name="Ivan"/>
                <Timer start="0"/>
            </header>
        )
    }
}

function Greeting(props) {
    return <h1>Halo {props.name}</h1>
  }
  
  class Timer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        time : props.start
      }
    }
  
    //Lifecgyle
    componentDidMount() {
      this.addInterval = setInterval( () => this.increase(), 1000)
      //https://jsonplaceholder.typicode.com/posts
    }
    componentWillUnmount() {
      clearInterval(this.addInterval)
    }
    
    increase() {
      if (this.state.time == 10) {
        this.state.time = 0
      } else {
        this.setState((state, props) => ({
          time: parseInt(state.time) + 1
        }))
      }
    }
    render() {
      return (
      <div>{this.state.time}</div>
      )
    }
  }
  
