import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='card shadow p-5'>
                <div className='d-flex justify-content-between'>
                    <h2>Profile</h2>
                    <button className='btn btn-outline-info'  onClick={() => setOpen(!open)}>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <Collapse in={open}>
                    <div>
                        <label htmlFor='profile' className='text-center mb-2 mt-3'>
                            <input type="file" id="profile" style={{ display: "none" }} />
                            <img
                                className='rounded'
                                src="https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg" alt="" width={"200px"} height={"200px"} />
                        </label>
                        <div>
                            <div className='mt-3'>
                                <input type="text" className='form-control' placeholder='Github Link' />
                            </div>
                            <div className='mt-3 mb-3'>
                                <input type="text" className='form-control' placeholder='Linkedin Link' />
                            </div>
                            <button className='btn btn-success rounded w-100'>Update</button>
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Profile