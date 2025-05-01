"use client"
import Script from "next/script";
export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Page Vendor JS */}
<Script src="/app-assets/vendors/js/forms/select/select2.full.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/forms/cleave/cleave.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/forms/cleave/addons/cleave-phone.us.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/moment.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/jszip.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/pdfmake.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/vfs_fonts.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/buttons.html5.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/buttons.print.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/sweetalert2.all.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/polyfill.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/modal-edit-user.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/app-user-view-account.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/app-user-view.js" strategy="afterInteractive" />

        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="app-user-view-account">
        <div className="row">
          {/* User Sidebar */}
          <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            {/* User Card */}
            <div className="card">
              <div className="card-body">
                <div className="user-avatar-section">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      className="img-fluid rounded mt-3 mb-2"
                      src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                      height={110}
                      width={110}
                      alt="User avatar"
                    />
                    <div className="user-info text-center">
                      <h4>Gertrude Barton</h4>
                      <span className="badge bg-light-secondary">Author</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around my-2 pt-75">
                  <div className="d-flex align-items-start me-2">
                    <span className="badge bg-light-primary p-75 rounded">
                      <i data-feather="check" className="font-medium-2" />
                    </span>
                    <div className="ms-75">
                      <h4 className="mb-0">1.23k</h4>
                      <small>Tasks Done</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <span className="badge bg-light-primary p-75 rounded">
                      <i data-feather="briefcase" className="font-medium-2" />
                    </span>
                    <div className="ms-75">
                      <h4 className="mb-0">568</h4>
                      <small>Projects Done</small>
                    </div>
                  </div>
                </div>
                <h4 className="fw-bolder border-bottom pb-50 mb-1">Details</h4>
                <div className="info-container">
                  <ul className="list-unstyled">
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Username:</span>
                      <span>violet.dev</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Billing Email:</span>
                      <span>vafgot@vultukir.org</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Status:</span>
                      <span className="badge bg-light-success">Active</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Role:</span>
                      <span>Author</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Tax ID:</span>
                      <span>Tax-8965</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Contact:</span>
                      <span>+1 (609) 933-44-22</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Language:</span>
                      <span>English</span>
                    </li>
                    <li className="mb-75">
                      <span className="fw-bolder me-25">Country:</span>
                      <span>Wake Island</span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center pt-2">
                    <a
                      href="javascript:;"
                      className="btn btn-primary me-1"
                      data-bs-target="#editUser"
                      data-bs-toggle="modal"
                    >
                      Edit
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-outline-danger suspend-user"
                    >
                      Suspended
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /User Card */}
            {/* Plan Card */}
            <div className="card border-primary">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="badge bg-light-primary">Standard</span>
                  <div className="d-flex justify-content-center">
                    <sup className="h5 pricing-currency text-primary mt-1 mb-0">
                      $
                    </sup>
                    <span className="fw-bolder display-5 mb-0 text-primary">
                      99
                    </span>
                    <sub className="pricing-duration font-small-4 ms-25 mt-auto mb-2">
                      /month
                    </sub>
                  </div>
                </div>
                <ul className="ps-1 mb-2">
                  <li className="mb-50">10 Users</li>
                  <li className="mb-50">Up to 10 GB storage</li>
                  <li>Basic Support</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center fw-bolder mb-50">
                  <span>Days</span>
                  <span>4 of 30 Days</span>
                </div>
                <div className="progress mb-50" style={{ height: 8 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={65}
                    aria-valuemax={100}
                    aria-valuemin={80}
                  />
                </div>
                <span>4 days remaining</span>
                <div className="d-grid w-100 mt-2">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#upgradePlanModal"
                    data-bs-toggle="modal"
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
            {/* /Plan Card */}
          </div>
          {/*/ User Sidebar */}
          {/* User Content */}
          <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
            {/* User Pills */}
            <ul className="nav nav-pills mb-2">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="app-user-view-account.html"
                >
                  <i data-feather="user" className="font-medium-3 me-50" />
                  <span className="fw-bold">Account</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-security.html">
                  <i data-feather="lock" className="font-medium-3 me-50" />
                  <span className="fw-bold">Security</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-billing.html">
                  <i data-feather="bookmark" className="font-medium-3 me-50" />
                  <span className="fw-bold">Billing &amp; Plans</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-notifications.html">
                  <i data-feather="bell" className="font-medium-3 me-50" />
                  <span className="fw-bold">Notifications</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app-user-view-connections.html">
                  <i data-feather="link" className="font-medium-3 me-50" />
                  <span className="fw-bold">Connections</span>
                </a>
              </li>
            </ul>
            {/*/ User Pills */}
            {/* Project table */}
            <div className="card">
              <h4 className="card-header">User's Projects List</h4>
              <div className="table-responsive">
                <table className="table datatable-project">
                  <thead>
                    <tr>
                      <th />
                      <th>Project</th>
                      <th className="text-nowrap">Total Task</th>
                      <th>Progress</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            {/* /Project table */}
            {/* Activity Timeline */}
            <div className="card">
              <h4 className="card-header">User Activity Timeline</h4>
              <div className="card-body pt-1">
                <ul className="timeline ms-50">
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>User login</h6>
                        <span className="timeline-event-time me-1">
                          12 min ago
                        </span>
                      </div>
                      <p>User login at 2:12pm</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-warning timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>Meeting with john</h6>
                        <span className="timeline-event-time me-1">
                          45 min ago
                        </span>
                      </div>
                      <p>React Project meeting with john @10:15am</p>
                      <div className="d-flex flex-row align-items-center mb-50">
                        <div className="avatar me-50">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                            alt="Avatar"
                            width={38}
                            height={38}
                          />
                        </div>
                        <div className="user-info">
                          <h6 className="mb-0">Leona Watkins (Client)</h6>
                          <p className="mb-0">CEO of pixinvent</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-info timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>Create a new react project for client</h6>
                        <span className="timeline-event-time me-1">
                          2 day ago
                        </span>
                      </div>
                      <p>Add files to new design folder</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-point timeline-point-danger timeline-point-indicator" />
                    <div className="timeline-event">
                      <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                        <h6>Create Invoices for client</h6>
                        <span className="timeline-event-time me-1">
                          12 min ago
                        </span>
                      </div>
                      <p className="mb-0">
                        Create new Invoices and send to Leona Watkins
                      </p>
                      <div className="d-flex flex-row align-items-center mt-50">
                        <img
                          className="me-1"
                          src="../../../app-assets/images/icons/pdf.png"
                          alt="data.json"
                          height={25}
                        />
                        <h6 className="mb-0">Invoices.pdf</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Activity Timeline */}
            {/* Invoice table */}
            <div className="card">
              <table className="invoice-table table text-nowrap">
                <thead>
                  <tr>
                    <th />
                    <th>#ID</th>
                    <th>
                      <i data-feather="trending-up" />
                    </th>
                    <th>TOTAL Paid</th>
                    <th className="text-truncate">Issued Date</th>
                    <th className="cell-fit">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* /Invoice table */}
          </div>
          {/*/ User Content */}
        </div>
      </section>
      {/* Edit User Modal */}
      <div
        className="modal fade"
        id="editUser"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-5 pt-50">
              <div className="text-center mb-2">
                <h1 className="mb-1">Edit User Information</h1>
                <p>Updating user details will receive a privacy audit.</p>
              </div>
              <form
                id="editUserForm"
                className="row gy-1 pt-75"
                onsubmit="return false"
              >
                <div className="col-12 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="modalEditUserFirstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="modalEditUserFirstName"
                    name="modalEditUserFirstName"
                    className="form-control"
                    placeholder="John"
                    defaultValue="Gertrude"
                    data-msg="Please enter your first name"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="modalEditUserLastName"
                    name="modalEditUserLastName"
                    className="form-control"
                    placeholder="Doe"
                    defaultValue="Barton"
                    data-msg="Please enter your last name"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalEditUserName">
                    Username
                  </label>
                  <input
                    type="text"
                    id="modalEditUserName"
                    name="modalEditUserName"
                    className="form-control"
                    defaultValue="gertrude.dev"
                    placeholder="john.doe.007"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserEmail">
                    Billing Email:
                  </label>
                  <input
                    type="text"
                    id="modalEditUserEmail"
                    name="modalEditUserEmail"
                    className="form-control"
                    defaultValue="gertrude@gmail.com"
                    placeholder="example@domain.com"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserStatus">
                    Status
                  </label>
                  <select
                    id="modalEditUserStatus"
                    name="modalEditUserStatus"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Status</option>
                    <option value={1}>Active</option>
                    <option value={2}>Inactive</option>
                    <option value={3}>Suspended</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditTaxID">
                    Tax ID
                  </label>
                  <input
                    type="text"
                    id="modalEditTaxID"
                    name="modalEditTaxID"
                    className="form-control modal-edit-tax-id"
                    placeholder="Tax-8894"
                    defaultValue="Tax-8894"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserPhone">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="modalEditUserPhone"
                    name="modalEditUserPhone"
                    className="form-control phone-number-mask"
                    placeholder="+1 (609) 933-44-22"
                    defaultValue="+1 (609) 933-44-22"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">
                    Language
                  </label>
                  <select
                    id="modalEditUserLanguage"
                    name="modalEditUserLanguage"
                    className="select2 form-select"
                    multiple=""
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="dutch">Dutch</option>
                    <option value="hebrew">Hebrew</option>
                    <option value="sanskrit">Sanskrit</option>
                    <option value="hindi">Hindi</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserCountry">
                    Country
                  </label>
                  <select
                    id="modalEditUserCountry"
                    name="modalEditUserCountry"
                    className="select2 form-select"
                  >
                    <option value="">Select Value</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center mt-1">
                    <div className="form-check form-switch form-check-primary">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch10"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch10"
                      >
                        <span className="switch-icon-left">
                          <i data-feather="check" />
                        </span>
                        <span className="switch-icon-right">
                          <i data-feather="x" />
                        </span>
                      </label>
                    </div>
                    <label
                      className="form-check-label fw-bolder"
                      htmlFor="customSwitch10"
                    >
                      Use as a billing address?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center mt-2 pt-50">
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
            </div>
          </div>
        </div>
      </div>
      {/*/ Edit User Modal */}
      {/* upgrade your plan Modal */}
      <div
        className="modal fade"
        id="upgradePlanModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-upgrade-plan">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body px-5 pb-2">
              <div className="text-center mb-2">
                <h1 className="mb-1">Upgrade Plan</h1>
                <p>Choose the best plan for user.</p>
              </div>
              <form
                id="upgradePlanForm"
                className="row pt-50"
                onsubmit="return false"
              >
                <div className="col-sm-8">
                  <label className="form-label" htmlFor="choosePlan">
                    Choose Plan
                  </label>
                  <select
                    id="choosePlan"
                    name="choosePlan"
                    className="form-select"
                    aria-label="Choose Plan"
                  >
                    <option selected="">Choose Plan</option>
                    <option value="standard">Standard - $99/month</option>
                    <option value="exclusive">Exclusive - $249/month</option>
                    <option value="Enterprise">Enterprise - $499/month</option>
                  </select>
                </div>
                <div className="col-sm-4 text-sm-end">
                  <button type="submit" className="btn btn-primary mt-2">
                    Upgrade
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="modal-body px-5 pb-3">
              <h6>User current plan is standard plan</h6>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex justify-content-center me-1 mb-1">
                  <sup className="h5 pricing-currency pt-1 text-primary">$</sup>
                  <h1 className="fw-bolder display-4 mb-0 text-primary me-25">
                    99
                  </h1>
                  <sub className="pricing-duration font-small-4 mt-auto mb-2">
                    /month
                  </sub>
                </div>
                <button className="btn btn-outline-danger cancel-subscription mb-1">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ upgrade your plan Modal */}
    </div>
  </div>
</div>

    </>
  )
}
