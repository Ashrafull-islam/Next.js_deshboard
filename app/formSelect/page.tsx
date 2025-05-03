
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
                    Select
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Select</li>
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
            {/* Bootstrap Select start */}
            <section className="bootstrap-select">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bootstrap Select</h4>
                    </div>
                    <div className="card-body">
                      {/* Basic Select */}
                      <div className="mb-1">
                        <label className="form-label" htmlFor="basicSelect">
                          Basic Select
                        </label>
                        <select className="form-select" id="basicSelect">
                          <option>IT</option>
                          <option>Blade Runner</option>
                          <option>Thor Ragnarok</option>
                        </select>
                      </div>
                      {/* Disabled Select */}
                      <div className="mb-1">
                        <label className="form-label" htmlFor="disabledSelect">
                          Disabled Select
                        </label>
                        <select
                          className="form-select"
                          disabled={true}
                          id="disabledSelect"
                        >
                          <option>Green</option>
                          <option>Red</option>
                          <option>Blue</option>
                        </select>
                      </div>
                      {/* Multiple Select */}
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="normalMultiSelect"
                        >
                          Multiple Select
                        </label>
                        <select
                          className="form-select"
                          id="normalMultiSelect"
                          multiple={true}
                        >
                          <option selected={true}>Square</option>
                          <option>Rectangle</option>
                          <option selected={true}>Rombo</option>
                          <option>Romboid</option>
                          <option>Trapeze</option>
                          <option>Triangle</option>
                          <option selected={true}>Polygon</option>
                          <option>Regular polygon</option>
                          <option>Circumference</option>
                          <option>Circle</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bootstrap Select Sizing</h4>
                    </div>
                    <div className="card-body">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="selectLarge">
                          Select Large
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="selectLarge"
                        >
                          <option selected={true}>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="selectDefault">
                          Default
                        </label>
                        <select className="form-select" id="selectDefault">
                          <option selected={true}>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="selectSmall">
                          Select Small
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="selectSmall"
                        >
                          <option selected={true}>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="mb-1">
                        <label
                          className="form-label"
                          htmlFor="multiSelectSizing"
                        >
                          Using Size Attribute
                        </label>
                        <select
                          className="form-select"
                          size={3}
                          aria-label="size 3 select"
                          id="multiSelectSizing"
                        >
                          <option selected={true}>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap Select end */}
            {/* Select2 Start  */}
            <section className="basic-select2">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Select2 Options</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {/* Basic */}
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="select2-basic">
                            Basic
                          </label>
                          <select
                            className="select2 form-select"
                            id="select2-basic"
                          >
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
                        {/* Nested */}
                        <div className="col-md-6 mb-1">
                          <label
                            className="form-label"
                            htmlFor="select2-nested"
                          >
                            Nested
                          </label>
                          <select
                            className="select2 form-select"
                            id="select2-nested"
                          >
                            <optgroup label="Alaskan/Hawaiian Time Zone">
                              <option value="AK">Alaska</option>
                              <option value="HI">Hawaii</option>
                            </optgroup>
                            <optgroup label="Pacific Time Zone">
                              <option value="CA">California</option>
                              <option value="NV">Nevada</option>
                              <option value="OR">Oregon</option>
                              <option value="WA">Washington</option>
                            </optgroup>
                            <optgroup label="Mountain Time Zone">
                              <option value="AZ">Arizona</option>
                              <option value="CO">Colorado</option>
                              <option value="ID">Idaho</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NM">New Mexico</option>
                              <option value="ND">North Dakota</option>
                              <option value="UT">Utah</option>
                              <option value="WY">Wyoming</option>
                            </optgroup>
                            <optgroup label="Central Time Zone">
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
                            </optgroup>
                            <optgroup label="Eastern Time Zone">
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="FL" selected={true}>
                                Florida
                              </option>
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
                            </optgroup>
                          </select>
                        </div>
                        {/* Multiple */}
                        <div className="col-md-6 mb-1">
                          <label
                            className="form-label"
                            htmlFor="select2-multiple"
                          >
                            Multiple
                          </label>
                          <select
                            className="select2 form-select"
                            id="select2-multiple"
                            multiple={true}
                          >
                            <optgroup label="Alaskan/Hawaiian Time Zone">
                              <option value="AK">Alaska</option>
                              <option value="HI">Hawaii</option>
                            </optgroup>
                            <optgroup label="Pacific Time Zone">
                              <option value="CA">California</option>
                              <option value="NV">Nevada</option>
                              <option value="OR">Oregon</option>
                              <option value="WA">Washington</option>
                            </optgroup>
                            <optgroup label="Mountain Time Zone">
                              <option value="AZ">Arizona</option>
                              <option value="CO" selected={true}>
                                Colorado
                              </option>
                              <option value="ID">Idaho</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NM">New Mexico</option>
                              <option value="ND">North Dakota</option>
                              <option value="UT">Utah</option>
                              <option value="WY">Wyoming</option>
                            </optgroup>
                            <optgroup label="Central Time Zone">
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
                            </optgroup>
                            <optgroup label="Eastern Time Zone">
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="FL" selected={true}>
                                Florida
                              </option>
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
                            </optgroup>
                          </select>
                        </div>
                        {/* Icons */}
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="select2-icons">
                            Icons
                          </label>
                          <select
                            data-placeholder="Select a state..."
                            className="select2-icons form-select"
                            id="select2-icons"
                          >
                            <optgroup label="Social Media">
                              <option
                                value="facebook"
                                data-icon="facebook"
                                selected={true}
                              >
                                Facebook
                              </option>
                              <option value="twitter" data-icon="twitter">
                                Twitter
                              </option>
                              <option value="linkedin" data-icon="linkedin">
                                LinkedIN
                              </option>
                              <option value="github" data-icon="github">
                                GitHub
                              </option>
                              <option value="instagram" data-icon="instagram">
                                Instagram
                              </option>
                              <option value="dribbble" data-icon="dribbble">
                                Dribbble
                              </option>
                              <option value="gitlab" data-icon="gitlab">
                                GitLab
                              </option>
                            </optgroup>
                            <optgroup label="File types">
                              <option value="pdf" data-icon="file">
                                PDF
                              </option>
                              <option value="word" data-icon="file-text">
                                Word
                              </option>
                              <option value="image" data-icon="image">
                                Image
                              </option>
                            </optgroup>
                            <optgroup label="Other">
                              <option value="figma" data-icon="figma">
                                Figma
                              </option>
                              <option value="chrome" data-icon="chrome">
                                Chrome
                              </option>
                              <option value="safari" data-icon="command">
                                Safari
                              </option>
                              <option value="slack" data-icon="slack">
                                Slack
                              </option>
                              <option value="youtube" data-icon="youtube">
                                YouTube
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        {/* Disabled */}
                        <div className="col-md-6 mb-1">
                          <label className="form-label">Disabled</label>
                          <select
                            className="select2 form-select"
                            disabled={true}
                          >
                            <option value={1}>Option</option>
                            <option value={2} selected={true}>
                              Option2
                            </option>
                            <option value={3}>Option3</option>
                            <option value={4}>Option4</option>
                          </select>
                        </div>
                        {/* Disabled Results */}
                        <div className="col-md-6 mb-1">
                          <label
                            className="form-label"
                            htmlFor="select2-disabled-result"
                          >
                            Disabled Results
                          </label>
                          <select
                            className="select2 form-select"
                            id="select2-disabled-result"
                          >
                            <option value={1}>Option</option>
                            <option value={2} disabled={true}>
                              Option2
                            </option>
                            <option value={3}>Option3</option>
                            <option value={4} disabled={true}>
                              Option4
                            </option>
                          </select>
                        </div>
                        {/* Array Data */}
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="select2-array">
                            Array Data
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-data-array form-select"
                              id="select2-array"
                            />
                          </div>
                        </div>
                        {/* Remote Data */}
                        <div className="col-md-6 mb-1">
                          <label className="form-label" htmlFor="select2-ajax">
                            Remote Data
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-data-ajax form-select"
                              id="select2-ajax"
                            />
                          </div>
                        </div>
                        {/* Limit Selected Options */}
                        <div className="col-md-6 mb-1">
                          <label
                            className="form-label"
                            htmlFor="select2-limited"
                          >
                            Limit Selected Options
                          </label>
                          <select
                            className="max-length form-select"
                            id="select2-limited"
                            multiple={true}
                          >
                            <optgroup label="Figures">
                              <option value="romboid">Romboid</option>
                              <option value="trapeze" selected={true}>
                                Trapeze
                              </option>
                              <option value="triangle">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </optgroup>
                            <optgroup label="Colors">
                              <option value="red">Red</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                              <option value="purple">Purple</option>
                            </optgroup>
                          </select>
                        </div>
                        {/* Hide Search Box */}
                        <div className="col-md-6 mb-2">
                          <label
                            className="form-label"
                            htmlFor="select2-hide-search"
                          >
                            Hide Search Box
                          </label>
                          <select
                            className="hide-search form-select"
                            id="select2-hide-search"
                          >
                            <optgroup label="Figures">
                              <option value="romboid">Romboid</option>
                              <option value="trapeze" selected={true}>
                                Trapeze
                              </option>
                              <option value="triangle">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </optgroup>
                            <optgroup label="Colors">
                              <option value="red">Red</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                              <option value="purple">Purple</option>
                            </optgroup>
                          </select>
                        </div>
                        {/* Modal Demo */}
                        <div className="col-md-6">
                          {/* Basic trigger modal */}
                          <div className="basic-modal">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#select2InModal"
                            >
                              Select2 In Modal
                            </button>
                            {/* Modal */}
                            <div
                              className="modal fade text-start"
                              id="select2InModal"
                              tabIndex={-1}
                              aria-labelledby="myModalLabel1"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h4
                                      className="modal-title"
                                      id="myModalLabel1"
                                    >
                                      Select2 In Modal
                                    </h4>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  <div className="modal-body">
                                    <p>This is Select2 Example in Modal.</p>
                                    <label
                                      className="form-label"
                                      htmlFor="select2Demo"
                                    >
                                      Select2
                                    </label>
                                    <select
                                      className="select2InModal form-select"
                                      id="select2Demo"
                                    >
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
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                    >
                                      Accept
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Basic trigger modal end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sizing Options */}
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Select2 Size Options</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p className="card-text">
                            For different sizes of select2, Use classes like{" "}
                            <code>.select2-size-sm</code> &amp;
                            <code>.select2-size-lg</code> for Small &amp; Large
                            &amp; Multi Selects respectively.
                          </p>
                        </div>
                        <div className="col-12">
                          <label className="form-label" htmlFor="large-select">
                            Large
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-size-lg form-select"
                              id="large-select"
                            >
                              <option value="square">Square</option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo">Rombo</option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            className="form-label"
                            htmlFor="default-select"
                          >
                            Default
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2 form-select"
                              id="default-select"
                            >
                              <option value="square">Square</option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo">Rombo</option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="form-label" htmlFor="small-select">
                            Small
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-size-sm form-select"
                              id="small-select"
                            >
                              <option value="square">Square</option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo">Rombo</option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Select2 Multi Select Size Options
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p className="card-text">
                            For different sizes of select2, Use classes like{" "}
                            <code>.select2-size-sm</code> &amp;
                            <code>.select2-size-lg</code> for Small &amp; Large
                            &amp; Selects respectively.
                          </p>
                        </div>
                        <div className="col-12">
                          <label
                            className="form-label"
                            htmlFor="large-select-multi"
                          >
                            Large
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-size-lg form-select"
                              multiple={true}
                              id="large-select-multi"
                            >
                              <option value="square" selected={true}>
                                Square
                              </option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo">Rombo</option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            className="form-label"
                            htmlFor="default-select-multi"
                          >
                            Default
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2 form-select"
                              multiple={true}
                              id="default-select-multi"
                            >
                              <option value="square">Square</option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo">Rombo</option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon" selected={true}>
                                Polygon
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            className="form-label"
                            htmlFor="small-select-multi"
                          >
                            Small
                          </label>
                          <div className="mb-1">
                            <select
                              className="select2-size-sm form-select"
                              multiple={true}
                              id="small-select-multi"
                            >
                              <option value="square">Square</option>
                              <option value="rectangle">Rectangle</option>
                              <option value="rombo" selected={true}>
                                Rombo
                              </option>
                              <option value="romboid">Romboid</option>
                              <option value="trapeze">Trapeze</option>
                              <option value="traible">Triangle</option>
                              <option value="polygon">Polygon</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Select2 End */}
          </div>
        </div>
      </div>
    </>
  );
}
