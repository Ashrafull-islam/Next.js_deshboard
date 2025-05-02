"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
    {/* BEGIN: Vendor JS */}
    <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* BEGIN: Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
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
              Form Layouts
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Forms</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Form Layouts</a>
                </li>
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
      {/* Basic Horizontal form layout section start */}
      <section id="basic-horizontal-layouts">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Horizontal Form</h4>
              </div>
              <div className="card-body">
                <form className="form form-horizontal">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label
                            className="col-form-label"
                            htmlFor="first-name"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            id="first-name"
                            className="form-control"
                            name="fname"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label className="col-form-label" htmlFor="email-id">
                            Email
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            id="email-id"
                            className="form-control"
                            name="email-id"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label
                            className="col-form-label"
                            htmlFor="contact-info"
                          >
                            Mobile
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            id="contact-info"
                            className="form-control"
                            name="contact"
                            placeholder="Mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label className="col-form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 offset-sm-3">
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 offset-sm-3">
                      <button type="reset" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Horizontal Form with Icons</h4>
              </div>
              <div className="card-body">
                <form className="form form-horizontal">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label
                            className="col-form-label"
                            htmlFor="fname-icon"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">
                              <i data-feather="user" />
                            </span>
                            <input
                              type="text"
                              id="fname-icon"
                              className="form-control"
                              name="fname-icon"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label
                            className="col-form-label"
                            htmlFor="email-icon"
                          >
                            Email
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">
                              <i data-feather="mail" />
                            </span>
                            <input
                              type="email"
                              id="email-icon"
                              className="form-control"
                              name="email-id-icon"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label
                            className="col-form-label"
                            htmlFor="contact-icon"
                          >
                            Mobile
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">
                              <i data-feather="smartphone" />
                            </span>
                            <input
                              type="number"
                              id="contact-icon"
                              className="form-control"
                              name="contact-icon"
                              placeholder="Mobile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1 row">
                        <div className="col-sm-3">
                          <label className="col-form-label" htmlFor="pass-icon">
                            Password
                          </label>
                        </div>
                        <div className="col-sm-9">
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">
                              <i data-feather="lock" />
                            </span>
                            <input
                              type="password"
                              id="pass-icon"
                              className="form-control"
                              name="contact-icon"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 offset-sm-3">
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck2"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 offset-sm-3">
                      <button type="reset" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Horizontal form layout section end */}
      {/* Basic Vertical form layout section start */}
      <section id="basic-vertical-layouts">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Vertical Form</h4>
              </div>
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="first-name-vertical"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name-vertical"
                          className="form-control"
                          name="fname"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="email-id-vertical"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email-id-vertical"
                          className="form-control"
                          name="email-id"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="contact-info-vertical"
                        >
                          Mobile
                        </label>
                        <input
                          type="number"
                          id="contact-info-vertical"
                          className="form-control"
                          name="contact"
                          placeholder="Mobile"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="password-vertical"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password-vertical"
                          className="form-control"
                          name="contact"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck3"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="reset" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Vertical Form with Icons</h4>
              </div>
              <div className="card-body">
                <form className="form form-vertical">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="first-name-icon">
                          First Name
                        </label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i data-feather="user" />
                          </span>
                          <input
                            type="text"
                            id="first-name-icon"
                            className="form-control"
                            name="fname-icon"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="email-id-icon">
                          Email
                        </label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i data-feather="mail" />
                          </span>
                          <input
                            type="email"
                            id="email-id-icon"
                            className="form-control"
                            name="email-id-icon"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="contact-info-icon"
                        >
                          Mobile
                        </label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i data-feather="smartphone" />
                          </span>
                          <input
                            type="number"
                            id="contact-info-icon"
                            className="form-control"
                            name="contact-icon"
                            placeholder="Mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="password-icon">
                          Password
                        </label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i data-feather="lock" />
                          </span>
                          <input
                            type="password"
                            id="password-icon"
                            className="form-control"
                            name="contact-icon"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck4"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="reset" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Vertical form layout section end */}
      {/* Basic multiple Column Form section start */}
      <section id="multiple-column-form">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Multiple Column</h4>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="first-name-column"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name-column"
                          className="form-control"
                          placeholder="First Name"
                          name="fname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="last-name-column"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name-column"
                          className="form-control"
                          placeholder="Last Name"
                          name="lname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="city-column">
                          City
                        </label>
                        <input
                          type="text"
                          id="city-column"
                          className="form-control"
                          placeholder="City"
                          name="city-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="country-floating"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country-floating"
                          className="form-control"
                          name="country-floating"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="company-column">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company-column"
                          className="form-control"
                          name="company-column"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="email-id-column">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email-id-column"
                          className="form-control"
                          name="email-id-column"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="reset" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Floating Label Form section end */}
    </div>
  </div>
</div>

    </>
  )
}
