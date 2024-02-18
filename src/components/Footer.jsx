import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 bg-success p-3'>
                <div style={{ width: "400px" }}>
                    <Link to={'/'}>
                        <h4>
                            <i class="fa-brands fa-stack-overflow me-3"></i>
                            Project Fair
                        </h4>
                    </Link>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil, porro exercitationem? Rerum sapiente, veritatis
                        vero maxime reprehenderit distinctio cum esse veniam,
                        vitae perspiciatis consectetur ut dicta molestias
                        laboriosam explicabo odio.</h6>
                </div>
                <div>
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color:"black"}} ><h6>Home</h6></Link>
                    <Link to={'/login'} style={{ textDecoration: 'none',color:"black" }}> <h6>Login</h6></Link>
                    <Link to={'/register'} style={{ textDecoration: 'none', color:"black" }}><h6>Register</h6></Link>

                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Watch</h6>
                    <h6>React bootstrap</h6>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" name="" id=""
                            placeholder='Enter your email' className='form-control' />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4 mt-3'>
                        <i class="fa-brands fa-instagram" sty></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>

                </div>
            </div>
            <div className='text-center'>
                <p>Copyright &#169; 2024. Project fair built with React</p>
            </div>
        </>
    )
}

export default Footer