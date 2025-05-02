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

      {/* BEGIN: Page Vendor JS */}
      <Script
        src="/app-assets/vendors/js/extensions/plyr.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/extensions/plyr.polyfilled.min.js"
        strategy="afterInteractive"
      />

      {/* BEGIN: Theme JS */}
      <Script
        src="/app-assets/js/core/app-menu.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/js/core/app.js" strategy="afterInteractive" />

      {/* BEGIN: Page JS */}
      <Script
        src="/app-assets/js/scripts/extensions/ext-component-media-player.js"
        strategy="afterInteractive"
      />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Media player
                  </h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Extensions</a>
                      </li>
                      <li className="breadcrumb-item active">Media Player</li>
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
            {/* Media Player */}
            <section id="media-player-wrapper">
              <div className="row">
                {/* VIDEO */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Video</h4>
                      <div className="video-player" id="plyr-video-player">
                        <iframe
                          src="https://www.youtube.com/embed/bTqVqk7FSmY"
                          allowFullScreen={true}
                          allow="autoplay"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ VIDEO */}
                {/* AUDIO */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Audio</h4>
                      <audio
                        id="plyr-audio-player"
                        className="audio-player"
                        controls={true}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
                          type="audio/mp3"
                        />
                        <source
                          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
                          type="audio/ogg"
                        />
                      </audio>
                    </div>
                  </div>
                </div>
                {/*/ AUDIO */}
              </div>
            </section>
            {/*/ Media Player */}
          </div>
        </div>
      </div>
    </>
  );
}
