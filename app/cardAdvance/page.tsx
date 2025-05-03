
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
              Advance Card
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Card</a>
                </li>
                <li className="breadcrumb-item active">Advance Card</li>
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
      {/* Card Advance */}
      <div className="row match-height">
        {/* Congratulations Card */}
        <div className="col-12 col-md-6 col-lg-7">
          <div className="card card-congratulations">
            <div className="card-body text-center">
              <img
                src="../../../app-assets/images/elements/decore-left.png"
                className="congratulations-img-left"
                alt="card-img-left"
              />
              <img
                src="../../../app-assets/images/elements/decore-right.png"
                className="congratulations-img-right"
                alt="card-img-right"
              />
              <div className="avatar avatar-xl bg-primary shadow">
                <div className="avatar-content">
                  <i data-feather="award" className="font-large-1" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="mb-1 text-white">Congratulations John,</h1>
                <p className="card-text m-auto w-75">
                  You have done <strong>57.6%</strong> more sales today. Check
                  your new badge in your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*/ Congratulations Card */}
        {/* Medal Card */}
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card card-congratulation-medal">
            <div className="card-body">
              <h5>Congratulations 🎉 John!</h5>
              <p className="card-text font-small-3">You have won gold medal</p>
              <h3 className="mb-75 mt-4">
                <a href="#">$48.9k</a>
              </h3>
              <button type="button" className="btn btn-primary">
                View Sales
              </button>
              <img
                src="../../../app-assets/images/illustration/badge.svg"
                className="congratulation-medal"
                alt="Medal Pic"
              />
            </div>
          </div>
        </div>
        {/*/ Medal Card */}
      </div>
      <div className="row match-height">
        {/* Employee Task Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-employee-task">
            <div className="card-header">
              <h4 className="card-title">Employee Task</h4>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            <div className="card-body">
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Ryan Harrington</h6>
                    <small>iOS Developer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">9hr 20m</small>
                  <div className="employee-task-chart-primary-1" />
                </div>
              </div>
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Louisa Norton</h6>
                    <small>UI Designer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">4hr 17m</small>
                  <div className="employee-task-chart-danger" />
                </div>
              </div>
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Jayden Duncan</h6>
                    <small>Java Developer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">12hr 8m</small>
                  <div className="employee-task-chart-success" />
                </div>
              </div>
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Cynthia Howell</h6>
                    <small>Anguler Developer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">3hr 19m</small>
                  <div className="employee-task-chart-secondary" />
                </div>
              </div>
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-16.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Helena Payne</h6>
                    <small>Marketing</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">9hr 50m</small>
                  <div className="employee-task-chart-warning" />
                </div>
              </div>
              <div className="employee-task d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row">
                  <div className="avatar me-75">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-13.jpg"
                      className="rounded"
                      width={42}
                      height={42}
                      alt="Avatar"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0">Troy Jensen</h6>
                    <small>iOS Developer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <small className="text-muted me-75">4hr 48m</small>
                  <div className="employee-task-chart-primary-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Employee Task Card */}
        {/* Developer Meetup Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-developer-meetup">
            <div className="meetup-img-wrapper rounded-top text-center">
              <img
                src="../../../app-assets/images/illustration/email.svg"
                alt="Meeting Pic"
                height={170}
              />
            </div>
            <div className="card-body">
              <div className="meetup-header d-flex align-items-center">
                <div className="meetup-day">
                  <h6 className="mb-0">THU</h6>
                  <h3 className="mb-0">24</h3>
                </div>
                <div className="my-auto">
                  <h4 className="card-title mb-25">Developer Meetup</h4>
                  <p className="card-text mb-0">
                    Meet world popular developers
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row meetings">
                <div className="avatar bg-light-primary rounded me-1">
                  <div className="avatar-content">
                    <i
                      data-feather="calendar"
                      className="avatar-icon font-medium-3"
                    />
                  </div>
                </div>
                <div className="content-body">
                  <h6 className="mb-0">Sat, May 25, 2020</h6>
                  <small>10:AM to 6:PM</small>
                </div>
              </div>
              <div className="d-flex flex-row meetings">
                <div className="avatar bg-light-primary rounded me-1">
                  <div className="avatar-content">
                    <i
                      data-feather="map-pin"
                      className="avatar-icon font-medium-3"
                    />
                  </div>
                </div>
                <div className="content-body">
                  <h6 className="mb-0">Central Park</h6>
                  <small>Manhattan, New york City</small>
                </div>
              </div>
              <div className="avatar-group">
                <div
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="bottom"
                  title="Billy Hopkins"
                  className="avatar pull-up"
                >
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                    alt="Avatar"
                    width={33}
                    height={33}
                  />
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="bottom"
                  title="Amy Carson"
                  className="avatar pull-up"
                >
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                    alt="Avatar"
                    width={33}
                    height={33}
                  />
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="bottom"
                  title="Brandon Miles"
                  className="avatar pull-up"
                >
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                    alt="Avatar"
                    width={33}
                    height={33}
                  />
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="bottom"
                  title="Daisy Weber"
                  className="avatar pull-up"
                >
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                    alt="Avatar"
                    width={33}
                    height={33}
                  />
                </div>
                <div
                  data-bs-toggle="tooltip"
                  data-popup="tooltip-custom"
                  data-bs-placement="bottom"
                  title="Jenny Looper"
                  className="avatar pull-up"
                >
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                    alt="Avatar"
                    width={33}
                    height={33}
                  />
                </div>
                <h6 className="align-self-center cursor-pointer ms-50 mb-0">
                  +42
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/*/ Developer Meetup Card */}
        {/* Profile Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-profile">
            <img
              src="../../../app-assets/images/banner/banner-12.jpg"
              className="img-fluid card-img-top"
              alt="Profile Cover Photo"
            />
            <div className="card-body">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <div className="avatar">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                      alt="Profile Picture"
                    />
                  </div>
                </div>
              </div>
              <h3>Curtis Stone</h3>
              <h6 className="text-muted">Malaysia</h6>
              <span className="badge badge-light-primary profile-badge">
                Pro Level
              </span>
              <hr className="mb-2" />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted fw-bolder">Followers</h6>
                  <h3 className="mb-0">10.3k</h3>
                </div>
                <div>
                  <h6 className="text-muted fw-bolder">Projects</h6>
                  <h3 className="mb-0">156</h3>
                </div>
                <div>
                  <h6 className="text-muted fw-bolder">Rank</h6>
                  <h3 className="mb-0">23</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Profile Card */}
        {/* Apply Job Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-apply-job">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex flex-row">
                  <div className="avatar me-1">
                    <img
                      src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                      alt="Avatar"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="user-info">
                    <h5 className="mb-0">Mittie Evans</h5>
                    <small className="text-muted">Updated 12m ago</small>
                  </div>
                </div>
                <span className="badge rounded-pill badge-light-primary">
                  Design
                </span>
              </div>
              <h5 className="apply-job-title">
                Need a designer to form branding essentials for my business.
              </h5>
              <p className="card-text mb-2">
                Design high-quality designs, graphics, mock-ups and layouts for
                both new and existing web sites/ web applications / mobile
                applications.
              </p>
              <div className="apply-job-package bg-light-primary rounded">
                <div>
                  <sup className="text-body">
                    <small>$</small>
                  </sup>
                  <h2 className="d-inline me-25">9,800</h2>
                  <sub className="text-body">
                    <small>/ month</small>
                  </sub>
                </div>
                <span className="badge rounded-pill badge-light-primary">
                  Full Time
                </span>
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary">
                  Apply For This Job
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/ Apply Job Card */}
        {/* Transaction card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-transaction">
            <div className="card-header">
              <h4 className="card-title">Transactions</h4>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            <div className="card-body">
              <div className="transaction-item">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-primary rounded">
                    <div className="avatar-content">
                      <i
                        data-feather="pocket"
                        className="avatar-icon font-medium-3"
                      />
                    </div>
                  </div>
                  <div className="transaction-info">
                    <h6 className="transaction-title">Wallet</h6>
                    <small>Starbucks</small>
                  </div>
                </div>
                <div className="fw-bolder text-danger">- $74</div>
              </div>
              <div className="transaction-item">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-success rounded">
                    <div className="avatar-content">
                      <i
                        data-feather="check"
                        className="avatar-icon font-medium-3"
                      />
                    </div>
                  </div>
                  <div className="transaction-info">
                    <h6 className="transaction-title">Bank Transfer</h6>
                    <small>Add Money</small>
                  </div>
                </div>
                <div className="fw-bolder text-success">+ $480</div>
              </div>
              <div className="transaction-item">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-danger rounded">
                    <div className="avatar-content">
                      <i
                        data-feather="dollar-sign"
                        className="avatar-icon font-medium-3"
                      />
                    </div>
                  </div>
                  <div className="transaction-info">
                    <h6 className="transaction-title">Paypal</h6>
                    <small>Add Money</small>
                  </div>
                </div>
                <div className="fw-bolder text-success">+ $590</div>
              </div>
              <div className="transaction-item">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-warning rounded">
                    <div className="avatar-content">
                      <i
                        data-feather="credit-card"
                        className="avatar-icon font-medium-3"
                      />
                    </div>
                  </div>
                  <div className="transaction-info">
                    <h6 className="transaction-title">Mastercard</h6>
                    <small>Ordered Food</small>
                  </div>
                </div>
                <div className="fw-bolder text-danger">- $23</div>
              </div>
              <div className="transaction-item">
                <div className="d-flex flex-row">
                  <div className="avatar bg-light-info rounded">
                    <div className="avatar-content">
                      <i
                        data-feather="trending-up"
                        className="avatar-icon font-medium-3"
                      />
                    </div>
                  </div>
                  <div className="transaction-info">
                    <h6 className="transaction-title">Transfer</h6>
                    <small>Refund</small>
                  </div>
                </div>
                <div className="fw-bolder text-success">+ $98</div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Transaction card */}
        {/* Payment Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-payment">
            <div className="card-header">
              <h4 className="card-title">Pay Amount</h4>
              <h4 className="card-title text-primary">$455.60</h4>
            </div>
            <div className="card-body">
              <form action="javascript:void(0);" className="form">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        htmlFor="payment-card-number"
                      >
                        Card Number
                      </label>
                      <input
                        type="number"
                        id="payment-card-number"
                        className="form-control"
                        placeholder="2133 3244 4567 8921"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="mb-2">
                      <label className="form-label" htmlFor="payment-expiry">
                        Expiry
                      </label>
                      <input
                        type="number"
                        id="payment-expiry"
                        className="form-control"
                        placeholder="MM / YY"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="mb-2">
                      <label className="form-label" htmlFor="payment-cvv">
                        CVV / CVC
                      </label>
                      <input
                        type="number"
                        id="payment-cvv"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <label
                        className="form-label"
                        htmlFor="payment-input-name"
                      >
                        Input Name
                      </label>
                      <input
                        type="text"
                        id="payment-input-name"
                        className="form-control"
                        placeholder="Curtis Stone"
                      />
                    </div>
                  </div>
                  <div className="d-grid col-12">
                    <button type="button" className="btn btn-primary">
                      Make Payment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*/ Payment Card */}
      </div>
      <div className="row match-height">
        {/* User Timeline Card */}
        <div className="col-lg-8 col-12">
          <div className="card card-user-timeline">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <i data-feather="list" className="user-timeline-title-icon" />
                <h4 className="card-title">User Timeline</h4>
              </div>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            <div className="card-body">
              <ul className="timeline ms-50">
                <li className="timeline-item">
                  <span className="timeline-point timeline-point-indicator" />
                  <div className="timeline-event">
                    <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                      <h6>12 Invoices have been paid</h6>
                      <span className="timeline-event-time me-1">
                        12 min ago
                      </span>
                    </div>
                    <p>Invoices have been paid to the company.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img
                        className="me-1"
                        src="../../../app-assets/images/icons/json.png"
                        alt="data.json"
                        height={23}
                      />
                      <h6 className="mb-0">data.json</h6>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <span className="timeline-point timeline-point-warning timeline-point-indicator" />
                  <div className="timeline-event">
                    <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                      <h6>Client Meeting</h6>
                      <span className="timeline-event-time me-1">
                        45 min ago
                      </span>
                    </div>
                    <p>Project meeting with john @10:15am</p>
                    <div className="d-flex flex-row align-items-center">
                      <div className="avatar me-50">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                          alt="Avatar"
                          width={38}
                          height={38}
                        />
                      </div>
                      <div className="user-info">
                        <h6 className="mb-0">John Doe (Client)</h6>
                        <p className="mb-0">CEO of Infibeam</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <span className="timeline-point timeline-point-info timeline-point-indicator" />
                  <div className="timeline-event">
                    <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                      <h6>Create a new project for client</h6>
                      <span className="timeline-event-time me-1">
                        2 day ago
                      </span>
                    </div>
                    <p>Add files to new design folder</p>
                    <div className="avatar-group">
                      <div
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="bottom"
                        title="Billy Hopkins"
                        className="avatar pull-up"
                      >
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                          alt="Avatar"
                          width={33}
                          height={33}
                        />
                      </div>
                      <div
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="bottom"
                        title="Amy Carson"
                        className="avatar pull-up"
                      >
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                          alt="Avatar"
                          width={33}
                          height={33}
                        />
                      </div>
                      <div
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="bottom"
                        title="Brandon Miles"
                        className="avatar pull-up"
                      >
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                          alt="Avatar"
                          width={33}
                          height={33}
                        />
                      </div>
                      <div
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="bottom"
                        title="Daisy Weber"
                        className="avatar pull-up"
                      >
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                          alt="Avatar"
                          width={33}
                          height={33}
                        />
                      </div>
                      <div
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="bottom"
                        title="Jenny Looper"
                        className="avatar pull-up"
                      >
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                          alt="Avatar"
                          width={33}
                          height={33}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item">
                  <span className="timeline-point timeline-point-danger timeline-point-indicator" />
                  <div className="timeline-event">
                    <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                      <h6>Create a new project for client</h6>
                      <span className="timeline-event-time me-1">
                        5 day ago
                      </span>
                    </div>
                    <p className="mb-0">Add files to new design folder</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/ User Timeline Card */}
        {/* Chat Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card chat-widget">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <div className="avatar me-2">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                    alt="Avatar"
                    width={34}
                    height={34}
                  />
                  <span className="avatar-status-online" />
                </div>
                <h5 className="mb-0">Carrie Hawkins</h5>
              </div>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            {/* User Chat messages */}
            <section className="chat-app-window">
              <div className="user-chats">
                <div className="chats">
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>How can we help? We're here for you! 😄</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          Hey John, I am looking for the best admin template.
                        </p>
                        <p>Could you please help me to find it out? 🤔</p>
                      </div>
                      <div className="chat-content">
                        <p>It should be Bootstrap 4 compatible.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Absolutely!</p>
                      </div>
                      <div className="chat-content">
                        <p>
                          Vuexy admin is the responsive bootstrap 4 admin
                          template.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Looks clean and fresh UI. 😃</p>
                      </div>
                      <div className="chat-content">
                        <p>It's perfect for my next project.</p>
                      </div>
                      <div className="chat-content">
                        <p>How can I purchase it?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Thanks, from ThemeForest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>I will purchase it for sure. 👍</p>
                      </div>
                      <div className="chat-content">
                        <p>Thanks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Great, Feel free to get in touch on</p>
                      </div>
                      <div className="chat-content">
                        <p>https://pixinvent.ticksy.com/</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Chat form */}
              <form
                className="chat-app-form"
                action="javascript:void(0);"
                // onsubmit="enterChat();"
              >
                <div className="input-group input-group-merge me-50 w-75 form-send-message">
                  <span className="input-group-text">
                    <label
                      htmlFor="attach-doc"
                      className="attachment-icon mb-0"
                    >
                      <i
                        data-feather="image"
                        className="cursor-pointer text-secondary"
                      />
                      <input type="file" id="attach-doc" hidden={true} />{" "}
                    </label>
                  </span>
                  <input
                    type="text"
                    className="form-control message"
                    placeholder="Type your message"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary send"
                //   onclick="enterChat();"
                >
                  <i data-feather="send" className="d-lg-none" />
                  <span className="d-none text-nowrap d-lg-block">Send</span>
                </button>
              </form>
              {/*/ Submit Chat form */}
            </section>
            {/* User Chat messages */}
          </div>
        </div>
        {/*/ Chat Card */}
        {/* Business Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card business-card">
            <div className="card-header pb-1">
              <h4 className="card-title">For Business Sharks</h4>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                Here, i focus ona range of items and featured that we use in
                life without giving them
              </p>
              <h6 className="mb-75">Basic price is $130</h6>
              <div className="business-items">
                <div className="business-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="business-checkbox-1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="business-checkbox-1"
                      >
                        Option #1
                      </label>
                    </div>
                    <span className="badge badge-light-success">+$39</span>
                  </div>
                </div>
                <div className="business-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="business-checkbox-2"
                        // defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="business-checkbox-2"
                      >
                        Option #2
                      </label>
                    </div>
                    <span className="badge badge-light-primary">+85</span>
                  </div>
                </div>
                <div className="business-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="business-checkbox-3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="business-checkbox-3"
                      >
                        Option #3
                      </label>
                    </div>
                    <span className="badge badge-light-success">+$199</span>
                  </div>
                </div>
                <div className="business-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="business-checkbox-4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="business-checkbox-4"
                      >
                        Option #4
                      </label>
                    </div>
                    <span className="badge badge-light-success">+$459</span>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/ Business Card */}
        {/* Browser States Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-browser-states">
            <div className="card-header">
              <h4 className="card-title">Browser States</h4>
              <i
                data-feather="more-vertical"
                className="font-medium-3 cursor-pointer"
              />
            </div>
            <div className="card-body">
              <p className="card-text font-small-2">Counter August 2020</p>
              <div className="browser-states">
                <div className="d-flex flex-row">
                  <img
                    src="../../../app-assets/images/icons/google-chrome.png"
                    className="rounded me-1"
                    height={30}
                    alt="Google Chrome"
                  />
                  <h6 className="align-self-center mb-0">Google Chrome</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fw-bold text-body-heading me-1">54.4%</div>
                  <div className="state-chart-primary" />
                </div>
              </div>
              <div className="browser-states">
                <div className="d-flex flex-row">
                  <img
                    src="../../../app-assets/images/icons/mozila-firefox.png"
                    className="rounded me-1"
                    height={30}
                    alt="Mozila Firefox"
                  />
                  <h6 className="align-self-center mb-0">Mozila Firefox</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fw-bold text-body-heading me-1">6.1%</div>
                  <div className="state-chart-warning" />
                </div>
              </div>
              <div className="browser-states">
                <div className="d-flex flex-row">
                  <img
                    src="../../../app-assets/images/icons/apple-safari.png"
                    className="rounded me-1"
                    height={30}
                    alt="Apple Safari"
                  />
                  <h6 className="align-self-center mb-0">Apple Safari</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fw-bold text-body-heading me-1">14.6%</div>
                  <div className="state-chart-secondary" />
                </div>
              </div>
              <div className="browser-states">
                <div className="d-flex flex-row">
                  <img
                    src="../../../app-assets/images/icons/internet-explorer.png"
                    className="rounded me-1"
                    height={30}
                    alt="Internet Explorer"
                  />
                  <h6 className="align-self-center mb-0">Internet Explorer</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fw-bold text-body-heading me-1">4.2%</div>
                  <div className="state-chart-info" />
                </div>
              </div>
              <div className="browser-states">
                <div className="d-flex flex-row">
                  <img
                    src="../../../app-assets/images/icons/opera.png"
                    className="rounded me-1"
                    height={30}
                    alt="Opera Mini"
                  />
                  <h6 className="align-self-center mb-0">Opera Mini</h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fw-bold text-body-heading me-1">8.4%</div>
                  <div className="state-chart-danger" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Browser States Card */}
        {/* App Design Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card card-app-design">
            <div className="card-body">
              <span className="badge badge-light-primary">03 Sep, 20</span>
              <h4 className="card-title mt-1 mb-75">App design</h4>
              <p className="card-text font-small-2 mb-2">
                You can Find Only Post and Quotes Related to IOS like ipad app
                design, iphone app design
              </p>
              <div className="design-group">
                <h6 className="section-label">Team</h6>
                <span className="badge badge-light-warning me-1">Figma</span>
                <span className="badge badge-light-primary">Wireframe</span>
              </div>
              <div className="design-group">
                <h6 className="section-label">Members</h6>
                <div className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                    width={34}
                    height={34}
                    alt="Avatar"
                  />
                </div>
                <div className="avatar bg-light-danger">
                  <div className="avatar-content">PI</div>
                </div>
                <div className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-14.jpg"
                    width={34}
                    height={34}
                    alt="Avatar"
                  />
                </div>
                <div className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                    width={34}
                    height={34}
                    alt="Avatar"
                  />
                </div>
                <div className="avatar bg-light-secondary">
                  <div className="avatar-content">AL</div>
                </div>
              </div>
              <div className="design-planning-wrapper">
                <div className="design-planning">
                  <p className="card-text mb-25">Due Date</p>
                  <h6 className="mb-0">12 Apr, 21</h6>
                </div>
                <div className="design-planning">
                  <p className="card-text mb-25">Budget</p>
                  <h6 className="mb-0">$49251.91</h6>
                </div>
                <div className="design-planning">
                  <p className="card-text mb-25">Cost</p>
                  <h6 className="mb-0">$840.99</h6>
                </div>
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary">
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/ App Design Card */}
        {/* Deposits Card */}
        {/* ! commented for now as we are not using this card */}
        {/* <div class="col-lg-3 col-md-6 col-12">
    <div class="card card-deposits">
<div class="card-body">
  <h3>$12,490</h3>
  <p class="card-text">
    <small>Deposits: $18,389</small>
  </p>
  <p class="card-text text-success fw-bolder">+8.2% ($284)</p>
  <div class="d-grid">
    <button type="button" class="btn btn-primary">Add Funds <i data-feather="plus"></i></button>
  </div>
  <hr class="deposits-divider" />
  <p class="card-text mb-50">
    <small>Earned: $45,290</small>
  </p>
  <div class="progress progress-bar-success mb-2" style="height: 6px">
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="75"
      aria-valuemax="100"
      style="width: 75%"
    ></div>
  </div>
  <p class="card-text mb-50">
    <small>Duration: 4year</small>
  </p>
  <div class="progress progress-bar-warning" style="height: 6px">
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow="30"
      aria-valuemin="30"
      aria-valuemax="100"
      style="width: 30%"
    ></div>
  </div>
</div>
    </div>
  </div> */}
        {/*/ Deposits Card */}
      </div>
      {/*/ Card Advance */}
    </div>
  </div>
</div>

    </>
  )
}
