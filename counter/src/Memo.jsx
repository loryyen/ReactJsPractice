import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { add, minus, addAnyNum } from "./actions";

class Memo extends Component {

    onClick = () => {
        this.props.actions.add();
    }

    plusN = (n = 7) => {
        this.props.actions.addAnyNum(n);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.selfCount}
                <button onClick={this.onClick}>+1</button>
                <button onClick={() => this.plusN()}>+n</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selfCount: state.count
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ add, minus, addAnyNum }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null,)(Memo);