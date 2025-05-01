"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Page Vendor JS */}
<Script src="/app-assets/vendors/js/extensions/wNumb.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/nouislider.min.js" strategy="afterInteractive" />
<Script src="/app-assets/vendors/js/extensions/toastr.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/app-ecommerce.js" strategy="afterInteractive" />

        <div className="app-content content ecommerce-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">Shop</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">eCommerce</a>
                </li>
                <li className="breadcrumb-item active">Shop</li>
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
    <div className="content-detached content-right">
      <div className="content-body">
        {/* E-commerce Content Section Starts */}
        <section id="ecommerce-header">
          <div className="row">
            <div className="col-sm-12">
              <div className="ecommerce-header-items">
                <div className="result-toggler">
                  <button
                    className="navbar-toggler shop-sidebar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                  >
                    <span className="navbar-toggler-icon d-block d-lg-none">
                      <i data-feather="menu" />
                    </span>
                  </button>
                  <div className="search-results">16285 results found</div>
                </div>
                <div className="view-options d-flex">
                  <div className="btn-group dropdown-sort">
                    <button
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="active-sorting">Featured</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Featured
                      </a>
                      <a className="dropdown-item" href="#">
                        Lowest
                      </a>
                      <a className="dropdown-item" href="#">
                        Highest
                      </a>
                    </div>
                  </div>
                  <div className="btn-group" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="radio_options"
                      id="radio_option1"
                      autoComplete="off"
                      defaultChecked=""
                    />
                    <label
                      className="btn btn-icon btn-outline-primary view-btn grid-view-btn"
                      htmlFor="radio_option1"
                    >
                      <i data-feather="grid" className="font-medium-3" />
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="radio_options"
                      id="radio_option2"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-icon btn-outline-primary view-btn list-view-btn"
                      htmlFor="radio_option2"
                    >
                      <i data-feather="list" className="font-medium-3" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* E-commerce Content Section Starts */}
        {/* background Overlay when sidebar is shown  starts*/}
        <div className="body-content-overlay" />
        {/* background Overlay when sidebar is shown  ends*/}
        {/* E-commerce Search Bar Starts */}
        <section id="ecommerce-searchbar" className="ecommerce-searchbar">
          <div className="row mt-1">
            <div className="col-sm-12">
              <div className="input-group input-group-merge">
                <input
                  type="text"
                  className="form-control search-product"
                  id="shop-search"
                  placeholder="Search Product"
                  aria-label="Search..."
                  aria-describedby="shop-search"
                />
                <span className="input-group-text">
                  <i data-feather="search" className="text-muted" />
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* E-commerce Search Bar Ends */}
        {/* E-commerce Products Starts */}
        <section id="ecommerce-products" className="grid-view">
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/1.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                <div>
                  <h6 className="item-price">$339.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  Apple Watch Series 5
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                On Retina display that never sleeps, so it’s easy to see the
                time and other important information, without raising or tapping
                the display. New location features, from a built-in compass to
                current elevation, help users better navigate their day, while
                international emergency calling1 allows customers to call
                emergency services directly from Apple Watch in over 150
                countries, even without iPhone nearby. Apple Watch Series 5 is
                available in a wider range of materials, including aluminium,
                stainless steel, ceramic and an all-new titanium.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$339.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/2.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                </div>
                <div>
                  <h6 className="item-price">$669.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  Apple iPhone 11 (64GB, Black)
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                The Apple iPhone 11 is a great smartphone, which was loaded with
                a lot of quality features. It comes with a waterproof and
                dustproof body which is the key attraction of the device. The
                excellent set of cameras offer excellent images as well as
                capable of recording crisp videos. However, expandable storage
                and a fingerprint scanner would have made it a perfect option to
                go for around this price range.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$699.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" className="text-danger" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/3.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                <div>
                  <div className="item-cost">
                    <h6 className="item-price">$999.99</h6>
                  </div>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  Apple iMac 27-inch
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                The all-in-one for all. If you can dream it, you can do it on
                iMac. It’s beautifully &amp; incredibly intuitive and packed
                with tools that let you take any idea to the next level. And the
                new 27-inch model elevates the experience in way, with faster
                processors and graphics, expanded memory and storage, enhanced
                audio and video capabilities, and an even more stunning Retina
                5K display. It’s the desktop that does it all — better and
                faster than ever.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$999.99</h4>
                  <p className="card-text shipping">
                    <span className="badge rounded-pill badge-light-success">
                      Free Shipping
                    </span>
                  </p>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/4.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$49.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  OneOdio A71 Wired Headphones
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    OneOdio
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                Omnidirectional detachable boom mic upgrades the headphones into
                a professional headset for gaming, business, podcasting and
                taking calls on the go. Better pick up your voice. Control most
                electric devices through voice activation, or schedule a ride
                with Uber and order a pizza. OneOdio A71 Wired Headphones
                voice-controlled device turns any home into a smart device on a
                smartphone or tablet.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$49.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/5.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                <div className="item-cost">
                  <h6 className="item-price">$999.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                MacBook Air is a thin, lightweight laptop from Apple. MacBook
                Air features up to 8GB of memory, a fifth-generation Intel Core
                processor, Thunderbolt 2, great built-in apps, and all-day
                battery life.1 Its thin, light, and durable enough to take
                everywhere you go-and powerful enough to do everything once you
                get there, better.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$999.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" className="text-danger" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/6.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$429.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  {" "}
                  Switch Pro Controller{" "}
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Sharp
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                The Nintendo Switch Pro Controller is one of the priciest
                "baseline" controllers in the current console generation, but
                it's also sturdy, feels good to play with, has an excellent
                direction pad, and features impressive motion sensors and
                vibration systems. On top of all of that, it uses Bluetooth, so
                you don't need an adapter to use it with your PC.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$429.99</h4>
                  <p className="card-text shipping">
                    <span className="badge rounded-pill badge-light-success">
                      Free Shipping
                    </span>
                  </p>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/7.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                <div className="item-cost">
                  <h6 className="item-price">$129.29</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  {" "}
                  Google - Google Home - White/Slate fabric{" "}
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Google
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                Simplify your everyday life with the Google Home, a
                voice-activated speaker powered by the Google Assistant. Use
                voice commands to enjoy music, get answers from Google and
                manage everyday tasks. Google Home is compatible with Android
                and iOS operating systems, and can control compatible smart
                devices such as Chromecast or Nest.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$129.29</h4>
                  <p className="card-text shipping">
                    <span className="badge rounded-pill badge-light-success">
                      Free Shipping
                    </span>
                  </p>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/8.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                </div>
                <div className="item-cost">
                  <h6 className="item-price">$7999.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  {" "}
                  Sony 4K Ultra HD LED TV{" "}
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Apple
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides
                clear visuals and provides distinct sound quality and an
                immersive experience. This TV has Yes HDMI ports &amp; Yes USB
                ports. Connectivity options included are HDMI. You can connect
                various gadgets such as your laptop using the HDMI port. The TV
                comes with a 1 Year warranty.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$29.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <div className="card ecommerce-card">
            <div className="item-img text-center">
              <a href="app-ecommerce-details.html">
                <img
                  className="img-fluid card-img-top"
                  src="../../../app-assets/images/pages/eCommerce/9.png"
                  alt="img-placeholder"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline">
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
                <div className="item-cost">
                  <h6 className="item-price">$14.99</h6>
                </div>
              </div>
              <h6 className="item-name">
                <a className="text-body" href="app-ecommerce-details.html">
                  {" "}
                  OnePlus 7 Pro{" "}
                </a>
                <span className="card-text item-company">
                  By{" "}
                  <a href="#" className="company-name">
                    Philips
                  </a>
                </span>
              </h6>
              <p className="card-text item-description">
                The OnePlus 7 Pro features a brand new design, with a glass back
                and front and curved sides. The phone feels very premium but’s
                it’s also very heavy. The Nebula Blue variant looks slick but
                it’s quite slippery, which makes single-handed use a real
                challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display
                with a QHD+ resolution, 90Hz refresh rate and support for HDR
                10+ content. The display produces vivid colours, deep blacks and
                has good viewing angles.
              </p>
            </div>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">$14.99</h4>
                </div>
              </div>
              <a href="#" className="btn btn-light btn-wishlist">
                <i data-feather="heart" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="btn btn-primary btn-cart">
                <i data-feather="shopping-cart" />
                <span className="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
        </section>
        {/* E-commerce Products Ends */}
        {/* E-commerce Pagination Starts */}
        <section id="ecommerce-pagination">
          <div className="row">
            <div className="col-sm-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-2">
                  <li className="page-item prev-item">
                    <a className="page-link" href="#" />
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      7
                    </a>
                  </li>
                  <li className="page-item next-item">
                    <a className="page-link" href="#" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* E-commerce Pagination Ends */}
      </div>
    </div>
    <div className="sidebar-detached sidebar-left">
      <div className="sidebar">
        {/* Ecommerce Sidebar Starts */}
        <div className="sidebar-shop">
          <div className="row">
            <div className="col-sm-12">
              <h6 className="filter-heading d-none d-lg-block">Filters</h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {/* Price Filter starts */}
              <div className="multi-range-price">
                <h6 className="filter-title mt-0">Multi Range</h6>
                <ul className="list-unstyled price-range" id="price-range">
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="priceAll"
                        name="price-range"
                        className="form-check-input"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="priceAll">
                        All
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="priceRange1"
                        name="price-range"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="priceRange1">
                        &lt;=$10
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="priceRange2"
                        name="price-range"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="priceRange2">
                        $10 - $100
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="priceARange3"
                        name="price-range"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceARange3"
                      >
                        $100 - $500
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="priceRange4"
                        name="price-range"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="priceRange4">
                        &gt;= $500
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Price Filter ends */}
              {/* Price Slider starts */}
              <div className="price-slider">
                <h6 className="filter-title">Price Range</h6>
                <div className="price-slider">
                  <div className="range-slider mt-2" id="price-slider" />
                </div>
              </div>
              {/* Price Range ends */}
              {/* Categories Starts */}
              <div id="product-categories">
                <h6 className="filter-title">Categories</h6>
                <ul className="list-unstyled categories-list">
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category1"
                        name="category-filter"
                        className="form-check-input"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="category1">
                        Appliances
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category2"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category2">
                        Audio
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category3"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category3">
                        Cameras &amp; Camcorders
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category4"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category4">
                        Car Electronics &amp; GPS
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category5"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category5">
                        Cell Phones
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category6"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category6">
                        Computers &amp; Tablets
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category7"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category7">
                        Health, Fitness &amp; Beauty
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category8"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category8">
                        Office &amp; School Supplies
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category9"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category9">
                        TV &amp; Home Theater
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="category10"
                        name="category-filter"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="category10">
                        Video Games
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Categories Ends */}
              {/* Brands starts */}
              <div className="brands">
                <h6 className="filter-title">Brands</h6>
                <ul className="list-unstyled brand-list">
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand1"
                      >
                        Insignia™
                      </label>
                    </div>
                    <span>746</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand2"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand2"
                      >
                        Samsung
                      </label>
                    </div>
                    <span>633</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand3"
                      >
                        Metra
                      </label>
                    </div>
                    <span>591</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand4"
                      >
                        HP
                      </label>
                    </div>
                    <span>530</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand5"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand5"
                      >
                        Apple
                      </label>
                    </div>
                    <span>442</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand6"
                      >
                        GE
                      </label>
                    </div>
                    <span>394</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand7"
                      >
                        Sony
                      </label>
                    </div>
                    <span>350</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand8"
                      >
                        Incipio
                      </label>
                    </div>
                    <span>320</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand9"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand9"
                      >
                        KitchenAid
                      </label>
                    </div>
                    <span>318</span>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productBrand10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="productBrand10"
                      >
                        Whirlpool
                      </label>
                    </div>
                    <span>298</span>
                  </li>
                </ul>
              </div>
              {/* Brand ends */}
              {/* Rating starts */}
              <div id="ratings">
                <h6 className="filter-title">Ratings</h6>
                <div className="ratings-list">
                  <a href="#">
                    <ul className="unstyled-list list-inline">
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
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">160</div>
                </div>
                <div className="ratings-list">
                  <a href="#">
                    <ul className="unstyled-list list-inline">
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
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">176</div>
                </div>
                <div className="ratings-list">
                  <a href="#">
                    <ul className="unstyled-list list-inline">
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
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">291</div>
                </div>
                <div className="ratings-list">
                  <a href="#">
                    <ul className="unstyled-list list-inline">
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
                      <li className="ratings-list-item">
                        <i data-feather="star" className="unfilled-star" />
                      </li>
                      <li>&amp; up</li>
                    </ul>
                  </a>
                  <div className="stars-received">190</div>
                </div>
              </div>
              {/* Rating ends */}
              {/* Clear Filters Starts */}
              <div id="clear-filters">
                <button type="button" className="btn w-100 btn-primary">
                  Clear All Filters
                </button>
              </div>
              {/* Clear Filters Ends */}
            </div>
          </div>
        </div>
        {/* Ecommerce Sidebar Ends */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}
