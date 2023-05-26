import { Component } from "react";
export class Filter extends Component{




    render() {
        const { state } = this.props;
    
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