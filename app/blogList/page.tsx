
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
                    Blog List
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Blog</a>
                      </li>
                      <li className="breadcrumb-item active">List</li>
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
          <div className="content-detached content-left">
            <div className="content-body">
              {/* Blog List */}
              <div className="blog-list-wrapper">
                {/* Blog List Items */}
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/02.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            The Best Features Coming to iOS and Web design
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Ghani Pradita
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-info me-50">
                              Quote
                            </span>
                          </a>
                          <a href="#">
                            <span className="badge rounded-pill badge-light-primary">
                              Fashion
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          Donut fruitcake soufflé apple pie candy canes jujubes
                          croissant chocolate bar ice cream.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                76 Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/06.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            Latest Quirky Opening Sentence or Paragraph
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Jorge Griffin
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-danger me-50">
                              Gaming
                            </span>
                          </a>
                          <a href="#">
                            <span className="badge rounded-pill badge-light-warning">
                              Video
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          Apple pie caramels lemon drops halvah liquorice carrot
                          cake. Tiramisu brownie lemon drops.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                2.1k Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/04.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            Share an Amazing and Shocking Fact or Statistic
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Claudia Neal
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-danger me-50">
                              Gaming
                            </span>
                          </a>
                          <a href="#">
                            <span className="badge rounded-pill badge-light-success">
                              Food
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          Tiramisu jelly-o chupa chups tootsie roll donut wafer
                          marshmallow cheesecake topping.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                243 Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/03.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            Withhold a Compelling Piece of Information
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-14.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Fred Boone
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-warning">
                              Video
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          Croissant apple pie lollipop gingerbread. Cookie
                          jujubes chocolate cake icing cheesecake.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                10 Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/09.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            Unadvertised Bonus Opening: Share a Quote
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-13.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Billy French
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-info me-50">
                              Quote
                            </span>
                          </a>
                          <a href="#">
                            <span className="badge rounded-pill badge-light-primary">
                              Fashion
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          Muffin liquorice candy soufflé bear claw apple pie
                          icing halvah. Pie marshmallow jelly.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                319 Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="card">
                      <a href="page-blog-detail.html">
                        <img
                          className="card-img-top img-fluid"
                          src="../../../app-assets/images/slider/10.jpg"
                          alt="Blog Post pic"
                        />
                      </a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href="page-blog-detail.html"
                            className="blog-title-truncate text-body-heading"
                          >
                            Ships at a distance have Every Man’s Wish on Board
                          </a>
                        </h4>
                        <div className="d-flex">
                          <div className="avatar me-50">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                              alt="Avatar"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="author-info">
                            <small className="text-muted me-25">by</small>
                            <small>
                              <a href="#" className="text-body">
                                Helena Hunt
                              </a>
                            </small>
                            <span className="text-muted ms-50 me-25">|</span>
                            <small className="text-muted">Jan 10, 2020</small>
                          </div>
                        </div>
                        <div className="my-1 py-25">
                          <a href="#">
                            <span className="badge rounded-pill badge-light-primary me-50">
                              Fashion
                            </span>
                          </a>
                          <a href="#">
                            <span className="badge rounded-pill badge-light-warning">
                              Video
                            </span>
                          </a>
                        </div>
                        <p className="card-text blog-content-truncate">
                          A little personality goes a long way, especially on a
                          business blog. So don’t be afraid to let loose.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="page-blog-detail.html#blogComment">
                            <div className="d-flex align-items-center">
                              <i
                                data-feather="message-square"
                                className="font-medium-1 text-body me-50"
                              />
                              <span className="text-body fw-bold">
                                1.5k Comments
                              </span>
                            </div>
                          </a>
                          <a href="page-blog-detail.html" className="fw-bold">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Blog List Items */}
                {/* Pagination */}
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center mt-2">
                        <li className="page-item prev-item">
                          <a className="page-link" href="#" />
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            6
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            7
                          </a>
                        </li>
                        <li className="page-item next-item">
                          <a className="page-link" href="#" />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/*/ Pagination */}
              </div>
              {/*/ Blog List */}
            </div>
          </div>
          <div className="sidebar-detached sidebar-right">
            <div className="sidebar">
              <div className="blog-sidebar my-2 my-lg-0">
                {/* Search bar */}
                <div className="blog-search">
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="search" />
                    </span>
                  </div>
                </div>
                {/*/ Search bar */}
                {/* Recent Posts */}
                <div className="blog-recent-posts mt-3">
                  <h6 className="section-label">Recent Posts</h6>
                  <div className="mt-75">
                    <div className="d-flex mb-2">
                      <a href="page-blog-detail.html" className="me-2">
                        <img
                          className="rounded"
                          src="../../../app-assets/images/banner/banner-22.jpg"
                          width={100}
                          height={70}
                          alt="Recent Post Pic"
                        />
                      </a>
                      <div className="blog-info">
                        <h6 className="blog-recent-post-title">
                          <a
                            href="page-blog-detail.html"
                            className="text-body-heading"
                          >
                            Why Should Forget Facebook?
                          </a>
                        </h6>
                        <div className="text-muted mb-0">Jan 14 2020</div>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <a href="page-blog-detail.html" className="me-2">
                        <img
                          className="rounded"
                          src="../../../app-assets/images/banner/banner-27.jpg"
                          width={100}
                          height={70}
                          alt="Recent Post Pic"
                        />
                      </a>
                      <div className="blog-info">
                        <h6 className="blog-recent-post-title">
                          <a
                            href="page-blog-detail.html"
                            className="text-body-heading"
                          >
                            Publish your passions, your way
                          </a>
                        </h6>
                        <div className="text-muted mb-0">Mar 04 2020</div>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <a href="page-blog-detail.html" className="me-2">
                        <img
                          className="rounded"
                          src="../../../app-assets/images/banner/banner-39.jpg"
                          width={100}
                          height={70}
                          alt="Recent Post Pic"
                        />
                      </a>
                      <div className="blog-info">
                        <h6 className="blog-recent-post-title">
                          <a
                            href="page-blog-detail.html"
                            className="text-body-heading"
                          >
                            The Best Ways to Retain More
                          </a>
                        </h6>
                        <div className="text-muted mb-0">Feb 18 2020</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <a href="page-blog-detail.html" className="me-2">
                        <img
                          className="rounded"
                          src="../../../app-assets/images/banner/banner-35.jpg"
                          width={100}
                          height={70}
                          alt="Recent Post Pic"
                        />
                      </a>
                      <div className="blog-info">
                        <h6 className="blog-recent-post-title">
                          <a
                            href="page-blog-detail.html"
                            className="text-body-heading"
                          >
                            Share a Shocking Fact or Statistic
                          </a>
                        </h6>
                        <div className="text-muted mb-0">Oct 08 2020</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Recent Posts */}
                {/* Categories */}
                <div className="blog-categories mt-3">
                  <h6 className="section-label">Categories</h6>
                  <div className="mt-1">
                    <div className="d-flex justify-content-start align-items-center mb-75">
                      <a href="#" className="me-75">
                        <div className="avatar bg-light-primary rounded">
                          <div className="avatar-content">
                            <i
                              data-feather="watch"
                              className="avatar-icon font-medium-1"
                            />
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="blog-category-title text-body">
                          Fashion
                        </div>
                      </a>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-75">
                      <a href="#" className="me-75">
                        <div className="avatar bg-light-success rounded">
                          <div className="avatar-content">
                            <i
                              data-feather="shopping-cart"
                              className="avatar-icon font-medium-1"
                            />
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="blog-category-title text-body">
                          Food
                        </div>
                      </a>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-75">
                      <a href="#" className="me-75">
                        <div className="avatar bg-light-danger rounded">
                          <div className="avatar-content">
                            <i
                              data-feather="command"
                              className="avatar-icon font-medium-1"
                            />
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="blog-category-title text-body">
                          Gaming
                        </div>
                      </a>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-75">
                      <a href="#" className="me-75">
                        <div className="avatar bg-light-info rounded">
                          <div className="avatar-content">
                            <i
                              data-feather="hash"
                              className="avatar-icon font-medium-1"
                            />
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="blog-category-title text-body">
                          Quote
                        </div>
                      </a>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <a href="#" className="me-75">
                        <div className="avatar bg-light-warning rounded">
                          <div className="avatar-content">
                            <i
                              data-feather="video"
                              className="avatar-icon font-medium-1"
                            />
                          </div>
                        </div>
                      </a>
                      <a href="">
                        <div className="blog-category-title text-body">
                          Video
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/*/ Categories */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
