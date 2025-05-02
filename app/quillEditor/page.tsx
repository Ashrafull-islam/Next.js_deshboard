"use client"

import Script from "next/script"

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script src="/app-assets/vendors/js/vendors.min.js" strategy="beforeInteractive" />

      {/* BEGIN: Page Vendor JS */}
      <Script src="/app-assets/vendors/js/editors/quill/katex.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/editors/quill/highlight.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/editors/quill/quill.min.js" strategy="afterInteractive" />

      {/* BEGIN: Theme JS */}
      <Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* BEGIN: Page JS */}
      <Script src="/app-assets/js/scripts/forms/form-quill-editor.js" strategy="afterInteractive" />

        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">
              Quill Editor
            </h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Form Elements</a>
                </li>
                <li className="breadcrumb-item active">Quill Editor</li>
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
      {/* Snow Editor start */}
      <section className="snow-editor">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Snow Editor</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Snow is a clean, flat toolbar theme.
                </p>
                <div className="row">
                  <div className="col-sm-12">
                    <div id="snow-wrapper">
                      <div id="snow-container">
                        <div className="quill-toolbar">
                          <span className="ql-formats">
                            <select className="ql-header">
                              <option value={1}>Heading</option>
                              <option value={2}>Subheading</option>
                              <option >Normal</option>
                            </select>
                            <select className="ql-font">
                              <option >Sailec Light</option>
                              <option value="sofia">Sofia Pro</option>
                              <option value="slabo">Slabo 27px</option>
                              <option value="roboto">Roboto Slab</option>
                              <option value="inconsolata">Inconsolata</option>
                              <option value="ubuntu">Ubuntu Mono</option>
                            </select>
                          </span>
                          <span className="ql-formats">
                            <button className="ql-bold" />
                            <button className="ql-italic" />
                            <button className="ql-underline" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-list" value="ordered" />
                            <button className="ql-list" value="bullet" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-link" />
                            <button className="ql-image" />
                            <button className="ql-video" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-formula" />
                            <button className="ql-code-block" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-clean" />
                          </span>
                        </div>
                        <div className="editor">
                          <h1 className="ql-align-center">
                            Quill Rich Text Editor
                          </h1>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            Quill is a free,{" "}
                            <a href="https://github.com/quilljs/quill/">
                              open source
                            </a>{" "}
                            WYSIWYG editor built for the modern web. With its
                            <a href="http://quilljs.com/docs/modules/">
                              modular architecture
                            </a>{" "}
                            and expressive
                            <a href="http://quilljs.com/docs/api/">API</a>, it
                            is completely customizable to fit any need.
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <iframe
                            className="ql-video ql-align-center"
                            src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
                            width={560}
                            height={238}
                          />
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <h2 className="ql-align-center">
                            Getting Started is Easy
                          </h2>
                          <p className="card-text">
                            <br />
                          </p>
                          <pre>
                            // &lt;link
                            href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
                            rel="stylesheet"&gt;{"\n"}// &lt;script
                            src="https://cdn.quilljs.com/1.3.6/quill.min.js"
                            type="text/javascript"&gt;&lt;/script&gt;{"\n"}var
                            quill = new Quill('#editor', {"{"}
                            {"\n"}
                            {"    "}modules: {"{"}
                            {"\n"}
                            {"        "}toolbar: '#toolbar'{"\n"}
                            {"    "}
                            {"}"},{"\n"}
                            {"    "}theme: 'snow'{"\n"}
                            {"}"});{"\n"}// Open your browser's developer
                            console to try out the API!
                          </pre>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text ql-align-center">
                            <strong>Built with</strong>
                          </p>
                          <p className="card-text ql-align-center">
                            &nbsp;
                            <span
                              className="ql-formula"
                              data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"
                            />
                            &nbsp;
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Snow Editor end */}
      {/* Bubble Editor start */}
      <section className="quill-editor">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bubble Editor</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <code>Bubble</code> is a simple tooltip based theme. Try
                  double clicking on text, you should see bubble with toolbars
                  for editing.
                </p>
                <div className="row">
                  <div className="col-sm-12">
                    <div id="bubble-wrapper">
                      <div id="bubble-container">
                        <div className="editor">
                          <h1 className="ql-align-center">
                            Quill Rich Text Editor
                          </h1>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            Quill is a free,{" "}
                            <a href="https://github.com/quilljs/quill/">
                              open source
                            </a>{" "}
                            WYSIWYG editor built for the modern web. With its
                            <a href="http://quilljs.com/docs/modules/">
                              modular architecture
                            </a>{" "}
                            and expressive
                            <a href="http://quilljs.com/docs/api/">API</a>, it
                            is completely customizable to fit any need.
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <iframe
                            className="ql-video ql-align-center"
                            src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
                            width={560}
                            height={238}
                          />
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <h2 className="ql-align-center">
                            Getting Started is Easy
                          </h2>
                          <p className="card-text">
                            <br />
                          </p>
                          <pre className="language-javascript">
                            <code className="language-javascript">
                              {"\n"}// &lt;link
                              href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
                              rel="stylesheet"&gt;{"\n"}// &lt;script
                              src="https://cdn.quilljs.com/1.3.6/quill.min.js"
                              type="text/javascript"&gt;&lt;/script&gt;{"\n"}var
                              quill = new Quill('#editor', {"{"}
                              {"\n"}
                              {"    "}modules: {"{"}
                              {"\n"}
                              {"        "}toolbar: '#toolbar'{"\n"}
                              {"    "}
                              {"}"},{"\n"}
                              {"    "}theme: 'bubble'{"\n"}
                              {"}"});{"\n"}// Open your browser's developer
                              console to try out the API!{"\n"}
                            </code>
                            {"\n"}
                            {"                      "}
                          </pre>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text ql-align-center">
                            <strong>Built with</strong>
                          </p>
                          <p className="card-text ql-align-center">
                            &nbsp;
                            <span
                              className="ql-formula"
                              data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"
                            />
                            &nbsp;
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bubble Editor end */}
      {/* full Editor start */}
      <section className="full-editor">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Full Editor</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  By default all formats are enabled and allowed to exist within
                  a Quill editor and can be configured with the
                  <code>formats</code> option. This is separate from adding a
                  control in the <code>Toolbar</code>. For example, you can
                  configure Quill to allow bolded content to be pasted into an
                  editor that has no bold button in the toolbar.
                </p>
                <div className="row">
                  <div className="col-sm-12">
                    <div id="full-wrapper">
                      <div id="full-container">
                        <div className="editor">
                          <h1 className="ql-align-center">
                            Quill Rich Text Editor
                          </h1>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            Quill is a free,{" "}
                            <a href="https://github.com/quilljs/quill/">
                              open source
                            </a>{" "}
                            WYSIWYG editor built for the modern web. With its
                            <a href="http://quilljs.com/docs/modules/">
                              modular architecture
                            </a>{" "}
                            and expressive
                            <a href="http://quilljs.com/docs/api/">API</a>, it
                            is completely customizable to fit any need.
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <iframe
                            className="ql-video ql-align-center"
                            src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
                            width={560}
                            height={238}
                          />
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <h2 className="ql-align-center">
                            Getting Started is Easy
                          </h2>
                          <p className="card-text">
                            <br />
                          </p>
                          <pre>
                            // &lt;link
                            href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
                            rel="stylesheet"&gt;{"\n"}// &lt;script
                            src="https://cdn.quilljs.com/1.3.6/quill.min.js"
                            type="text/javascript"&gt;&lt;/script&gt;{"\n"}var
                            quill = new Quill('#editor', {"{"}
                            {"\n"}
                            {"    "}modules: {"{"}
                            {"\n"}
                            {"        "}toolbar: '#toolbar'{"\n"}
                            {"    "}
                            {"}"},{"\n"}
                            {"    "}theme: 'snow'{"\n"}
                            {"}"});{"\n"}// Open your browser's developer
                            console to try out the API!
                          </pre>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                          <p className="card-text ql-align-center">
                            <strong>Built with</strong>
                          </p>
                          <p className="card-text ql-align-center">
                            &nbsp;
                            <span
                              className="ql-formula"
                              data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"
                            />
                            &nbsp;
                          </p>
                          <p className="card-text">
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* full Editor end */}
    </div>
  </div>
</div>

    </>
  )
}
