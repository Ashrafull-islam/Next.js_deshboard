"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="beforeInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Bootstrap Tables
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Table Bootstrap
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
            {/* Basic Tables start */}
            <div className="row" id="basic-table">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Table Basic</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Using the most basic table Leanne Grahamup, here’s how{" "}
                      <code>.table</code>-based tables look in Bootstrap. You
                      can use any example of below table for your table and it
                      can be use with any type of bootstrap tables.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Basic Tables end */}
            {/* Dark Tables start */}
            <div className="row" id="dark-table">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Dark Table</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      You can also invert the colors—with light text on dark
                      backgrounds—with <code>.table-dark</code> class with
                      <code>.table</code> class.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Dark Tables end */}
            {/* Table head options start */}
            <div className="row" id="table-head">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Table head options</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Similar to tables and dark tables, use the modifier
                      classes
                      <code className="highlighter-rouge">.table-dark</code> to
                      make
                      <code className="highlighter-rouge">&lt;thead&gt;</code>s
                      appear dark.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-dark">
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-body mt-2">
                    <p className="card-text">
                      Use the modifier class{" "}
                      <code className="highlighter-rouge">.table-light</code> to
                      make
                      <code className="highlighter-rouge">&lt;thead&gt;</code>s
                      appear light.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-light">
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Table head options end */}
            {/* Striped rows start */}
            <div className="row" id="table-striped">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Striped rows</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Use{" "}
                      <code className="highlighter-rouge">.table-striped</code>{" "}
                      to add zebra-striping to any table row within the
                      <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                      This styling doesn't work in IE8 and below as
                      <code>:nth-child</code> CSS selector isn't supported.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Striped rows end */}
            {/* Striped rows with inverse dark table start */}
            <div className="row" id="table-striped-dark">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">
                      Striped rows with inverse dark
                    </h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Use <code>.table-dark</code> with{" "}
                      <code>.table-striped</code> to add zebra-striping to any
                      inverse table row within the <code>&lt;tbody&gt;</code>.
                      This styling doesn't work in IE8 and below as
                      <code>:nth-child</code> CSS selector isn't supported.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm text-white dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Striped rows with inverse dark table end */}
            {/* Bordered table start */}
            <div className="row" id="table-bordered">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Bordered table</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Add <code>.table-bordered</code> for borders on all sides
                      of the table and cells. For Inverse Dark Table, add
                      <code>.table-dark</code> along with{" "}
                      <code>.table-bordered</code>.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Bordered table end */}
            {/* Borderless table start */}
            <div className="row" id="table-borderless">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Borderless Table</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Add <code>.table-borderless</code> for a table without
                      borders. It can also be used on dark tables.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Borderless table end */}
            {/* Hoverable rows start */}
            <div className="row" id="table-hover-row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Hoverable rows</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Add{" "}
                      <code className="highlighter-rouge">.table-hover</code> to
                      enable a hover state on table rows within a
                      <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Hoverable rows end */}
            {/* Small Table start */}
            <div className="row" id="table-small">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Small Table</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Add <code className="highlighter-rouge">.table-sm</code>{" "}
                      class with <code>.table</code> to display small size
                      table.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              alt="Angular"
                              width={18}
                              height={18}
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              alt="React"
                              width={18}
                              height={18}
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              alt="Vuejs"
                              width={18}
                              height={18}
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              alt="Bootstrap"
                              width={18}
                              height={18}
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={22}
                                  width={22}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Small Table end */}
            {/* Contextual classes start */}
            <div className="row" id="table-contextual">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Contextual classes</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Use contextual classes to color table rows or individual
                      cells. Read full documnetation
                      <a
                        href="https://getbootstrap.com/docs/4.3/content/tables/IDcontextual-classes"
                        target="_blank"
                      >
                        here.
                      </a>
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-default">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/figma.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Figma"
                            />
                            <span className="fw-bold">Figma Project</span>
                          </td>
                          <td>Ronnie Shane</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-active">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Project</span>
                          </td>
                          <td>Ronald Frest</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-primary">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular Project</span>
                          </td>
                          <td>Peter Charls</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-secondary">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/vuejs.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Vuejs"
                            />
                            <span className="fw-bold">Vuejs Project</span>
                          </td>
                          <td>Jack Obes</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-secondary me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-success">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap Project</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-success me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-danger">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/figma.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Figma"
                            />
                            <span className="fw-bold">Figma Project</span>
                          </td>
                          <td>Janne Ale</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-danger me-1">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-warning">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/react.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="React"
                            />
                            <span className="fw-bold">React Custom</span>
                          </td>
                          <td>Ted Richer</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-warning me-1">
                              Scheduled
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-info">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Latest Bootstrap</span>
                          </td>
                          <td>Perry Parker</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-light">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/angular.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Angular"
                            />
                            <span className="fw-bold">Angular UI</span>
                          </td>
                          <td>Ana Bell</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-primary me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="table-dark">
                          <td>
                            <img
                              src="../../../app-assets/images/icons/bootstrap.svg"
                              className="me-75"
                              height={20}
                              width={20}
                              alt="Bootstrap"
                            />
                            <span className="fw-bold">Bootstrap UI</span>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <div className="avatar-group">
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Lilian Nenez"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar pull-up my-0"
                                title="Alberto Glotzbach"
                              >
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                  alt="Avatar"
                                  height={26}
                                  width={26}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge rounded-pill badge-light-info me-1">
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm dropdown-toggle hide-arrow py-0"
                                data-bs-toggle="dropdown"
                              >
                                <i data-feather="more-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  <i data-feather="edit-2" className="me-50" />
                                  <span>Edit</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i data-feather="trash" className="me-50" />
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Contextual classes end */}
            {/* Table without card start */}
            <div className="row" id="table-without-card">
              <div className="col-12 my-2">
                <h5 className="mb-1">Table without card</h5>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Client</th>
                        <th>Users</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="../../../app-assets/images/icons/angular.svg"
                            className="me-75"
                            height={20}
                            width={20}
                            alt="Angular"
                          />
                          <span className="fw-bold">Angular Project</span>
                        </td>
                        <td>Peter Charls</td>
                        <td>
                          <div className="avatar-group">
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Lilian Nenez"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge rounded-pill badge-light-primary me-1">
                            Active
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-sm dropdown-toggle hide-arrow py-0"
                              data-bs-toggle="dropdown"
                            >
                              <i data-feather="more-vertical" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../../../app-assets/images/icons/react.svg"
                            className="me-75"
                            height={20}
                            width={20}
                            alt="React"
                          />
                          <span className="fw-bold">React Project</span>
                        </td>
                        <td>Ronald Frest</td>
                        <td>
                          <div className="avatar-group">
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Lilian Nenez"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge rounded-pill badge-light-success me-1">
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-sm dropdown-toggle hide-arrow py-0"
                              data-bs-toggle="dropdown"
                            >
                              <i data-feather="more-vertical" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../../../app-assets/images/icons/vuejs.svg"
                            className="me-75"
                            height={20}
                            width={20}
                            alt="Vuejs"
                          />
                          <span className="fw-bold">Vuejs Project</span>
                        </td>
                        <td>Jack Obes</td>
                        <td>
                          <div className="avatar-group">
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Lilian Nenez"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge rounded-pill badge-light-info me-1">
                            Scheduled
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-sm dropdown-toggle hide-arrow py-0"
                              data-bs-toggle="dropdown"
                            >
                              <i data-feather="more-vertical" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="../../../app-assets/images/icons/bootstrap.svg"
                            className="me-75"
                            height={20}
                            width={20}
                            alt="Bootstrap"
                          />
                          <span className="fw-bold">Bootstrap Project</span>
                        </td>
                        <td>Jerry Milton</td>
                        <td>
                          <div className="avatar-group">
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Lilian Nenez"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up my-0"
                              title="Alberto Glotzbach"
                            >
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                alt="Avatar"
                                height={26}
                                width={26}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge rounded-pill badge-light-warning me-1">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-sm dropdown-toggle hide-arrow py-0"
                              data-bs-toggle="dropdown"
                            >
                              <i data-feather="more-vertical" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                <i data-feather="edit-2" className="me-50" />
                                <span>Edit</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-50" />
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Table without card End */}
            {/* Responsive tables start */}
            <div className="row" id="table-responsive">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Responsive tables</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Responsive tables allow tables to be scrolled horizontally
                      with ease. Make any table responsive across all viewports
                      by adding{" "}
                      <code className="highlighter-rouge">
                        .table-responsive
                      </code>{" "}
                      class on
                      <code className="highlighter-rouge">.table</code>. Or,
                      pick a maximum breakpoint with which to have a responsive
                      table up to by adding{" "}
                      <code className="highlighter-rouge">
                        {" "}
                        .table-responsive{"{"}-sm|-md|-lg|-xl{"}"}
                      </code>
                      . Read full documentation
                      <a
                        href="https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables"
                        target="_blank"
                      >
                        here.
                      </a>
                    </p>
                    <div className="alert alert-info">
                      <div className="alert-body">
                        <h4 className="text-warning">
                          Vertical clipping/truncation
                        </h4>
                        <p>
                          Responsive tables make use of{" "}
                          <code className="highlighter-rouge">
                            overflow-y: hidden
                          </code>
                          , which clips off any content that goes beyond the
                          bottom or top edges of the table. In particular, this
                          can clip off dropdown menus and other third-party
                          widgets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col" className="text-nowrap">
                            #
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 1
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 2
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 3
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 4
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 5
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 6
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 7
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 8
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 9
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 10
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 11
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 12
                          </th>
                          <th scope="col" className="text-nowrap">
                            Heading 13
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">1</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                          <td className="text-nowrap">Table cell</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Responsive tables end */}
          </div>
        </div>
      </div>
    </>
  );
}
