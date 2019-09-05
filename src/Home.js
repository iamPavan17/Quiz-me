import React, { Component } from 'react'
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            gender: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const letters = /"((?:\\.|[^"\\])*)"/;
        if(this.state.name.match(letters)) {
            const genderCheck = this.state.name.slice(1, this.state.name.length-1);
            let url = `https://gender-api.com/get?name=${genderCheck}&key=SBrwJgoFzvJcoBbmMr`;
            axios.get(url)
            .then(response => {
                console.log(response.data.gender)
                this.setState({gender: response.data.gender})
            })
        }
    }

    render() {
        if(this.state.gender === 'male' || this.state.gender === 'female') {
            return <Redirect to='/quiz' />
        }
        return (
            <div className='text-center container p-5' style={{marginTop: '9%'}}>
                <h4><strong>READY TO TRY</strong></h4>
                <h1 style={{fontSize: '80px'}}><strong>JavaScript?</strong></h1><br></br>
                <p style={{fontSize: '19px'}} className='container'>Begin here by typing in your name surrounded by quotation marks, and ending with a semicolon. <br></br>For example, you could type the name "Jamie"  and then hit enter.</p>
                <form className="ui massive form" onSubmit={this.handleSubmit}>
                <div className="equal width fields">
                <div className="field">
                    <input placeholder="Enter your name" name='name' onChange={this.handleChange}/>
                </div>
                </div>
                </form>
                <div style={{marginTop: '21%'}}>
                    <p style={{fontSize: '17px'}}>Built using <MDBIcon fab icon="react"/></p>
                </div>
            </div>
        )
    }
}

export default Home
