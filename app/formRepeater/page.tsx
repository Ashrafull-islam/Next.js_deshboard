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
        src="/app-assets/vendors/js/forms/repeater/jquery.repeater.min.js"
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
        src="/app-assets/js/scripts/forms/form-repeater.js"
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
                    Form Repeater
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      <li className="breadcrumb-item active">Form Repeater</li>
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
            <section className="form-control-repeater">
              <div className="row">
                {/* Invoice repeater */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Invoice</h4>
                    </div>
                    <div className="card-body">
                      <form action="#" className="invoice-repeater">
                        <div data-repeater-list="invoice">
                          <div data-repeater-item="">
                            <div className="row d-flex align-items-end">
                              <div className="col-md-4 col-12">
                                <div className="mb-1">
                                  <label
                                    className="form-label"
                                    htmlFor="itemname"
                                  >
                                    Item Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="itemname"
                                    aria-describedby="itemname"
                                    placeholder="Vuexy Admin Template"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 col-12">
                                <div className="mb-1">
                                  <label
                                    className="form-label"
                                    htmlFor="itemcost"
                                  >
                                    Cost
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="itemcost"
                                    aria-describedby="itemcost"
                                    placeholder="32"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 col-12">
                                <div className="mb-1">
                                  <label
                                    className="form-label"
                                    htmlFor="itemquantity"
                                  >
                                    Quantity
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="itemquantity"
                                    aria-describedby="itemquantity"
                                    placeholder="1"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 col-12">
                                <div className="mb-1">
                                  <label
                                    className="form-label"
                                    htmlFor="staticprice"
                                  >
                                    Price
                                  </label>
                                  <input
                                    type="text"
                                    readOnly={true}
                                    className="form-control-plaintext"
                                    id="staticprice"
                                    defaultValue="$32"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 col-12 mb-50">
                                <div className="mb-1">
                                  <button
                                    className="btn btn-outline-danger text-nowrap px-1"
                                    data-repeater-delete=""
                                    type="button"
                                  >
                                    <i data-feather="x" className="me-25" />
                                    <span>Delete</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <button
                              className="btn btn-icon btn-primary"
                              type="button"
                              data-repeater-create=""
                            >
                              <i data-feather="plus" className="me-25" />
                              <span>Add New</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Invoice repeater */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
