import { NextRequest, NextResponse } from 'next/server'

// const publicRoutes = [
//   '/',
//   '/login(.*)',
//   '/register(.*)',
//   '/search(.*)',
//   '/cart',
//   '/products(.*)',
//   '/checkout(.*)',
//   '/contact'
// ]

const privateRoutes = [
  '/dashboard(.*)',
  '/profile(.*)',
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isAuth = false
  const isLoginPage = pathname === '/login' || pathname.startsWith('/login')
  const isRegisterPage = pathname === '/register' || pathname.startsWith('/register')

  const isAccessingProtectedRoute = privateRoutes.some(route => pathname?.startsWith(route))

  /**
   * When accessing login page, redirect to dashboard
   */
  if (isLoginPage || isRegisterPage) {

    // When authenticated, redirect to dashboard
    if (isAuth)
      return NextResponse.redirect(new URL('/', req.url))

    // When accessing protected routes and not authenticated,
    return NextResponse.next()
  }

  /**
   * When accessing protected routes and not authenticated,
   * redirect to login page
   */
  if (!isAuth && isAccessingProtectedRoute)
    return NextResponse.redirect(new URL('/login', req.url))

  // if (pathname === '/')
  //   return NextResponse.redirect(new URL('/products', req.url))
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
