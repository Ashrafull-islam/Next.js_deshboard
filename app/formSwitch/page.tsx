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
            <h2 className="content-header-title float-start mb-0">Switch</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Form Elements</a>
                </li>
                <li className="breadcrumb-item active">Switch</li>
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
      {/* Basic Switches Starts */}
      <section id="basic-switches">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Switch</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch1"
                    />
                    <label className="form-check-label" htmlFor="customSwitch1">
                      Toggle this switch element
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      disabled={true}
                      id="customSwitch2"
                    />
                    <label className="form-check-label" htmlFor="customSwitch2">
                      Disabled switch element
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Switches Ends */}
      {/* Switch Colors Starts */}
      <section id="switch-colors">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Colored Switch</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use class{" "}
                  <code>
                    .form-check-#{"{"}$color-name{"}"}
                  </code>{" "}
                  with <code>.form-switch</code> to change switch's color
                </p>
                <div className="demo-inline-spacing">
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch3"
                    >
                      Primary
                    </label>
                    <div className="form-check form-check-primary form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch3"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch44"
                    >
                      Secondary
                    </label>
                    <div className="form-check form-check-secondary form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch44"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch4"
                    >
                      Success
                    </label>
                    <div className="form-check form-check-success form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch4"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch5"
                    >
                      Danger
                    </label>
                    <div className="form-check form-check-danger form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch5"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch7"
                    >
                      Warning
                    </label>
                    <div className="form-check form-check-warning form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch7"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch6"
                    >
                      Info
                    </label>
                    <div className="form-check form-check-info form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch6"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch8"
                    >
                      Dark
                    </label>
                    <div className="form-check form-check-dark form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-check-input"
                        id="customSwitch8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Switch Colors Ends */}
      {/* Switch Icons Starts */}
      <section id="switch-icons">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Switch with Icons</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use class{" "}
                  <code>.switch-icon-left &amp; .switch-icon-right</code> inside
                  of <code>.form-check-label</code> to create a switch with
                  icon.
                </p>
                <div className="demo-inline-spacing">
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch10"
                    >
                      Primary
                    </label>
                    <div className="form-check form-switch form-check-primary">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch10"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch10"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch11"
                    >
                      Secondary
                    </label>
                    <div className="form-check form-switch form-check-secondary">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch11"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch11"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch111"
                    >
                      Success
                    </label>
                    <div className="form-check form-switch form-check-success">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch111"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch111"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch12"
                    >
                      Danger
                    </label>
                    <div className="form-check form-switch form-check-danger">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch12"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch12"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch14"
                    >
                      Warning
                    </label>
                    <div className="form-check form-switch form-check-warning">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch14"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch14"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch13"
                    >
                      Info
                    </label>
                    <div className="form-check form-switch form-check-info">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch13"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch13"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label
                      className="form-check-label mb-50"
                      htmlFor="customSwitch15"
                    >
                      Dark
                    </label>
                    <div className="form-check form-switch form-check-dark">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch15"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch15"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Switch Icons Ends */}
    </div>
  </div>
</div>

    </>
  )
}
