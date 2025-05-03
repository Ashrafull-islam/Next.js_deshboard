
export default function page() {
  return (
    <>
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
