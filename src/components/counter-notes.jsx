import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    //imageUrl: "https://picsum.photos/200"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   styles = {
  //     fontSize: 30,
  //     fontWeight: "bold"
  //   };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tags"}
        {this.renderTags()}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
