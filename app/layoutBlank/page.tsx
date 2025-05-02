"use client";

import Script from "next/script";

export default function page() {
  return (
    <>
      {/* BEGIN: Vendor JS */}
      <Script
        src="/app-assets/vendors/js/vendors.min.js"
        strategy="beforeInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="row">
              <div className="col-12 p-4">
                <h4 className="mb-2">Layout Blank</h4>
                <div className="alert alert-primary" role="alert">
                  <div className="alert-body">
                    <strong>Info:</strong> This layout is used in Authentication
                    &amp; Miscellaneous page. Please check the&nbsp;
                    <a
                      className="text-primary"
                      href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-blank.html"
                      target="_blank"
                    >
                      Layout blank documentation
                    </a>
                    &nbsp; for more details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
