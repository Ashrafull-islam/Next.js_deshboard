
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
                    Input
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Input</li>
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
            {/* Basic Inputs start */}
            <section id="basic-input">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Inputs</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-md-6 col-12">
                          <div className="mb-1">
                            <label className="form-label" htmlFor="basicInput">
                              Basic Input
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicInput"
                              placeholder="Enter email"
                            />
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="helpInputTop"
                            >
                              Input text with help
                            </label>
                            <small className="text-muted">
                              eg.<i>someone@example.com</i>
                            </small>
                            <input
                              type="text"
                              className="form-control"
                              id="helpInputTop"
                            />
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="disabledInput"
                            >
                              Disabled Input
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="disabledInput"
                              disabled={true}
                            />
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                          <div className="mb-1">
                            <label className="form-label" htmlFor="helperText">
                              With Helper Text
                            </label>
                            <input
                              type="text"
                              id="helperText"
                              className="form-control"
                              placeholder="Name"
                            />
                            <p>
                              <small className="text-muted">
                                Find helper text here for given textbox.
                              </small>
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 mb-1 mb-md-0">
                          <label className="form-label" htmlFor="disabledInput">
                            Readonly Input
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="readonlyInput"
                            //   readOnly="readonly"
                            defaultValue="You can't update me :P"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-12">
                          <label className="form-label" htmlFor="disabledInput">
                            Readonly Static Text
                          </label>
                          <p className="form-control-static" id="staticInput">
                            email@pixinvent.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Inputs end */}
            {/* Input Sizing start */}
            <section id="input-sizing">
              <div className="row match-height">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizing Options</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p className="card-text">
                            For different sizes of Input, Use classes like{" "}
                            <code>.form-control-lg</code> &amp;
                            <code>.form-control-sm</code> for Large, Small input
                            box.
                          </p>
                          <div className="mb-1">
                            <label className="form-label" htmlFor="largeInput">
                              Large
                            </label>
                            <input
                              id="largeInput"
                              className="form-control form-control-lg"
                              type="text"
                              placeholder="Large Input"
                            />
                          </div>
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="defaultInput"
                            >
                              Default
                            </label>
                            <input
                              id="defaultInput"
                              className="form-control"
                              type="text"
                              placeholder="Normal Input"
                            />
                          </div>
                          <div>
                            <label className="form-label" htmlFor="smallInput">
                              Small
                            </label>
                            <input
                              id="smallInput"
                              className="form-control form-control-sm"
                              type="text"
                              placeholder="Small Input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Horizontal form label sizing
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p className="card-text mb-2">
                            Be sure to use <code>.col-form-label-sm</code> or{" "}
                            <code>.col-form-label-lg</code> to your
                            <code>&lt;label&gt;</code>s or{" "}
                            <code>&lt;legend&gt;</code>s to correctly follow the
                            size of
                            <code>.form-control-lg</code> and{" "}
                            <code>.form-control-sm</code>.
                          </p>
                          <div className="mb-1 row">
                            <label
                              htmlFor="colFormLabelLg"
                              className="col-sm-3 col-form-label-lg"
                            >
                              Large
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="colFormLabelLg"
                                placeholder="Large Input"
                              />
                            </div>
                          </div>
                          <div className="mb-1 row">
                            <label
                              htmlFor="colFormLabel"
                              className="col-sm-3 col-form-label"
                            >
                              Default
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                id="colFormLabel"
                                placeholder="Normal Input"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor="colFormLabelSm"
                              className="col-sm-3 col-form-label-sm"
                            >
                              Small
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="colFormLabelSm"
                                placeholder="Small Input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input Sizing end */}
            {/* Floating Label Inputs start */}
            <section id="floating-label-input">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Floating Label Inputs</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 mb-1">
                          <p>
                            For Floating Label Inputs, need to use{" "}
                            <code>.form-floating</code> class &amp; add
                            attribute
                            <code>disabled</code> for disabled Floating Label
                            Input.
                          </p>
                        </div>
                        <div className="col-sm-6 col-12 mb-1 mb-sm-0">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="floating-label1"
                              placeholder="Label-placeholder"
                            />
                            <label htmlFor="floating-label1">
                              Label-placeholder
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="floating-label-disable"
                              placeholder="Label-placeholder"
                              disabled={true}
                            />
                            <label htmlFor="floating-label-disable">
                              Disabled-placeholder
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Floating Label Inputs end */}
            {/* Basic File Browser start */}
            <section id="input-file-browser">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">File input</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 mb-1 mb-sm-0">
                          <label htmlFor="formFile" className="form-label">
                            Simple file input
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <label
                            htmlFor="formFileMultiple"
                            className="form-label"
                          >
                            Multiple files input
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFileMultiple"
                            multiple={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic File Browser end */}
            {/* validations start */}
            <section className="validations" id="validation">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Validation States</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            You can indicate invalid and valid form fields with{" "}
                            <code>.is-invalid</code> and <code>.is-valid</code>.
                            Note that <code>.invalid-feedback</code> is also
                            supported with these classes.
                          </p>
                        </div>
                        <div className="col-sm-6 col-12">
                          <label className="form-label" htmlFor="valid-state">
                            Valid State
                          </label>
                          <input
                            type="text"
                            className="form-control is-valid"
                            id="valid-state"
                            placeholder="Valid"
                            defaultValue="Valid"
                            required={true}
                          />
                          <div className="valid-feedback">
                            This is valid state.
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <label className="form-label" htmlFor="invalid-state">
                            Invalid State
                          </label>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="invalid-state"
                            placeholder="Invalid"
                            defaultValue="Invalid"
                            required={true}
                          />
                          <div className="invalid-feedback">
                            This is invalid state.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* validations end */}
            {/* Tooltip validations start */}
            <section className="tooltip-validations" id="tooltip-validation">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Input Validation States with Tooltips
                      </h4>
                    </div>
                    <div className="card-body">
                      <p>
                        <code>
                          .{"{"}valid/invalid{"}"}-feedback
                        </code>{" "}
                        classes for{" "}
                        <code>
                          .{"{"}valid/invalid{"}"}-tooltip
                        </code>{" "}
                        classes to display validation feedback in a styled
                        tooltip.
                      </p>
                      <form className="needs-validation" noValidate={true}>
                        <div className="row g-1">
                          <div className="col-md-4 col-12 mb-3 position-relative">
                            <label
                              className="form-label"
                              htmlFor="validationTooltip01"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationTooltip01"
                              placeholder="First name"
                              defaultValue="Mark"
                              required={true}
                            />
                            <div className="valid-tooltip">Looks good!</div>
                          </div>
                          <div className="col-md-4 col-12 mb-3 position-relative">
                            <label
                              className="form-label"
                              htmlFor="validationTooltip02"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationTooltip02"
                              placeholder="Last name"
                              defaultValue="Otto"
                              required={true}
                            />
                            <div className="valid-tooltip">Looks good!</div>
                          </div>
                          <div className="col-md-4 col-12 mb-3 position-relative">
                            <label
                              className="form-label"
                              htmlFor="validationTooltip03"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationTooltip03"
                              placeholder="City"
                              required={true}
                            />
                            <div className="invalid-tooltip">
                              Please provide a valid city.
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Tooltip validations end */}
          </div>
        </div>
      </div>
    </>
  );
}
