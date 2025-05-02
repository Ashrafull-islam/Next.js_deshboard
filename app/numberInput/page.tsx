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

      {/* BEGIN: Page Vendor JS */}
      <Script
        src="/app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* BEGIN: Page JS */}
      <Script
        src="/app-assets/js/scripts/forms/form-number-input.js"
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
                    Number Input
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Number Input</li>
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
            {/* Bootstrap TouchSpin Spinners start */}
            <section id="basic-touchspin">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Touchspin</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Add <code>.touchspin</code> class with input tag to
                            add touchspin input group. Add
                            <code>.disabled-touchspin</code> class and add
                            attribute <code>disabled</code> with
                            <code>input</code> tag to add disabled touchspin
                            input group.
                          </p>
                          <div className="demo-inline-spacing">
                            <div className="input-group">
                              <input
                                type="number"
                                className="touchspin"
                                defaultValue={50}
                              />
                            </div>
                            <div className="input-group disabled-touchspin">
                              <input
                                type="number"
                                className="touchspin"
                                defaultValue={50}
                                disabled={true}
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="number"
                                className="touchspin-icon"
                                defaultValue={50}
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
            {/* Bootstrap TouchSpin Spinners end */}
            {/* Bootstrap TouchSpin Spinners Size start */}
            <section id="touchspin-size">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Size</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Add <code>.input-group-lg</code> and{" "}
                            <code>.input-group-sm</code> class for touchspin
                            large and small respectively.
                          </p>
                          <div className="demo-inline-spacing">
                            <div className="input-group input-group-lg">
                              <input
                                type="number"
                                className="touchspin"
                                defaultValue={50}
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="number"
                                className="touchspin"
                                defaultValue={50}
                              />
                            </div>
                            <div className="input-group input-group-sm">
                              <input
                                type="number"
                                className="touchspin"
                                defaultValue={50}
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
            {/* Bootstrap TouchSpin Spinners end */}
            {/* Bootstrap TouchSpin Spinners Decimal start */}
            <section id="touchspin-decimal">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Decimal</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Set <code>data-bts-step</code> and{" "}
                            <code>data-bts-decimals</code> attributes for
                            decimal type Input Touchspin.
                          </p>
                          <div className="input-group">
                            <input
                              type="text"
                              className="touchspin"
                              defaultValue={50}
                              data-bts-step="0.5"
                              data-bts-decimals={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap TouchSpin Spinners Decimal end */}
            {/* Bootstrap TouchSpin Spinners Min-max start */}
            <section id="touchspin-min-max">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Min - Max</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Set <code>min</code> and <code>max</code> attributes
                            values for minimum and maximum in page js file.
                          </p>
                          <div className="input-group">
                            <input
                              type="number"
                              className="touchspin-min-max"
                              defaultValue={19}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap TouchSpin Spinners Min - Max end */}
            {/* Bootstrap TouchSpin Spinners Step start */}
            <section id="touchspin-step">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Step</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Set <code>step</code> attribute value in page js
                            file.
                          </p>
                          <div className="input-group">
                            <input
                              type="number"
                              className="touchspin-step"
                              defaultValue={45}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap TouchSpin Spinners Min - Max end */}
            {/* Bootstrap TouchSpin Spinners Colors start */}
            <section id="touchspin-colors">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Colors Variation</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Set <code>data-bts-button-down-class</code> &amp;{" "}
                            <code>data-bts-button-up-class</code> attribute and
                            add value as{" "}
                            <code>
                              btn btn-{"{"}color{"}"}
                            </code>{" "}
                            for different colors spinner.
                          </p>
                          <div className="demo-inline-spacing">
                            <div className="input-group">
                              <input
                                type="text"
                                className="touchspin-color"
                                defaultValue={60}
                                data-bts-button-down-class="btn btn-primary"
                                data-bts-button-up-class="btn btn-primary"
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="text"
                                className="touchspin-color"
                                defaultValue={60}
                                data-bts-button-down-class="btn btn-success"
                                data-bts-button-up-class="btn btn-success"
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="text"
                                className="touchspin-color"
                                defaultValue={60}
                                data-bts-button-down-class="btn btn-warning"
                                data-bts-button-up-class="btn btn-warning"
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="text"
                                className="touchspin-color"
                                defaultValue={60}
                                data-bts-button-down-class="btn btn-info"
                                data-bts-button-up-class="btn btn-info"
                              />
                            </div>
                            <div className="input-group">
                              <input
                                type="text"
                                className="touchspin-color"
                                defaultValue={60}
                                data-bts-button-down-class="btn btn-danger"
                                data-bts-button-up-class="btn btn-danger"
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
            {/* Bootstrap TouchSpin Spinners Decimal end */}
          </div>
        </div>
      </div>
    </>
  );
}
