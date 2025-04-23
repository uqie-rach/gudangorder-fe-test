import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <main className="font-sans">
      <section className="tp-error-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-error-content text-center">
                <div>
                  <Image
                    src="/assets/img/error/error.png"
                    alt="Eror page not found in Gudangorder website"
                    className="mx-auto"
                    width={160}
                    height={100}
                    priority={true}
                  />
                </div>

                <h3 className="font-sans font-extrabold text-xl xl:text-3xl 2xl:text-4xl">Oops! Page not found</h3>
                <p className="font-sans text-gray-600 text-sm md:text-base">Whoops, this is embarassing. Looks like the page you were looking for wasn't found.</p>
                <Link href="/" className="tp-error-btn">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default NotFoundPage
