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

      {/* BEGIN: Page Vendor JS */}
      <Script
        src="/app-assets/vendors/js/forms/wizard/bs-stepper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* BEGIN: Page JS */}
      <Script
        src="/app-assets/js/scripts/forms/form-wizard.js"
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
                    Form Wizard
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      <li className="breadcrumb-item active">Form Wizard</li>
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
            {/* Horizontal Wizard */}
            <section className="horizontal-wizard">
              <div className="bs-stepper horizontal-wizard-example">
                <div className="bs-stepper-header" role="tablist">
                  <div
                    className="step"
                    data-target="#account-details"
                    role="tab"
                    id="account-details-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">1</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">
                          Account Details
                        </span>
                        <span className="bs-stepper-subtitle">
                          Setup Account Details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#personal-info"
                    role="tab"
                    id="personal-info-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">2</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Personal Info</span>
                        <span className="bs-stepper-subtitle">
                          Add Personal Info
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#address-step"
                    role="tab"
                    id="address-step-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">3</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Address</span>
                        <span className="bs-stepper-subtitle">Add Address</span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#social-links"
                    role="tab"
                    id="social-links-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">4</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Social Links</span>
                        <span className="bs-stepper-subtitle">
                          Add Social Links
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content">
                  <div
                    id="account-details"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="account-details-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Account Details</h5>
                      <small className="text-muted">
                        Enter Your Account Details.
                      </small>
                    </div>
                    <form>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="johndoe"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="john.doe@email.com"
                            aria-label="john.doe"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-1 form-password-toggle col-md-6">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="············"
                          />
                        </div>
                        <div className="mb-1 form-password-toggle col-md-6">
                          <label
                            className="form-label"
                            htmlFor="confirm-password"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className="form-control"
                            placeholder="············"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="personal-info"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="personal-info-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Personal Info</h5>
                      <small>Enter Your Personal Info.</small>
                    </div>
                    <form>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="first-name">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="form-control"
                            placeholder="John"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="last-name">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            className="form-control"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="country">
                            Country
                          </label>
                          <select
                            className="select2 w-100"
                            name="country"
                            id="country"
                          >
                            <option label=" " />
                            <option>UK</option>
                            <option>USA</option>
                            <option>Spain</option>
                            <option>France</option>
                            <option>Italy</option>
                            <option>Australia</option>
                          </select>
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="language">
                            Language
                          </label>
                          <select
                            className="select2 w-100"
                            name="language"
                            id="language"
                            multiple={true}
                          >
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                          </select>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="address-step"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="address-step-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Address</h5>
                      <small>Enter Your Address.</small>
                    </div>
                    <form>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            placeholder="98  Borough bridge Road, Birmingham"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="landmark">
                            Landmark
                          </label>
                          <input
                            type="text"
                            name="landmark"
                            id="landmark"
                            className="form-control"
                            placeholder="Borough bridge"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="pincode1">
                            Pincode
                          </label>
                          <input
                            type="text"
                            id="pincode1"
                            className="form-control"
                            placeholder="10002"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="city1">
                            City
                          </label>
                          <input
                            type="text"
                            id="city1"
                            className="form-control"
                            placeholder="Birmingham"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="social-links"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="social-links-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Social Links</h5>
                      <small>Enter Your Social Links.</small>
                    </div>
                    <form>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="twitter">
                            Twitter
                          </label>
                          <input
                            type="text"
                            id="twitter"
                            name="twitter"
                            className="form-control"
                            placeholder="https://twitter.com/abc"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="facebook">
                            Facebook
                          </label>
                          <input
                            type="text"
                            id="facebook"
                            name="facebook"
                            className="form-control"
                            placeholder="https://facebook.com/abc"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="google">
                            Google+
                          </label>
                          <input
                            type="text"
                            id="google"
                            name="google"
                            className="form-control"
                            placeholder="https://plus.google.com/abc"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="linkedin">
                            Linkedin
                          </label>
                          <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            className="form-control"
                            placeholder="https://linkedin.com/abc"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Horizontal Wizard */}
            {/* Vertical Wizard */}
            <section className="vertical-wizard">
              <div className="bs-stepper vertical vertical-wizard-example">
                <div className="bs-stepper-header">
                  <div
                    className="step"
                    data-target="#account-details-vertical"
                    role="tab"
                    id="account-details-vertical-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">1</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">
                          Account Details
                        </span>
                        <span className="bs-stepper-subtitle">
                          Setup Account Details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#personal-info-vertical"
                    role="tab"
                    id="personal-info-vertical-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">2</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Personal Info</span>
                        <span className="bs-stepper-subtitle">
                          Add Personal Info
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#address-step-vertical"
                    role="tab"
                    id="address-step-vertical-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">3</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Address</span>
                        <span className="bs-stepper-subtitle">Add Address</span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#social-links-vertical"
                    role="tab"
                    id="social-links-vertical-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">4</span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Social Links</span>
                        <span className="bs-stepper-subtitle">
                          Add Social Links
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content">
                  <div
                    id="account-details-vertical"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="account-details-vertical-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Account Details</h5>
                      <small className="text-muted">
                        Enter Your Account Details.
                      </small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-username"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="vertical-username"
                          className="form-control"
                          placeholder="johndoe"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="vertical-email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="vertical-email"
                          className="form-control"
                          placeholder="john.doe@email.com"
                          aria-label="john.doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="vertical-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-confirm-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="vertical-confirm-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="personal-info-vertical"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="personal-info-vertical-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Personal Info</h5>
                      <small>Enter Your Personal Info.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-first-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="vertical-first-name"
                          className="form-control"
                          placeholder="John"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="vertical-last-name"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-country"
                        >
                          Country
                        </label>
                        <select className="select2 w-100" id="vertical-country">
                          <option label=" " />
                          <option>UK</option>
                          <option>USA</option>
                          <option>Spain</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-language"
                        >
                          Language
                        </label>
                        <select
                          className="select2 w-100"
                          id="vertical-language"
                          multiple={true}
                        >
                          <option>English</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="address-step-vertical"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="address-step-vertical-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Address</h5>
                      <small>Enter Your Address.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-address"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="vertical-address"
                          className="form-control"
                          placeholder="98  Borough bridge Road, Birmingham"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-landmark"
                        >
                          Landmark
                        </label>
                        <input
                          type="text"
                          id="vertical-landmark"
                          className="form-control"
                          placeholder="Borough bridge"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="pincode2">
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode2"
                          className="form-control"
                          placeholder="10002"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="city2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city2"
                          className="form-control"
                          placeholder="Birmingham"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="social-links-vertical"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="social-links-vertical-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Social Links</h5>
                      <small>Enter Your Social Links.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-twitter"
                        >
                          Twitter
                        </label>
                        <input
                          type="text"
                          id="vertical-twitter"
                          className="form-control"
                          placeholder="https://twitter.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-facebook"
                        >
                          Facebook
                        </label>
                        <input
                          type="text"
                          id="vertical-facebook"
                          className="form-control"
                          placeholder="https://facebook.com/abc"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="vertical-google">
                          Google+
                        </label>
                        <input
                          type="text"
                          id="vertical-google"
                          className="form-control"
                          placeholder="https://plus.google.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-linkedin"
                        >
                          Linkedin
                        </label>
                        <input
                          type="text"
                          id="vertical-linkedin"
                          className="form-control"
                          placeholder="https://linkedin.com/abc"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Vertical Wizard */}
            {/* Modern Horizontal Wizard */}
            <section className="modern-horizontal-wizard">
              <div className="bs-stepper wizard-modern modern-wizard-example">
                <div className="bs-stepper-header">
                  <div
                    className="step"
                    data-target="#account-details-modern"
                    role="tab"
                    id="account-details-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="file-text" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">
                          Account Details
                        </span>
                        <span className="bs-stepper-subtitle">
                          Setup Account Details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#personal-info-modern"
                    role="tab"
                    id="personal-info-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="user" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Personal Info</span>
                        <span className="bs-stepper-subtitle">
                          Add Personal Info
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#address-step-modern"
                    role="tab"
                    id="address-step-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="map-pin" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Address</span>
                        <span className="bs-stepper-subtitle">Add Address</span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#social-links-modern"
                    role="tab"
                    id="social-links-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="link" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Social Links</span>
                        <span className="bs-stepper-subtitle">
                          Add Social Links
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content">
                  <div
                    id="account-details-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="account-details-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Account Details</h5>
                      <small className="text-muted">
                        Enter Your Account Details.
                      </small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-username">
                          Username
                        </label>
                        <input
                          type="text"
                          id="modern-username"
                          className="form-control"
                          placeholder="johndoe"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="modern-email"
                          className="form-control"
                          placeholder="john.doe@email.com"
                          aria-label="john.doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label className="form-label" htmlFor="modern-password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="modern-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modern-confirm-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="modern-confirm-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="personal-info-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="personal-info-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Personal Info</h5>
                      <small>Enter Your Personal Info.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modern-first-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="modern-first-name"
                          className="form-control"
                          placeholder="John"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="modern-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="modern-last-name"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-country">
                          Country
                        </label>
                        <select className="select2 w-100" id="modern-country">
                          <option label=" " />
                          <option>UK</option>
                          <option>USA</option>
                          <option>Spain</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-language">
                          Language
                        </label>
                        <select
                          className="select2 w-100"
                          id="modern-language"
                          multiple={true}
                        >
                          <option>English</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="address-step-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="address-step-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Address</h5>
                      <small>Enter Your Address.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-address">
                          Address
                        </label>
                        <input
                          type="text"
                          id="modern-address"
                          className="form-control"
                          placeholder="98  Borough bridge Road, Birmingham"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-landmark">
                          Landmark
                        </label>
                        <input
                          type="text"
                          id="modern-landmark"
                          className="form-control"
                          placeholder="Borough bridge"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="pincode3">
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode3"
                          className="form-control"
                          placeholder="10002"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="city3">
                          City
                        </label>
                        <input
                          type="text"
                          id="city3"
                          className="form-control"
                          placeholder="Birmingham"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="social-links-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="social-links-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Social Links</h5>
                      <small>Enter Your Social Links.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-twitter">
                          Twitter
                        </label>
                        <input
                          type="text"
                          id="modern-twitter"
                          className="form-control"
                          placeholder="https://twitter.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-facebook">
                          Facebook
                        </label>
                        <input
                          type="text"
                          id="modern-facebook"
                          className="form-control"
                          placeholder="https://facebook.com/abc"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-google">
                          Google+
                        </label>
                        <input
                          type="text"
                          id="modern-google"
                          className="form-control"
                          placeholder="https://plus.google.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="modern-linkedin">
                          Linkedin
                        </label>
                        <input
                          type="text"
                          id="modern-linkedin"
                          className="form-control"
                          placeholder="https://linkedin.com/abc"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Modern Horizontal Wizard */}
            {/* Modern Vertical Wizard */}
            <section className="modern-vertical-wizard">
              <div className="bs-stepper vertical wizard-modern modern-vertical-wizard-example">
                <div className="bs-stepper-header">
                  <div
                    className="step"
                    data-target="#account-details-vertical-modern"
                    role="tab"
                    id="account-details-vertical-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="file-text" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">
                          Account Details
                        </span>
                        <span className="bs-stepper-subtitle">
                          Setup Account Details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#personal-info-vertical-modern"
                    role="tab"
                    id="personal-info-vertical-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="user" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Personal Info</span>
                        <span className="bs-stepper-subtitle">
                          Add Personal Info
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#address-step-vertical-modern"
                    role="tab"
                    id="address-step-vertical-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="map-pin" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Address</span>
                        <span className="bs-stepper-subtitle">Add Address</span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#social-links-vertical-modern"
                    role="tab"
                    id="social-links-vertical-modern-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="link" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Social Links</span>
                        <span className="bs-stepper-subtitle">
                          Add Social Links
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content">
                  <div
                    id="account-details-vertical-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="account-details-vertical-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Account Details</h5>
                      <small className="text-muted">
                        Enter Your Account Details.
                      </small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-username"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-username"
                          className="form-control"
                          placeholder="johndoe"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="vertical-modern-email"
                          className="form-control"
                          placeholder="john.doe@email.com"
                          aria-label="john.doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="vertical-modern-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                      <div className="mb-1 form-password-toggle col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-confirm-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="vertical-modern-confirm-password"
                          className="form-control"
                          placeholder="············"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="personal-info-vertical-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="personal-info-vertical-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Personal Info</h5>
                      <small>Enter Your Personal Info.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-first-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-first-name"
                          className="form-control"
                          placeholder="John"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-last-name"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-country"
                        >
                          Country
                        </label>
                        <select
                          className="select2 w-100"
                          id="vertical-modern-country"
                        >
                          <option label=" " />
                          <option>UK</option>
                          <option>USA</option>
                          <option>Spain</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-language"
                        >
                          Language
                        </label>
                        <select
                          className="select2 w-100"
                          id="vertical-modern-language"
                          multiple={true}
                        >
                          <option>English</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="address-step-vertical-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="address-step-vertical-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Address</h5>
                      <small>Enter Your Address.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-address"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-address"
                          className="form-control"
                          placeholder="98  Borough bridge Road, Birmingham"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-landmark"
                        >
                          Landmark
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-landmark"
                          className="form-control"
                          placeholder="Borough bridge"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="pincode4">
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode4"
                          className="form-control"
                          placeholder="10002"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label className="form-label" htmlFor="city4">
                          City
                        </label>
                        <input
                          type="text"
                          id="city4"
                          className="form-control"
                          placeholder="Birmingham"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="social-links-vertical-modern"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="social-links-vertical-modern-trigger"
                  >
                    <div className="content-header">
                      <h5 className="mb-0">Social Links</h5>
                      <small>Enter Your Social Links.</small>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-twitter"
                        >
                          Twitter
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-twitter"
                          className="form-control"
                          placeholder="https://twitter.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-facebook"
                        >
                          Facebook
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-facebook"
                          className="form-control"
                          placeholder="https://facebook.com/abc"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-google"
                        >
                          Google+
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-google"
                          className="form-control"
                          placeholder="https://plus.google.com/abc"
                        />
                      </div>
                      <div className="mb-1 col-md-6">
                        <label
                          className="form-label"
                          htmlFor="vertical-modern-linkedin"
                        >
                          Linkedin
                        </label>
                        <input
                          type="text"
                          id="vertical-modern-linkedin"
                          className="form-control"
                          placeholder="https://linkedin.com/abc"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Modern Vertical Wizard */}
          </div>
        </div>
      </div>
    </>
  );
}
