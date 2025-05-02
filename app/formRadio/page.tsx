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
            <h2 className="content-header-title float-start mb-0">Radio</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Form Elements</a>
                </li>
                <li className="breadcrumb-item active">Radio</li>
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
      {/* Basic Radio Button start */}
      <section id="basic-radio">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Radio Buttons</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      defaultValue="option1"
                      defaultChecked={true}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Checked
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Unchecked
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioDisabledOptions"
                      id="inlineRadio3"
                      defaultValue="option3"
                      defaultChecked={true}
                      disabled={true}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Checked disabled
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioDisabledOptions"
                      id="inlineRadio4"
                      defaultValue="option4"
                      disabled={true}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      Unchecked disabled
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Radio Button end */}
      {/* Vuexy Radio Buttons Color start */}
      <section id="vuexy-radio-color">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Color</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  To change the color of the radio use the{" "}
                  <code>
                    .form-check-{"{"}value{"}"}
                  </code>{" "}
                  for primary, secondary, success, danger, info, warning.
                </p>
                <div className="demo-inline-spacing">
                  <div className="form-check form-check-primary">
                    <input
                      type="radio"
                      id="customColorRadio1"
                      name="customColorRadio1"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customColorRadio1"
                    >
                      Primary
                    </label>
                  </div>
                  <div className="form-check form-check-secondary">
                    <input
                      type="radio"
                      id="customColorRadio2"
                      name="customColorRadio2"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customColorRadio2"
                    >
                      Secondary
                    </label>
                  </div>
                  <div className="form-check form-check-success">
                    <input
                      type="radio"
                      id="customColorRadio3"
                      name="customColorRadio3"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customColorRadio3"
                    >
                      Success
                    </label>
                  </div>
                  <div className="form-check form-check-danger">
                    <input
                      type="radio"
                      id="customColorRadio5"
                      name="customColorRadio5"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customColorRadio5"
                    >
                      Danger
                    </label>
                  </div>
                  <div className="form-check form-check-warning">
                    <input
                      type="radio"
                      id="customColorRadio4"
                      name="customColorRadio4"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customColorRadio4"
                    >
                      Warning
                    </label>
                  </div>
                  <div className="form-check form-check-info">
                    <input
                      type="radio"
                      id="customRadio6"
                      name="customColorRadio6"
                      className="form-check-input"
                      defaultChecked={true}
                    />
                    <label className="form-check-label" htmlFor="customRadio6">
                      Info
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vuexy Radio Buttons Color end */}
    </div>
  </div>
</div>

    </>
  )
}
