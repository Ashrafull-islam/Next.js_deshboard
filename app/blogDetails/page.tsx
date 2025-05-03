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
                    Blog Detail
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
                      <li className="breadcrumb-item active">Detail</li>
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
              {/* Blog Detail */}
              <div className="blog-detail-wrapper">
                <div className="row">
                  {/* Blog */}
                  <div className="col-12">
                    <div className="card">
                      <img
                        src="../../../app-assets/images/banner/banner-12.jpg"
                        className="img-fluid card-img-top"
                        alt="Blog Detail Pic"
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          The Best Features Coming to iOS and Web design
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
                        <p className="card-text mb-2">
                          Before you get into the nitty-gritty of coming up with
                          a perfect title, start with a rough draft: your
                          working title. What is that, exactly? A lot of people
                          confuse working titles with topics. Let's clear that
                          Topics are very general and could yield several
                          different blog posts. Think "raising healthy kids," or
                          "kitchen storage." A writer might look at either of
                          those topics and choose to take them in very, very
                          different directions.A working title, on the other
                          hand, is very specific and guides the creation of a
                          single blog post. For example, from the topic "raising
                          healthy kids," you could derive the following working
                          title See how different and specific each of those is?
                          That's what makes them working titles, instead of
                          overarching topics.
                        </p>
                        <h4 className="mb-75">Unprecedented Challenge</h4>
                        <ul className="p-0 mb-2">
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Preliminary thinking systems</span>
                          </li>
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Bandwidth efficient</span>
                          </li>
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Green space</span>
                          </li>
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Social impact</span>
                          </li>
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Thought partnership</span>
                          </li>
                          <li className="d-block">
                            <span className="me-25">-</span>
                            <span>Fully ethical life</span>
                          </li>
                        </ul>
                        <div className="d-flex align-items-start">
                          <div className="avatar me-2">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                              width={60}
                              height={60}
                              alt="Avatar"
                            />
                          </div>
                          <div className="author-info">
                            <h6 className="fw-bolder">Willie Clark</h6>
                            <p className="card-text mb-0">
                              Based in London, Uncode is a blog by Willie Clark.
                              His posts explore modern design trends through
                              photos and quotes by influential creatives and web
                              designer around the world.
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center me-1">
                              <a href="#" className="me-50">
                                <i
                                  data-feather="message-square"
                                  className="font-medium-5 text-body align-middle"
                                />
                              </a>
                              <a href="#">
                                <div className="text-body align-middle">
                                  19.1K
                                </div>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <a href="#" className="me-50">
                                <i
                                  data-feather="bookmark"
                                  className="font-medium-5 text-body align-middle"
                                />
                              </a>
                              <a href="#">
                                <div className="text-body align-middle">
                                  139
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown blog-detail-share">
                            <i
                              data-feather="share-2"
                              className="font-medium-5 text-body cursor-pointer"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                            <div className="dropdown-menu dropdown-menu-end">
                              <a href="#" className="dropdown-item py-50 px-1">
                                <i
                                  data-feather="github"
                                  className="font-medium-3"
                                />
                              </a>
                              <a href="#" className="dropdown-item py-50 px-1">
                                <i
                                  data-feather="gitlab"
                                  className="font-medium-3"
                                />
                              </a>
                              <a href="#" className="dropdown-item py-50 px-1">
                                <i
                                  data-feather="facebook"
                                  className="font-medium-3"
                                />
                              </a>
                              <a href="#" className="dropdown-item py-50 px-1">
                                <i
                                  data-feather="twitter"
                                  className="font-medium-3"
                                />
                              </a>
                              <a href="#" className="dropdown-item py-50 px-1">
                                <i
                                  data-feather="linkedin"
                                  className="font-medium-3"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Blog */}
                  {/* Blog Comment */}
                  <div className="col-12 mt-1" id="blogComment">
                    <h6 className="section-label mt-25">Comment</h6>
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-75">
                            <img
                              src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                              width={38}
                              height={38}
                              alt="Avatar"
                            />
                          </div>
                          <div className="author-info">
                            <h6 className="fw-bolder mb-25">Chad Alexander</h6>
                            <p className="card-text">May 24, 2020</p>
                            <p className="card-text">
                              A variation on the question technique above, the
                              multiple-choice question great way to engage your
                              reader.
                            </p>
                            <a href="#">
                              <div className="d-inline-flex align-items-center">
                                <i
                                  data-feather="corner-up-left"
                                  className="font-medium-3 me-50"
                                />
                                <span>Reply</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Blog Comment */}
                  {/* Leave a Blog Comment */}
                  <div className="col-12 mt-1">
                    <h6 className="section-label mt-25">Leave a Comment</h6>
                    <div className="card">
                      <div className="card-body">
                        <form action="javascript:void(0)" className="form">
                          <div className="row">
                            <div className="col-sm-6 col-12">
                              <div className="mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-12">
                              <div className="mb-2">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-12">
                              <div className="mb-2">
                                <input
                                  type="url"
                                  className="form-control"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <textarea
                                className="form-control mb-2"
                                rows={4}
                                placeholder="Comment"
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-12">
                              <div className="form-check mb-2">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="blogCheckbox"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="blogCheckbox"
                                >
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*/ Leave a Blog Comment */}
                </div>
              </div>
              {/*/ Blog Detail */}
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
                      <a href="#">
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
