import './styles/admin.css'
import Side from './side';
import React, { useState, useEffect } from 'react';
import Header from "./header";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    let token = localStorage.getItem("token")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");

    const [newPassword, setNewpassword] = useState("");

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [not, setNot] = useState("");
    const [forg, setForg] = useState("");
    const [userkey, setUserkey] = useState('');
    const [usersd, setUserd] = useState([]);

    const [show, toggleShow] = useState(false);
    async function takekey(key) {
        setUserkey(key)
    }
    const [addnew, setAddnew] = useState('')
    const [erorem1, setErorem1] = useState('')
    const [erorem2, setErorem2] = useState('')
    const [erorem3, setErorem3] = useState('')
    const [erorem4, setErorem4] = useState('')
    const [erorem5, setErorem5] = useState('')
    const [erorem6, setErorem6] = useState('')
    const [erorem7, setErorem7] = useState('')
    const [erorem8, setErorem8] = useState('')
    const [erorem9, setErorem9] = useState('')
    const [erorempass, setErorempass] = useState('')


    async function register() {


        if (!/^\d+$/.test(phone)) {
            setErorem7("Enter Valid Phone Number")
        }
        if (!/^\d+$/.test(age)) {
            setErorem8("Enter Valid Age")
        }
        if (password != conpassword) {
            setErorem9("password not match")
        }
        if (username.includes('@') && username !== "" && password !== "" && firstname !== ""
            && lastname !== "" && gender !== "" && address !== "" && phone !== "" && age !== "" && conpassword !== ""
            && /^\d+$/.test(phone) && password == conpassword && /^\d+$/.test(age)) {
            setIsLoading(true)
            onClear();
            let item = { username, password, firstname, lastname, gender, address, phone, age }
            let token = localStorage.getItem("token")


            let result = await fetch("https://backendssh.vercel.app/admin/users", {
                method: "POST",
                body: JSON.stringify(item),

                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Authorization': token,

                },
            });
            result = await result.json();
            setNot(result)
            setAddnew(result.message)
            setIsLoading(false)
        }
        else if (username == "" || !username.includes('@')) {
            setErorem1("Please Enter Valid Username Include @")
            if (firstname == "") {
                setErorem2("Required")
            }
            if (lastname == "") {
                setErorem3("Required")
            }
            if (password == "") {
                setErorem4("Required")
            }
            if (conpassword == "") {
                setErorem9("Required")
            }
            if (gender == "") {
                setErorem5("Required")
            }
            if (address == "") {
                setErorem6("Required")
            }
            if (phone == "") {
                setErorem7("Required")
            }
            if (age == "") {
                setErorem8("Required")
            }


        }
        else if (username !== "") {

            if (firstname == "") {
                setErorem2("Required")
            }
            if (lastname == "") {
                setErorem3("Required")
            }
            if (password == "") {
                setErorem4("Required")
            }
            if (conpassword == "") {
                setErorem9("Required")
            }
            if (gender == "") {
                setErorem5("Required")
            }
            if (address == "") {
                setErorem6("Required")
            }
            if (phone == "") {
                setErorem7("Required")
            }
            if (age == "") {
                setErorem8("Required")
            }


        }

    }
    function showToastMessage(not) {
        toast.info(not.message, {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    };
    function showForg(forg) {
        toast.success(" Password reset successfully", {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    };
    function onClear() {
        setAge("")
        setAddress("")
        setUsername("")
        setFirstname("")
        setGender("")
        setLastname("")
        setPassword("")
        setConpassword("")
        setPhone("")
        setNewpassword("")
        setForg("")
        setNot("")

    };
    const [pass, setPass] = useState('')
    const [find, setFind] = useState('')
    async function forget() {
        setIsLoading2(true)
        let item = { username, newPassword };
        let result = await fetch("https://backendssh.vercel.app/admin/forgetPassword", {
            method: "put",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,
            },
            body: JSON.stringify(item)
        });
        result = await result.json();

        setPass(result.message)
        setIsLoading2(false)
    }
    async function search(userkey) {
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

            })
            .catch((err) => {
                alert("User Not Found")
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

            });

    };
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])


    return (
        <>


            <div className="split right">
                <div className='fieldse' >
                    <div className="bl"> </div><div className="app">
                        {isLoading ? (<>
                            <div className="loading-screen"></div>

                            <div className="blending">
                                <div className="blending-spinner"></div>
                            </div>

                        </>
                        ) : null}</div>
                    <div className="bl"> </div><div className="app">
                        {isLoading2 ? (<>
                            <div className="loading-screen"></div>

                            <div className="blending">
                                <div className="blending-spinner"></div>
                            </div>

                        </>
                        ) : null}</div>
                    <legend className='heading'>Add User</legend>
                    {addnew === "the username already exists use another one!" ? <div> <span className='sp'>{addnew}</span> </div> :
                        <div> <span className='sr'>{addnew}</span> </div>}                    <div className='formmm' >
                        <div className="na">

                            <input className='inputtt' type="email" required value={username} placeholder="User name" onChange={(e) => { setErorem1(""); setAddnew(""); setUsername(e.target.value) }} />

                            {erorem1 && <div> <span className=''>{erorem1}</span> </div>}

                        </div>
                        <div className="na">
                            <input className='inputtt' value={firstname} placeholder=" First name" onChange={(e) => { setErorem2(""); setAddnew(""); setFirstname(e.target.value) }} />
                            {erorem2 && <div> <span className=''>{erorem2}</span> </div>}

                        </div>
                        <div className="na">
                            <input className='inputtt' value={lastname} placeholder="Last name" onChange={(e) => { setErorem3(""); setAddnew(""); setLastname(e.target.value) }} />
                            {erorem3 && <div> <span className=''>{erorem3}</span> </div>}


                        </div>
                        <div className="na">
                            <input className='inputtt' value={password} placeholder=" Password" type="password" onChange={(e) => { setErorem4(""); setAddnew(""); setPassword(e.target.value) }} />
                            {erorem4 && <div> <span className=''>{erorem4}</span> </div>}

                        </div>
                        <div className="na">
                            <input className='inputtt' value={conpassword} placeholder="Confirm Password" type="password" onChange={(e) => { setErorempass(""); setErorem9(""); setAddnew(""); setConpassword(e.target.value) }} />
                            {erorem9 && <div> <span className=''>{erorem9}</span> </div>}
                            {erorempass && <div> <span className=''>{erorempass}</span> </div>}

                        </div>

                        <div className="na">
                            <input className='inputtt' value={gender} placeholder=" Gender" type="gender" onChange={(e) => { setErorem5(""); setAddnew(""); setGender(e.target.value) }} />
                            {erorem5 && <div> <span className=''>{erorem5}</span> </div>}

                        </div>
                        <div className="na">

                            <input className='inputtt' value={address} placeholder=" Address" type="address" onChange={(e) => { setErorem6(""); setAddnew(""); setAddress(e.target.value) }} />
                            {erorem6 && <div> <span className=''>{erorem6}</span> </div>}

                        </div>
                        <div className="na">
                            <input className='inputtt' type="tel" value={phone} pattern="[0-9]*" placeholder=" Phone" onChange={(e) => { setErorem7(""); setAddnew(""); setPhone(e.target.value) }} />
                            {erorem7 && <div> <span className=''>{erorem7}</span> </div>}

                        </div>
                        <div className="na">
                            <input className='inputtt' value={age} placeholder=" Age" type="age" onChange={(e) => { setErorem8(""); setAddnew(""); setAge(e.target.value) }} />
                            {erorem8 && <div> <span className=''>{erorem8}</span> </div>}

                        </div>


                    </div><br />
                    <button className='sum' onClick={() => { register(); }} >Add</button>


                </div >



            </div>

        </>
    );
}


export default Admin;