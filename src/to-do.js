import React from 'react'
class TODO extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
        this.handeChange=this.handeChange.bind(this)
    }
    handeChange(e){
        this.setState({text: e.target.value})
    }
       
    
    render(){
        return(
<div>
    <h1>TEST APPLICATION</h1>
    <form>
        <label htmlFor='id'>Input Items</label>
        <label>{this.state.text}</label><br/>
        <input id='id' onChange={this.handeChange} value={this.state.text}/>
        <button>Add</button>
    </form>
</div>
        )
        
    }
}
export default TODO
