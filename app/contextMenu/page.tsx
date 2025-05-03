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
                    Context Menu
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Context Menu</li>
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
            {/* context-menu */}
            <section id="context-menu">
              <div className="row">
                {/* Basic context menu */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Menu</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To create a basic context menu use{" "}
                        <code>$.contextMenu()</code> and the add your target
                        with
                        <code>
                          {"{"}selector: "myId"{"}"}
                        </code>{" "}
                        and then create your items for menu with
                        <code>
                          {"{"}items:{"{"}"name" : "item 1"{"}"}
                          {"}"}
                        </code>
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="basic-context-menu"
                      >
                        Right Click On Me
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ Basic context menu */}
                {/* left click context menu */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Left Click</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To create a context menu which pops up on left click use{" "}
                        <code>
                          {"{"}trigger : "left"{"}"}
                        </code>
                        .
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="left-click-context-menu"
                      >
                        Left Click On Me
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ left click context menu */}
                {/* submenu context menu */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Submenu</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You can create context menu with sub menus by using{" "}
                        <code>
                          {"{"}fold{"}"}
                        </code>{" "}
                        and adding menu items inside of it.
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="submenu-context-menu"
                      >
                        With Submenu
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ submenu context menu */}
                {/* hover context menu */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Hover</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To create a context menu which pops on hover use{" "}
                        <code>
                          {"{"}trigger : true{"}"}
                        </code>
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="hover-context-menu"
                      >
                        Hover Over Me
                      </button>
                    </div>
                  </div>
                </div>
                {/*/ hover context menu */}
              </div>
            </section>
            {/*/ context-menu */}
          </div>
        </div>
      </div>
    </>
  );
}
