"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
      <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

      {/* BEGIN: Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* BEGIN: Page JS */}
      <Script src="/app-assets/js/scripts/components/components-bs-toast.js" strategy="afterInteractive" />
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">Toasts</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Toasts</li>
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
      {/* Start of Bootstrap Toasts */}
      <section id="bootstrap-toasts">
        {/* Translucent toast and basic toasts starts  */}
        <div className="row match-height">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Toast</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
                <button className="btn btn-outline-primary toast-basic-toggler mt-2">
                  Toast
                </button>
                {/* Basic toast */}
                <div className="toast-container">
                  <div
                    className="toast basic-toast position-fixed top-0 end-0 m-2"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="toast-header">
                      <img
                        src="../../../app-assets/images/logo/logo.png"
                        className="me-1"
                        alt="Toast image"
                        height={18}
                        width={25}
                      />
                      <strong className="me-auto">Vue Admin</strong>
                      <small className="text-muted">11 mins ago</small>
                      <button
                        type="button"
                        className="ms-1 btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                      />
                    </div>
                    <div className="toast-body">
                      Hello, world! This is a toast message. Hope you're doing
                      well.. :)
                    </div>
                  </div>
                </div>
                {/* <div class="position-fixed top-0 end-0 p-2">
    </div> */}
                {/* Basic toast ends */}
              </div>
            </div>
          </div>
          {/* Translucent toast  */}
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Translucent</h4>
                <p className="card-text mt-1">
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over. For browsers that support the
                  backdrop-filter CSS property, we’ll also attempt to blur the
                  elements under a toast.
                </p>
              </div>
              <div className="card-body bg-primary rounded-bottom">
                <div
                  className="toast show fade mt-1"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <img
                      src="../../../app-assets/images/logo/logo.png"
                      className="me-1"
                      alt="Toast image"
                      height={18}
                      width={25}
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">11 mins ago</small>
                    <button
                      type="button"
                      className="ms-1 btn-close"
                      aria-label="Close"
                    />
                  </div>
                  <div className="toast-body">
                    Hello, world! This is a toast message. Hope you're doing
                    well.. :)
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Translucent toast  */}
          {/*/ toast stacking */}
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Stacking</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  When you have multiple toasts, it will vertically stack them
                  in a readable manner.
                </p>
                <div className="demo-inline-spacing">
                  <button className="btn btn-outline-primary toast-autohide-toggler">
                    Auto Hide Off
                  </button>
                  <button className="btn btn-outline-primary toast-stacked-toggler">
                    Staked Toast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ toast stacking */}
      </section>
      {/* End of Bootstrap Toasts */}
      <div
        className="toast-container position-fixed top-0 end-0 p-2"
        style={{ zIndex: 15 }}
      >
        <div
          className="toast toast-autohide hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="toast-header">
            <img
              src="../../../app-assets/images/logo/logo.png"
              className="me-1"
              alt="Toast Image"
              height={18}
              width={25}
            />
            <strong className="me-auto">Vue Admin</strong>
            <small className="text-muted">just now</small>
            <button
              type="button"
              className="ms-1 btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">
            See? Just like this. Fruitcake chocolate bar tootsie jelly beans
            cake.
          </div>
        </div>
        <div
          className="toast toast-stacked hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img
              src="../../../app-assets/images/logo/logo.png"
              className="me-1"
              alt="Toast Image"
              height={18}
              width={25}
            />
            <strong className="me-auto">Vue Admin</strong>
            <small className="text-muted">2 seconds ago</small>
            <button
              type="button"
              className="ms-1 btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">
            Heads up, toasts will stack automatically.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
