"use client"
import Script from "next/script";

export default function page() {
  return (
    <>
      <Script src="/app-assets/vendors/js/extensions/moment.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js" strategy="afterInteractive" />
      <Script src="/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/core/app-menu.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />
      <Script src="/app-assets/js/scripts/pages/app-invoice-list.js" strategy="afterInteractive" />
      <Script id="feather-init" strategy="afterInteractive">
        {`
          window.addEventListener('load', function () {
            if (window.feather) {
              window.feather.replace({ width: 14, height: 14 });
            }
          });
        `}
      </Script>
    <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper container-xxl p-0">
    <div className="content-header row"></div>
    <div className="content-body">
      <section className="invoice-list-wrapper">
        <div className="card">
          <div className="card-datatable table-responsive">
            <table className="invoice-list-table table">
              <thead>
                <tr>
                  <th />
                  <th>#</th>
                  <th>
                    <i data-feather="trending-up" />
                  </th>
                  <th>Client</th>
                  <th>Total</th>
                  <th className="text-truncate">Issued Date</th>
                  <th>Balance</th>
                  <th>Invoice Status</th>
                  <th className="cell-fit">Actions</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    </>
  )
}
