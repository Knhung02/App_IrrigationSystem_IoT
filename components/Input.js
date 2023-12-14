import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? 'red'
              : isFocused
              ? '#7978B5'
              : '#F3F4FB',
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: '#7978B5', fontSize: 18, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={hidePassword}
          style={{color: '#39364b', flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-off'}
            style={{color: '#7978B5', fontSize: 18}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    height: 40,
    backgroundColor: '#ced7ff',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.7,
    borderRadius: 30,
  },
});

export default Input;
