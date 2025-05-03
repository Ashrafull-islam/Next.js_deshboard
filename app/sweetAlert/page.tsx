
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
                    Sweet Alerts
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Sweet Alerts</li>
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
            {/* Basic example section */}
            <section id="basic-examples">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mb-0">
                    SweetAlert automatically centers itself on the page and
                    looks great no matter if you're using a desktop computer,
                    mobile or tablet. It's even highly customizable, as you can
                    see below!
                  </p>
                  <div className="demo-inline-spacing">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="basic-alert"
                    >
                      Basic
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="with-title"
                    >
                      With Title
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="footer-alert"
                    >
                      With Footer
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="html-alert"
                    >
                      HTML
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Basic example section */}
            {/* Sweet alert Positions */}
            <section id="sweet-alert-position">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Position</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        You can specify position of your alert with
                        <code>
                          {"{"}position : 'top-start' | 'top-end' |
                          'bottom-start' | 'bottom-end' {"}"}
                        </code>{" "}
                        in js.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          className="btn btn-outline-primary"
                          id="position-top-start"
                        >
                          Top Start
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="position-top-end"
                        >
                          Top End
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="position-bottom-start"
                        >
                          Bottom Starts
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="position-bottom-end"
                        >
                          Bottom End
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Sweet alert Positions */}
            {/* SweetAlert Animations */}
            <section id="sweet-alert-animations">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Animations</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use <code>popup</code> inside <code>showClass</code>{" "}
                        parameter to add animation to your alert.
                      </p>
                      <div className="demo-inline-spacing">
                        <button
                          className="btn btn-outline-primary"
                          id="bounce-in-animation"
                        >
                          Bounce In
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="fade-in-animation"
                        >
                          Fade In
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="flip-x-animation"
                        >
                          Flip In
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="tada-animation"
                        >
                          Tada
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          id="shake-animation"
                        >
                          Shake
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ SweetAlert Animations */}
            {/* Types section */}
            <section id="types">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Types</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mb-0">
                    The type of the modal. SweetAlert comes with 4 built-in
                    types which will show a corresponding icon animation:
                    "success", "error", "warning" and "info". You can also set
                    it as "input" to get a prompt modal. It can either be put in
                    the object under the key "icon" or passed as the third
                    parameter of the function.
                  </p>
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
                  </div>
                </div>
              </div>
            </section>
            {/*/ Types section */}
            {/* Options section */}
            <section id="options">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Options</h4>
                </div>
                <div className="card-body">
                  <div className="demo-inline-spacing">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="custom-image"
                    >
                      Custom Image
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="auto-close"
                    >
                      Auto Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="outside-click"
                    >
                      Click Outside
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="prompt-function"
                    >
                      Question
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="ajax-request"
                    >
                      Ajax
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Options section */}
            {/* Confirm option section */}
            <section id="confirm-option">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Confirm Options</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-2 mb-md-0">
                      <h5 className="mb-1">Confirm Button Text</h5>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        id="confirm-text"
                      >
                        Confirm Text
                      </button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <h5 className="mb-1">Confirm Button Color</h5>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        id="confirm-color"
                      >
                        Confirm Button Color
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Confirm option section */}
          </div>
        </div>
      </div>
    </>
  );
}
