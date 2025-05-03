
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
                    Card Actions
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Card Actions</li>
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
            {/* Card Actions Section */}
            <section id="card-actions">
              {/* Info table about actions */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Card Actions</h4>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="collapse">
                              <i data-feather="chevron-down" />
                            </a>
                          </li>
                          <li>
                            <a data-action="reload">
                              <i data-feather="rotate-cw" />
                            </a>
                          </li>
                          <li>
                            <a data-action="close">
                              <i data-feather="x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Action</th>
                                    <th>Icon</th>
                                    <th>Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Collapse</td>
                                    <td className="text-center">
                                      <i data-feather="chevron-down" />
                                    </td>
                                    <td>
                                      Collapse card content using collapse
                                      action.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Refresh Content</td>
                                    <td className="text-center">
                                      <i data-feather="rotate-cw" />
                                    </td>
                                    <td>
                                      Refresh your card content using refresh
                                      action.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Remove Card</td>
                                    <td className="text-center">
                                      <i data-feather="x" />
                                    </td>
                                    <td>
                                      Remove card from page using remove card
                                      action
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Info table about actions */}
              {/* Collapsible and Refresh Actions */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Collapsible</h4>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="collapse">
                              <i data-feather="chevron-down" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <p className="card-text">
                          You can create a collapsible content by by adding{" "}
                          <code>[data-action="collapse"]</code> and wrapping it
                          up with <code>.heading-elements</code> in{" "}
                          <code>.card-header</code>
                        </p>
                        <p className="card-text">
                          Click on
                          <i data-feather="chevron-down" className="mx-50" />
                          to see card collapse in action
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Refresh Content</h4>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="reload">
                              <i data-feather="rotate-cw" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          To create a card with refresh action use{" "}
                          <code>[data-action="reload"]</code> inside of
                          <code>.heading-element</code>
                        </p>
                        <p className="card-text">
                          Click on
                          <i data-feather="rotate-cw" className="mx-50" />
                          icon to see refresh card content in action.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Collapsible and Refresh Actions */}
              {/* Remove Action */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Remove Card</h4>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="close">
                              <i data-feather="x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <p className="card-text">
                          You can create a closeable card by using{" "}
                          <code>[data-action="close"]</code> inside
                          <code>.heading-element</code>
                        </p>
                        <p className="card-text">
                          Click on
                          <i data-feather="x" className="mx-50" />
                          icon to see closeable card in action.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Remove Action */}
            </section>
            {/*/ Card Actions Section */}
          </div>
        </div>
      </div>
    </>
  );
}
