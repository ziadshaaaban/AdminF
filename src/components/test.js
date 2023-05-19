import Header from "./header";
import './styles/test.css'
import './styles/upload.css'

import image1 from './Images/1.jpg'

export default function Test() {


    return (
        <>






            <div className=" emp-profile">
                <form method="post">
                    <div className="row">

                        <div className="col-2 mt-0">
                            <img
                                src={image1}
                                alt="Gallery image 3"
                                className="w-70 "
                            />
                        </div>

                        <div className="col-md-7">
                            <div className="profile-head">

                                <h2 className="mb-4 text-primary font-italic me-1 d-flex speacail">Transaction Info</h2>



                                <div className="row mb-4">
                                    <div className="col-sm-4">
                                        <p className="mb-0 list-group-item d-flex speacail ">User</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="text-muted mb-0 d-flex speacail ">ziadshaaban18@gmail.com</p>
                                    </div>

                                </div>


                                <div className="row mb-4">
                                    <div className="col-sm-4">
                                        <p className="mb-0 list-group-item d-flex speacail ">User ID</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="text-muted mb-0 d-flex speacail ">63dbf2e4e12947ae2d9023f6</p>
                                    </div>

                                </div> <div className="row mb-4">
                                    <div className="col-sm-4">
                                        <p className="mb-0 list-group-item d-flex speacail ">Transaction Type</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="text-muted mb-0 d-flex speacail ">one(Compare with people have previous crimes)</p>
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
                        <hr />

                    </div>
                    <div className="row">

                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">



                                    <div className="card-body ">
                                        <h1 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Info</h1>

                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail ">Full Name</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail ">Quen Leader</p>
                                            </div>
                                        </div>
                                        <hr className="hhr" />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail  ">GENDER</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">male</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">Company Name</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">Ottumwa Glass Co</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">address</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">6 Princes St</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">city</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">East Kilbride West Ward</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">county</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">South Lanarkshire</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">city</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">East Kilbride West Ward</p>
                                            </div>
                                        </div>
                                        <hr /><div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">phone1</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">01567-846944</p>
                                            </div>
                                        </div>
                                        <hr /><div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">phone2</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">01445-288807</p>
                                            </div>
                                        </div>
                                        <hr /><div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">email</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">queen_leader@gmail.com</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="mb-0 list-group-item d-flex speacail">web</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">http://www.ottumwaglassco.co.uk</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="card-body">
                                        <h1 className="mb-4 text-primary font-italic me-1 d-flex speacail">Previous Crimes</h1>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail ">ID</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail ">63814943189efdbefe7f8b87</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail  ">Crimes</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 d-flex speacail">being drunk and disorderly</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail">Date of the crime</p>
                                            </div>
                                            <div className="col-sm-5">
                                                <p className="text-muted mb-0 d-flex speacail">1937-07-24</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail">Country of the crim</p>
                                            </div>
                                            <div className="col-sm-5">
                                                <p className="text-muted mb-0 d-flex speacail">Lavenham</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail ">Address of the crime</p>
                                            </div>
                                            <div className="col-sm-5">
                                                <p className="text-muted mb-0 d-flex speacail">Universal Case Co</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p className="mb-0 list-group-item d-flex speacail">Years in prison</p>
                                            </div>
                                            <div className="col-sm-5">
                                                <p className="text-muted mb-0 d-flex speacail">15</p>
                                            </div>
                                        </div>

                                    </div>

                                    <hr />
                                    <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                        <div className="row py-3 shadow-5">

                                            <h1 className="mb-4 text-primary font-italic me-1 d-flex speacail">Crimnal's Fingerprints</h1>

                                            <div className="col-12 mb-1">

                                            </div>

                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 3"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 4"
                                                    className="w-100"
                                                />
                                            </div>





                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 1"
                                                    className="active w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 2"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 3"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 4"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 1"
                                                    className="active w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 2"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 3"
                                                    className="w-100"
                                                />
                                            </div>
                                            <div className="col-2 mt-1">
                                                <img
                                                    src={image1}
                                                    alt="Gallery image 4"
                                                    className="w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>






                                </div>


                            </div>






                        </div>
                    </div>
                </form >
            </div >
        </>);
}