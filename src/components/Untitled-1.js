import Header from "./header";
import './styles/search.css'
import './styles/upload.css'
import './styles/upload.css'

import image1 from './Images/1.jpg'

export default function Search() {


    return (
        <>



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
                                            </div>

                                        </div>
                                    </div></form></div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
