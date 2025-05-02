"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
     {/* BEGIN: Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* BEGIN: Page Vendor JS */}
<Script src="/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/jszip.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/pdfmake.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/vfs_fonts.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/buttons.html5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/buttons.print.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js" strategy="afterInteractive" />

{/* BEGIN: Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* BEGIN: Page JS */}
<Script src="/app-assets/js/scripts/tables/table-datatables-basic.js" strategy="afterInteractive" />
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">
              DataTables
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Datatable</a>
                </li>
                <li className="breadcrumb-item active">Basic</li>
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
            Read full documnetation{" "}
            <a href="https://datatables.net/" target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
      {/* Basic table */}
      <section id="basic-datatable">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <table className="datatables-basic table">
                <thead>
                  <tr>
                    <th />
                    <th />
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Salary</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        {/* Modal to add new record */}
        <div className="modal modal-slide-in fade" id="modals-slide-in">
          <div className="modal-dialog sidebar-sm">
            <form className="add-new-record modal-content pt-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ×
              </button>
              <div className="modal-header mb-1">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Record
                </h5>
              </div>
              <div className="modal-body flex-grow-1">
                <div className="mb-1">
                  <label
                    className="form-label"
                    htmlFor="basic-icon-default-fullname"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control dt-full-name"
                    id="basic-icon-default-fullname"
                    placeholder="John Doe"
                    aria-label="John Doe"
                  />
                </div>
                <div className="mb-1">
                  <label
                    className="form-label"
                    htmlFor="basic-icon-default-post"
                  >
                    Post
                  </label>
                  <input
                    type="text"
                    id="basic-icon-default-post"
                    className="form-control dt-post"
                    placeholder="Web Developer"
                    aria-label="Web Developer"
                  />
                </div>
                <div className="mb-1">
                  <label
                    className="form-label"
                    htmlFor="basic-icon-default-email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="basic-icon-default-email"
                    className="form-control dt-email"
                    placeholder="john.doe@example.com"
                    aria-label="john.doe@example.com"
                  />
                  <small className="form-text">
                    {" "}
                    You can use letters, numbers &amp; periods{" "}
                  </small>
                </div>
                <div className="mb-1">
                  <label
                    className="form-label"
                    htmlFor="basic-icon-default-date"
                  >
                    Joining Date
                  </label>
                  <input
                    type="text"
                    className="form-control dt-date"
                    id="basic-icon-default-date"
                    placeholder="MM/DD/YYYY"
                    aria-label="MM/DD/YYYY"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="form-label"
                    htmlFor="basic-icon-default-salary"
                  >
                    Salary
                  </label>
                  <input
                    type="text"
                    id="basic-icon-default-salary"
                    className="form-control dt-salary"
                    placeholder="$12000"
                    aria-label="$12000"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary data-submit me-1"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*/ Basic table */}
      {/* Complex Headers */}
      <section id="complex-header-datatable">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header border-bottom">
                <h4 className="card-title">Complex Headers</h4>
              </div>
              <div className="card-datatable">
                <table className="dt-complex-header table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Name</th>
                      <th colSpan={2}>Contact</th>
                      <th colSpan={3}>HR Information</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>E-mail</th>
                      <th>City</th>
                      <th>Position</th>
                      <th>Salary</th>
                      <th className="cell-fit">Status</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Complex Headers */}
      {/* Row grouping */}
      <section id="row-grouping-datatable">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header border-bottom">
                <h4 className="card-title">Row Grouping</h4>
              </div>
              <div className="card-datatable">
                <table className="dt-row-grouping table">
                  <thead>
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Position</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Salary</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Position</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Salary</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Row grouping */}
      {/* Multilingual */}
      <section id="multilingual-datatable">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header border-bottom">
                <h4 className="card-title">Multilingual</h4>
              </div>
              <div className="card-datatable">
                <table className="dt-multilingual table">
                  <thead>
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Position</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Salary</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Multilingual */}
    </div>
  </div>
</div>

    </>
  )
}
