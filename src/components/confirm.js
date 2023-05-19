import Side from './side';
import './styles/database.css'
import Header from "./header";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CloseButton from 'react-bootstrap/CloseButton';
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Confirm() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])
    const [data, setData] = useState([]);
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
        "web": "NAN", "fingers": [
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


    let token = localStorage.getItem("token")
    const fetchData = () => {
        setThird({ isThird: false });

        setIsLoading(true)
        fetch(`https://backendssh.vercel.app/admin/confirmation/transactions`, {
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
    const [trconfirm, settrconfirm] = useState([]);

    const [confirmkey, setconfirmkey] = useState('');
    const [conkey, setConkey] = useState('')
    const [geender, setGeender] = useState('')
    async function take(key) {
        setconfirmkey(key)
    }
    async function search(confirmkey) {
        setIsLoading2(true)
        setSec({ isSec: false });

        fetch(`https://backendssh.vercel.app/admin/confirmation/transactions/` + confirmkey, {
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

                settrconfirm(userData.transaction)
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
                alert("User Not Found")
                let duta = {
                    "_id": "0",
                    "user": "NAN",
                    "userId": "0",
                    "transactionType": "NaN",
                    "transactionImagePath": "NaN",
                    "result": "NaN",

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
                setIsLoading2(false)
                setGeender(gg)
                settrconfirm(duta)
            });
        fetchData()

    }; function onClear() {
        setconfirmkey("")
        toggleShow(false)

    } const [id, setId] = useState("")

    function conf(_id) {
        setId(_id)

        search(_id)
        setConkey(_id)

    }
    function onClear() {
        setForg("")
        setMatchth(pers)
        setMatchtwo(mat)

    }
    async function dis(conkey) {
        setIsLoading3(true)

        if (window.confirm("Are you sure you want to reject ?")) {
            let item = { confirm: false };
            let result = await fetch("https://backendssh.vercel.app/admin/confirmation/transactions/" + conkey, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Authorization': token,
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            setForg(result.message)
            setRegister({ isRegister: false })
            fetchData()
            setIsLoading3(false)

        }


    } async function confirm(conkey) {
        setIsLoading3(true)
        if (window.confirm("Are you sure you want to confirm ?")) {


            let item = { confirm: true };
            let result = await fetch("https://backendssh.vercel.app/admin/confirmation/transactions/" + conkey, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Authorization': token,
                },
                body: JSON.stringify(item)
            });
            result = await result.json();

            setRegister({ isRegister: false })
            fetchData()
            setIsLoading3(false)
        }
    }
    function showForg() {
        toast.info("Done", {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    };
    const [forg, setForg] = useState("");
    const [show, toggleShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(false);
    const [isLoading4, setIsLoading4] = useState(false);
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
                                                    <th>Transition ID</th>
                                                    <th>Report</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    data.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="user-info ">

                                                                    <div className="user-info__basic">
                                                                        <h5 className="mb-0 speacail ">{item._id}</h5>
                                                                        <p className="text-muted mb-0 speacail">{item.user}</p>
                                                                    </div>
                                                                </div>
                                                            </td>



                                                            <td>
                                                                <button className="bbt btn-sm bu" onClick={() => {
                                                                    setRegister({ isRegister: true }); conf(item._id);
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


                        </div>}</div>
                :




                <div>


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
                                ) : null}</div>
                        </div>
                        :
                        <div className="split right">
                            <div className='fieldse' > <div>
                                <div className="bl"> </div><div className="app">
                                    {isLoading3 ? (<>
                                        <div className="loading-screen"></div>


                                        <div className="blending">
                                            <div className="blending-spinner"></div>
                                        </div>

                                    </>
                                    ) : null}</div>
                                <CloseButton aria-label="Hide" onClick={() => { onClear(); toggleShow(false); setRegister({ isRegister: false }) }} className="clos" />

                                <div className="table-responsive">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Transition Type</th>

                                                <th>Confirm</th>
                                                {/* <th>More</th> */}




                                            </tr>
                                        </thead>
                                        <tbody>



                                            <tr >
                                                <td>
                                                    <div className="user-info">

                                                        <div className="user-info__basic">
                                                            <h5 className="mb-0 speacail">{trconfirm.user}</h5>
                                                            <p className="text-muted mb-0 speacail">{trconfirm.userId}</p>
                                                        </div>
                                                    </div>
                                                </td>


                                                <td>
                                                    <div className="user-info">

                                                        <div className="user-info__basic">
                                                            <h5 className="mb-0 speacail"> {trconfirm.transactionType}</h5>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="btn-group" role="group" aria-label="...">
                                                        <button className="btn btn-primary btn-success" onClick={() => { confirm(conkey); showForg(forg); onClear(); }} >Confirm</button>
                                                        <button className="btn btn-primary btn-danger" onClick={() => { dis(conkey); showForg(forg); onClear(); }} >Reject</button>

                                                    </div>

                                                </td><td>
                                                    {/* <button className="btn btn-secondary dropdown-toggle" onClick={() => { toggleShow(!show) }} ></button> */}


                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
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
                                                                                                <p className="mb-0 list-group-item d-flex speacail  ">User</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{trconfirm.user}</p>
                                                                                            </div>

                                                                                        </div>


                                                                                        <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{trconfirm.userId}</p>
                                                                                            </div>

                                                                                        </div> <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                            </div>
                                                                                            <div className="col-sm-7">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType}</p>
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
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {trconfirm.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {trconfirm.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType} </p>
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
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType}</p>
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
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType}</p>
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
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType}</p>
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
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{trconfirm.transactionType}</p>
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
                                        </table></div>
                                </div>
                            </div></div>     </div>
                    }


                </div>




            }

        </>
    );

}
