"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
     {/* BEGIN: Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* BEGIN: Page Vendor JS */}
<Script src="/app-assets/vendors/js/extensions/swiper.min.js" strategy="afterInteractive" />

{/* BEGIN: Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* BEGIN: Page JS */}
<Script src="/app-assets/js/scripts/extensions/ext-component-swiper.js" strategy="afterInteractive" />
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">Swiper</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Extensions</a>
                </li>
                <li className="breadcrumb-item active">Swiper</li>
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
      {/* default swiper */}
      <section id="component-swiper-default">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Default</h4>
          </div>
          <div className="card-body">
            <div className="swiper-default swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-1.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-2.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-4.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-13.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ default swiper */}
      {/* navigation swiper */}
      <section id="component-swiper-navigations">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Navigations</h4>
          </div>
          <div className="card-body">
            <div className="swiper-navigations swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-4.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-14.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-3.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-2.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ navigations swiper */}
      {/* pagination swiper */}
      <section id="component-swiper-pagination">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Pagination</h4>
          </div>
          <div className="card-body">
            <div className="swiper-paginations swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-12.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-9.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-8.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-20.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/*/ pagination swiper */}
      {/* progress swiper */}
      <section id="component-swiper-progress">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Progress</h4>
          </div>
          <div className="card-body">
            <div className="swiper-progress swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-8.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-20.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-5.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-4.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ progress swiper */}
      {/* Multiple Slides Per View swiper */}
      <section id="component-swiper-multiple">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Multiple Slides Per View</h4>
          </div>
          <div className="card-body">
            <div className="swiper-multiple swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-31.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-32.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-33.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-34.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-35.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/*/ Multiple Slides Per View swiper */}
      {/* Multi row Slides Per View swiper */}
      <section id="component-swiper-multi-row">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Multi Row Slides Layout</h4>
          </div>
          <div className="card-body">
            <div className="swiper-multi-row swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-26.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-39.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-28.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-29.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-30.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-31.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-32.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-33.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-34.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-35.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/*/ Multi row Slides Per View swiper */}
      {/* centered-slides swiper option-1 */}
      <section id="component-swiper-centered-slides">
        <div className="card bg-transparent shadow-none">
          <div className="card-header">
            <h4 className="card-title">Centered Slides option-1</h4>
          </div>
          <div className="card-body">
            <div className="swiper-centered-slides swiper-container p-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide rounded swiper-shadow">
                  <i data-feather="play" className="font-large-1" />
                  <div className="swiper-text pt-md-1 pt-sm-50">
                    Getting Started
                  </div>
                </div>
                <div className="swiper-slide rounded swiper-shadow">
                  <i data-feather="dollar-sign" className="font-large-1" />
                  <div className="swiper-text pt-md-1 pt-sm-50">
                    Pricing &amp; Plans
                  </div>
                </div>
                <div className="swiper-slide rounded swiper-shadow">
                  <i data-feather="help-circle" className="font-large-1" />
                  <div className="swiper-text pt-md-1 pt-sm-50">
                    Sales Question
                  </div>
                </div>
                <div className="swiper-slide rounded swiper-shadow">
                  <i data-feather="file-text" className="font-large-1" />
                  <div className="swiper-text pt-md-1 pt-sm-50">
                    Usage Guides
                  </div>
                </div>
                <div className="swiper-slide rounded swiper-shadow">
                  <i data-feather="archive" className="font-large-1" />
                  <div className="swiper-text pt-md-1 pt-sm-50">
                    General Guide
                  </div>
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ centered-slides swiper option-1 */}
      {/* centered-slides option-2 swiper */}
      <section id="component-swiper-centered-slides-2">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Centered Slides option-2</h4>
          </div>
          <div className="card-body">
            <div className="swiper-centered-slides-2 swiper-container p-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide rounded swiper-shadow py-1 px-3 d-flex">
                  <i data-feather="play" className="me-50 font-medium-3" />
                  <div className="swiper-text">Getting Started</div>
                </div>
                <div className="swiper-slide rounded swiper-shadow py-1 px-3 d-flex">
                  <i
                    data-feather="dollar-sign"
                    className="me-50 font-medium-3"
                  />
                  <div className="swiper-text">Pricing &amp; Plans</div>
                </div>
                <div className="swiper-slide rounded swiper-shadow py-1 px-3 d-flex">
                  <i
                    data-feather="help-circle"
                    className="me-50 font-medium-3"
                  />
                  <div className="swiper-text">Sales Question</div>
                </div>
                <div className="swiper-slide rounded swiper-shadow py-1 px-3 d-flex">
                  <i data-feather="file-text" className="me-50 font-medium-3" />
                  <div className="swiper-text">Usage Guides</div>
                </div>
                <div className="swiper-slide rounded swiper-shadow py-1 px-3 d-flex">
                  <i data-feather="archive" className="me-50 font-medium-3" />
                  <div className="swiper-text">General Guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ centered-slides option-2 swiper */}
      {/* Fade Effect swiper */}
      <section id="component-swiper-fade-effect">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Fade Effect</h4>
          </div>
          <div className="card-body">
            <div className="swiper-fade-effect swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-20.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-19.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-18.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-17.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-16.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination swiper-pagination-white" />
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ Fade Effect swiper */}
      {/* 3d cube effect swiper */}
      <section id="component-swiper-cube-effect">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">3-D cube Effect</h4>
          </div>
          <div className="card-body">
            <div className="swiper-cube-effect swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-21.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-22.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-23.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-24.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination swiper-pagination-white" />
            </div>
          </div>
        </div>
      </section>
      {/*/ 3d cube effect swiper */}
      {/* coverflow effect swiper */}
      <section id="component-swiper-coverflow">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">3d Effect Coverflow Effect</h4>
          </div>
          <div className="card-body">
            <div className="swiper-coverflow swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-35.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-39.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-38.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-37.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-36.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-34.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-33.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-32.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-31.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/*/ coverflow effect swiper */}
      {/* autoplay swiper */}
      <section id="component-swiper-autoplay">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Autoplay</h4>
          </div>
          <div className="card-body">
            <div className="swiper-autoplay swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-20.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-8.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-9.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-10.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-11.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ autoplay swiper */}
      {/* gallery swiper */}
      <section id="component-swiper-gallery">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Gallery</h4>
          </div>
          <div className="card-body">
            <div className="swiper-gallery swiper-container gallery-top">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-11.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-12.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-13.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-14.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-15.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
            <div className="swiper-container gallery-thumbs">
              <div className="swiper-wrapper mt-25">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-11.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-12.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-13.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-14.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-15.jpg"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ gallery swiper */}
      {/* parallax swiper */}
      <section id="component-swiper-parallax">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Parallax</h4>
          </div>
          <div className="card-body">
            {/* Swiper */}
            <div className="swiper-parallax swiper-container">
              <div className="parallax-bg" data-swiper-parallax="-23%">
                <img
                  className="img-fluid"
                  src="../../../app-assets/images/banner/parallax-4.jpg"
                  alt="banner"
                />
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="title" data-swiper-parallax={-300}>
                    Slide 1
                  </div>
                  <div className="subtitle" data-swiper-parallax={-200}>
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax={-100}>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam dictum mattis velit, sit amet faucibus felis
                      iaculis nec. Nulla laoreet Lorem, ipsum dolor sit amet
                      consectetur..
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="title"
                    data-swiper-parallax={-300}
                    data-swiper-parallax-opacity={0}
                  >
                    Slide 2
                  </div>
                  <div className="subtitle" data-swiper-parallax={-200}>
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax={-100}>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam dictum mattis velit, sit amet faucibus felis
                      iaculis nec. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Veniam reiciendis provident atque quod
                      obcaecati voluptatibus ex qui repudiandae sunt dolores.
                      Nulla laoreet justo vitae porttitor porttitor. Suspendisse
                      in sem justo. Integeo. Aenean feugiat non eros quis
                      feugiat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="title" data-swiper-parallax={-300}>
                    Slide 3
                  </div>
                  <div className="subtitle" data-swiper-parallax={-200}>
                    Subtitle
                  </div>
                  <div className="text" data-swiper-parallax={-100}>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam dictum mattis velit, sit amet faucibus felis
                      iaculis nec. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Veniam reiciendis provident atque quod
                      obcaecati voluptatibus ex qui repudiandae sunt dolores.
                      Nulla laoreet justo vitae porttitor porttitor. Suspendisse
                      in sem justo. Integer laoreet magna nec elit suscipit, ac
                      laoreet nibh euismod. Aliquam hendrerit lnt ut libero.
                      Aenean feugiat non eros quis feugiat.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Navigation */}
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
          </div>
        </div>
      </section>
      {/*/ parallax swiper */}
      {/* Lazy loading swiper */}
      <section id="component-swiper-lazy">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Lazy Loading</h4>
          </div>
          <div className="card-body">
            <div className="swiper-lazy-loading swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {/* Required swiper-lazy class and image source specified in data-src attribute */}
                  <img
                    src="../../../app-assets/images/banner/banner-9.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  {/* Preloader image */}
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../../../app-assets/images/banner/banner-8.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../../../app-assets/images/banner/banner-7.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../../../app-assets/images/banner/banner-20.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../../../app-assets/images/banner/banner-5.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../../../app-assets/images/banner/banner-4.jpg"
                    className="swiper-lazy img-fluid"
                    alt="banner"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination swiper-pagination-white" />
              {/* Navigation */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      {/*/ Lazy loading swiper */}
      {/* Responsive Breakpoints swiper */}
      <section id="component-swiper-responsive-breakpoints">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Responsive Breakpoints</h4>
          </div>
          <div className="card-body">
            <div className="swiper-responsive-breakpoints swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-30.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-31.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-32.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-33.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-34.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-35.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-36.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-37.jpg"
                    alt="banner"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="../../../app-assets/images/banner/banner-38.jpg"
                    alt="banner"
                  />
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/*/ Responsive Breakpoints swiper */}
      {/* virtual slides swiper */}
      <section id="component-swiper-virtual">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Virtual Slides</h4>
          </div>
          <div className="card-body">
            {/* Swiper */}
            <div className="swiper-virtual swiper-container">
              <div className="swiper-wrapper" />
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
            <div className="demo-inline-spacing justify-content-center">
              <button className="btn btn-outline-primary prepend-2-slides font-small-3">
                Prepend 2 Slides
              </button>
              <button className="btn btn-outline-primary slide-1 font-small-3">
                Slide 1
              </button>
              <button className="btn btn-outline-primary slide-250 font-small-3">
                Slide 250
              </button>
              <button className="btn btn-outline-primary slide-500 font-small-3">
                Slide 500
              </button>
              <button className="btn btn-outline-primary append-slide font-small-3">
                Append Slide
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*/ virtual slides swiper */}
    </div>
  </div>
</div>

    </>
  )
}
