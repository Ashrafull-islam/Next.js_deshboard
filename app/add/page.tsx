export default function page() {
  return (
    <>
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="invoice-add-wrapper">
        <div className="row invoice-add">
          {/* Invoice Add Left starts */}
          <div className="col-xl-9 col-md-8 col-12">
            <div className="card invoice-preview-card">
              {/* Header starts */}
              <div className="card-body invoice-padding pb-0">
                <div className="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                  <div>
                    <div className="logo-wrapper">
                      <svg
                        viewBox="0 0 139 95"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        height={24}
                      >
                        <defs>
                          <linearGradient
                            id="invoice-linearGradient-1"
                            x1="100%"
                            y1="10.5120544%"
                            x2="50%"
                            y2="89.4879456%"
                          >
                            <stop stopColor="#000000" offset="0%" />
                            <stop stopColor="#FFFFFF" offset="100%" />
                          </linearGradient>
                          <linearGradient
                            id="invoice-linearGradient-2"
                            x1="64.0437835%"
                            y1="46.3276743%"
                            x2="37.373316%"
                            y2="100%"
                          >
                            <stop
                              stopColor="#EEEEEE"
                              stopOpacity={0}
                              offset="0%"
                            />
                            <stop stopColor="#FFFFFF" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g transform="translate(-400.000000, -178.000000)">
                            <g transform="translate(400.000000, 178.000000)">
                              <path
                                className="text-primary"
                                d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                style={{ fill: "currentColor" }}
                              />
                              <path
                                d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                                fill="url(#invoice-linearGradient-1)"
                                opacity="0.2"
                              />
                              <polygon
                                fill="#000000"
                                opacity="0.049999997"
                                points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                              />
                              <polygon
                                fill="#000000"
                                opacity="0.099999994"
                                points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                              />
                              <polygon
                                fill="url(#invoice-linearGradient-2)"
                                opacity="0.099999994"
                                points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <h3 className="text-primary invoice-logo">Vuexy</h3>
                    </div>
                    <p className="card-text mb-25">
                      Office 149, 450 South Brand Brooklyn
                    </p>
                    <p className="card-text mb-25">
                      San Diego County, CA 91905, USA
                    </p>
                    <p className="card-text mb-0">
                      +1 (123) 456 7891, +44 (876) 543 2198
                    </p>
                  </div>
                  <div className="invoice-number-date mt-md-0 mt-2">
                    <div className="d-flex align-items-center justify-content-md-end mb-1">
                      <h4 className="invoice-title">Invoice</h4>
                      <div className="input-group input-group-merge invoice-edit-input-group">
                        <div className="input-group-text">
                          <i data-feather="hash" />
                        </div>
                        <input
                          type="text"
                          className="form-control invoice-edit-input"
                          placeholder={53634}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="title">Date:</span>
                      <input
                        type="text"
                        className="form-control invoice-edit-input date-picker"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="title">Due Date:</span>
                      <input
                        type="text"
                        className="form-control invoice-edit-input due-date-picker"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Header ends */}
              <hr className="invoice-spacing" />
              {/* Address and Contact starts */}
              <div className="card-body invoice-padding pt-0">
                <div className="row row-bill-to invoice-spacing">
                  <div className="col-xl-8 mb-lg-1 col-bill-to ps-0">
                    <h6 className="invoice-to-title">Invoice To:</h6>
                    <div className="invoice-customer">
                      <select className="invoiceto form-select">
                        <option />
                        <option value="shelby">Shelby Company Limited</option>
                        <option value="hunters">Hunters Corp</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-4 p-0 ps-xl-2 mt-xl-0 mt-2">
                    <h6 className="mb-2">Payment Details:</h6>
                    <table>
                      <tbody>
                        <tr>
                          <td className="pe-1">Total Due:</td>
                          <td>
                            <strong>$12,110.55</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="pe-1">Bank name:</td>
                          <td>American Bank</td>
                        </tr>
                        <tr>
                          <td className="pe-1">Country:</td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td className="pe-1">IBAN:</td>
                          <td>ETD95476213874685</td>
                        </tr>
                        <tr>
                          <td className="pe-1">SWIFT code:</td>
                          <td>BR91905</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Address and Contact ends */}
              {/* Product Details starts */}
              <div className="card-body invoice-padding invoice-product-details">
                <form className="source-item">
                  <div data-repeater-list="group-a">
                    <div className="repeater-wrapper" data-repeater-item="">
                      <div className="row">
                        <div className="col-12 d-flex product-details-border position-relative pe-0">
                          <div className="row w-100 pe-lg-0 pe-1 py-2">
                            <div className="col-lg-5 col-12 mb-lg-0 mb-2 mt-lg-0 mt-2">
                              <p className="card-text col-title mb-md-50 mb-0">
                                Item
                              </p>
                              <select className="form-select item-details">
                                <option value="App Design">App Design</option>
                                <option value="App Customization" selected="">
                                  App Customization
                                </option>
                                <option value="ABC Template">
                                  ABC Template
                                </option>
                                <option value="App Development">
                                  App Development
                                </option>
                              </select>
                              <textarea
                                className="form-control mt-2"
                                rows={1}
                                defaultValue={"Customization & Bug Fixes"}
                              />
                            </div>
                            <div className="col-lg-3 col-12 my-lg-0 my-2">
                              <p className="card-text col-title mb-md-2 mb-0">
                                Cost
                              </p>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={24}
                                placeholder={24}
                              />
                              <div className="mt-2">
                                <span>Discount:</span>
                                <span className="discount">0%</span>
                                <span
                                  className="tax-1 ms-50"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Tax 1"
                                >
                                  0%
                                </span>
                                <span
                                  className="tax-2 ms-50"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Tax 2"
                                >
                                  0%
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-2 col-12 my-lg-0 my-2">
                              <p className="card-text col-title mb-md-2 mb-0">
                                Qty
                              </p>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={1}
                                placeholder={1}
                              />
                            </div>
                            <div className="col-lg-2 col-12 mt-lg-0 mt-2">
                              <p className="card-text col-title mb-md-50 mb-0">
                                Price
                              </p>
                              <p className="card-text mb-0">$24.00</p>
                            </div>
                          </div>
                          <div
                            className="
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-between
                  border-start
                  invoice-product-actions
                  py-50
                  px-25
                "
                          >
                            <i
                              data-feather="x"
                              className="cursor-pointer font-medium-3"
                              data-repeater-delete=""
                            />
                            <div className="dropdown">
                              <i
                                className="cursor-pointer more-options-dropdown me-0"
                                data-feather="settings"
                                id="dropdownMenuButton"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              ></i>
                              <div
                                className="dropdown-menu dropdown-menu-end item-options-menu p-50"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <div className="mb-1">
                                  <label
                                    htmlFor="discount-input"
                                    className="form-label"
                                  >
                                    Discount(%)
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="discount-input"
                                  />
                                </div>
                                <div className="form-row mt-50">
                                  <div className="mb-1 col-md-6">
                                    <label
                                      htmlFor="tax-1-input"
                                      className="form-label"
                                    >
                                      Tax 1
                                    </label>
                                    <select
                                      name="tax-1-input"
                                      id="tax-1-input"
                                      className="form-select tax-select"
                                    >
                                      <option value="0%" selected="">
                                        0%
                                      </option>
                                      <option value="1%">1%</option>
                                      <option value="10%">10%</option>
                                      <option value="18%">18%</option>
                                      <option value="40%">40%</option>
                                    </select>
                                  </div>
                                  <div className="mb-1 col-md-6">
                                    <label
                                      htmlFor="tax-2-input"
                                      className="form-label"
                                    >
                                      Tax 2
                                    </label>
                                    <select
                                      name="tax-2-input"
                                      id="tax-2-input"
                                      className="form-select tax-select"
                                    >
                                      <option value="0%" selected="">
                                        0%
                                      </option>
                                      <option value="1%">1%</option>
                                      <option value="10%">10%</option>
                                      <option value="18%">18%</option>
                                      <option value="40%">40%</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="dropdown-divider my-1" />
                                <div className="d-flex justify-content-between">
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary btn-apply-changes"
                                  >
                                    Apply
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12 px-0">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-add-new"
                        data-repeater-create=""
                      >
                        <i data-feather="plus" className="me-25" />
                        <span className="align-middle">Add Item</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Product Details ends */}
              {/* Invoice Total starts */}
              <div className="card-body invoice-padding">
                <div className="row invoice-sales-total-wrapper">
                  <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                    <div className="d-flex align-items-center mb-1">
                      <label htmlFor="salesperson" className="form-label">
                        Salesperson:
                      </label>
                      <input
                        type="text"
                        className="form-control ms-50"
                        id="salesperson"
                        placeholder="Edward Crowley"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end order-md-2 order-1">
                    <div className="invoice-total-wrapper">
                      <div className="invoice-total-item">
                        <p className="invoice-total-title">Subtotal:</p>
                        <p className="invoice-total-amount">$1800</p>
                      </div>
                      <div className="invoice-total-item">
                        <p className="invoice-total-title">Discount:</p>
                        <p className="invoice-total-amount">$28</p>
                      </div>
                      <div className="invoice-total-item">
                        <p className="invoice-total-title">Tax:</p>
                        <p className="invoice-total-amount">21%</p>
                      </div>
                      <hr className="my-50" />
                      <div className="invoice-total-item">
                        <p className="invoice-total-title">Total:</p>
                        <p className="invoice-total-amount">$1690</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Invoice Total ends */}
              <hr className="invoice-spacing mt-0" />
              <div className="card-body invoice-padding py-0">
                {/* Invoice Note starts */}
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="note" className="form-label fw-bold">
                        Note:
                      </label>
                      <textarea
                        className="form-control"
                        rows={2}
                        id="note"
                        defaultValue={
                          "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* Invoice Note ends */}
              </div>
            </div>
          </div>
          {/* Invoice Add Left ends */}
          {/* Invoice Add Right starts */}
          <div className="col-xl-3 col-md-4 col-12">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-primary w-100 mb-75" disabled="">
                  Send Invoice
                </button>
                <a
                  href="./app-invoice-preview.html"
                  className="btn btn-outline-primary w-100 mb-75"
                >
                  Preview
                </a>
                <button type="button" className="btn btn-outline-primary w-100">
                  Save
                </button>
              </div>
            </div>
            <div className="mt-2">
              <p className="mb-50">Accept payments via</p>
              <select className="form-select">
                <option value="Bank Account">Bank Account</option>
                <option value="Paypal">Paypal</option>
                <option value="UPI Transfer">UPI Transfer</option>
              </select>
              <div className="invoice-terms mt-1">
                <div className="d-flex justify-content-between">
                  <label
                    className="invoice-terms-title mb-0"
                    htmlFor="paymentTerms"
                  >
                    Payment Terms
                  </label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      defaultChecked=""
                      id="paymentTerms"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentTerms"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between py-1">
                  <label
                    className="invoice-terms-title mb-0"
                    htmlFor="clientNotes"
                  >
                    Client Notes
                  </label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      defaultChecked=""
                      id="clientNotes"
                    />
                    <label className="form-check-label" htmlFor="clientNotes" />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <label
                    className="invoice-terms-title mb-0"
                    htmlFor="paymentStub"
                  >
                    Payment Stub
                  </label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="paymentStub"
                    />
                    <label className="form-check-label" htmlFor="paymentStub" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Invoice Add Right ends */}
        </div>
        {/* Add New Customer Sidebar */}
        <div
          className="modal modal-slide-in fade"
          id="add-new-customer-sidebar"
          aria-hidden="true"
        >
          <div className="modal-dialog sidebar-lg">
            <div className="modal-content p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ×
              </button>
              <div className="modal-header mb-1">
                <h5 className="modal-title">
                  <span className="align-middle">Add Customer</span>
                </h5>
              </div>
              <div className="modal-body flex-grow-1">
                <form>
                  <div className="mb-1">
                    <label htmlFor="customer-name" className="form-label">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="customer-name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="customer-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="customer-email"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="customer-address" className="form-label">
                      Customer Address
                    </label>
                    <textarea
                      className="form-control"
                      id="customer-address"
                      cols={2}
                      rows={2}
                      placeholder="1307 Lady Bug Drive New York"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-1 position-relative">
                    <label htmlFor="customer-country" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      id="customer-country"
                      name="customer-country"
                    >
                      <option label="select country" />
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Russia">Russia</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                    </select>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="customer-contact" className="form-label">
                      Contact
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="customer-contact"
                      placeholder="763-242-9206"
                    />
                  </div>
                  <div className="mb-1 d-flex flex-wrap mt-2">
                    <button
                      type="button"
                      className="btn btn-primary me-1"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add New Customer Sidebar */}
      </section>
    </div>
  </div>
</div>

    </>
  )
}
