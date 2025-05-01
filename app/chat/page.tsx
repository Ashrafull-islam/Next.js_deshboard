
export default function page() {
  return (
    <>
        <div className="app-content content chat-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-area-wrapper container-xxl p-0">
    <div className="sidebar-left">
      <div className="sidebar">
        {/* Admin user profile area */}
        <div className="chat-profile-sidebar">
          <header className="chat-profile-header">
            <span className="close-icon">
              <i data-feather="x" />
            </span>
            {/* User Information */}
            <div className="header-profile-sidebar">
              <div className="avatar box-shadow-1 avatar-xl avatar-border">
                <img
                  src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                  alt="user_avatar"
                />
                <span className="avatar-status-online avatar-status-xl" />
              </div>
              <h4 className="chat-user-name">John Doe</h4>
              <span className="user-post">Admin</span>
            </div>
            {/*/ User Information */}
          </header>
          {/* User Details start */}
          <div className="profile-sidebar-area">
            <h6 className="section-label mb-1">About</h6>
            <div className="about-user">
              <textarea
                data-length={120}
                className="form-control char-textarea"
                id="textarea-counter"
                rows={5}
                placeholder="About User"
                defaultValue={
                  "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow."
                }
              />
              <small className="counter-value float-end">
                <span className="char-count">108</span> / 120{" "}
              </small>
            </div>
            {/* To set user status */}
            <h6 className="section-label mb-1 mt-3">Status</h6>
            <ul className="list-unstyled user-status">
              <li className="pb-1">
                <div className="form-check form-check-success">
                  <input
                    type="radio"
                    id="activeStatusRadio"
                    name="userStatus"
                    className="form-check-input"
                    defaultValue="online"
                    defaultChecked={true}
                  />
                  <label
                    className="form-check-label ms-25"
                    htmlFor="activeStatusRadio"
                  >
                    Active
                  </label>
                </div>
              </li>
              <li className="pb-1">
                <div className="form-check form-check-danger">
                  <input
                    type="radio"
                    id="dndStatusRadio"
                    name="userStatus"
                    className="form-check-input"
                    defaultValue="busy"
                  />
                  <label
                    className="form-check-label ms-25"
                    htmlFor="dndStatusRadio"
                  >
                    Do Not Disturb
                  </label>
                </div>
              </li>
              <li className="pb-1">
                <div className="form-check form-check-warning">
                  <input
                    type="radio"
                    id="awayStatusRadio"
                    name="userStatus"
                    className="form-check-input"
                    defaultValue="away"
                  />
                  <label
                    className="form-check-label ms-25"
                    htmlFor="awayStatusRadio"
                  >
                    Away
                  </label>
                </div>
              </li>
              <li className="pb-1">
                <div className="form-check form-check-secondary">
                  <input
                    type="radio"
                    id="offlineStatusRadio"
                    name="userStatus"
                    className="form-check-input"
                    defaultValue="offline"
                  />
                  <label
                    className="form-check-label ms-25"
                    htmlFor="offlineStatusRadio"
                  >
                    Offline
                  </label>
                </div>
              </li>
            </ul>
            {/*/ To set user status */}
            {/* User settings */}
            <h6 className="section-label mb-1 mt-2">Settings</h6>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center">
                  <i
                    data-feather="check-square"
                    className="me-75 font-medium-3"
                  />
                  <span className="align-middle">Two-step Verification</span>
                </div>
                <div className="form-check form-switch me-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch1"
                    defaultChecked={true}
                  />
                  <label className="form-check-label" htmlFor="customSwitch1" />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center">
                  <i data-feather="bell" className="me-75 font-medium-3" />
                  <span className="align-middle">Notification</span>
                </div>
                <div className="form-check form-switch me-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customSwitch2"
                  />
                  <label className="form-check-label" htmlFor="customSwitch2" />
                </div>
              </li>
              <li className="mb-1 d-flex align-items-center cursor-pointer">
                <i data-feather="user" className="me-75 font-medium-3" />
                <span className="align-middle">Invite Friends</span>
              </li>
              <li className="d-flex align-items-center cursor-pointer">
                <i data-feather="trash" className="me-75 font-medium-3" />
                <span className="align-middle">Delete Account</span>
              </li>
            </ul>
            {/*/ User settings */}
            {/* Logout Button */}
            <div className="mt-3">
              <button className="btn btn-primary">
                <span>Logout</span>
              </button>
            </div>
            {/*/ Logout Button */}
          </div>
          {/* User Details end */}
        </div>
        {/*/ Admin user profile area */}
        {/* Chat Sidebar area */}
        <div className="sidebar-content">
          <span className="sidebar-close-icon">
            <i data-feather="x" />
          </span>
          {/* Sidebar header start */}
          <div className="chat-fixed-search">
            <div className="d-flex align-items-center w-100">
              <div className="sidebar-profile-toggle">
                <div className="avatar avatar-border">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                    alt="user_avatar"
                    height={42}
                    width={42}
                  />
                  <span className="avatar-status-online" />
                </div>
              </div>
              <div className="input-group input-group-merge ms-1 w-100">
                <span className="input-group-text round">
                  <i data-feather="search" className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control round"
                  id="chat-search"
                  placeholder="Search or start a new chat"
                  aria-label="Search..."
                  aria-describedby="chat-search"
                />
              </div>
            </div>
          </div>
          {/* Sidebar header end */}
          {/* Sidebar Users start */}
          <div id="users-list" className="chat-user-list-wrapper list-group">
            <h4 className="chat-list-title">Chats</h4>
            <ul className="chat-users-list chat-list media-list">
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                  <span className="avatar-status-offline" />
                </span>
                <div className="chat-info flex-grow-1">
                  <h5 className="mb-0">Elizabeth Elliott</h5>
                  <p className="card-text text-truncate">
                    Cake pie jelly jelly beans. Marzipan lemon drops halvah
                    cake. Pudding cookie lemon drops icing
                  </p>
                </div>
                <div className="chat-meta text-nowrap">
                  <small className="float-end mb-25 chat-time">4:14 PM</small>
                  <span className="badge bg-danger rounded-pill float-end">
                    3
                  </span>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                  <span className="avatar-status-busy" />
                </span>
                <div className="chat-info flex-grow-1">
                  <h5 className="mb-0">Kristopher Candy</h5>
                  <p className="card-text text-truncate">
                    Cake pie jelly jelly beans. Marzipan lemon drops halvah
                    cake. Pudding cookie lemon drops icing
                  </p>
                </div>
                <div className="chat-meta text-nowrap">
                  <small className="float-end mb-25 chat-time">9:09 AM</small>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-8.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                  <span className="avatar-status-away" />
                </span>
                <div className="chat-info flex-grow-1">
                  <h5 className="mb-0">Sarah Woods</h5>
                  <p className="card-text text-truncate">
                    Cake pie jelly jelly beans. Marzipan lemon drops halvah
                    cake. Pudding cookie lemon drops icing.
                  </p>
                </div>
                <div className="chat-meta text-nowrap">
                  <small className="float-end mb-25 chat-time">5:48 PM</small>
                </div>
              </li>
              <li className="no-results">
                <h6 className="mb-0">No Chats Found</h6>
              </li>
            </ul>
            <h4 className="chat-list-title">Contacts</h4>
            <ul className="chat-users-list contact-list media-list">
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Jenny Perich</h5>
                  <p className="card-text text-truncate">
                    Tart dragée carrot cake chocolate bar. Chocolate cake jelly
                    beans caramels tootsie roll candy canes.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-5.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Sarah Montgomery</h5>
                  <p className="card-text text-truncate">
                    Tootsie roll sesame snaps biscuit icing jelly-o biscuit
                    chupa chups powder.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Heather Howell</h5>
                  <p className="card-text text-truncate">
                    Tart cookie dragée sesame snaps halvah. Fruitcake sugar plum
                    gummies cheesecake toffee.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Kelly Reyes</h5>
                  <p className="card-text text-truncate">
                    Wafer toffee tart jelly cake croissant chocolate bar cupcake
                    donut. Fruitcake gingerbread tiramisu sweet jelly-o.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-15.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Kristopher Candy</h5>
                  <p className="card-text text-truncate">
                    Marzipan bonbon chocolate bar biscuit lemon drops muffin
                    jelly-o sweet jujubes.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-14.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Vincent Nelson</h5>
                  <p className="card-text text-truncate">
                    Toffee gummi bears sugar plum gummi bears chocolate bar
                    donut. Pudding cookie lemon drops icing
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-17.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Jimmy Parker</h5>
                  <p className="card-text text-truncate">
                    Powder halvah jelly beans topping caramels muffin dragée
                    lollipop oat cake.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-3.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Elizabeth Elliott</h5>
                  <p className="card-text text-truncate">
                    Candy canes ice cream jelly beans carrot cake chocolate bar
                    pastry candy jelly-o.
                  </p>
                </div>
              </li>
              <li>
                <span className="avatar">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-13.jpg"
                    height={42}
                    width={42}
                    alt="Generic placeholder image"
                  />
                </span>
                <div className="chat-info">
                  <h5 className="mb-0">Nelson D'souza</h5>
                  <p className="card-text text-truncate">
                    Macaroon candy canes apple pie soufflé lemon drops chocolate
                    cake chocolate sweet roll.
                  </p>
                </div>
              </li>
              <li className="no-results">
                <h6 className="mb-0">No Contacts Found</h6>
              </li>
            </ul>
          </div>
          {/* Sidebar Users end */}
        </div>
        {/*/ Chat Sidebar area */}
      </div>
    </div>
    <div className="content-right">
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="body-content-overlay" />
          {/* Main chat area */}
          <section className="chat-app-window">
            {/* To load Conversation */}
            <div className="start-chat-area">
              <div className="mb-1 start-chat-icon">
                <i data-feather="message-square" />
              </div>
              <h4 className="sidebar-toggle start-chat-text">
                Start Conversation
              </h4>
            </div>
            {/*/ To load Conversation */}
            {/* Active Chat */}
            <div className="active-chat d-none">
              {/* Chat Header */}
              <div className="chat-navbar">
                <header className="chat-header">
                  <div className="d-flex align-items-center">
                    <div className="sidebar-toggle d-block d-lg-none me-1">
                      <i data-feather="menu" className="font-medium-5" />
                    </div>
                    <div className="avatar avatar-border user-profile-toggle m-0 me-1">
                      <img
                        src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                        alt="avatar"
                        height={36}
                        width={36}
                      />
                      <span className="avatar-status-busy" />
                    </div>
                    <h6 className="mb-0">Kristopher Candy</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <i
                      data-feather="phone-call"
                      className="cursor-pointer d-sm-block d-none font-medium-2 me-1"
                    />
                    <i
                      data-feather="video"
                      className="cursor-pointer d-sm-block d-none font-medium-2 me-1"
                    />
                    <i
                      data-feather="search"
                      className="cursor-pointer d-sm-block d-none font-medium-2"
                    />
                    <div className="dropdown">
                      <button
                        className="btn-icon btn btn-transparent hide-arrow btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          data-feather="more-vertical"
                          id="chat-header-actions"
                          className="font-medium-2"
                        />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="chat-header-actions"
                      >
                        <a className="dropdown-item" href="#">
                          View Contact
                        </a>
                        <a className="dropdown-item" href="#">
                          Mute Notifications
                        </a>
                        <a className="dropdown-item" href="#">
                          Block Contact
                        </a>
                        <a className="dropdown-item" href="#">
                          Clear Chat
                        </a>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              {/*/ Chat Header */}
              {/* User Chat messages */}
              <div className="user-chats">
                <div className="chats">
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>How can we help? We're here for you! 😄</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          Hey John, I am looking for the best admin template.
                        </p>
                        <p>Could you please help me to find it out? 🤔</p>
                      </div>
                      <div className="chat-content">
                        <p>It should be Bootstrap 4 compatible.</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="divider-text">Yesterday</div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Absolutely!</p>
                      </div>
                      <div className="chat-content">
                        <p>
                          Vuexy admin is the responsive bootstrap 4 admin
                          template.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Looks clean and fresh UI. 😃</p>
                      </div>
                      <div className="chat-content">
                        <p>It's perfect for my next project.</p>
                      </div>
                      <div className="chat-content">
                        <p>How can I purchase it?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Thanks, from ThemeForest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>I will purchase it for sure. 👍</p>
                      </div>
                      <div className="chat-content">
                        <p>Thanks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <span className="avatar box-shadow-1 cursor-pointer">
                        <img
                          src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height={36}
                          width={36}
                        />
                      </span>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Great, Feel free to get in touch on</p>
                      </div>
                      <div className="chat-content">
                        <p>https://pixinvent.ticksy.com/</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Chat messages */}
              {/* Submit Chat form */}
              <form
                className="chat-app-form"
                action="javascript:void(0);"
                // onsubmit="enterChat();"
              >
                <div className="input-group input-group-merge me-1 form-send-message">
                  <span className="speech-to-text input-group-text">
                    <i data-feather="mic" className="cursor-pointer" />
                  </span>
                  <input
                    type="text"
                    className="form-control message"
                    placeholder="Type your message or use speech to text"
                  />
                  <span className="input-group-text">
                    <label
                      htmlFor="attach-doc"
                      className="attachment-icon form-label mb-0"
                    >
                      <i
                        data-feather="image"
                        className="cursor-pointer text-secondary"
                      />
                      <input type="file" id="attach-doc" hidden={true} />{" "}
                    </label>
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary send"
                //   onclick="enterChat();"
                >
                  <i data-feather="send" className="d-lg-none" />
                  <span className="d-none d-lg-block">Send</span>
                </button>
              </form>
              {/*/ Submit Chat form */}
            </div>
            {/*/ Active Chat */}
          </section>
          {/*/ Main chat area */}
          {/* User Chat profile right area */}
          <div className="user-profile-sidebar">
            <header className="user-profile-header">
              <span className="close-icon">
                <i data-feather="x" />
              </span>
              {/* User Profile image with name */}
              <div className="header-profile-sidebar">
                <div className="avatar box-shadow-1 avatar-border avatar-xl">
                  <img
                    src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                    alt="user_avatar"
                    height={70}
                    width={70}
                  />
                  <span className="avatar-status-busy avatar-status-lg" />
                </div>
                <h4 className="chat-user-name">Kristopher Candy</h4>
                <span className="user-post">UI/UX Designer 👩🏻‍💻</span>
              </div>
              {/*/ User Profile image with name */}
            </header>
            <div className="user-profile-sidebar-area">
              {/* About User */}
              <h6 className="section-label mb-1">About</h6>
              <p>
                Toffee caramels jelly-o tart gummi bears cake I love ice cream
                lollipop.
              </p>
              {/* About User */}
              {/* User's personal information */}
              <div className="personal-info">
                <h6 className="section-label mb-1 mt-3">
                  Personal Information
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <i data-feather="mail" className="font-medium-2 me-50" />
                    <span className="align-middle">kristycandy@email.com</span>
                  </li>
                  <li className="mb-1">
                    <i
                      data-feather="phone-call"
                      className="font-medium-2 me-50"
                    />
                    <span className="align-middle">+1(123) 456 - 7890</span>
                  </li>
                  <li>
                    <i data-feather="clock" className="font-medium-2 me-50" />
                    <span className="align-middle">Mon - Fri 10AM - 8PM</span>
                  </li>
                </ul>
              </div>
              {/*/ User's personal information */}
              {/* User's Links */}
              <div className="more-options">
                <h6 className="section-label mb-1 mt-3">Options</h6>
                <ul className="list-unstyled">
                  <li className="cursor-pointer mb-1">
                    <i data-feather="tag" className="font-medium-2 me-50" />
                    <span className="align-middle">Add Tag</span>
                  </li>
                  <li className="cursor-pointer mb-1">
                    <i data-feather="star" className="font-medium-2 me-50" />
                    <span className="align-middle">Important Contact</span>
                  </li>
                  <li className="cursor-pointer mb-1">
                    <i data-feather="image" className="font-medium-2 me-50" />
                    <span className="align-middle">Shared Media</span>
                  </li>
                  <li className="cursor-pointer mb-1">
                    <i data-feather="trash" className="font-medium-2 me-50" />
                    <span className="align-middle">Delete Contact</span>
                  </li>
                  <li className="cursor-pointer">
                    <i data-feather="slash" className="font-medium-2 me-50" />
                    <span className="align-middle">Block Contact</span>
                  </li>
                </ul>
              </div>
              {/*/ User's Links */}
            </div>
          </div>
          {/*/ User Chat profile right area */}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
