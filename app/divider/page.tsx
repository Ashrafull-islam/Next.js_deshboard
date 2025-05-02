"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
      {/* Vendor JS */}
      <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

      {/* Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="lazyOnload" />
      <Script src="/app-assets/js/core/app.js" strategy="lazyOnload" />
  {/* BEGIN: Content*/}
  <div className="app-content content ">
    <div className="content-overlay" />
    <div className="header-navbar-shadow" />
    <div className="content-wrapper container-xxl p-0">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Divider</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Components</a>
                  </li>
                  <li className="breadcrumb-item active">Divider</li>
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
        {/* Default Divider Starts */}
        <section id="default-divider">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    You can add a line to divide your section using{" "}
                    <code>&lt;hr&gt;</code>
                  </p>
                  <p className="card-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <hr />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Default Divider Ends */}
        {/* Basic Divider Starts */}
        <section id="basic-divider">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Text</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Use class <code>.divider</code> as wrapper for{" "}
                    <code>.divider-text</code> to create a divider text
                  </p>
                  <div className="divider">
                    <div className="divider-text">My Text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Basic Divider Ends */}
        {/* Divider Text Position Starts */}
        <section id="divider-text-position">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Text Position</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Use class{" "}
                    <code>
                      .divider-{"{"}start | start-center | end | end-center{"}"}
                    </code>{" "}
                    with <code>.divider</code>
                    to set text position.
                  </p>
                  <div className="divider divider-start">
                    <div className="divider-text">Left</div>
                  </div>
                  <div className="divider divider-start-center">
                    <div className="divider-text">Left Center</div>
                  </div>
                  <div className="divider">
                    <div className="divider-text">Center(Default)</div>
                  </div>
                  <div className="divider divider-end-center">
                    <div className="divider-text">Right Center</div>
                  </div>
                  <div className="divider divider-end">
                    <div className="divider-text">Right</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider Text Position Ends */}
        {/* Divider Colors Starts */}
        <section id="divider-colors">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Colors</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Use class{" "}
                    <code>
                      .divider-{"{"}color-name{"}"}
                    </code>{" "}
                    to change color of divider
                  </p>
                  <div className="divider">
                    <div className="divider-text">Default</div>
                  </div>
                  <div className="divider divider-primary">
                    <div className="divider-text">Primary</div>
                  </div>
                  <div className="divider divider-secondary">
                    <div className="divider-text">Secondary</div>
                  </div>
                  <div className="divider divider-success">
                    <div className="divider-text">Success</div>
                  </div>
                  <div className="divider divider-danger">
                    <div className="divider-text">Danger</div>
                  </div>
                  <div className="divider divider-warning">
                    <div className="divider-text">Warning</div>
                  </div>
                  <div className="divider divider-info">
                    <div className="divider-text">Info</div>
                  </div>
                  <div className="divider divider-dark">
                    <div className="divider-text">Dark</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider Colors Ends */}
        {/* Divider Icons Starts */}
        <section id="divider-icons">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Icons</h4>
                </div>
                <div className="card-body">
                  <div className="divider divider-start">
                    <div className="divider-text">
                      <i data-feather="arrow-down" />
                    </div>
                  </div>
                  <div className="divider divider-start-center">
                    <div className="divider-text">
                      <i data-feather="star" />
                    </div>
                  </div>
                  <div className="divider">
                    <div className="divider-text">
                      <i data-feather="check" />
                    </div>
                  </div>
                  <div className="divider divider-end-center">
                    <div className="divider-text">
                      <i data-feather="x-circle" />
                    </div>
                  </div>
                  <div className="divider divider-end">
                    <div className="divider-text">
                      <i data-feather="clock" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider Icons Ends */}
        {/* Divider Style Starts */}
        <section id="divider-style">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Style</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Use class{" "}
                    <code>
                      .divider-{"{"}dotted | dashed{"}"}
                    </code>{" "}
                    to change divider style. solid is default style you don't
                    have to add any class for it.
                  </p>
                  <div className="divider divider-dotted">
                    <div className="divider-text">Dotted</div>
                  </div>
                  <div className="divider divider-dashed">
                    <div className="divider-text">Dashed</div>
                  </div>
                  <div className="divider">
                    <div className="divider-text">Solid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider Style Ends */}
      </div>
    </div>
  </div>
</>
  )
}
