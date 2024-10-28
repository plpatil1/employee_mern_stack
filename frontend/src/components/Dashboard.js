import React from 'react';
import { Button, Box, Table, Thead, Tbody, Tr, Th, Td, VStack, HStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Box width="80%" mx="auto" mt="50px">
      <HStack justifyContent="space-between" mb="4">
        <Button colorScheme="blue">Add Employee</Button>
        <Button colorScheme="red" onClick={() => dispatch(logout())}>Log Out</Button>
      </HStack>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Salary</Th>
            <Th>Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Replace this with mapped employee data */}
          <Tr>
            <Td>1</Td>
            <Td>John</Td>
            <Td>Doe</Td>
            <Td>john@example.com</Td>
            <Td>$5000</Td>
            <Td>2024-01-01</Td>
            <Td>
              <Button size="sm" mr="2">Edit</Button>
              <Button size="sm" colorScheme="red">Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Dashboard;
