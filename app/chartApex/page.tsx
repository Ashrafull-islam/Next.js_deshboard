
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
                    Apex Charts
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Charts &amp; Maps</a>
                      </li>
                      <li className="breadcrumb-item active">Apex</li>
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
            <div className="row">
              <div className="col-12">
                <p>
                  An Apexcharts.js component for ApexCharts. Read full
                  documnetation
                  <a
                    href="https://apexcharts.com/docs/installation/"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            {/* apex charts section start */}
            <section id="apexchart">
              <div className="row">
                {/* Area Chart starts */}
                <div className="col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-sm-row flex-column
      justify-content-md-between
      align-items-start
      justify-content-start
    "
                    >
                      <div>
                        <h4 className="card-title">Line Chart</h4>
                        <span className="card-subtitle text-muted">
                          Commercial networks
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="font-medium-2" data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker bg-transparent border-0 shadow-none"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="line-area-chart" />
                    </div>
                  </div>
                </div>
                {/* Area Chart ends */}
                {/* Column Chart Starts */}
                <div className="col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-md-row flex-column
      justify-content-md-between justify-content-start
      align-items-md-center align-items-start
    "
                    >
                      <h4 className="card-title">Data Science</h4>
                      <div className="d-flex align-items-center mt-md-0 mt-1">
                        <i className="font-medium-2" data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker bg-transparent border-0 shadow-none"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="column-chart" />
                    </div>
                  </div>
                </div>
                {/* Column Chart Ends */}
                {/* Scatter Chart Starts */}
                <div className="col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-md-row flex-column
      justify-content-md-between justify-content-start
      align-items-md-center align-items-start
    "
                    >
                      <h4 className="card-title">New Technologies Data</h4>
                      <div
                        className="btn-group mt-md-0 mt-1"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="radio_options"
                          id="radio_option1"
                          autoComplete="off"
                          defaultChecked={true}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="radio_option1"
                        >
                          Daily
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="radio_options"
                          id="radio_option2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="radio_option2"
                        >
                          Monthly
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="radio_options"
                          id="radio_option3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="radio_option3"
                        >
                          Yearly
                        </label>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="scatter-chart" />
                    </div>
                  </div>
                </div>
                {/* Scatter Chart Ends */}
                {/* Line Chart Starts */}
                <div className="col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-sm-row flex-column
      justify-content-md-between
      align-items-start
      justify-content-start
    "
                    >
                      <div>
                        <h4 className="card-title mb-25">Balance</h4>
                        <span className="card-subtitle text-muted">
                          Commercial networks &amp; enterprises
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
                        <h5 className="fw-bolder mb-0 me-1">$ 100,000</h5>
                        <span className="badge badge-light-secondary">
                          <i
                            className="text-danger font-small-3"
                            data-feather="arrow-down"
                          />
                          <span className="align-middle">20%</span>
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="line-chart" />
                    </div>
                  </div>
                </div>
                {/* Line Chart Ends */}
                {/* Bar Chart Starts */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-sm-row flex-column
      justify-content-md-between
      align-items-start
      justify-content-start
    "
                    >
                      <div>
                        <p className="card-subtitle text-muted mb-25">
                          Balance
                        </p>
                        <h4 className="card-title fw-bolder">$74,382.72</h4>
                      </div>
                      <div className="d-flex align-items-center mt-md-0 mt-1">
                        <i className="font-medium-2" data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker bg-transparent border-0 shadow-none"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="bar-chart" />
                    </div>
                  </div>
                </div>
                {/* Bar Chart Ends */}
                {/* Candlestick Chart Starts */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-sm-row flex-column
      justify-content-md-between
      align-items-start
      justify-content-start
    "
                    >
                      <div>
                        <h4 className="card-title mb-50">Stock Prices</h4>
                        <p className="mb-0">$50,863.98</p>
                      </div>
                      <div className="d-flex align-items-center mt-md-0 mt-1">
                        <i className="font-medium-2" data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker bg-transparent border-0 shadow-none"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="candlestick-chart" />
                    </div>
                  </div>
                </div>
                {/* Candlestick Chart Ends */}
                {/* Heatmap Chart Starts */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h4 className="card-title">Daily Sales States</h4>
                      <div className="dropdown">
                        <i
                          data-feather="more-vertical"
                          className="cursor-pointer"
                          role="button"
                          id="heat-chart-dd"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></i>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="heat-chart-dd"
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
                      <div id="heatmap-chart" />
                    </div>
                  </div>
                </div>
                {/* Heatmap Chart Ends */}
                {/* RadialBar Chart Starts */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div
                      className="
      card-header
      d-flex
      flex-sm-row flex-column
      justify-content-md-between
      align-items-start
      justify-content-start
    "
                    >
                      <h4 className="card-title mb-sm-0 mb-1">Statistics</h4>
                    </div>
                    <div className="card-body">
                      <div id="radialbar-chart" />
                    </div>
                  </div>
                </div>
                {/* RadialBar Chart Ends */}
                {/* Radial Chart Starts*/}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Mobile Comparison</h4>
                    </div>
                    <div className="card-body">
                      <div id="radar-chart" />
                    </div>
                  </div>
                </div>
                {/* Radial Chart Ends*/}
                {/* Donut Chart Starts*/}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div className="card-header flex-column align-items-start">
                      <h4 className="card-title mb-75">Expense Ratio</h4>
                      <span className="card-subtitle text-muted">
                        Spending on various categories{" "}
                      </span>
                    </div>
                    <div className="card-body">
                      <div id="donut-chart" />
                    </div>
                  </div>
                </div>
                {/* Donut Chart Ends*/}
                {/* Apex charts section end */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
