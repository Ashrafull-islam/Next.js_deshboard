
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
                    Ratings
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Ratings</li>
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
              {/* Basic */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Basic</h4>
                  </div>
                  <div className="card-body">
                    <div className="basic-ratings" />
                  </div>
                </div>
              </div>
              {/*/ Basic */}
              {/* Readonly */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Read Only</h4>
                  </div>
                  <div className="card-body">
                    <div
                      className="read-only-ratings"
                      data-rateyo-read-only="true"
                    />
                  </div>
                </div>
              </div>
              {/*/ Readonly */}
              {/* Custom SVG */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Custom SVG</h4>
                  </div>
                  <div className="card-body">
                    <div className="custom-svg-ratings" />
                  </div>
                </div>
              </div>
              {/*/ Custom SVG */}
              {/* Half Star */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Half Star</h4>
                  </div>
                  <div className="card-body">
                    <div
                      className="half-star-ratings"
                      data-rateyo-half-star="true"
                    />
                  </div>
                </div>
              </div>
              {/*/ Half Star */}
              {/* Full Star */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Full Star</h4>
                  </div>
                  <div className="card-body">
                    <div
                      className="full-star-ratings"
                      data-rateyo-full-star="true"
                    />
                  </div>
                </div>
              </div>
              {/*/ Full Star */}
              {/* Multicolor */}
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Multicolor</h4>
                  </div>
                  <div className="card-body">
                    <div className="multi-color-ratings" />
                  </div>
                </div>
              </div>
              {/*/ Multicolor */}
              {/* Events */}
              <div className="col-xl-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Events</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md d-flex flex-column align-items-start mb-sm-0 mb-1">
                        <p className="card-text fw-semibold mb-25">
                          onSet Event
                        </p>
                        <div className="onset-event-ratings" />
                      </div>
                      <div className="col-md d-flex flex-column align-items-start">
                        <p className="card-text fw-semibold mb-25">
                          onChange Event
                        </p>
                        <div className="onChange-event-ratings" />
                        <div className="counter-wrapper mt-1">
                          <strong>Ratings:</strong>
                          <span className="counter" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Events */}
              {/* Methods */}
              <div className="col-xl-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Methods</h4>
                  </div>
                  <div className="card-body">
                    <div className="methods-ratings" />
                    <div className="demo-inline-spacing">
                      <button className="btn btn-outline-primary btn-sm btn-initialize">
                        Initialize
                      </button>
                      <button className="btn btn-outline-primary btn-sm btn-get-rating">
                        Get Ratings
                      </button>
                      <button className="btn btn-outline-primary btn-sm btn-set-rating">
                        Set Ratings to 1
                      </button>
                      <button className="btn btn-outline-danger btn-sm btn-destroy">
                        Destroy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Methods */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
