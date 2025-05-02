"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
     {/* BEGIN: Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* BEGIN: Page Vendor JS */}
<Script src="/app-assets/vendors/js/pickers/pickadate/picker.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/pickers/pickadate/picker.date.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/pickers/pickadate/picker.time.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/pickers/pickadate/legacy.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js" strategy="afterInteractive" />

{/* BEGIN: Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* BEGIN: Page JS */}
<Script src="/app-assets/js/scripts/forms/pickers/form-pickers.js" strategy="afterInteractive" />
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">
              Date &amp; Time Picker
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Form Elements</a>
                </li>
                <li className="breadcrumb-item active">
                  Date &amp; Time Picker
                </li>
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
      {/* Flatpickr Starts */}
      <section id="flatpickr">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Flatpickr</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-default">
                  Default
                </label>
                <input
                  type="text"
                  id="fp-default"
                  className="form-control flatpickr-basic"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-time">
                  Time picker
                </label>
                <input
                  type="text"
                  id="fp-time"
                  className="form-control flatpickr-time text-start"
                  placeholder="HH:MM"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-date-time">
                  Date &amp; TIme
                </label>
                <input
                  type="text"
                  id="fp-date-time"
                  className="form-control flatpickr-date-time"
                  placeholder="YYYY-MM-DD HH:MM"
                />
              </div>
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-multiple">
                  Multiple Dates
                </label>
                <input
                  type="text"
                  id="fp-multiple"
                  className="form-control flatpickr-multiple"
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-range">
                  Range
                </label>
                <input
                  type="text"
                  id="fp-range"
                  className="form-control flatpickr-range"
                  placeholder="YYYY-MM-DD to YYYY-MM-DD"
                />
              </div>
              <div className="col-md-6 mb-1">
                <label className="form-label" htmlFor="fp-human-friendly">
                  Human Friendly
                </label>
                <input
                  type="text"
                  id="fp-human-friendly"
                  className="form-control flatpickr-human-friendly"
                  placeholder="October 14, 2020"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <label className="form-label">Disabled Range</label>
                <input
                  type="text"
                  className="form-control flatpickr-disabled-range"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="col-md-6 mb-1">
                <label className="form-label">Inline</label>
                <input
                  type="text"
                  className="form-control flatpickr-inline"
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flatpickr Ends*/}
      {/* Pick-A-Date Picker start */}
      <section id="pick-a-date">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Pick a date</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Use <code>position-relative</code> class as wrapper of input. The
              basic setup requires targeting an
              <code>input</code> element and invoking the picker.
            </p>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-default">
                  Default
                </label>
                <input
                  type="text"
                  id="pd-default"
                  className="form-control pickadate"
                  placeholder="18 June, 2020"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-format">
                  Format Date Picker
                </label>
                <input
                  type="text"
                  id="pd-format"
                  className="form-control format-picker"
                  placeholder="18 June, 2020"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-minmax">
                  Min-Max Date Range
                </label>
                <input
                  type="text"
                  id="pd-minmax"
                  className="form-control pickadate-limits"
                  placeholder="18 June, 2020"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-minmax">
                  Translation
                </label>
                <input
                  type="text"
                  className="form-control pickadate-translations"
                  placeholder="18 June, 2020"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-short-string">
                  Pick-a-date with short string
                </label>
                <input
                  type="text"
                  id="pd-short-string"
                  className="form-control pickadate-short-string"
                  placeholder="18 June, 2020"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-firstday">
                  Change First Weekday
                </label>
                <input
                  type="text"
                  id="pd-firstday"
                  className="form-control pickadate-firstday"
                  placeholder="18 June, 2020"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-months-year">
                  Select Month &amp; Year
                </label>
                <input
                  type="text"
                  id="pd-months-year"
                  className="form-control pickadate-months-year"
                  placeholder="18 June, 2020"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pd-disable">
                  Disabled Dates &amp; Weeks
                </label>
                <input
                  type="text"
                  id="pd-disable"
                  className="form-control pickadate-disable"
                  placeholder="18 June, 2020"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pick-A-Date Picker end */}
      {/* Pick-A-Time Picker start */}
      <section id="pick-a-time">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Pick a time</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              The mobile-friendly, responsive, and lightweight jQuery time input
              picker.
            </p>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-default">
                  Default
                </label>
                <input
                  type="text"
                  id="pt-default"
                  className="form-control pickatime"
                  placeholder="8:00 AM"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-format">
                  Change Formats
                </label>
                <input
                  type="text"
                  id="pt-format"
                  className="form-control pickatime-format"
                  placeholder="Time selected: 12.30 a.m."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-formatlabel">
                  Format with Label
                </label>
                <input
                  type="text"
                  id="pt-formatlabel"
                  className="form-control pickatime-formatlabel"
                  placeholder="8:00 AM"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-intervals">
                  Intervals
                </label>
                <input
                  type="text"
                  id="pt-intervals"
                  className="form-control pickatime-intervals"
                  placeholder="8:00 AM"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-disable">
                  Disable set of Time
                </label>
                <input
                  type="text"
                  id="pt-disable"
                  className="form-control pickatime-disable"
                  placeholder="8:00 AM"
                />
              </div>
              <div className="col-12 col-md-6 mb-1 position-relative">
                <label className="form-label" htmlFor="pt-min-max">
                  Minimum and maximum time range
                </label>
                <input
                  type="text"
                  id="pt-min-max"
                  className="form-control pickatime-min-max"
                  placeholder="8:00 AM"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pick-A-Time Picker end */}
    </div>
  </div>
</div>

    </>
  )
}
