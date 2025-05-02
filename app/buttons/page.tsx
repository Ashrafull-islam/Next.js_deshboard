"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

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
            <h2 className="content-header-title float-start mb-0">Buttons</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">Buttons</li>
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
      {/* Filled Buttons start */}
      <section id="basic-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Filled</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Bootstrap includes six predefined button styles, each serving
                  its own semantic purpose.
                </p>
                {/* basic buttons */}
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-dark">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Filled Buttons end */}
      {/* Outline Buttons start */}
      <section id="outline-button">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Border</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use a class{" "}
                  <code>
                    .btn-outline-{"{"}color{"}"}
                  </code>{" "}
                  to quickly create a outline button.
                </p>
                {/* Outline buttons */}
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-outline-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-outline-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-outline-dark">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Outline Buttons end */}
      {/* Flat Buttons start */}
      <section id="flat-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Flat</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use{" "}
                  <code>
                    .btn-flat-{"{"}color{"}"}
                  </code>{" "}
                  to create a flat button
                </p>
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-flat-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-flat-secondary">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-flat-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-flat-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-flat-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-flat-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-flat-dark">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flat Buttons end */}
      {/* Gradient Buttons Start */}
      <section id="gradient-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Gradient</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  use{" "}
                  <code>
                    btn-gradient-{"{"}color{"}"}
                  </code>{" "}
                  create gradient buttons
                </p>
                {/* basic buttons */}
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-gradient-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-gradient-secondary">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-gradient-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-gradient-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-gradient-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-gradient-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-gradient-dark">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gradient Buttons End */}
      {/* Relief Buttons start */}
      <section id="relief-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Relief</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use{" "}
                  <code>
                    .btn-relief-{"{"}color{"}"}
                  </code>{" "}
                  to create a relief button.
                </p>
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-relief-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-relief-secondary">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-relief-success">
                    Success
                  </button>
                  <button type="button" className="btn btn-relief-danger">
                    Danger
                  </button>
                  <button type="button" className="btn btn-relief-warning">
                    Warning
                  </button>
                  <button type="button" className="btn btn-relief-info">
                    Info
                  </button>
                  <button type="button" className="btn btn-relief-dark">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Relief Buttons end */}
      {/* Round Buttons start */}
      <section id="round-outline-button">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Round buttons</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  Use a class <code>.round</code> with outline button class to
                  create round outline button.
                </p>
                {/* Round buttons */}
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-outline-primary round"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary round"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success round"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger round"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning round"
                  >
                    Warning
                  </button>
                  <button type="button" className="btn btn-outline-info round">
                    Info
                  </button>
                  <button type="button" className="btn btn-outline-dark round">
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Round Buttons end */}
      {/* Basic Button Icon start */}
      <section id="basic-button-icons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Icon</h4>
              </div>
              <div className="card-body">
                {/* Buttons with Icon */}
                <div className="demo-inline-spacing">
                  <button type="button" className="btn btn-outline-primary">
                    <i data-feather="home" className="me-25" />
                    <span>Home</span>
                  </button>
                  <button type="button" className="btn btn-warning">
                    <i data-feather="star" className="me-25" />
                    <span>Star</span>
                  </button>
                  <button type="button" className="btn btn-flat-success">
                    <i data-feather="check" className="me-25" />
                    <span>Done</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    disabled={true}
                  >
                    <i data-feather="home" className="me-25" />
                    <span>Home</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Button Icon end */}
      {/* Icon Buttons start */}
      <section id="icon-only-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Icon Only</h4>
              </div>
              <div className="card-body">
                <p className="card-text mb-0">
                  You can use <code>.btn-icon</code>. you can create a rounded
                  button by using
                  <code>.rounded-circle</code> with <code>.btn-icon</code>. You
                  can only use <code>.btn-icon</code> when you only want icon in
                  your button
                </p>
                <div className="demo-inline-spacing">
                  <button
                    type="button"
                    className="btn btn-icon btn-outline-primary"
                  >
                    <i data-feather="search" />
                  </button>
                  <button type="button" className="btn btn-icon btn-warning">
                    <i data-feather="inbox" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-flat-success"
                  >
                    <i data-feather="camera" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-outline-primary"
                    disabled={true}
                  >
                    <i data-feather="search" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon rounded-circle btn-outline-primary"
                  >
                    <i data-feather="search" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-icon rounded-circle btn-warning"
                  >
                    <i data-feather="inbox" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-icon rounded-circle btn-flat-success"
                  >
                    <i data-feather="camera" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-icon btn-icon rounded-circle btn-outline-primary"
                    disabled={true}
                  >
                    <i data-feather="search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Icon Buttons end */}
      {/* Basic Button group start */}
      <section id="basic-button-group">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Button group</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Group a series of buttons together on a single line with the
                  button group. Wrap a series of buttons with
                  <code>.btn</code> in <code>.btn-group</code>.
                </p>
                {/* button group */}
                <div className="row">
                  <div className="col-lg-6 col-12 mb-1 mb-lg-0">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-outline-primary">
                        <i data-feather="facebook" />
                      </button>
                      <button type="button" className="btn btn-outline-primary">
                        <i data-feather="twitter" />
                      </button>
                      <button type="button" className="btn btn-outline-primary">
                        <i data-feather="instagram" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Button group end */}
      {/* Button group checkbox & radio start */}
      <section id="checkbox-radio-button-group">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Checkbox &amp; radio group</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-12 mb-1 mb-lg-0">
                    {/* button group checkbox */}
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck1"
                        defaultChecked={true}
                        autoComplete="off"
                      />
                      <label className="btn btn-primary" htmlFor="btncheck1">
                        Active
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck2"
                        autoComplete="off"
                      />
                      <label className="btn btn-primary" htmlFor="btncheck2">
                        Checkbox
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck3"
                        autoComplete="off"
                      />
                      <label className="btn btn-primary" htmlFor="btncheck3">
                        Checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    {/* button group radio */}
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        defaultChecked={true}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio1"
                      >
                        Active
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio2"
                      >
                        Radio
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio3"
                      >
                        Radio
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Button group checkbox & radio end */}
      {/* Sizes start */}
      <section id="sizes-2">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Sizes</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-1 mb-md-0">
                    <p className="card-text mb-0">
                      Add <code>.btn-lg</code> or <code>.btn-sm</code> for Fancy
                      larger or smaller buttons size.
                    </p>
                    {/* simple sizes */}
                    <div className="demo-inline-spacing">
                      <button type="button" className="btn btn-primary btn-lg">
                        Large
                      </button>
                      <button type="button" className="btn btn-primary">
                        Default
                      </button>
                      <button type="button" className="btn btn-primary btn-sm">
                        Small
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <p className="card-text mb-0">
                      Add <code>.btn-lg</code> or <code>.btn-sm</code> with{" "}
                      <code>.btn-outline-*</code> for outline btn in different
                      sizes
                    </p>
                    <div className="demo-inline-spacing">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                      >
                        Large
                      </button>
                      <button type="button" className="btn btn-outline-primary">
                        Default
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Small
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sizes end */}
      {/* Block level buttons start */}
      <section id="block-level-buttons">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Block level buttons</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Create block level buttons with a mix of our display and gap
                  utilities.
                </p>
                <div className="row">
                  <div className="d-grid col-lg-6 col-md-12 mb-1 mb-lg-0">
                    <button type="button" className="btn btn-primary">
                      Block level button
                    </button>
                  </div>
                  <div className="d-grid col-lg-6 col-md-12">
                    <button type="button" className="btn btn-outline-primary">
                      Block level button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Block level buttons end */}
      {/* Button tags start */}
      <section id="button-tags">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button tags</h4>
              </div>
              <div className="card-body">
                {/* anchor, button tag, input button, input submit Tags */}
                <p className="card-text mb-0">
                  The <code>.btn</code> classes are designed to be used with the{" "}
                  <code>&lt;button&gt;</code> element. However, you can also use
                  these classes on <code>&lt;a&gt;</code> or{" "}
                  <code>&lt;input&gt;</code> elements.
                </p>
                <div className="demo-inline-spacing">
                  <a
                    className="btn btn-primary"
                    href="https://pixinvent.com/"
                    role="button"
                    target="_blank"
                  >
                    Link
                  </a>
                  <button className="btn btn-primary" type="submit">
                    Button
                  </button>
                  <input
                    className="btn btn-primary"
                    type="button"
                    defaultValue="Input"
                  />
                  <input
                    className="btn btn-primary"
                    type="submit"
                    defaultValue="Submit"
                  />
                  <input
                    className="btn btn-primary"
                    type="reset"
                    defaultValue="Reset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Button tags end */}
    </div>
  </div>
</div>

    </>
  )
}
