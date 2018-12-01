import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button,
} from 'reactstrap';


const PartnerInputs = ({
  partners,
  ddOptions,
  radioOptions,
}) => (
  <div className="partners-inputs">
    <div>
      <Dropdown
        isOpen={ddOptions.isOpen}
        toggle={ddOptions.toggle}
      >
        <DropdownToggle caret>
          { partners.find(partner => partner.code === ddOptions.value).name }
        </DropdownToggle>
        <DropdownMenu>
          {
            partners.map(partner => (
              <DropdownItem
                key={partner.code}
                onClick={ddOptions.onClick(partner.code)}
              >
                {partner.name}
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </Dropdown>
      <div className="partners-radio-wrapper">
        <Button
          type="button"
          name="deal"
          onClick={radioOptions.onClick}
          outline={radioOptions.value !== 'deal'}
        >
          Deal
        </Button>
        <Button
          type="button"
          name="banner"
          onClick={radioOptions.onClick}
          outline={radioOptions.value !== 'banner'}
        >
          Banner
        </Button>
      </div>
    </div>
    <Button type="button">Export</Button>
  </div>
);

PartnerInputs.defaultProps = {
  partners: [],
};

PartnerInputs.propTypes = {
  partners: PropTypes.array,
  ddOptions: PropTypes.object.isRequired,
  radioOptions: PropTypes.object.isRequired,
};

export default PartnerInputs;
