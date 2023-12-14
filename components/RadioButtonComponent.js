import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import axios from 'axios';
import { isIOS } from '../utilies/Device';
import { fontSizes } from '../constants';

const RadioButtonComponent = () => {
  const [selectedOption, setSelectedOption] = useState('OptionA');
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    sendPatchRequest({ setMode: 0 });
  }, []);
  const handleRadioButtonPress = (option) => {
    // setSelectedOption(option);
    // Enable the switch when 'OptionA' is selected, disable otherwise
    let numericValue;

    // Set a numeric value based on the selected option
    if (option === 'OptionA') {
      numericValue = 0; // Replace with the actual numeric value for 'OptionA'
    } else if (option === 'OptionB') {
      numericValue = 1; // Replace with the actual numeric value for 'OptionB'
    }

    setSelectedOption(option);
    setIsSwitchOn(option === 'OptionA');
    // Call the function to send the PATCH request with the numeric value
    sendPatchRequest({ setPump: false, setMode: numericValue });

  };
  const handleSwitchToggle = () => {
    // Update the switch state
    setIsSwitchOn(!isSwitchOn);

    // Call the function to send the PATCH request
    sendPatchRequest({ setPump: !isSwitchOn, setMode: selectedOption === 'OptionA' ? 0 : 1 });
  };

  const sendPatchRequest = async (data) => {
    try {
      const response = await axios.patch('http://localhost:3000/irrigation/', data);

      // Handle the response if needed
      console.log('Patch request successful', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error making PATCH request', error);
    }
  };

  const renderRadioButton = (option, label) => {
    return (
      <TouchableOpacity
        onPress={() => handleRadioButtonPress(option)}
        style={styles.radioButton}
      >
        <View style={[styles.circle, selectedOption === option && styles.circleSelected]} />
        <Text style={{ color: '#39364b', fontSize: fontSizes.h5 }}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderRadioButton('OptionA', 'Automation')}
      {renderRadioButton('OptionB', 'Manual')}

      {/* Display Switch for 'OptionA' only */}
      {selectedOption === 'OptionB' && (
        <View style={styles.switchContainer}>
          <Text style={{ color: '#39364b' }}>Pump ON/OFF</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={handleSwitchToggle}
            trackColor={{ false: '#bebfe9', true: colors.primary }}
            thumbColor="white"
            style={isIOS() ? styles.switchIOS : styles.switchAndroid}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingTop: 10,
    height: 120,
    // backgroundColor:'green',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7a6fa3',
    marginRight: 10,
  },
  circleSelected: {
    backgroundColor: '#a695e1',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -7,
    marginTop: 5,
  },
  detailsContainer: {
    marginTop: 20,
  },
  switchIOS: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Adjust the size for iOS
  },
  switchAndroid: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Adjust the size for Android
  },
});

export default RadioButtonComponent;
