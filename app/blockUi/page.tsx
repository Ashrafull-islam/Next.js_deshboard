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
                    BlockUI
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">BlockUI</li>
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
              {/* Section BlockUI */}
              <div className="col-md-6">
                <section className="section-blockui">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Section Blocking</h4>
                    </div>
                    <div className="card-body">
                      <div className="border p-1" id="section-block">
                        <p className="card-text mb-0">
                          Lorem ipsum dolor sit amet, an vel affert soleat
                          possim. Usu meis neglegentur ut, oporteat salutandi
                          dignissim at mea. Pericula erroribus quaerendum ex
                          duo, his autem accusamus ad, alienum detracto
                          rationibus vis et. No est volumus ocurreret
                          vituperata.
                        </p>
                      </div>
                      <div className="demo-inline-spacing">
                        <button className="btn btn-outline-primary btn-section-block">
                          Default
                        </button>
                        <button className="btn btn-outline-primary btn-section-block-overlay">
                          Overlay Color
                        </button>
                        <button className="btn btn-outline-primary btn-section-block-spinner">
                          Custom Spinner
                        </button>
                        <button className="btn btn-outline-primary btn-section-block-custom">
                          Custom Message
                        </button>
                        <button className="btn btn-outline-primary btn-section-block-multiple">
                          Multiple Message
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/*/ Section BlockUI */}
              {/* Card BlockUI */}
              <div className="col-md-6">
                <section className="card-blockui">
                  <div className="card" id="card-block">
                    <div className="card-header">
                      <h4 className="card-title">Card Blocking</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, an vel affert soleat possim.
                        Usu meis neglegentur ut, oporteat salutandi dignissim at
                        mea. Pericula erroribus quaerendum ex duo, his autem
                        accusamus ad, alienum detracto rationibus vis et. No est
                        volumus ocurreret vituperata.
                      </p>
                      <p className="card-text mb-0">
                        Lorem ipsum dolor sit amet, an vel affert soleat possim.
                        Usu meis neglegentur ut, oporteat salutandi dignissim
                      </p>
                      <div className="demo-inline-spacing">
                        <button className="btn btn-outline-primary btn-card-block">
                          Default
                        </button>
                        <button className="btn btn-outline-primary btn-card-block-overlay">
                          Overlay Color
                        </button>
                        <button className="btn btn-outline-primary btn-card-block-spinner">
                          Custom Spinner
                        </button>
                        <button className="btn btn-outline-primary btn-card-block-custom">
                          Custom Message
                        </button>
                        <button className="btn btn-outline-primary btn-card-block-multiple">
                          Multiple Message
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/*/ Card BlockUI */}
              {/* Page BlockUI */}
              <div className="col-md-6">
                <section className="page-blockui">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Page Blocking</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, an vel affert soleat possim.
                        Usu meis neglegentur ut, oporteat salutandi dignissim at
                        mea. Pericula erroribus quaerendum ex duo, his autem
                        accusamus ad, alienum detracto rationibus vis et. No est
                        volumus ocurreret vituperata.
                      </p>
                      <p className="card-text mb-0">
                        Lorem ipsum dolor sit amet, an vel affert soleat possim.
                        Usu meis neglegentur ut, oporteat salutandi dignissim
                      </p>
                      <div className="demo-inline-spacing">
                        <button className="btn btn-outline-primary btn-page-block">
                          Default
                        </button>
                        <button className="btn btn-outline-primary btn-page-block-overlay">
                          Overlay Color
                        </button>
                        <button className="btn btn-outline-primary btn-page-block-spinner">
                          Custom Spinner
                        </button>
                        <button className="btn btn-outline-primary btn-page-block-custom">
                          Custom Message
                        </button>
                        <button className="btn btn-outline-primary btn-page-block-multiple">
                          Multiple Message
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/*/ Page BlockUI */}
              {/* Form BlockUI */}
              <div className="col-md-6">
                <section className="page-blockui">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Form Blocking</h4>
                    </div>
                    <div className="card-body">
                      <form className="form-block p-50">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-end mb-0">
                          <button className="btn btn-primary disabled me-75">
                            Submit
                          </button>
                          <button className="btn btn-outline-secondary disabled">
                            Reset
                          </button>
                        </div>
                      </form>
                      <div className="demo-inline-spacing">
                        <button className="btn btn-outline-primary btn-form-block">
                          Default
                        </button>
                        <button className="btn btn-outline-primary btn-form-block-overlay">
                          Overlay Color
                        </button>
                        <button className="btn btn-outline-primary btn-form-block-spinner">
                          Custom Spinner
                        </button>
                        <button className="btn btn-outline-primary btn-form-block-custom">
                          Custom Message
                        </button>
                        <button className="btn btn-outline-primary btn-form-block-multiple">
                          Multiple Message
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/*/ Form BlockUI */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
