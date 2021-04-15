import React, { Component } from 'react'

export class Tell extends Component {
    render() {
        return (
            <div>
                <div className="wd-landing-tell mt-big">
                    <br/>
                <div className="text-center text-gray mb-5 mt-big">
                    <span className="mt-3 size-big font-light">ONLINE PORTFOLIO HOLDER</span>
                    <h6 className="px-5 w-75 mx-auto text-center size-big text-silver font-normal">MADE FOR CREATIVES</h6>
                    <h6 className="text-gray font-normal">WITH THE IDEA OF JOB and BUSINESS IMPROVEMENT.</h6>
                </div>
                    <br/>
                <div className="container-fluid mt-5 text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <span className="my-3 size-big fas fa-camera-retro" />
                                        <br/>
                                    <span className="my-5">PHOTOGRAPHERS</span>
                                </div>
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <span className="my-3 size-big fas fa-code" />
                                        <br/>
                                    <span className="my-5">DEVELOPERS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <span className="my-3 size-big fas fa-paint-brush" />
                                        <br/>
                                    <span className="my-5">ARTISTS</span>
                                </div>
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <div className="my-3">
                                        <span className="size-big fas fa-pencil-alt" />
                                        <span className="size-big fas fa-ruler-vertical"/>
                                    </div>
                                    <span className="my-5">DESIGNERS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <div className="my-3">
                                        <span className="size-big fas fa-hard-hat" />
                                        <span className="size-big fas fa-paint-roller"/>
                                    </div>
                                    <span className="my-5">CONSTRUCTORS</span>
                                </div>
                                <div className="h-25 py-3 mx-auto text-light col-5 my-3 border border-light rounded">
                                    <div className="my-3">
                                        <span className="size-big fas fa-hat-cowboy" />
                                        <span className="size-big fas fa-tshirt"/>
                                    </div>
                                    <span className="my-5">FASHIONISTAS</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="text-center my-3">
                        <h6 className="text-gray font-light">made for every entrepreneurs and business personnel <span className="fas fa-gift" /></h6>
                    </div>
                </div>

                </div>
            </div>
        )
    }
}

export default Tell
