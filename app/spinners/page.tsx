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
                    Spinner
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Spinner</li>
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
            {/* Start Of Bootstrap Spinners */}
            <section id="bootstrap-spinners">
              <div className="row match-height">
                {/* Border Spinner starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Border Spinners</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.spinner-border</code> for a lightweight
                        loading indicator.
                      </p>
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Border Spinner ends */}
                {/* Colored Spinner starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Colored Spinners</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You can customize the color with text color utilities.
                        You can use any of our text color utilities on the
                        standard spinner. Use{" "}
                        <code>
                          .text-{"{"}color{"}"}
                        </code>
                      </p>
                      <div className="demo-inline-spacing">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-border text-secondary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-border text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-border text-danger"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-border text-warning"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-border text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-border text-dark" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Colored Spinner ends */}
              </div>
              <div className="row match-height">
                {/* Growing Spinner starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Growing Spinner</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.spinner-grow</code> for a growing
                        spinner.
                      </p>
                      <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Growing Spinner ends */}
                {/* Colored Growing Spinner starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Colored Growing Spinners</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You can customize the color with text color utilities.
                        You can use any of our text color utilities on the
                        standard spinner. Use{" "}
                        <code>
                          .text-{"{"}color{"}"}
                        </code>
                      </p>
                      <div className="demo-inline-spacing">
                        <div
                          className="spinner-grow text-primary me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-secondary me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-success me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-danger me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-warning me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-info me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-light me-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Colored Growing Spinner ends */}
              </div>
              <div className="row match-height">
                {/* Spinner using Flex starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Flex</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use Flexbox utilities to place spinners.Use{" "}
                        <code>.d-flex</code> and{" "}
                        <code>
                          .align-items-{"{"}side{"}"}
                        </code>
                        .
                      </p>
                      <div className="d-flex justify-content-center my-1">
                        <div
                          className="spinner-border"
                          role="status"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div
                          className="spinner-border ms-auto"
                          role="status"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Spinner using Flex ends */}
                {/* Spinner using Float starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Float</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You can also use Float to place your spinner{" "}
                        <code>
                          .float-{"{"}side{"}"}
                        </code>
                        .
                      </p>
                      <div className="clearfix">
                        <div className="spinner-border float-end" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Spinner using Float ends */}
              </div>
              <div className="row match-height">
                {/* Spinner using Text Alignment starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Text Alignment</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You can also use{" "}
                        <code>
                          .text-{"{"}side{"}"}
                        </code>{" "}
                        for your spinner's placement.
                      </p>
                      <div className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Spinner using Text Alignment ends */}
                {/* Spinner Sizes starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizes</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use <code>.spinner-border-sm </code> and{" "}
                        <code>.spinner-grow-sm</code> for small sized spinner.
                        For large spinner, you need to add inline style.
                      </p>
                      <div className="demo-inline-spacing">
                        <div>
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                        <div>
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                        <div>
                          <div
                            className="spinner-border"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div
                            className="spinner-grow"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Spinner Sizes ends */}
              </div>
              <div className="row match-height">
                {/* Button Spinner starts */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Buttons</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use <code>.spinner-border</code> or{" "}
                        <code>.spinner-grow</code> inside buttons to indicate an
                        action is currently processing or taking place.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          disabled={true}
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Loading...</span>
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          disabled={true}
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="ms-25 align-middle">Loading...</span>
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          disabled={true}
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Loading...</span>
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          disabled={true}
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="ms-25 align-middle">Loading...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button Spinner ends */}
              </div>
            </section>
            {/* End Of Bootstrap Spinners */}
          </div>
        </div>
      </div>
    </>
  );
}
