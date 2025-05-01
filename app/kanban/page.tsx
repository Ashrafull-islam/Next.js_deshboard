export default function page() {
  return (
    <>
      <div className="app-content content kanban-application">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row"></div>
          <div className="content-body">
            {/* Kanban starts */}
            <section className="app-kanban-wrapper">
              <div className="row">
                <div className="col-12">
                  <form className="add-new-board">
                    <label
                      className="add-new-btn mb-2"
                      htmlFor="add-new-board-input"
                    >
                      <i className="align-middle" data-feather="plus" />
                      <span className="align-middle">Add new</span>
                    </label>
                    <input
                      type="text"
                      className="form-control add-new-board-input mb-50"
                      placeholder="Add Board Title"
                      id="add-new-board-input"
                      required=""
                    />
                    <div className="mb-1 add-new-board-input">
                      <button className="btn btn-primary btn-sm me-75">
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm cancel-add-new"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Kanban content starts */}
              <div className="kanban-wrapper" />
              {/* Kanban content ends */}
              {/* Kanban Sidebar starts */}
              <div className="modal modal-slide-in update-item-sidebar fade">
                <div className="modal-dialog sidebar-lg">
                  <div className="modal-content p-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <div className="modal-header mb-1">
                      <h5 className="modal-title">Update Item</h5>
                    </div>
                    <div className="modal-body flex-grow-1">
                      <ul className="nav nav-tabs tabs-line">
                        <li className="nav-item">
                          <a
                            className="nav-link nav-link-update active"
                            data-bs-toggle="tab"
                            href="#tab-update"
                          >
                            <i data-feather="edit" />
                            <span className="align-middle">Update</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link nav-link-activity"
                            data-bs-toggle="tab"
                            href="#tab-activity"
                          >
                            <i data-feather="activity" />
                            <span className="align-middle">Activity</span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content mt-2">
                        <div
                          className="tab-pane tab-pane-update fade show active"
                          id="tab-update"
                          role="tabpanel"
                        >
                          <form className="update-item-form">
                            <div className="mb-1">
                              <label className="form-label" htmlFor="title">
                                Title
                              </label>
                              <input
                                type="text"
                                id="title"
                                className="form-control"
                                placeholder="Enter Title"
                              />
                            </div>
                            <div className="mb-1">
                              <label className="form-label" htmlFor="due-date">
                                Due Date
                              </label>
                              <input
                                type="text"
                                id="due-date"
                                className="form-control"
                                placeholder="Enter Due Date"
                              />
                            </div>
                            <div className="mb-1">
                              <label className="form-label" htmlFor="label">
                                Label
                              </label>
                              <select
                                className="select2 select2-label form-select"
                                id="label"
                              >
                                <option value="">&nbsp;</option>
                                <option
                                  data-color="badge-light-success"
                                  value="UX"
                                >
                                  UX
                                </option>
                                <option
                                  data-color="badge-light-warning"
                                  value="Images"
                                >
                                  Images
                                </option>
                                <option
                                  data-color="badge-light-info"
                                  value="App"
                                >
                                  App
                                </option>
                                <option
                                  data-color="badge-light-danger"
                                  value="Code Review"
                                >
                                  Code Review
                                </option>
                                <option
                                  data-color="badge-light-success"
                                  value="Forms"
                                >
                                  Forms
                                </option>
                                <option
                                  data-color="badge-light-primary"
                                  value="Charts & Maps"
                                >
                                  Charts &amp; Maps
                                </option>
                              </select>
                            </div>
                            <div className="mb-1">
                              <label className="form-label">Assigned</label>
                              <ul className="assigned ps-0" />
                            </div>
                            <div className="mb-1">
                              <label
                                htmlFor="attachments"
                                className="form-label"
                              >
                                Attachments
                              </label>
                              <input
                                className="form-control file-attachments"
                                type="file"
                                id="attachments"
                                multiple=""
                              />
                            </div>
                            <div className="mb-1">
                              <label className="form-label">Comment</label>
                              <div className="comment-editor border-bottom-0" />
                              <div className="d-flex justify-content-end comment-toolbar">
                                <span className="ql-formats me-0">
                                  <button className="ql-bold" />
                                  <button className="ql-italic" />
                                  <button className="ql-underline" />
                                  <button className="ql-link" />
                                  <button className="ql-image" />
                                </span>
                              </div>
                            </div>
                            <div className="mb-1">
                              <div className="d-flex flex-wrap">
                                <button
                                  className="btn btn-primary me-1"
                                  data-bs-dismiss="modal"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div
                          className="tab-pane tab-pane-activity pb-1 fade"
                          id="tab-activity"
                          role="tabpanel"
                        >
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar bg-light-success my-0 ms-0 me-50">
                              <span className="avatar-content">HJ</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Jordan</span> Left the
                                board.
                              </p>
                              <small className="text-muted">
                                Today 11:00 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Dianna</span>{" "}
                                mentioned{" "}
                                <span className="fw-bold text-primary">
                                  @bruce
                                </span>{" "}
                                in a comment.
                              </p>
                              <small className="text-muted">
                                Today 10:20 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Martian</span> added
                                moved Charts &amp; Maps task to the done board.
                              </p>
                              <small className="text-muted">
                                Today 10:00 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Barry</span> Commented
                                on App review task.
                              </p>
                              <small className="text-muted">
                                Today 8:32 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar bg-light-dark my-0 ms-0 me-50">
                              <span className="avatar-content">BW</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Bruce</span> was
                                assigned task of code review.
                              </p>
                              <small className="text-muted">
                                Today 8:30 PM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar bg-light-danger my-0 ms-0 me-50">
                              <span className="avatar-content">CK</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Clark</span> assigned
                                task UX Research to
                                <span className="fw-bold text-primary">
                                  @martian
                                </span>
                              </p>
                              <small className="text-muted">
                                Today 8:00 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Ray</span> Added moved{" "}
                                <span className="fw-bold">
                                  Forms &amp; Tables
                                </span>{" "}
                                task from in progress to done.
                              </p>
                              <small className="text-muted">
                                Today 7:45 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Barry</span> Complete
                                all the tasks assigned to him.
                              </p>
                              <small className="text-muted">
                                Today 7:17 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar bg-light-success my-0 ms-0 me-50">
                              <span className="avatar-content">HJ</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Jordan</span> added
                                task to update new images.
                              </p>
                              <small className="text-muted">
                                Today 7:00 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar my-0 ms-0 me-50">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height={32}
                              />
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Dianna</span> moved
                                task <span className="fw-bold">FAQ UX</span>{" "}
                                from in progress to done board.
                              </p>
                              <small className="text-muted">
                                Today 7:00 AM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start mb-1">
                            <div className="avatar bg-light-danger my-0 ms-0 me-50">
                              <span className="avatar-content">CK</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Clark</span> added new
                                board with name{" "}
                                <span className="fw-bold">Done</span>.
                              </p>
                              <small className="text-muted">
                                Yesterday 3:00 PM
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-start">
                            <div className="avatar bg-light-dark my-0 ms-0 me-50">
                              <span className="avatar-content">BW</span>
                            </div>
                            <div className="more-info">
                              <p className="mb-0">
                                <span className="fw-bold">Bruce</span> added new
                                task in progress board.
                              </p>
                              <small className="text-muted">
                                Yesterday 12:00 PM
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kanban Sidebar ends */}
            </section>
            {/* Kanban ends */}
          </div>
        </div>
      </div>
    </>
  );
}
