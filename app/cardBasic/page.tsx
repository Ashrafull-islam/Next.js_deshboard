
export default function page() {
  return (
    <>
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Basic Card
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Card</a>
                      </li>
                      <li className="breadcrumb-item active">Basic Card</li>
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
            {/* Examples */}
            <section id="card-demo-example">
              <div className="row match-height">
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/04.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <h6 className="card-subtitle text-muted">
                        Support card subtitle
                      </h6>
                    </div>
                    <img
                      className="img-fluid"
                      src="../../../app-assets/images/slider/03.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Bear claw sesame snaps gummies chocolate.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <h6 className="card-subtitle text-muted">
                        Support card subtitle
                      </h6>
                      <img
                        className="img-fluid my-2"
                        src="../../../app-assets/images/slider/06.jpg"
                        alt="Card image cap"
                      />
                      <p className="card-text">
                        Bear claw sesame snaps gummies chocolate.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Examples */}
            {/* Content types */}
            <section id="card-content-types">
              <h5 className="mt-3">Content Types</h5>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <h6 className="my-2 text-muted">Body</h6>
                  <div className="card mb-4">
                    <div className="card-body">
                      <p className="card-text">
                        This is some text within a card body. Jelly lemon drops
                        tiramisu chocolate cake cotton candy soufflé oat cake
                        sweet roll. Sugar plum marzipan dragée topping
                        cheesecake chocolate bar. Danish muffin icing donut.
                      </p>
                    </div>
                  </div>
                  <h6 className="my-2 text-muted">Titles, Text, and Links</h6>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <div className="card-subtitle text-muted mb-1">
                        Card subtitle
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                  <h6 className="my-2 text-muted">List Groups</h6>
                  <div className="card mb-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h6 className="my-2 text-muted">Images</h6>
                  <div className="card mb-4">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/01.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p className="card-text">
                        Cookie topping caramels jujubes gingerbread. Lollipop
                        apple pie cupcake candy canes cookie ice cream. Wafer
                        chocolate bar carrot cake jelly-o.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h6 className="my-2 text-muted">Kitchen Sink</h6>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/02.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title.
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="my-2 text-muted">Header and Footer</h6>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content natural lead-in to additional
                        content.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card">
                    <h6 className="card-header">Quote</h6>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.Lorem ipsum dolor
                          sit amet, Integer posuere erat a ante Integer posuere
                          erat a anteconsectetur.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card text-center">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Content types */}
            {/* Text alignment */}
            <section id="card-text-alignment">
              <h5 className="mt-3 mb-2">Text Alignment</h5>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card text-center mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card text-end mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Text alignment */}
            {/* Navigation */}
            <section id="card-navigation">
              <h5 className="mt-3 mb-2">Navigation</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="card text-center">
                    <div className="card-header py-2">
                      <ul
                        className="nav nav-pills card-header-pills ms-0"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            Disabled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <h4 className="card-title">
                            Special title treatment
                          </h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" className="btn btn-outline-primary">
                            Go home
                          </a>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <h4 className="card-title">
                            Special title treatment
                          </h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" className="btn btn-outline-primary">
                            Go profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-center mb-3">
                    <div className="card-header">
                      <ul
                        className="nav nav-tabs card-header-tabs ms-0"
                        id="nav-tabs"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            Disabled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <h4 className="card-title">
                            Special title treatment
                          </h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" className="btn btn-outline-primary">
                            Go home
                          </a>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <h4 className="card-title">
                            Special title treatment
                          </h4>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" className="btn btn-outline-primary">
                            Go profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Navigation */}
            {/* Images */}
            <section id="card-images">
              <h5 className="mt-3 mb-2">Images</h5>
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/06.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <img
                      className="card-img-bottom"
                      src="../../../app-assets/images/slider/09.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card border-0 text-white">
                    <img
                      className="card-img"
                      src="../../../app-assets/images/slider/10.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay bg-overlay">
                      <h4 className="card-title text-white">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Images */}
            {/* Style variation */}
            <section id="card-style-variation">
              <h5 className="mt-3 mb-2">Style Variation</h5>
              {/* Solid */}
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-primary text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">
                        Primary card title
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-secondary text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">
                        Secondary card title
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-success text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">
                        Success card title
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-danger text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">
                        Danger card title
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-warning text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">
                        Warning card title
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card bg-info text-white">
                    <div className="card-body">
                      <h4 className="card-title text-white">Info card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outline */}
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-primary">
                    <div className="card-body">
                      <h4 className="card-title">Primary card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-secondary">
                    <div className="card-body">
                      <h4 className="card-title">Secondary card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-success">
                    <div className="card-body">
                      <h4 className="card-title">Success card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-danger">
                    <div className="card-body">
                      <h4 className="card-title">Danger card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-warning">
                    <div className="card-body">
                      <h4 className="card-title">Warning card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card shadow-none bg-transparent border-info">
                    <div className="card-body">
                      <h4 className="card-title">Info card title</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Style variation */}
            {/* Card layout */}
            <section className="card-layout">
              <h5 className="mt-3 mb-2">Card Layout</h5>
              <h6 className="my-3 text-muted">Card Groups</h6>
              <div className="card-group">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../app-assets/images/slider/01.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../app-assets/images/slider/05.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="../../../app-assets/images/slider/03.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <h6 className="my-3 text-muted">Grid Cards</h6>
              <div className="row row-cols-1 row-cols-md-3 mb-2">
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/03.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/02.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="../../../app-assets/images/slider/01.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Card layout */}
          </div>
        </div>
      </div>
    </>
  );
}
