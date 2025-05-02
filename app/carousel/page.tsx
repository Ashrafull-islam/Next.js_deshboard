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
                    Carousel
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Carousel</li>
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
            {/* Basic Carousel And Optional Carousel start */}
            <section id="basic-carousel">
              <div className="row">
                <div className="col-12 my-1">
                  <div className="alert alert-info">
                    <div className="alert-body d-flex align-items-center">
                      <i data-feather="info" className="me-50" />
                      <span>Nested carousels are not supported.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Example</h4>
                    </div>
                    <div className="card-body">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="../../../app-assets/images/slider/02.jpg"
                              className="d-block w-100"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../../app-assets/images/slider/03.jpg"
                              className="d-block w-100"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../../app-assets/images/slider/01.jpg"
                              className="d-block w-100"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Optional captions</h4>
                    </div>
                    <div className="card-body">
                      <div
                        id="carousel-example-caption"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carousel-example-caption"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carousel-example-caption"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carousel-example-caption"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/09.jpg"
                              alt="First slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h3 className="text-white">First Slide Label</h3>
                              <p className="text-white">
                                Donut jujubes I love topping I love sweet.
                                Jujubes I love brownie gummi bears I love donut
                                sweet chocolate. Tart chocolate marshmallow.Tart
                                carrot cake muffin.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/08.jpg"
                              alt="Second slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h3 className="text-white">Second Slide Label</h3>
                              <p className="text-white">
                                Tart macaroon marzipan I love soufflé apple pie
                                wafer. Chocolate bar jelly caramels jujubes
                                chocolate cake gummies. Cupcake cake I love cake
                                danish carrot cake.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/10.jpg"
                              alt="Third slide"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h3 className="text-white">Third Slide Label</h3>
                              <p className="text-white">
                                Pudding sweet pie gummies. Chocolate bar sweet
                                tiramisu cheesecake chocolate cotton candy
                                pastry muffin. Marshmallow cake powder icing.
                              </p>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          data-bs-target="#carousel-example-caption"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          data-bs-target="#carousel-example-caption"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Carousel And Optional Carousel start end */}
            {/* Carousel Options start */}
            <section id="carousel-options">
              <div className="row match-height">
                {/* Interval Option starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Interval Option</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The amount of time to delay between automatically
                        cycling an item. If false, carousel will not
                        automatically cycle.Options can be passed via data
                        attributes or JavaScript. For data attributes, append
                        the option name to <code>data-</code>, as in{" "}
                        <code>data-bs-interval=""</code>.
                      </p>
                      <div
                        id="carousel-interval"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval={2000}
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carousel-interval"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carousel-interval"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carousel-interval"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/01.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/03.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/02.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          data-bs-target="#carousel-interval"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          data-bs-target="#carousel-interval"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Interval Option ends */}
                {/* Pause Option starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Pause Option</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        If set to <code>"hover"</code>, pauses the cycling of
                        the carousel on <code>mouseenter</code> and resumes the
                        cycling of the carousel on <code>mouseleave</code>. If
                        set to <code>null</code>, hovering over the carousel
                        won't pause it.
                      </p>
                      <div
                        id="carousel-pause"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-pause="hover"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carousel-pause"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carousel-pause"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carousel-pause"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/06.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/04.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/05.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-pause"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-pause"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pause Option ends */}
              </div>
              <div className="row">
                {/* Wrap Option starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Wrap Option</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Whether the carousel should cycle continuously or have
                        hard stops. [Default: true]
                      </p>
                      <div
                        id="carousel-wrap"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-wrap="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carousel-wrap"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carousel-wrap"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carousel-wrap"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/02.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/04.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/01.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          data-bs-target="#carousel-wrap"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          data-bs-target="#carousel-wrap"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wrap Option ends */}
                {/* Keyboard Option starts */}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Keyboard Option</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Whether the carousel should react to keyboard events.
                        [Default: false]
                      </p>
                      <div
                        id="carousel-keyboard"
                        className="carousel slide"
                        data-bs-keyboard="true"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carousel-keyboard"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carousel-keyboard"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carousel-keyboard"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/03.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/06.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="img-fluid"
                              src="../../../app-assets/images/slider/01.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-keyboard"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-keyboard"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Keyboard Option ends */}
              </div>
            </section>
            {/* Carousel Options end */}
            {/* CrossFade Carousel Start */}
            <section id="carousel-crossfade">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Crossfade</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Add <code>.carousel-fade</code> to your carousel to
                        animate slides with a fade transition instead of a
                        slide.
                      </p>
                      <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="../../../app-assets/images/slider/06.jpg"
                              className="img-fluid d-block w-100"
                              alt="cf-img-1"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../../app-assets/images/slider/02.jpg"
                              className="img-fluid d-block w-100"
                              alt="cf-img-2"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../../app-assets/images/slider/05.jpg"
                              className="img-fluid d-block w-100"
                              alt="cf-img-3"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleFade"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleFade"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Dark variant</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Add <code>.carousel-dark</code> to the{" "}
                        <code>.carousel</code> for darker controls, indicators,
                        and captions.
                      </p>
                      <div
                        id="carouselExampleDark"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval={10000}
                          >
                            <img
                              src="../../../app-assets/images/slider/04.jpg"
                              className="d-block w-100"
                              alt="image1"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>First slide label</h5>
                              <p>
                                Some representative placeholder content for the
                                first slide.
                              </p>
                            </div>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval={2000}
                          >
                            <img
                              src="../../../app-assets/images/slider/06.jpg"
                              className="d-block w-100"
                              alt="image2"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Second slide label</h5>
                              <p>
                                Some representative placeholder content for the
                                second slide.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../../app-assets/images/slider/08.jpg"
                              className="d-block w-100"
                              alt="image3"
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Third slide label</h5>
                              <p>
                                Some representative placeholder content for the
                                third slide.
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* CrossFade Carousel End */}
          </div>
        </div>
      </div>
    </>
  );
}
