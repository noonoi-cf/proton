import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Accordion, AccordionItem } from 'react-sanfona';


const faqContent=[
    {
        question:"1. Web design aorem apsum dolor sit amet?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"2. Graphic design aorem apsum dolor ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"3. Developement aorem apsum dolor sit amet ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"4. True Responsiveness consectetuer adipiscing ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"5. Claritas est etiam processus ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
]

const bg = require('../../images/banner/bnr3.jpg')

class Faq1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Faq 1</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="#">Home</Link></li>
                                        <li>Faq 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full overlay-white-middle content-inner" >
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h3 className="title">Do you have Questions?</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30"> 
                                        <div className="faq-video">
                                            <Link className="play-btn popup-youtube" to="/https://www.youtube.com/watch?v=_FRZVScwggM">
                                            <i className="flaticon-play-button text-white"></i></Link>
                                            <img src={require("../../images/about/pic5.jpg")} alt="" className="img-cover radius-sm"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <Accordion className="accordian dlab-accordion faq-1 box-sort-in m-b30 faq">
                                            {
                                                faqContent.map(faq =>(
                                                    <AccordionItem title={faq.question} className="accodion-title" titleTag="h6">
                                                        {faq.answer}
                                                    </AccordionItem>  
                                                ))
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20"> 
                                                <Link to="#" className="icon-cell"><i className="flaticon-factory"></i></Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Make it Simple</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20"> 
                                                <Link to="#" className="icon-cell"><i className="flaticon-worker"></i></Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">Unique design</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                                            <div className="icon-md text-primary m-b20"> 
                                                <Link to="#" className="icon-cell"><i className="flaticon-settings"></i></Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte">True Responsiveness</h5>
                                                <p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>                
            </>
        )
    }
}
export default Faq1;