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
        src="/app-assets/vendors/js/pagination/jquery.bootpag.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/pagination/jquery.twbsPagination.min.js"
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
        src="/app-assets/js/scripts/pagination/components-pagination.js"
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
                    Pagination
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Pagination</li>
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
            {/* Default Pagination Starts */}
            <section id="default-pagination">
              <div className="row match-height">
                {/* Basic Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        A basic pagination with active item
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-3">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Basic Pagination ends */}
                {/* Basic Bootstrap Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Basic with bootstrap structure
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        A basic bootstrap pagination with Next and Previous
                        links
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-3">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabIndex={-1}
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Basic Bootstrap Pagination ends */}
                {/* Bootstrap Pagination with icon starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Bootstrap pagination with icons
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        A bootstrap pagination with Next and Previous links with
                        icons
                      </p>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mt-3">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">« Prev</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">Next »</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Bootstrap Pagination with icon ends */}
                {/* Separated Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Separated</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Pagination with separated Next and Previous icons
                      </p>
                      <p className="card-text">
                        To create separated pagination use{" "}
                        <code>.prev-item</code> class for the first item and
                        <code>.next-item</code> for the last item.
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-2">
                          <li className="page-item prev-item">
                            <a className="page-link" href="#" />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next-item">
                            <a className="page-link" href="#" />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Separated Pagination ends */}
                {/* Pagination with Icon and Text starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">With icon and text</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Pagination with icon and text</p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-2">
                          <li className="page-item prev">
                            <a className="page-link" href="#">
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item next">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Pagination with Icon and Text ends */}
                {/* Pagination with Only Icons starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Only icons</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Pagination with only icons</p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-2">
                          <li className="page-item prev">
                            <a className="page-link" href="#" />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next">
                            <a className="page-link" href="#" />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Pagination with Only Icons ends */}
              </div>
            </section>
            {/* Default Pagination Ends */}
            {/* Themed Pagination Starts */}
            <section id="themed-pagination">
              <div className="row">
                {/* Success Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Success</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.pagination-success</code> with{" "}
                        <code>.pagination</code>
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-success mt-2">
                          <li className="page-item prev">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Next"
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Success Pagination ends */}
                {/* Danger Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Danger</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.pagination-danger</code> with{" "}
                        <code>.pagination</code>
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-danger mt-2">
                          <li className="page-item prev">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Next"
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Danger Pagination ends */}
                {/* Warning Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Warning</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.pagination-warning</code> with{" "}
                        <code>.pagination</code>
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-warning mt-2">
                          <li className="page-item prev">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Next"
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Warning Pagination ends */}
                {/* Info Pagination starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Info</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class <code>.pagination-info</code> with{" "}
                        <code>.pagination</code>
                      </p>
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-info mt-2">
                          <li className="page-item prev">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            />
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item next">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Next"
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Info Pagination ends */}
              </div>
            </section>
            {/* Themed Pagination Ends */}
            {/* Pagination Positions start */}
            <section id="pagination-positions">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Pagination Positions</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use classes{" "}
                        <code>
                          .justify-content-{"{"}direction{"}"}
                        </code>{" "}
                        with <code>.pagination</code> to align your pagination.
                      </p>
                      <div className="row">
                        <div className="col-xl-4 col-lg-12">
                          <h5 className="text-start">Left Aligned</h5>
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-start mt-2">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <h5 className="text-center">Center Aligned</h5>
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center mt-2">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <h5 className="text-end">Right Aligned</h5>
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end mt-2">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pagination Positions end */}
            {/* Pagination Sizes start */}
            <section id="pagination-sizes">
              <div className="row">
                <div className="col-12 mt-3 mb-1">
                  <h4 className="text-uppercase">Pagination Sizes</h4>
                  <p>
                    Use class <code>.pagination-lg</code> for large size
                    pagination &amp; use <code>.pagination-sm</code> for small
                    size pagination. For Default size no classes required.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Pagination Sizes</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-12">
                          <nav aria-label="Page navigation">
                            <ul className="pagination pagination-lg mb-1">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <nav aria-label="Page navigation">
                            <ul className="pagination mb-1">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <nav aria-label="Page navigation">
                            <ul className="pagination pagination-sm">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Pagination Sizes end */}
            {/* Dynamic Pagination start */}
            <section id="dynamic-pagination">
              <div className="row">
                <div className="col-12 mt-3 mb-1">
                  <h4 className="text-uppercase">Dynamic Pagination</h4>
                  <p>
                    We are using <strong>jQuery Pagination plugin</strong>. This
                    jQuery plugin simplifies the usage of Bootstrap Pagination.
                    It uses appropriate classes: <code>.pagination</code>,{" "}
                    <code>.active</code> and
                    <code>.disabled</code>.
                  </p>
                </div>
              </div>
              <div className="row match-height">
                {/* Dynamic Default Pagination starts */}
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Default Pagination</h4>
                    </div>
                    <div className="card-body">
                      <div id="page1-content" className="mb-1">
                        You are on page 1
                      </div>
                      <ul className="pagination page1-links" />
                    </div>
                  </div>
                </div>
                {/* Dynamic Default Pagination ends */}
                {/* Dynamic Pagination with last & first starts */}
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Default Pagination with last &amp; first
                      </h4>
                    </div>
                    <div className="card-body">
                      <div id="firstLast1-content" className="mb-1">
                        You are on page 1
                      </div>
                      <ul className="pagination firstLast1-links" />
                    </div>
                  </div>
                </div>
                {/* Dynamic Pagination with last & first ends */}
                {/* Dynamic Pagination with reload starts */}
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Pagination drop you here after reload
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="alert alert-warning">
                        <div className="alert-body">
                          <strong>Warning!</strong> Page will reload.
                        </div>
                      </div>
                      <div id="url1-content" className="mb-1">
                        You are on page 1
                      </div>
                      <ul className="pagination url1-links" />
                    </div>
                  </div>
                </div>
                {/* Dynamic Pagination with reload ends */}
                {/* Dynamically Set Start Page Of Pagination starts */}
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Set Start Page Of Pagination
                      </h4>
                    </div>
                    <div className="card-body">
                      <div id="start-content" className="mb-1">
                        Your start Page 5
                      </div>
                      <ul className="pagination start-links" />
                    </div>
                  </div>
                </div>
                {/* Dynamically Set Start Page Of Pagination ends */}
              </div>
            </section>
            {/* Dynamic Pagination end */}
          </div>
        </div>
      </div>
    </>
  );
}
