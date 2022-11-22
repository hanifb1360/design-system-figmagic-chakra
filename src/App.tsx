import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './design-system/chakra/theme';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="blue3" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </ChakraProvider>
  );
}

export default App;
