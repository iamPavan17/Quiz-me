import React, { Component } from 'react'
import {  Radio } from 'semantic-ui-react'
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdbreact'

export class Form extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state.value);
        let data = {
            answer: this.state.value,
            index: this.props.index + 1
        }
        this.props.handleSubmit(data)
    } 

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <MDBContainer className='p-5'>
                <MDBRow>
                    <MDBCol md="12">
                        <form onSubmit={this.handleSubmit} style={{marginLeft: "25%"}}>
                            <h1>{this.props.index + 1}. {this.props.quiz[this.props.index].question}</h1>
                            <MDBContainer className=' pt-3'>
                                <MDBRow>
                                    <MDBCol md="">
                                        <Radio label={this.props.quiz[this.props.index].o1} value={this.props.quiz[this.props.index].o1} onChange={this.handleChange} checked={value === this.props.quiz[this.props.index].o1}/> 
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="">
                                        <Radio label={this.props.quiz[this.props.index].o2} value={this.props.quiz[this.props.index].o2} onChange={this.handleChange} checked={value === this.props.quiz[this.props.index].o2}/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <Radio label={this.props.quiz[this.props.index].o3} value={this.props.quiz[this.props.index].o3} onChange={this.handleChange} checked={value === this.props.quiz[this.props.index].o3}/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <Radio label={this.props.quiz[this.props.index].o4} value={this.props.quiz[this.props.index].o4} onChange={this.handleChange} checked={value === this.props.quiz[this.props.index].o4}/>
                                    </MDBCol>
                                </MDBRow>
                                
                            </MDBContainer>
                            <MDBBtn color="dark" type="submit">Submit</MDBBtn>
                        </form>
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Form
