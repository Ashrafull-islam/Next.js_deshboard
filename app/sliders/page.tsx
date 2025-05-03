
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
                    Sliders
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Sliders</li>
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
            {/* Bootstrap Sliders */}
            <section id="bootstrap-slider">
              <div className="row">
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-header">
                      <h4 className="card-title">Default Bootstrap 4 slider</h4>
                    </div>
                    <div className="card-body">
                      <div className="mb-1">
                        <label className="form-label" htmlFor="basic-range">
                          Default
                        </label>
                        <input
                          type="range"
                          className="form-range"
                          id="basic-range"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="disabled-range">
                          Disabled
                        </label>
                        <input
                          type="range"
                          className="form-range"
                          id="disabled-range"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Bootstrap Sliders */}
            {/* NoUI Horizontal Sliders */}
            {/* Slider values section */}
            <section id="slider-values">
              <div className="row match-height">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Slider Values</h4>
                    </div>
                    <div className="card-body">
                      <h5 className="mb-2">Handles</h5>
                      <div id="slider-handles" className="my-1" />
                      <h5 className="my-2">Snapping between steps</h5>
                      <div id="slider-snap" className="my-1" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Slider values section */}
            {/* Slider behavior section */}
            <section id="slider-behavior">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Slider behavior</h4>
                    </div>
                    <div className="card-body">
                      <h5 className="mb-2">Tap</h5>
                      <div id="tap" className="my-1" />
                      <h5 className="my-2">Drag</h5>
                      <div id="drag" className="my-1" />
                      <h5 className="my-2">Fixed dragging</h5>
                      <div id="drag-fixed" className="my-1" />
                      <h5 className="my-2">Combined options</h5>
                      <div id="combined" className="my-1" />
                      <h5 className="my-2">Hover</h5>
                      <div id="hover" className="my-1" />
                      <span className="hover_val" id="hover-val" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Slider behavior section */}
            {/* Slider Scales / Pips and Steps section */}
            <section id="slider-scales-pips">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="text-uppercase">Slider Scales / Pips</h4>
                    </div>
                    <div className="card-body">
                      <div id="pips-range" className="mt-1 mb-3" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Slider Scales / Pips and Steps section */}
            {/* Slider Colors - Handles section */}
            <section id="slider-colors-handles">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Slider Colors - Handles</h4>
                    </div>
                    <div className="card-body">
                      <h5 className="my-2">Default / Primary Color Slider</h5>
                      <div
                        id="default-color-slider"
                        className="mt-md-1 mt-3 mb-4"
                      />
                      <h5 className="my-2">Success Color Slider</h5>
                      <div
                        id="success-color-slider"
                        className="circle-filled slider-success mt-md-1 mt-3 mb-4"
                      />
                      <h5 className="my-2">Secondary Color Slider</h5>
                      <div
                        id="secondary-color-slider"
                        className="circle-filled slider-secondary mt-md-1 mt-3 mb-4"
                      />
                      <h5 className="my-2">Warning Color Slider</h5>
                      <div
                        id="warning-color-slider"
                        className="slider-warning mt-md-1 mt-3 mb-4"
                      />
                      <h5 className="my-2">Danger Color Slider</h5>
                      <div
                        id="danger-color-slider"
                        className="circle-filled slider-danger mt-md-1 mt-3 mb-4"
                      />
                      <h5 className="my-2">Info Color Slider</h5>
                      <div
                        id="info-color-slider"
                        className="square slider-info mt-md-1 mt-3 mb-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Slider Colors - Handles section */}
            {/* Slider With Input Starts*/}
            <section id="slider-input">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Slider With Input</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-1" id="slider-with-input" />
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 slider-select d-sm-flex d-block">
                          <select
                            className="form-select me-1 mt-2 d-inline-block"
                            id="slider-select"
                          >
                            <option value={-20}>-20</option>
                            <option value={-19}>-19</option>
                            <option value={-18}>-18</option>
                            <option value={-17}>-17</option>
                            <option value={-16}>-16</option>
                            <option value={-15}>-15</option>
                            <option value={-14}>-14</option>
                            <option value={-13}>-13</option>
                            <option value={-12}>-12</option>
                            <option value={-11}>-11</option>
                            <option value={-10}>-10</option>
                            <option value={-9}>-9</option>
                            <option value={-8}>-8</option>
                            <option value={-7}>-7</option>
                            <option value={-6}>-6</option>
                            <option value={-5}>-5</option>
                            <option value={-4}>-4</option>
                            <option value={-3}>-3</option>
                            <option value={-2}>-2</option>
                            <option value={-1}>-1</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                            <option value={32}>32</option>
                            <option value={33}>33</option>
                            <option value={34}>34</option>
                            <option value={35}>35</option>
                            <option value={36}>36</option>
                            <option value={37}>37</option>
                            <option value={38}>38</option>
                            <option value={39}>39</option>
                            <option value={40}>40</option>
                          </select>
                          <input
                            className="form-control d-inline-block mt-2"
                            type="number"
                            min={-20}
                            max={40}
                            step={1}
                            id="slider-input-number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Slider With Input Ends*/}
            {/* Vertical Sliders section */}
            <section id="vsliders">
              <div className="row">
                {/* Default Vertical Slider starts */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Vertical Default</h4>
                    </div>
                    <div className="card-body text-center">
                      <div id="slider-vertical" />
                    </div>
                  </div>
                </div>
                {/* Default Vertical Slider ends */}
                {/* Connect to Upper Vertical Slider starts */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Connect to upper</h4>
                    </div>
                    <div className="card-body text-center">
                      <div id="connect-upper" />
                    </div>
                  </div>
                </div>
                {/* Connect to Upper Vertical Slider ends */}
                {/* Tooltip Vertical Slider starts */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Tooltips</h4>
                    </div>
                    <div className="card-body text-center">
                      <div id="slider-tooltips" className="me-2" />
                    </div>
                  </div>
                </div>
                {/* Tooltip Vertical Slider ends */}
                {/* Limit Vertical Slider starts */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Limit</h4>
                    </div>
                    <div className="card-body text-center">
                      <div id="vertical-limit" />
                    </div>
                  </div>
                </div>
                {/* Limit Vertical Slider ends */}
              </div>
            </section>
            {/*/ Vertical Sliders section */}
          </div>
        </div>
      </div>
    </>
  );
}
