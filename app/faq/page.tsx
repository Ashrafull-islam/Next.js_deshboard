"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="../../../app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Theme JS */}
<Script src="../../../app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="../../../app-assets/js/core/app.js" strategy="afterInteractive" />
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">FAQ</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active">FAQ</li>
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
      {/* search header */}
      <section id="faq-search-filter">
        <div
          className="card faq-search"
          style={{
            backgroundImage:
              'url("../../../app-assets/images/banner/banner.png")'
          }}
        >
          <div className="card-body text-center">
            {/* main title */}
            <h2 className="text-primary">Let's answer some questions</h2>
            {/* subtitle */}
            <p className="card-text mb-2">
              or choose a category to quickly find the help you need
            </p>
            {/* search input */}
            <form className="faq-search-input">
              <div className="input-group input-group-merge">
                <div className="input-group-text">
                  <i data-feather="search" />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search faq..."
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* /search header */}
      {/* frequently asked questions tabs pills */}
      <section id="faq-tabs">
        {/* vertical tab pill */}
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0">
              {/* pill tabs navigation */}
              <ul className="nav nav-pills nav-left flex-column" role="tablist">
                {/* payment */}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="payment"
                    data-bs-toggle="pill"
                    href="#faq-payment"
                    aria-expanded="true"
                    role="tab"
                  >
                    <i
                      data-feather="credit-card"
                      className="font-medium-3 me-1"
                    />
                    <span className="fw-bold">Payment</span>
                  </a>
                </li>
                {/* delivery */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="delivery"
                    data-bs-toggle="pill"
                    href="#faq-delivery"
                    aria-expanded="false"
                    role="tab"
                  >
                    <i
                      data-feather="shopping-bag"
                      className="font-medium-3 me-1"
                    />
                    <span className="fw-bold">Delivery</span>
                  </a>
                </li>
                {/* cancellation and return */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="cancellation-return"
                    data-bs-toggle="pill"
                    href="#faq-cancellation-return"
                    aria-expanded="false"
                    role="tab"
                  >
                    <i
                      data-feather="refresh-cw"
                      className="font-medium-3 me-1"
                    />
                    <span className="fw-bold">Cancellation &amp; Return</span>
                  </a>
                </li>
                {/* my order */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="my-order"
                    data-bs-toggle="pill"
                    href="#faq-my-order"
                    aria-expanded="false"
                    role="tab"
                  >
                    <i data-feather="package" className="font-medium-3 me-1" />
                    <span className="fw-bold">My Orders</span>
                  </a>
                </li>
                {/* product and services*/}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-services"
                    data-bs-toggle="pill"
                    href="#faq-product-services"
                    aria-expanded="false"
                    role="tab"
                  >
                    <i data-feather="settings" className="font-medium-3 me-1" />
                    <span className="fw-bold">Product &amp; Services</span>
                  </a>
                </li>
              </ul>
              {/* FAQ image */}
              <img
                src="../../../app-assets/images/illustration/faq-illustrations.svg"
                className="img-fluid d-none d-md-block"
                alt="demand img"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            {/* pill tabs tab content */}
            <div className="tab-content">
              {/* payment panel */}
              <div
                role="tabpanel"
                className="tab-pane active"
                id="faq-payment"
                aria-labelledby="payment"
                aria-expanded="true"
              >
                {/* icon and header */}
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-tag bg-light-primary me-1">
                    <i data-feather="credit-card" className="font-medium-4" />
                  </div>
                  <div>
                    <h4 className="mb-0">Payment</h4>
                    <span>Which license do I need?</span>
                  </div>
                </div>
                {/* frequent answer and question  collapse  */}
                <div
                  className="accordion accordion-margin mt-2"
                  id="faq-payment-qna"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-one"
                        aria-expanded="false"
                        aria-controls="faq-payment-one"
                      >
                        Does my subscription automatically renew?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-one"
                      className="collapse accordion-collapse"
                      aria-labelledby="paymentOne"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentTwo">
                      <button
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-two"
                        aria-expanded="true"
                        aria-controls="faq-payment-two"
                      >
                        Can I store the item on an intranet so everyone has
                        access?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-two"
                      className="collapse show"
                      aria-labelledby="paymentTwo"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Sweet pie candy jelly. Sesame snaps biscuit sugar plum.
                        Sweet roll topping fruitcake. Caramels liquorice biscuit
                        ice cream fruitcake cotton candy tart. Donut caramels
                        gingerbread jelly-o gingerbread pudding. Gummi bears
                        pastry marshmallow candy canes pie. Pie apple pie carrot
                        cake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-three"
                        aria-expanded="false"
                        aria-controls="faq-payment-three"
                      >
                        What does non-exclusive mean?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-three"
                      className="collapse"
                      aria-labelledby="paymentThree"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentFour">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-four"
                        aria-expanded="false"
                        aria-controls="faq-payment-four"
                      >
                        Is the Regular License the same thing as an editorial
                        license?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-four"
                      className="collapse accordion-collapse"
                      aria-labelledby="paymentFour"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Cheesecake muffin cupcake dragée lemon drops tiramisu
                        cake gummies chocolate cake. Marshmallow tart croissant.
                        Tart dessert tiramisu marzipan lollipop lemon drops.
                        Cake bonbon bonbon gummi bears topping jelly beans
                        brownie jujubes muffin. Donut croissant jelly-o cake
                        marzipan. Liquorice marzipan cookie wafer tootsie roll.
                        Tootsie roll sweet cupcake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentFive">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-five"
                        aria-expanded="false"
                        aria-controls="faq-payment-five"
                      >
                        Which license do I need for an end product that is only
                        accessible to paying users?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-five"
                      className="collapse accordion-collapse"
                      aria-labelledby="paymentFive"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentSix">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-six"
                        aria-expanded="false"
                        aria-controls="faq-payment-six"
                      >
                        Which license do I need to use an item in a commercial?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-six"
                      className="collapse accordion-collapse"
                      aria-labelledby="paymentSix"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        At tempor commodo ullamcorper a lacus vestibulum.
                        Ultrices neque ornare aenean euismod. Dui vivamus arcu
                        felis bibendum. Turpis in eu mi bibendum neque egestas
                        congue. Nullam ac tortor vitae purus faucibus ornare
                        suspendisse sed.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="paymentSeven">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-payment-seven"
                        aria-expanded="false"
                        aria-controls="faq-payment-seven"
                      >
                        Can I re-distribute an item? What about under an
                        Extended License?
                      </button>
                    </h2>
                    <div
                      id="faq-payment-seven"
                      className="collapse"
                      aria-labelledby="paymentSeven"
                      data-bs-parent="#faq-payment-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Euismod lacinia at quis risus sed
                        vulputate odio ut enim. Dictum at tempor commodo
                        ullamcorper a lacus vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* delivery panel */}
              <div
                className="tab-pane"
                id="faq-delivery"
                role="tabpanel"
                aria-labelledby="delivery"
                aria-expanded="false"
              >
                {/* icon and header */}
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-tag bg-light-primary me-1">
                    <i data-feather="shopping-bag" className="font-medium-4" />
                  </div>
                  <div>
                    <h4 className="mb-0">Delivery</h4>
                    <span>Which license do I need?</span>
                  </div>
                </div>
                {/* frequent answer and question  collapse  */}
                <div
                  className="accordion accordion-margin mt-2"
                  id="faq-delivery-qna"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="deliveryOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-delivery-one"
                        aria-expanded="false"
                        aria-controls="faq-delivery-one"
                      >
                        Where has my order reached?
                      </button>
                    </h2>
                    <div
                      id="faq-delivery-one"
                      className="collapse accordion-collapse"
                      aria-labelledby="deliveryOne"
                      data-bs-parent="#faq-delivery-qna"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="deliveryTwo">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-delivery-two"
                        aria-expanded="false"
                        aria-controls="faq-delivery-two"
                      >
                        The shipment status shows that it has been
                        returned/cancelled. What does it mean and who do I
                        contact?
                      </button>
                    </h2>
                    <div
                      id="faq-delivery-two"
                      className="collapse accordion-collapse"
                      aria-labelledby="deliveryTwo"
                      data-bs-parent="#faq-delivery-qna"
                    >
                      <div className="accordion-body">
                        Sweet pie candy jelly. Sesame snaps biscuit sugar plum.
                        Sweet roll topping fruitcake. Caramels liquorice biscuit
                        ice cream fruitcake cotton candy tart. Donut caramels
                        gingerbread jelly-o gingerbread pudding. Gummi bears
                        pastry marshmallow candy canes pie. Pie apple pie carrot
                        cake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="deliveryThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-delivery-three"
                        aria-expanded="false"
                        aria-controls="faq-delivery-three"
                      >
                        What if my shipment is marked as lost?
                      </button>
                    </h2>
                    <div
                      id="faq-delivery-three"
                      className="collapse"
                      aria-labelledby="deliveryThree"
                      data-bs-parent="#faq-delivery-qna"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan. Carrot cake marshmallow
                        pastry. Bonbon biscuit pastry topping toffee dessert
                        gummies. Topping apple pie pie croissant cotton candy
                        dessert tiramisu.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="deliveryFour">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-delivery-four"
                        aria-expanded="false"
                        aria-controls="faq-delivery-four"
                      >
                        My shipment status shows that it’s out for delivery. By
                        when will I receive it?
                      </button>
                    </h2>
                    <div
                      id="faq-delivery-four"
                      className="collapse"
                      aria-labelledby="deliveryFour"
                      data-bs-parent="#faq-delivery-qna"
                    >
                      <div className="accordion-body">
                        Cheesecake muffin cupcake dragée lemon drops tiramisu
                        cake gummies chocolate cake. Marshmallow tart croissant.
                        Tart dessert tiramisu marzipan lollipop lemon drops.
                        Cake bonbon bonbon gummi bears topping jelly beans
                        brownie jujubes muffin. Donut croissant jelly-o cake
                        marzipan. Liquorice marzipan cookie wafer tootsie roll.
                        Tootsie roll sweet cupcake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="deliveryFive">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-delivery-five"
                        aria-expanded="false"
                        aria-controls="faq-delivery-five"
                      >
                        What do I need to do to get the shipment delivered
                        within a specific timeframe?
                      </button>
                    </h2>
                    <div
                      id="faq-delivery-five"
                      className="collapse"
                      aria-labelledby="deliveryFive"
                      data-bs-parent="#faq-delivery-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* cancellation return  */}
              <div
                className="tab-pane"
                id="faq-cancellation-return"
                role="tabpanel"
                aria-labelledby="cancellation-return"
                aria-expanded="false"
              >
                {/* icon and header */}
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-tag bg-light-primary me-1">
                    <i data-feather="refresh-cw" className="font-medium-4" />
                  </div>
                  <div>
                    <h4 className="mb-0">Cancellation &amp; Return</h4>
                    <span>Which license do I need?</span>
                  </div>
                </div>
                {/* frequent answer and question  collapse  */}
                <div
                  className="accordion accordion-margin mt-2"
                  id="faq-cancellation-qna"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-one"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-one"
                      >
                        Can my security guard or neighbour receive my shipment
                        if I am not available?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-one"
                      className="collapse"
                      aria-labelledby="cancellationOne"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationTwo">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-two"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-two"
                      >
                        How can I get the contact number of my delivery agent?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-two"
                      className="collapse"
                      aria-labelledby="cancellationTwo"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Sweet pie candy jelly. Sesame snaps biscuit sugar plum.
                        Sweet roll topping fruitcake. Caramels liquorice biscuit
                        ice cream fruitcake cotton candy tart. Donut caramels
                        gingerbread jelly-o gingerbread pudding. Gummi bears
                        pastry marshmallow candy canes pie. Pie apple pie carrot
                        cake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-three"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-three"
                      >
                        How can I cancel my shipment?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-three"
                      className="collapse"
                      aria-labelledby="cancellationThree"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan. Carrot cake marshmallow
                        pastry. Bonbon biscuit pastry topping toffee dessert
                        gummies. Topping apple pie pie croissant cotton candy
                        dessert tiramisu.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationFour">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-four"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-four"
                      >
                        I have received a defective/damaged product. What do I
                        do?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-four"
                      className="collapse"
                      aria-labelledby="cancellationFour"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Cheesecake muffin cupcake dragée lemon drops tiramisu
                        cake gummies chocolate cake. Marshmallow tart croissant.
                        Tart dessert tiramisu marzipan lollipop lemon drops.
                        Cake bonbon bonbon gummi bears topping jelly beans
                        brownie jujubes muffin. Donut croissant jelly-o cake
                        marzipan. Liquorice marzipan cookie wafer tootsie roll.
                        Tootsie roll sweet cupcake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationFive">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-five"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-five"
                      >
                        How do I change my delivery address?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-five"
                      className="collapse"
                      aria-labelledby="cancellationFive"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationSix">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-six"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-six"
                      >
                        What documents do I need to carry for self-collection of
                        my shipment?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-six"
                      className="collapse"
                      aria-labelledby="cancellationSix"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        At tempor commodo ullamcorper a lacus vestibulum.
                        Ultrices neque ornare aenean euismod. Dui vivamus arcu
                        felis bibendum. Turpis in eu mi bibendum neque egestas
                        congue. Nullam ac tortor vitae purus faucibus ornare
                        suspendisse sed. Commodo viverra maecenas accumsan lacus
                        vel facilisis volutpat est velit. Tortor consequat id
                        porta nibh. Id aliquet lectus proin nibh nisl
                        condimentum id venenatis a. Faucibus nisl tincidunt eget
                        nullam non nisi. Enim nunc faucibus a pellentesque.
                        Pellentesque diam volutpat commodo sed egestas egestas
                        fringilla phasellus. Nec nam aliquam sem et tortor
                        consequat id. Fringilla est ullamcorper eget nulla
                        facilisi. Morbi tristique senectus et netus et.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="cancellationSeven">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-cancellation-seven"
                        aria-expanded="false"
                        aria-controls="faq-cancellation-seven"
                      >
                        What are the timings for self-collecting shipments from
                        the Delhivery Branch?
                      </button>
                    </h2>
                    <div
                      id="faq-cancellation-seven"
                      className="collapse"
                      aria-labelledby="cancellationSeven"
                      data-bs-parent="#faq-cancellation-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Euismod lacinia at quis risus sed
                        vulputate odio ut enim. Dictum at tempor commodo
                        ullamcorper a lacus vestibulum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* my order */}
              <div
                className="tab-pane"
                id="faq-my-order"
                role="tabpanel"
                aria-labelledby="my-order"
                aria-expanded="false"
              >
                {/* icon and header */}
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-tag bg-light-primary me-1">
                    <i data-feather="package" className="font-medium-4" />
                  </div>
                  <div>
                    <h4 className="mb-0">My Orders</h4>
                    <span>Which license do I need?</span>
                  </div>
                </div>
                {/* frequent answer and question  collapse  */}
                <div
                  className="accordion accordion-margin mt-2"
                  id="faq-my-order-qna"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="myOrderOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-my-order-one"
                        aria-expanded="false"
                        aria-controls="faq-my-order-one"
                      >
                        Can I avail of an open delivery?
                      </button>
                    </h2>
                    <div
                      id="faq-my-order-one"
                      className="collapse accordion-collapse"
                      aria-labelledby="myOrderOne"
                      data-bs-parent="#faq-my-order-qna"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="myOrderTwo">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-my-order-two"
                        aria-expanded="false"
                        aria-controls="faq-my-order-two"
                      >
                        I haven’t received the refund of my returned shipment.
                        What do I do?
                      </button>
                    </h2>
                    <div
                      id="faq-my-order-two"
                      className="collapse accordion-collapse"
                      aria-labelledby="myOrderTwo"
                      data-bs-parent="#faq-my-order-qna"
                    >
                      <div className="accordion-body">
                        Sweet pie candy jelly. Sesame snaps biscuit sugar plum.
                        Sweet roll topping fruitcake. Caramels liquorice biscuit
                        ice cream fruitcake cotton candy tart. Donut caramels
                        gingerbread jelly-o gingerbread pudding. Gummi bears
                        pastry marshmallow candy canes pie. Pie apple pie carrot
                        cake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="myOrderThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-my-order-three"
                        aria-expanded="false"
                        aria-controls="faq-my-order-three"
                      >
                        How can I ship my order to an international location?
                      </button>
                    </h2>
                    <div
                      id="faq-my-order-three"
                      className="collapse"
                      aria-labelledby="myOrderThree"
                      data-bs-parent="#faq-my-order-qna"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan. Carrot cake marshmallow
                        pastry. Bonbon biscuit pastry topping toffee dessert
                        gummies. Topping apple pie pie croissant cotton candy
                        dessert tiramisu.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="myOrderFour">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-my-order-four"
                        aria-expanded="false"
                        aria-controls="faq-my-order-four"
                      >
                        I missed the delivery of my order today. What should I
                        do?
                      </button>
                    </h2>
                    <div
                      id="faq-my-order-four"
                      className="collapse"
                      aria-labelledby="myOrderFour"
                      data-bs-parent="#faq-my-order-qna"
                    >
                      <div className="accordion-body">
                        Cheesecake muffin cupcake dragée lemon drops tiramisu
                        cake gummies chocolate cake. Marshmallow tart croissant.
                        Tart dessert tiramisu marzipan lollipop lemon drops.
                        Cake bonbon bonbon gummi bears topping jelly beans
                        brownie jujubes muffin. Donut croissant jelly-o cake
                        marzipan. Liquorice marzipan cookie wafer tootsie roll.
                        Tootsie roll sweet cupcake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="myOrderFive">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-my-order-five"
                        aria-expanded="false"
                        aria-controls="faq-my-order-five"
                      >
                        The delivery of my order is delayed. What should I do?
                      </button>
                    </h2>
                    <div
                      id="faq-my-order-five"
                      className="collapse"
                      aria-labelledby="myOrderFive"
                      data-bs-parent="#faq-my-order-qna"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* product services */}
              <div
                className="tab-pane"
                id="faq-product-services"
                role="tabpanel"
                aria-labelledby="product-services"
                aria-expanded="false"
              >
                {/* icon and header */}
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-tag bg-light-primary me-1">
                    <i data-feather="settings" className="font-medium-4" />
                  </div>
                  <div>
                    <h4 className="mb-0">Product &amp; Services</h4>
                    <span>Which license do I need?</span>
                  </div>
                </div>
                {/* frequent answer and question  collapse  */}
                <div
                  className="accordion accordion-margin mt-2"
                  id="faq-product-qna"
                >
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="productOne">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-product-one"
                        aria-expanded="false"
                        aria-controls="faq-product-one"
                      >
                        How can I register a complaint against the courier
                        executive who came to deliver my order?
                      </button>
                    </h2>
                    <div
                      id="faq-product-one"
                      className="collapse accordion-collapse"
                      aria-labelledby="productOne"
                      data-bs-parent="#faq-product-qna"
                    >
                      <div className="accordion-body">
                        Pastry pudding cookie toffee bonbon jujubes jujubes
                        powder topping. Jelly beans gummi bears sweet roll
                        bonbon muffin liquorice. Wafer lollipop sesame snaps.
                        Brownie macaroon cookie muffin cupcake candy caramels
                        tiramisu. Oat cake chocolate cake sweet jelly-o brownie
                        biscuit marzipan. Jujubes donut marzipan chocolate bar.
                        Jujubes sugar plum jelly beans tiramisu icing
                        cheesecake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="productTwo">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-product-two"
                        aria-expanded="false"
                        aria-controls="faq-product-two"
                      >
                        The status for my shipment shows as ‘not picked up’.
                        What do I do?
                      </button>
                    </h2>
                    <div
                      id="faq-product-two"
                      className="collapse accordion-collapse"
                      aria-labelledby="productTwo"
                      data-bs-parent="#faq-product-qna"
                    >
                      <div className="accordion-body">
                        Sweet pie candy jelly. Sesame snaps biscuit sugar plum.
                        Sweet roll topping fruitcake. Caramels liquorice biscuit
                        ice cream fruitcake cotton candy tart. Donut caramels
                        gingerbread jelly-o gingerbread pudding. Gummi bears
                        pastry marshmallow candy canes pie. Pie apple pie carrot
                        cake.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="productThree">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-product-three"
                        aria-expanded="false"
                        aria-controls="faq-product-three"
                      >
                        How can I get a proof of delivery for my shipment?
                      </button>
                    </h2>
                    <div
                      id="faq-product-three"
                      className="collapse"
                      aria-labelledby="productThree"
                      data-bs-parent="#faq-product-qna"
                    >
                      <div className="accordion-body">
                        Tart gummies dragée lollipop fruitcake pastry oat cake.
                        Cookie jelly jelly macaroon icing jelly beans soufflé
                        cake sweet. Macaroon sesame snaps cheesecake tart cake
                        sugar plum. Dessert jelly-o sweet muffin chocolate candy
                        pie tootsie roll marzipan. Carrot cake marshmallow
                        pastry. Bonbon biscuit pastry topping toffee dessert
                        gummies. Topping apple pie pie croissant cotton candy
                        dessert tiramisu.
                      </div>
                    </div>
                  </div>
                  <div className="card accordion-item">
                    <h2 className="accordion-header" id="productFour">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        role="button"
                        data-bs-target="#faq-product-four"
                        aria-expanded="false"
                        aria-controls="faq-product-four"
                      >
                        How can I avail your services?
                      </button>
                    </h2>
                    <div
                      id="faq-product-four"
                      className="collapse accordion-collapse"
                      aria-labelledby="productFour"
                      data-bs-parent="#faq-product-qna"
                    >
                      <div className="accordion-body">
                        Cheesecake muffin cupcake dragée lemon drops tiramisu
                        cake gummies chocolate cake. Marshmallow tart croissant.
                        Tart dessert tiramisu marzipan lollipop lemon drops.
                        Cake bonbon bonbon gummi bears topping jelly beans
                        brownie jujubes muffin. Donut croissant jelly-o cake
                        marzipan. Liquorice marzipan cookie wafer tootsie roll.
                        Tootsie roll sweet cupcake.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / frequently asked questions tabs pills */}
      {/* contact us */}
      <section className="faq-contact">
        <div className="row mt-5 pt-75">
          <div className="col-12 text-center">
            <h2>You still have a question?</h2>
            <p className="mb-3">
              If you cannot find a question in our FAQ, you can always contact
              us. We will answer to you shortly!
            </p>
          </div>
          <div className="col-sm-6">
            <div className="card text-center faq-contact-card shadow-none py-1">
              <div className="accordion-body">
                <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                  <i data-feather="phone-call" className="font-medium-3" />
                </div>
                <h4>+ (810) 2548 2568</h4>
                <span className="text-body">We are always happy to help!</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center faq-contact-card shadow-none py-1">
              <div className="accordion-body">
                <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto">
                  <i data-feather="mail" className="font-medium-3" />
                </div>
                <h4>hello@help.com</h4>
                <span className="text-body">
                  Best way to get answer faster!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ contact us */}
    </div>
  </div>
</div>

    </>
  )
}
