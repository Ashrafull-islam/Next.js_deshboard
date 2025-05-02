"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      <Script
        src="../../../app-assets/vendors/js/vendors.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/vendors/js/forms/validation/jquery.validate.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/core/app.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/scripts/pages/page-api-key.js"
        strategy="afterInteractive"
      />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    API Key
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li className="breadcrumb-item active">API Key</li>
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
            <section id="ApiKeyPage">
              {/* create API key */}
              <div className="card">
                <div className="card-header pb-0">
                  <h4 className="card-title">Create an API Key</h4>
                </div>
                <div className="row">
                  <div className="col-md-5 order-md-0 order-1">
                    <div className="card-body">
                      {/* form */}
                      <form id="createApiForm">
                        <div className="mb-2">
                          <label htmlFor="ApiKeyType" className="form-label">
                            Choose the Api key type you want to create
                          </label>
                          <select
                            className="select2 form-select"
                            id="ApiKeyType"
                          >
                            <option value="">Choose Key Type</option>
                            <option value="full">Full Control</option>
                            <option value="modify">Modify</option>
                            <option value="read-execute">
                              Read &amp; Execute
                            </option>
                            <option value="folders">
                              List Folder Contents
                            </option>
                            <option value="read">Read Only</option>
                            <option value="read-write">Read &amp; Write</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="nameApiKey" className="form-label">
                            Name the API key
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="apiKeyName"
                            placeholder="Server Key 1"
                            id="nameApiKey"
                            data-msg="Please enter API key name"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          Create Key
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-7 order-md-1 order-0">
                    <div className="text-center">
                      <img
                        className="img-fluid text-center"
                        src="../../../app-assets/images/illustration/pricing-Illustration.svg"
                        alt="illustration"
                        width={310}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* api key list */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">API Key List &amp; Access</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    An API key is a simple encrypted string that identifies an
                    application without any principal. They are useful for
                    accessing public data anonymously, and are used to associate
                    API requests with your project for quota and billing.
                  </p>
                  <div className="row gy-2">
                    <div className="col-12">
                      <div className="bg-light-secondary position-relative rounded p-2">
                        <div className="dropdown dropstart btn-pinned">
                          <a
                            className="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
                            href="javascript:void(0)"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i
                              data-feather="more-vertical"
                              className="font-medium-4"
                            />
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="trash-2" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mb-1 me-1">Server Key 1</h4>
                          <span className="badge badge-light-primary mb-1">
                            Full Access
                          </span>
                        </div>
                        <h6 className="d-flex align-items-center fw-bolder">
                          <span className="me-50">
                            23eaf7f0-f4f7-495e-8b86-fad3261282ac
                          </span>
                          <span>
                            <i
                              data-feather="copy"
                              className="font-medium-4 cursor-pointer"
                            />
                          </span>
                        </h6>
                        <span>Created on 28 Apr 2020, 18:20 GTM+4:10</span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="bg-light-secondary position-relative rounded p-2">
                        <div className="dropdown dropstart btn-pinned">
                          <a
                            className="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
                            href="javascript:vodi(0)"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i
                              data-feather="more-vertical"
                              className="font-medium-4"
                            />
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="trash-2" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mb-1 me-1">Server Key 2</h4>
                          <span className="badge badge-light-primary mb-1">
                            Read Only
                          </span>
                        </div>
                        <h6 className="d-flex align-items-center fw-bolder">
                          <span className="me-50">
                            bb98e571-a2e2-4de8-90a9-2e231b5e99
                          </span>
                          <span>
                            <i
                              data-feather="copy"
                              className="font-medium-4 cursor-pointer"
                            />
                          </span>
                        </h6>
                        <span>Created on 12 Feb 2020, 10:30 GTM+2:30</span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="bg-light-secondary position-relative rounded p-2">
                        <div className="dropdown dropstart btn-pinned">
                          <a
                            className="btn btn-icon rounded-circle hide-arrow dropdown-toggle p-0"
                            href="javascript:void(0)"
                            id="dropdownMenuButton3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i
                              data-feather="more-vertical"
                              className="font-medium-4"
                            />
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton3"
                          >
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <i data-feather="trash-2" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mb-1 me-1">Server Key 3</h4>
                          <span className="badge badge-light-primary mb-1">
                            Full Access
                          </span>
                        </div>
                        <h6 className="d-flex align-items-center fw-bolder">
                          <span className="me-50">
                            2e915e59-3105-47f2-8838-6e46bf83b711
                          </span>
                          <span>
                            <i
                              data-feather="copy"
                              className="font-medium-4 cursor-pointer"
                            />
                          </span>
                        </h6>
                        <span>Created on 28 Apr 2020, 12:21 GTM+4:10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
