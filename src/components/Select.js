import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect, { components } from 'react-select'
import { COLOR, FONT_SIZE, SPACE } from 'Theme'
import { Text } from 'components/Typography'
import { Box } from 'components/Layout'
import { INPUT_HEIGHT } from 'components/TextInput'
import ArrowIconSVG from 'images/svg/select-arrow.inline.svg'

const SELECT_FONT_SIZE = '16px' // needs fixed value >= 16 to prevent zoom on mobile,

const ArrowIcon = (props) => (
  <components.DropdownIndicator {...props}>
    <ArrowIconSVG />
  </components.DropdownIndicator>
)

const customStyles = {
  placeholder: (styles) => ({
    ...styles,
    fontSize: SELECT_FONT_SIZE,
    color: COLOR.WHITE_50,
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: 0,
    border: `0.5px solid ${COLOR.WHITE_25}`,
    color: COLOR.WHITE_25,
    backgroundColor: COLOR.EXISTENTIAL_ANGST,
  }),
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: SELECT_FONT_SIZE,
    color: COLOR.WHITE_25,
    backgroundColor: COLOR.EXISTENTIAL_ANGST,
    '&:active': {
      color: COLOR.WHITE,
      backgroundColor: COLOR.EXISTENTIAL_ANGST,
    },
    '&:hover': {
      color: COLOR.WHITE,
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    width: '100%',
    fontSize: SELECT_FONT_SIZE,
    color: COLOR.WHITE,
  }),
  indicatorSeparator: () => null,
}

const Select = ({
  value,
  label,
  isValid,
  options,
  placeholder,
  handleInputChange,
  ...props
}) => (
  <Box width="100%">
    <Text as="p" fontSize={FONT_SIZE.XS} ml={SPACE.XS} mb={SPACE.XXS}>
      {label}
    </Text>
    <ReactSelect
      value={value}
      options={options}
      onChange={handleInputChange}
      components={{
        DropdownIndicator: ArrowIcon,
      }}
      placeholder={placeholder || 'Vybrať ....'}
      styles={{
        control: (styles) => ({
          ...styles,
          height: INPUT_HEIGHT,
          cursor: 'pointer',
          boxShadow: 'none !important',
          borderRadius: 0,
          border: `0.5px solid ${
            isValid ? COLOR.WHITE_25 : COLOR.DUSK_ORANGE
          } !important`,
          backgroundColor: COLOR.EXISTENTIAL_ANGST,
          fontSize: SELECT_FONT_SIZE,
          padding: `0 ${SPACE.S}`,
        }),
        ...customStyles,
      }}
      {...props}
    />
  </Box>
)

Select.defaultProps = {
  isValid: true,
}

Select.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  handleInputChange: PropTypes.func.isRequired,
}

export default Select
