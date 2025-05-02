"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="beforeInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Progress
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Progress</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
              <div className="mb-1 breadcrumb-right">
                <div className="dropdown">
                  <button
                    className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-feather="grid" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="app-todo.html">
                      <i className="me-1" data-feather="check-square" />
                      <span className="align-middle">Todo</span>
                    </a>
                    <a className="dropdown-item" href="app-chat.html">
                      <i className="me-1" data-feather="message-square" />
                      <span className="align-middle">Chat</span>
                    </a>
                    <a className="dropdown-item" href="app-email.html">
                      <i className="me-1" data-feather="mail" />
                      <span className="align-middle">Email</span>
                    </a>
                    <a className="dropdown-item" href="app-calendar.html">
                      <i className="me-1" data-feather="calendar" />
                      <span className="align-middle">Calendar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            {/* Basic Progress start */}
            <section id="basic-progress">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Progress</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-vertical-spacing">
                        <div className="progress-wrapper">
                          <div id="example-caption-1">
                            Reticulating splines… 0%
                          </div>
                          <div className="progress progress-bar-primary">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-describedby="example-caption-1"
                            />
                          </div>
                        </div>
                        <div className="progress-wrapper">
                          <div id="example-caption-2">
                            Reticulating splines… 25%
                          </div>
                          <div className="progress progress-bar-primary">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={25}
                              aria-valuemin={25}
                              aria-valuemax={100}
                              style={{ width: "25%" }}
                              aria-describedby="example-caption-2"
                            />
                          </div>
                        </div>
                        <div className="progress-wrapper">
                          <div id="example-caption-3">
                            Reticulating splines… 50%
                          </div>
                          <div className="progress progress-bar-primary">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={50}
                              aria-valuemax={100}
                              style={{ width: "50%" }}
                              aria-describedby="example-caption-3"
                            />
                          </div>
                        </div>
                        <div className="progress-wrapper">
                          <div id="example-caption-4">
                            Reticulating splines… 75%
                          </div>
                          <div className="progress progress-bar-primary">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={75}
                              aria-valuemax={100}
                              style={{ width: "75%" }}
                              aria-describedby="example-caption-4"
                            />
                          </div>
                        </div>
                        <div className="progress-wrapper">
                          <div id="example-caption-5">
                            Reticulating splines… 100%
                          </div>
                          <div className="progress progress-bar-primary">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={100}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                              aria-describedby="example-caption-5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Progress end */}
            {/* Colored Progress start */}
            <section id="colored-progress">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Colored Progress</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class{" "}
                        <code>
                          .progress-bar-{"{"}color-name{"}"}
                        </code>
                        . to choose color of your choice.
                      </p>
                      <div className="demo-vertical-spacing">
                        <div className="progress progress-bar-primary">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={25}
                            aria-valuemax={100}
                            style={{ width: "25%" }}
                          />
                        </div>
                        <div className="progress progress-bar-secondary">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={35}
                            aria-valuemin={35}
                            aria-valuemax={100}
                            style={{ width: "35%" }}
                          />
                        </div>
                        <div className="progress progress-bar-success">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={45}
                            aria-valuemin={45}
                            aria-valuemax={100}
                            style={{ width: "45%" }}
                          />
                        </div>
                        <div className="progress progress-bar-danger">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={55}
                            aria-valuemin={55}
                            aria-valuemax={100}
                            style={{ width: "55%" }}
                          />
                        </div>
                        <div className="progress progress-bar-warning">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={65}
                            aria-valuemin={65}
                            aria-valuemax={100}
                            style={{ width: "65%" }}
                          />
                        </div>
                        <div className="progress progress-bar-info">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={75}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          />
                        </div>
                        <div className="progress progress-bar-dark">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={85}
                            aria-valuemax={100}
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Colored Progress end */}
            {/* Labeled Progress start */}
            <section id="labeled-progress">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Labeled Progress</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-vertical-spacing">
                        <div className="progress progress-bar-primary">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={25}
                            aria-valuemax={100}
                            style={{ width: "25%" }}
                          >
                            25%
                          </div>
                        </div>
                        <div className="progress progress-bar-secondary">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={35}
                            aria-valuemin={35}
                            aria-valuemax={100}
                            style={{ width: "35%" }}
                          >
                            35%
                          </div>
                        </div>
                        <div className="progress progress-bar-success">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={45}
                            aria-valuemin={45}
                            aria-valuemax={100}
                            style={{ width: "45%" }}
                          >
                            45%
                          </div>
                        </div>
                        <div className="progress progress-bar-danger">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={55}
                            aria-valuemin={55}
                            aria-valuemax={100}
                            style={{ width: "55%" }}
                          >
                            55%
                          </div>
                        </div>
                        <div className="progress progress-bar-warning">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={65}
                            aria-valuemin={65}
                            aria-valuemax={100}
                            style={{ width: "65%" }}
                          >
                            65%
                          </div>
                        </div>
                        <div className="progress progress-bar-info">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={75}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <div className="progress progress-bar-dark">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={85}
                            aria-valuemax={100}
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Labeled Progress end */}
            <section id="multiple-bars">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple Stacked Bar</h4>
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          15%
                        </div>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          50%
                        </div>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          10%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Striped Progress start */}
            <section id="striped-progress">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Striped Progress</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Uses a gradient to create a striped effect, add{" "}
                        <code>.progress-bar-striped</code> with
                        <code>.progress-bar</code> class.
                      </p>
                      <div className="demo-vertical-spacing">
                        <div className="progress progress-bar-primary">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={20}
                            aria-valuemax={100}
                            style={{ width: "20%" }}
                          />
                        </div>
                        <div className="progress progress-bar-success">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={40}
                            aria-valuemin={40}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          />
                        </div>
                        <div className="progress progress-bar-danger">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={60}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                        <div className="progress progress-bar-warning">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={80}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          />
                        </div>
                        <div className="progress progress-bar-info">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={100}
                            aria-valuemax={100}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Striped Progress end */}
            {/* Animated Progress start */}
            <section id="animated-progress">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Animated Progress</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To get progressbar with animated effect, add{" "}
                        <code>.progress-bar-animated</code> with
                        <code>.progress-bar</code> class.
                      </p>
                      <div className="demo-vertical-spacing">
                        <div className="progress progress-bar-primary">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={20}
                            aria-valuemax={100}
                            style={{ width: "20%" }}
                          />
                        </div>
                        <div className="progress progress-bar-success">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={40}
                            aria-valuemin={40}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          />
                        </div>
                        <div className="progress progress-bar-danger">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={60}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                        <div className="progress progress-bar-warning">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={80}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          />
                        </div>
                        <div className="progress progress-bar-info">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={100}
                            aria-valuemax={100}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Animated Progress end */}
          </div>
        </div>
      </div>
    </>
  );
}
