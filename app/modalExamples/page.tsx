
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
              Modal Examples
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Modal Examples</li>
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
      <section id="modal-examples">
        <div className="row">
          {/* share project card */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="file-text" className="font-large-2 mb-1" />
                <h5 className="card-title">Share Project</h5>
                <p className="card-text">
                  Elegant Share Project options modal popup example, easy to use
                  in any page.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#shareProject"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / share project card */}
          {/* add new card  */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="credit-card" className="font-large-2 mb-1" />
                <h5 className="card-title">Add New Card</h5>
                <p className="card-text">
                  Quickly collect the credit card details, built in input mask
                  and form validation support.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewCard"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / add new card  */}
          {/* pricing card */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="bar-chart-2" className="font-large-2 mb-1" />
                <h5 className="card-title">Pricing</h5>
                <p className="card-text">
                  Elegant pricing options modal popup example, easy to use in
                  any page.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#pricingModal"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / pricing card */}
          {/* refer and earn card */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="gift" className="font-large-2 mb-1" />
                <h5 className="card-title">Refer &amp; Earn</h5>
                <p className="card-text">
                  Use Refer &amp; Earn modal to encourage your exiting customers
                  refer their friends &amp; colleague.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#referEarnModal"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / refer and earn card */}
          {/* add new address card*/}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="home" className="font-large-2 mb-1" />
                <h5 className="card-title">Add New Address</h5>
                <p className="card-text">
                  Ready to use form to collect user address data with validation
                  and custom input support.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addNewAddressModal"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / add new address card*/}
          {/* create app card*/}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="package" className="font-large-2 mb-1" />
                <h5 className="card-title">Create App</h5>
                <p className="card-text">
                  Provide application data with this form modal popup example,
                  easy to use in any page.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#createAppModal"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / create app card*/}
          {/* two factor auth */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="key" className="font-large-2 mb-1" />
                <h5 className="card-title">Two Factor Auth</h5>
                <p className="card-text">
                  Use this modal to enhance your application security by
                  enabling two factor authentication.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#twoFactorAuthModal"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / two factor auth  */}
          {/* edit user  */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <i data-feather="user" className="font-large-2 mb-1" />
                <h5 className="card-title">Edit User Info</h5>
                <p className="card-text">
                  Use this modal to modify the existing user's current
                  information.
                </p>
                {/* modal trigger button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editUser"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* / edit user  */}
        </div>
      </section>
      {/* share project modal */}
      <div
        className="modal fade"
        id="shareProject"
        tabIndex={-1}
        aria-labelledby="shareProjectTitle"
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
            <div className="modal-body px-sm-5 mx-50 pb-4">
              <h1 className="text-center mb-1" id="shareProjectTitle">
                Share Project
              </h1>
              <p className="text-center">Share project with a team members</p>
              <label
                className="form-label fw-bolder font-size font-small-4 mb-50"
                htmlFor="addMemberSelect"
              >
                {" "}
                Add members{" "}
              </label>
              <select className="select2 form-select" id="addMemberSelect">
                <option
                  value=""
                  label="Add project members by name or email..."
                />
                <option data-avatar="1-small.png" value="Jane Foster">
                  Jane Foster
                </option>
                <option data-avatar="3-small.png" value="Donna Frank">
                  Donna Frank
                </option>
                <option data-avatar="5-small.png" value="Gabrielle Robertson">
                  Gabrielle Robertson
                </option>
                <option data-avatar="7-small.png" value="Lori Spears">
                  Lori Spears
                </option>
                <option data-avatar="9-small.png" value="Sandy Vega">
                  Sandy Vega
                </option>
                <option data-avatar="11-small.png" value="Cheryl May">
                  Cheryl May
                </option>
              </select>
              <p className="fw-bolder pt-50 mt-2">12 Members</p>
              {/* member's list  */}
              <ul className="list-group list-group-flush mb-2">
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Lester Palmer</h5>
                      <span>pe@vogeiz.net</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can edit
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member1"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Mittie Blair</h5>
                      <span>peromak@zukedohik.gov</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">Owner</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member2"
                      >
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Marvin Wheeler</h5>
                      <span>rumet@jujpejah.net</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can comment
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member3"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Nannie Ford</h5>
                      <span>negza@nuv.io</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member4"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can view
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member4"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Julian Murphy</h5>
                      <span>lunebame@umdomgu.net</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member5"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can edit
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member5"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-10.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Sophie Gilbert</h5>
                      <span>ha@sugit.gov</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member6"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can view
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member6"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Chris Watkins</h5>
                      <span>zokap@mak.org</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member7"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can comment
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member7"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 px-0">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                      alt="avatar"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="me-1">
                      <h5 className="mb-25">Adelaide Nichols</h5>
                      <span>ujinomu@jigo.com</span>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-flat-secondary dropdown-toggle"
                        type="button"
                        id="member8"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline-block">
                          Can edit
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="member8"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Owner
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0)"
                          >
                            Can edit
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can comment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Can view
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              {/*/ member's list  */}
              {/* project link */}
              <div className="d-flex align-content-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center me-2">
                  <i data-feather="users" className="font-medium-2 me-50" />
                  <p className="fw-bolder mb-0">Public to Vuexy - Pixinvent</p>
                </div>
                <a href="javascript:void(0)" className="fw-bolder">
                  <i data-feather="link" className="font-medium-2 me-50" />
                  <span>Copy project link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / share project modal */}
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
                className="row gy-1 gx-2 mt-75"              >
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
                    placeholder='654'
                  />
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-switch form-check-primary me-25">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="saveCard"
                        defaultChecked={true}
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
      {/* pricing modal  */}
      <div
        className="modal fade"
        id="pricingModal"
        tabIndex={-1}
        aria-labelledby="pricingModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
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
              <div id="pricing-plan">
                {/* title text and switch button */}
                <div className="text-center">
                  <h1 id="pricingModalTitle">Subscription Plan</h1>
                  <p className="mb-3">
                    All plans include 40+ advanced tools and features to boost
                    your product. Choose the best plan to fit your needs.
                  </p>
                  <div className="d-flex align-items-center justify-content-center mb-2 pb-50">
                    <h6 className="me-1 mb-0">Monthly</h6>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="priceSwitch"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceSwitch"
                      />
                    </div>
                    <h6 className="ms-50 mb-0">Annually</h6>
                  </div>
                </div>
                {/*/ title text and switch button */}
                {/* pricing plan cards */}
                <div className="row pricing-card">
                  {/* basic plan */}
                  <div className="col-12 col-lg-4">
                    <div className="card basic-pricing border text-center shadow-none">
                      <div className="card-body">
                        <img
                          src="../../../app-assets/images/illustration/Pot1.svg"
                          className="mb-2 mt-5"
                          alt="svg img"
                        />
                        <h3>Basic</h3>
                        <p className="card-text">A simple start for everyone</p>
                        <div className="annual-plan my-2">
                          <div className="d-flex justify-content-center plan-price">
                            <sup className="d-block font-medium-1 fw-bold text-primary mt-2">
                              $
                            </sup>
                            <span className="pricing-basic-value fw-bolder text-primary font-large-3 lh-1">
                              0
                            </span>
                            <sub className="pricing-duration text-body font-medium-1 fw-bold mt-3">
                              /month
                            </sub>
                          </div>
                        </div>
                        <ul className="list-group list-group-circle text-start fw-bold">
                          <li className="list-group-item">
                            100 responses a month
                          </li>
                          <li className="list-group-item">
                            Unlimited forms and surveys
                          </li>
                          <li className="list-group-item">Unlimited fields</li>
                          <li className="list-group-item">
                            Basic form creation tools
                          </li>
                          <li className="list-group-item">
                            Up to 2 subdomains
                          </li>
                        </ul>
                        <button className="btn w-100 btn-outline-success mt-2">
                          Your current plan
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ basic plan */}
                  {/* standard plan */}
                  <div className="col-12 col-lg-4">
                    <div className="card standard-pricing border-primary text-center shadow-none">
                      <div className="card-body">
                        <div className="pricing-badge text-end">
                          <span className="badge rounded-pill badge-light-primary">
                            Popular
                          </span>
                        </div>
                        <img
                          src="../../../app-assets/images/illustration/Pot2.svg"
                          className="mb-1"
                          alt="svg img"
                        />
                        <h3>Standard</h3>
                        <p className="card-text">
                          For small to medium businesses
                        </p>
                        <div className="annual-plan my-2">
                          <div className="d-flex justify-content-center plan-price">
                            <sup className="d-block font-medium-1 fw-bold text-primary mt-2">
                              $
                            </sup>
                            <span className="pricing-standard-value fw-bolder text-primary font-large-3 lh-1">
                              49
                            </span>
                            <sub className="pricing-duration text-body font-medium-1 fw-bold mt-3">
                              /month
                            </sub>
                          </div>
                          <small className="annual-pricing d-none text-muted" />
                        </div>
                        <ul className="list-group list-group-circle text-start fw-bold">
                          <li className="list-group-item">
                            Unlimited responses
                          </li>
                          <li className="list-group-item">
                            Unlimited forms and surveys
                          </li>
                          <li className="list-group-item">
                            Instagram profile page
                          </li>
                          <li className="list-group-item">
                            Google Docs integration
                          </li>
                          <li className="list-group-item">
                            Custom “Thank you” page
                          </li>
                        </ul>
                        <button className="btn w-100 btn-primary mt-2">
                          Upgrade
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ standard plan */}
                  {/* enterprise plan */}
                  <div className="col-12 col-lg-4">
                    <div className="card enterprise-pricing border text-center shadow-none">
                      <div className="card-body">
                        <img
                          src="../../../app-assets/images/illustration/Pot3.svg"
                          className="mb-2"
                          alt="svg img"
                        />
                        <h3>Enterprise</h3>
                        <p className="card-text">
                          Solution for big organizations
                        </p>
                        <div className="annual-plan my-2">
                          <div className="d-flex justify-content-center plan-price">
                            <sup className="d-block font-medium-1 fw-bold text-primary mt-2">
                              $
                            </sup>
                            <span className="pricing-enterprise-value fw-bolder text-primary font-large-3 lh-1">
                              99
                            </span>
                            <sub className="pricing-duration text-body font-medium-1 fw-bold mt-3">
                              /month
                            </sub>
                          </div>
                          <small className="annual-pricing d-none text-muted" />
                        </div>
                        <ul className="list-group list-group-circle text-start fw-bold">
                          <li className="list-group-item">PayPal payments</li>
                          <li className="list-group-item">Logic Jumps</li>
                          <li className="list-group-item">
                            File upload with 5GB storage
                          </li>
                          <li className="list-group-item">
                            Custom domain support
                          </li>
                          <li className="list-group-item">
                            Stripe integration
                          </li>
                        </ul>
                        <button className="btn w-100 btn-outline-primary mt-2">
                          Upgrade
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ enterprise plan */}
                </div>
                {/*/ pricing plan cards */}
                {/* pricing free trial */}
                <div className="text-center">
                  <p>Still not convinced? Start with a 14-day FREE trial!</p>
                  <button className="btn btn-primary">Start your trial</button>
                </div>
                {/*/ pricing free trial */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / pricing modal  */}
      {/* refer and earn modal */}
      <div
        className="modal fade"
        id="referEarnModal"
        tabIndex={-1}
        aria-labelledby="referEarnTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-refer-earn">
          <div className="modal-content">
            <div className="modal-header bg-transparent">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5 px-sm-0">
              <div className="px-sm-4 mx-50">
                <h1 className="text-center mb-1" id="referEarnTitle">
                  Refer &amp; Earn
                </h1>
                <p className="text-center mb-5">
                  Invite your friend to vuexy, if thay sign up, you and
                  <br />
                  your friend will get 30 days free trial
                </p>
                <div className="row mb-4">
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center mb-1">
                      <div
                        className="
              modal-refer-earn-step
              d-flex
              width-100
              height-100
              rounded-circle
              justify-content-center
              align-items-center
              bg-light-primary
            "
                      >
                        <i data-feather="message-square" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h6 className="fw-bolder mb-1">Send Invitation 🤟🏻</h6>
                      <p>Send your referral link to your friend</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center mb-1">
                      <div
                        className="
              modal-refer-earn-step
              d-flex
              width-100
              height-100
              rounded-circle
              justify-content-center
              align-items-center
              bg-light-primary
            "
                      >
                        <i data-feather="clipboard" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h6 className="fw-bolder mb-1">Registration 👩🏻‍💻</h6>
                      <p>Let them register to our services</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center mb-1">
                      <div
                        className="
              modal-refer-earn-step
              d-flex
              width-100
              height-100
              rounded-circle
              justify-content-center
              align-items-center
              bg-light-primary
            "
                      >
                        <i data-feather="award" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h6 className="fw-bolder mb-1">Free Trial 🎉</h6>
                      <p>Your friend will get 30 days free trial</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="px-sm-5 mx-50">
                <h4 className="fw-bolder mt-5 mb-1">Invite your friends</h4>
                <form className="row g-1" >
                  <div className="col-lg-10">
                    <label className="form-label" htmlFor="modalRnFEmail">
                      Enter your friend’s email address and invite them to join
                      Vuexy 😍
                    </label>
                    <input
                      type="text"
                      id="modalRnFEmail"
                      className="form-control"
                      placeholder="example@domain.com"
                      aria-label="example@domain.com"
                    />
                  </div>
                  <div className="col-lg-2 d-flex align-items-end">
                    <button type="button" className="btn btn-primary w-100">
                      Send
                    </button>
                  </div>
                </form>
                <h4 className="fw-bolder mt-4 mb-1">Share the referral link</h4>
                <form className="row g-1" >
                  <div className="col-lg-9">
                    <label className="form-label" htmlFor="modalRnFLink">
                      You can also copy and send it or share it on your social
                      media. 🥳
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        id="modalRnFLink"
                        className="form-control"
                        defaultValue="https://1.envato.market/vuexy_admin"
                      />
                      <a
                        href="javascript:void(0)"
                        className="input-group-text"
                        id="basic-addon33"
                      >
                        Copy link
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-end">
                    <div className="social-btns">
                      <button
                        type="button"
                        className="btn btn-icon btn-facebook me-50"
                      >
                        <i data-feather="facebook" className="font-medium-2" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-icon btn-twitter me-50"
                      >
                        <i data-feather="twitter" className="font-medium-2" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-icon btn-linkedin"
                      >
                        <i data-feather="linkedin" className="font-medium-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / refer and earn modal */}
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
                className="row gy-1 gx-2"              >
                <div className="col-12">
                  <div className="row custom-options-checkable">
                    <div className="col-md-6 mb-md-0 mb-2">
                      <input
                        className="custom-option-item-check"
                        id="homeAddressRadio"
                        type="radio"
                        name="newAddress"
                        defaultValue="HomeAddress"
                        defaultChecked={true}
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
                    placeholder='99950'
                  />
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-switch form-check-primary me-25">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="useAsBillingAddress"
                        defaultChecked={true}
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
      {/* create app modal */}
      <div
        className="modal fade"
        id="createAppModal"
        tabIndex={-1}
        aria-labelledby="createAppTitle"
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
            <div className="modal-body pb-3 px-sm-3">
              <h1 className="text-center mb-1" id="createAppTitle">
                Create App
              </h1>
              <p className="text-center mb-2">
                Provide application data with this form
              </p>
              <div className="bs-stepper vertical wizard-modern create-app-wizard">
                <div className="bs-stepper-header" role="tablist">
                  <div
                    className="step"
                    data-target="#create-app-details"
                    role="tab"
                    id="create-app-details-trigger"
                  >
                    <button type="button" className="step-trigger py-75">
                      <span className="bs-stepper-box">
                        <i data-feather="book" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Details</span>
                        <span className="bs-stepper-subtitle">
                          Enter username
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#create-app-frameworks"
                    role="tab"
                    id="create-app-frameworks-trigger"
                  >
                    <button type="button" className="step-trigger py-75">
                      <span className="bs-stepper-box">
                        <i data-feather="package" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Frameworks</span>
                        <span className="bs-stepper-subtitle">
                          Enter Information
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#create-app-database"
                    role="tab"
                    id="create-app-database-trigger"
                  >
                    <button type="button" className="step-trigger py-75">
                      <span className="bs-stepper-box">
                        <i data-feather="command" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Database</span>
                        <span className="bs-stepper-subtitle">
                          Payment details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#create-app-billing"
                    role="tab"
                    id="create-app-billing-trigger"
                  >
                    <button type="button" className="step-trigger py-75">
                      <span className="bs-stepper-box">
                        <i
                          data-feather="credit-card"
                          className="font-medium-3"
                        />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Billing</span>
                        <span className="bs-stepper-subtitle">
                          Payment details
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    className="step"
                    data-target="#create-app-submit"
                    role="tab"
                    id="create-app-submit-trigger"
                  >
                    <button type="button" className="step-trigger py-75">
                      <span className="bs-stepper-box">
                        <i data-feather="check" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Submit</span>
                        <span className="bs-stepper-subtitle">
                          Submit your app
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                {/* content */}
                <div className="bs-stepper-content shadow-none">
                  <div
                    id="create-app-details"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="create-app-details-trigger"
                  >
                    <h5>Application Name</h5>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Vuexy Admin"
                    />
                    <h5 className="mt-2 pt-1">Category</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppCrm"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-info me-1">
                            <i
                              data-feather="briefcase"
                              className="font-medium-5"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                CRM Application
                              </span>
                              <span>Scales with Any Business</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppCrm"
                                type="radio"
                                name="categoryRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppEcommerce"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-success me-1">
                            <i
                              data-feather="shopping-cart"
                              className="font-medium-5"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                Ecommerce Platforms
                              </span>
                              <span>Grow Your Business With App</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppEcommerce"
                                type="radio"
                                name="categoryRadio"
                                defaultChecked={true}
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppOnlineLearning"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-danger me-1">
                            <i data-feather="award" className="font-medium-5" />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                Online Learning platform
                              </span>
                              <span>Start learning today</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppOnlineLearning"
                                type="radio"
                                name="categoryRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="create-app-frameworks"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="create-app-frameworks-trigger"
                  >
                    <h5>Select Framework</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppReactNative"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-info me-1">
                            <img
                              src="../../../app-assets/images/icons/technology/react.png"
                              height={25}
                              alt="react"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                React Native
                              </span>
                              <span>Create truly native apps</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppReactNative"
                                type="radio"
                                name="frameworkRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppAngular"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-danger me-1">
                            <img
                              src="../../../app-assets/images/icons/technology/angular.png"
                              height={25}
                              alt="angular"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                Angular
                              </span>
                              <span>Most suited to your application</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppAngular"
                                type="radio"
                                name="frameworkRadio"
                                defaultChecked={true}
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppVue"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-success me-1">
                            <img
                              src="../../../app-assets/images/icons/technology/vue.png"
                              height={25}
                              alt="vue"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">Vue</span>
                              <span>Progressive framework.</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppVue"
                                type="radio"
                                name="frameworkRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppLaravel"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-warning me-1">
                            <img
                              src="../../../app-assets/images/icons/technology/laravel.png"
                              height={25}
                              alt="laravel"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                Laravel
                              </span>
                              <span>PHP web framework</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppLaravel"
                                type="radio"
                                name="frameworkRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between mt-2">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="create-app-database"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="create-app-database-trigger"
                  >
                    <h5>Database Name</h5>
                    <input
                      className="form-control"
                      type="text"
                      name="database"
                      placeholder="app_database"
                    />
                    <h5 className="mt-2 pt-1">Select Database Engine</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppFirebase"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-danger me-1">
                            <img
                              src="../../../app-assets/images/icons/google.png"
                              height={25}
                              alt="google"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                Firebase
                              </span>
                              <span>Cloud Firestore</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppFirebase"
                                type="radio"
                                name="databaseRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppDynamoDB"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-secondary me-1">
                            <img
                              src="../../../app-assets/images/icons/amazon.png"
                              height={25}
                              alt="amazon"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                DynamoDB
                              </span>
                              <span>Amazon Fast NoSQL Database</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppDynamoDB"
                                type="radio"
                                name="databaseRadio"
                                defaultChecked={true}
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <label
                          htmlFor="createAppMysql"
                          className="d-flex cursor-pointer"
                        >
                          <span className="avatar avatar-tag bg-light-info me-1">
                            <img
                              src="../../../app-assets/images/icons/database.png"
                              height={25}
                              alt="database"
                            />
                          </span>
                          <span className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="me-1">
                              <span className="h5 d-block fw-bolder">
                                MySQL
                              </span>
                              <span>Basic MySQL database</span>
                            </span>
                            <span>
                              <input
                                className="form-check-input"
                                id="createAppMysql"
                                type="radio"
                                name="databaseRadio"
                              />
                            </span>
                          </span>
                        </label>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between mt-2">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="create-app-billing"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="create-app-billing-trigger"
                  >
                    <h5 className="mb-1">Category</h5>
                    {/* form */}
                    <form
                      id="createAppBillingForm"
                      className="row gy-1 gx-2"
                        >
                      <div className="col-12">
                        <label
                          className="form-label"
                          htmlFor="cardNumberBilling"
                        >
                          Card Number
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            id="cardNumberBilling"
                            name="cardNumberBillingModal"
                            className="form-control create-app-card-mask"
                            type="text"
                            defaultValue={5637817212901451}
                            placeholder="1356 3215 6548 7898"
                            aria-describedby="cardNumberBillingModal1"
                          />
                          <span
                            className="input-group-text cursor-pointer p-25"
                            id="cardNumberBillingModal1"
                          >
                            <span className="credit-app-card-type" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label
                          className="form-label"
                          htmlFor="nameOnCardBilling"
                        >
                          Name On Card
                        </label>
                        <input
                          type="text"
                          id="nameOnCardBilling"
                          className="form-control"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="col-6 col-md-3">
                        <label className="form-label" htmlFor="expDateBilling">
                          Exp. Date
                        </label>
                        <input
                          type="text"
                          id="expDateBilling"
                          className="form-control create-app-expiry-date-mask"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col-6 col-md-3">
                        <label className="form-label" htmlFor="cvvBilling">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvvBilling"
                          className="form-control create-app-cvv-code-mask"
                          maxLength={3}
                          placeholder='654'
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-switch form-check-primary me-25">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="saveCardBilling"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="saveCardBilling"
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
                            htmlFor="saveCardBilling"
                          >
                            Save Card for future billing?
                          </label>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between mt-5 pt-1">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="arrow-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="create-app-submit"
                    className="content text-center"
                    role="tabpanel"
                    aria-labelledby="create-app-submit-trigger"
                  >
                    <h3>Submit 🥳</h3>
                    <p>Submit your app to kickstart your project.</p>
                    <img
                      src="../../../app-assets/images/illustration/pricing-Illustration.svg"
                      height={218}
                      alt="illustration"
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="arrow-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        <span className="align-middle d-sm-inline-block d-none">
                          Submit
                        </span>
                        <i
                          data-feather="check"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / create app modal */}
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
                className="row gy-1 pt-75"              >
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
                    multiple={true}
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
    </div>
  </div>
</div>

    </>
  )
}
