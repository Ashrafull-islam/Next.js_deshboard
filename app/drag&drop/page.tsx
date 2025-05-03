
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
                    Drag &amp; Drop
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Drag &amp; Drop
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
            {/* Draggable cards section start */}
            <section id="draggable-cards">
              <div className="row" id="card-drag-area">
                <div className="col-xl-3 col-md-6 col-sm-12 draggable">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Draggable Card 1</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Jelly beans sugar plum cheesecake cookie oat cake
                        soufflé.Tootsie roll bonbon liquorice tiramisu pie
                        powder.Donut sweet roll marzipan pastry cookie cake
                        tootsie roll oat cake cookie.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 draggable">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Draggable Card 2</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Jelly beans sugar plum cheesecake cookie oat cake
                        soufflé.Tootsie roll bonbon liquorice tiramisu pie
                        powder.Donut sweet roll marzipan pastry cookie cake
                        tootsie roll oat cake cookie.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 draggable">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Draggable Card 3</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Jelly beans sugar plum cheesecake cookie oat cake
                        soufflé.Tootsie roll bonbon liquorice tiramisu pie
                        powder.Donut sweet roll marzipan pastry cookie cake
                        tootsie roll oat cake cookie.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 draggable">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Draggable Card 4</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Jelly beans sugar plum cheesecake cookie oat cake
                        soufflé.Tootsie roll bonbon liquorice tiramisu pie
                        powder.Donut sweet roll marzipan pastry cookie cake
                        tootsie roll oat cake cookie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Draggable cards section end */}
            {/* Sortable lists section start */}
            <section id="sortable-lists">
              <div className="row">
                {/* Basic List Group starts */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic List Group Sortable</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The most basic list group is simply an unordered list
                        with list items, and the proper classes.
                      </p>
                      <ul className="list-group" id="basic-list-group">
                        <li className="list-group-item draggable">
                          <div className="d-flex">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-12.jpg"
                              className="rounded-circle me-2"
                              alt="img-placeholder"
                              height={50}
                              width={50}
                            />
                            <div className="more-info">
                              <h5>Mary S. Navarre</h5>
                              <span>
                                Chupa chups tiramisu apple pie biscuit sweet
                                roll bonbon macaroon toffee icing.
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item draggable">
                          <div className="d-flex">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                              className="rounded-circle me-2"
                              alt="img-placeholder"
                              height={50}
                              width={50}
                            />
                            <div className="more-info">
                              <h5>Samuel M. Ellis</h5>
                              <span>
                                Toffee powder marzipan tiramisu. Cake cake
                                dessert danish.
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item draggable">
                          <div className="d-flex">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                              className="rounded-circle me-2"
                              alt="img-placeholder"
                              height={50}
                              width={50}
                            />
                            <div className="more-info">
                              <h5>Sandra C. Toney</h5>
                              <span>
                                Sugar plum fruitcake gummies marzipan liquorice
                                tiramisu. Pastry liquorice chupa chupsake
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item draggable">
                          <div className="d-flex">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                              className="rounded-circle me-2"
                              alt="img-placeholder"
                              height={50}
                              width={50}
                            />
                            <div className="more-info">
                              <h5>Cleveland C. Goins</h5>
                              <span>
                                Toffee powder marzipan tiramisu. Cake cake
                                dessert danish.
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item draggable">
                          <div className="d-flex">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                              className="rounded-circle me-2"
                              alt="img-placeholder"
                              height={50}
                              width={50}
                            />
                            <div className="more-info">
                              <h5>Linda M. English</h5>
                              <span>
                                Chupa chups tiramisu apple pie biscuit sweet
                                roll bonbon macaroon toffee icing.
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Basic List Group ends */}
                {/* Multiple List Group starts */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple Lists</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Drag and drop items of more than one list. Add same
                        group to group prop
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <h4 className="my-1">People Group 1</h4>
                          <ul
                            className="list-group list-group-flush"
                            id="multiple-list-group-a"
                          >
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-12.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Mary S. Navarre</h5>
                                  <span>
                                    Chupa chups tiramisu apple pie biscuit sweet
                                    roll bonbon macaroon.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Samuel M. Ellis</h5>
                                  <span>
                                    Toffee powder marzipan tiramisu. Cake cake
                                    dessert danish.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Sandra C. Toney</h5>
                                  <span>
                                    Sugar plum fruitcake gummies marzipan
                                    liquorice tiramisu.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Cleveland C. Goins</h5>
                                  <span>
                                    Toffee powder marzipan tiramisu. Cake cake
                                    dessert danish.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Linda M. English</h5>
                                  <span>
                                    Chupa chups tiramisu apple pie biscuit sweet
                                    roll bonbon macaroon.
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <h4 className="my-1">People Group 2</h4>
                          <ul
                            className="list-group list-group-flush"
                            id="multiple-list-group-b"
                          >
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-12.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Mary S. Navarre</h5>
                                  <span>
                                    Chupa chups tiramisu apple pie biscuit sweet
                                    roll bonbon macaroon.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Samuel M. Ellis</h5>
                                  <span>
                                    Toffee powder marzipan tiramisu. Cake cake
                                    dessert danish.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Sandra C. Toney</h5>
                                  <span>
                                    Sugar plum fruitcake gummies marzipan
                                    liquorice tiramisu
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Cleveland C. Goins</h5>
                                  <span>
                                    Toffee powder marzipan tiramisu. Cake cake
                                    dessert danish.
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item draggable">
                              <div className="d-flex">
                                <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-4.jpg"
                                  className="rounded-circle me-2"
                                  alt="img-placeholder"
                                  height={50}
                                  width={50}
                                />
                                <div className="more-info">
                                  <h5>Linda M. English</h5>
                                  <span>
                                    Chupa chups tiramisu apple pie biscuit sweet
                                    roll bonbon macaroon.
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Multiple List Group ends */}
              </div>
            </section>
            {/* Sortable lists section end */}
            {/* Clone List Starts */}
            <section id="clone-lists">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Clone List</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Clone list items from another existing list.
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <h4 className="my-1">Badge Source 1</h4>
                          <div
                            id="badge-list-1"
                            className="demo-inline-spacing"
                          >
                            <span className="badge rounded-pill bg-secondary draggable">
                              Youtube
                            </span>
                            <span className="badge rounded-pill bg-primary draggable">
                              Facebook
                            </span>
                            <span className="badge rounded-pill bg-success draggable">
                              Google
                            </span>
                            <span className="badge rounded-pill bg-danger draggable">
                              Instagram
                            </span>
                            <span className="badge rounded-pill bg-info draggable">
                              Twitter
                            </span>
                            <span className="badge rounded-pill bg-warning draggable">
                              Discord
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <h4 className="my-1">Badge Source 2</h4>
                          <div
                            id="badge-list-2"
                            className="demo-inline-spacing"
                          >
                            <span className="badge rounded-pill badge-light-secondary draggable">
                              Github
                            </span>
                            <span className="badge rounded-pill badge-light-primary draggable">
                              Gitlab
                            </span>
                            <span className="badge rounded-pill badge-light-success draggable">
                              Slack
                            </span>
                            <span className="badge rounded-pill badge-light-danger draggable">
                              Pintrest
                            </span>
                            <span className="badge rounded-pill badge-light-info draggable">
                              Tinder
                            </span>
                            <span className="badge rounded-pill badge-light-warning draggable">
                              Amazon
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Clone List Ends */}
            {/* With Handle Starts */}
            <section id="dd-with-handle">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Drag And Drop With Handle</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You have to customize drag handle yourself using class{" "}
                        <code>.handle</code>.
                      </p>
                      <div className="row">
                        <div className="col-sm-6">
                          <h4 className="my-1">List One</h4>
                          <ul className="list-group" id="handle-list-1">
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Cras justo
                              odio
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Dapibus ac
                              facilisis in
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Morbi leo
                              risus
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Porta ac
                              consectetur ac
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Vestibulum
                              at eros
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <h4 className="my-1">List Two</h4>
                          <ul className="list-group" id="handle-list-2">
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Cras justo
                              odio
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Dapibus ac
                              facilisis in
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Morbi leo
                              risus
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Porta ac
                              consectetur ac
                            </li>
                            <li className="list-group-item">
                              <span className="handle me-50">+</span>Vestibulum
                              at eros
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* With Handle Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
