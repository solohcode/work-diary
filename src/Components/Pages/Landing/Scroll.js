import React, { Component } from 'react'
import { Image} from 'antd'


// images // 
import m2 from '../../../Images/users/u2.jpg' 
import m3 from '../../../Images/users/u3.jpg' 
import m4 from '../../../Images/users/u4.jpg' 
import m5 from '../../../Images/users/u5.jpg' 
import m6 from '../../../Images/users/u13.jpg' 
import m7 from '../../../Images/users/u7.jpg' 


class Scroll extends Component {
    render() {

      

        return (
            <div>

               <div class="container-fluid mt-3 d-none d-md-block">
                   <br/>
                   <div class="row">
                            <div className=" mb-2 col-12 text-center">
                                <h4 class="">Used by Many <span className="	fas fa-globe-africa text-gray"/></h4>
                            </div>
                        </div>
                <div class="row">
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m7}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m2}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m3}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m4}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m5}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>
                    <div class="col-md-2">
                        <Image
                            width="100%"
                            height="100%"
                            src={m6}
                            placeholder={
                            <Image
                                preview={true}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                width={200}
                            />
                            }
                        />
                    </div>

                </div>
                    
               </div>


                    


            </div>
        )
    }
}

export default Scroll
