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
              Custom Options
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Form Elements</a>
                </li>
                <li className="breadcrumb-item active">Custom Options</li>
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
      {/* basic custom options */}
      <div className="row">
        {/* custom option radio */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Radio</h4>
            </div>
            <div className="card-body">
              <div className="row custom-options-checkable g-1">
                <div className="col-md-6">
                  <input
                    className="custom-option-item-check"
                    type="radio"
                    name="customOptionsCheckableRadios"
                    id="customOptionsCheckableRadios1"
                    defaultChecked={true}
                  />
                  <label
                    className="custom-option-item p-1"
                    htmlFor="customOptionsCheckableRadios1"
                  >
                    <span className="d-flex justify-content-between flex-wrap mb-50">
                      <span className="fw-bolder">Basic</span>
                      <span className="fw-bolder">Free</span>
                    </span>
                    <small className="d-block">
                      Get 1 project with 1 team member.
                    </small>
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    className="custom-option-item-check"
                    type="radio"
                    name="customOptionsCheckableRadios"
                    id="customOptionsCheckableRadios2"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item p-1"
                    htmlFor="customOptionsCheckableRadios2"
                  >
                    <span className="d-flex justify-content-between flex-wrap mb-50">
                      <span className="fw-bolder">Premium</span>
                      <span className="fw-bolder">$ 5.00</span>
                    </span>
                    <small className="d-block">
                      Get 5 projects with 5 team members.
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* custom option checkbox */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Checkbox</h4>
            </div>
            <div className="card-body">
              <div className="row custom-options-checkable g-1">
                <div className="col-md-6">
                  <input
                    className="custom-option-item-check"
                    type="checkbox"
                    name="customOptionsCheckableCheckbox"
                    id="customOptionsCheckableCheckbox1"
                    defaultChecked={true}
                  />
                  <label
                    className="custom-option-item p-1"
                    htmlFor="customOptionsCheckableCheckbox1"
                  >
                    <span className="d-flex justify-content-between flex-wrap mb-50">
                      <span className="fw-bolder">Discount</span>
                      <span className="fw-bolder">20%</span>
                    </span>
                    <small className="d-block">
                      Get 20% off on your next purchase.
                    </small>
                  </label>
                </div>
                <div className="col-md-6">
                  <input
                    className="custom-option-item-check"
                    type="checkbox"
                    name="customOptionsCheckableCheckbox"
                    id="customOptionsCheckableCheckbox2"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item p-1"
                    htmlFor="customOptionsCheckableCheckbox2"
                  >
                    <span className="d-flex justify-content-between flex-wrap mb-50">
                      <span className="fw-bolder">Updates</span>
                      <span className="fw-bolder">Free</span>
                    </span>
                    <small className="d-block">
                      Get Updates regarding related products.
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / basic custom options */}
      {/* custom options with icons */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Custom Option Radios With Icons</h4>
            </div>
            <div className="card-body">
              <div className="row custom-options-checkable g-1">
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="radio"
                    name="customOptionsCheckableRadiosWithIcon"
                    id="customOptionsCheckableRadiosWithIcon1"
                    defaultChecked={true}
                  />
                  <label
                    className="custom-option-item text-center p-1"
                    htmlFor="customOptionsCheckableRadiosWithIcon1"
                  >
                    <i data-feather="play" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Starter
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="radio"
                    name="customOptionsCheckableRadiosWithIcon"
                    id="customOptionsCheckableRadiosWithIcon2"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item text-center text-center p-1"
                    htmlFor="customOptionsCheckableRadiosWithIcon2"
                  >
                    <i data-feather="user" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Personal
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="radio"
                    name="customOptionsCheckableRadiosWithIcon"
                    id="customOptionsCheckableRadiosWithIcon3"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item text-center p-1"
                    htmlFor="customOptionsCheckableRadiosWithIcon3"
                  >
                    <i data-feather="users" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Enterprise
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkbox */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">
                Custom Option Checkboxes With Icons
              </h4>
            </div>
            <div className="card-body">
              <div className="row custom-options-checkable g-1">
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="checkbox"
                    name="customOptionsCheckableCheckboxWithIcon"
                    id="customOptionsCheckableCheckboxWithIcon1"
                    defaultChecked={true}
                  />
                  <label
                    className="custom-option-item text-center p-1"
                    htmlFor="customOptionsCheckableCheckboxWithIcon1"
                  >
                    <i data-feather="server" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Backup
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="checkbox"
                    name="customOptionsCheckableCheckboxWithIcon"
                    id="customOptionsCheckableCheckboxWithIcon2"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item text-center text-center p-1"
                    htmlFor="customOptionsCheckableCheckboxWithIcon2"
                  >
                    <i data-feather="shield" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Encrypt
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    className="custom-option-item-check"
                    type="checkbox"
                    name="customOptionsCheckableCheckboxWithIcon"
                    id="customOptionsCheckableCheckboxWithIcon3"
                    defaultValue=""
                  />
                  <label
                    className="custom-option-item text-center p-1"
                    htmlFor="customOptionsCheckableCheckboxWithIcon3"
                  >
                    <i data-feather="lock" className="font-large-1 mb-75" />
                    <span className="custom-option-item-title h4 d-block">
                      Site Lock
                    </span>
                    <small>
                      Cake sugar plum fruitcake I love sweet roll jelly-o.
                    </small>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / custom options with icons */}
    </div>
  </div>
</div>

    </>
  )
}
