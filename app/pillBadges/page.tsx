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
                    Pill Badges
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Pill Badges</li>
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
            {/* Basic Pill Badges start*/}
            <section id="basic-pill-badges">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Contextual</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use the <code>.badge</code> class, followed by
                        <code>.rounded-pill</code> with
                        <code>
                          .bg-{"{"}color{"}"}
                        </code>
                        class within element to create contextual pill badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge rounded-pill bg-primary">
                          Primary
                        </span>
                        <span className="badge rounded-pill bg-secondary">
                          Secondary
                        </span>
                        <span className="badge rounded-pill bg-success">
                          Success
                        </span>
                        <span className="badge rounded-pill bg-danger">
                          Danger
                        </span>
                        <span className="badge rounded-pill bg-warning">
                          Warning
                        </span>
                        <span className="badge rounded-pill bg-info">Info</span>
                        <span className="badge rounded-pill bg-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Pill Badges end */}
            {/* Badge Pill Glow Starts */}
            <section id="rounded-pill-glow">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Glow Badges</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use class <code>.badge-glow</code> to add glow effect to
                        contextual badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge rounded-pill badge-glow bg-primary">
                          Primary
                        </span>
                        <span className="badge rounded-pill badge-glow bg-secondary">
                          Secondary
                        </span>
                        <span className="badge rounded-pill badge-glow bg-success">
                          Success
                        </span>
                        <span className="badge rounded-pill badge-glow bg-danger">
                          Danger
                        </span>
                        <span className="badge rounded-pill badge-glow bg-warning">
                          Warning
                        </span>
                        <span className="badge rounded-pill badge-glow bg-info">
                          Info
                        </span>
                        <span className="badge rounded-pill badge-glow bg-dark">
                          Dark
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badge Pill Glow Ends */}
            {/* Badge Pill light Starts */}
            <section id="rounded-pill-light">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Light Badges</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use class <code>.rounded-pill</code> class with{" "}
                        <code>
                          .badge.badge-light-{"{"}color{"}"}
                        </code>{" "}
                        to add light effect to your badge.
                      </p>
                      <div className="demo-inline-spacing">
                        <span className="badge rounded-pill badge-light-primary">
                          Primary
                        </span>
                        <span className="badge rounded-pill badge-light-secondary">
                          Secondary
                        </span>
                        <span className="badge rounded-pill badge-light-success">
                          Success
                        </span>
                        <span className="badge rounded-pill badge-light-danger">
                          Danger
                        </span>
                        <span className="badge rounded-pill badge-light-warning">
                          Warning
                        </span>
                        <span className="badge rounded-pill badge-light-info">
                          Info
                        </span>
                        <span className="badge rounded-pill badge-light-dark">
                          Dark
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badge Pill light Ends */}
            {/* Pill Badges as Notification start*/}
            <section id="pill-badges-as-notification">
              <div className="row match-height">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Pill Badges as Notification
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use <code>.badge-up</code> to set pill badge to higher
                        than other text. So that it can work with notifications
                        also.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="position-relative d-inline-block">
                          <i
                            data-feather="bell"
                            className="font-medium-5 text-primary"
                          />
                          <span className="badge rounded-pill bg-primary badge-up">
                            4
                          </span>
                        </div>
                        <div className="position-relative d-inline-block">
                          <i
                            data-feather="bell"
                            className="font-medium-5 text-info"
                          />
                          <span className="badge rounded-pill bg-info badge-up">
                            5
                          </span>
                        </div>
                        <div className="position-relative d-inline-block">
                          <i
                            data-feather="bell"
                            className="font-medium-5 text-danger"
                          />
                          <span className="badge rounded-pill bg-danger badge-glow badge-up">
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pill Badges as Notification end */}
            {/* Badge Pill Options Starts */}
            <section id="rounded-pill-options">
              <div className="row match-height">
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Badge Pill Link</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.badge.rounded-pill</code> with{" "}
                        <code>&lt;a&gt;</code> tag to make your badge a link.
                      </p>
                      <a href="https://pixinvent.com" target="_blank">
                        <span className="badge rounded-pill bg-primary">
                          Primary
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Block Badge Pill</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use <code>.d-block</code> with{" "}
                        <code>.rounded-pill</code> to display your badge as
                        block level element.
                      </p>
                      <span className="badge rounded-pill d-block bg-danger">
                        <span>Block Badge Pill</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Badge Pill Options Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
