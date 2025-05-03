
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
              List Group
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">List Group</li>
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
      {/* Basic ListGroups start */}
      <section id="basic-list-group">
        <div className="row match-height">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Simple List Group</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  The most basic list group is simply an unordered list with
                  list items, and the proper classes. Build upon it with the
                  options that follow, or your own CSS as needed.
                </p>
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Disabled items</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add <code>.disabled</code> to a <code>.list-group-item</code>{" "}
                  to gray it out to appear disabled.
                </p>
                <div className="list-group">
                  <span className="list-group-item disabled">
                    Cras justo odio{" "}
                  </span>
                  <span className="list-group-item">
                    Dapibus ac facilisis in
                  </span>
                  <span className="list-group-item">Morbi leo risus</span>
                  <span className="list-group-item">
                    Porta ac consectetur ac
                  </span>
                  <span className="list-group-item">Vestibulum at eros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic ListGroups end */}
      {/* With Icons and Badges start */}
      <section id="list-group-number-icons">
        <div className="row match-height">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Numbered</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Just add the <code>.list-group-numbered</code> modifier class
                  to opt into numbered list group items.
                </p>
                <ul className="list-group list-group-numbered">
                  <li className="list-group-item">
                    <span>Cupcake sesame snaps dessert marzipan.</span>
                  </li>
                  <li className="list-group-item">
                    <span>
                      Jelly beans jelly-o gummi bears chupa chups marshmallow.
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span>Bonbon macaroon gummies pie jelly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Icon &amp; Badges</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use Utility classes <code>.d-flex</code>{" "}
                  <code>align-items-center</code> to create space between badge
                  and your content
                </p>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="me-1" data-feather="instagram" />
                    <span> Biscuit jelly beans macaroon danish pudding.</span>
                    <span className="badge bg-primary rounded-pill ms-auto">
                      4
                    </span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="me-1" data-feather="facebook" />
                    <span> chocolate cheesecake candy</span>
                    <span className="badge bg-primary rounded-pill ms-auto">
                      2
                    </span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="me-1" data-feather="twitter" />
                    <span> Oat cake icing pastry pie carrot</span>
                    <span className="badge bg-primary rounded-pill ms-auto">
                      1
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* With Icons and Badges end */}
      {/* Anchors and buttons start */}
      <section id="anchors-n-buttons">
        <div className="row match-height">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Anchors</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use anchors to create actionable list group items with hover,
                  disabled, and active states by adding
                  <code>.list-group-item-action</code>. This separate class
                  contains a few overrides to add compatibility for
                  <code>&lt;a&gt;</code> as well as the hover and focus states.
                </p>
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                  >
                    Cras justo odio{" "}
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Dapibus ac facilisis in
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Morbi leo risus
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    Porta ac consectetur ac
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled"
                  >
                    Vestibulum at eros
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Buttons</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  You can use <code>.list-group-item-action</code> for{" "}
                  <code>&lt;button&gt;</code> tag also. This separate class
                  contains a few overrides to add compatibility for{" "}
                  <code>&lt;button&gt;</code>s as well as the hover and focus
                  states.{" "}
                  <strong>
                    Be sure to not use the standard <code>.btn</code> classes
                    here.
                  </strong>
                </p>
                <div className="list-group">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action active"
                  >
                    Cras justo odio
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Dapibus ac facilisis in
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Morbi leo risus
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Porta ac consectetur ac
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action disabled"
                  >
                    Vestibulum at eros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Anchors and buttons end */}
      {/* Contextual and Custom List groups start */}
      <section id="custom-listgroup">
        <div className="row match-height">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Contextual classes</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Use contextual classes to style list items, default or linked.
                  Also includes .active state.
                </p>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-primary">
                    A simple primary list group item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    A simple secondary list group item
                  </li>
                  <li className="list-group-item list-group-item-success">
                    A simple success list group item
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    A simple danger list group item
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    A simple warning list group item
                  </li>
                  <li className="list-group-item list-group-item-info">
                    A simple info list group item
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    A simple dark list group item
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Custom content</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add nearly any HTML within, even for linked list groups like
                  the one below.
                </p>
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1 text-white">
                        List group item heading
                      </h5>
                      <small className="text-secondary">3 days ago</small>
                    </div>
                    <p className="card-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-secondary">
                      Donec id elit non mi porta.
                    </small>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-secondary">3 days ago</small>
                    </div>
                    <p className="card-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-secondary">
                      Donec id elit non mi porta.
                    </small>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-secondary">3 days ago</small>
                    </div>
                    <p className="card-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-secondary">
                      Donec id elit non mi porta.
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contextual and Custom List groups end */}
      {/* Flush and Horizontal list group starts */}
      <section id="flush-and-horizontal-list-group">
        <div className="row match-height">
          <div className="col-lg-6 md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Flush</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add <code>.list-group-flush</code> with{" "}
                  <code>.list-group</code> to remove some borders and rounded
                  corners to render list group items edge-to-edge in a parent
                  container (e.g., cards).
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Sweet gummi bears gingerbread carrot
                  </li>
                  <li className="list-group-item">
                    Cake macaroon brownie wafer soufflé
                  </li>
                  <li className="list-group-item">Jelly beans lemon drops</li>
                  <li className="list-group-item">
                    Lollipop ice cream donut chupa chups
                  </li>
                  <li className="list-group-item">
                    Chocolate candy canes tootsie roll
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Horizontal</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Add <code>.list-group-horizontal</code> to change the layout
                  of list group items from vertical to horizontal across all
                  breakpoints. Choose a responsive variant code
                  <code>
                    .list-group-horizontal-{"{"}sm|md|lg|xl{"}"}
                  </code>{" "}
                  to make a list group horizontal starting at that breakpoint’s
                  min-width.
                </p>
                <div className="alert alert-info my-2">
                  <div className="alert-body d-flex align-items-center">
                    <i data-feather="info" className="me-50" />
                    <span>
                      horizontal list groups cannot be combined with flush list
                      groups.
                    </span>
                  </div>
                </div>
                <ul className="list-group list-group-horizontal-sm">
                  <li className="list-group-item">Chocolate cake</li>
                  <li className="list-group-item">Cookie pie</li>
                  <li className="list-group-item">Cheesecake</li>
                  <li className="list-group-item">Cotton candy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flush and Horizontal list group Ends */}
      {/*List group with tabs Starts*/}
      <section id="list-group-tabs">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List Group Navigation</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  You can activate a list group navigation without writing any
                  JavaScript by simply specifying
                  <code> data-bs-toggle="list"</code> or on an element. Use
                  these data attributes on
                  <code>.list-group-item</code>.
                </p>
                <div className="row mt-1">
                  <div className="col-md-4 col-sm-12">
                    <div className="list-group" id="list-tab" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        id="list-home-list"
                        data-bs-toggle="list"
                        href="#list-home"
                        role="tab"
                        aria-controls="list-home"
                      >
                        Home
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        id="list-profile-list"
                        data-bs-toggle="list"
                        href="#list-profile"
                        role="tab"
                        aria-controls="list-profile"
                      >
                        Profile
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        id="list-messages-list"
                        data-bs-toggle="list"
                        href="#list-messages"
                        role="tab"
                        aria-controls="list-messages"
                      >
                        Messages
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        id="list-settings-list"
                        data-bs-toggle="list"
                        href="#list-settings"
                        role="tab"
                        aria-controls="list-settings"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12 mt-1">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="list-home"
                        role="tabpanel"
                        aria-labelledby="list-home-list"
                      >
                        <p className="card-text">
                          Croissant jelly-o halvah chocolate sesame snaps.
                          Brownie caramels candy canes chocolate cake
                          marshmallow icing lollipop I love. Gummies macaroon
                          donut caramels biscuit topping danish.
                        </p>
                        <p className="card-text">
                          Tiramisu donut bonbon gummi bears. Brownie cake
                          lollipop cheesecake gingerbread brownie. Tart sugar
                          plum cake I love croissant I love apple pie.Gummies I
                          love apple pie sugar plum lemon drops candy canes
                          cake. Pastry I love jelly beans jelly beans brownie
                          bear claw caramels. Pastry I love cake liquorice icing
                          icing. I love carrot cake cupcake jelly-o wafer cookie
                          jujubes cake.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="list-profile"
                        role="tabpanel"
                        aria-labelledby="list-profile-list"
                      >
                        <p className="card-text">
                          Jelly beans topping I love chocolate cake. Lemon drops
                          jujubes jelly I love I love marshmallow gummies icing.
                          Liquorice jelly-o lemon drops sugar plum.Bear claw
                          chupa chups soufflé tart carrot cake dessert. I love
                          tiramisu I love marzipan candy canes brownie
                          marshmallow wafer. I love sugar plum cheesecake gummi
                          bears I love pudding halvah gummi bears.
                        </p>
                        <p className="card-text">
                          I love donut dragée cupcake. Tootsie roll tart soufflé
                          tart powder sesame snaps lollipop. Jelly beans tart
                          macaroon I love biscuit. I love danish cheesecake
                          sugar plum dragée croissant I love danish.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="list-messages"
                        role="tabpanel"
                        aria-labelledby="list-messages-list"
                      >
                        <p className="card-text">
                          Dragée dessert sweet roll chocolate bar. Gummi bears I
                          love dragée pie I love. Cake pastry I love cookie.
                        </p>
                        <p className="card-text">
                          Wafer cheesecake cheesecake. Pastry bonbon chocolate
                          pastry pudding topping sweet roll lollipop. I love
                          macaroon gummi bears cookie topping chocolate bar
                          carrot cake.Sweet roll pastry chocolate cake tiramisu
                          dessert marzipan pudding cake. Cake macaroon danish
                          jelly beans I love chocolate cookie sugar plum. Jelly
                          beans chocolate cake sugar plum carrot cake.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="list-settings"
                        role="tabpanel"
                        aria-labelledby="list-settings-list"
                      >
                        <p className="card-text">
                          Muffin apple pie fruitcake. Chocolate cake chocolate
                          cake oat cake I love soufflé brownie. I love
                          marshmallow topping marshmallow I love.
                        </p>
                        <p className="card-text">
                          Caramels chocolate lollipop marshmallow croissant
                          jelly beans jelly donut I love. Gummies toffee
                          marshmallow ice cream biscuit. Candy sweet
                          cupcake.Sugar plum cotton candy cupcake chocolate cake
                          candy liquorice biscuit. Icing powder biscuit dragée
                          gummies fruitcake I love. Sweet jelly-o fruitcake
                          powder. Dessert gummi bears cake gingerbread tiramisu
                          cake I love caramels dessert.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*List group with tabs Ends*/}
    </div>
  </div>
</div>

    </>
  )
}
