"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Page Vendor JS */}
<Script src="/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/buttons.bootstrap5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/modal-add-role.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/app-access-roles.js" strategy="afterInteractive" />

    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <h3>Roles List</h3>
      <p className="mb-2">
        A role provided access to predefined menus and features so that
        depending <br />
        on assigned role an administrator can have access to what he need
      </p>
      {/* Role cards */}
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span>Total 4 users</span>
                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Vinnie Mostowy"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/2.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Allen Rieske"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/12.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Julee Rossignol"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/6.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kaith D'souza"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/11.png"
                      alt="Avatar"
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div className="role-heading">
                  <h4 className="fw-bolder">Administrator</h4>
                  <a
                    href="javascript:;"
                    className="role-edit-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                  >
                    <small className="fw-bolder">Edit Role</small>
                  </a>
                </div>
                <a href="javascript:void(0);" className="text-body">
                  <i data-feather="copy" className="font-medium-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span>Total 7 users</span>
                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Jimmy Ressula"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/4.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="John Doe"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/1.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kristi Lawker"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/2.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kaith D'souza"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/5.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Danny Paul"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/7.png"
                      alt="Avatar"
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div className="role-heading">
                  <h4 className="fw-bolder">Manager</h4>
                  <a
                    href="javascript:;"
                    className="role-edit-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                  >
                    <small className="fw-bolder">Edit Role</small>
                  </a>
                </div>
                <a href="javascript:void(0);" className="text-body">
                  <i data-feather="copy" className="font-medium-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span>Total 5 users</span>
                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Andrew Tye"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/6.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Rishi Swaat"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/9.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Rossie Kim"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/12.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kim Merchent"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/10.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Sam D'souza"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/8.png"
                      alt="Avatar"
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div className="role-heading">
                  <h4 className="fw-bolder">Users</h4>
                  <a
                    href="javascript:;"
                    className="role-edit-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                  >
                    <small className="fw-bolder">Edit Role</small>
                  </a>
                </div>
                <a href="javascript:void(0);" className="text-body">
                  <i data-feather="copy" className="font-medium-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span>Total 3 users</span>
                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kim Karlos"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/3.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Katy Turner"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/9.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Peter Adward"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/12.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kaith D'souza"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/10.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="John Parker"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/11.png"
                      alt="Avatar"
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div className="role-heading">
                  <h4 className="fw-bolder">Support</h4>
                  <a
                    href="javascript:;"
                    className="role-edit-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                  >
                    <small className="fw-bolder">Edit Role</small>
                  </a>
                </div>
                <a href="javascript:void(0);" className="text-body">
                  <i data-feather="copy" className="font-medium-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span>Total 2 users</span>
                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kim Merchent"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/10.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Sam D'souza"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/6.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Nurvi Karlos"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/3.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Andrew Tye"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/8.png"
                      alt="Avatar"
                    />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Rossie Kim"
                    className="avatar avatar-sm pull-up"
                  >
                    <img
                      className="rounded-circle"
                      src="../../../app-assets/images/avatars/9.png"
                      alt="Avatar"
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                <div className="role-heading">
                  <h4 className="fw-bolder">Restricted User</h4>
                  <a
                    href="javascript:;"
                    className="role-edit-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                  >
                    <small className="fw-bolder">Edit Role</small>
                  </a>
                </div>
                <a href="javascript:void(0);" className="text-body">
                  <i data-feather="copy" className="font-medium-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card">
            <div className="row">
              <div className="col-sm-5">
                <div className="d-flex align-items-end justify-content-center h-100">
                  <img
                    src="../../../app-assets/images/illustration/faq-illustrations.svg"
                    className="img-fluid mt-2"
                    alt="Image"
                    width={85}
                  />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="card-body text-sm-end text-center ps-sm-0">
                  <a
                    href="javascript:void(0)"
                    data-bs-target="#addRoleModal"
                    data-bs-toggle="modal"
                    className="stretched-link text-nowrap add-new-role"
                  >
                    <span className="btn btn-primary mb-1">Add New Role</span>
                  </a>
                  <p className="mb-0">Add role, if it does not exist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Role cards */}
      <h3 className="mt-50">Total users with their roles</h3>
      <p className="mb-2">
        Find all of your company’s administrator accounts and their associate
        roles.
      </p>
      {/* table */}
      <div className="card">
        <div className="table-responsive">
          <table className="user-list-table table">
            <thead className="table-light">
              <tr>
                <th />
                <th />
                <th>Name</th>
                <th>Role</th>
                <th>Plan</th>
                <th>Billing</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {/* table */}
      {/* Add Role Modal */}
      <div
        className="modal fade"
        id="addRoleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body px-5 pb-5">
              <div className="text-center mb-4">
                <h1 className="role-title">Add New Role</h1>
                <p>Set role permissions</p>
              </div>
              {/* Add role form */}
              <form id="addRoleForm" className="row" onsubmit="return false">
                <div className="col-12">
                  <label className="form-label" htmlFor="modalRoleName">
                    Role Name
                  </label>
                  <input
                    type="text"
                    id="modalRoleName"
                    name="modalRoleName"
                    className="form-control"
                    placeholder="Enter role name"
                    tabIndex={-1}
                    data-msg="Please enter role name"
                  />
                </div>
                <div className="col-12">
                  <h4 className="mt-2 pt-50">Role Permissions</h4>
                  {/* Permission table */}
                  <div className="table-responsive">
                    <table className="table table-flush-spacing">
                      <tbody>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Administrator Access
                            <span
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Allows a full access to the system"
                            >
                              <i data-feather="info" />
                            </span>
                          </td>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="selectAll"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="selectAll"
                              >
                                {" "}
                                Select All{" "}
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            User Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="userManagementRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="userManagementRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="userManagementWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="userManagementWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="userManagementCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="userManagementCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Content Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="contentManagementRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="contentManagementRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="contentManagementWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="contentManagementWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="contentManagementCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="contentManagementCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Disputes Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dispManagementRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dispManagementRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dispManagementWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dispManagementWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dispManagementCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dispManagementCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Database Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dbManagementRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dbManagementRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dbManagementWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dbManagementWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="dbManagementCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="dbManagementCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Financial Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="finManagementRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="finManagementRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="finManagementWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="finManagementWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="finManagementCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="finManagementCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">Reporting</td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="reportingRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reportingRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="reportingWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reportingWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="reportingCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="reportingCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">API Control</td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="apiRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="apiRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="apiWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="apiWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="apiCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="apiCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">
                            Repository Management
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="repoRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="repoRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="repoWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="repoWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="repoCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="repoCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap fw-bolder">Payroll</td>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="payrollRead"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="payrollRead"
                                >
                                  {" "}
                                  Read{" "}
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="payrollWrite"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="payrollWrite"
                                >
                                  {" "}
                                  Write{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="payrollCreate"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="payrollCreate"
                                >
                                  {" "}
                                  Create{" "}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Permission table */}
                </div>
                <div className="col-12 text-center mt-2">
                  <button type="submit" className="btn btn-primary me-1">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Discard
                  </button>
                </div>
              </form>
              {/*/ Add role form */}
            </div>
          </div>
        </div>
      </div>
      {/*/ Add Role Modal */}
    </div>
  </div>
</div>

    </>
  )
}
