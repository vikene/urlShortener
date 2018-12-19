import React, {Component} from 'react';
import axios from 'axios';


export default class u extends Component{
    constructor(){
        super();
        this.state = {
            timeRemaining: 5
        };

    }
    componentDidMount(){
        const {hashLink} = this.props.match.params;
        if (hashLink.length == 0){
            alert("Please provide a proper link")
        }
        let url = "https://8523oudczf.execute-api.us-east-1.amazonaws.com/dev/u/"+hashLink
        axios.post(url,{})
             .then(res =>{
                 let redirectURL = res.data.message
                 if(redirectURL === "No such url exists!"){
                     console.log("No such URL exists ? how about creating one ?")
                 }
                 else{
                    window.location = redirectURL;
                 }
                 
             })
             .catch(err =>{
                 console.log("Error occured"+err)
             })
    }
    render(){
        const {hashLink} = this.props.match.params;
        console.log(hashLink)
        return(
            <div>
                <h1></h1>
            </div>
        )
    }
}