import React from 'react'


class Fetch extends React.Component{
    constructor(){
        super()
        this.state = {
            data: [],

        }
    }

    componentDidMount(){
        fetch('https://api.erithay.com/things')
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => {
                console.log(data)
                this.setState({data:data})
            }
                )
    }

    render(){
        // console.log(this.state.data)
        return(
            <div>{this.state.data.name}</div>
        )
        
    }

}


export default Fetch