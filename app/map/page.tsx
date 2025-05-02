"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
    {/* BEGIN: Vendor JS */}
    <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* BEGIN: Page Vendor JS */}
<Script src="/app-assets/vendors/js/maps/leaflet.min.js" strategy="afterInteractive" />

{/* BEGIN: Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* BEGIN: Page JS */}
<Script src="/app-assets/js/scripts/maps/map-leaflet.js" strategy="afterInteractive" />
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">
              Leaflet Maps
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Maps</a>
                </li>
                <li className="breadcrumb-item active">Leaflet Maps</li>
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
      <section className="maps-leaflet">
        <div className="row">
          {/* Basic Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Basic Map</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="basic-map" />
              </div>
            </div>
          </div>
          {/* /Basic Ends */}
          {/* Marker Circle & Polygon Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Marker Circle &amp; Polygon</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="shape-map" />
              </div>
            </div>
          </div>
          {/* /Marker Circle & Polygon Ends */}
          {/* Draggable Marker With Popup Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Draggable Marker With Popup</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="drag-map" />
              </div>
            </div>
          </div>
          {/* /Draggable Marker With Popup Ends */}
          {/* User Location Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">User Location</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="user-location" />
              </div>
            </div>
          </div>
          {/* /User Location Ends */}
          {/* Custom Icons Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">Custom Icons</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="custom-icons" />
              </div>
            </div>
          </div>
          {/* /Custom Icons Ends */}
          {/* GeoJson Starts */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4 className="card-title">GeoJson</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="geojson" />
              </div>
            </div>
          </div>
          {/* /GeoJson Ends */}
          {/* Layer Control Starts */}
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Layer Control</h4>
              </div>
              <div className="card-body">
                <div className="leaflet-map" id="layer-control" />
              </div>
            </div>
          </div>
          {/* /Layer Control Ends */}
        </div>
      </section>
    </div>
  </div>
</div>

    </>
  )
}
