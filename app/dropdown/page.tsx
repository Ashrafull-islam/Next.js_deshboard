
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
            <h2 className="content-header-title float-start mb-0">Dropdowns</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Dropdowns</li>
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
      {/* Basic Dropdowns Start */}
      <section id="basic-dropdown">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Secondary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton6"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Success
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Danger
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton4"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton5"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Warning
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton5"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Info
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton3"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton7"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dark
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton7"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Dropdown End */}
      {/* Split Button Dropdown Starts */}
      <section id="dropdown-with-split-btn">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Split Dropdowns</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  To create a split button add class{" "}
                  <code>.dropdown-toggle-split</code> with your dropdown toggle
                  class And to add divider between dropdown item use class{" "}
                  <code>.dropdown-divider</code>
                </p>
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-success">
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <h6 className="dropdown-header">Header</h6>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-info">
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item disabled" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Split Button Dropdown Ends */}
      {/* Outline Dropdown Starts */}
      <section id="dropdown-with-outline-btn">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Outline</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  To create a dropdown with split button use{" "}
                  <code>.btn-outline-</code> with your dropdown toggle
                </p>
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primary
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-success dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Success
                    </button>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header">Header</h6>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-outline-danger">Danger</button>
                    <button
                      type="button"
                      className="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-info dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Info
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item disabled" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Outline Dropdown Ends */}
      {/* Flat Dropdown Start */}
      <section id="flat-dropdown">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Flat</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  To create a flat dropdown use <code>.btn-flat-*</code> with
                  your dropdown-toggle
                </p>
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton100"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton100"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton600"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Secondary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton600"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton200"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Success
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton200"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton400"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Danger
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton400"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton500"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Warning
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton500"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton300"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Info
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton300"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-flat-dark dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton700"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dark
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton700"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flat Dropdown Ends */}
      {/* Gradient Dropdowns Start */}
      <section id="gradient-dropdown">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Gradient</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton101"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton101"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton701"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Secondary
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton701"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton202"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Success
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton202"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton404"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Danger
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton404"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton505"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Warning
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton505"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton303"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Info
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton303"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-gradient-dark dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton707"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dark
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton707"
                    >
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Dropdown End */}
      {/* Dropdown Sizes Starts */}
      <section id="dropdown-sizes">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Sizes</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  To create dropdown with you can use <code>.btn-lg</code> for
                  large and <code>.btn-sm</code> for Small with your{" "}
                  <code>.btn</code> class
                </p>
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="demo-inline-spacing">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Large
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Default
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Small
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="demo-inline-spacing">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary btn-lg">
                        Large
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Default
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary btn-sm">
                        Small
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dropdown Sizes Ends */}
      {/* Dropdown Direction Starts */}
      <section id="dropdown-directions">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Directions</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  You can use drop from different direction to use drop from
                  bottom end use
                  <code>.dropdown-menu-end</code> with your{" "}
                  <code>.dropdown-menu</code>. For drop up use
                  <code>.dropup</code> as a wrapper. For drop end use{" "}
                  <code>.dropend</code> as wrapper. For drop start use
                  <code>.dropstart</code> as a wrapper.
                </p>
                <div className="demo-inline-spacing">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drop bottom end
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group dropup">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drop up
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item disabled" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group dropend">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drop end
                    </button>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header">Header</h6>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drop start
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item disabled" href="#">
                        Option 2
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dropdown Direction End */}
      {/* Dropdown variations Starts */}
      <section id="dropdown-variations">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Variations</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To create a dropdown with groups you can use{" "}
                  <code>.dropdown-header</code> for the header of groups and for
                  separation of group you can use <code>.dropdown-divider</code>
                  .
                </p>
                <p className="card-text mb-0">
                  To create a dropdown with icons use class{" "}
                  <code>.dropdown-icon-wrapper</code> with your dropdown and you
                  class class <code>.dropdown-icon</code> with the default{" "}
                  <code>&lt;i&gt;</code> tag.
                </p>
                <div className="demo-inline-spacing">
                  <div className="btn-group dropup">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton902"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Groups
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton902"
                    >
                      <h6 className="dropdown-header">Group 1</h6>
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <div className="dropdown-divider" />
                      <h6 className="dropdown-header">Group 2</h6>
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                      <div className="dropdown-divider" />
                      <h6 className="dropdown-header">Group 3</h6>
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                    </div>
                  </div>
                  <div className="btn-group dropup dropdown-icon-wrapper">
                    <button type="button" className="btn btn-primary">
                      Icons
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i data-feather="wifi" className="dropdown-icon" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <span className="dropdown-item">
                        <i data-feather="wifi-off" />
                      </span>
                      <span className="dropdown-item">
                        <i data-feather="volume-2" />
                      </span>
                      <span className="dropdown-item">
                        <i data-feather="volume-x" />
                      </span>
                      <span className="dropdown-item">
                        <i data-feather="bell" />
                      </span>
                      <span className="dropdown-item">
                        <i data-feather="bell-off" />
                      </span>
                      <span className="dropdown-item">
                        <i data-feather="phone-off" />
                      </span>
                    </div>
                  </div>
                  <div className="btn-group dropup">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Form
                    </button>
                    <div className="dropdown-menu">
                      <form action="#" className="px-2 py-2">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="exampleDropdownFormEmail1"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleDropdownFormEmail1"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="exampleDropdownFormPassword1"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleDropdownFormPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-0">
                          <div className="mb-1">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="dropdownCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dropdownCheck"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        New around here? Sign up
                      </a>
                      <a className="dropdown-item" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dropdown variations Ends */}
    </div>
  </div>
</div>

    </>
  )
}
