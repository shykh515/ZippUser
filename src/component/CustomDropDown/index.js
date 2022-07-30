import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Appearance
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements"
import PropTypes from 'prop-types';
import styles from './styles';
class CustomDropDown extends Component {
  static propTypes = {
    item: PropTypes.array,
    onSelectItem: PropTypes.func,
    title: PropTypes.string,
    textInputStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    textInputValue: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    textInputIconStyle: PropTypes.object,
    errorMessage: PropTypes.string,
    keyboardType: PropTypes.string,
    textInputView: PropTypes.object,
    isEditable: PropTypes.bool,
  };
  static defaultProps = {
    item: undefined,
    onSelectItem: undefined,
    title: undefined,
    textInputStyle: undefined,
    onChangeText: undefined,
    textInputValue: '',
    placeholder: '',
    secureTextEntry: false,
    textInputIconStyle: undefined,
    errorMessage: undefined,
    keyboardType: undefined,
    textInputView: undefined,
    isEditable: undefined,
  };
  state = { showPass: this.props.secureTextEntry };
  render() {
    const {
      item,
      onSelectItem,
      textInputStyle,
      textInputValue,
      placeholder,
      passIcon,
      textInputView,
      iconstyle,
      iconType,
      iconName,
      iconSize,
      optionsView
    } = this.props;
    const colorScheme = Appearance.getColorScheme();
    return (
      <TouchableOpacity activeOpacity={0.7}
        onPress={() => this.setState({ showPass: !this.state.showPass })}

        style={{ marginBottom: this.state.showPass ? 0 : 0, maxHeight: 150 }}>
        {passIcon && (
          <TouchableOpacity
            style={[
              styles.textMain, textInputView,
              this.state.showPass && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },

            ]}
            onPress={() => this.setState({ showPass: !this.state.showPass })}
          >
            <TextInput
              style={[styles.textInput, textInputStyle, { color: colorScheme === '#222222' ? '#222222' : '#222222' }]}
              value={textInputValue}
              placeholder={placeholder}
              onPressIn={() => this.setState({ showPass: !this.state.showPass })}
              editable={false}
              placeholderTextColor={"#222222"}
            />

            {passIcon && (
              <TouchableOpacity activeOpacity={0.7}
                style={[{ marginLeft: 0 }, iconstyle]}
                onPress={() => this.setState({ showPass: !this.state.showPass })}>
                <Icon
                  type='ionicon'
                  name={'chevron-down'}
                  size={15}
                  color="#9D9D9D"
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        )}
        {
          <ScrollView showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={[{
              backgroundColor: 'transparent',
              marginLeft: -5
            }, optionsView]}
          >
            {this.state.showPass &&
              item.map((el, ind) => {
                return (
                  <TouchableOpacity activeOpacity={0.7}
                    onPress={() => {
                      this.setState({ showPass: !this.state.showPass });
                      onSelectItem(el);
                    }}
                    style={{
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderColor: "#DDDDDD",
                      paddingVertical: 8,
                    }}>
                    <Text style={{fontWeight:'bold', color: colorScheme === 'dark' ? '#222222' : '#222222', fontSize: 12 }}> {!!el?.name ? el.name : el} </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        }
      </TouchableOpacity>
    );
  }
}
export default CustomDropDown;