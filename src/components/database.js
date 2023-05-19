import Side from './side';
import './styles/database.css'
import Header from "./header";
import React, { useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

export default function Database() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])
    const [test, setTest] = useState('')
    const [notm, setNotm] = useState('')
    const pers = {
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
        "web": "NAN",
        "fingers": [
            "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN",]

        , "previousCrimes": [
            {
                "_id": "NAN",
                "Crimes": [
                    {
                        "crime1": "NAN",
                        "Date of the crime": "NAN",
                        "Country of the crime": "NAN",
                        "Address of the crime": "NAN",
                        "Years in prison": "NAN"
                    }]
            }
        ]

    }
    const mat = { "result": "NAN" }

    const [matchth, setMatchth] = useState(pers)
    const [matchtwo, setMatchtwo] = useState(mat)

    const [data, setData] = useState([]);

    let token = localStorage.getItem("token")
    const fetchData = () => {
        setThird({ isThird: false });
        setIsLoading(true)
        fetch(`https://backendssh.vercel.app/admin/transactions`, {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => response.json())
            .then((actualData) => {
                setThird({ isThird: true });
                setData(actualData.transactions);
                setIsLoading(false)
            })
            .catch((err) => {

            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [register, setRegister] = useState({
        isRegister: false
    });
    const [usersd, setUserd] = useState([]);

    const [userkey, setUserkey] = useState('');
    const [geender, setGeender] = useState('')
    async function takekey(key) {
        setUserkey(key)
    }
    async function search(userkey) {
        setIsLoading2(true)
        setSec({ isSec: false });

        fetch(`https://backendssh.vercel.app/admin/transactions/` + userkey, {
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
                setSec({ isSec: true });

                setUserd(userData.transaction)
                setGeender(userData.transaction.informationEstimated)
                setTest(userData.transaction.transactionType)
                setNotm(userData.transaction.result)

                if (userData.transaction.isMatched) {
                    setMatchtwo(userData.transaction.isMatched)

                }


                if (userData.transaction.PersonMatched) {
                    setMatchth(userData.transaction.PersonMatched);
                }
                setIsLoading2(false)
            })
            .catch((err) => {
                alert("Transction Not Found")
                let duta = {
                    "_id": "NAN",
                    "user": "NAN",
                    "userId": "NAN",
                    "transactionType": "NAN",
                    "transactionImagePath": "NAN",
                    "result": "NAN",

                }
                let gg = {

                    "gender": "NaN",
                    "male_percentage": 0,
                    "female_percentage": 0,
                    "hand_position": "NAN",
                    "right_percentage": 0,
                    "left_percentage": 0,
                    "gender": "NaN",
                    "male_percentage": 0,
                    "female_percentage": 0,
                    "hand_position": "NAN",
                    "right_percentage": 0,
                    "left_percentage": 0,
                    "Finger_name": "NAN",
                    "Thump_percentage": 0,
                    "Little_percentage": 0,
                    "Ring_percentage": 0,
                    "Index_percentage": 0,
                    "Middle_percentage": 0

                }
                setGeender(gg)
                setUserd(duta)
            });
        fetchData()

    }; function onClear() {
        setUserkey("")
        toggleShow(false)
        setMatchth(pers)
        setMatchtwo(mat)
    } const [id, setId] = useState("")

    function know(_id) {
        setId(_id)

        search(_id)

    }
    const [show, toggleShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [sec, setSec] = useState({
        isSec: false
    });
    const [third, setThird] = useState({
        isThird: false
    });
    return (
        <>








            {!register.isRegister ?
                <div>
                    {!third.isThird ?
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
                        </div> :

                        <div>
                            <div className="split right">
                                {data.length === 0 ?

                                    <div className="alertt warning-alert alrt">
                                        <h3 className="headingg">NO transaction found</h3>
                                    </div>
                                    :
                                    <div className='fieldse' >



                                        <div className="table-responsive">


                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>User</th>
                                                        <th>Transition Type</th>

                                                        {/* <th>Transition Type</th> */}
                                                        <th> Report</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        data.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="user-info">

                                                                        <div className="user-info__basic">
                                                                            <h5 className="mb-0 speacail">{item.user}</h5>
                                                                            <p className="text-muted mb-0 speacail">{item._id}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="user-info">

                                                                        <div className="user-info__basic">
                                                                            <h5 className="mb-0 speacail"> {item.transactionType}</h5>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <button className="bbt btn-sm bu" onClick={() => {
                                                                        setRegister({ isRegister: true }); know(item._id);
                                                                    }}>View Report</button>
                                                                </td><td>
                                                                </td>

                                                            </tr>))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>

                                    </div  >

                                }
                            </div>
                        </div>

                    }
                </div>
                :


                <>
                    {!sec.isSec ?
                        <div>
                            <div className="">
                                {isLoading2 ? (<>
                                    <div className="blncen">
                                        <div className="blending-spinnerr"></div>

                                    </div>
                                    <div className="blncen2">

                                        <h3 className='cenn paragraph'>Please wait It will take a while! </h3>
                                    </div>

                                </>
                                ) : null}</div></div>
                        :
                        <>
                            <div><div className="split right">
                                <div className='fieldse' >
                                    <CloseButton aria-label="Hide" onClick={() => { onClear(); setRegister({ isRegister: false }) }} className="clos" />


                                    <div className="table-responsive">

                                        <table>
                                            <tbody><tr><td> <>

                                                {((test === 'one{Compare with people have previous crimes}' || test === 'Three{Compare with global DB}') & notm === 'not matched') ?

                                                    <div>

                                                        <div >
                                                            <div className=" py-3">
                                                                <div className="card mb-4 back">


                                                                    <div className=" emp-profilee">
                                                                        <form method="post">
                                                                            <div className="row">



                                                                                <div className="col-md-9">
                                                                                    <div className="profile-head">

                                                                                        <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                        <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{usersd.user}</p>
                                                                                            </div>

                                                                                        </div>


                                                                                        <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{usersd.userId}</p>
                                                                                            </div>

                                                                                        </div> <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                            </div>
                                                                                            <div className="col-sm-7">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType}</p>
                                                                                            </div>

                                                                                        </div> <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">Result</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">Not Match</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div></form></div>


                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <div className="card mb-4">
                                                                            <div className="row mb-4">
                                                                                <div className="card-body text-center">
                                                                                    <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">

                                                                                        <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Uploaded Fingerprint</h2>
                                                                                        <div className="col-2 mt-0">

                                                                                            <img
                                                                                                src={image1}
                                                                                                alt="Gallery image 3"
                                                                                                className="w-70 "
                                                                                            />
                                                                                        </div>


                                                                                        <div className="row py-3 shadow-5">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                            <div className="col-12 mb-1">

                                                                                            </div>

                                                                                            <h4>No Fingerprints Detected</h4>


                                                                                        </div>
                                                                                    </div>





                                                                                </div>


                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="card mb-4">
                                                                            <div className="card-body">
                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Information Estimated</h2>

                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail ">Gender</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail ">{geender.gender}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail  ">Male percentage </p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.male_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Female Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.female_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Hand Position</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.hand_position}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Right Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.right_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail"> Left Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.left_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />

                                                                                <hr /><div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Finger Name</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Finger_name}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr /><div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Thumb percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Thump_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr /><div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Little Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Little_percentage} </p>
                                                                                    </div>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Ring Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Ring_percentage}</p>
                                                                                    </div>
                                                                                </div><hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Index Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Index_percentage}</p>
                                                                                    </div>
                                                                                </div><hr />
                                                                                <div className="row">
                                                                                    <div className="col-sm-4">
                                                                                        <p className="mb-0 list-group-item d-flex speacail">Middle Percentage</p>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <p className="text-muted mb-0 d-flex speacail">{geender.Middle_percentage}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>






                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                                }
                                                <div>
                                                    {((test === 'one{Compare with people have previous crimes}') & notm === 'matched') ?
                                                        <div>

                                                            <div >
                                                                <div className=" py-3">

                                                                    <div className="card mb-4 back">

                                                                        <div className=" emp-profilee">
                                                                            <form method="post">
                                                                                <div className="row">



                                                                                    <div className="col-md-9">
                                                                                        <div className="profile-head">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {usersd.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {usersd.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType} </p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Result</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">Matched</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div></form></div>


                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="card mb-4">
                                                                                <div className="row mb-4">
                                                                                    <div className="card-body text-center">
                                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Uploaded Fingerprint</h2>
                                                                                            <div className="col-2 mt-0">

                                                                                                <img
                                                                                                    src={image1}
                                                                                                    alt="Gallery image 3"
                                                                                                    className="w-70 "
                                                                                                />
                                                                                            </div>


                                                                                            <div className="row py-3 shadow-5">

                                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                                <div className="col-12 mb-1">

                                                                                                </div>

                                                                                                {matchth.fingers.map((item, index) => (
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
                                                                                    <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Info</h2>

                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail ">Full Name</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{matchth.first_name} {matchth.last_name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail  ">GENDER</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.gender}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Company Name</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.company_name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Address</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.address}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">City</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.city}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">County</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.county}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />

                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone1</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.phone1}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone2</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.phone2}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Email</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.email}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">web</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.web}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="card mb-4">
                                                                                <div className="card-body">
                                                                                    <p className="mb-4 text-primary font-italic me-1 d-flex speacail">Previous Crimes</p>

                                                                                    {matchth.previousCrimes.map((item, index) => (
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
                                                                                            {item.Crimes.map((item, index) => (
                                                                                                <div key={index}>
                                                                                                    <div className="row">
                                                                                                        <div className="col-sm-5">
                                                                                                            <p className="mb-0 list-group-item d-flex speacail  ">Crimes</p>
                                                                                                        </div>
                                                                                                        <div className="col-sm-6">
                                                                                                            <p className="text-muted mb-0 d-flex speacail">{item.crime1}</p>
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
                                                                                        </div>))}
                                                                                </div>
                                                                            </div>






                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        : null
                                                    }</div>


                                                <div>
                                                    {((test === 'Three{Compare with global DB}') & notm === 'matched') ?

                                                        <div>

                                                            <div >
                                                                <div className=" py-3">
                                                                    <div className="card mb-4 back">


                                                                        <div className=" emp-profilee">
                                                                            <form method="post">
                                                                                <div className="row">



                                                                                    <div className="col-md-9">
                                                                                        <div className="profile-head">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Result</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">Matched</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div></form></div>


                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="card mb-4">
                                                                                <div className="row mb-4">
                                                                                    <div className="card-body text-center">
                                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Uploaded Fingerprint</h2>
                                                                                            <div className="col-2 mt-0">

                                                                                                <img
                                                                                                    src={image1}
                                                                                                    alt="Gallery image 3"
                                                                                                    className="w-70 "
                                                                                                />
                                                                                            </div>


                                                                                            <div className="row py-3 shadow-5">

                                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                                <div className="col-12 mb-1">

                                                                                                </div>

                                                                                                {matchth.fingers.map((item, index) => (
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
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{matchth.first_name} {matchth.last_name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail  ">GENDER</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.gender}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Company Name</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.company_name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Address</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.address}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">City</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.city}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">County</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.county}</p>
                                                                                        </div>
                                                                                    </div>


                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone1</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.phone1}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Phone2</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.phone2}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Email</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.email}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Web</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{matchth.web}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>








                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        : null
                                                    }</div>





                                                <div>
                                                    {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Not match') ?
                                                        <div>

                                                            <div >
                                                                <div className=" py-3">
                                                                    <div className="card mb-4 back">


                                                                        <div className=" emp-profilee">
                                                                            <form method="post">
                                                                                <div className="row">

                                                                                    <div className="col-2 mt-0">
                                                                                        <img
                                                                                            src={image1}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-70 "
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-2 mt-0">
                                                                                        <img
                                                                                            src={image2}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-70 "
                                                                                        />
                                                                                    </div>

                                                                                    <div className="col-md-9">
                                                                                        <div className="profile-head">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType}</p>
                                                                                                </div>

                                                                                            </div>
                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Result</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">Not Match</p>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div></form></div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div> : null
                                                    }</div>
                                                <div>
                                                    {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Match') ?
                                                        <div>

                                                            <div >
                                                                <div className=" py-3">
                                                                    <div className="card mb-4 back">


                                                                        <div className=" emp-profilee">
                                                                            <form method="post">
                                                                                <div className="row">

                                                                                    <div className="col-2 mt-0">
                                                                                        <img
                                                                                            src={image1}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-70 "
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col-2 mt-0">
                                                                                        <img
                                                                                            src={image2}
                                                                                            alt="Gallery image 3"
                                                                                            className="w-70 "
                                                                                        />
                                                                                    </div>

                                                                                    <div className="col-md-9">
                                                                                        <div className="profile-head">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType}</p>
                                                                                                </div>

                                                                                            </div>
                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Result</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">Matched</p>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div></form></div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div> : null
                                                    }</div>


                                                <div>

                                                    {(test === "Four{Get Estimated Information's From FingerPrint Like (GENDER , HAND, FINGER)}") ?

                                                        <div>

                                                            <div >
                                                                <div className=" py-3">
                                                                    <div className="card mb-4 back">


                                                                        <div className=" emp-profilee">
                                                                            <form method="post">
                                                                                <div className="row">



                                                                                    <div className="col-md-9">
                                                                                        <div className="profile-head">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{usersd.transactionType}</p>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div></form></div>


                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="card mb-4">
                                                                                <div className="row mb-4">
                                                                                    <div className="card-body text-center">
                                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Uploaded Fingerprint</h2>
                                                                                            <div className="col-2 mt-0">

                                                                                                <img
                                                                                                    src={image1}
                                                                                                    alt="Gallery image 3"
                                                                                                    className="w-70 "
                                                                                                />
                                                                                            </div>


                                                                                            <div className="row py-3 shadow-5">

                                                                                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h2>

                                                                                                <div className="col-12 mb-1">

                                                                                                </div>

                                                                                                <h4>No Fingerprints Detected</h4>


                                                                                            </div>
                                                                                        </div>





                                                                                    </div>


                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <div className="card mb-4">
                                                                                <div className="card-body">
                                                                                    <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Information Estimated</h2>

                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail ">Gender</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{geender.gender}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail  ">Male percentage </p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.male_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Female Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.female_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Hand Position</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.hand_position}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Right Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.right_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail"> Left Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.left_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />

                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Finger Name</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Finger_name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Thumb percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Thump_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr /><div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Little Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Little_percentage} </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Ring Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Ring_percentage}</p>
                                                                                        </div>
                                                                                    </div><hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Index Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Index_percentage}</p>
                                                                                        </div>
                                                                                    </div><hr />
                                                                                    <div className="row">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail">Middle Percentage</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail">{geender.Middle_percentage}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>






                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> : null
                                                    }</div></></td></tr></tbody>
                                        </table>

                                    </div>
                                </div></div>
                            </div></>}
                </>
            }

        </>
    );
}
