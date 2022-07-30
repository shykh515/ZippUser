import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomDropDown from '../CustomDropDown';

import styles from './styles';

const dropdownPicker = props => {
  const {
    mainContainer,
    type,
    style,
    selectedValue,
    setSelectedValue,
    placeholder,
    data,
    iconName,
    iconSize,
    iconType,
    textInputStyle,
    iconstyle,
    textInputView,
    optionsView
  } = props;

  const handleItem = () => {
    switch (type) {
      case 'age':
        return [
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
          '32',
          '33',
          '34',
          '35',
          '36',
          '37',
        ];
        break;

      case 'Select Organization':
        return [`Select Organization`, `5`, `6`, `7`, `8`, `9`];
        break;

      case 'Weight':
        return ["18", "19", "20", "21", "22", "23", "24", "25"];
        break;

      case 'inch':
        return [
          `1'`,
          `2'`,
          `3'`,
          `4'`,
          `5'`,
          `6'`,
          `7'`,
          `8'`,
          `9'`,
          `10'`,
          `11'`,
          `12'`,
        ];
        break;

      case 'Country':
        return ['Country', 'United States', 'Mexico', 'Canada', 'Guatemala', 'Cuba'];
        break;

      case 'State':
        return ['State', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'];
        break;

      case 'City':
        return ['City', 'Los Angeles', 'Chicago', 'Houston', 'San Antonio', 'Dallas'];
        break;

      case 'hiv':
        return ['Item 1', 'Item 2', 'Item 3'];
        break;

      case 'EyeColor':
        return ['Black', 'Brown', 'Gray'];
        break;

      case 'HairColor':
        return ['Black', 'Brown', 'Golden'];
        break;

      default:
        return [];
        break;
    }
  };

  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <View style={style ? [styles.main, style] : styles.main}>
        <CustomDropDown
          iconType={iconType}
          iconName={iconName}
          iconSize={iconSize}
          isEditable={false}
          textInputValue={selectedValue || handleItem()[0]}
          onSelectItem={value => {
            setSelectedValue(value);
          }}
          item={!!data?.length ? data : handleItem().slice(1)}
          passIcon={true}
          placeholder={placeholder}
          textInputStyle={textInputStyle}
          iconstyle={iconstyle}
          textInputView={textInputView}
          optionsView={optionsView}
        />
      </View>
    </View>
  );
};

export default dropdownPicker;
