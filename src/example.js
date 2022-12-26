import React, {Component} from 'react'
import axios from 'axios'
export default class example extends Component{
    state={persons:[]}
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(rese=>{
            const persons=rese.data;
            this.setState({persons})
        })
    }
    render(){
        return(
              <>
              {

              this.state.persons.map(person=><li key={person.id}>person.name</li>)
              }
              </>
        )
    }
}