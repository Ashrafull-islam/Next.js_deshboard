"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script
        src="../../../app-assets/vendors/js/vendors.min.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Page Vendor JS */}
      <Script
        src="../../../app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/vendors/js/editors/quill/katex.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/vendors/js/editors/quill/highlight.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/vendors/js/editors/quill/quill.min.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="../../../app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/core/app.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Page JS */}
      <Script
        src="../../../app-assets/js/scripts/pages/page-blog-edit.js"
        strategy="afterInteractive"
      />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Blog Edit
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
                      <li className="breadcrumb-item active">Edit</li>
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
            {/* Blog Edit */}
            <div className="blog-edit-wrapper">
              <div className="row">
                <div className="col-12">
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
                          <h6 className="mb-25">Chad Alexander</h6>
                          <p className="card-text">May 24, 2020</p>
                        </div>
                      </div>
                      {/* Form */}
                      <form action="javascript:;" className="mt-2">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="blog-edit-title"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                id="blog-edit-title"
                                className="form-control"
                                defaultValue="The Best Features Coming to iOS and Web design"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="blog-edit-category"
                              >
                                Category
                              </label>
                              <select
                                id="blog-edit-category"
                                className="select2 form-select"
                                multiple=""
                              >
                                <option value="Fashion" selected="">
                                  Fashion
                                </option>
                                <option value="Food">Food</option>
                                <option value="Gaming" selected="">
                                  Gaming
                                </option>
                                <option value="Quote">Quote</option>
                                <option value="Video">Video</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="blog-edit-slug"
                              >
                                Slug
                              </label>
                              <input
                                type="text"
                                id="blog-edit-slug"
                                className="form-control"
                                defaultValue="the-best-features-coming-to-ios-and-web-design"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="mb-2">
                              <label
                                className="form-label"
                                htmlFor="blog-edit-status"
                              >
                                Status
                              </label>
                              <select
                                className="form-select"
                                id="blog-edit-status"
                              >
                                <option value="Published">Published</option>
                                <option value="Pending">Pending</option>
                                <option value="Draft">Draft</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-2">
                              <label className="form-label">Content</label>
                              <div id="blog-editor-wrapper">
                                <div id="blog-editor-container">
                                  <div className="editor">
                                    <p>
                                      Cupcake ipsum dolor sit. Amet dessert
                                      donut candy chocolate bar cotton dessert
                                      candy chocolate. Candy muffin danish.
                                      Macaroon brownie jelly beans marzipan
                                      cheesecake oat cake. Carrot cake macaroon
                                      chocolate cake. Jelly brownie jelly.
                                      Marzipan pie sweet roll.
                                    </p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      Liquorice dragée cake chupa chups pie
                                      cotton candy jujubes bear claw sesame
                                      snaps. Fruitcake chupa chups chocolate
                                      bonbon lemon drops croissant caramels
                                      lemon drops. Candy jelly cake marshmallow
                                      jelly beans dragée macaroon. Gummies sugar
                                      plum fruitcake. Candy canes candy cupcake
                                      caramels cotton candy jujubes fruitcake.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mb-2">
                            <div className="border rounded p-2">
                              <h4 className="mb-1">Featured Image</h4>
                              <div className="d-flex flex-column flex-md-row">
                                <img
                                  src="../../../app-assets/images/slider/03.jpg"
                                  id="blog-feature-image"
                                  className="rounded me-2 mb-1 mb-md-0"
                                  width={170}
                                  height={110}
                                  alt="Blog Featured Image"
                                />
                                <div className="featured-info">
                                  <small className="text-muted">
                                    Required image resolution 800x400, image
                                    size 10mb.
                                  </small>
                                  <p className="my-50">
                                    <a href="#" id="blog-image-text">
                                      C:\fakepath\banner.jpg
                                    </a>
                                  </p>
                                  <div className="d-inline-block">
                                    <input
                                      className="form-control"
                                      type="file"
                                      id="blogCustomFile"
                                      accept="image/*"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mt-50">
                            <button
                              type="submit"
                              className="btn btn-primary me-1"
                            >
                              Save Changes
                            </button>
                            <button
                              type="reset"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                      {/*/ Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Blog Edit */}
          </div>
        </div>
      </div>
    </>
  );
}
