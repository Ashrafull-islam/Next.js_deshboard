
export default function page() {
  return (
    <>
        <div className="app-content content ecommerce-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">WishList</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">eCommerce</a>
                </li>
                <li className="breadcrumb-item active">Wish List</li>
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
      {/* Wishlist Starts */}
      <section id="wishlist" className="grid-view wishlist-items">
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/1.png"
                className="img-fluid"
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
                <h6 className="item-price">$19.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">Apple Watch Series 5</a>
            </div>
            <p className="card-text item-description">
              On Retina display that never sleeps, so it’s easy to see the time
              and other important information, without raising or tapping the
              display. New location features, from a built-in compass to current
              elevation, help users better navigate their day, while
              international emergency calling1 allows customers to call
              emergency services directly from Apple Watch in over 150
              countries, even without iPhone nearby. Apple Watch Series 5 is
              available in a wider range of materials, including aluminium,
              stainless steel, ceramic and an all-new titanium.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/2.png"
                className="img-fluid"
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
                <h6 className="item-price">$4999.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">
                Apple iPhone 11 (64GB, Black)
              </a>
            </div>
            <p className="card-text item-description">
              The Apple iPhone 11 is a great smartphone, which was loaded with a
              lot of quality features. It comes with a waterproof and dustproof
              body which is the key attraction of the device. The excellent set
              of cameras offer excellent images as well as capable of recording
              crisp videos. However, expandable storage and a fingerprint
              scanner would have made it a perfect option to go for around this
              price range.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/3.png"
                className="img-fluid"
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
                <h6 className="item-price">$4499.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">Apple iMac 27-inch</a>
            </div>
            <p className="card-text item-description">
              The all-in-one for all. If you can dream it, you can do it on
              iMac. It’s beautifully &amp; incredibly intuitive and packed with
              tools that let you take any idea to the next level. And the new
              27-inch model elevates the experience in way, with faster
              processors and graphics, expanded memory and storage, enhanced
              audio and video capabilities, and an even more stunning Retina 5K
              display. It’s the desktop that does it all — better and faster
              than ever.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/4.png"
                className="img-fluid"
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
                <h6 className="item-price">$599.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">
                OneOdio A71 Wired Headphones
              </a>
            </div>
            <p className="card-text item-description">
              Omnidirectional detachable boom mic upgrades the headphones into a
              professional headset for gaming, business, podcasting and taking
              calls on the go. Better pick up your voice. Control most electric
              devices through voice activation, or schedule a ride with Uber and
              order a pizza. OneOdio A71 Wired Headphones voice-controlled
              device turns any home into a smart device on a smartphone or
              tablet.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/5.png"
                className="img-fluid"
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
                <h6 className="item-price">$649.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">
                Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver
              </a>
            </div>
            <p className="card-text item-description">
              MacBook Air is a thin, lightweight laptop from Apple. MacBook Air
              features up to 8GB of memory, a fifth-generation Intel Core
              processor, Thunderbolt 2, great built-in apps, and all-day battery
              life.1 Its thin, light, and durable enough to take everywhere you
              go-and powerful enough to do everything once you get there,
              better.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/6.png"
                className="img-fluid"
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
                <h6 className="item-price">$1999.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">Switch Pro Controller </a>
            </div>
            <p className="card-text item-description">
              The Nintendo Switch Pro Controller is one of the priciest
              "baseline" controllers in the current console generation, but it's
              also sturdy, feels good to play with, has an excellent direction
              pad, and features impressive motion sensors and vibration systems.
              On top of all of that, it uses Bluetooth, so you don't need an
              adapter to use it with your PC.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/7.png"
                className="img-fluid"
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
                <h6 className="item-price">$39.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">
                Google - Google Home - White/Slate fabric{" "}
              </a>
            </div>
            <p className="card-text item-description">
              Simplify your everyday life with the Google Home, a
              voice-activated speaker powered by the Google Assistant. Use voice
              commands to enjoy music, get answers from Google and manage
              everyday tasks. Google Home is compatible with Android and iOS
              operating systems, and can control compatible smart devices such
              as Chromecast or Nest.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/8.png"
                className="img-fluid"
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
                <h6 className="item-price">$3199.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">Sony 4K Ultra HD LED TV </a>
            </div>
            <p className="card-text item-description">
              Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear
              visuals and provides distinct sound quality and an immersive
              experience. This TV has Yes HDMI ports &amp; Yes USB ports.
              Connectivity options included are HDMI. You can connect various
              gadgets such as your laptop using the HDMI port. The TV comes with
              a 1 Year warranty.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
        <div className="card ecommerce-card">
          <div className="item-img text-center">
            <a href="app-ecommerce-details.html">
              <img
                src="../../../app-assets/images/pages/eCommerce/9.png"
                className="img-fluid"
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
                <h6 className="item-price">$4399.99</h6>
              </div>
            </div>
            <div className="item-name">
              <a href="app-ecommerce-details.html">OnePlus 7 Pro </a>
            </div>
            <p className="card-text item-description">
              The OnePlus 7 Pro features a brand new design, with a glass back
              and front and curved sides. The phone feels very premium but’s
              it’s also very heavy. The Nebula Blue variant looks slick but it’s
              quite slippery, which makes single-handed use a real challenge. It
              has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+
              resolution, 90Hz refresh rate and support for HDR 10+ content. The
              display produces vivid colours, deep blacks and has good viewing
              angles.
            </p>
          </div>
          <div className="item-options text-center">
            <button
              type="button"
              className="btn btn-light btn-wishlist remove-wishlist"
            >
              <i data-feather="x" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-cart move-cart"
            >
              <i data-feather="shopping-cart" />
              <span className="add-to-cart">Move to cart</span>
            </button>
          </div>
        </div>
      </section>
      {/* Wishlist Ends */}
    </div>
  </div>
</div>

    </>
  )
}
