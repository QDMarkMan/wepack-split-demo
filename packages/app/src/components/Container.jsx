import React from "react"

export default class Container extends React.Component{
  render() {
    return (<div>
      <h2>Container</h2>
      {this.props.children}
    </div>)
  }
}