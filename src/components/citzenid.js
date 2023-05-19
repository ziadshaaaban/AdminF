import './styles/admin.css'
import Side from './side';
import React, { useState, useEffect } from 'react';
import Header from "./header";
import { useNavigate } from 'react-router-dom';

function Citizen() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, []);

    let token = localStorage.getItem("token")

    const [usersd, setUserd] = useState([]);
    const [userkey, setUserkey] = useState('');
    const [find, setFind] = useState('')

    const [show, toggleShow] = useState(false);
    async function takekey(key) {
        setUserkey(key)
    }
    const [pre, setPre] = useState(false)
    const [messa, setMessa] = useState("NaN")
    async function search(userkey) {
        setRegister({ isRegister: false })
        setIsLoading(true)
        setPre(false)
        setMessa("NaN")
        fetch(`https://backendssh.vercel.app/admin/citizen/` + userkey, {
            method: "get", headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            })
            .then((userData) => {
                setUserd(userData.user)
                setRegister({ isRegister: true })
                setIsLoading(false)
                setPre(userData.user.precedent)

            })
            .catch((err) => {
                let cit = {
                    "_id": "NAN",
                    "first_name": "NAN",
                    "last_name": "NAN",
                    "gender": "NAN",
                    "company_name": "NAN",
                    "address": "NAN",
                    "city": "NAN",
                    "county": "NAN",
                    "phone1": "NAN",
                    "phone2": "NAN",
                    "email": "NAN",

                }
                setUserd(cit)
                setFind("Not Found")
                setRegister({ isRegister: true })
                setIsLoading(false)
                setMessa("nouser")

            });

    };
    const [register, setRegister] = useState({
        isRegister: true
    });
    const [isLoading, setIsLoading] = useState(false);
    function onClear() {
        setUserkey("")
    }
    return (<>

        {!register.isRegister ?
            <>
                <div>
                    <div className="">
                        {isLoading ? (<>
                            <div className="blncen">
                                <div className="blending-spinnerr"></div>

                            </div>
                            <div className="blncen2">

                                <h3 className='cenn paragraph'>Please wait It will take a while! </h3>
                            </div>

                        </>
                        ) : null}</div>
                </div></> :
            <div className="split right">

                <div className='fieldse' >
                    <legend className="heading" >Get Some One By ID</legend>
                    <input className='inpuu' type="search" placeholder="Please Enter National ID" onChange={(e) => {
                        setFind("")
                        toggleShow(false); takekey(e.target.value)
                    }} />
                    <input className='inpuu' type="button" value="Search" onClick={() => { toggleShow(!show); onClear(); search(userkey); }} disabled={!userkey} />

                    {(messa === "NaN") ?
                        <div>
                            {show &&

                                <div>


                                    {(pre === true) ?


                                        <div>

                                            <div >
                                                <div className=" py-3">

                                                    <div className="card mb-4 back">




                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="card mb-4">
                                                                <div className="row mb-4">
                                                                    <div className="card-body text-center">
                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                                                            <div className="row py-3 shadow-5">

                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                <div className="col-12 mb-1">

                                                                                </div>

                                                                                {usersd.fingers.map((item, index) => (
                                                                                    <div className="col-2 mt-1" key={index}>

                                                                                        <img
                                                                                            src={item}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-100"
                                                                                        />
                                                                                    </div>))}


                                                                            </div>
                                                                        </div>





                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="card mb-4">
                                                                <div className="card-body">
                                                                    <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Person Info</h2>

                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail ">Full Name</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail ">{usersd.first_name} {usersd.last_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail  ">GENDER</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.gender}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Company Name</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.company_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Address</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.address}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">City</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.city}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">County</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.county}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />

                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone1</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.phone1}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr /><div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone2</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.phone2}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr /><div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Email</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.email}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">web</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.web}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card mb-4">
                                                                <div className="card-body">
                                                                    <p className="mb-4 text-primary font-italic me-1 d-flex speacail">Previous Crimes</p>

                                                                    {usersd.previousCrimes.map((item, index) => (
                                                                        <div key={index}>

                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail ">ID</p>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <p className="text-muted mb-0 d-flex speacail ">{item._id}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail  ">Crimes</p>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <p className="text-muted mb-0 d-flex speacail">{item.Crimes}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail">Date of the crime</p>
                                                                                </div>
                                                                                <div className="col-sm-5">
                                                                                    <p className="text-muted mb-0 d-flex speacail">{item["Date of the crime"]}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail">Country of the crim</p>
                                                                                </div>
                                                                                <div className="col-sm-5">
                                                                                    <p className="text-muted mb-0 d-flex speacail">{item["Country of the crime"]}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />

                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Address of the crime</p>
                                                                                </div>
                                                                                <div className="col-sm-5">
                                                                                    <p className="text-muted mb-0 d-flex speacail">{item["Address of the crime"]}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <p className="mb-0 list-group-item d-flex speacail">Years in prison</p>
                                                                                </div>
                                                                                <div className="col-sm-5">
                                                                                    <p className="text-muted mb-0 d-flex speacail">{item["Years in prison"]}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>))}
                                                                </div>
                                                            </div>






                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        :

                                        <div>

                                            <div >
                                                <div className=" py-3">
                                                    <div className="card mb-4 back">





                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="card mb-4">
                                                                <div className="row mb-4">
                                                                    <div className="card-body text-center">
                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                                                            <div className="row py-3 shadow-5">

                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                <div className="col-12 mb-1">

                                                                                </div>

                                                                                {usersd.fingers.map((item, index) => (
                                                                                    <div className="col-2 mt-1" key={index}>

                                                                                        <img
                                                                                            src={item}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-100"
                                                                                        />
                                                                                    </div>))}


                                                                            </div>
                                                                        </div>





                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="card mb-4">
                                                                <div className="card-body">
                                                                    <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Person Info</h2>

                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail ">Full Name</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail ">{usersd.first_name} {usersd.last_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail  ">GENDER</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.gender}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Company Name</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.company_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Address</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.address}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">City</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.city}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">County</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.county}</p>
                                                                        </div>
                                                                    </div>


                                                                    <hr /><div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone1</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.phone1}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr /><div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone2</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.phone2}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr /><div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Email</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.email}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p className="mb-0 list-group-item d-flex speacail">Web</p>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <p className="text-muted mb-0 d-flex speacail">{usersd.web}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>








                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>

                            }
                        </div> :
                        <div>
                            {find &&
                                <div><span className='mess'>{find}</span> </div>
                            }</div>
                    }





                </div  >        </div  >
        }
    </>

    )


}
export default Citizen;