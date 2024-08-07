import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex space-x-2 text-light-text dark:text-dark-text">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
          {index < items.length - 1 && <span className="text-light-secondaryText dark:text-dark-secondaryText">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
