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
<Script src="/app-assets/js/scripts/pages/app-user-view.js" strategy="afterInteractive" />
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="app-user-view-connections">
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
                <a
                  className="nav-link active"
                  href="app-user-view-connections.html"
                >
                  <i data-feather="link" className="font-medium-3 me-50" />
                  <span className="fw-bold">Connections</span>
                </a>
              </li>
            </ul>
            {/*/ User Pills */}
            {/* connection */}
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-75">Connected accounts</h4>
                <p>Display content from your connected accounts on your site</p>
                {/* Connections */}
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/google.png"
                      alt="google"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex align-item-center justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Google</p>
                      <span>Calendar and contacts</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkboxGoogle"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkboxGoogle"
                        >
                          <span className="switch-icon-left">
                            <i data-feather="check" />
                          </span>
                          <span className="switch-icon-right">
                            <i data-feather="x" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/slack.png"
                      alt="slack"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex align-item-center justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Slack</p>
                      <span>Communication</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkboxSlack"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkboxSlack"
                        >
                          <span className="switch-icon-left">
                            <i data-feather="check" />
                          </span>
                          <span className="switch-icon-right">
                            <i data-feather="x" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/github.png"
                      alt="github"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex align-item-center justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Github</p>
                      <span>Manage your Git repositories</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkboxGithub"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkboxGithub"
                        >
                          <span className="switch-icon-left">
                            <i data-feather="check" />
                          </span>
                          <span className="switch-icon-right">
                            <i data-feather="x" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/mailchimp.png"
                      alt="mailchimp"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex align-item-center justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Mailchimp</p>
                      <span>Email marketing service</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkboxMailchimp"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkboxMailchimp"
                        >
                          <span className="switch-icon-left">
                            <i data-feather="check" />
                          </span>
                          <span className="switch-icon-right">
                            <i data-feather="x" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/asana.png"
                      alt="asana"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex align-item-center justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Asana</p>
                      <span>Communication</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkboxAsana"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkboxAsana"
                        >
                          <span className="switch-icon-left">
                            <i data-feather="check" />
                          </span>
                          <span className="switch-icon-right">
                            <i data-feather="x" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Connections */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-75">Social accounts</h4>
                <p>Display content from social accounts on your site</p>
                {/* Social Accounts */}
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/facebook.png"
                      alt="facebook"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Facebook</p>
                      <span>Not Connected</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-secondary"
                      >
                        <i data-feather="link" className="font-medium-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/twitter.png"
                      alt="twitter"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Twitter</p>
                      <a href="https://twitter.com/pixinvent" target="_blank">
                        @pixinvent
                      </a>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-secondary"
                      >
                        <i data-feather="x" className="font-medium-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/linkedin.png"
                      alt="instagram"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Linkedin</p>
                      <a
                        href="https://www.linkedin.com/company/pixinvent"
                        target="_blank"
                      >
                        {" "}
                        @pixinvent{" "}
                      </a>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-secondary"
                      >
                        <i data-feather="x" className="font-medium-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/dribbble.png"
                      alt="dribbble"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Dribbble</p>
                      <span>Not Connected</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-secondary"
                      >
                        <i data-feather="link" className="font-medium-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-shrink-0">
                    <img
                      src="../../../app-assets/images/icons/social/behance.png"
                      alt="behance"
                      className="me-1"
                      height={38}
                      width={38}
                    />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-1">
                      <p className="fw-bolder mb-0">Behance</p>
                      <span>Not Connected</span>
                    </div>
                    <div className="mt-50 mt-sm-0">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-secondary"
                      >
                        <i data-feather="link" className="font-medium-3" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Social Accounts */}
              </div>
            </div>
            {/*/ connection */}
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
