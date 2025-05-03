
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
                    Collapse
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Components</a>
                      </li>
                      <li className="breadcrumb-item active">Collapse</li>
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
            {/* Collapse start */}
            <section id="collapsible">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Toggle the visibility of content across your project
                        with a few classes and our JavaScript plugins.
                      </p>
                      <p className="mb-2 demo-inline-spacing">
                        <a
                          className="btn btn-primary me-1"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Link with href
                        </a>
                        <button
                          className="btn btn-primary me-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Button with data-bs-target
                        </button>
                      </p>
                      <div className="collapse" id="collapseExample">
                        <div className="d-flex p-1 border">
                          <img
                            src="../../../app-assets/images/slider/04.jpg"
                            alt="collapse-image"
                            height={125}
                            className="me-2"
                          />
                          <span>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.It is a long established fact that a
                            reader will be distracted by the readable content of
                            a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Collapse end */}
            {/* Collapse start */}
            <section id="multi-collapsible">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple targets</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Show and hide multiple elements by referencing them with
                        a selector.
                      </p>
                      <p className="mb-2 demo-inline-spacing">
                        <a
                          className="btn btn-primary me-1"
                          data-bs-toggle="collapse"
                          href="#multiCollapseExample1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                        >
                          Toggle first element
                        </a>
                        <button
                          className="btn btn-primary me-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#multiCollapseExample2"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample2"
                        >
                          Toggle second element
                        </button>
                        <button
                          className="btn btn-primary me-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".multi-collapse"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1 multiCollapseExample2"
                        >
                          Toggle both elements
                        </button>
                      </p>
                      <div className="row">
                        <div className="col-lg">
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample1"
                          >
                            <div className="d-flex p-1 border">
                              <img
                                src="../../../app-assets/images/slider/06.jpg"
                                alt="collapse-image"
                                height={125}
                                className="me-2"
                              />
                              <span>
                                All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary,
                                making this the first true generator on the
                                Internet. It uses a dictionary of over 200 Latin
                                words, combined with a handful of model sentence
                                structures, to generate Lorem Ipsum which looks
                                reasonable.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg">
                          <div
                            className="collapse multi-collapse mt-lg-0 mt-1"
                            id="multiCollapseExample2"
                          >
                            <div className="d-flex p-1 border">
                              <img
                                src="../../../app-assets/images/slider/08.jpg"
                                alt="collapse-image"
                                height={125}
                                className="me-2"
                              />
                              <span>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum.It is a long established fact that a
                                reader content.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Collapse end */}
            {/* Horizontal Collapse start*/}
            <section id="horizontalCollapse">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Horizontal Collapse</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The collapse plugin also supports horizontal collapsing.
                        Add the .collapse-horizontal modifier class to
                        transition the width instead of height and set a width
                        on the immediate child element.
                      </p>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample"
                        aria-expanded="false"
                        aria-controls="collapseWidthExample"
                      >
                        Toggle width collapse
                      </button>
                      <div className="height-150 mt-2">
                        <div
                          className="collapse collapse-horizontal show"
                          id="collapseWidthExample"
                        >
                          <div className="d-flex width-300 border p-1">
                            <img
                              src="../../../app-assets/images/slider/08.jpg"
                              alt="collapse-image"
                              width={100}
                              height={100}
                              className="me-1"
                            />
                            <div className="flex-grow-1">
                              This is some content from a media component. You
                              can replace this with any content and adjust it as
                              needed.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Horizontal Collapse end*/}
          </div>
        </div>
      </div>
    </>
  );
}
