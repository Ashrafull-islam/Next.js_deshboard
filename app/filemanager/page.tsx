"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
     {/* Vendor JS */}
     <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

{/* Page Vendor JS */}
<Script src="/app-assets/vendors/js/extensions/jstree.min.js" strategy="afterInteractive" />

{/* Theme JS */}
<Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
<Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

{/* Page JS */}
<Script src="/app-assets/js/scripts/pages/app-file-manager.js" strategy="afterInteractive" />

{/* Content */}
    <div className="app-content content file-manager-application">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-area-wrapper container-xxl p-0">
    <div className="sidebar-left">
      <div className="sidebar">
        <div className="sidebar-file-manager">
          <div className="sidebar-inner">
            {/* sidebar menu links starts */}
            {/* add file button */}
            <div className="dropdown dropdown-actions">
              <button
                className="btn btn-primary add-file-btn text-center w-100"
                type="button"
                id="addNewFile"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="align-middle">Add New</span>
              </button>
              <div className="dropdown-menu" aria-labelledby="addNewFile">
                <div
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#new-folder-modal"
                >
                  <div className="mb-0">
                    <i data-feather="folder" className="me-25" />
                    <span className="align-middle">Folder</span>
                  </div>
                </div>
                <div className="dropdown-item">
                  <div className="mb-0" htmlFor="file-upload">
                    <i data-feather="upload-cloud" className="me-25" />
                    <span className="align-middle">File Upload</span>
                    <input type="file" id="file-upload" hidden="" />
                  </div>
                </div>
                <div className="dropdown-item">
                  <div htmlFor="folder-upload" className="mb-0">
                    <i data-feather="upload-cloud" className="me-25" />
                    <span className="align-middle">Folder Upload</span>
                    <input
                      type="file"
                      id="folder-upload"
                      webkitdirectory=""
                      mozdirectory=""
                      hidden=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* add file button ends */}
            {/* sidebar list items starts  */}
            <div className="sidebar-list">
              {/* links for file manager sidebar */}
              <div className="list-group">
                <div className="my-drive" />
                <a
                  href="#"
                  className="list-group-item list-group-item-action active"
                >
                  <i data-feather="star" className="me-50 font-medium-3" />
                  <span className="align-middle">Important</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="clock" className="me-50 font-medium-3" />
                  <span className="align-middle">Recents</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="trash" className="me-50 font-medium-3" />
                  <span className="align-middle">Deleted Files</span>
                </a>
              </div>
              <div className="list-group list-group-labels">
                <h6 className="section-label px-2 mb-1">Labels</h6>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="file-text" className="me-50 font-medium-3" />
                  <span className="align-middle">Documents</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="image" className="me-50 font-medium-3" />
                  <span className="align-middle">Images</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="video" className="me-50 font-medium-3" />
                  <span className="align-middle">Videos</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="music" className="me-50 font-medium-3" />
                  <span className="align-middle">Audio</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <i data-feather="layers" className="me-50 font-medium-3" />
                  <span className="align-middle">Archives</span>
                </a>
              </div>
              {/* links for file manager sidebar ends */}
              {/* storage status of file manager starts*/}
              <div className="storage-status mb-1 px-2">
                <h6 className="section-label mb-1">Storage Status</h6>
                <div className="d-flex align-items-center cursor-pointer">
                  <i data-feather="server" className="font-large-1" />
                  <div className="file-manager-progress ms-1">
                    <span>68GB used of 100GB</span>
                    <div
                      className="progress progress-bar-primary my-50"
                      style={{ height: 6 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={80}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* storage status of file manager ends*/}
            </div>
            {/* side bar list items ends  */}
            {/* sidebar menu links ends */}
          </div>
        </div>
      </div>
    </div>
    <div className="content-right">
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          {/* overlay container */}
          <div className="body-content-overlay" />
          {/* file manager app content starts */}
          <div className="file-manager-main-content">
            {/* search area start */}
            <div className="file-manager-content-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="sidebar-toggle d-block d-xl-none float-start align-middle ms-1">
                  <i data-feather="menu" className="font-medium-5" />
                </div>
                <div className="input-group input-group-merge shadow-none m-0 flex-grow-1">
                  <span className="input-group-text border-0">
                    <i data-feather="search" />
                  </span>
                  <input
                    type="text"
                    className="form-control files-filter border-0 bg-transparent"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="file-actions">
                  <i
                    data-feather="arrow-down-circle"
                    className="font-medium-2 cursor-pointer d-sm-inline-block d-none me-50"
                  />
                  <i
                    data-feather="trash"
                    className="font-medium-2 cursor-pointer d-sm-inline-block d-none me-50"
                  />
                  <i
                    data-feather="alert-circle"
                    className="font-medium-2 cursor-pointer d-sm-inline-block d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#app-file-manager-info-sidebar"
                  />
                  <div className="dropdown d-inline-block">
                    <i
                      className="font-medium-2 cursor-pointer"
                      data-feather="more-vertical"
                      role="button"
                      id="fileActions"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></i>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="fileActions"
                    >
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="move"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Open with</span>
                      </a>
                      <a
                        className="dropdown-item d-sm-none d-block"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#app-file-manager-info-sidebar"
                      >
                        <i
                          data-feather="alert-circle"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">More Options</span>
                      </a>
                      <a className="dropdown-item d-sm-none d-block" href="#">
                        <i
                          data-feather="trash"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Delete</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="plus"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Add shortcut</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="folder-plus"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Move to</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="star"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Add to starred</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="droplet"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Change color</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i
                          data-feather="download"
                          className="cursor-pointer me-50"
                        />
                        <span className="align-middle">Download</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="btn-group view-toggle ms-50" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="view-btn-radio"
                    data-view="grid"
                    id="gridView"
                    defaultChecked=""
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary p-50 btn-sm"
                    htmlFor="gridView"
                  >
                    <i data-feather="grid" />
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="view-btn-radio"
                    data-view="list"
                    id="listView"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary p-50 btn-sm"
                    htmlFor="listView"
                  >
                    <i data-feather="list" />
                  </label>
                </div>
              </div>
            </div>
            {/* search area ends here */}
            <div className="file-manager-content-body">
              {/* drives area starts*/}
              <div className="drives">
                <div className="row">
                  <div className="col-12">
                    <h6 className="files-section-title mb-75">Drives</h6>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card shadow-none border cursor-pointer">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <img
                            src="../../../app-assets/images/icons/drive.png"
                            alt="google drive"
                            height={38}
                          />
                          <div className="dropdown-items-wrapper">
                            <i
                              data-feather="more-vertical"
                              id="dropdownMenuLink1"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuLink1"
                            >
                              <a className="dropdown-item" href="#">
                                <i
                                  data-feather="refresh-cw"
                                  className="me-25"
                                />
                                <span className="align-middle">Refresh</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="settings" className="me-25" />
                                <span className="align-middle">Manage</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-25" />
                                <span className="align-middle">Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="my-1">
                          <h5>Google drive</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-50">
                          <span className="text-truncate">35GB Used</span>
                          <small className="text-muted">50GB</small>
                        </div>
                        <div
                          className="progress progress-bar-warning progress-md mb-0"
                          style={{ height: 10 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={70}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card shadow-none border cursor-pointer">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <img
                            src="../../../app-assets/images/icons/dropbox.png"
                            alt="dropbox"
                            height={38}
                          />
                          <div className="dropdown-items-wrapper">
                            <i
                              data-feather="more-vertical"
                              id="dropdownMenuLink2"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuLink2"
                            >
                              <a className="dropdown-item" href="#">
                                <i
                                  data-feather="refresh-cw"
                                  className="me-25"
                                />
                                <span className="align-middle">Refresh</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="settings" className="me-25" />
                                <span className="align-middle">Manage</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-25" />
                                <span className="align-middle">Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="my-1">
                          <h5>Dropbox</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-50">
                          <span className="text-truncate">1.2GB Used</span>
                          <small className="text-muted">2GB</small>
                        </div>
                        <div
                          className="progress progress-bar-success progress-md mb-0"
                          style={{ height: 10 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={70}
                            aria-valuemax={100}
                            style={{ width: "68%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card shadow-none border cursor-pointer">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <img
                            src="../../../app-assets/images/icons/onedrivenew.png"
                            alt="icloud"
                            height={38}
                            className="p-25"
                          />
                          <div className="dropdown-items-wrapper">
                            <i
                              data-feather="more-vertical"
                              id="dropdownMenuLink3"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuLink3"
                            >
                              <a className="dropdown-item" href="#">
                                <i
                                  data-feather="refresh-cw"
                                  className="me-25"
                                />
                                <span className="align-middle">Refresh</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="settings" className="me-25" />
                                <span className="align-middle">Manage</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-25" />
                                <span className="align-middle">Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="my-1">
                          <h5>OneDrive</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-50">
                          <span className="text-truncate">1.6GB Used</span>
                          <small className="text-muted">2GB</small>
                        </div>
                        <div
                          className="progress progress-bar-primary progress-md mb-0"
                          style={{ height: 10 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={70}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card shadow-none border cursor-pointer">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <img
                            src="../../../app-assets/images/icons/icloud-1.png"
                            alt="icloud"
                            height={38}
                            className="p-25"
                          />
                          <div className="dropdown-items-wrapper">
                            <span
                              data-feather="more-vertical"
                              id="dropdownMenuLink4"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuLink4"
                            >
                              <a className="dropdown-item" href="#">
                                <i
                                  data-feather="refresh-cw"
                                  className="me-25"
                                />
                                <span className="align-middle">Refresh</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="settings" className="me-25" />
                                <span className="align-middle">Manage</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <i data-feather="trash" className="me-25" />
                                <span className="align-middle">Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="my-1">
                          <h5>iCloud</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-50">
                          <span className="text-truncate">1.8GB Used</span>
                          <small className="text-muted">3GB</small>
                        </div>
                        <div
                          className="progress progress-bar-info progress-md mb-0"
                          style={{ height: 10 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={70}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* drives area ends*/}
              {/* Folders Container Starts */}
              <div className="view-container">
                <h6 className="files-section-title mt-25 mb-75">Folders</h6>
                <div className="files-header">
                  <h6 className="fw-bold mb-0">Filename</h6>
                  <div>
                    <h6 className="fw-bold file-item-size d-inline-block mb-0">
                      Size
                    </h6>
                    <h6 className="fw-bold file-last-modified d-inline-block mb-0">
                      Last modified
                    </h6>
                    <h6 className="fw-bold d-inline-block me-1 mb-0">
                      Actions
                    </h6>
                  </div>
                </div>
                <div className="card file-manager-item folder level-up">
                  <div className="card-img-top file-logo-wrapper">
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="arrow-up" />
                    </div>
                  </div>
                  <div className="card-body ps-2 pt-0 pb-1">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">...</p>
                    </div>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck1"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Projects</p>
                      <p className="card-text file-size mb-0">2gb</p>
                      <p className="card-text file-date">01 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 21 hours ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck2"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Design</p>
                      <p className="card-text file-size mb-0">500mb</p>
                      <p className="card-text file-date">05 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 18 hours ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck3"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">UI Kit</p>
                      <p className="card-text file-size mb-0">200mb</p>
                      <p className="card-text file-date">01 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 2 days ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck4"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Documents</p>
                      <p className="card-text file-size mb-0">50.3mb</p>
                      <p className="card-text file-date">10 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 6 days ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck5"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Videos</p>
                      <p className="card-text file-size mb-0">354mb</p>
                      <p className="card-text file-date">08 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 8 days ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item folder">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck6"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <i data-feather="folder" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Styles</p>
                      <p className="card-text file-size mb-0">32.2mb</p>
                      <p className="card-text file-date">05 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 2 months ago
                    </small>
                  </div>
                </div>
                <div className="d-none flex-grow-1 align-items-center no-result mb-3">
                  <i data-feather="alert-circle" className="me-50" />
                  No Results
                </div>
              </div>
              {/* /Folders Container Ends */}
              {/* Files Container Starts */}
              <div className="view-container">
                <h6 className="files-section-title mt-2 mb-75">Files</h6>
                <div className="card file-manager-item file">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck7"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck7"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <img
                        src="../../../app-assets/images/icons/jpg.png"
                        alt="file-icon"
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">Profile.jpg</p>
                      <p className="card-text file-size mb-0">12.6mb</p>
                      <p className="card-text file-date">23 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 3 hours ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item file">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck8"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck8"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <img
                        src="../../../app-assets/images/icons/doc.png"
                        alt="file-icon"
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">account.doc</p>
                      <p className="card-text file-size mb-0">82kb</p>
                      <p className="card-text file-date">25 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 23 minutes ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item file">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck9"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck9"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <img
                        src="../../../app-assets/images/icons/txt.png"
                        alt="file-icon"
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">notes.txt</p>
                      <p className="card-text file-size mb-0">54kb</p>
                      <p className="card-text file-date">01 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 43 minutes ago
                    </small>
                  </div>
                </div>
                <div className="card file-manager-item file">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck10"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheck10"
                    />
                  </div>
                  <div className="card-img-top file-logo-wrapper">
                    <div className="dropdown float-end">
                      <i
                        data-feather="more-vertical"
                        className="toggle-dropdown mt-n25"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <img
                        src="../../../app-assets/images/icons/json.png"
                        alt="file-icon"
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="content-wrapper">
                      <p className="card-text file-name mb-0">users.json</p>
                      <p className="card-text file-size mb-0">200kb</p>
                      <p className="card-text file-date">12 may 2019</p>
                    </div>
                    <small className="file-accessed text-muted">
                      Last accessed: 1 hour ago
                    </small>
                  </div>
                </div>
                <div className="d-none flex-grow-1 align-items-center no-result mb-3">
                  <i data-feather="alert-circle" className="me-50" />
                  No Results
                </div>
              </div>
              {/* /Files Container Ends */}
            </div>
          </div>
          {/* file manager app content ends */}
          {/* File Info Sidebar Starts*/}
          <div
            className="modal modal-slide-in fade show"
            id="app-file-manager-info-sidebar"
          >
            <div className="modal-dialog sidebar-lg">
              <div className="modal-content p-0">
                <div className="modal-header d-flex align-items-center justify-content-between mb-1 p-2">
                  <h5 className="modal-title">menu.js</h5>
                  <div>
                    <i
                      data-feather="trash"
                      className="cursor-pointer me-50"
                      data-bs-dismiss="modal"
                    />
                    <i
                      data-feather="x"
                      className="cursor-pointer"
                      data-bs-dismiss="modal"
                    />
                  </div>
                </div>
                <div className="modal-body flex-grow-1 pb-sm-0 pb-1">
                  <ul className="nav nav-tabs tabs-line" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#details-tab"
                        role="tab"
                        aria-controls="details-tab"
                        aria-selected="true"
                      >
                        <i data-feather="file" />
                        <span className="align-middle ms-25">Details</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#activity-tab"
                        role="tab"
                        aria-controls="activity-tab"
                        aria-selected="true"
                      >
                        <i data-feather="activity" />
                        <span className="align-middle ms-25">Activity</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="details-tab"
                      role="tabpanel"
                      aria-labelledby="details-tab"
                    >
                      <div className="d-flex flex-column justify-content-center align-items-center py-5">
                        <img
                          src="../../../app-assets/images/icons/js.png"
                          alt="file-icon"
                          height={64}
                        />
                        <p className="mb-0 mt-1">54kb</p>
                      </div>
                      <h6 className="file-manager-title my-2">Settings</h6>
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between align-items-center mb-1">
                          <span>File Sharing</span>
                          <div className="form-check form-switch">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="sharing"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="sharing"
                            />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-1">
                          <span>Synchronization</span>
                          <div className="form-check form-switch">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultChecked=""
                              id="sync"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="sync"
                            />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-1">
                          <span>Backup</span>
                          <div className="form-check form-switch">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="backup"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="backup"
                            />
                          </div>
                        </li>
                      </ul>
                      <hr className="my-2" />
                      <h6 className="file-manager-title my-2">Info</h6>
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Type</p>
                          <p className="fw-bold">JS</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Size</p>
                          <p className="fw-bold">54kb</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Location</p>
                          <p className="fw-bold">Files &gt; Documents</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Owner</p>
                          <p className="fw-bold">Sheldon Cooper</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Modified</p>
                          <p className="fw-bold">12th Aug, 2020</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <p>Created</p>
                          <p className="fw-bold">01 Oct, 2019</p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="activity-tab"
                      role="tabpanel"
                      aria-labelledby="activity-tab"
                    >
                      <h6 className="file-manager-title my-2">Today</h6>
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar avatar-sm me-50">
                          <img
                            src="../../../app-assets/images/avatars/5-small.png"
                            alt="avatar"
                            width={28}
                          />
                        </div>
                        <div className="more-info">
                          <p className="mb-0">
                            <span className="fw-bold">Mae</span>
                            shared the file with
                            <span className="fw-bold">Howard</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm bg-light-primary me-50">
                          <span className="avatar-content">SC</span>
                        </div>
                        <div className="more-info">
                          <p className="mb-0">
                            <span className="fw-bold">Sheldon</span>
                            updated the file
                          </p>
                        </div>
                      </div>
                      <h6 className="file-manager-title mt-3 mb-2">
                        Yesterday
                      </h6>
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar avatar-sm bg-light-success me-50">
                          <span className="avatar-content">LH</span>
                        </div>
                        <div className="more-info">
                          <p className="mb-0">
                            <span className="fw-bold">Leonard</span>
                            renamed this file to
                            <span className="fw-bold">menu.js</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-50">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                            alt="Avatar"
                            width={28}
                          />
                        </div>
                        <div className="more-info">
                          <p className="mb-0">
                            <span className="fw-bold">You</span>
                            shared this file with Leonard
                          </p>
                        </div>
                      </div>
                      <h6 className="file-manager-title mt-3 mb-2">
                        3 days ago
                      </h6>
                      <div className="d-flex align-items-start">
                        <div className="avatar avatar-sm me-50">
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                            alt="Avatar"
                            width={28}
                          />
                        </div>
                        <div className="more-info">
                          <p className="mb-50">
                            <span className="fw-bold">You</span>
                            uploaded this file
                          </p>
                          <img
                            src="../../../app-assets/images/icons/js.png"
                            alt="Avatar"
                            className="me-50"
                            height={24}
                          />
                          <span className="fw-bold">app.js</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* File Info Sidebar Ends */}
          {/* File Dropdown Starts*/}
          <div className="dropdown-menu dropdown-menu-end file-dropdown">
            <a className="dropdown-item" href="#">
              <i data-feather="eye" className="align-middle me-50" />
              <span className="align-middle">Preview</span>
            </a>
            <a className="dropdown-item" href="#">
              <i data-feather="user-plus" className="align-middle me-50" />
              <span className="align-middle">Share</span>
            </a>
            <a className="dropdown-item" href="#">
              <i data-feather="copy" className="align-middle me-50" />
              <span className="align-middle">Make a copy</span>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i data-feather="edit" className="align-middle me-50" />
              <span className="align-middle">Rename</span>
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#app-file-manager-info-sidebar"
            >
              <i data-feather="info" className="align-middle me-50" />
              <span className="align-middle">Info</span>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i data-feather="trash" className="align-middle me-50" />
              <span className="align-middle">Delete</span>
            </a>
            <a className="dropdown-item" href="#">
              <i data-feather="alert-circle" className="align-middle me-50" />
              <span className="align-middle">Report</span>
            </a>
          </div>
          {/* /File Dropdown Ends */}
          {/* Create New Folder Modal Starts*/}
          <div className="modal fade" id="new-folder-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Folder</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="New folder"
                    placeholder="Untitled folder"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-bs-dismiss="modal"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Create New Folder Modal Ends */}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
