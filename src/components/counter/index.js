import { Component } from "react"

import "./index.css"

class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }
  reset=()=>{
    this.setState(()=>({count:0}))
  }
 useEffect=((event)=>{
  document.title=event.target.count
 })
  render() {
    const { count } = this.state
    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button reset"onClick={this.reset}>
            Reset....
          </button>
        </div>
      </div>
    )
  }
}

export default Counter