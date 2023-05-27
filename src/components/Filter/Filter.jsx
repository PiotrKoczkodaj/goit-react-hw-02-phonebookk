import { Component } from "react";
export class Filter extends Component{

    render() {
        const { state,func,funt } = this.props;
    
        const filterUsers = (e) => {
          
          

            
        }
        console.log(state)
        return (
            <form>
                <label>
                    Find contact
                </label>
                <input onChange={func} onKeyDown={funt }></input>
            </form>
        )
    }
}