import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import './addlink.css';
import axios from 'axios';

export default class AddLink extends Component{
    constructor(){
        super();
        this.state = {
            url : '',
            buttonEnabled: true,
            buttonStyle: 'danger',
            ui: 'addurl',
            redirectionurl: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      }
    getValidationState(){
        let toVal = this.state.url
        if (this.validateUrl(toVal) == true){
            if(this.state.buttonEnabled){
                this.setState({buttonStyle: 'success', buttonEnabled: false})
            }
            return 'success'
        }
        else if(toVal.length > 2){
            if(!this.state.buttonEnabled){
                this.setState({buttonStyle: 'danger', buttonEnabled: true})
            }
            return 'error'
        }
        return null;
    }
    handleChange(e){
        this.setState({url: e.target.value})
    }
    buttonClick(){
        var data = {
            'url': this.state.url
        }
        let fetchData = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: 'cors'
        }
        axios.post("https://8523oudczf.execute-api.us-east-1.amazonaws.com/dev/posturl",data)
        .then(res=>{
            console.log(res)
            this.setState({ui:'success',redirectionurl: res.data.message })
        })

    }
    render(){
        if(this.state.ui == 'addurl'){
            return (
                <div className="addUI">
                    <form>
                        <FormGroup controlid="addurl" 
                            validationState= {this.getValidationState()}
                        >
                        <ControlLabel>URL to shorten</ControlLabel>
                        <FormControl
                            type='text'
                            value = {this.state.url}
                            onChange = {this.handleChange}
                            placeholder = "Enter URL"
                        >
                        </FormControl>
                        </FormGroup>
                    </form>
                    <div className="submitFold">
                        <Button onClick={this.buttonClick} bsStyle={this.state.buttonStyle} disabled={this.state.buttonEnabled}>Shorten</Button>
                    </div>
                </div>
                
            )
        }
        else if(this.state.ui == "success"){
            return (
                <div className="successCard">
                    <div className="card">
                            <img src="./tick.png" style={{width: "30%"}}/>
                            <div className="container">
                            <h3>Share this link</h3>
                            <p>{this.state.redirectionurl}</p>
                            </div>
                        </div>
                </div>
                    
            )
        }
        
    }
}