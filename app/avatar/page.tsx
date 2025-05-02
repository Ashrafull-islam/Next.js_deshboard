"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="beforeInteractive"
      />

      {/* Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="lazyOnload" />
      <Script src="/app-assets/js/core/app.js" strategy="lazyOnload" />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Avatar
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Avatar</li>
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
            {/* Avatar Sizes Starts */}
            <section id="default-avatar-sizes">
              <div className="row match-height">
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizes</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        For default avatar, You have to use inline{" "}
                        <code>attributes</code> to set height and width of
                        image. Use class{" "}
                        <code>
                          .avatar-{"{"}sm|lg|xl{"}"}
                        </code>{" "}
                        to modify size of your avatar.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar avatar-sm">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="avatar avatar-lg">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="avatar avatar-xl">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Avatar Sizes Ends */}
                {/* Avatar Content/Initials Starts */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Initials</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Wrap your content with <code>.avatar</code> class and
                        wrap your text in <code>.avatar-content</code> to create
                        a avatar with initials. You can also use solid color
                        initials.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar bg-light-primary avatar-sm">
                          <span className="avatar-content">PI</span>
                        </div>
                        <div className="avatar bg-light-secondary">
                          <span className="avatar-content">PI</span>
                        </div>
                        <div className="avatar bg-light-success avatar-lg">
                          <span className="avatar-content">PI</span>
                        </div>
                        <div className="avatar bg-light-danger avatar-xl">
                          <span className="avatar-content">PI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Avatar Content/Initials Ends */}
            {/* Avatar Colors Starts*/}
            <section id="avatar-colors">
              <div className="row match-height">
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Colors</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use class{" "}
                        <code>
                          bg-{"{"}color-name{"}"}
                        </code>{" "}
                        to change background color of your avatar.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar bg-primary">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-secondary">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-success">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-danger">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-warning">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-info">
                          <div className="avatar-content">PI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Avatar Colors Ends */}
                {/* Avatar Light Colors Starts*/}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Light Colors</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use class{" "}
                        <code>
                          bg-light-{"{"}color-name{"}"}
                        </code>{" "}
                        to change background color of your avatar.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar bg-light-primary">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-light-secondary">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-light-success">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-light-danger">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-light-warning">
                          <div className="avatar-content">PI</div>
                        </div>
                        <div className="avatar bg-light-info">
                          <div className="avatar-content">PI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Avatar Light Colors Ends */}
            {/* Avatar Icons Starts */}
            <section id="avatar-icons-status">
              <div className="row match-height">
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Icons</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use <code>.avatar-icon</code> class for Icon variant
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar bg-primary">
                          <div className="avatar-content">
                            <i
                              data-feather="calendar"
                              className="avatar-icon"
                            />
                          </div>
                        </div>
                        <div className="avatar bg-secondary">
                          <div className="avatar-content">
                            <i data-feather="github" className="avatar-icon" />
                          </div>
                        </div>
                        <div className="avatar bg-success">
                          <div className="avatar-content">
                            <i data-feather="inbox" className="avatar-icon" />
                          </div>
                        </div>
                        <div className="avatar bg-light-danger">
                          <div className="avatar-content">
                            <i data-feather="camera" className="avatar-icon" />
                          </div>
                        </div>
                        <div className="avatar bg-light-warning">
                          <div className="avatar-content">
                            <i data-feather="award" className="avatar-icon" />
                          </div>
                        </div>
                        <div className="avatar bg-light-info">
                          <div className="avatar-content">
                            <i data-feather="star" className="avatar-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Avatar Icons Ends */}
                {/* Avatar Status Starts */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Status</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text mb-0">
                        Use class{" "}
                        <code>
                          .avatar-status-{"{"}online | offline | away | busy
                          {"}"}
                        </code>{" "}
                        after <code>.avatar-content</code>.
                      </p>
                      <div className="demo-inline-spacing">
                        <div className="avatar">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                          <span className="avatar-status-offline" />
                        </div>
                        <div className="avatar bg-info">
                          <span className="avatar-content">BV</span>
                          <span className="avatar-status-busy" />
                        </div>
                        <div className="avatar bg-light-primary">
                          <span className="avatar-content">
                            <i data-feather="github" className="avatar-icon" />
                          </span>
                          <span className="avatar-status-away" />
                        </div>
                        <div className="avatar bg-light-success">
                          <span className="avatar-content">AB</span>
                          <span className="avatar-status-online" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Avatar Status Ends */}
            {/* Avatar Group Starts */}
            <section id="avatar-group">
              <div className="row match-height">
                {/* Avatar Group */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Avatar Group</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Wrap bunch of avatars with <code>.avatar-group</code>{" "}
                        class.
                      </p>
                      <div className="avatar-group">
                        <div className="avatar pull-up">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div className="avatar pull-up">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div className="avatar pull-up">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-10.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div className="avatar pull-up">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div className="avatar pull-up">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Avatar Group Ends */}
                {/* Avatar Group with tooltip */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Avatar Group with tooltip</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Avatar info inside tooltip variant
                      </p>
                      <div className="avatar-group">
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          title="Vinnie Mostowy"
                          className="avatar pull-up"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          title="Elicia Rieske"
                          className="avatar pull-up"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          title="Julee Rossignol"
                          className="avatar pull-up"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-10.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          title="Darcey Nooner"
                          className="avatar pull-up"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          title="Jenny Looper"
                          className="avatar pull-up"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-20.jpg"
                            alt="Avatar"
                            height={32}
                            width={32}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Avatar Group with tooltip */}
              </div>
            </section>
            {/* Avatar Group Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
