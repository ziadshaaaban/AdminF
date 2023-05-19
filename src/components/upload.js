import Header from "./header";
import { useState, useEffect } from 'react';
import { Toastcont } from 'react-toastify';
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import CloseButton from 'react-bootstrap/CloseButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import './styles/search.css'
import './styles/upload.css'
function Upload() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])
    let token = localStorage.getItem("token")

    const [fingerprint, setFingerprint] = useState("")
    const [finger, setFinger] = useState("")
    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [errorMessage4, setErrorMessage4] = useState('');
    const usero = {
        "_id": "NaN",
        "user": "NaN",
        "userId": "NaN",
        "transactionType": "NaN",
        "transactionImagePath": "NaN",
        "result": "NaN",
        "transactionImage1Path": "NAN", "transactionImage2Path": "NAN"
    }
    const [userone, setUserone] = useState(usero)
    const mes = "no"

    const [trmess, setTrmess] = useState(mes)

    const [data, setData] = useState([]);
    const [test, setTest] = useState('NAN')
    const [notm, setNotm] = useState("no")
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

    const [trconfirm, settrconfirm] = useState([]);

    const [geender, setGeender] = useState({
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
    })


    async function one() {
        setSec({ isSec: false });


        setIsLoading(true)
        // let item = { "fingerprint": fingerprint };
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        let result = await fetch("http://localhost:8080/admin/transactionOne", {
            method: "POST",
            body: formData,

            headers: {
                "Accept": "application/json",
                // "Content-type": 'multipart/form-data',
                'Authorization': token,
            },
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });


        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)


            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
                notify()

            }
        } if (result.message) {
            setTrmess(result.message)
        }

    } async function two() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        formData.append('fingerprint', finger);

        // let item = { fingerprint: fingerprint };
        // let ietmm = { fingerprint: finger };
        let result = await fetch("http://localhost:8080/admin/transactionTwo", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // "Content-type": "application/json",
                'Authorization': token,
            },
            body: formData
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            }

        }

    }
    async function three() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        // let item = { fingerprint: fingerprint };
        let result = await fetch("http://localhost:8080/admin/transactionThree", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // "Content-type": "application/json",
                'Authorization': token,
            },
            body: formData
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
                notifyy()
            } setIsLoading(false)

        }


    }
    async function four() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        // let item = { fingerprint: fingerprint };
        let result = await fetch("http://localhost:8080/admin/transactionFour", {
            method: "POST",

            body: formData,
            headers: {
                "Accept": "application/json",
                // "Content-type": 'multipart/form-data',
                'Authorization': token,
            },
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            }

        }

    }

    const [forg, setForg] = useState("");
    function onClear() {
        setFingerprint("")
        setFinger("")
        setForg("")
        setMatchth(pers)
        setMatchtwo(mat)
        setTrmess(mes)
        setUserone(usero)
        toggleShow(false)
        settrconfirm(usero)
        setNotm("no")
        setTest("NAN")
        setGeender({
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
        })
        setSec({ isSec: false });

    }
    const [register, setRegister] = useState({
        isRegister: false
    });
    const [sec, setSec] = useState({
        isSec: false
    });
    const [show, toggleShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview2, setImagePreview2] = useState(null);

    if (fingerprint) {
        const reader = new FileReader();

        reader.onload = () => {
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(fingerprint);
    }
    if (finger) {
        const reader = new FileReader();

        reader.onload = () => {
            setImagePreview2(reader.result);
        };

        reader.readAsDataURL(finger);
    }
    const notify = () => toast.success(
        <div>
            <span role="img" aria-label="Unicorn"></span> Fingerprint Detected
            <div className="flash"></div>
        </div>,
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    const notifyy = () => toast.success(
        <div>
            <span role="img" aria-label="Unicorn"></span> Person Detected
            <div className="flash"></div>
        </div>,
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    return (


        <>
            {!register.isRegister ?
                <div>

                    <section>

                        <div className="box">
                            <h1 className='heading'>Crimnals</h1>
                            <h5 className='heading'>(Compare with people have previous crimes)</h5>

                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { one(); onClear(); setRegister({ isRegister: true }); }} disabled={!fingerprint}>Search</button>
                            {errorMessage1 && <div className="invalid">{errorMessage1}
                            </div>}
                        </div>
                        <div className="box">
                            <h1 className='heading'>Suspicious</h1>
                            <h5 className='heading'>(compare image from crime scene with image of suspect person)</h5>

                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <input type="file" className='up' onChange={(e) => setFinger(e.target.files[0])} />
                            <button className='new' onClick={() => { two(); onClear(); setRegister({ isRegister: true }); }} disabled={!finger}>Check Matches</button>
                            {errorMessage2 && <div className="invalid">{errorMessage2}
                            </div>}
                        </div>
                        <div className="box">
                            <h1 className='heading'>Global</h1>
                            <h5 className='heading'>(Compare with global DB)</h5>
                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { three(); onClear(); setRegister({ isRegister: true }); }} disabled={!fingerprint}>Search</button>
                            {errorMessage3 && <div className="invalid">{errorMessage3}
                            </div>}
                        </div>
                        <div className="box">
                            <h1 className='heading'>Info!</h1>
                            <h5 className='heading'>Get Estimated Information's (GENDER , HAND, FINGER)</h5>
                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { four(); onClear(); setRegister({ isRegister: true }); }} disabled={!fingerprint}>Get Details</button>
                            {errorMessage4 && <div className="invalid">{errorMessage4}
                            </div>}
                        </div>
                    </section></div>
                :
                <div>

                    <div>

                        <div>

                            {!sec.isSec ?

                                <div >

                                    <div className="">
                                        {isLoading ? (<>

                                            <div className="blncen">
                                                <div className="blending-spinnerr"></div>

                                            </div>
                                            <div className="blncen2">

                                                <h3 className='cenn paragraph'>Please wait It will take a while! </h3>
                                            </div>
                                        </>
                                        ) : null}</div></div>
                                :

                                <div className="upba">
                                    <div>

                                        {((test === 'one{Compare with people have previous crimes}' || test === 'Three{Compare with global DB}') & notm === 'not matched') ?
                                            <div>

                                                <div>

                                                    <div >
                                                        <div className=" py-3">
                                                            <div className="card mb-4 back">
                                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


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
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{userone.user}</p>
                                                                                        </div>

                                                                                    </div>


                                                                                    <div className="row mb-4">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{userone.userId}</p>
                                                                                        </div>

                                                                                    </div> <div className="row mb-4">
                                                                                        <div className="col-sm-4">
                                                                                            <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                        </div>
                                                                                        <div className="col-sm-7">
                                                                                            <p className="text-muted mb-0 d-flex speacail ">{userone.transactionType}</p>
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
                                                                                            src={imagePreview}
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
                                                </div>

                                            </div> : null
                                        }
                                        <div>


                                            <div>
                                                {(trmess === 'please upload image!') || (trmess === 'their is an error happen!') || (trmess === 'please upload images!') || (trmess === 'please upload the second image!') ||
                                                    (trmess === 'Please wait admin to confirm the transaction to see the report of transaction') ? <div>


                                                    <div className="alert warning-alert alrt">
                                                        <h3 className="headingg">{trmess}</h3>
                                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="close" />
                                                    </div>


                                                </div> : null
                                                }</div>

                                            <div>
                                                {((test === 'one{Compare with people have previous crimes}') & notm === 'matched') ?



                                                    <div>

                                                        <div className="toast-message"
                                                        >
                                                            <ToastContainer
                                                                className={"tto"}
                                                                position="top-center"
                                                                autoClose={2000}
                                                                hideProgressBar={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                                theme="light"
                                                            />
                                                        </div>
                                                        <div>

                                                            <div >
                                                                <div className=" py-3">

                                                                    <div className="card mb-4 back">
                                                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

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
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {userone.user}</p>
                                                                                                </div>

                                                                                            </div>


                                                                                            <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6">
                                                                                                    <p className="text-muted mb-0 d-flex speacail "> {userone.userId}</p>
                                                                                                </div>

                                                                                            </div> <div className="row mb-4">
                                                                                                <div className="col-sm-4">
                                                                                                    <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                                </div>
                                                                                                <div className="col-sm-7">
                                                                                                    <p className="text-muted mb-0 d-flex speacail ">{userone.transactionType} </p>
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
                                                                    <div className="row ">
                                                                        <div className="col-lg-4">
                                                                            <div className="card mb-4">
                                                                                <div className="row mb-4">
                                                                                    <div className="card-body text-center">

                                                                                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">

                                                                                            <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Uploaded Fingerprint</h2>
                                                                                            <div className="col-2 mt-0">

                                                                                                <img
                                                                                                    src={imagePreview}
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
                                                    </div>
                                                    : null
                                                }</div>


                                            <div>
                                                {((test === 'Three{Compare with global DB}') & notm === 'matched') ?

                                                    <div>

                                                        <div className="toast-message"
                                                        >
                                                            <ToastContainer
                                                                className={"tto"}
                                                                position="top-center"
                                                                autoClose={2000}
                                                                hideProgressBar={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                                theme="light"
                                                            />
                                                        </div>

                                                        <div >
                                                            <div className=" py-3">
                                                                <div className="card mb-4 back">
                                                                    <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


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
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{userone.user}</p>
                                                                                            </div>

                                                                                        </div>


                                                                                        <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                                                                            </div>
                                                                                            <div className="col-sm-6">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{userone.userId}</p>
                                                                                            </div>

                                                                                        </div> <div className="row mb-4">
                                                                                            <div className="col-sm-4">
                                                                                                <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                                                                            </div>
                                                                                            <div className="col-sm-7">
                                                                                                <p className="text-muted mb-0 d-flex speacail ">{userone.transactionType}</p>
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
                                                                                                src={imagePreview}
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

                                        </div>
                                        <div>
                                            {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Not match') ? <div>
                                                <div>

                                                    <div >
                                                        <div className=" py-3">
                                                            <div className="card mb-4 back">
                                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


                                                                <div className=" emp-profilee">
                                                                    <form method="post">
                                                                        <div className="row">

                                                                            <div className="col-2 mt-0">
                                                                                <img
                                                                                    src={imagePreview}
                                                                                    alt="Gallery image 3"
                                                                                    className="w-70 "
                                                                                />
                                                                            </div>
                                                                            <div className="col-2 mt-0">
                                                                                <img
                                                                                    src={imagePreview2}
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
                                                </div>


                                            </div> : null
                                            }</div>
                                        <div>
                                            {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Match') ? <div>
                                                <div>

                                                    <div >
                                                        <div className=" py-3">
                                                            <div className="card mb-4 back">
                                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


                                                                <div className=" emp-profilee">
                                                                    <form method="post">
                                                                        <div className="row">

                                                                            <div className="col-2 mt-0">
                                                                                <img
                                                                                    src={imagePreview}
                                                                                    alt="Gallery image 3"
                                                                                    className="w-70 "
                                                                                />
                                                                            </div>
                                                                            <div className="col-2 mt-0">
                                                                                <img
                                                                                    src={imagePreview2}
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
                                                </div>
                                            </div> : null
                                            }</div>


                                        <div>

                                            {(test === "Four{Get Estimated Information's From FingerPrint Like (GENDER , HAND, FINGER)}") ? <div>



                                                <div>

                                                    <div >
                                                        <div className=" py-3">
                                                            <div className="card mb-4 back">
                                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />


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
                                                                                            src={imagePreview}
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
                                                </div>

                                            </div> : null
                                            }</div>

                                    </div></div>

                            }



                        </div>




                    </div>







                </div>
            }
        </>

    );



}
export default Upload;