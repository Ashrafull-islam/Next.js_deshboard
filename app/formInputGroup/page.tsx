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
                    Input Groups
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Input Groups</li>
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
            <section id="input-group-basic">
              <div className="row">
                {/* Basic */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group mb-2">
                        <span
                          className="input-group-text"
                          id="basic-addon-search1"
                        >
                          <i data-feather="search" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          aria-label="Search..."
                          aria-describedby="basic-addon-search1"
                        />
                      </div>
                      <label
                        className="form-label"
                        htmlFor="basic-default-password"
                      >
                        Password
                      </label>
                      <div className="input-group form-password-toggle mb-2">
                        <input
                          type="password"
                          className="form-control"
                          id="basic-default-password"
                          placeholder="Your Password"
                          aria-describedby="basic-default-password"
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          @example.com
                        </span>
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon3">
                          https://example.com/users/
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url3"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                      <div className="input-group mb-2">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder='100'
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <span className="input-group-text">.00</span>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text">With textarea</span>
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Merged */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Merged</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group input-group-merge mb-2">
                        <span
                          className="input-group-text"
                          id="basic-addon-search2"
                        >
                          <i data-feather="search" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          aria-label="Search..."
                          aria-describedby="basic-addon-search2"
                        />
                      </div>
                      <label
                        className="form-label"
                        htmlFor="basic-default-password1"
                      >
                        Password
                      </label>
                      <div className="input-group input-group-merge form-password-toggle mb-2">
                        <input
                          type="password"
                          className="form-control"
                          id="basic-default-password1"
                          placeholder="Your Password"
                          aria-describedby="basic-default-password1"
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                      <div className="input-group input-group-merge mb-2">
                        <span className="input-group-text" id="basic-addon5">
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon5"
                        />
                      </div>
                      <div className="input-group input-group-merge mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon6"
                        />
                        <span className="input-group-text" id="basic-addon6">
                          @example.com
                        </span>
                      </div>
                      <div className="input-group input-group-merge mb-2">
                        <span className="input-group-text" id="basic-addon7">
                          https://example.com/users/
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url7"
                          aria-describedby="basic-addon7"
                        />
                      </div>
                      <div className="input-group input-group-merge mb-2">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder='100'
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <span className="input-group-text">.00</span>
                      </div>
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">With textarea</span>
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sizing */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizing</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group input-group-lg mb-1">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        />
                      </div>
                      <div className="input-group mb-1">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Checkbox and radio addons */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Checkbox and radio addons</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <label className="form-label">
                          Input Group with Checkbox
                        </label>
                        <div className="col-md">
                          <div className="mb-1">
                            <div className="input-group">
                              <div className="input-group-text">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inputCheckbox"
                                  />
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="mb-1">
                            <div className="input-group">
                              <div className="input-group-text">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inputCheckbox1"
                                  />
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message"
                              />
                            </div>
                          </div>
                        </div>
                        <label className="form-label">
                          Input Group with Radio
                        </label>
                        <div className="col-md">
                          {/* Custom checkbox */}
                          <div className="mb-1">
                            <div className="input-group">
                              <div className="input-group-text">
                                <div className="form-check">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="customRadio"
                                    id="colorRadio1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="colorRadio1"
                                  />
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          {/* Custom radio */}
                          <div className="mb-1">
                            <div className="input-group">
                              <div className="input-group-text">
                                <div className="form-check">
                                  <input
                                    type="radio"
                                    id="customRadio1"
                                    name="customRadio"
                                    className="form-check-input"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="customRadio1"
                                  />
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message"
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
            {/* Inputs Group with Buttons */}
            <section id="input-group-buttons">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Groups with Buttons</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Add span with <code>.input-group-btn</code> class and
                        add button inside <b>before</b> or <b>after</b>
                        <code>&lt;input&gt;</code>.
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-12 mb-1">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Button on right"
                              aria-describedby="button-addon2"
                            />
                            <button
                              className="btn btn-outline-primary"
                              id="button-addon2"
                              type="button"
                            >
                              Go
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-1">
                          <div className="input-group">
                            <button
                              className="btn btn-outline-primary"
                              type="button"
                            >
                              <i data-feather="search" />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Button on both side"
                              aria-label="Amount"
                            />
                            <button
                              className="btn btn-outline-primary"
                              type="button"
                            >
                              Search !
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Inputs Group with Buttons end */}
            {/* Inputs Group with Dropdown */}
            <section id="input-group-dropdown">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Groups with Dropdown</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Add <code>&lt;button&gt;</code> with{" "}
                        <code>.dropdown-toggle</code> class and add
                        dropdown-menu after it to get input group with dropdown.
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-12 mb-1">
                          <fieldset>
                            <div className="input-group">
                              <button
                                type="button"
                                className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Action
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                                <div
                                  role="separator"
                                  className="dropdown-divider"
                                />
                                <a className="dropdown-item" href="#">
                                  Separated link
                                </a>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Dropdown on left"
                              />
                            </div>
                          </fieldset>
                        </div>
                        <div className="col-md-6 col-12 mb-1">
                          <fieldset>
                            <div className="input-group">
                              <button
                                type="button"
                                className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i data-feather="edit-2" />
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                                <div
                                  role="separator"
                                  className="dropdown-divider"
                                />
                                <a className="dropdown-item" href="#">
                                  Separated link
                                </a>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Dropdown on both side"
                                aria-label="Amount"
                              />
                              <button
                                type="button"
                                className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Action
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                                <div
                                  role="separator"
                                  className="dropdown-divider"
                                />
                                <a className="dropdown-item" href="#">
                                  Separated link
                                </a>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Inputs Group with Dropdown end */}
          </div>
        </div>
      </div>
    </>
  );
}
