
export default function page() {
  return (
    <>
<div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      {/* Full calendar start */}
      <section>
        <div className="app-calendar overflow-hidden border">
          <div className="row g-0">
            {/* Sidebar */}
            <div
              className="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
              id="app-calendar-sidebar"
            >
              <div className="sidebar-wrapper">
                <div className="card-body d-flex justify-content-center">
                  <button
                    className="btn btn-primary btn-toggle-sidebar w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#add-new-sidebar"
                  >
                    <span className="align-middle">Add Event</span>
                  </button>
                </div>
                <div className="card-body pb-0">
                  <h5 className="section-label mb-1">
                    <span className="align-middle">Filter</span>
                  </h5>
                  <div className="form-check mb-1">
                    <input
                      type="checkbox"
                      className="form-check-input select-all"
                      id="select-all"
                      defaultChecked={true}
                    />
                    <label className="form-check-label" htmlFor="select-all">
                      View All
                    </label>
                  </div>
                  <div className="calendar-events-filter">
                    <div className="form-check form-check-danger mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input input-filter"
                        id="personal"
                        data-value="personal"
                        defaultChecked={true}
                      />
                      <label className="form-check-label" htmlFor="personal">
                        Personal
                      </label>
                    </div>
                    <div className="form-check form-check-primary mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input input-filter"
                        id="business"
                        data-value="business"
                        defaultChecked={true}
                      />
                      <label className="form-check-label" htmlFor="business">
                        Business
                      </label>
                    </div>
                    <div className="form-check form-check-warning mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input input-filter"
                        id="family"
                        data-value="family"
                        defaultChecked={true}
                      />
                      <label className="form-check-label" htmlFor="family">
                        Family
                      </label>
                    </div>
                    <div className="form-check form-check-success mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input input-filter"
                        id="holiday"
                        data-value="holiday"
                        defaultChecked={true}
                      />
                      <label className="form-check-label" htmlFor="holiday">
                        Holiday
                      </label>
                    </div>
                    <div className="form-check form-check-info">
                      <input
                        type="checkbox"
                        className="form-check-input input-filter"
                        id="etc"
                        data-value="etc"
                        defaultChecked={true}
                      />
                      <label className="form-check-label" htmlFor="etc">
                        ETC
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <img
                  src="../../../app-assets/images/pages/calendar-illustration.png"
                  alt="Calendar illustration"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* /Sidebar */}
            {/* Calendar */}
            <div className="col position-relative">
              <div className="card shadow-none border-0 mb-0 rounded-0">
                <div className="card-body pb-0">
                  <div id="calendar" />
                </div>
              </div>
            </div>
            {/* /Calendar */}
            <div className="body-content-overlay" />
          </div>
        </div>
        {/* Calendar Add/Update/Delete event modal*/}
        <div
          className="modal modal-slide-in event-sidebar fade"
          id="add-new-sidebar"
        >
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
                <h5 className="modal-title">Add Event</h5>
              </div>
              <div className="modal-body flex-grow-1 pb-sm-0 pb-3">
                <form
                  className="event-form needs-validation"
                  data-ajax="false"
                >
                  <div className="mb-1">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Event Title"
                      required={true}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="select-label" className="form-label">
                      Label
                    </label>
                    <select
                      className="select2 select-label form-select w-100"
                      id="select-label"
                      name="select-label"
                    >
                      <option data-label="primary" value="Business" selected={true}>
                        Business
                      </option>
                      <option data-label="danger" value="Personal">
                        Personal
                      </option>
                      <option data-label="warning" value="Family">
                        Family
                      </option>
                      <option data-label="success" value="Holiday">
                        Holiday
                      </option>
                      <option data-label="info" value="ETC">
                        ETC
                      </option>
                    </select>
                  </div>
                  <div className="mb-1 position-relative">
                    <label htmlFor="start-date" className="form-label">
                      Start Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="start-date"
                      name="start-date"
                      placeholder="Start Date"
                    />
                  </div>
                  <div className="mb-1 position-relative">
                    <label htmlFor="end-date" className="form-label">
                      End Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="end-date"
                      name="end-date"
                      placeholder="End Date"
                    />
                  </div>
                  <div className="mb-1">
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input allDay-switch"
                        id="customSwitch3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch3"
                      >
                        All Day
                      </label>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="event-url" className="form-label">
                      Event URL
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="event-url"
                      placeholder="https://www.google.com"
                    />
                  </div>
                  <div className="mb-1 select2-primary">
                    <label htmlFor="event-guests" className="form-label">
                      Add Guests
                    </label>
                    <select
                      className="select2 select-add-guests form-select w-100"
                      id="event-guests"
                      multiple={true}
                    >
                      <option data-avatar="1-small.png" value="Jane Foster">
                        Jane Foster
                      </option>
                      <option data-avatar="3-small.png" value="Donna Frank">
                        Donna Frank
                      </option>
                      <option
                        data-avatar="5-small.png"
                        value="Gabrielle Robertson"
                      >
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
                  </div>
                  <div className="mb-1">
                    <label htmlFor="event-location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="event-location"
                      placeholder="Enter Location"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Description</label>
                    <textarea
                      name="event-description-editor"
                      id="event-description-editor"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-1 d-flex">
                    <button
                      type="submit"
                      className="btn btn-primary add-event-btn me-1"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-cancel"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary update-event-btn d-none me-1"
                    >
                      Update
                    </button>
                    <button className="btn btn-outline-danger btn-delete-event d-none">
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*/ Calendar Add/Update/Delete event modal*/}
      </section>
      {/* Full calendar end */}
    </div>
  </div>
</div>

    </>
  )
}
