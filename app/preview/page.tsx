import Script from "next/script";

export default function page() {
  return (
    <>


    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="invoice-preview-wrapper">
        <div className="row invoice-preview">
          {/* Invoice */}
          <div className="col-xl-9 col-md-8 col-12">
            <div className="card invoice-preview-card">
              <div className="card-body invoice-padding pb-0">
                {/* Header starts */}
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
                  <div className="mt-md-0 mt-2">
                    <h4 className="invoice-title">
                      Invoice
                      <span className="invoice-number">#3492</span>
                    </h4>
                    <div className="invoice-date-wrapper">
                      <p className="invoice-date-title">Date Issued:</p>
                      <p className="invoice-date">25/08/2020</p>
                    </div>
                    <div className="invoice-date-wrapper">
                      <p className="invoice-date-title">Due Date:</p>
                      <p className="invoice-date">29/08/2020</p>
                    </div>
                  </div>
                </div>
                {/* Header ends */}
              </div>
              <hr className="invoice-spacing" />
              {/* Address and Contact starts */}
              <div className="card-body invoice-padding pt-0">
                <div className="row invoice-spacing">
                  <div className="col-xl-8 p-0">
                    <h6 className="mb-2">Invoice To:</h6>
                    <h6 className="mb-25">Thomas shelby</h6>
                    <p className="card-text mb-25">Shelby Company Limited</p>
                    <p className="card-text mb-25">Small Heath, B10 0HF, UK</p>
                    <p className="card-text mb-25">718-986-6062</p>
                    <p className="card-text mb-0">peakyFBlinders@gmail.com</p>
                  </div>
                  <div className="col-xl-4 p-0 mt-xl-0 mt-2">
                    <h6 className="mb-2">Payment Details:</h6>
                    <table>
                      <tbody>
                        <tr>
                          <td className="pe-1">Total Due:</td>
                          <td>
                            <span className="fw-bold">$12,110.55</span>
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
              {/* Invoice Description starts */}
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="py-1">Task description</th>
                      <th className="py-1">Rate</th>
                      <th className="py-1">Hours</th>
                      <th className="py-1">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1">
                        <p className="card-text fw-bold mb-25">
                          Native App Development
                        </p>
                        <p className="card-text text-nowrap">
                          Developed a full stack native app using React Native,
                          Bootstrap &amp; Python
                        </p>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">$60.00</span>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">30</span>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">$1,800.00</span>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-1">
                        <p className="card-text fw-bold mb-25">Ui Kit Design</p>
                        <p className="card-text text-nowrap">
                          Designed a UI kit for native app using Sketch, Figma
                          &amp; Adobe XD
                        </p>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">$60.00</span>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">20</span>
                      </td>
                      <td className="py-1">
                        <span className="fw-bold">$1200.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body invoice-padding pb-0">
                <div className="row invoice-sales-total-wrapper">
                  <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                    <p className="card-text mb-0">
                      <span className="fw-bold">Salesperson:</span>{" "}
                      <span className="ms-75">Alfie Solomons</span>
                    </p>
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
              {/* Invoice Description ends */}
              <hr className="invoice-spacing" />
              {/* Invoice Note starts */}
              <div className="card-body invoice-padding pt-0">
                <div className="row">
                  <div className="col-12">
                    <span className="fw-bold">Note:</span>
                    <span>
                      It was a pleasure working with you and your team. We hope
                      you will keep us in mind for future freelance projects.
                      Thank You!
                    </span>
                  </div>
                </div>
              </div>
              {/* Invoice Note ends */}
            </div>
          </div>
          {/* /Invoice */}
          {/* Invoice Actions */}
          <div className="col-xl-3 col-md-4 col-12 invoice-actions mt-md-0 mt-2">
            <div className="card">
              <div className="card-body">
                <button
                  className="btn btn-primary w-100 mb-75"
                  data-bs-toggle="modal"
                  data-bs-target="#send-invoice-sidebar"
                >
                  Send Invoice
                </button>
                <button className="btn btn-outline-secondary w-100 btn-download-invoice mb-75">
                  Download
                </button>
                <a
                  className="btn btn-outline-secondary w-100 mb-75"
                  href="./app-invoice-print.html"
                  target="_blank"
                >
                  {" "}
                  Print{" "}
                </a>
                <a
                  className="btn btn-outline-secondary w-100 mb-75"
                  href="./app-invoice-edit.html"
                >
                  {" "}
                  Edit{" "}
                </a>
                <button
                  className="btn btn-success w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#add-payment-sidebar"
                >
                  Add Payment
                </button>
              </div>
            </div>
          </div>
          {/* /Invoice Actions */}
        </div>
      </section>
      {/* Send Invoice Sidebar */}
      <div
        className="modal modal-slide-in fade"
        id="send-invoice-sidebar"
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
                <span className="align-middle">Send Invoice</span>
              </h5>
            </div>
            <div className="modal-body flex-grow-1">
              <form>
                <div className="mb-1">
                  <label htmlFor="invoice-from" className="form-label">
                    From
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="invoice-from"
                    defaultValue="shelbyComapny@email.com"
                    placeholder="company@email.com"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="invoice-to" className="form-label">
                    To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="invoice-to"
                    defaultValue="qConsolidated@email.com"
                    placeholder="company@email.com"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="invoice-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="invoice-subject"
                    defaultValue="Invoice of purchased Admin Templates"
                    placeholder="Invoice regarding goods"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="invoice-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="invoice-message"
                    id="invoice-message"
                    cols={3}
                    rows={11}
                    placeholder="Message..."
                    defaultValue={
                      "Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"
                    }
                  />
                </div>
                <div className="mb-1">
                  <span className="badge badge-light-primary">
                    <i data-feather="link" className="me-25" />
                    <span className="align-middle">Invoice Attached</span>
                  </span>
                </div>
                <div className="mb-1 d-flex flex-wrap mt-2">
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-bs-dismiss="modal"
                  >
                    Send
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
      {/* /Send Invoice Sidebar */}
      {/* Add Payment Sidebar */}
      <div
        className="modal modal-slide-in fade"
        id="add-payment-sidebar"
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
                <span className="align-middle">Add Payment</span>
              </h5>
            </div>
            <div className="modal-body flex-grow-1">
              <form>
                <div className="mb-1">
                  <input
                    id="balance"
                    className="form-control"
                    type="text"
                    defaultValue="Invoice Balance: 5000.00"
                    disabled=""
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="amount">
                    Payment Amount
                  </label>
                  <input
                    id="amount"
                    className="form-control"
                    type="number"
                    placeholder="$1000"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="payment-date">
                    Payment Date
                  </label>
                  <input
                    id="payment-date"
                    className="form-control date-picker"
                    type="text"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="payment-method">
                    Payment Method
                  </label>
                  <select className="form-select" id="payment-method">
                    <option value="" selected="" disabled="">
                      Select payment method
                    </option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                    <option value="Paypal">Paypal</option>
                  </select>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="payment-note">
                    Internal Payment Note
                  </label>
                  <textarea
                    className="form-control"
                    id="payment-note"
                    rows={5}
                    placeholder="Internal Payment Note"
                    defaultValue={""}
                  />
                </div>
                <div className="d-flex flex-wrap mb-0">
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-bs-dismiss="modal"
                  >
                    Send
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
      {/* /Add Payment Sidebar */}
    </div>
  </div>
</div>

    </>
  )
}
