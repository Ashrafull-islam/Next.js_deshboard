"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Theme JS */}
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
            <h2 className="content-header-title float-start mb-0">Navs</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Navs</li>
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
      {/* Horizontal Nav starts */}
      <section id="horizontal-base-nav">
        <div className="row match-height">
          {/* Base Nav starts */}
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Base Nav</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  The base <code>.nav</code> component is built with flexbox and
                  provide a strong foundation for building all types of
                  navigation components.
                </p>
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Base Nav ends */}
          {/* With Border starts */}
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">With Border</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use Class <code>.wrap-border</code> with your{" "}
                  <code>&lt;nav&gt;</code> tag to wrap your nav with a border.
                </p>
                <ul className="nav wrap-border">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* With Border ends */}
          {/* Center Alignment starts */}
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Center Alignment</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use Class <code>.justify-content-center</code> with your{" "}
                  <code>&lt;nav&gt;</code> tag to align your nav to center.
                </p>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Center Alignment ends */}
          {/* End Alignment starts */}
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">End Alignment</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use Class <code>.justify-content-end</code> with your{" "}
                  <code>&lt;nav&gt;</code> tag to align your nav to end.
                </p>
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Alignment ends */}
        </div>
      </section>
      {/* Horizontal Nav Ends */}
      {/* Basic Vertical Navs start */}
      <section id="basic-nav-components">
        <div className="row match-height">
          {/* Vertical Nav starts */}
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Vertical nav</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Roll your own navigation style by extending the base{" "}
                  <code>.nav</code> component. All Bootstrap’s nav components
                  are built on top of this by specifying additional styles.
                </p>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Vertical Nav ends */}
          {/* Vertical Nav with Border starts */}
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Nav with Border</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To wrap with border, use <code>.wrap-border</code> class.
                </p>
                <ul className="nav flex-column wrap-border">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Vertical Nav with Border ends */}
          {/* Vertical Nav with Square Border starts */}
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Nav with Square Border</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To wrap with square border, use <code>.square-border</code>{" "}
                  class with <code>.wrap-border</code> class.
                </p>
                <ul className="nav flex-column wrap-border square-border">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Vertical Nav with Square Border ends */}
          {/* Vertical Nav with Divider starts */}
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Nav with Divider</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To add divider, use <code>.dropdown-divider</code> class to{" "}
                  <code>&lt;li&gt;</code>.
                </p>
                <ul className="nav flex-column wrap-border">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Vertical Nav with Divider ends */}
        </div>
      </section>
      {/* Basic Vertical Navs end */}
    </div>
  </div>
</div>

    </>
  )
}
