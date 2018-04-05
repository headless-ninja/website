import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const InternalOrExternalLink = ({ to, target, children, ...props }) => {
  const pathname = typeof to === 'string' ? to : to.pathname;
  const isExternal =
    pathname.substr(0, 2) === '//' || /[a-zA-Z-]+:/.test(pathname);
  if (isExternal) {
    return (
      <a
        href={pathname}
        target={target || '_blank'}
        rel="noreferrer noopener"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} target={target} rel="noopener" {...props}>
      {children}
    </Link>
  );
};

InternalOrExternalLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InternalOrExternalLink.defaultProps = {
  target: null,
};

export default InternalOrExternalLink;
