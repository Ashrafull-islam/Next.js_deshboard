
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
                    Form Validation
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Form Validation
                      </li>
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
            {/* Validation */}
            <section className="bs-validation">
              <div className="row">
                {/* Bootstrap Validation */}
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bootstrap Validation</h4>
                    </div>
                    <div className="card-body">
                      <form className="needs-validation">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-addon-name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="basic-addon-name"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon-name"
                            required={true}
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter your name.
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-default-email1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="basic-default-email1"
                            className="form-control"
                            placeholder="john.doe@email.com"
                            aria-label="john.doe@email.com"
                            required={true}
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter a valid email
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-default-password1"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="basic-default-password1"
                            className="form-control"
                            placeholder="············"
                            required={true}
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter your password.
                          </div>
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="bsDob">
                            DOB
                          </label>
                          <input
                            type="text"
                            className="form-control picker"
                            name="dob"
                            id="bsDob"
                            required={true}
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please enter your date of birth.
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="select-country1"
                          >
                            Country
                          </label>
                          <select
                            className="form-select"
                            id="select-country1"
                            required={true}
                          >
                            <option value="">Select Country</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="france">France</option>
                            <option value="australia">Australia</option>
                            <option value="spain">Spain</option>
                          </select>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your country
                          </div>
                        </div>
                        <div className="mb-1">
                          <label htmlFor="customFile1" className="form-label">
                            Profile pic
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="customFile1"
                            required={true}
                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label">Gender</label>
                          <div className="form-check my-50">
                            <input
                              type="radio"
                              id="validationRadio3"
                              name="validationRadioBootstrap"
                              className="form-check-input"
                              required={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadio3"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              id="validationRadio4"
                              name="validationRadioBootstrap"
                              className="form-check-input"
                              required={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadio4"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            htmlFor="validationCustomUsername"
                            className="form-label"
                          >
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustomUsername"
                              aria-describedby="inputGroupPrepend"
                              required={true}
                            />
                            <div className="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            className="d-block form-label"
                            htmlFor="validationBioBootstrap"
                          >
                            Bio
                          </label>
                          <textarea
                            className="form-control"
                            id="validationBioBootstrap"
                            name="validationBioBootstrap"
                            rows={3}
                            required={true}
                            defaultValue={""}
                          />
                        </div>
                        <div className="mb-1">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="validationCheckBootstrap"
                              required={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationCheckBootstrap"
                            >
                              Agree to our terms and conditions
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Bootstrap Validation */}
                {/* jQuery Validation */}
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">jQuery Validation</h4>
                    </div>
                    <div className="card-body">
                      <form id="jquery-val-form" method="post">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-default-name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-default-name"
                            name="basic-default-name"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-default-email"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            id="basic-default-email"
                            name="basic-default-email"
                            className="form-control"
                            placeholder="john.doe@email.com"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-default-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="basic-default-password"
                            name="basic-default-password"
                            className="form-control"
                            placeholder="············"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="confirm-password"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            className="form-control"
                            placeholder="············"
                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="dob">
                            DOB
                          </label>
                          <input
                            type="text"
                            className="form-control picker"
                            name="dob"
                            id="dob"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="select-country"
                          >
                            Country
                          </label>
                          <select
                            className="form-select select2"
                            id="select-country"
                            name="select-country"
                          >
                            <option value="">Select Country</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="france">France</option>
                            <option value="australia">Australia</option>
                            <option value="spain">Spain</option>
                          </select>
                        </div>
                        <div className="mb-1">
                          <label htmlFor="customFile" className="form-label">
                            Profile pic
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="customFile"
                            name="customFile"
                          />
                        </div>
                        <div className="mb-1">
                          <label className="d-block form-label">Gender</label>
                          <div className="form-check my-50">
                            <input
                              type="radio"
                              id="validationRadiojq1"
                              name="validationRadiojq"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadiojq1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              id="validationRadiojq2"
                              name="validationRadiojq"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationRadiojq2"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                        <div className="mb-1">
                          <label
                            className="d-block form-label"
                            htmlFor="validationBio"
                          >
                            Bio
                          </label>
                          <textarea
                            className="form-control"
                            id="validationBio"
                            name="validationBiojq"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="mb-1">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="validationCheck"
                              name="validationCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="validationCheck"
                            >
                              Agree to our terms and conditions
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          name="submit"
                          value="Submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /jQuery Validation */}
              </div>
            </section>
            {/* /Validation */}
          </div>
        </div>
      </div>
    </>
  );
}
