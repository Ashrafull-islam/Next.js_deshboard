import Link from "next/link";

export default function Sidenav() {
  return (
    <>
    <div
  className="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
  data-scroll-to-active="true"
>
  <div className="navbar-header">
    <ul className="nav navbar-nav flex-row">
      <li className="nav-item me-auto">
        <Link
          className="navbar-brand"
          href=""
        >
          <span className="brand-logo">
            <svg
              viewBox="0 0 139 95"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height={24}
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
          </span>
          <h2 className="brand-text">Vuexy</h2>
        </Link>
      </li>
      <li className="nav-item nav-toggle">
        <Link href={''}
          className="nav-link modern-nav-toggle pe-0"
          data-bs-toggle="collapse"
        >
          <i
            className="d-block d-xl-none text-primary toggle-icon font-medium-4"
            data-feather="x"
          />
          <i
            className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
            data-feather="disc"
            data-ticon="disc"
          />
        </Link>
      </li>
    </ul>
  </div>
  <div className="shadow-bottom" />
  <div className="main-menu-content">
    <ul
      className="navigation navigation-main"
      id="main-menu-navigation"
      data-menu="menu-navigation"
    >
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="/">
          <i data-feather="home" />
          <span className="menu-title text-truncate" data-i18n="Dashboards">
            Dashboards
          </span>
          <span className="badge badge-light-warning rounded-pill ms-auto me-1">
            2
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Analytics">
                Analytics
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="eCommerce">
                eCommerce
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" navigation-header">
        <span data-i18n="Apps & Pages">Apps &amp; Pages</span>
        <i data-feather="more-horizontal" />
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="mail" />
          <span className="menu-title text-truncate" data-i18n="Email">
            Email
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="message-square" />
          <span className="menu-title text-truncate" data-i18n="Chat">
            Chat
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="check-square" />
          <span className="menu-title text-truncate" data-i18n="Todo">
            Todo
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="calendar" />
          <span className="menu-title text-truncate" data-i18n="Calendar">
            Calendar
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="grid" />
          <span className="menu-title text-truncate" data-i18n="Kanban">
            Kanban
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="file-text" />
          <span className="menu-title text-truncate" data-i18n="Invoice">
            Invoice
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="List">
                List
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Preview">
                Preview
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Edit">
                Edit
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Add">
                Add
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="save" />
          <span className="menu-title text-truncate" data-i18n="File Manager">
            File Manager
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="shield" />
          <span
            className="menu-title text-truncate"
            data-i18n="Roles & Permission"
          >
            Roles &amp; Permission
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Roles">
                Roles
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Permission">
                Permission
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="shopping-cart" />
          <span className="menu-title text-truncate" data-i18n="eCommerce">
            eCommerce
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Shop">
                Shop
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Details">
                Details
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Wish List">
                Wish List
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Checkout">
                Checkout
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="user" />
          <span className="menu-title text-truncate" data-i18n="User">
            User
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="List">
                List
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="View">
                View
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span className="menu-item text-truncate" data-i18n="Account">
                    Account
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Security"
                  >
                    Security
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Billing & Plans"
                  >
                    Billing &amp; Plans
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Notifications"
                  >
                    Notifications
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Connections"
                  >
                    Connections
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="file-text" />
          <span className="menu-title text-truncate" data-i18n="Pages">
            Pages
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Account Settings"
              >
                Account Settings
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span className="menu-item text-truncate" data-i18n="Account">
                    Account
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Security"
                  >
                    Security
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Billings & Plans"
                  >
                    Billings &amp; Plans
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Notifications"
                  >
                    Notifications
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Connections"
                  >
                    Connections
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Profile">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="FAQ">
                FAQ
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Knowledge Base"
              >
                Knowledge Base
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Pricing">
                Pricing
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="License">
                License
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="API Key">
                API Key
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Blog">
                Blog
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span className="menu-item text-truncate" data-i18n="List">
                    List
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span className="menu-item text-truncate" data-i18n="Detail">
                    Detail
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                >
                  <span className="menu-item text-truncate" data-i18n="Edit">
                    Edit
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Mail Template"
              >
                Mail Template
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Welcome">
                    Welcome
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Reset Password"
                  >
                    Reset Password
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Verify Email"
                  >
                    Verify Email
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Deactivate Account"
                  >
                    Deactivate Account
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Invoice">
                    Invoice
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Promotional"
                  >
                    Promotional
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Miscellaneous"
              >
                Miscellaneous
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Coming Soon"
                  >
                    Coming Soon
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Not Authorized"
                  >
                    Not Authorized
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Maintenance"
                  >
                    Maintenance
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Error">
                    Error
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="user-check" />
          <span className="menu-title text-truncate" data-i18n="Authentication">
            Authentication
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Login">
                Login
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Register">
                Register
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Multi-Steps"
                  >
                    Multi-Steps
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Forgot Password"
              >
                Forgot Password
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Reset Password"
              >
                Reset Password
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Verify Email"
              >
                Verify Email
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Two Steps">
                Two Steps
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Basic">
                    Basic
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex align-items-center"
                  href=""
                  target="_blank"
                >
                  <span className="menu-item text-truncate" data-i18n="Cover">
                    Cover
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="square" />
          <span className="menu-title text-truncate" data-i18n="Modal Examples">
            Modal Examples
          </span>
        </Link>
      </li>
      <li className=" navigation-header">
        <span data-i18n="User Interface">User Interface</span>
        <i data-feather="more-horizontal" />
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="type" />
          <span className="menu-title text-truncate" data-i18n="Typography">
            Typography
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="eye" />
          <span className="menu-title text-truncate" data-i18n="Feather">
            Feather
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="credit-card" />
          <span className="menu-title text-truncate" data-i18n="Card">
            Card
          </span>
          <span className="badge badge-light-success rounded-pill ms-auto me-1">
            New
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Basic">
                Basic
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Advance">
                Advance
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Statistics">
                Statistics
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Analytics">
                Analytics
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Card Actions"
              >
                Card Actions
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="briefcase" />
          <span className="menu-title text-truncate" data-i18n="Components">
            Components
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Accordion">
                Accordion
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Alerts">
                Alerts
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Avatar">
                Avatar
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Badges">
                Badges
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Breadcrumbs">
                Breadcrumbs
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Buttons">
                Buttons
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Carousel">
                Carousel
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Collapse">
                Collapse
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Divider">
                Divider
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Dropdowns">
                Dropdowns
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="List Group">
                List Group
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Modals">
                Modals
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Navs Component"
              >
                Navs Component
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Offcanvas">
                Offcanvas
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Pagination">
                Pagination
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Pill Badges">
                Pill Badges
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Pills Component"
              >
                Pills Component
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Popovers">
                Popovers
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Progress">
                Progress
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Spinner">
                Spinner
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Tabs Component"
              >
                Tabs Component
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Timeline">
                Timeline
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Toasts">
                Toasts
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Tooltips">
                Tooltips
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="box" />
          <span className="menu-title text-truncate" data-i18n="Extensions">
            Extensions
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Sweet Alert">
                Sweet Alert
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Block UI">
                BlockUI
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Toastr">
                Toastr
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Sliders">
                Sliders
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Drag & Drop">
                Drag &amp; Drop
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Tour">
                Tour
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Clipboard">
                Clipboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Media player"
              >
                Media Player
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Context Menu"
              >
                Context Menu
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="swiper">
                Swiper
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Tree">
                Tree
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Ratings">
                Ratings
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="l18n">
                l18n
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="layout" />
          <span className="menu-title text-truncate" data-i18n="Page Layouts">
            Page Layouts
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Collapsed Menu"
              >
                Collapsed Menu
              </span>
            </Link>
          </li>
          <li className="active">
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Layout Full">
                Layout Full
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Without Menu"
              >
                Without Menu
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Layout Empty"
              >
                Layout Empty
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Layout Blank"
              >
                Layout Blank
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" navigation-header">
        <span data-i18n="Forms & Tables">Forms &amp; Tables</span>
        <i data-feather="more-horizontal" />
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="copy" />
          <span className="menu-title text-truncate" data-i18n="Form Elements">
            Form Elements
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Input">
                Input
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Input Groups"
              >
                Input Groups
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Input Mask">
                Input Mask
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Textarea">
                Textarea
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Checkbox">
                Checkbox
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Radio">
                Radio
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Custom Options"
              >
                Custom Options
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Switch">
                Switch
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Select">
                Select
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Number Input"
              >
                Number Input
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="File Uploader"
              >
                File Uploader
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Quill Editor"
              >
                Quill Editor
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Date & Time Picker"
              >
                Date &amp; Time Picker
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="box" />
          <span className="menu-title text-truncate" data-i18n="Form Layout">
            Form Layout
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="package" />
          <span className="menu-title text-truncate" data-i18n="Form Wizard">
            Form Wizard
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="check-circle" />
          <span
            className="menu-title text-truncate"
            data-i18n="Form Validation"
          >
            Form Validation
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="rotate-cw" />
          <span className="menu-title text-truncate" data-i18n="Form Repeater">
            Form Repeater
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="server" />
          <span className="menu-title text-truncate" data-i18n="Table">
            Table
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="grid" />
          <span className="menu-title text-truncate" data-i18n="Datatable">
            Datatable
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Basic">
                Basic
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-items-center"
              href=""
            >
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Advanced">
                Advanced
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" navigation-header">
        <span data-i18n="Charts & Maps">Charts &amp; Maps</span>
        <i data-feather="more-horizontal" />
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="pie-chart" />
          <span className="menu-title text-truncate" data-i18n="Charts">
            Charts
          </span>
          <span className="badge badge-light-danger rounded-pill ms-auto me-2">
            2
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Apex">
                Apex
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="">
              <i data-feather="circle" />
              <span className="menu-item text-truncate" data-i18n="Chartjs">
                Chartjs
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="">
          <i data-feather="map" />
          <span className="menu-title text-truncate" data-i18n="Leaflet Maps">
            Leaflet Maps
          </span>
        </Link>
      </li>
      <li className=" navigation-header">
        <span data-i18n="Misc">Misc</span>
        <i data-feather="more-horizontal" />
      </li>
      <li className=" nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="menu" />
          <span className="menu-title text-truncate" data-i18n="Menu Levels">
            Menu Levels
          </span>
        </Link>
        <ul className="menu-content">
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Second Level"
              >
                Second Level 2.1
              </span>
            </Link>
          </li>
          <li>
            <Link className="d-flex align-items-center" href="#">
              <i data-feather="circle" />
              <span
                className="menu-item text-truncate"
                data-i18n="Second Level"
              >
                Second Level 2.2
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link className="d-flex align-items-center" href="#">
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Third Level"
                  >
                    Third Level 3.1
                  </span>
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center" href="#">
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Third Level"
                  >
                    Third Level 3.2
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="disabled nav-item">
        <Link className="d-flex align-items-center" href="#">
          <i data-feather="eye-off" />
          <span className="menu-title text-truncate" data-i18n="Disabled Menu">
            Disabled Menu
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link
          className="d-flex align-items-center"
          href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation"
          target="_blank"
        >
          <i data-feather="folder" />
          <span className="menu-title text-truncate" data-i18n="Documentation">
            Documentation
          </span>
        </Link>
      </li>
      <li className=" nav-item">
        <Link
          className="d-flex align-items-center"
          href="https://pixinvent.ticksy.com/"
          target="_blank"
        >
          <i data-feather="life-buoy" />
          <span className="menu-title text-truncate" data-i18n="Raise Support">
            Raise Support
          </span>
        </Link>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}
