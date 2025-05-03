
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
                    Textarea
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Textarea</li>
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
            {/* Basic Textarea start */}
            <section className="basic-textarea">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Default</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To add a Textarea we have the component{" "}
                        <code>textarea</code>.
                      </p>
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="exampleFormControlTextarea1"
                            >
                              Textarea
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={3}
                              placeholder="Textarea"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Textarea end */}
            {/* Floating Label Textarea start */}
            <section className="floating-label-textarea">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Floating Label</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        Use <code>.form-floating</code> to add a Floating Label
                        with Textarea.
                      </p>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea2"
                              style={{ height: 100 }}
                              defaultValue={""}
                            />
                            <label htmlFor="floatingTextarea2">Comments</label>
                          </div>
                          {/* <div class="form-floating">
          <textarea
            class="form-control"
            id="label-textarea"
            rows="3"
            placeholder="Label in Textarea"
            style="height: 100px"
          ></textarea>
          <label for="label-textarea">Label in Textarea</label>
        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Floating Label Textarea end */}
            {/* Counter Textarea start */}
            <section className="counter-textarea">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Counter</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        There are times when we need the user to only enter a
                        certain number of characters for it, we have the
                        property counter, the value is a number and determines
                        the maximum. Use <code>.char-textarea</code> with
                        <code>&lt;textarea&gt;</code>tag for counting
                        text-length.
                      </p>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-floating mb-0">
                            <textarea
                              data-length={20}
                              className="form-control char-textarea"
                              id="textarea-counter"
                              rows={3}
                              placeholder="Counter"
                              style={{ height: 100 }}
                              defaultValue={""}
                            />
                            <label htmlFor="textarea-counter">Counter</label>
                          </div>
                          <small className="textarea-counter-value float-end">
                            <span className="char-count">0</span> / 20{" "}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Counter Textarea end */}
          </div>
        </div>
      </div>
    </>
  );
}
