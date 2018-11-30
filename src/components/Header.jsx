import '@/assets/scss/_header.scss';

import React from 'react';
import PropTypes from 'prop-types';


export const HeaderTitle = ({ children }) => (
  <h3 className="header-title">{ children }</h3>
);

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export const HeaderNav = ({ items }) => (
  <div className="header-nav">
    {
      items.map((item, index) => (
        index === 0
          ? <div>{item}</div>
          : (
            <div>
              <span>/</span>
              {item}
            </div>
          )
      ))
    }
  </div>
);

HeaderNav.propTypes = {
  items: PropTypes.array.isRequired,
};

const Header = ({
  title,
  navItems,
}) => (
  <div className="header">
    <HeaderTitle>{ title }</HeaderTitle>
    <HeaderNav items={navItems} />
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
};

export default Header;
