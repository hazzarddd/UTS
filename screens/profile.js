import React, { useState } from 'react';
import { ScrollView, Stack, Box, Text, FormControl, Input, Divider, FlatList, Image } from 'native-base';
import { Header } from '../components';

const Example = () => {
  // Sample data for your product list
  const products = [
    { id: '1', name: 'Product 1', image: 'product1.jpg' },
    { id: '2', name: 'Product 2', image: 'product2.jpg' },
    { id: '3', name: 'Product 3', image: 'product3.jpg' },
    
    // Add more products here
  ];

  // State to store the search query and filtered products
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle the input change and filter products accordingly
  const handleInputChange = (text) => {
    setSearchQuery(text);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ScrollView w="100%">
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{ base: '100%', md: '25%' }}>
        <Box>
          <FormControl mb="5">
            <Input
              placeholder="Cari Sayur Pilihan Kamooo"
              rounded={20}
              backgroundColor="gray.300"
              h={50}
              value={searchQuery}
              onChangeText={handleInputChange}
            />
          </FormControl>
          <Divider />
        </Box>

        {/* Product List */}
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Box borderWidth={1} p={2} mb={2} borderRadius={4}>
              <Image source={{ uri: item.image }} alt={item.name} size="md" resizeMode="cover" mb={2} />
              <Text fontSize="lg">{item.name}</Text>
            </Box>
          )}
        />
      </Stack>
    </ScrollView>
  );
};

export default Example;
