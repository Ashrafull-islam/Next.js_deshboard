
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
                    Input Mask
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Input Mask</li>
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
            {/* Input Mask start */}
            <section id="input-mask-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Mask</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="credit-card">
                            Credit Card
                          </label>
                          <input
                            type="text"
                            className="form-control credit-card-mask"
                            placeholder="0000 0000 0000 0000"
                            id="credit-card"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="phone-number">
                            Phone Number
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">US (+1)</span>
                            <input
                              type="text"
                              className="form-control phone-number-mask"
                              placeholder="1 234 567 8900"
                              id="phone-number"
                            />
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="date">
                            Date
                          </label>
                          <input
                            type="text"
                            className="form-control date-mask"
                            placeholder="YYYY-MM-DD"
                            id="date"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="time">
                            Time
                          </label>
                          <input
                            type="text"
                            className="form-control time-mask"
                            placeholder="hh:mm:ss"
                            id="time"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label
                            className="form-label"
                            htmlFor="numeral-formatting"
                          >
                            Numeral formatting
                          </label>
                          <input
                            type="text"
                            className="form-control numeral-mask"
                            placeholder="10,000"
                            id="numeral-formatting"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="blocks">
                            Blocks
                          </label>
                          <input
                            type="text"
                            className="form-control block-mask"
                            placeholder="Blocks [4, 3, 3]"
                            id="blocks"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="delimiters">
                            Delimiters
                          </label>
                          <input
                            type="text"
                            className="form-control delimiter-mask"
                            placeholder="Delimiter: '.'"
                            id="delimiters"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label
                            className="form-label"
                            htmlFor="custom-delimiters"
                          >
                            Custom Delimiters
                          </label>
                          <input
                            type="text"
                            className="form-control custom-delimiter-mask"
                            placeholder="Delimiter: ['.', '.', '-']"
                            id="custom-delimiters"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-2">
                          <label className="form-label" htmlFor="prefix">
                            Prefix
                          </label>
                          <input
                            type="text"
                            className="form-control prefix-mask"
                            id="prefix"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input Mask End */}
          </div>
        </div>
      </div>
    </>
  );
}
