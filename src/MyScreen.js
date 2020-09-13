import React, {useState} from 'react';
import {View, Image, Button, Text} from 'react-native';

const MyScreen = () => {
  const [status, setStatus] = useState('welcome');
  return (
    <View>
      <Image source={require('./sampleImage.jpg')} />
      <Text testID="myText">{status}</Text>
      <Button
        testID="myButton"
        onPress={() => setStatus('button pressed')}
        title="Button"
      />
    </View>
  );
};

export default MyScreen;
