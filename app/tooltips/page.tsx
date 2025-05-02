"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
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

      {/* BEGIN: Page JS */}
      <Script
        src="/app-assets/js/scripts/components/components-tooltips.js"
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
                    Tooltips
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Tooltips</li>
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
            {/*Tooltip Positions Starts*/}
            <section id="tooltip-positions">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltip Positions</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Four options are available: top, right, bottom, and left
                        aligned.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          Tooltip on top
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Tooltip on right"
                        >
                          Tooltip on right
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Tooltip on bottom"
                        >
                          Tooltip on bottom
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Tooltip on left"
                        >
                          Tooltip on left
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip Positions Ends */}
            {/* Tooltip Triggers Starts*/}
            <section id="tooltip-triggers">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltip Triggers</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Tooltip is triggered using - click | hover | focus |
                        manual options. You may pass multiple triggers; separate
                        them with a space. "manual" cannot be combined with any
                        other trigger.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          title="Click Triggered"
                          data-bs-trigger="click"
                        >
                          On Click Trigger
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          title="Focus Triggered"
                          data-bs-trigger="focus"
                        >
                          On Focus Trigger
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          title="Hover Triggered"
                        >
                          On Hover Trigger
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary manual"
                          id="manual-tooltip"
                          data-bs-toggle="tooltip"
                          title="Manual Triggered"
                          data-bs-trigger="manual"
                        >
                          On Manual Trigger
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip Triggers Ends */}
            {/* Tooltip Options */}
            <section id="tooltip-options">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltip Options</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="tooltip"
                          title="Without Fade Animation"
                          data-bs-animation="false"
                        >
                          No animation
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary delay"
                          data-bs-toggle="tooltip"
                          title="Tooltip Delayed"
                          data-bs-delay={500}
                        >
                          Delay Tooltip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip Options Ends */}
            {/* Tooltip Methods Starts*/}
            <section id="tooltip-methods">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltip Methods</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        This is considered a “manual” triggering of the tooltip.
                        Tooltips with zero-length titles are never displayed.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="show-method"
                          title="Show Method Tooltip"
                          data-bs-trigger="manual"
                        >
                          Show Method{" "}
                          <i data-feather="play-circle" className="ms-1" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="hide-method"
                          title="Hide Method Tooltip"
                          data-bs-trigger="manual"
                        >
                          Hide Method{" "}
                          <i data-feather="play-circle" className="ms-1" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="toggle-method"
                          title="Toggle Method Tooltip"
                          data-bs-trigger="manual"
                        >
                          Toggle Method{" "}
                          <i data-feather="play-circle" className="ms-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip Methods Ends */}
            {/* Tooltip Events starts */}
            <section id="tooltip-events">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltip Events</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="show-tooltip"
                        >
                          Show Event Tooltip
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="shown-tooltip"
                        >
                          Shown Event Tooltip
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="hide-tooltip"
                        >
                          Hide Event Tooltip
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="hidden-tooltip"
                        >
                          Hidden Event Tooltip
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="inserted-tooltip"
                        >
                          Inserted Event Tooltip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip Events ends */}
          </div>
        </div>
      </div>
    </>
  );
}
