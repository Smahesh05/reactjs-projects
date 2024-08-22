import React from "react";

function Dashboard() {
  return (
    <div className="bg-primary-100 w-100 h-100">
      <div className="container py-4">
        <div className="d-flex justify-content-between ">
          <h3 className="h3">CNAPP Dashboard</h3>
          <div className=" d-flex gap-2">
            <button className="btn btn-light border">Add Widget +</button>
            <div className="">
              <i class="fa-solid fa-arrows-rotate p-2 border rounded bg-light"></i>
            </div>
          </div>
        </div>
        <h4>CSPM Executive Dashboard</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" style={{ minHeight: "200px" }}>
              <div className="card-header">
                <h6 className="fw-bold">Card title</h6>
              </div>
              <div className="card-body">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <button className="btn btn-light fw-500">+ Add Widget</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100" style={{ minHeight: "200px" }}>
              <div className="card-header">
                <h6 className="fw-bold">Card title</h6>
              </div>
              <div className="card-body">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <button className="btn btn-light fw-500">+ Add Widget</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100" style={{ minHeight: "200px" }}>
              <div className="card-header">
                <h6 className="fw-bold">Card title</h6>
              </div>
              <div className="card-body">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <button className="btn btn-light fw-500">+ Add Widget</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
