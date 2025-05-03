
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
                    Checkbox
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Checkbox</li>
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
            {/* Basic Checkbox start */}
            <section id="basic-checkbox">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Checkboxes</h4>
                    </div>
                    <div className="card-body">
                      <div className="demo-inline-spacing">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            defaultValue="checked"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Checked
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            defaultValue="unchecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Unchecked
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            defaultValue="checked-disabled"
                            defaultChecked={true}
                            disabled={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox3"
                          >
                            Checked disabled
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox4"
                            defaultValue="unchecked-disabled"
                            disabled={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox4"
                          >
                            Unchecked disabled
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Checkbox end */}
            {/* Checkbox Color start */}
            <section id="vuexy-checkbox-color">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Color</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        To change the color of the checkBox use the{" "}
                        <code>
                          .form-check-{"{"}value{"}"}
                        </code>{" "}
                        for primary, secondary, success, danger, info, warning.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="form-check form-check-primary">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck1"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck1"
                          >
                            Primary
                          </label>
                        </div>
                        <div className="form-check form-check-secondary">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck2"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck2"
                          >
                            Secondary
                          </label>
                        </div>
                        <div className="form-check form-check-success">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck3"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck3"
                          >
                            Success
                          </label>
                        </div>
                        <div className="form-check form-check-danger">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck5"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck5"
                          >
                            Danger
                          </label>
                        </div>
                        <div className="form-check form-check-warning">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck4"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck4"
                          >
                            Warning
                          </label>
                        </div>
                        <div className="form-check form-check-info">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="colorCheck6"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorCheck6"
                          >
                            Info
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Vuexy Checkbox Color end */}
          </div>
        </div>
      </div>
    </>
  );
}
