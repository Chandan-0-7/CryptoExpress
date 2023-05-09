import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SendTransaction = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const handleSend = () => {
    // Here you would call the Ethereum API to send the transaction
    console.log(`Sending ${amount} to ${address}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Recipient Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button
        title="Send Transaction"
        onPress={handleSend}
      />
    </View>
  );
};

export default SendTransaction;
