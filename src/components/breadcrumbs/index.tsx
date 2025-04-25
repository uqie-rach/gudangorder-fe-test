import { cn } from '@/lib/utils'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  xPos?: 'left' | 'right' | 'center'
}

const Breadcrumb = ({ items, className = '', xPos }: BreadcrumbProps) => {
  const position = xPos === 'left' ? 'items-start' : xPos === 'right' ? 'items-end' : 'items-center'

  return (
    <section className={`py-2 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={
          cn(
            "flex flex-col justify-center space-y-4",
            position
          )
        }>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap justify-center space-x-2 text-sm text-gray-500">
            {items.map((item, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-900">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
