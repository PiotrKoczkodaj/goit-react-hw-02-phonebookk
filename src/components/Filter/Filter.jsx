import { Component } from "react";
export class Filter extends Component{




    render() {
        const { state } = this.props;
    console.log(state)
        return (
            <form>
                <label>
                    Find contact
                </label>
                <input></input>
            </form>
        )
    }
}