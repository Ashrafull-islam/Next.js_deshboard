"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="beforeInteractive"
      />

      {/* Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="lazyOnload" />
      <Script src="/app-assets/js/core/app.js" strategy="lazyOnload" />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Badges
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Badges</li>
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
            {/* Basic Badges Start */}
            <section id="basic-badges">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Contextual Badges</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text m-0">
                        Use the <code>.badge</code> class, followed by
                        <code>
                          .bg-{"{"}color{"}"}
                        </code>
                        class within element to create primary badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge bg-primary">Primary</span>
                        <span className="badge bg-secondary">Secondary</span>
                        <span className="badge bg-success">Success</span>
                        <span className="badge bg-danger">Danger</span>
                        <span className="badge bg-warning">Warning</span>
                        <span className="badge bg-info">Info</span>
                        <span className="badge bg-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Badges End */}
            {/* Badge Glow Starts */}
            <section id="glow-badges">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Glow Badges</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text m-0">
                        Use class <code>.badge-glow</code> to add glow effect to
                        contextual badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge badge-glow bg-primary">
                          Primary
                        </span>
                        <span className="badge badge-glow bg-secondary">
                          Secondary
                        </span>
                        <span className="badge badge-glow bg-success">
                          Success
                        </span>
                        <span className="badge badge-glow bg-danger">
                          Danger
                        </span>
                        <span className="badge badge-glow bg-warning">
                          Warning
                        </span>
                        <span className="badge badge-glow bg-info">Info</span>
                        <span className="badge badge-glow bg-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badge Glow Starts */}
            {/* Badge light Starts */}
            <section id="badge-light">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Light Badges</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text m-0">
                        Use class <code>.badge</code> class with{" "}
                        <code>
                          .badge-light-{"{"}color{"}"}
                        </code>{" "}
                        to add light effect to your badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge badge-light-primary">
                          Primary
                        </span>
                        <span className="badge badge-light-secondary">
                          Secondary
                        </span>
                        <span className="badge badge-light-success">
                          Success
                        </span>
                        <span className="badge badge-light-danger">Danger</span>
                        <span className="badge badge-light-warning">
                          Warning
                        </span>
                        <span className="badge badge-light-info">Info</span>
                        <span className="badge badge-light-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badge light Ends */}
            {/* Badges With Icons Starts */}
            <section id="badges-with-icons">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Badges With Icons</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-inline-spacing">
                        <span className="badge bg-primary">
                          <i data-feather="star" className="me-25" />
                          <span>Primary</span>
                        </span>
                        <span className="badge bg-secondary">
                          <i data-feather="star" className="me-25" />
                          <span>Secondary</span>
                        </span>
                        <span className="badge bg-success">
                          <i data-feather="star" className="me-25" />
                          <span>Success</span>
                        </span>
                        <span className="badge bg-danger">
                          <i data-feather="star" className="me-25" />
                          <span>Danger</span>
                        </span>
                        <span className="badge bg-warning">
                          <i data-feather="star" className="me-25" />
                          <span>Warning</span>
                        </span>
                        <span className="badge bg-info">
                          <i data-feather="star" className="me-25" />
                          <span>Info</span>
                        </span>
                        <span className="badge bg-dark">
                          <i data-feather="star" className="me-25" />
                          <span>Info</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badges With Icons End */}
            <section id="badges-with-links">
              <div className="row match-height">
                {/* Badges With Links starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Link Badge</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use <code>&lt;a&gt;</code> tag inside your{" "}
                        <code>.badge</code> to create a badge with icon
                      </p>
                      <span className="badge bg-primary">
                        <a href="https://pixinvent.com/" target="_blank">
                          <i data-feather="link" className="me-25" />
                          <span>Link Badge</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Badges With Links ends */}
                {/* Block Badges start */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Block Badge</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use <code>.d-block</code> class with <code>.badge</code>
                        , to display badge as a block element.
                      </p>
                      <span className="badge d-block bg-primary">
                        <span>Badge</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Block Badges end */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
