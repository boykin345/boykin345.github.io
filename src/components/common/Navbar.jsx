import { withBase } from '@/lib/url';

const links = [
  { href: '/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact Me' },
];

const Navbar = ({ pathname, children }) => {
  return (
    <div className="nav content-container">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <a
            key={link.href}
            href={withBase(link.href)}
            className={`relative px-2 ${isActive ? 'active logo' : 'logo'}`}
          >
            {link.label}
          </a>
        );
      })}
      <div className="site-animation">
        <a href={withBase('/new/')}>v2</a>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
