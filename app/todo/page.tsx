export default function page() {
  return (
    <>
    <div className="app-content content todo-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-area-wrapper container-xxl p-0">
    <div className="sidebar-left">
      <div className="sidebar">
        <div className="sidebar-content todo-sidebar">
          <div className="todo-app-menu">
            <div className="add-task">
              <button
                type="button"
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#new-task-modal"
              >
                Add Task
              </button>
            </div>
            <div className="sidebar-menu-list">
              <div className="list-group list-group-filters">
                <a
                  href="#"
                  className="list-group-item list-group-item-action active"
                >
                  <i data-feather="mail" className="font-medium-3 me-50" />
                  <span className="align-middle"> My Task</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="star" className="font-medium-3 me-50" />{" "}
                  <span className="align-middle">Important</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="check" className="font-medium-3 me-50" />{" "}
                  <span className="align-middle">Completed</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="trash" className="font-medium-3 me-50" />{" "}
                  <span className="align-middle">Deleted</span>
                </a>
              </div>
              <div className="mt-3 px-2 d-flex justify-content-between">
                <h6 className="section-label mb-1">Tags</h6>
                <i data-feather="plus" className="cursor-pointer" />
              </div>
              <div className="list-group list-group-labels">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-primary me-1" />
                  Team
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-success me-1" />
                  Low
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-warning me-1" />
                  Medium
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-danger me-1" />
                  High
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex align-items-center"
                >
                  <span className="bullet bullet-sm bullet-info me-1" />
                  Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-right">
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="body-content-overlay" />
          <div className="todo-app-list">
            {/* Todo search starts */}
            <div className="app-fixed-search d-flex align-items-center">
              <div className="sidebar-toggle d-block d-lg-none ms-1">
                <i data-feather="menu" className="font-medium-5" />
              </div>
              <div className="d-flex align-content-center justify-content-between w-100">
                <div className="input-group input-group-merge">
                  <span className="input-group-text">
                    <i data-feather="search" className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="todo-search"
                    placeholder="Search task"
                    aria-label="Search..."
                    aria-describedby="todo-search"
                  />
                </div>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle hide-arrow me-1"
                  id="todoActions"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    data-feather="more-vertical"
                    className="font-medium-2 text-body"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="todoActions"
                >
                  <a className="dropdown-item sort-asc" href="#">
                    Sort A - Z
                  </a>
                  <a className="dropdown-item sort-desc" href="#">
                    Sort Z - A
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort Assignee
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort Due Date
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort Today
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort 1 Week
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort 1 Month
                  </a>
                </div>
              </div>
            </div>
            {/* Todo search ends */}
            {/* Todo List starts */}
            <div className="todo-task-list-wrapper list-group">
              <ul className="todo-task-list media-list" id="todo-task-list">
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                        <span className="todo-title">
                          Fix Responsiveness for new structure 💻
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-primary">
                          Team
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 08
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck2"
                          />
                        </div>
                        <span className="todo-title">
                          Plan a party for development team 🎁
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-primary">
                          Team
                        </span>
                        <span className="badge rounded-pill badge-light-danger">
                          High
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 30
                      </small>
                      <div className="avatar bg-light-warning">
                        <div className="avatar-content">MB</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck3"
                          />
                        </div>
                        <span className="todo-title">
                          Hire 5 new Fresher or Experienced, frontend and
                          backend developers{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-info">
                          Update
                        </span>
                        <span className="badge rounded-pill badge-light-warning">
                          Medium
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 28
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item completed">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck4"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck4"
                          />
                        </div>
                        <span className="todo-title">
                          Skype Tommy for project status &amp; report
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-danger">
                          High
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 18
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck5"
                          />
                        </div>
                        <span className="todo-title">
                          Send PPT with real-time reports
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-warning">
                          Medium
                        </span>
                        <span className="badge rounded-pill badge-light-success">
                          Low
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 22
                      </small>
                      <div className="avatar bg-light-danger">
                        <div className="avatar-content">LM</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck6"
                          />
                        </div>
                        <span className="todo-title">
                          Submit quotation for Abid's ecommerce website and
                          admin project{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-primary">
                          Team
                        </span>
                        <span className="badge rounded-pill badge-light-success">
                          Low
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 24
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item completed">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck7"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck7"
                          />
                        </div>
                        <span className="todo-title">
                          Reminder to mail clients for holidays
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-primary">
                          Team
                        </span>
                        <span className="badge rounded-pill badge-light-warning">
                          Medium
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 27
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck8"
                          />
                        </div>
                        <span className="todo-title">
                          Refactor Code and fix the bugs and test it on server{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-success">
                          Low
                        </span>
                        <span className="badge rounded-pill badge-light-warning">
                          Medium
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 27
                      </small>
                      <div className="avatar bg-light-success">
                        <div className="avatar-content">KL</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck9"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck9"
                          />
                        </div>
                        <span className="todo-title">
                          List out all the SEO resources and send it to new SEO
                          team.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <small className="text-nowrap text-muted me-1">
                        Sept 15
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck10"
                          />
                        </div>
                        <span className="todo-title">
                          Finish documentation and make it live
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-success">
                          Low
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 28
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item completed">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck11"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck11"
                          />
                        </div>
                        <span className="todo-title">
                          Pick up Nats from her school and drop at dance class😁{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <small className="text-nowrap text-muted me-1">
                        Aug 17
                      </small>
                      <div className="avatar bg-light-primary">
                        <div className="avatar-content">PK</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck12"
                          />
                        </div>
                        <span className="todo-title">
                          Plan new dashboard design with design team for Google
                          app store.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-info">
                          Update
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Sept 02
                      </small>
                      <div className="avatar bg-light-danger">
                        <div className="avatar-content">LO</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck13"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck13"
                          />
                        </div>
                        <span className="todo-title">
                          Conduct a mini awareness meeting regarding health
                          care.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <small className="text-nowrap text-muted me-1">
                        Sept 05
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-17.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item completed">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck14"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck14"
                          />
                        </div>
                        <span className="todo-title">
                          Test functionality of apps developed by dev team for
                          enhancements.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-danger">
                          High
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Sept 07
                      </small>
                      <div className="avatar bg-light-info">
                        <div className="avatar-content">VB</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck15"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck15"
                          />
                        </div>
                        <span className="todo-title">
                          Answer the support tickets and close completed
                          tickets.{" "}
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-primary">
                          Frontend
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Sept 12
                      </small>
                      <div className="avatar bg-light-success">
                        <div className="avatar-content">SW</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="todo-item">
                  <div className="todo-title-wrapper">
                    <div className="todo-title-area">
                      <i data-feather="more-vertical" className="drag-icon" />
                      <div className="title-wrapper">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck16"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck16"
                          />
                        </div>
                        <span className="todo-title">
                          Meet Jane and ask for coffee ❤️
                        </span>
                      </div>
                    </div>
                    <div className="todo-item-action">
                      <div className="badge-wrapper me-1">
                        <span className="badge rounded-pill badge-light-info">
                          Update
                        </span>
                        <span className="badge rounded-pill badge-light-warning">
                          Medium
                        </span>
                        <span className="badge rounded-pill badge-light-success">
                          Low
                        </span>
                      </div>
                      <small className="text-nowrap text-muted me-1">
                        Aug 10
                      </small>
                      <div className="avatar">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                          alt="user-avatar"
                          height={32}
                          width={32}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="no-results">
                <h5>No Items Found</h5>
              </div>
            </div>
            {/* Todo List ends */}
          </div>
          {/* Right Sidebar starts */}
          <div
            className="modal modal-slide-in sidebar-todo-modal fade"
            id="new-task-modal"
          >
            <div className="modal-dialog sidebar-lg">
              <div className="modal-content p-0">
                <form
                  id="form-modal-todo"
                  className="todo-modal needs-validation"
                  noValidate=""
                  onsubmit="return false"
                >
                  <div className="modal-header align-items-center mb-1">
                    <h5 className="modal-title">Add Task</h5>
                    <div className="todo-item-action d-flex align-items-center justify-content-between ms-auto">
                      <span className="todo-item-favorite cursor-pointer me-75">
                        <i data-feather="star" className="font-medium-2" />
                      </span>
                      <i
                        data-feather="x"
                        className="cursor-pointer"
                        data-bs-dismiss="modal"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                  <div className="modal-body flex-grow-1 pb-sm-0 pb-3">
                    <div className="action-tags">
                      <div className="mb-1">
                        <label htmlFor="todoTitleAdd" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          id="todoTitleAdd"
                          name="todoTitleAdd"
                          className="new-todo-item-title form-control"
                          placeholder="Title"
                        />
                      </div>
                      <div className="mb-1 position-relative">
                        <label
                          htmlFor="task-assigned"
                          className="form-label d-block"
                        >
                          Assignee
                        </label>
                        <select
                          className="select2 form-select"
                          id="task-assigned"
                          name="task-assigned"
                        >
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                            value="Phill Buffer"
                            selected=""
                          >
                            Phill Buffer
                          </option>
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                            value="Chandler Bing"
                          >
                            Chandler Bing
                          </option>
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                            value="Ross Geller"
                          >
                            Ross Geller
                          </option>
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                            value="Monica Geller"
                          >
                            Monica Geller
                          </option>
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                            value="Joey Tribbiani"
                          >
                            Joey Tribbiani
                          </option>
                          <option
                            data-img="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                            value="Rachel Green"
                          >
                            Rachel Green
                          </option>
                        </select>
                      </div>
                      <div className="mb-1">
                        <label htmlFor="task-due-date" className="form-label">
                          Due Date
                        </label>
                        <input
                          type="text"
                          className="form-control task-due-date"
                          id="task-due-date"
                          name="task-due-date"
                        />
                      </div>
                      <div className="mb-1">
                        <label
                          htmlFor="task-tag"
                          className="form-label d-block"
                        >
                          Tag
                        </label>
                        <select
                          className="form-select task-tag"
                          id="task-tag"
                          name="task-tag"
                          multiple="multiple"
                        >
                          <option value="Team">Team</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Update">Update</option>
                        </select>
                      </div>
                      <div className="mb-1">
                        <label className="form-label">Description</label>
                        <div
                          id="task-desc"
                          className="border-bottom-0"
                          data-placeholder="Write Your Description"
                        />
                        <div className="d-flex justify-content-end desc-toolbar border-top-0">
                          <span className="ql-formats me-0">
                            <button className="ql-bold" />
                            <button className="ql-italic" />
                            <button className="ql-underline" />
                            <button className="ql-align" />
                            <button className="ql-link" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="my-1">
                      <button
                        type="submit"
                        className="btn btn-primary d-none add-todo-item me-1"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary add-todo-item d-none"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary d-none update-btn update-todo-item me-1"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger update-btn d-none"
                        data-bs-dismiss="modal"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Right Sidebar ends */}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
