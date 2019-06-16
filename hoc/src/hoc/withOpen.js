import React, { Component } from "react";
const withOpen = WrappedComponent => {
  return class extends Component {
    state = {
      open: false
    };

    toggle = () => {
      this.setState({ open: !this.state.open });
    };

    render() {
      return (
        <WrappedComponent
          open={this.state.open}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

export default withOpen;
