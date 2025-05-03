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
            <h2 className="content-header-title float-start mb-0">Alerts</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Alerts</li>
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
      {/* Basic Alerts start */}
      <section id="basic-alerts">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Default</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Alerts are available for any length of text, as well as an
                  optional dismiss button. Add
                  <code>
                    .alert.alert-{"{"}color{"}"}
                  </code>{" "}
                  classes for alert with all theme colors.
                </p>
                <div className="demo-spacing-0">
                  <div className="alert alert-primary" role="alert">
                    <div className="alert-body">
                      <strong>Good Morning!</strong> Start your day with some
                      alerts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Alerts end */}
      {/* Alerts with Title start */}
      <section id="alerts-with-title">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Title</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add a title to the alert with the <code>.alert-heading</code>
                </p>
                <div className="demo-spacing-0">
                  <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">
                      Lorem ipsum dolor sit amet
                    </h4>
                    <div className="alert-body">
                      Lorem ipsum dolor sit amet{" "}
                      <a href="#" className="alert-link">
                        consectetur
                      </a>{" "}
                      adipisicing elit. Ducimus, laborum!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alerts with Title end */}
      {/* Alert Colors start */}
      <section id="alert-colors">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Colors</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Alerts are available for any length of text, as well as an
                  optional dismiss button. Add
                  <code>
                    .alert.alert-{"{"}color{"}"}
                  </code>{" "}
                  classes for alert with all theme colors.
                </p>
                <div className="demo-spacing-0">
                  <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">Primary</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-secondary" role="alert">
                    <h4 className="alert-heading">Secondary</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Success</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Danger</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Warning</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">Info</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                  <div className="alert alert-dark" role="alert">
                    <h4 className="alert-heading">Dark</h4>
                    <div className="alert-body">
                      Tootsie roll lollipop lollipop icing. Wafer cookie danish
                      macaroon. Liquorice fruitcake apple pie I love cupcake
                      cupcake.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alert Colors End */}
      {/*Closable Alerts start */}
      <section id="alerts-closable">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Closable Alerts</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add a dismiss button and the <code>.alert-dismissible</code>{" "}
                  class, which adds extra padding to the right of the alert and
                  positions the <code>.btn-close</code> button.
                </p>
                <div className="demo-spacing-0">
                  <div
                    className="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="alert-body">
                      Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I
                      love wafer I love wafer.
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Closable Alerts end */}
      {/* Alert With Icon start */}
      <section id="alerts-with-icons">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Icon</h4>
              </div>
              <div className="card-body">
                <p className="card-text">Alert With Icon</p>
                <div className="demo-spacing-0">
                  <div className="alert alert-primary" role="alert">
                    <div className="alert-body d-flex align-items-center">
                      <i data-feather="star" className="me-50" />
                      <span>
                        {" "}
                        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet
                        I love wafer I love wafer.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alert With Icon end */}
      {/* Example Alert start */}
      <section id="alert-example">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Example</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  An example would be to have an input and when a condition is
                  met, show the alert. use class
                  <code>.alert-validation</code> for your input and class{" "}
                  <code>.alert-validation-msg</code> with your alert.
                </p>
                <form>
                  <label htmlFor="numbers" className="form-label">
                    Enter Only Numbers
                  </label>
                  <input
                    id="numbers"
                    className="form-control w-25 h-25 alert-validation"
                    type="text"
                  />
                </form>
                <div className="demo-spacing-0">
                  <div
                    className="alert alert-danger mt-1 alert-validation-msg"
                    role="alert"
                  >
                    <div className="alert-body d-flex align-items-center">
                      <i data-feather="info" className="me-50" />
                      <span>
                        The value is <strong>invalid</strong>. You can only
                        enter numbers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Example Alert end */}
    </div>
  </div>
</div>

    </>
  )
}
