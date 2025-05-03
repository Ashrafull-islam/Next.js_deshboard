
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
                    Knowledge Base
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li className="breadcrumb-item active">Knowledge Base</li>
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
            {/* Knowledge base Jumbotron */}
            <section id="knowledge-base-search">
              <div className="row">
                <div className="col-12">
                  <div
                    className="card knowledge-base-bg text-center"
                    style={{
                      backgroundImage:
                        'url("../../../app-assets/images/banner/banner.png")',
                    }}
                  >
                    <div className="card-body">
                      <h2 className="text-primary">
                        Dedicated Source Used on Website
                      </h2>
                      <p className="card-text mb-2">
                        <span>Popular searches: </span>
                        <span className="fw-bolder">
                          Sales automation, Email marketing
                        </span>
                      </p>
                      <form className="kb-search-input">
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i data-feather="search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="searchbar"
                            placeholder="Ask a question..."
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Knowledge base Jumbotron */}
            {/* Knowledge base */}
            <section id="knowledge-base-content">
              <div className="row kb-search-content-info match-height">
                {/* sales card */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/sales.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>Sales Automation</h4>
                        <p className="text-body mt-1 mb-0">
                          There is perhaps no better demonstration of the folly
                          of image of our tiny world.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* marketing */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/marketing.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>Marketing Automation</h4>
                        <p className="text-body mt-1 mb-0">
                          Look again at that dot. That’s here. That’s home.
                          That’s us. On it everyone you love.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* api */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/api.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>API Questions</h4>
                        <p className="text-body mt-1 mb-0">
                          every hero and coward, every creator and destroyer of
                          civilization.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* personalization */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/personalization.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>Personalization</h4>
                        <p className="text-body mt-1 mb-0">
                          It has been said that astronomy is a humbling and
                          character experience.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* email */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/email.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>Email Marketing</h4>
                        <p className="text-body mt-1 mb-0">
                          There is perhaps no better demonstration of the folly
                          of human conceits.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* demand */}
                <div className="col-md-4 col-sm-6 col-12 kb-search-content">
                  <div className="card">
                    <a href="page-kb-category.html">
                      <img
                        src="../../../app-assets/images/illustration/demand.svg"
                        className="card-img-top"
                        alt="knowledge-base-image"
                      />
                      <div className="card-body text-center">
                        <h4>Demand Generation</h4>
                        <p className="text-body mt-1 mb-0">
                          Competent means we will never take anything for
                          granted.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* no result */}
                <div className="col-12 text-center no-result no-items">
                  <h4 className="mt-4">Search result not found!!</h4>
                </div>
              </div>
            </section>
            {/* Knowledge base ends */}
          </div>
        </div>
      </div>
    </>
  );
}
