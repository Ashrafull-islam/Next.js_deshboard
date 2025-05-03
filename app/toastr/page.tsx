
export default function page() {
  return (
    <>
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Toastr
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Toastr</li>
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
            {/* Types section */}
            <section id="toastr-types">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Types</h4>
                </div>
                <div className="card-body">
                  <div className="demo-inline-spacing">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      id="type-success"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      id="type-error"
                    >
                      Error
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      id="type-warning"
                    >
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      id="type-info"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      id="progress-bar"
                    >
                      Success Progress Bar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="clear-toast-btn"
                    >
                      Clear Toast
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Types section */}
            {/* Position section */}
            <section id="toastr-position">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Position</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <h5 className="mb-0">Top Positions</h5>
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-top-left"
                        >
                          Top Left
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-top-center"
                        >
                          Top Center
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-top-right"
                        >
                          Top Right
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-top-full"
                        >
                          Top Full Width
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h5 className="mt-2 mb-0">Bottom Positions</h5>
                      <div className="demo-inline-spacing">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-bottom-left"
                        >
                          Bottom Left
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-bottom-center"
                        >
                          Bottom Center
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-bottom-right"
                        >
                          Bottom Right
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          id="position-bottom-full"
                        >
                          Bottom Full Width
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Position section */}
            {/* Duration & Timeout section */}
            <section id="toastr-duration-timeout">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Duration &amp; Timeout</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mb-0">
                    You can use options like <code>showDuration</code>,{" "}
                    <code>hideDuration</code>, <code>timeout</code> for your
                    toasts. To create a sticky toast set the{" "}
                    <code>timeout</code> to <code>0</code>
                  </p>
                  <div className="demo-inline-spacing">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="fast-duration"
                    >
                      Show .5s
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="slow-duration"
                    >
                      Hide 3s
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="timeout"
                    >
                      Timeout 5s
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="sticky"
                    >
                      Sticky Toast
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Duration & Timeout section */}
            {/* Animation section */}
            <section id="toastr-animation">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Show / Hide Animation</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mb-0">
                    Use the jQuery <code>show/hide</code> method of your choice.
                    These default to <code>fadeIn/fadeOut</code>. The methods{" "}
                    <code>fadeIn/fadeOut</code>, <code>slideDown/slideUp</code>,
                    and <code>show/hide</code> are built into jQuery.
                  </p>
                  <div className="demo-inline-spacing">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="slide-toast"
                    >
                      slideDown - slideUp
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="fade-toast"
                    >
                      fadeIn - fadeOut
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Animation section */}
          </div>
        </div>
      </div>
    </>
  );
}
