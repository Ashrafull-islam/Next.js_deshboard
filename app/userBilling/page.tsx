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
<Script src="/app-assets/vendors/js/extensions/sweetalert2.all.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/polyfill.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/modal-edit-user.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/modal-add-new-cc.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/modal-edit-cc.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/modal-add-new-address.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/app-user-view-billing.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/pages/app-user-view.js" strategy="afterInteractive" />
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="app-user-view-billing">
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
                <a className="nav-link" href="app-user-view-account.html">
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
                <a
                  className="nav-link active"
                  href="app-user-view-billing.html"
                >
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
            {/* current plan */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Current plan</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2 pb-50">
                      <h5>
                        Your Current Plan is <strong>Basic</strong>
                      </h5>
                      <span>A simple start for everyone</span>
                    </div>
                    <div className="mb-2 pb-50">
                      <h5>Active until Dec 09, 2021</h5>
                      <span>
                        We will send you a notification upon Subscription
                        expiration
                      </span>
                    </div>
                    <div className="mb-2 mb-md-1">
                      <h5>
                        $199 Per Month{" "}
                        <span className="badge badge-light-primary ms-50">
                          Popular
                        </span>
                      </h5>
                      <span>Standard plan for small to medium businesses</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="alert alert-warning mb-2" role="alert">
                      <h6 className="alert-heading">We need your attention!</h6>
                      <div className="alert-body fw-normal">
                        your plan requires update
                      </div>
                    </div>
                    <div className="plan-statistics pt-1">
                      <div className="d-flex justify-content-between">
                        <h5 className="fw-bolder">Days</h5>
                        <h5 className="fw-bolder">4 of 30 Days</h5>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-50">
                        4 days remaining until your plan requires update
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary me-1 mt-1"
                      data-bs-toggle="modal"
                      data-bs-target="#upgradePlanModal"
                    >
                      Upgrade Plan
                    </button>
                    <button className="btn btn-outline-danger cancel-subscription mt-1">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* / current plan */}
            {/* payment methods */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-50">Payment Methods</h4>
                <button
                  className="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewCard"
                >
                  <i data-feather="plus" />
                  <span>Add Card</span>
                </button>
              </div>
              <div className="card-body">
                <div className="added-cards">
                  <div className="cardMaster rounded border p-2 mb-1">
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <div className="card-information">
                        <img
                          className="mb-1 img-fluid"
                          src="../../../app-assets/images/icons/payments/mastercard.png"
                          alt="Master Card"
                        />
                        <div className="d-flex align-items-center mb-50">
                          <h6 className="mb-0">Tom McBride</h6>
                          <span className="badge badge-light-primary ms-50">
                            Primary
                          </span>
                        </div>
                        <span className="card-number">∗∗∗∗ ∗∗∗∗ 9856</span>
                      </div>
                      <div className="d-flex flex-column text-start text-lg-end">
                        <div className="d-flex order-sm-0 order-1 mt-1 mt-sm-0">
                          <button
                            className="btn btn-outline-primary me-75"
                            data-bs-toggle="modal"
                            data-bs-target="#editCard"
                          >
                            Edit
                          </button>
                          <button className="btn btn-outline-secondary">
                            Delete
                          </button>
                        </div>
                        <span className="mt-2">Card expires at 12/24</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardMaster border rounded p-2 mb-1">
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <div className="card-information">
                        <img
                          className="mb-1 img-fluid"
                          src="../../../app-assets/images/icons/payments/visa.png"
                          alt="Visa Card"
                        />
                        <h6>Mildred Wagner</h6>
                        <span className="card-number">∗∗∗∗ ∗∗∗∗ 5896</span>
                      </div>
                      <div className="d-flex flex-column text-start text-lg-end">
                        <div className="d-flex order-sm-0 order-1 mt-1 mt-sm-0">
                          <button
                            className="btn btn-outline-primary me-75"
                            data-bs-toggle="modal"
                            data-bs-target="#editCard"
                          >
                            Edit
                          </button>
                          <button className="btn btn-outline-secondary">
                            Delete
                          </button>
                        </div>
                        <span className="mt-2">Card expires at 02/24</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardMaster border rounded p-2">
                    <div className="d-flex justify-content-between flex-sm-row flex-column">
                      <div className="card-information">
                        <img
                          className="mb-1 img-fluid"
                          src="../../../app-assets/images/icons/payments/american-ex.png"
                          alt="Visa Card"
                        />
                        <h6>Mildred Wagner</h6>
                        <span className="card-number">∗∗∗∗ ∗∗∗∗ 5896</span>
                      </div>
                      <div className="d-flex flex-column text-start text-lg-end">
                        <div className="d-flex order-sm-0 order-1 mt-1 mt-sm-0">
                          <button
                            className="btn btn-outline-primary me-75"
                            data-bs-toggle="modal"
                            data-bs-target="#editCard"
                          >
                            Edit
                          </button>
                          <button className="btn btn-outline-secondary">
                            Delete
                          </button>
                        </div>
                        <span className="mt-2">Card expires at 02/24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / payment methods */}
            {/* Billing Address */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-50">Billing Address</h4>
                <button
                  className="btn btn-primary btn-sm edit-address"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewAddressModal"
                >
                  Edit address
                </button>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-7 col-12">
                    <dl className="row mb-0">
                      <dt className="col-sm-4 fw-bolder mb-1">Company Name:</dt>
                      <dd className="col-sm-8 mb-1">PIXINVENT</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">
                        Billing Email:
                      </dt>
                      <dd className="col-sm-8 mb-1">themeselection@ex.com</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">Tax ID:</dt>
                      <dd className="col-sm-8 mb-1">TAX-357378</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">VAT Number:</dt>
                      <dd className="col-sm-8 mb-1">SDF754K77</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">
                        Billing Address:
                      </dt>
                      <dd className="col-sm-8 mb-1">
                        100 Water Plant Avenue, Building 1303 Wake Island
                      </dd>
                    </dl>
                  </div>
                  <div className="col-xl-5 col-12">
                    <dl className="row mb-0">
                      <dt className="col-sm-4 fw-bolder mb-1">Contact:</dt>
                      <dd className="col-sm-8 mb-1">+1 (605) 977-32-65</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">Country:</dt>
                      <dd className="col-sm-8 mb-1">Wake Island</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">State:</dt>
                      <dd className="col-sm-8 mb-1">Capholim</dd>
                      <dt className="col-sm-4 fw-bolder mb-1">Zipcode:</dt>
                      <dd className="col-sm-8 mb-1">403114</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Billing Address */}
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
      {/* edit card modal  */}
      <div
        className="modal fade"
        id="editCard"
        tabIndex={-1}
        aria-labelledby="editCardTitle"
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
            <div className="modal-body px-sm-5 mx-50 pb-5">
              <h1 className="text-center mb-1" id="editCardTitle">
                Edit Card
              </h1>
              <p className="text-center">Edit your saved card details</p>
              {/* form */}
              <form
                id="editCardValidation"
                className="row gy-1 gx-2 mt-75"
                onsubmit="return false"
              >
                <div className="col-12">
                  <label className="form-label" htmlFor="modalEditCardNumber">
                    Card Number
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      id="modalEditCardNumber"
                      name="modalEditCard"
                      className="form-control credit-card-mask"
                      type="text"
                      placeholder="1356 3215 6548 7898"
                      defaultValue="5637 8172 1290 7898"
                      aria-describedby="modalEditCard2"
                      data-msg="Please enter your credit card number"
                    />
                    <span
                      className="input-group-text cursor-pointer p-25"
                      id="modalEditCard2"
                    >
                      <span className="edit-card-type" />
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="modalEditCardName">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    id="modalEditCardName"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label
                    className="form-label"
                    htmlFor="modalEditCardExpiryDate"
                  >
                    Exp. Date
                  </label>
                  <input
                    type="text"
                    id="modalEditCardExpiryDate"
                    className="form-control expiry-date-mask"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label" htmlFor="modalEditCardCvv">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="modalEditCardCvv"
                    className="form-control cvv-code-mask"
                    maxLength={3}
                    placeholder={654}
                  />
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-switch form-check-primary me-25">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="editSaveCard"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="editSaveCard"
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
                      htmlFor="editSaveCard"
                    >
                      Save Card for future billing?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary me-1 mt-1">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary mt-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*/ edit card modal  */}
      {/* add new card modal  */}
      <div
        className="modal fade"
        id="addNewCard"
        tabIndex={-1}
        aria-labelledby="addNewCardTitle"
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
            <div className="modal-body px-sm-5 mx-50 pb-5">
              <h1 className="text-center mb-1" id="addNewCardTitle">
                Add New Card
              </h1>
              <p className="text-center">Add card for future billing</p>
              {/* form */}
              <form
                id="addNewCardValidation"
                className="row gy-1 gx-2 mt-75"
                onsubmit="return false"
              >
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddCardNumber">
                    Card Number
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      id="modalAddCardNumber"
                      name="modalAddCard"
                      className="form-control add-credit-card-mask"
                      type="text"
                      placeholder="1356 3215 6548 7898"
                      aria-describedby="modalAddCard2"
                      data-msg="Please enter your credit card number"
                    />
                    <span
                      className="input-group-text cursor-pointer p-25"
                      id="modalAddCard2"
                    >
                      <span className="add-card-type" />
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="modalAddCardName">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    id="modalAddCardName"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label
                    className="form-label"
                    htmlFor="modalAddCardExpiryDate"
                  >
                    Exp. Date
                  </label>
                  <input
                    type="text"
                    id="modalAddCardExpiryDate"
                    className="form-control add-expiry-date-mask"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label" htmlFor="modalAddCardCvv">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="modalAddCardCvv"
                    className="form-control add-cvv-code-mask"
                    maxLength={3}
                    placeholder={654}
                  />
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-switch form-check-primary me-25">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="saveCard"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="saveCard">
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
                      htmlFor="saveCard"
                    >
                      Save Card for future billing?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary me-1 mt-1">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-outline-secondary mt-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*/ add new card modal  */}
      {/* add new address modal */}
      <div
        className="modal fade"
        id="addNewAddressModal"
        tabIndex={-1}
        aria-labelledby="addNewAddressTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-4 mx-50">
              <h1
                className="address-title text-center mb-1"
                id="addNewAddressTitle"
              >
                Add New Address
              </h1>
              <p className="address-subtitle text-center mb-2 pb-75">
                Add address for billing address
              </p>
              <form
                id="addNewAddressForm"
                className="row gy-1 gx-2"
                onsubmit="return false"
              >
                <div className="col-12">
                  <div className="row custom-options-checkable">
                    <div className="col-md-6 mb-md-0 mb-2">
                      <input
                        className="custom-option-item-check"
                        id="homeAddressRadio"
                        type="radio"
                        name="newAddress"
                        defaultValue="HomeAddress"
                        defaultChecked=""
                      />
                      <label
                        htmlFor="homeAddressRadio"
                        className="custom-option-item px-2 py-1"
                      >
                        <span className="d-flex align-items-center mb-50">
                          <i
                            data-feather="home"
                            className="font-medium-4 me-50"
                          />
                          <span className="custom-option-item-title h4 fw-bolder mb-0">
                            Home
                          </span>
                        </span>
                        <span className="d-block">
                          Delivery time (7am – 9pm)
                        </span>
                      </label>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-2">
                      <input
                        className="custom-option-item-check"
                        id="officeAddressRadio"
                        type="radio"
                        name="newAddress"
                        defaultValue="OfficeAddress"
                      />
                      <label
                        htmlFor="officeAddressRadio"
                        className="custom-option-item px-2 py-1"
                      >
                        <span className="d-flex align-items-center mb-50">
                          <i
                            data-feather="briefcase"
                            className="font-medium-4 me-50"
                          />
                          <span className="custom-option-item-title h4 fw-bolder mb-0">
                            Office
                          </span>
                        </span>
                        <span className="d-block">
                          Delivery time (10am – 6pm)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressFirstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="modalAddressFirstName"
                    name="modalAddressFirstName"
                    className="form-control"
                    placeholder="John"
                    data-msg="Please enter your first name"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressLastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="modalAddressLastName"
                    name="modalAddressLastName"
                    className="form-control"
                    placeholder="Doe"
                    data-msg="Please enter your last name"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddressCountry">
                    Country
                  </label>
                  <select
                    id="modalAddressCountry"
                    name="modalAddressCountry"
                    className="select2 form-select"
                  >
                    <option value="">Select a Country</option>
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
                  <label className="form-label" htmlFor="modalAddressAddress1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="modalAddressAddress1"
                    name="modalAddressAddress1"
                    className="form-control"
                    placeholder="12, Business Park"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddressAddress2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="modalAddressAddress2"
                    name="modalAddressAddress2"
                    className="form-control"
                    placeholder="Mall Road"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddressTown">
                    Town
                  </label>
                  <input
                    type="text"
                    id="modalAddressTown"
                    name="modalAddressTown"
                    className="form-control"
                    placeholder="Los Angeles"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressState">
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="modalAddressState"
                    name="modalAddressState"
                    className="form-control"
                    placeholder="California"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressZipCode">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="modalAddressZipCode"
                    name="modalAddressZipCode"
                    className="form-control"
                    placeholder={99950}
                  />
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-switch form-check-primary me-25">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="useAsBillingAddress"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="useAsBillingAddress"
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
                      htmlFor="useAsBillingAddress"
                    >
                      Use as a billing address?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary me-1 mt-2">
                    Submit
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
      {/* / add new address modal */}
    </div>
  </div>
</div>
    </>
  )
}
