import React, { PropTypes } from 'react';
import { connect } from "react-redux";

class HomeView extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.dispatch({
      type: "ADD"
    })
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Basic Redux Kit</h1>
        <h4>To close the devtools use <span className="s">ctrl+i</span>.</h4>
        <h4>You can define <span className="s">defaultIsVisible</span> in <span className="s">containers/DevTools.js</span></h4>
        <button className="btn" onClick={ this.onClick }>Count <span className="s">{this.props.count}</span></button>
      </div>
    );
  }
}

export default connect(
  ( state, props ) => ({
    count: state.counter.count
  })
)(HomeView)
