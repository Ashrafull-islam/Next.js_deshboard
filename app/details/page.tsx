"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Page Vendor JS */}
<Script src="/app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/swiper.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/toastr.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/app-ecommerce-details.js" strategy="afterInteractive" />
<Script src="/app-assets/js/scripts/forms/form-number-input.js" strategy="afterInteractive" />

        <div className="app-content content ecommerce-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">
              Product Details
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">eCommerce</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="app-ecommerce-shop.html">Shop</a>
                </li>
                <li className="breadcrumb-item active">Details</li>
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
      {/* app e-commerce details start */}
      <section className="app-ecommerce-details">
        <div className="card">
          {/* Product Details starts */}
          <div className="card-body">
            <div className="row my-2">
              <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="../../../app-assets/images/pages/eCommerce/1.png"
                    className="img-fluid product-img"
                    alt="product image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7">
                <h4>Apple Watch Series 5</h4>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
                <div className="ecommerce-details-price d-flex flex-wrap mt-1">
                  <h4 className="item-price me-1">$499.99</h4>
                  <ul className="unstyled-list list-inline ps-1 border-start">
                    <li className="ratings-list-item">
                      <i data-feather="star" className="filled-star" />
                    </li>
                    <li className="ratings-list-item">
                      <i data-feather="star" className="filled-star" />
                    </li>
                    <li className="ratings-list-item">
                      <i data-feather="star" className="filled-star" />
                    </li>
                    <li className="ratings-list-item">
                      <i data-feather="star" className="filled-star" />
                    </li>
                    <li className="ratings-list-item">
                      <i data-feather="star" className="unfilled-star" />
                    </li>
                  </ul>
                </div>
                <p className="card-text">
                  Available - <span className="text-success">In stock</span>
                </p>
                <p className="card-text">
                  GPS, Always-On Retina display, 30% larger screen, Swimproof,
                  ECG app, Electrical and optical heart sensors, Built-in
                  compass, Elevation, Emergency SOS, Fall Detection, S5 SiP with
                  up to 2x faster 64-bit dual-core processor, watchOS 6 with
                  Activity trends, cycle tracking, hearing health innovations,
                  and the App Store on your wrist
                </p>
                <ul className="product-features list-unstyled">
                  <li>
                    <i data-feather="shopping-cart" />{" "}
                    <span>Free Shipping</span>
                  </li>
                  <li>
                    <i data-feather="dollar-sign" />
                    <span>EMI options available</span>
                  </li>
                </ul>
                <hr />
                <div className="product-color-options">
                  <h6>Colors</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block selected">
                      <div className="color-option b-primary">
                        <div className="filloption bg-primary" />
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="color-option b-success">
                        <div className="filloption bg-success" />
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="color-option b-danger">
                        <div className="filloption bg-danger" />
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="color-option b-warning">
                        <div className="filloption bg-warning" />
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="color-option b-info">
                        <div className="filloption bg-info" />
                      </div>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="d-flex flex-column flex-sm-row pt-1">
                  <a
                    href="#"
                    className="btn btn-primary btn-cart me-0 me-sm-1 mb-1 mb-sm-0"
                  >
                    <i data-feather="shopping-cart" className="me-50" />
                    <span className="add-to-cart">Add to cart</span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-secondary btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0"
                  >
                    <i data-feather="heart" className="me-50" />
                    <span>Wishlist</span>
                  </a>
                  <div className="btn-group dropdown-icon-wrapper btn-share">
                    <button
                      type="button"
                      className="btn btn-icon hide-arrow btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i data-feather="share-2" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item">
                        <i data-feather="facebook" />
                      </a>
                      <a href="#" className="dropdown-item">
                        <i data-feather="twitter" />
                      </a>
                      <a href="#" className="dropdown-item">
                        <i data-feather="youtube" />
                      </a>
                      <a href="#" className="dropdown-item">
                        <i data-feather="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Details ends */}
          {/* Item features starts */}
          <div className="item-features">
            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto">
                  <i data-feather="award" />
                  <h4 className="mt-2 mb-1">100% Original</h4>
                  <p className="card-text">
                    Chocolate bar candy canes ice cream toffee. Croissant pie
                    cookie halvah.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto">
                  <i data-feather="clock" />
                  <h4 className="mt-2 mb-1">10 Day Replacement</h4>
                  <p className="card-text">
                    Marshmallow biscuit donut dragée fruitcake. Jujubes wafer
                    cupcake.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto">
                  <i data-feather="shield" />
                  <h4 className="mt-2 mb-1">1 Year Warranty</h4>
                  <p className="card-text">
                    Cotton candy gingerbread cake I love sugar plum I love sweet
                    croissant.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Item features ends */}
          {/* Related Products starts */}
          <div className="card-body">
            <div className="mt-4 mb-2 text-center">
              <h4>Related Products</h4>
              <p className="card-text">People also search for this items</p>
            </div>
            <div className="swiper-responsive-breakpoints swiper-container px-4 py-2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#">
                    <div className="item-heading">
                      <h5 className="text-truncate mb-0">
                        Apple Watch Series 6
                      </h5>
                      <small className="text-body">by Apple</small>
                    </div>
                    <div className="img-container w-50 mx-auto py-75">
                      <img
                        src="../../../app-assets/images/elements/apple-watch.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="item-meta">
                      <ul className="unstyled-list list-inline mb-25">
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                      </ul>
                      <p className="card-text text-primary mb-0">$399.98</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="item-heading">
                      <h5 className="text-truncate mb-0">
                        Apple MacBook Pro - Silver
                      </h5>
                      <small className="text-body">by Apple</small>
                    </div>
                    <div className="img-container w-50 mx-auto py-50">
                      <img
                        src="../../../app-assets/images/elements/macbook-pro.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="item-meta">
                      <ul className="unstyled-list list-inline mb-25">
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                      </ul>
                      <p className="card-text text-primary mb-0">$2449.49</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="item-heading">
                      <h5 className="text-truncate mb-0">
                        Apple HomePod (Space Grey)
                      </h5>
                      <small className="text-body">by Apple</small>
                    </div>
                    <div className="img-container w-50 mx-auto py-75">
                      <img
                        src="../../../app-assets/images/elements/homepod.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="item-meta">
                      <ul className="unstyled-list list-inline mb-25">
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                      </ul>
                      <p className="card-text text-primary mb-0">$229.29</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="item-heading">
                      <h5 className="text-truncate mb-0">
                        Magic Mouse 2 - Black
                      </h5>
                      <small className="text-body">by Apple</small>
                    </div>
                    <div className="img-container w-50 mx-auto py-75">
                      <img
                        src="../../../app-assets/images/elements/magic-mouse.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="item-meta">
                      <ul className="unstyled-list list-inline mb-25">
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                      </ul>
                      <p className="card-text text-primary mb-0">$90.98</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="item-heading">
                      <h5 className="text-truncate mb-0">iPhone 12 Pro</h5>
                      <small className="text-body">by Apple</small>
                    </div>
                    <div className="img-container w-50 mx-auto py-75">
                      <img
                        src="../../../app-assets/images/elements/iphone-x.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="item-meta">
                      <ul className="unstyled-list list-inline mb-25">
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="filled-star" />
                        </li>
                        <li className="ratings-list-item">
                          <i data-feather="star" className="unfilled-star" />
                        </li>
                      </ul>
                      <p className="card-text text-primary mb-0">$1559.99</p>
                    </div>
                  </a>
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
          {/* Related Products ends */}
        </div>
      </section>
      {/* app e-commerce details end */}
    </div>
  </div>
</div>

    </>
  )
}
