"use client";
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
      <Script src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js" strategy="afterInteractive" />

      {/* Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* Page JS */}
      <Script src="/app-assets/js/scripts/pages/modal-add-permission.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/scripts/pages/modal-edit-permission.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/scripts/pages/app-access-permission.js" strategy="afterInteractive" />

      {/* Content */}
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row"></div>
          <div className="content-body">
            <h3>Permissions List</h3>
            <p>
              Each category (Basic, Professional, and Business) includes the
              four predefined roles shown below.
            </p>
            {/* Permission Table */}
            <div className="card">
              <div className="card-datatable table-responsive">
                <table className="datatables-permissions table">
                  <thead className="table-light">
                    <tr>
                      <th />
                      <th />
                      <th>Name</th>
                      <th>Assigned To</th>
                      <th>Created Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            {/*/ Permission Table */}
            {/* Add Permission Modal */}
            <div
              className="modal fade"
              id="addPermissionModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header bg-transparent">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body px-sm-5 pb-5">
                    <div className="text-center mb-2">
                      <h1 className="mb-1">Add New Permission</h1>
                      <p>Permissions you may use and assign to your users.</p>
                    </div>
                    <form
                      id="addPermissionForm"
                      className="row"
                      onsubmit="return false"
                    >
                      <div className="col-12">
                        <label
                          className="form-label"
                          htmlFor="modalPermissionName"
                        >
                          Permission Name
                        </label>
                        <input
                          type="text"
                          id="modalPermissionName"
                          name="modalPermissionName"
                          className="form-control"
                          placeholder="Permission Name"
                          autofocus=""
                          data-msg="Please enter permission name"
                        />
                      </div>
                      <div className="col-12 mt-75">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="corePermission"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="corePermission"
                          >
                            {" "}
                            Set as core permission{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 me-1"
                        >
                          Create Permission
                        </button>
                        <button
                          type="reset"
                          className="btn btn-outline-secondary mt-2"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Discard
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Add Permission Modal */}
            {/* Edit Permission Modal */}
            <div
              className="modal fade"
              id="editPermissionModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header bg-transparent">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body p-3 pt-0">
                    <div className="text-center mb-2">
                      <h1 className="mb-1">Edit Permission</h1>
                      <p>Edit permission as per your requirements.</p>
                    </div>
                    <div className="alert alert-warning" role="alert">
                      <h6 className="alert-heading">Warning!</h6>
                      <div className="alert-body">
                        By editing the permission name, you might break the
                        system permissions functionality. Please ensure you're
                        absolutely certain before proceeding.
                      </div>
                    </div>
                    <form
                      id="editPermissionForm"
                      className="row"
                      onsubmit="return false"
                    >
                      <div className="col-sm-9">
                        <label
                          className="form-label"
                          htmlFor="editPermissionName"
                        >
                          Permission Name
                        </label>
                        <input
                          type="text"
                          id="editPermissionName"
                          name="editPermissionName"
                          className="form-control"
                          placeholder="Enter a permission name"
                          tabIndex={-1}
                          data-msg="Please enter permission name"
                        />
                      </div>
                      <div className="col-sm-3 ps-sm-0">
                        <button type="submit" className="btn btn-primary mt-2">
                          Update
                        </button>
                      </div>
                      <div className="col-12 mt-75">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="editCorePermission"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="editCorePermission"
                          >
                            {" "}
                            Set as core permission{" "}
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Edit Permission Modal */}
          </div>
        </div>
      </div>
    </>
  );
}
