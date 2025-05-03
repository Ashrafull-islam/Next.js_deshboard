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
                    Accordion
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Accordion</li>
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
            {/* Accordion start */}
            <section id="accordion">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    id="accordionWrapa1"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Basic</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          You may want to open one item at a time, for that you
                          can use accordion.
                        </p>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionOne"
                                aria-expanded="true"
                                aria-controls="accordionOne"
                              >
                                Accordion Item 1
                              </button>
                            </h2>
                            <div
                              id="accordionOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionTwo"
                                aria-expanded="false"
                                aria-controls="accordionTwo"
                              >
                                Accordion Item 2
                              </button>
                            </h2>
                            <div
                              id="accordionTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionThree"
                                aria-expanded="false"
                                aria-controls="accordionThree"
                              >
                                Accordion Item 3
                              </button>
                            </h2>
                            <div
                              id="accordionThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionFour"
                                aria-expanded="false"
                                aria-controls="accordionFour"
                              >
                                Accordion Item 4
                              </button>
                            </h2>
                            <div
                              id="accordionFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Icing sweet roll cotton candy brownie candy
                                canes candy canes. Pie jelly dragée pie. Ice
                                cream jujubes wafer. Wafer croissant carrot cake
                                wafer gummies gummies chupa chups halvah bonbon.
                                Gummi bears cotton candy jelly-o halvah.
                                Macaroon apple pie dragée bonbon marzipan
                                cheesecake. Jelly jelly beans marshmallow.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Accordion end */}
            {/* Accordion Without Arrow start */}
            <section id="accordion-without-arrow">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    id="accordionWrapa1"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Accordion Without Arrow</h4>
                      </div>
                      <div className="card-body">
                        <p>
                          Use class <code>.accordion-without-arrow</code> class
                          with <code>.accordion</code> class for accordion
                          without arrow.
                        </p>
                        <div
                          id="accordionIcon"
                          className="accordion accordion-without-arrow"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header text-body d-flex justify-content-between"
                              id="accordionIconOne"
                            >
                              <button
                                type="button"
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionIcon-1"
                                aria-controls="accordionIcon-1"
                              >
                                Accordion Item 1
                              </button>
                            </h2>
                            <div
                              id="accordionIcon-1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionIcon"
                            >
                              <div className="accordion-body">
                                Lemon drops chocolate cake gummies carrot cake
                                chupa chups muffin topping. Sesame snaps icing
                                marzipan gummi bears macaroon dragée danish
                                caramels powder. Bear claw dragée pastry topping
                                soufflé. Wafer gummi bears marshmallow pastry
                                pie.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header text-body d-flex justify-content-between"
                              id="accordionIconTwo"
                            >
                              <button
                                type="button"
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionIcon-2"
                                aria-controls="accordionIcon-2"
                              >
                                Accordion Item 2
                              </button>
                            </h2>
                            <div
                              id="accordionIcon-2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionIcon"
                            >
                              <div className="accordion-body">
                                Dessert ice cream donut oat cake jelly-o pie
                                sugar plum cheesecake. Bear claw dragée oat cake
                                dragée ice cream halvah tootsie roll. Danish
                                cake oat cake pie macaroon tart donut gummies.
                                Jelly beans candy canes carrot cake. Fruitcake
                                chocolate chupa chups.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header text-body d-flex justify-content-between"
                              id="accordionIconThree"
                            >
                              <button
                                type="button"
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionIcon-3"
                                aria-expanded="true"
                                aria-controls="accordionIcon-3"
                              >
                                Accordion Item 3
                              </button>
                            </h2>
                            <div
                              id="accordionIcon-3"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionIcon"
                            >
                              <div className="accordion-body">
                                Oat cake toffee chocolate bar jujubes.
                                Marshmallow brownie lemon drops cheesecake.
                                Bonbon gingerbread marshmallow sweet jelly beans
                                muffin. Sweet roll bear claw candy canes oat
                                cake dragée caramels. Ice cream wafer danish
                                cookie caramels muffin.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header text-body d-flex justify-content-between"
                              id="accordionIconFour"
                            >
                              <button
                                type="button"
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionIcon-4"
                                aria-expanded="true"
                                aria-controls="accordionIcon-4"
                              >
                                Accordion Item 4
                              </button>
                            </h2>
                            <div
                              id="accordionIcon-4"
                              className="accordion-collapse collapse show"
                              data-bs-parent="#accordionIcon"
                            >
                              <div className="accordion-body">
                                Pastry pudding cookie toffee bonbon jujubes
                                jujubes powder topping. Jelly beans gummi bears
                                sweet roll bonbon muffin liquorice. Wafer
                                lollipop sesame snaps. Brownie macaroon cookie
                                claw candy canes muffin cupcake candy caramels
                                tiramisu.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Accordion Without Arrow end */}
            {/* Accordion with border start */}
            <section id="accordion-with-border">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    id="accordionWrapa50"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Border</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Use class <code>.accordion-border</code> class with
                          your card to create a bordered accordion.
                        </p>
                        <div
                          className="accordion accordion-border"
                          id="accordionBorder"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingBorderOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionBorderOne"
                                aria-expanded="false"
                                aria-controls="accordionBorderOne"
                              >
                                Accordion Item 1
                              </button>
                            </h2>
                            <div
                              id="accordionBorderOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingBorderOne"
                              data-bs-parent="#accordionBorder"
                            >
                              <div className="accordion-body">
                                Gummi bears toffee soufflé jelly carrot cake
                                pudding sweet roll bear claw. Sweet roll
                                gingerbread wafer liquorice cake tiramisu. Gummi
                                bears caramels bonbon icing croissant lollipop
                                topping lollipop danish. Marzipan tootsie roll
                                bonbon toffee icing lollipop cotton candy pie
                                gummies. Gingerbread bear claw chocolate cake
                                bonbon. Liquorice marzipan cotton candy
                                liquorice tootsie roll macaroon marzipan danish.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingBorderTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionBorderTwo"
                                aria-expanded="false"
                                aria-controls="accordionBorderTwo"
                              >
                                Accordion Item 2
                              </button>
                            </h2>
                            <div
                              id="accordionBorderTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingBorderTwo"
                              data-bs-parent="#accordionBorder"
                            >
                              <div className="accordion-body">
                                Jelly tootsie roll sugar plum sesame snaps apple
                                pie. Icing donut pie sesame snaps. Bonbon gummi
                                bears carrot cake muffin chocolate bar. Cupcake
                                pastry candy bonbon. Sesame snaps dragée biscuit
                                chocolate bar candy canes sesame snaps. Lemon
                                drops cake lollipop pastry tart macaroon gummi
                                bears. Powder cheesecake macaroon candy canes
                                dessert bonbon bonbon candy canes.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingBorderThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionBorderThree"
                                aria-expanded="false"
                                aria-controls="accordionBorderThree"
                              >
                                Accordion Item 3
                              </button>
                            </h2>
                            <div
                              id="accordionBorderThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingBorderThree"
                              data-bs-parent="#accordionBorder"
                            >
                              <div className="accordion-body">
                                Soufflé sugar plum bonbon lemon drops candy
                                canes icing brownie. Dessert tart dessert apple
                                pie. Muffin wafer cookie. Soufflé fruitcake
                                lollipop chocolate bar. Muffin gummi bears
                                marzipan sesame snaps gummi bears topping
                                toffee. Cupcake bonbon muffin. Cake caramels
                                candy lollipop cheesecake bonbon soufflé apple
                                pie cake.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingBorderFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordionBorderFour"
                                aria-expanded="false"
                                aria-controls="accordionBorderFour"
                              >
                                Accordion Item 4
                              </button>
                            </h2>
                            <div
                              id="accordionBorderFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingBorderFour"
                              data-bs-parent="#accordionBorder"
                            >
                              <div className="accordion-body">
                                Marzipan candy apple pie icing. Sweet roll
                                pudding dragée icing icing cookie pie fruitcake
                                caramels. Bonbon candy canes candy canes. Dragée
                                jelly beans chocolate bar dragée biscuit
                                fruitcake gingerbread toffee apple pie.
                                Gingerbread donut powder ice cream sesame snaps
                                jelly beans oat cake. Candy wafer pudding dragée
                                gummies. Carrot cake macaroon cake sesame snaps
                                caramels.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Accordion with border end */}
            {/* Accordion with margin start */}
            <section id="accordion-with-margin">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Margin</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To create accordion with margin use{" "}
                        <code>.accordion-margin</code> class as a wrapper for
                        your accordion header.
                      </p>
                      <div
                        className="accordion accordion-margin"
                        id="accordionMargin"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingMarginOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionMarginOne"
                              aria-expanded="false"
                              aria-controls="accordionMarginOne"
                            >
                              Accordion Item 1
                            </button>
                          </h2>
                          <div
                            id="accordionMarginOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingMarginOne"
                            data-bs-parent="#accordionMargin"
                          >
                            <div className="accordion-body">
                              Pastry pudding cookie toffee bonbon jujubes
                              jujubes powder topping. Jelly beans gummi bears
                              sweet roll bonbon muffin liquorice. Wafer lollipop
                              sesame snaps. Brownie macaroon cookie muffin
                              cupcake candy caramels tiramisu. Oat cake
                              chocolate cake sweet jelly-o brownie biscuit
                              marzipan. Jujubes donut marzipan chocolate bar.
                              Jujubes sugar plum jelly beans tiramisu icing
                              cheesecake.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingMarginTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionMarginTwo"
                              aria-expanded="false"
                              aria-controls="accordionMarginTwo"
                            >
                              Accordion Item 2
                            </button>
                          </h2>
                          <div
                            id="accordionMarginTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingMarginTwo"
                            data-bs-parent="#accordionMargin"
                          >
                            <div className="accordion-body">
                              Sweet pie candy jelly. Sesame snaps biscuit sugar
                              plum. Sweet roll topping fruitcake. Caramels
                              liquorice biscuit ice cream fruitcake cotton candy
                              tart. Donut caramels gingerbread jelly-o
                              gingerbread pudding. Gummi bears pastry
                              marshmallow candy canes pie. Pie apple pie carrot
                              cake.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingMarginThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionMarginThree"
                              aria-expanded="false"
                              aria-controls="accordionMarginThree"
                            >
                              Accordion Item 3
                            </button>
                          </h2>
                          <div
                            id="accordionMarginThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingMarginThree"
                            data-bs-parent="#accordionMargin"
                          >
                            <div className="accordion-body">
                              Tart gummies dragée lollipop fruitcake pastry oat
                              cake. Cookie jelly jelly macaroon icing jelly
                              beans soufflé cake sweet. Macaroon sesame snaps
                              cheesecake tart cake sugar plum. Dessert jelly-o
                              sweet muffin chocolate candy pie tootsie roll
                              marzipan. Carrot cake marshmallow pastry. Bonbon
                              biscuit pastry topping toffee dessert gummies.
                              Topping apple pie pie croissant cotton candy
                              dessert tiramisu.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingMarginFour"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionMarginFour"
                              aria-expanded="false"
                              aria-controls="accordionMarginFour"
                            >
                              Accordion Item 4
                            </button>
                          </h2>
                          <div
                            id="accordionMarginFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingMarginFour"
                            data-bs-parent="#accordionMargin"
                          >
                            <div className="accordion-body">
                              Cheesecake muffin cupcake dragée lemon drops
                              tiramisu cake gummies chocolate cake. Marshmallow
                              tart croissant. Tart dessert tiramisu marzipan
                              lollipop lemon drops. Cake bonbon bonbon gummi
                              bears topping jelly beans brownie jujubes muffin.
                              Donut croissant jelly-o cake marzipan. Liquorice
                              marzipan cookie wafer tootsie roll. Tootsie roll
                              sweet cupcake.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Accordion with margin end */}
            {/* Accordion with hover start */}
            <section id="accordion-hover">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Hover</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        To create accordion which opens on hover use{" "}
                        <code>data-toggle-hover="true"</code> as an attribute
                        with your accordion class
                      </p>
                      <div
                        className="accordion"
                        id="accordionHover"
                        data-toggle-hover="true"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingHoverOne">
                            <button
                              className="accordion-button collapsed accordion-hover-title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionHoverOne"
                              aria-expanded="false"
                              aria-controls="accordionHoverOne"
                            >
                              Accordion Item 1
                            </button>
                          </h2>
                          <div
                            id="accordionHoverOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingHoverOne"
                            data-bs-parent="#accordionHover"
                          >
                            <div className="accordion-body">
                              Pastry bear claw caramels ice cream pudding candy
                              candy canes wafer ice cream. Topping sesame snaps
                              cookie pastry ice cream toffee jujubes ice cream.
                              Bear claw bonbon cotton candy candy jujubes. Jelly
                              beans candy canes ice cream gummies gingerbread
                              dragée sweet cookie croissant. Chocolate cake
                              macaroon donut candy. Soufflé chocolate bar
                              liquorice lemon drops sweet cookie.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingHoverTwo">
                            <button
                              className="accordion-button collapsed accordion-hover-title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionHoverTwo"
                              aria-expanded="false"
                              aria-controls="accordionHoverTwo"
                            >
                              Accordion Item 2
                            </button>
                          </h2>
                          <div
                            id="accordionHoverTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingHoverTwo"
                            data-bs-parent="#accordionHover"
                          >
                            <div className="accordion-body">
                              Cake lollipop bonbon icing. Candy canes cookie
                              caramels cookie bonbon liquorice. Jelly-o carrot
                              cake carrot cake carrot cake danish powder.
                              Caramels candy tootsie roll tart chocolate bar
                              candy canes muffin gummies. Liquorice dragée
                              jujubes chocolate bar jelly-o topping. Cotton
                              candy dragée candy pudding tart sweet roll.
                              Chocolate cupcake chocolate jelly-o pastry candy
                              canes cupcake chupa chups.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingHoverThree"
                          >
                            <button
                              className="accordion-button collapsed accordion-hover-title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionHoverThree"
                              aria-expanded="false"
                              aria-controls="accordionHoverThree"
                            >
                              Accordion Item 3
                            </button>
                          </h2>
                          <div
                            id="accordionHoverThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingHoverThree"
                            data-bs-parent="#accordionHover"
                          >
                            <div className="accordion-body">
                              Cup Cake danish apple pie. Tart pastry sweet roll
                              oat cake marzipan muffin jelly gummies. Carrot
                              cake wafer topping sweet roll cupcake pastry.
                              Biscuit pastry bonbon. Cupcake lollipop topping
                              caramels jelly beans bear claw. Toffee candy canes
                              dessert pastry cheesecake chocolate bar. Candy
                              croissant pastry.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingHoverFour"
                          >
                            <button
                              className="accordion-button collapsed accordion-hover-title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionHoverFour"
                              aria-expanded="false"
                              aria-controls="accordionHoverFour"
                            >
                              Accordion Item 4
                            </button>
                          </h2>
                          <div
                            id="accordionHoverFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingHoverFour"
                            data-bs-parent="#accordionHover"
                          >
                            <div className="accordion-body">
                              Candy croissant pastry. Cake danish apple pie.
                              Tart pastry sweet roll oat cake marzipan muffin
                              jelly gummies. Carrot cake wafer topping sweet
                              roll cupcake pastry. Biscuit pastry bonbon.
                              Cupcake lollipop topping caramels jelly beans bear
                              claw. Toffee candy canes dessert pastry cheesecake
                              chocolate bar.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Accordion with hover end */}
          </div>
        </div>
      </div>
    </>
  );
}
