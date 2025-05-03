
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
                    Chartjs
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Charts &amp; Maps</a>
                      </li>
                      <li className="breadcrumb-item active">Chartjs</li>
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
                  You can easily create reuseable chart components. Read full
                  documentation
                  <a
                    href="https://www.chartjs.org/docs/latest/getting-started/"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            {/* ChartJS section start */}
            <section id="chartjs-chart">
              <div className="row">
                {/*Bar Chart Start */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                      <div className="header-left">
                        <h4 className="card-title">Latest Statistics</h4>
                      </div>
                      <div className="header-right d-flex align-items-center mt-sm-0 mt-1">
                        <i data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker border-0 shadow-none bg-transparent pe-0"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="bar-chart-ex chartjs"
                        data-height={400}
                      />
                    </div>
                  </div>
                </div>
                {/* Bar Chart End */}
                {/* Horizontal Bar Chart Start */}
                <div className="col-xl-6 col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                      <div className="header-left">
                        <p className="card-subtitle text-muted mb-25">
                          Balance
                        </p>
                        <h4 className="card-title">$74,123</h4>
                      </div>
                      <div className="header-right d-flex align-items-center mt-sm-0 mt-1">
                        <i data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker border-0 shadow-none bg-transparent pe-0"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="horizontal-bar-chart-ex chartjs"
                        data-height={400}
                      />
                    </div>
                  </div>
                </div>
                {/* Horizontal Bar Chart End */}
              </div>
              {/* Line Chart Starts*/}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h4 className="card-title">Statistics</h4>
                        <span className="card-subtitle text-muted">
                          Commercial networks and enterprises
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="line-chart-ex chartjs"
                        data-height={450}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Line Chart Ends*/}
              <div className="row">
                {/* Radar Chart Starts*/}
                <div className="col-lg-6 col-12">
                  <div className="card">
                    <div className="card-header d-flex flex-row justify-content-between align-items-center">
                      <h4 className="card-title">Radar Chart</h4>
                      <div className="d-flex align-items-center flex-wrap">
                        <div id="tooltip" className="tooltip-placeholder" />
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="radar-chart-ex chartjs"
                        id="canvas"
                        data-height={355}
                      />
                    </div>
                  </div>
                </div>
                {/* Radar Chart Ends*/}
                {/* Polar Area Chart Starts */}
                <div className="col-lg-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Average Skills</h4>
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
                      <canvas
                        className="polar-area-chart-ex chartjs"
                        data-height={350}
                      />
                    </div>
                  </div>
                </div>
                {/* Polar Area Chart Ends*/}
              </div>
              {/* Bubble Chart Starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bubble Chart</h4>
                      <div className="d-flex align-items-center flex-wrap">
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
                      <canvas
                        className="bubble-chart-ex chartjs"
                        data-height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Bubble Chart Ends */}
              <div className="row">
                {/* Donut Chart Starts */}
                <div className="col-lg-4 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sessions By Device</h4>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="doughnut-chart-ex chartjs"
                        data-height={275}
                      />
                      <div className="d-flex justify-content-between mt-3 mb-1">
                        <div className="d-flex align-items-center">
                          <i
                            data-feather="monitor"
                            className="font-medium-2 text-primary"
                          />
                          <span className="fw-bold ms-75 me-25">Desktop</span>
                          <span>- 80%</span>
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
                          <span>- 10%</span>
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
                            className="font-medium-2 text-success"
                          />
                          <span className="fw-bold ms-75 me-25">Tablet</span>
                          <span>- 10%</span>
                        </div>
                        <div>
                          <span>-5%</span>
                          <i
                            data-feather="arrow-down"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Donut Chart Starts */}
                {/* Scatter Chart Starts  */}
                <div className="col-lg-8 col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-baseline align-items-sm-center flex-sm-row flex-column">
                      <h4 className="card-title">New Product Data</h4>
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
                      <canvas
                        className="scatter-chart-ex chartjs"
                        data-height={415}
                      />
                    </div>
                  </div>
                </div>
                {/* Scatter Chart Ends  */}
              </div>
              {/* Area Chart Starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
                      <h4 className="card-title">Data Science</h4>
                      <div className="header-right d-flex align-items-center mt-sm-0 mt-1">
                        <i data-feather="calendar" />
                        <input
                          type="text"
                          className="form-control flat-picker border-0 shadow-none bg-transparent pe-0"
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="line-area-chart-ex chartjs"
                        data-height={450}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Area Chart Ends */}
            </section>
            {/* ChartJS section end */}
          </div>
        </div>
      </div>
    </>
  );
}
