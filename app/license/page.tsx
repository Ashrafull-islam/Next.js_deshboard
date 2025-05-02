"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      <Script
        src="../../../app-assets/vendors/js/vendors.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script
        src="../../../app-assets/js/core/app.js"
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
                    License
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li className="breadcrumb-item active">License</li>
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
            <section>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Our License Usage</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mb-2 pb-1">
                    Use of any product you buy from PIXINVENT is bound by the
                    license you purchase. It will allow you the non-exclusive
                    access to use it in your personal as well as client
                    projects.
                  </p>
                  {/* table */}
                  <div className="table-responsive mb-3">
                    <table className="table table-bordered text-nowrap text-center">
                      <thead>
                        <tr>
                          <th scope="col" />
                          <th scope="col">SINGLE</th>
                          <th scope="col">MULTIPLE</th>
                          <th scope="col">EXTENDED</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="text-start">
                            Number of end products
                          </th>
                          <td>1</td>
                          <td>Unlimited 🤩</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Use in single free end product
                          </th>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Free end product (Can have multiple End Users)
                          </th>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Use in multiple free end product
                          </th>
                          <td>
                            <i
                              data-feather="x"
                              className="text-danger font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Use in single end product that’s sold
                          </th>
                          <td>
                            <i
                              data-feather="x"
                              className="text-danger font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="x"
                              className="text-danger font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="check"
                              className="text-success font-medium-5"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Create SaaS Application
                          </th>
                          <td>
                            <i
                              data-feather="x"
                              className="text-danger font-medium-5"
                            />
                          </td>
                          <td>
                            <i
                              data-feather="x"
                              className="text-danger font-medium-5"
                            />
                          </td>
                          <td>Single</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* / table */}
                  {/* single license */}
                  <h5>Single License</h5>
                  <ul className="ps-25 ms-1">
                    <li>
                      You have rights to use our product for your personal or
                      client project.
                    </li>
                    <li>
                      You can modify our product as per your needs and use it
                      for your personal or client project.
                    </li>
                  </ul>
                  <p className="card-text mb-2 pb-75">
                    With Single License you will be able to use our product for
                    yourself or your client project for 1 time. If you want to
                    use it for multiple times, you need to buy another regular
                    license every time. Ownership and Copyright of our template
                    will stay with ThemeSelection after purchasing single
                    license. That means you are allowed to use our template in
                    your project and use for one client or yourself,
                  </p>
                  {/* multiple license */}
                  <h5>Multiple License</h5>
                  <ul className="ps-25 ms-1">
                    <li>
                      You can use our product for your personal or client
                      project. 😎
                    </li>
                    <li>
                      You can use our product for unlimited projects when end
                      users are not charged.
                    </li>
                  </ul>
                  <p className="card-text mb-2 pb-75">
                    With Multiple Use License you will be able to use our
                    product for yourself as well as your client projects. You
                    can use product for unlimited projects. Ownership and
                    Copyright of our template will stay with ThemeSelection
                    after purchasing multiple use license. That means you are
                    allowed to use our template in your project and use for
                    multiple clients and yourself, but you are not allowed to
                    create SaaS application and sell that,
                  </p>
                  {/* extended license */}
                  <h5>Extended License</h5>
                  <ul className="ps-25 ms-1">
                    <li>
                      You can use our product for your personal or client
                      project.
                    </li>
                    <li>
                      You cannot resell, redistribute, lease, license or offer
                      the product to any third party.
                    </li>
                  </ul>
                  <p className="card-text mb-2 pb-1">
                    With Extended License you will be able to use our product
                    for yourself or your client project for one time. You can
                    use it for building one project. Ownership and Copyright of
                    our template will remain with ThemeSelection and that means,
                    you are not allowed to sell, distribute or lease our
                    template as it is to anyone
                  </p>
                  {/* alert */}
                  <div className="alert alert-primary">
                    <div className="alert-body d-flex align-items-center justify-content-between flex-wrap p-2">
                      <div className="me-1">
                        <h4 className="fw-bolder text-primary">
                          Do you need custom license? 👩🏻‍💻
                        </h4>
                        <p className="fw-normal mb-1 mb-lg-0">
                          If you’ve mass production demand and other custom use
                          cases than we’re here to help you.
                        </p>
                      </div>
                      <button className="btn btn-primary">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
