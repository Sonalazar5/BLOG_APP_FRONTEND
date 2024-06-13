import React from 'react'

const AddSignUp = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" className="form-control" />
                    </div>
                   <center> <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <button class="btn btn-primary">LOGIN</button>
                    </div></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSignUp