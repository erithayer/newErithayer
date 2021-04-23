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
            .then(data =>  console.log(data))
    }
    
    render(){
        return(
            <div>hello</div>
        )
        
    }

}


export default Fetch