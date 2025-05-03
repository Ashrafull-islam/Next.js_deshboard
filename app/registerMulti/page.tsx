export default function page() {
  return (
    <>
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper">
    <div className="content-header row"></div>
    <div className="content-body">
      <div className="auth-wrapper auth-cover">
        <div className="auth-inner row m-0">
          {/* Brand logo*/}
          <a className="brand-logo" href="index.html">
            <svg
              viewBox="0 0 139 95"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height={28}
            >
              <defs>
                <linearGradient
                  id="linearGradient-1"
                  x1="100%"
                  y1="10.5120544%"
                  x2="50%"
                  y2="89.4879456%"
                >
                  <stop stopColor="#000000" offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
                <linearGradient
                  id="linearGradient-2"
                  x1="64.0437835%"
                  y1="46.3276743%"
                  x2="37.373316%"
                  y2="100%"
                >
                  <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Artboard"
                  transform="translate(-400.000000, -178.000000)"
                >
                  <g id="Group" transform="translate(400.000000, 178.000000)">
                    <path
                      className="text-primary"
                      id="Path"
                      d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      id="Path1"
                      d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                      fill="url(#linearGradient-1)"
                      opacity="0.2"
                    />
                    <polygon
                      id="Path-2"
                      fill="#000000"
                      opacity="0.049999997"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                    />
                    <polygon
                      id="Path-21"
                      fill="#000000"
                      opacity="0.099999994"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                    />
                    <polygon
                      id="Path-3"
                      fill="url(#linearGradient-2)"
                      opacity="0.099999994"
                      points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="brand-text text-primary ms-1">Vuexy</h2>
          </a>
          {/* /Brand logo*/}
          {/* Left Text*/}
          <div className="col-lg-3 d-none d-lg-flex align-items-center p-0">
            <div className="w-100 d-lg-flex align-items-center justify-content-center">
              <img
                className="img-fluid w-100"
                src="../../../app-assets/images/illustration/create-account.svg"
                alt="multi-steps"
              />
            </div>
          </div>
          {/* /Left Text*/}
          {/* Register*/}
          <div className="col-lg-9 d-flex align-items-center auth-bg px-2 px-sm-3 px-lg-5 pt-3">
            <div className="width-700 mx-auto">
              <div className="bs-stepper register-multi-steps-wizard shadow-none">
                <div className="bs-stepper-header px-0" role="tablist">
                  <div
                    className="step"
                    data-target="#account-details"
                    role="tab"
                    id="account-details-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="home" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Account</span>
                        <span className="bs-stepper-subtitle">
                          Enter username
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#personal-info"
                    role="tab"
                    id="personal-info-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i data-feather="user" className="font-medium-3" />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Personal</span>
                        <span className="bs-stepper-subtitle">
                          Enter Information
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="line">
                    <i data-feather="chevron-right" className="font-medium-2" />
                  </div>
                  <div
                    className="step"
                    data-target="#billing"
                    role="tab"
                    id="billing-trigger"
                  >
                    <button type="button" className="step-trigger">
                      <span className="bs-stepper-box">
                        <i
                          data-feather="credit-card"
                          className="font-medium-3"
                        />
                      </span>
                      <span className="bs-stepper-label">
                        <span className="bs-stepper-title">Billing</span>
                        <span className="bs-stepper-subtitle">
                          Payment details
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content px-0 mt-4">
                  <div
                    id="account-details"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="account-details-trigger"
                  >
                    <div className="content-header mb-2">
                      <h2 className="fw-bolder mb-75">Account Information</h2>
                      <span>Enter your username password details</span>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="johndoe"
                          />
                        </div>
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="john.doe@email.com"
                            aria-label="john.doe"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <div className="input-group input-group-merge form-password-toggle">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="············"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i data-feather="eye" />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 mb-1">
                          <label
                            className="form-label"
                            htmlFor="confirm-password"
                          >
                            Confirm Password
                          </label>
                          <div className="input-group input-group-merge form-password-toggle">
                            <input
                              type="password"
                              name="confirm-password"
                              id="confirm-password"
                              className="form-control"
                              placeholder="············"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i data-feather="eye" />
                            </span>
                          </div>
                        </div>
                        <div className="col-12 mb-1">
                          <label className="form-label" htmlFor="multiStepsURL">
                            Profile Link
                          </label>
                          <input
                            type="text"
                            name="multiStepsURL"
                            id="multiStepsURL"
                            className="form-control"
                            placeholder="johndoe/profile"
                            aria-label="johndoe"
                          />
                        </div>
                        <div className="col-12 mb-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="multiStepsRememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="multiStepsRememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        className="btn btn-outline-secondary btn-prev"
                        disabled={true}
                      >
                        <i
                          data-feather="chevron-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="chevron-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="personal-info"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="personal-info-trigger"
                  >
                    <div className="content-header mb-2">
                      <h2 className="fw-bolder mb-75">Personal Information</h2>
                      <span>Enter your Information</span>
                    </div>
                    <form>
                      <div className="row">
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="first-name">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="form-control"
                            placeholder="John"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="last-name">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            className="form-control"
                            placeholder="Doe"
                          />
                        </div>
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="mobile-number">
                            Mobile number
                          </label>
                          <input
                            type="text"
                            name="mobile-number"
                            id="mobile-number"
                            className="form-control mobile-number-mask"
                            placeholder="(472) 765-3654"
                          />
                        </div>
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="pin-code">
                            PIN code
                          </label>
                          <input
                            type="text"
                            name="pin-code"
                            id="pin-code"
                            className="form-control pin-code-mask"
                            placeholder="Code"
                            maxLength={6}
                          />
                        </div>
                        <div className="col-12 mb-1">
                          <label className="form-label" htmlFor="home-address">
                            Home Address
                          </label>
                          <input
                            type="text"
                            name="home-address"
                            id="home-address"
                            className="form-control"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-12 mb-1">
                          <label className="form-label" htmlFor="area-address">
                            Area, Street, Sector, Village
                          </label>
                          <input
                            type="text"
                            name="area-address"
                            id="area-address"
                            className="form-control"
                            placeholder="Area, Street, Sector, Village"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="town-city">
                            Town/City
                          </label>
                          <input
                            type="text"
                            name="town-city"
                            id="town-city"
                            className="form-control"
                            placeholder="Town/City"
                          />
                        </div>
                        <div className="mb-1 col-md-6">
                          <label className="form-label" htmlFor="country">
                            Country
                          </label>
                          <select
                            className="select2 w-100"
                            name="country"
                            id="country"
                          >
                            <option value="" label="blank" />
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                          </select>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between mt-2">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="chevron-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-primary btn-next">
                        <span className="align-middle d-sm-inline-block d-none">
                          Next
                        </span>
                        <i
                          data-feather="chevron-right"
                          className="align-middle ms-sm-25 ms-0"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    id="billing"
                    className="content"
                    role="tabpanel"
                    aria-labelledby="billing-trigger"
                  >
                    <div className="content-header mb-2">
                      <h2 className="fw-bolder mb-75">Select Plan</h2>
                      <span>Select plan as per your retirement</span>
                    </div>
                    <form>
                      {/* select plan options */}
                      <div className="row custom-options-checkable gx-3 gy-2">
                        <div className="col-md-4">
                          <input
                            className="custom-option-item-check"
                            type="radio"
                            name="plans"
                            id="basicPlan"
                            defaultValue=""
                          />
                          <label
                            className="custom-option-item text-center p-1"
                            htmlFor="basicPlan"
                          >
                            <span className="custom-option-item-title h3 fw-bolder">
                              Basic
                            </span>
                            <span className="d-block m-75">
                              A simple start for everyone
                            </span>
                            <span className="plan-price">
                              <sup className="font-medium-1 fw-bold text-primary">
                                $
                              </sup>
                              <span className="pricing-value fw-bolder text-primary">
                                0
                              </span>
                              <sub className="pricing-duration text-body font-medium-1 fw-bold">
                                /month
                              </sub>
                            </span>
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="custom-option-item-check"
                            type="radio"
                            name="plans"
                            id="standardPlan"
                            defaultValue=""
                            defaultChecked={true}
                          />
                          <label
                            className="custom-option-item text-center p-1"
                            htmlFor="standardPlan"
                          >
                            <span className="custom-option-item-title h3 fw-bolder">
                              Standard
                            </span>
                            <span className="d-block m-75">
                              For small to medium businesses
                            </span>
                            <span className="plan-price">
                              <sup className="font-medium-1 fw-bold text-primary">
                                $
                              </sup>
                              <span className="pricing-value fw-bolder text-primary">
                                99
                              </span>
                              <sub className="pricing-duration text-body font-medium-1 fw-bold">
                                /month
                              </sub>
                            </span>
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="custom-option-item-check"
                            type="radio"
                            name="plans"
                            id="enterprisePlan"
                            defaultValue=""
                          />
                          <label
                            className="custom-option-item text-center p-1"
                            htmlFor="enterprisePlan"
                          >
                            <span className="custom-option-item-title h3 fw-bolder">
                              Enterprise
                            </span>
                            <span className="d-block m-75">
                              Solution for big organizations
                            </span>
                            <span className="plan-price">
                              <sup className="font-medium-1 fw-bold text-primary">
                                $
                              </sup>
                              <span className="pricing-value fw-bolder text-primary">
                                499
                              </span>
                              <sub className="pricing-duration text-body font-medium-1 fw-bold">
                                /month
                              </sub>
                            </span>
                          </label>
                        </div>
                      </div>
                      {/* / select plan options */}
                      <div className="content-header my-2 py-1">
                        <h2 className="fw-bolder mb-75">Payment Information</h2>
                        <span>Enter your card Information</span>
                      </div>
                      <div className="row gx-2">
                        <div className="col-12 mb-1">
                          <label className="form-label" htmlFor="addCardNumber">
                            Card Number
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              id="addCardNumber"
                              name="addCard"
                              className="form-control credit-card-mask"
                              type="text"
                              placeholder="1356 3215 6548 7898"
                              aria-describedby="addCard"
                              data-msg="Please enter your credit card number"
                            />
                            <span
                              className="input-group-text cursor-pointer p-25"
                              id="addCard"
                            >
                              <span className="card-type" />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="addCardName">
                            Name On Card
                          </label>
                          <input
                            type="text"
                            id="addCardName"
                            className="form-control"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-6 col-md-3 mb-1">
                          <label
                            className="form-label"
                            htmlFor="addCardExpiryDate"
                          >
                            Exp. Date
                          </label>
                          <input
                            type="text"
                            id="addCardExpiryDate"
                            className="form-control expiry-date-mask"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="col-6 col-md-3 mb-1">
                          <label className="form-label" htmlFor="addCardCvv">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="addCardCvv"
                            className="form-control cvv-code-mask"
                            maxLength={3}
                            placeholder='654'
                          />
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between mt-1">
                      <button className="btn btn-primary btn-prev">
                        <i
                          data-feather="chevron-left"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button className="btn btn-success btn-submit">
                        <i
                          data-feather="check"
                          className="align-middle me-sm-25 me-0"
                        />
                        <span className="align-middle d-sm-inline-block d-none">
                          Submit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
