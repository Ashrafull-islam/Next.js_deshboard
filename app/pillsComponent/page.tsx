
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
                    Pills
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Pills</li>
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
            {/* Basic and Outline Pills start */}
            <section id="basic-and-outline-pills">
              <div className="row match-height">
                {/* Basic pills starts */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="pill"
                            href="#home"
                            aria-expanded="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="pill"
                            href="#profile"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              id="dropdown1-tab"
                              href="#dropdown1"
                              data-bs-toggle="pill"
                              aria-expanded="true"
                            >
                              @fat
                            </a>
                            <a
                              className="dropdown-item"
                              id="dropdown2-tab"
                              href="#dropdown2"
                              data-bs-toggle="pill"
                              aria-expanded="true"
                            >
                              @mdo
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab"
                            data-bs-toggle="pill"
                            href="#about"
                            aria-expanded="false"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="home"
                          aria-labelledby="home-tab"
                          aria-expanded="true"
                        >
                          <p>
                            Pastry gummi bears sweet roll candy canes topping
                            ice cream. Candy canes fruitcake cookie carrot cake
                            pastry. Lollipop caramels sesame snaps pie tootsie
                            roll macaroon dessert. Muffin jujubes brownie dragée
                            ice cream cheesecake icing. Danish brownie pastry
                            cotton candy donut. Cheesecake donut candy canes.
                            Jelly beans croissant bonbon cookie toffee. Soufflé
                            croissant lemon drops tootsie roll toffee tiramisu.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                          aria-expanded="false"
                        >
                          <p>
                            Pudding candy canes sugar plum cookie chocolate cake
                            powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu
                            caramels candy canes chocolate cake sweet roll
                            liquorice icing cupcake.Bear claw chocolate
                            chocolate cake jelly-o pudding lemon drops sweet
                            roll sweet candy. Chocolate sweet chocolate bar
                            candy chocolate bar chupa chups gummi bears lemon
                            drops.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="dropdown1"
                          role="tabpanel"
                          aria-labelledby="dropdown1-tab"
                          aria-expanded="false"
                        >
                          <p>
                            Cake croissant lemon drops gummi bears carrot cake
                            biscuit cupcake croissant. Macaroon lemon drops
                            muffin jelly sugar plum chocolate cupcake danish
                            icing. Soufflé tootsie roll lemon drops sweet roll
                            cake icing cookie halvah cupcake.Chupa chups pie
                            jelly pie tootsie roll dragée cookie caramels sugar
                            plum. Jelly oat cake wafer pie cupcake chupa chups
                            jelly-o gingerbread.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="dropdown2"
                          role="tabpanel"
                          aria-labelledby="dropdown2-tab"
                          aria-expanded="false"
                        >
                          <p>
                            Chocolate croissant cupcake croissant jelly donut.
                            Cheesecake toffee apple pie chocolate bar biscuit
                            tart croissant. Lemon drops danish cookie. Oat cake
                            macaroon icing tart lollipop cookie sweet bear claw.
                            Toffee jelly-o pastry cake dessert chocolate bar
                            jelly beans fruitcake. Dragée sweet fruitcake dragée
                            biscuit halvah wafer gingerbread dessert. Gummies
                            fruitcake brownie gummies tart pudding.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="about"
                          role="tabpanel"
                          aria-labelledby="about-tab"
                          aria-expanded="false"
                        >
                          <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream
                            wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake
                            biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake.Chocolate bonbon chocolate
                            chocolate cake halvah tootsie roll marshmallow.
                            Brownie chocolate toffee toffee jelly beans bonbon
                            sesame snaps sugar plum candy canes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Basic pills ends */}
                {/* Vertical Pills Start */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Vertically Stacked Pills</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3 col-sm-12">
                          <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="stacked-pill-1"
                                data-bs-toggle="pill"
                                href="#vertical-pill-1"
                                aria-expanded="true"
                              >
                                Pill 1
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="stacked-pill-2"
                                data-bs-toggle="pill"
                                href="#vertical-pill-2"
                                aria-expanded="false"
                              >
                                Pill 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="stacked-pill-3"
                                data-bs-toggle="pill"
                                href="#vertical-pill-3"
                                aria-expanded="false"
                              >
                                Pill 3
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled">Disabled</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-9 col-sm-12">
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active"
                              id="vertical-pill-1"
                              aria-labelledby="stacked-pill-1"
                              aria-expanded="true"
                            >
                              <p>
                                Candy canes donut chupa chups candy canes lemon
                                drops oat cake wafer. Cotton candy candy canes
                                marzipan carrot cake. Sesame snaps lemon drops
                                candy marzipan donut brownie tootsie roll. Icing
                                croissant bonbon biscuit gummi bears. Bear claw
                                donut sesame snaps bear claw liquorice jelly-o
                                bear claw carrot cake. Icing croissant bonbon
                                biscuit gummi bears.
                              </p>
                            </div>
                            <div
                              className="tab-pane"
                              id="vertical-pill-2"
                              role="tabpanel"
                              aria-labelledby="stacked-pill-2"
                              aria-expanded="false"
                            >
                              <p>
                                Pudding candy canes sugar plum cookie chocolate
                                cake powder croissant. Carrot cake tiramisu
                                danish candy cake muffin croissant tart dessert.
                                Tiramisu caramels candy canes chocolate cake
                                sweet roll liquorice icing cupcake. Sesame snaps
                                wafer marshmallow danish dragée candy muffin
                                jelly beans tootsie roll. Jelly beans oat cake
                                chocolate cake tiramisu sweet.
                              </p>
                            </div>
                            <div
                              className="tab-pane"
                              id="vertical-pill-3"
                              role="tabpanel"
                              aria-labelledby="stacked-pill-3"
                              aria-expanded="false"
                            >
                              <p>
                                Carrot cake dragée chocolate. Lemon drops ice
                                cream wafer gummies dragée. Chocolate bar
                                liquorice cheesecake cookie chupa chups
                                marshmallow oat cake biscuit. Dessert toffee
                                fruitcake ice cream powder tootsie roll cake.
                                Macaroon brownie lemon drops croissant marzipan
                                sweet roll macaroon lollipop. Danish fruitcake
                                bonbon bear claw gummi bears apple pie.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vertical Pills end */}
              </div>
            </section>
            {/* Basic and Outline Pills end */}
            <section id="filled-pills">
              <div className="row match-height">
                {/* Filled Pills Start */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Filled</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab-fill"
                            data-bs-toggle="pill"
                            href="#home-fill"
                            aria-expanded="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab-fill"
                            data-bs-toggle="pill"
                            href="#profile-fill"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            {" "}
                            Disabled{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab-fill"
                            data-bs-toggle="pill"
                            href="#about-fill"
                            aria-expanded="false"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="home-fill"
                          aria-labelledby="home-tab-fill"
                          aria-expanded="true"
                        >
                          <p>
                            Pastry gummi bears sweet roll candy canes topping
                            ice cream. Candy canes fruitcake cookie carrot cake
                            pastry. Lollipop caramels sesame snaps pie tootsie
                            roll macaroon dessert. Muffin jujubes brownie dragée
                            ice cream cheesecake icing. Danish brownie pastry
                            cotton candy donut. Cheesecake donut candy canes.
                            Jelly beans croissant bonbon cookie toffee. Soufflé
                            croissant lemon drops tootsie roll toffee tiramisu.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="profile-fill"
                          role="tabpanel"
                          aria-labelledby="profile-tab-fill"
                          aria-expanded="false"
                        >
                          <p>
                            Pudding candy canes sugar plum cookie chocolate cake
                            powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu
                            caramels candy canes chocolate cake sweet roll
                            liquorice icing cupcake.Bear claw chocolate
                            chocolate cake jelly-o pudding lemon drops sweet
                            roll sweet candy. Chocolate sweet chocolate bar
                            candy chocolate bar chupa chups gummi bears lemon
                            drops.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="about-fill"
                          role="tabpanel"
                          aria-labelledby="about-tab-fill"
                          aria-expanded="false"
                        >
                          <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream
                            wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake
                            biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake.Chocolate bonbon chocolate
                            chocolate cake halvah tootsie roll marshmallow.
                            Brownie chocolate toffee toffee jelly beans bonbon
                            sesame snaps sugar plum candy canes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Filled Pills End */}
                {/* Justified Pills Start */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Justified</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab-justified"
                            data-bs-toggle="pill"
                            href="#home-justified"
                            aria-expanded="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab-justified"
                            data-bs-toggle="pill"
                            href="#profile-justified"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            {" "}
                            Disabled{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab-justified"
                            data-bs-toggle="pill"
                            href="#about-justified"
                            aria-expanded="false"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="home-justified"
                          aria-labelledby="home-tab-justified"
                          aria-expanded="true"
                        >
                          <p>
                            Pastry gummi bears sweet roll candy canes topping
                            ice cream. Candy canes fruitcake cookie carrot cake
                            pastry. Lollipop caramels sesame snaps pie tootsie
                            roll macaroon dessert. Muffin jujubes brownie dragée
                            ice cream cheesecake icing. Danish brownie pastry
                            cotton candy donut. Cheesecake donut candy canes.
                            Jelly beans croissant bonbon cookie toffee. Soufflé
                            croissant lemon drops tootsie roll toffee tiramisu.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="profile-justified"
                          role="tabpanel"
                          aria-labelledby="profile-tab-justified"
                          aria-expanded="false"
                        >
                          <p>
                            Pudding candy canes sugar plum cookie chocolate cake
                            powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu
                            caramels candy canes chocolate cake sweet roll
                            liquorice icing cupcake.Bear claw chocolate
                            chocolate cake jelly-o pudding lemon drops sweet
                            roll sweet candy. Chocolate sweet chocolate bar
                            candy chocolate bar chupa chups gummi bears lemon
                            drops.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="about-justified"
                          role="tabpanel"
                          aria-labelledby="about-tab-justified"
                          aria-expanded="false"
                        >
                          <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream
                            wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake
                            biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake.Chocolate bonbon chocolate
                            chocolate cake halvah tootsie roll marshmallow.
                            Brownie chocolate toffee toffee jelly beans bonbon
                            sesame snaps sugar plum candy canes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Justified Pills End */}
              </div>
            </section>
            {/* Aligned Pills Start */}
            <section id="aligned-pills">
              <div className="row match-height">
                {/* Center Pills Start */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Center Alignment</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="home-tab-center"
                            data-bs-toggle="pill"
                            href="#home-center"
                            aria-expanded="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="profile-tab-center"
                            data-bs-toggle="pill"
                            href="#profile-center"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            {" "}
                            Disabled{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab-center"
                            data-bs-toggle="pill"
                            href="#about-center"
                            aria-expanded="false"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane"
                          id="home-center"
                          aria-labelledby="home-tab-center"
                          aria-expanded="true"
                        >
                          <p>
                            Pastry gummi bears sweet roll candy canes topping
                            ice cream. Candy canes fruitcake cookie carrot cake
                            pastry. Lollipop caramels sesame snaps pie tootsie
                            roll macaroon dessert. Muffin jujubes brownie dragée
                            ice cream cheesecake icing. Danish brownie pastry
                            cotton candy donut. Cheesecake donut candy canes.
                            Jelly beans croissant bonbon cookie toffee. Soufflé
                            croissant lemon drops tootsie roll toffee tiramisu.
                          </p>
                        </div>
                        <div
                          className="tab-pane active"
                          id="profile-center"
                          role="tabpanel"
                          aria-labelledby="profile-tab-center"
                          aria-expanded="false"
                        >
                          <p>
                            Pudding candy canes sugar plum cookie chocolate cake
                            powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu
                            caramels candy canes chocolate cake sweet roll
                            liquorice icing cupcake.Bear claw chocolate
                            chocolate cake jelly-o pudding lemon drops sweet
                            roll sweet candy. Chocolate sweet chocolate bar
                            candy chocolate bar chupa chups gummi bears lemon
                            drops.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="about-center"
                          role="tabpanel"
                          aria-labelledby="about-tab-center"
                          aria-expanded="false"
                        >
                          <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream
                            wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake
                            biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake.Chocolate bonbon chocolate
                            chocolate cake halvah tootsie roll marshmallow.
                            Brownie chocolate toffee toffee jelly beans bonbon
                            sesame snaps sugar plum candy canes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Centered Pills End */}
                {/* Right Aligned Pills Start */}
                <div className="col-xl-6 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Right Alignment</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-pills justify-content-end">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="home-tab-end"
                            data-bs-toggle="pill"
                            href="#home-end"
                            aria-expanded="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="profile-tab-end"
                            data-bs-toggle="pill"
                            href="#profile-end"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">
                            {" "}
                            Disabled{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab-end"
                            data-bs-toggle="pill"
                            href="#about-end"
                            aria-expanded="false"
                          >
                            About
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane"
                          id="home-end"
                          aria-labelledby="home-tab-end"
                          aria-expanded="true"
                        >
                          <p>
                            Pastry gummi bears sweet roll candy canes topping
                            ice cream. Candy canes fruitcake cookie carrot cake
                            pastry. Lollipop caramels sesame snaps pie tootsie
                            roll macaroon dessert. Muffin jujubes brownie dragée
                            ice cream cheesecake icing. Danish brownie pastry
                            cotton candy donut. Cheesecake donut candy canes.
                            Jelly beans croissant bonbon cookie toffee. Soufflé
                            croissant lemon drops tootsie roll toffee tiramisu.
                          </p>
                        </div>
                        <div
                          className="tab-pane active"
                          id="profile-end"
                          role="tabpanel"
                          aria-labelledby="profile-tab-end"
                          aria-expanded="false"
                        >
                          <p>
                            Pudding candy canes sugar plum cookie chocolate cake
                            powder croissant. Carrot cake tiramisu danish candy
                            cake muffin croissant tart dessert. Tiramisu
                            caramels candy canes chocolate cake sweet roll
                            liquorice icing cupcake.Bear claw chocolate
                            chocolate cake jelly-o pudding lemon drops sweet
                            roll sweet candy. Chocolate sweet chocolate bar
                            candy chocolate bar chupa chups gummi bears lemon
                            drops.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="about-end"
                          role="tabpanel"
                          aria-labelledby="about-tab-end"
                          aria-expanded="false"
                        >
                          <p>
                            Carrot cake dragée chocolate. Lemon drops ice cream
                            wafer gummies dragée. Chocolate bar liquorice
                            cheesecake cookie chupa chups marshmallow oat cake
                            biscuit. Dessert toffee fruitcake ice cream powder
                            tootsie roll cake.Chocolate bonbon chocolate
                            chocolate cake halvah tootsie roll marshmallow.
                            Brownie chocolate toffee toffee jelly beans bonbon
                            sesame snaps sugar plum candy canes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Aligned Pills End */}
              </div>
            </section>
            {/* Aligned Pills End */}
            {/* Nav Pills Themes Starts */}
            <section id="nav-pill-themes">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Pill Themes</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Use class{" "}
                        <code>
                          .nav-pill-{"{"}color-name{"}"}
                        </code>{" "}
                        with <code>.nav-pills</code> class to apply color
                        according to your choice.
                      </p>
                      <h6>Success</h6>
                      <ul className="nav nav-pills nav-pill-success my-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
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
                      <h6>Danger</h6>
                      <ul className="nav nav-pills nav-pill-danger my-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
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
                      <h6>Warning</h6>
                      <ul className="nav nav-pills nav-pill-warning my-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
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
                      <h6>Info</h6>
                      <ul className="nav nav-pills nav-pill-info my-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-bs-toggle="pill"
                            aria-expanded="false"
                          >
                            Link
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
                  </div>
                </div>
              </div>
            </section>
            {/* Nav Pills Themes Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
