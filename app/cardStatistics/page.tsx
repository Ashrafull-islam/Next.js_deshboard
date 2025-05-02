"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Page Vendor JS */}
      <Script
        src="/app-assets/vendors/js/charts/apexcharts.min.js"
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
        src="/app-assets/js/scripts/cards/card-statistics.js"
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
                    Statistics Cards
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Cards</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Statistics Cards
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
            {/* Statistics card section */}
            <section id="statistics-card">
              {/* Miscellaneous Charts */}
              <div className="row match-height">
                {/* Bar Chart -Orders */}
                <div className="col-lg-2 col-6">
                  <div className="card">
                    <div className="card-body pb-50">
                      <h6>Orders</h6>
                      <h2 className="fw-bolder mb-1">2,76k</h2>
                      <div id="statistics-bar-chart" />
                    </div>
                  </div>
                </div>
                {/*/ Bar Chart */}
                {/* Line Chart - Profit */}
                <div className="col-lg-2 col-6">
                  <div className="card card-tiny-line-stats">
                    <div className="card-body pb-50">
                      <h6>Profit</h6>
                      <h2 className="fw-bolder mb-1">6,24k</h2>
                      <div id="statistics-line-chart" />
                    </div>
                  </div>
                </div>
                {/*/ Line Chart */}
                <div className="col-lg-8 col-12">
                  <div className="card card-statistics">
                    <div className="card-header">
                      <h4 className="card-title">Statistics</h4>
                      <div className="d-flex align-items-center">
                        <p className="card-text me-25 mb-0">
                          Updated 1 month ago
                        </p>
                      </div>
                    </div>
                    <div className="card-body statistics-body">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-primary me-2">
                              <div className="avatar-content">
                                <i
                                  data-feather="trending-up"
                                  className="avatar-icon"
                                />
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">230k</h4>
                              <p className="card-text font-small-3 mb-0">
                                Sales
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-info me-2">
                              <div className="avatar-content">
                                <i
                                  data-feather="user"
                                  className="avatar-icon"
                                />
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">8.549k</h4>
                              <p className="card-text font-small-3 mb-0">
                                Customers
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-sm-0">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-danger me-2">
                              <div className="avatar-content">
                                <i data-feather="box" className="avatar-icon" />
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">1.423k</h4>
                              <p className="card-text font-small-3 mb-0">
                                Products
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                          <div className="d-flex flex-row">
                            <div className="avatar bg-light-success me-2">
                              <div className="avatar-content">
                                <i
                                  data-feather="dollar-sign"
                                  className="avatar-icon"
                                />
                              </div>
                            </div>
                            <div className="my-auto">
                              <h4 className="fw-bolder mb-0">$9745</h4>
                              <p className="card-text font-small-3 mb-0">
                                Revenue
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Miscellaneous Charts */}
              {/* Stats Vertical Card */}
              <div className="row">
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-info p-50 mb-1">
                        <div className="avatar-content">
                          <i data-feather="eye" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder">36.9k</h2>
                      <p className="card-text">Views</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-warning p-50 mb-1">
                        <div className="avatar-content">
                          <i
                            data-feather="message-square"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                      <h2 className="fw-bolder">12k</h2>
                      <p className="card-text">Comments</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-danger p-50 mb-1">
                        <div className="avatar-content">
                          <i
                            data-feather="shopping-bag"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                      <h2 className="fw-bolder">97.8k</h2>
                      <p className="card-text">Orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-primary p-50 mb-1">
                        <div className="avatar-content">
                          <i data-feather="heart" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder">26.8</h2>
                      <p className="card-text">Bookmarks</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-success p-50 mb-1">
                        <div className="avatar-content">
                          <i data-feather="award" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder">689</h2>
                      <p className="card-text">Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="card text-center">
                    <div className="card-body">
                      <div className="avatar bg-light-danger p-50 mb-1">
                        <div className="avatar-content">
                          <i data-feather="truck" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder">2.1k</h2>
                      <p className="card-text">Returns</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Stats Vertical Card */}
              {/* Stats Horizontal Card */}
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h2 className="fw-bolder mb-0">86%</h2>
                        <p className="card-text">CPU Usage</p>
                      </div>
                      <div className="avatar bg-light-primary p-50 m-0">
                        <div className="avatar-content">
                          <i data-feather="cpu" className="font-medium-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h2 className="fw-bolder mb-0">1.2gb</h2>
                        <p className="card-text">Memory Usage</p>
                      </div>
                      <div className="avatar bg-light-success p-50 m-0">
                        <div className="avatar-content">
                          <i data-feather="server" className="font-medium-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h2 className="fw-bolder mb-0">0.1%</h2>
                        <p className="card-text">Downtime Ratio</p>
                      </div>
                      <div className="avatar bg-light-danger p-50 m-0">
                        <div className="avatar-content">
                          <i
                            data-feather="activity"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h2 className="fw-bolder mb-0">13</h2>
                        <p className="card-text">Issues Found</p>
                      </div>
                      <div className="avatar bg-light-warning p-50 m-0">
                        <div className="avatar-content">
                          <i
                            data-feather="alert-octagon"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Stats Horizontal Card */}
              {/* Line Area Chart Card */}
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header flex-column align-items-start pb-0">
                      <div className="avatar bg-light-primary p-50 m-0">
                        <div className="avatar-content">
                          <i data-feather="users" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder mt-1">92.6k</h2>
                      <p className="card-text">Subscribers Gained</p>
                    </div>
                    <div id="line-area-chart-1" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header flex-column align-items-start pb-0">
                      <div className="avatar bg-light-success p-50 m-0">
                        <div className="avatar-content">
                          <i
                            data-feather="credit-card"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                      <h2 className="fw-bolder mt-1">97.5k</h2>
                      <p className="card-text">Revenue Generated</p>
                    </div>
                    <div id="line-area-chart-2" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header flex-column align-items-start pb-0">
                      <div className="avatar bg-light-danger p-50 m-0">
                        <div className="avatar-content">
                          <i
                            data-feather="shopping-cart"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                      <h2 className="fw-bolder mt-1">36%</h2>
                      <p className="card-text">Quarterly Sales</p>
                    </div>
                    <div id="line-area-chart-3" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header flex-column align-items-start pb-0">
                      <div className="avatar bg-light-warning p-50 m-0">
                        <div className="avatar-content">
                          <i data-feather="package" className="font-medium-5" />
                        </div>
                      </div>
                      <h2 className="fw-bolder mt-1">97.5K</h2>
                      <p className="card-text">Orders Received</p>
                    </div>
                    <div id="line-area-chart-4" />
                  </div>
                </div>
              </div>
              {/*/ Line Area Chart Card */}
              {/* Line Chart Card */}
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div>
                        <h2 className="fw-bolder">78.9k</h2>
                        <p className="card-text">Site Traffic</p>
                      </div>
                      <div className="avatar bg-light-primary p-50">
                        <div className="avatar-content">
                          <i data-feather="monitor" className="font-medium-5" />
                        </div>
                      </div>
                    </div>
                    <div id="line-area-chart-5" />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div>
                        <h2 className="fw-bolder">659.8k</h2>
                        <p className="card-text">Active Users</p>
                      </div>
                      <div className="avatar bg-light-success p-50">
                        <div className="avatar-content">
                          <i
                            data-feather="user-check"
                            className="font-medium-5"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="line-area-chart-6" />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div>
                        <h2 className="fw-bolder">28.7k</h2>
                        <p className="card-text">Newsletter</p>
                      </div>
                      <div className="avatar bg-light-warning p-50">
                        <div className="avatar-content">
                          <i data-feather="mail" className="font-medium-5" />
                        </div>
                      </div>
                    </div>
                    <div id="line-area-chart-7" />
                  </div>
                </div>
              </div>
              {/*/ Line Chart Card */}
            </section>
            {/*/ Statistics Card section*/}
          </div>
        </div>
      </div>
    </>
  );
}
