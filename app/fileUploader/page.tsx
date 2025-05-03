
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
                    File Uploader
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Form Elements</a>
                      </li>
                      <li className="breadcrumb-item active">File Uploader</li>
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
            {/* Dropzone section start */}
            <section id="dropzone-examples">
              {/* warnings and primary alerts starts */}
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-primary" role="alert">
                    <div className="alert-body">
                      <strong>Info:</strong> Please check the
                      <a
                        href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-extensions.html#file-uploader"
                        target="_blank"
                        className="text-primary"
                      >
                        DropzoneJS documentation
                      </a>
                      for more details and usage.
                    </div>
                  </div>
                </div>
              </div>
              {/* warnings and primary alerts ends */}
              {/* single file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Single File Upload</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        By default, dropzone is a multiple file uploader and
                        does not have specific option allowing us to switch to
                        single file uploading mode, but this functionality can
                        be achieved by adding more options to the plugin
                        settings, such as
                        <code>maxfilesexceeded</code> callback and{" "}
                        <code>maxFiles</code> option set to 1.
                        <code>maxFiles: 1</code> is used to tell dropzone that
                        there should be only one file.
                      </p>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-single-file"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* single file upload ends */}
              {/* multi file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple Files Upload</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        By default, dropzone is a multiple file uploader. User
                        can either click on the dropzone area and select
                        multiple files or just drop all selected files in the
                        dropzone area. This example is the most basic setup for
                        dropzone.
                      </p>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-multiple-files"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* multi file upload ends */}
              {/* button file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Use Button To Select Files</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Using this method, user gets an option to select the
                        files using a button instead dropping all the files
                        after selected from the folders. Set{" "}
                        <code>clickable</code> to match the button's id for
                        button to work as file selector.
                      </p>
                      <button
                        id="select-files"
                        className="btn btn-outline-primary mb-1"
                      >
                        <i data-feather="file" /> Click me to select files
                      </button>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-btn-select-files"
                      >
                        <div className="dz-message">
                          Drop files here or click button to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* button file upload ends */}
              {/* limit file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Limit File Size &amp; No. Of Files
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        In many case user must be limited to upload certain no.
                        of files. You can always set the
                        <code>maxFiles</code> option to limit no. of upload
                        files. <code>maxfilesexceeded</code> event will be
                        called if uploads exceeds the limit. Also, if you want
                        to limit the file size of uploads then set the
                        <code>maxFilesize</code> option. Define the maximum file
                        size to be uploded in MBs like <code>0.5</code> MB as is
                        in this example. User can also define{" "}
                        <code>maxThumbnailFilesize</code> in MB. When the
                        uploaded file exceeds this limit, the thumbnail will not
                        be generated.
                      </p>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-file-limits"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* limit file upload ends */}
              {/* accepted file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Accepted files</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        The default implementation of <code>accept</code> checks
                        the file's mime type or extension against this list.
                        This is a comma separated list of mime types or file
                        extensions. Eg.:
                        <code>image/*,application/pdf,.psd</code>. If the
                        Dropzone is <code>clickable</code> this option will be
                        used as <code>accept</code> parameter on the hidden file
                        input as well.
                      </p>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-accept-files"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* accepted file upload ends */}
              {/* remove thumbnail file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Remove Thumbnail</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        This example allows user to remove any file out of all
                        uploaded files. This will add a link to every file
                        preview to remove or cancel (if already uploading) the
                        file. The <code>dictCancelUpload</code>,
                        <code>dictCancelUploadConfirmation</code> and{" "}
                        <code>dictRemoveFile</code> options are used for the
                        wording.
                      </p>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-remove-thumb"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove thumbnail file upload ends */}
              {/* remove all thumbnails file upload starts */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Remove All Thumbnails</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        This example allows user to create a button that will
                        remove all files from a dropzone. Hear for the button's
                        click event and then call <code>removeAllFiles</code>{" "}
                        method to remove all the files from the dropzone.
                      </p>
                      <button
                        id="clear-dropzone"
                        className="btn btn-outline-primary mb-1"
                      >
                        <i data-feather="trash" className="me-25" />
                        <span className="align-middle">Clear Dropzone</span>
                      </button>
                      <form
                        action="#"
                        className="dropzone dropzone-area"
                        id="dpz-remove-all-thumb"
                      >
                        <div className="dz-message">
                          Drop files here or click to upload.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove all thumbnails file upload ends */}
            </section>
            {/* Dropzone section end */}
          </div>
        </div>
      </div>
    </>
  );
}
