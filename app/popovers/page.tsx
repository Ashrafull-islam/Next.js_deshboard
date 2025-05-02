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

{/* BEGIN: Page JS */}
<Script src="/app-assets/js/scripts/components/components-popovers.js" strategy="afterInteractive" />
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">Popovers</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Popovers</li>
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
      {/* Popover Positions start */}
      <section id="popover-positions">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popover Positions</h4>
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
                    data-bs-toggle="popover"
                    data-bs-placement="top"
                    data-bs-container="body"
                    title="Popover on top"
                    data-bs-content="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
                  >
                    Popover on top
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-placement="right"
                    data-bs-container="body"
                    title="Popover on right"
                    data-bs-content="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
                  >
                    Popover on right
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-placement="bottom"
                    data-bs-container="body"
                    title="Popover on bottom"
                    data-bs-content="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
                  >
                    Popover on bottom
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-container="body"
                    title="Popover on left"
                    data-bs-content="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
                  >
                    Popover on left
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popover Positions end */}
      {/* Popover Triggers start */}
      <section id="popover-triggers">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popover Triggers</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Popover is triggered using - click | hover | focus | manual
                  options. You may pass multiple triggers; separate them with a
                  space. "manual" cannot be combined with any other trigger.
                </p>
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
                    data-bs-trigger="hover"
                    title="Hover Triggered"
                  >
                    On Hover Trigger
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
                    title="Click Triggered"
                    data-bs-trigger="click"
                    data-bs-placement="bottom"
                  >
                    On Click Trigger
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
                    title="Focus Triggered"
                    data-bs-trigger="focus"
                  >
                    On Focus Trigger
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary manual"
                    id="manual-popover"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
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
      {/* Popover Triggers end */}
      {/* Popover Options start */}
      <section id="popover-options">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popover Options</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="popover"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
                    title="Without Fade Animation"
                    data-bs-animation="false"
                    data-bs-placement="top"
                  >
                    No animation
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary delay"
                    data-bs-toggle="popover"
                    data-bs-content="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies."
                    title="Click Triggered"
                    data-bs-delay={500}
                    data-bs-placement="left"
                  >
                    Delay Popover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popover Options end */}
      {/* Popover Methods start */}
      <section id="popover-methods">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popover Methods</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  This is considered a “manual” triggering of the
                  popover.Popovers whose both title and content are zero-length
                  are never displayed.
                </p>
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="show-method"
                    data-bs-placement="top"
                    title="Show Method Popover"
                    data-bs-content="Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake."
                    data-bs-trigger="manual"
                  >
                    Show Method{" "}
                    <i data-feather="play-circle" className="ms-1" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="hide-method"
                    data-bs-placement="left"
                    title="Hide Method Popover"
                    data-bs-content="Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake."
                    data-bs-trigger="manual"
                  >
                    Hide Method{" "}
                    <i data-feather="play-circle" className="ms-1" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="toggle-method"
                    title="Toggle Method Popover"
                    data-bs-placement="top"
                    data-bs-content="Fruitcake candy cheesecake jelly beans cake gummies. Cotton candy I love sweet roll jujubes pastry cake halvah cake."
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
      {/* Popover Methods end */}
      {/* Popover Events start */}
      <section id="popover-events">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popover Events</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="show-popover"
                  >
                    Show Event Popover
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="shown-popover"
                  >
                    Shown Event Popover
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="hide-popover"
                  >
                    Hide Event Popover
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="hidden-popover"
                  >
                    Hidden Event Popover
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="inserted-popover"
                  >
                    Inserted Event Popover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popover Events end */}
    </div>
  </div>
</div>

    </>
  )
}
