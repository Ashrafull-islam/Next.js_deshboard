
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
            <h2 className="content-header-title float-start mb-0">OffCanvas</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Components</a>
                </li>
                <li className="breadcrumb-item active">OffCanvas</li>
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
      {/* Basic Offcanvas */}
      <section id="basic-offcanvas">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Offcanvas Placements</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  {/* Basic Offcanvas */}
                  <div className="offcanvas-start-example">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasStart"
                      aria-controls="offcanvasStart"
                    >
                      Toggle Start
                    </button>
                    <div
                      className="offcanvas offcanvas-start"
                      tabIndex={-1}
                      id="offcanvasStart"
                      aria-labelledby="offcanvasStartLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          id="offcanvasStartLabel"
                          className="offcanvas-title"
                        >
                          Offcanvas Start
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                        <p className="text-center">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mb-1 d-grid w-100"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary d-grid w-100"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Basic offcanvas end */}
                  {/* End Offcanvas */}
                  <div className="offcanvas-end-example">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasEnd"
                      aria-controls="offcanvasEnd"
                    >
                      Toggle End
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="offcanvasEnd"
                      aria-labelledby="offcanvasEndLabel"
                    >
                      <div className="offcanvas-header">
                        <h5 id="offcanvasEndLabel" className="offcanvas-title">
                          Offcanvas End
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                        <p className="text-center">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mb-1 d-grid w-100"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary d-grid w-100"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ End Offcanvas*/}
                  {/* Top Offcanvas */}
                  <div className="offcanvas-top-example">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop"
                      aria-controls="offcanvasTop"
                    >
                      Toggle Top
                    </button>
                    <div
                      className="offcanvas offcanvas-top"
                      tabIndex={-1}
                      id="offcanvasTop"
                      aria-labelledby="offcanvasTopLabel"
                    >
                      <div className="offcanvas-header">
                        <h5 id="offcanvasTopLabel" className="offcanvas-title">
                          Offcanvas Top
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <p>
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button type="button" className="btn btn-primary me-1">
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Top Offcanvas end*/}
                  {/* Bottom Offcanvas */}
                  <div className="offcanvas-bottom-example">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasBottom"
                      aria-controls="offcanvasBottom"
                    >
                      Toggle Bottom
                    </button>
                    <div
                      className="offcanvas offcanvas-bottom"
                      tabIndex={-1}
                      id="offcanvasBottom"
                      aria-labelledby="offcanvasBottomLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          id="offcanvasBottomLabel"
                          className="offcanvas-title"
                        >
                          Offcanvas Bottom
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <p>
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button type="button" className="btn btn-primary me-1">
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Offcanvas end*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Basic Offcanvas */}
      {/* Basic Offcanvas */}
      <section id="basic-offcanvas">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Backdrop</h4>
              </div>
              <div className="card-body">
                <div className="demo-inline-spacing">
                  {/* Enable Body Scrolling */}
                  <div className="enable-body-scrolling">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasScroll"
                      aria-controls="offcanvasScroll"
                    >
                      Enable Body Scrolling
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      data-bs-scroll="true"
                      data-bs-backdrop="false"
                      tabIndex={-1}
                      id="offcanvasScroll"
                      aria-labelledby="offcanvasScrollLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          id="offcanvasScrollLabel"
                          className="offcanvas-title"
                        >
                          Offcanvas Scroll
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                        <p className="text-center">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mb-1 d-grid w-100"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary d-grid w-100"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ Enable Body Scrolling */}
                  {/* Enable backdrop (default) */}
                  <div className="enable-backdrop">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasBackdrop"
                      aria-controls="offcanvasBackdrop"
                    >
                      Enable Backdrop
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="offcanvasBackdrop"
                      aria-labelledby="offcanvasBackdropLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          id="offcanvasBackdropLabel"
                          className="offcanvas-title"
                        >
                          Enable backdrop
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                        <p className="text-center">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mb-1 d-grid w-100"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary d-grid w-100"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ Enable backdrop (default) */}
                  {/* Enable Scrolling & Backdrop */}
                  <div className="enable-scrolling-backdrop">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasBoth"
                      aria-controls="offcanvasBoth"
                    >
                      Enable Both Scrolling &amp; Backdrop
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      data-bs-scroll="true"
                      tabIndex={-1}
                      id="offcanvasBoth"
                      aria-labelledby="offcanvasBothLabel"
                    >
                      <div className="offcanvas-header">
                        <h5 id="offcanvasBothLabel" className="offcanvas-title">
                          Enable both scrolling &amp; backdrop
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                        <p className="text-center">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century who is thought to have
                          scrambled parts of Cicero's De Finibus Bonorum et
                          Malorum for use in a type specimen book.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mb-1 d-grid w-100"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary d-grid w-100"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/ Enable Scrolling & Backdrop */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Offcanvas end */}
    </div>
  </div>
</div>

    </>
  )
}
