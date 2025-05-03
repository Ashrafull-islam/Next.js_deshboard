export default function page() {
  return (
    <>
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="app-user-view-security">
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
                      href="javascript:void(0)"
                      className="btn btn-primary me-1"
                      data-bs-target="#editUser"
                      data-bs-toggle="modal"
                    >
                      Edit
                    </a>
                    <a
                      href="javascript:void(0)"
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
                <a
                  className="nav-link active"
                  href="app-user-view-security.html"
                >
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
            {/* Change Password */}
            <div className="card">
              <h4 className="card-header">Change Password</h4>
              <div className="card-body">
                <form
                  id="formChangePassword"
                  method="POST"
                  
                >
                  <div className="alert alert-warning mb-2" role="alert">
                    <h6 className="alert-heading">
                      Ensure that these requirements are met
                    </h6>
                    <div className="alert-body fw-normal">
                      Minimum 8 characters long, uppercase &amp; symbol
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-2 col-md-6 form-password-toggle">
                      <label className="form-label" htmlFor="newPassword">
                        New Password
                      </label>
                      <div className="input-group input-group-merge form-password-toggle">
                        <input
                          className="form-control"
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder="············"
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                    </div>
                    <div className="mb-2 col-md-6 form-password-toggle">
                      <label className="form-label" htmlFor="confirmPassword">
                        Confirm New Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="············"
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary me-2">
                        Change Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*/ Change Password */}
            {/* Two-steps verification */}
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-50">Two-steps verification</h4>
                <span>Keep your account secure with authentication step.</span>
                <h6 className="fw-bolder mt-2">SMS</h6>
                <div className="d-flex justify-content-between border-bottom mb-1 pb-1">
                  <span>+1(968) 945-8832</span>
                  <div className="action-icons">
                    <a
                      href="javascript:void(0)"
                      className="text-body me-50"
                      data-bs-target="#twoFactorAuthModal"
                      data-bs-toggle="modal"
                    >
                      <i data-feather="edit" className="font-medium-3" />
                    </a>
                    <a href="javascript:void(0)" className="text-body">
                      <i data-feather="trash" className="font-medium-3" />
                    </a>
                  </div>
                </div>
                <p className="mb-0">
                  Two-factor authentication adds an additional layer of security
                  to your account by requiring more than just a password to log
                  in.
                  <a href="javascript:void(0);" className="text-body">
                    Learn more.
                  </a>
                </p>
              </div>
            </div>
            {/*/ Two-steps verification */}
            {/* recent device */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Recent devices</h4>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap text-center">
                  <thead>
                    <tr>
                      <th className="text-start">BROWSER</th>
                      <th>DEVICE</th>
                      <th>LOCATION</th>
                      <th>RECENT ACTIVITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">
                        <div className="avatar me-25">
                          <img
                            src="../../../app-assets/images/icons/google-chrome.png"
                            alt="avatar"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="fw-bolder">Chrome on Windows</span>
                      </td>
                      <td>Dell XPS 15</td>
                      <td>United States</td>
                      <td>10, Jan 2021 20:07</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        <div className="avatar me-25">
                          <img
                            src="../../../app-assets/images/icons/google-chrome.png"
                            alt="avatar"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="fw-bolder">Chrome on Android</span>
                      </td>
                      <td>Google Pixel 3a</td>
                      <td>Ghana</td>
                      <td>11, Jan 2021 10:16</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        <div className="avatar me-25">
                          <img
                            src="../../../app-assets/images/icons/google-chrome.png"
                            alt="avatar"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="fw-bolder">Chrome on MacOS</span>
                      </td>
                      <td>Apple iMac</td>
                      <td>Mayotte</td>
                      <td>11, Jan 2021 12:10</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        <div className="avatar me-25">
                          <img
                            src="../../../app-assets/images/icons/google-chrome.png"
                            alt="avatar"
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="fw-bolder">Chrome on iPhone</span>
                      </td>
                      <td>Apple iPhone XR</td>
                      <td>Mauritania</td>
                      <td>12, Jan 2021 8:29</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* / recent device */}
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
                    <option >Status</option>
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
                        defaultChecked={true}
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
                    <option >Choose Plan</option>
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
      {/* two factor auth modal */}
      <div
        className="modal fade"
        id="twoFactorAuthModal"
        tabIndex={-1}
        aria-labelledby="twoFactorAuthTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg two-factor-auth">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-5 mx-50">
              <h1 className="text-center mb-1" id="twoFactorAuthTitle">
                Select Authentication Method
              </h1>
              <p className="text-center mb-3">
                you also need to select a method by which the proxy
                <br />
                authenticates to the directory serve
              </p>
              <div className="custom-options-checkable">
                <input
                  className="custom-option-item-check"
                  type="radio"
                  name="twoFactorAuthRadio"
                  id="twoFactorAuthApps"
                  defaultValue="apps-auth"
                  defaultChecked={true}
                />
                <label
                  htmlFor="twoFactorAuthApps"
                  className="custom-option-item d-flex align-items-center flex-column flex-sm-row px-3 py-2 mb-2"
                >
                  <span>
                    <i
                      data-feather="settings"
                      className="font-large-2 me-sm-2 mb-2 mb-sm-0"
                    />
                  </span>
                  <span>
                    <span className="custom-option-item-title h3">
                      Authenticator Apps
                    </span>
                    <span className="d-block mt-75">
                      Get codes from an app like Google Authenticator, Microsoft
                      Authenticator, Authy or 1Password.
                    </span>
                  </span>
                </label>
                <input
                  className="custom-option-item-check"
                  type="radio"
                  name="twoFactorAuthRadio"
                  defaultValue="sms-auth"
                  id="twoFactorAuthSms"
                />
                <label
                  htmlFor="twoFactorAuthSms"
                  className="custom-option-item d-flex align-items-center flex-column flex-sm-row px-3 py-2"
                >
                  <span>
                    <i
                      data-feather="message-square"
                      className="font-large-2 me-sm-2 mb-2 mb-sm-0"
                    />
                  </span>
                  <span>
                    <span className="custom-option-item-title h3">SMS</span>
                    <span className="d-block mt-75">
                      We will send a code via SMS if you need to use your backup
                      login method.
                    </span>
                  </span>
                </label>
              </div>
              <button
                id="nextStepAuth"
                className="btn btn-primary float-end mt-3"
              >
                <span className="me-50">Continue</span>
                <i data-feather="chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* / two factor auth modal */}
      {/* add authentication apps modal */}
      <div
        className="modal fade"
        id="twoFactorAuthAppsModal"
        tabIndex={-1}
        aria-labelledby="twoFactorAuthAppsTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg two-factor-auth-apps">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-5 mx-50">
              <h1
                className="text-center mb-2 pb-50"
                id="twoFactorAuthAppsTitle"
              >
                Add Authenticator App
              </h1>
              <h4>Authenticator Apps</h4>
              <p>
                Using an authenticator app like Google Authenticator, Microsoft
                Authenticator, Authy, or 1Password, scan the QR code. It will
                generate a 6 digit code for you to enter below.
              </p>
              <div className="d-flex justify-content-center my-2 py-50">
                <img
                  className="img-fluid"
                  src="../../../app-assets/images/icons/qrcode.png"
                  width={122}
                  alt="QR Code"
                />
              </div>
              <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">ASDLKNASDA9AHS678dGhASD78AB</h4>
                <div className="alert-body fw-normal">
                  If you having trouble using the QR code, select manual entry
                  on your app
                </div>
              </div>
              <form className="row gy-1" >
                <div className="col-12">
                  <input
                    className="form-control"
                    id="authenticationCode"
                    type="text"
                    placeholder="Enter authentication code"
                  />
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-outline-secondary mt-2 me-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary mt-2">
                    <span className="me-50">Continue</span>
                    <i data-feather="chevron-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* / add authentication apps modal*/}
      {/* add authentication sms modal*/}
      <div
        className="modal fade"
        id="twoFactorAuthSmsModal"
        tabIndex={-1}
        aria-labelledby="twoFactorAuthSmsTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg two-factor-auth-sms">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-5 mx-50">
              <h1 className="text-center mb-2 pb-50" id="twoFactorAuthSmsTitle">
                `
              </h1>
              <h4>Verify Your Mobile Number for SMS</h4>
              <p>
                Enter your mobile phone number with country code and we will
                send you a verification code.
              </p>
              <form className="row gy-1 mt-1" >
                <div className="col-12">
                  <input
                    className="form-control phone-number-mask"
                    type="text"
                    placeholder="Mobile number with country code"
                  />
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-outline-secondary mt-1 me-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary mt-1">
                    <span className="me-50">Continue</span>
                    <i data-feather="chevron-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* / add authentication sms modal*/}
    </div>
  </div>
</div>

    </>
  )
}
