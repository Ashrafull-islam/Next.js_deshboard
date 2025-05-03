
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
                    i18n
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">i18n</li>
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
            {/* internationalization */}
            <section id="internationalization">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Change Locale</h4>
                    </div>
                    <div className="card-body">
                      <div className="language-options checkbox">
                        <div className="form-check mb-50">
                          <input
                            type="radio"
                            id="i18n-lang-radio1"
                            name="i18n-lang-radios"
                            className="form-check-input i18n-lang-option"
                            data-lng="en_p"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="i18n-lang-radio1"
                          >
                            English
                          </label>
                        </div>
                        <div className="form-check mb-50">
                          <input
                            type="radio"
                            id="i18n-lang-radio2"
                            name="i18n-lang-radios"
                            className="form-check-input i18n-lang-option"
                            data-lng="fr_p"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="i18n-lang-radio2"
                          >
                            French
                          </label>
                        </div>
                        <div className="form-check mb-50">
                          <input
                            type="radio"
                            id="i18n-lang-radio3"
                            name="i18n-lang-radios"
                            className="form-check-input i18n-lang-option"
                            data-lng="de_p"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="i18n-lang-radio3"
                          >
                            German
                          </label>
                        </div>
                        <div className="form-check mb-50">
                          <input
                            type="radio"
                            id="i18n-lang-radio4"
                            name="i18n-lang-radios"
                            className="form-check-input i18n-lang-option"
                            data-lng="pt_p"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="i18n-lang-radio4"
                          >
                            Portuguese
                          </label>
                        </div>
                      </div>
                      <div className="card-localization border rounded mt-3 p-2">
                        <h5 className="mb-1">Title</h5>
                        <p className="card-text" data-i18n="key">
                          Cake sesame snaps cupcake gingerbread danish I love
                          gingerbread. Apple pie pie jujubes chupa chups muffin
                          halvah lollipop. Chocolate cake oat cake tiramisu
                          marzipan sugar plum. Donut sweet pie oat cake dragée
                          fruitcake cotton candy lemon drops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ internationalization */}
          </div>
        </div>
      </div>
    </>
  );
}
