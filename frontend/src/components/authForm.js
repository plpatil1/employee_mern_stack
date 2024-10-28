import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../actions/authActions';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, Text } from '@chakra-ui/react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ email, password }));
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      dispatch(signup({ email, password }));
    }
  };

  return (
    <Box width="400px" mx="auto" mt="50px" p="8" boxShadow="lg" rounded="md">
      <Heading mb="6">{isLogin ? 'Login' : 'Sign Up'}</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </FormControl>
          {!isLogin && (
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required />
            </FormControl>
          )}
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="blue" width="full">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </VStack>
      </form>
      <Text mt="4" textAlign="center" onClick={() => setIsLogin(!isLogin)} cursor="pointer">
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </Text>
    </Box>
  );
};

export default AuthForm;
