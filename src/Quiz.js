import React, { Component } from 'react'
import Form from './Form'
import Loader from 'react-loader-spinner'
import {MDBNavbar, MDBNavbarBrand, MDBIcon} from 'mdbreact'

export class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz: [
                {
                    id: 1,
                    question: 'Javascript is _________ language.',
                    o1: 'Scripting',
                    o2: 'Programming',
                    o3: 'None of these',
                    o4: 'Application',
                    answer: 'Scripting'
                },
                {
                    id: 2,
                    question: 'JavaScript Code is written inside file having extension __________.',
                    o1: '.jsc',
                    o2: '.javascript',
                    o3: '.js',
                    o4: '.jvs',
                    answer: '.js'
                }
            ],
            index: 0,
            marks: 0,
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: true})
        }, 2000)
    }

    handleSubmit(data) {
        // console.log(data);
        let marks = this.state.marks;
        if(data.answer === this.state.quiz[this.state.index].answer) {
            marks++;
        }
        this.setState({index: data.index, marks});
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? 
                    <div>
                        <MDBNavbar color="elegant" dark expand="md">
                            <MDBNavbarBrand>
                            <strong className="black-text"> <h1 className='pl-5'><MDBIcon icon="brain" /> Quiz ME</h1></strong>
                            </MDBNavbarBrand>
                            
                        </MDBNavbar>

                        <div className=' p-5'>
                            {this.state.index < this.state.quiz.length? <Form quiz = {this.state.quiz} index={this.state.index} handleSubmit={this.handleSubmit}/>: <div><h3>You have scored {this.state.marks}</h3> <a href='/' onClick={() => {
                                this.props.history.push('/');
                            }}>Try again?</a></div>}    
                        </div>  
                    </div>
                    : 
                    <div className='text-center' style={{marginTop: '20%'}}>
                        <Loader
                            type="BallTriangle"
                            color="black"
                            height={100}
                            width={100}
                        />
                        <p className='pt-3'>Preparing Quiz...</p>
                    </div>
            }
            </div>
        )
    }
}

export default Quiz
