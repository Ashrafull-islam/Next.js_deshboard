
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
                    Tree
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Tree</li>
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
            {/* Tree section */}
            <section className="basic-custom-icons-tree">
              <div className="row">
                {/* Basic Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-basic">
                        <ul>
                          <li data-jstree='{"icon" : "far fa-folder"}'>
                            css
                            <ul>
                              <li data-jstree='{"icon" : "fab fa-css3-alt"}'>
                                app.css
                              </li>
                              <li data-jstree='{"icon" : "fab fa-css3-alt"}'>
                                style.css
                              </li>
                            </ul>
                          </li>
                          <li
                            className="jstree-open"
                            data-jstree='{"icon" : "far fa-folder"}'
                          >
                            img
                            <ul data-jstree='{"icon" : "far fa-folder"}'>
                              <li data-jstree='{"icon" : "far fa-file-image"}'>
                                bg.jpg
                              </li>
                              <li data-jstree='{"icon" : "far fa-file-image"}'>
                                logo.png
                              </li>
                              <li data-jstree='{"icon" : "far fa-file-image"}'>
                                avatar.png
                              </li>
                            </ul>
                          </li>
                          <li
                            className="jstree-open"
                            data-jstree='{"icon" : "far fa-folder"}'
                          >
                            js
                            <ul>
                              <li data-jstree='{"icon" : "fab fa-node-js"}'>
                                jquery.js
                              </li>
                              <li data-jstree='{"icon" : "fab fa-node-js"}'>
                                app.js
                              </li>
                            </ul>
                          </li>
                          <li data-jstree='{"icon" : "fab fa-html5"}'>
                            index.html
                          </li>
                          <li data-jstree='{"icon" : "fab fa-html5"}'>
                            page-one.html
                          </li>
                          <li data-jstree='{"icon" : "fab fa-html5"}'>
                            page-two.html
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Basic Tree */}
                {/* Custom Icons Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Custom Icons</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-custom-icons" />
                    </div>
                  </div>
                </div>
                {/*/ Custom Icons Tree */}
              </div>
            </section>
            <section className="context-drag-drop-tree">
              <div className="row">
                {/* Context Menu Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Context Menu</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-context-menu" />
                    </div>
                  </div>
                </div>
                {/*/ Context Menu Tree */}
                {/* Drag & Drop Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Drag &amp; Drop</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-drag-drop" />
                    </div>
                  </div>
                </div>
                {/*/ Drag & Drop Tree */}
              </div>
            </section>
            <section className="context-drag-drop-tree">
              <div className="row">
                {/* Checkbox Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Checkbox</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-checkbox" />
                    </div>
                  </div>
                </div>
                {/*/ Checkbox Tree */}
                {/* Ajax Tree */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Ajax</h4>
                    </div>
                    <div className="card-body">
                      <div id="jstree-ajax" />
                    </div>
                  </div>
                </div>
                {/*/ Ajax Tree */}
              </div>
            </section>
            {/*/ Tree section */}
          </div>
        </div>
      </div>
    </>
  );
}
