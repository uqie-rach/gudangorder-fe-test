import Image from "next/image"

const loading = () => {
  return (
    <div>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            {/* <!-- loading content here --> */}
            <div className="tp-preloader-content">
              <div className="tp-preloader-logo flex justify-center items-center">
                <div className="tp-preloader-circle">
                  <svg width="190" height="190" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke="#D9D9D9" cx="190" cy="190" r="180" strokeWidth="6" strokeLinecap="round"></circle>
                    <circle stroke="red" cx="190" cy="190" r="180" strokeWidth="6" strokeLinecap="round"></circle>
                  </svg>
                </div>
                <Image src="assets/img/logo/preloader/preloader-icon.svg" alt="Preloader image" width={40} height={40} />
              </div>
              <h3 className="tp-preloader-title">Shofy</h3>
              <p className="tp-preloader-subtitle">Loading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loading
