// components/Breadcrumb.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Mapping of path segments to readable labels
const PATH_LABELS: { [key: string]: string } = {
  'order': 'Order Tracking',
  'products': 'Products',
  'account': 'My Account',
  '': 'Home',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Split the pathname and remove empty segments
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  // Get the current page title
  const currentPageTitle = pathSegments.length > 0 
    ? PATH_LABELS[pathSegments[pathSegments.length - 1]] || 
      pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() + 
      pathSegments[pathSegments.length - 1].slice(1)
    : 'Home';

  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: PATH_LABELS[''], href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: PATH_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${pathSegments.slice(0, index + 1).join('/')}`,
      isLast: index === pathSegments.length - 1
    }))
  ];

  return (
    <div className="bg-gray-200">
      <div className="container p-8 pt-6 items-center">
        {/* Page Title */}
        <h1 className="text-4xl font-semibold ml-7 text-gray-800 mt-8">
          {currentPageTitle}
        </h1>

        <nav aria-label="Breadcrumb" className="w-full">
          <ol className="flex items-center space-x-2 mt-0">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.href}>
                {index > 0 && (
                  <li className="text-gray-600 text-3xl font-bold mx-1 mt-2">•</li>
                )}
                <li>
                  {item.isLast ? (
                    <span className="text-gray-600 text-xl ">
                      {item.label}
                    </span>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="text-gray-600 hover:text-blue-500 text-xl "
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}