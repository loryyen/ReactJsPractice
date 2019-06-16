import React, {
  Component
} from "react";

export default WrappedComponent =>
  class extends Component {
    state = {
      open: false
    };

    onSubmit = e => {
      console.log("todo");
    };

    render() {
      return <WrappedComponent {
        ...this.props
      }
      />;
    }
  };