import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const FooterCryptos = (props) => {
  const { prevHandler, nextHandler } = props;

  return (
    <div className="footer">
      <button onClick={prevHandler} className="link" type="button">
        <FontAwesomeIcon icon={icon({ name: 'chevron-left', style: 'solid' })} />
      </button>
      <button onClick={nextHandler} className="link" type="button">
        <FontAwesomeIcon icon={icon({ name: 'chevron-right', style: 'solid' })} />
      </button>
    </div>
  );
};

FooterCryptos.propTypes = {
  nextHandler: PropTypes.func.isRequired,
  prevHandler: PropTypes.func.isRequired,
};

export default FooterCryptos;
