
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
              Analytics Cards
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Cards</a>
                </li>
                <li className="breadcrumb-item active">Analytics Cards</li>
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
      {/* Analytics card section */}
      <section id="analytics-card">
        <div className="row match-height">
          {/* Support Tracker Card */}
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between pb-0">
                <h4 className="card-title">Support Tracker</h4>
                <div className="dropdown chart-dropdown">
                  <button
                    className="btn btn-sm border-0 dropdown-toggle p-50"
                    type="button"
                    id="dropdownItem4"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Last 7 Days
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownItem4"
                  >
                    <a className="dropdown-item" href="#">
                      Last 28 Days
                    </a>
                    <a className="dropdown-item" href="#">
                      Last Month
                    </a>
                    <a className="dropdown-item" href="#">
                      Last Year
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-2 col-12 d-flex flex-column flex-wrap text-center">
                    <h1 className="font-large-2 fw-bolder mt-2 mb-0">163</h1>
                    <p className="card-text">Tickets</p>
                  </div>
                  <div className="col-sm-10 col-12 d-flex justify-content-center">
                    <div id="support-tracker-chart" />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="text-center">
                    <p className="card-text mb-50">New Tickets</p>
                    <span className="font-large-1 fw-bold">29</span>
                  </div>
                  <div className="text-center">
                    <p className="card-text mb-50">Open Tickets</p>
                    <span className="font-large-1 fw-bold">63</span>
                  </div>
                  <div className="text-center">
                    <p className="card-text mb-50">Response Time</p>
                    <span className="font-large-1 fw-bold">1d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Support Tracker Card */}
          {/* Average Sessions Card */}
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row pb-50">
                  <div className="col-lg-6 col-12 d-flex justify-content-between flex-column order-lg-1 order-2 mt-1 mt-lg-0">
                    <div className="mb-1 mb-lg-0">
                      <h2 className="fw-bolder mb-25">2.7K</h2>
                      <p className="card-text fw-bold mb-2">Avg Sessions</p>
                      <div className="font-medium-2">
                        <span className="text-success me-25">+5.2%</span>
                        <span>vs last 7 days</span>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                  <div className="col-lg-6 col-12 d-flex justify-content-between flex-column text-end order-lg-2 order-1">
                    <div className="dropdown chart-dropdown">
                      <button
                        className="btn btn-sm border-0 dropdown-toggle p-50"
                        type="button"
                        id="dropdownItem5"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 7 Days
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownItem5"
                      >
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                    <div id="avg-session-chart" />
                  </div>
                </div>
                <hr />
                <div className="row avg-sessions pt-50">
                  <div className="col-6 mb-2">
                    <p className="mb-50">Goal: $100000</p>
                    <div
                      className="progress progress-bar-primary"
                      style={{ height: 6 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={50}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-2">
                    <p className="mb-50">Users: 100K</p>
                    <div
                      className="progress progress-bar-warning"
                      style={{ height: 6 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={60}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-50">Retention: 90%</p>
                    <div
                      className="progress progress-bar-danger"
                      style={{ height: 6 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={70}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-50">Duration: 1yr</p>
                    <div
                      className="progress progress-bar-success"
                      style={{ height: 6 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={90}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Average Sessions Card */}
        </div>
        <div className="row match-height">
          {/* Revenue Report Card */}
          <div className="col-lg-8 col-12">
            <div className="card card-revenue-budget">
              <div className="row mx-0">
                <div className="col-md-8 col-12 revenue-report-wrapper">
                  <div className="d-sm-flex justify-content-between align-items-center mb-3">
                    <h4 className="card-title mb-50 mb-sm-0">Revenue Report</h4>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center me-2">
                        <span className="bullet bullet-primary font-small-3 me-50 cursor-pointer" />
                        <span>Earning</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="bullet bullet-warning font-small-3 me-50 cursor-pointer" />
                        <span>Expense</span>
                      </div>
                    </div>
                  </div>
                  <div id="revenue-report-chart" />
                </div>
                <div className="col-md-4 col-12 budget-wrapper">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      2020
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        2020
                      </a>
                      <a className="dropdown-item" href="#">
                        2019
                      </a>
                      <a className="dropdown-item" href="#">
                        2018
                      </a>
                    </div>
                  </div>
                  <h2 className="mb-25">$25,852</h2>
                  <div className="d-flex justify-content-center">
                    <span className="fw-bolder me-25">Budget:</span>
                    <span>56,800</span>
                  </div>
                  <div id="budget-chart" />
                  <button type="button" className="btn btn-primary">
                    Increase Budget
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*/ Revenue Report Card */}
          {/* Goal Overview Card */}
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Goal Overview</h4>
                <i
                  data-feather="help-circle"
                  className="font-medium-3 text-muted cursor-pointer"
                />
              </div>
              <div className="card-body p-0">
                <div id="goal-overview-chart" />
                <div className="row border-top text-center mx-0">
                  <div className="col-6 border-end py-1">
                    <p className="card-text text-muted mb-0">Completed</p>
                    <h3 className="fw-bolder mb-0">786,617</h3>
                  </div>
                  <div className="col-6 py-1">
                    <p className="card-text text-muted mb-0">In Progress</p>
                    <h3 className="fw-bolder mb-0">13,561</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Goal Overview Card */}
        </div>
        <div className="row match-height">
          {/* Revenue Card */}
          <div className="col-lg-8 col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Revenue</h4>
                <i
                  data-feather="settings"
                  className="font-medium-3 text-muted cursor-pointer"
                />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-start mb-3">
                  <div className="me-2">
                    <p className="card-text mb-50">This Month</p>
                    <h3 className="fw-bolder">
                      <sup className="font-medium-1 fw-bold">$</sup>
                      <span className="text-primary">86,589</span>
                    </h3>
                  </div>
                  <div>
                    <p className="card-text mb-50">Last Month</p>
                    <h3 className="fw-bolder">
                      <sup className="font-medium-1 fw-bold">$</sup>
                      <span>73,683</span>
                    </h3>
                  </div>
                </div>
                <div id="revenue-chart" />
              </div>
            </div>
          </div>
          {/*/ Revenue Card */}
          {/* Sales Polygon Chart Card */}
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-start pb-1">
                <div>
                  <h4 className="card-title mb-25">Sales</h4>
                  <p className="card-text">Last 6 months</p>
                </div>
                <i
                  data-feather="more-vertical"
                  className="font-medium-3 cursor-pointer"
                />
              </div>
              <div className="card-body">
                <div className="d-inline-block me-1">
                  <div className="d-flex align-items-center">
                    <i
                      data-feather="circle"
                      className="font-small-3 text-primary me-50"
                    />
                    <h6 className="mb-0">Sales</h6>
                  </div>
                </div>
                <div className="d-inline-block">
                  <div className="d-flex align-items-center">
                    <i
                      data-feather="circle"
                      className="font-small-3 text-info me-50"
                    />
                    <h6 className="mb-0">Visits</h6>
                  </div>
                </div>
                <div id="sales-chart" />
              </div>
            </div>
          </div>
          {/*/ Sales Polygon Chart Card */}
        </div>
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row match-height">
              {/* Sales Line Chart Card */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header align-items-start">
                    <div>
                      <h4 className="card-title mb-25">Sales</h4>
                      <p className="card-text mb-0">2020 Total Sales: 12.84k</p>
                    </div>
                    <i
                      data-feather="settings"
                      className="font-medium-3 text-muted cursor-pointer"
                    />
                  </div>
                  <div className="card-body pb-0">
                    <div id="sales-line-chart" />
                  </div>
                </div>
              </div>
              {/*/ Sales Line Chart Card */}
              {/* Sessions Card */}
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-end">
                    <h4>Sessions By Device</h4>
                    <div className="dropdown chart-dropdown">
                      <button
                        className="btn btn-sm border-0 dropdown-toggle px-50"
                        type="button"
                        id="dropdownItem1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 7 Days
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownItem1"
                      >
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="session-chart" className="my-1" />
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="monitor"
                          className="font-medium-2 text-primary"
                        />
                        <span className="fw-bold ms-75 me-25">Desktop</span>
                        <span>- 58.6%</span>
                      </div>
                      <div>
                        <span>2%</span>
                        <i data-feather="arrow-up" className="text-success" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="tablet"
                          className="font-medium-2 text-warning"
                        />
                        <span className="fw-bold ms-75 me-25">Mobile</span>
                        <span>- 34.9%</span>
                      </div>
                      <div>
                        <span>8%</span>
                        <i data-feather="arrow-up" className="text-success" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="tablet"
                          className="font-medium-2 text-danger"
                        />
                        <span className="fw-bold ms-75 me-25">Tablet</span>
                        <span>- 6.5%</span>
                      </div>
                      <div>
                        <span>-5%</span>
                        <i data-feather="arrow-down" className="text-danger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Sessions Card */}
              {/* Customers Chart Card */}
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-end">
                    <h4 className="card-title">Customers</h4>
                    <div className="dropdown chart-dropdown">
                      <button
                        className="btn btn-sm border-0 dropdown-toggle px-50"
                        type="button"
                        id="dropdownItem3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 7 Days
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownItem3"
                      >
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="customer-chart" className="mt-2 mb-1" />
                    <div className="pt-25">
                      <div className="d-flex justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <i
                            data-feather="circle"
                            className="font-medium-1 text-primary"
                          />
                          <span className="fw-bold ms-75">New</span>
                        </div>
                        <span>690</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <i
                            data-feather="circle"
                            className="font-medium-1 text-warning"
                          />
                          <span className="fw-bold ms-75">Returning</span>
                        </div>
                        <span>258</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <i
                            data-feather="circle"
                            className="font-medium-1 text-danger"
                          />
                          <span className="fw-bold ms-75">Referrals</span>
                        </div>
                        <span>149</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Customers Chart Card */}
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              {/* Product Order Card */}
              <div className="col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title">Product Orders</h4>
                    <div className="dropdown chart-dropdown">
                      <button
                        className="btn btn-sm border-0 dropdown-toggle px-50"
                        type="button"
                        id="dropdownItem2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 7 Days
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownItem2"
                      >
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="product-order-chart" />
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="circle"
                          className="font-medium-1 text-primary"
                        />
                        <span className="fw-bold ms-75">Finished</span>
                      </div>
                      <span>23043</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="circle"
                          className="font-medium-1 text-warning"
                        />
                        <span className="fw-bold ms-75">Pending</span>
                      </div>
                      <span>14658</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="circle"
                          className="font-medium-1 text-danger"
                        />
                        <span className="fw-bold ms-75">Rejected</span>
                      </div>
                      <span>4758</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Product Order Card */}
              {/* Earnings Card */}
              <div className="col-12">
                <div className="card earnings-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="card-title mb-1">Earnings</h4>
                        <div className="font-small-2">This Month</div>
                        <h5 className="mb-1">$4055.56</h5>
                        <p className="card-text text-muted font-small-2">
                          <span className="fw-bolder">68.2%</span>
                          <span> more earnings than last month.</span>
                        </p>
                      </div>
                      <div className="col-6">
                        <div id="earnings-donut-chart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Earnings Card */}
            </div>
          </div>
        </div>
      </section>
      {/*/ Analytics Card section */}
    </div>
  </div>
</div>

    </>
  )
}
