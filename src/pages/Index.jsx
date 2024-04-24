import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast, Spinner, Text } from "@chakra-ui/react";
import { FaMusic, FaUpload } from "react-icons/fa";

const Index = () => {
  const [songName, setSongName] = useState("");
  const [genre, setGenre] = useState("");
  const [songFile, setSongFile] = useState(null);
  const [songDescription, setSongDescription] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [negativeKeywords, setNegativeKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const toast = useToast();

  const handleSubmit = async () => {
    if (!songName || !genre || !songFile) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and upload a song file.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setResponse(`Successfully uploaded ${songName} in the genre of ${genre}.`);
      // Normally here you would change route and fetch result from an API
    }, 2000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSongFile(file);
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Song Name</FormLabel>
          <Input placeholder="Enter song name" value={songName} onChange={(e) => setSongName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Genre</FormLabel>
          <Input placeholder="Enter genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Song File</FormLabel>
          <Input type="file" accept="audio/*" onChange={handleFileChange} icon={<FaUpload />} />
        </FormControl>
        <FormControl>
          <FormLabel>Song Description</FormLabel>
          <Textarea placeholder="Enter song description" value={songDescription} onChange={(e) => setSongDescription(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Video Description</FormLabel>
          <Textarea placeholder="Enter video description" value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Keywords</FormLabel>
          <Input placeholder="Enter keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Negative Keywords</FormLabel>
          <Input placeholder="Enter negative keywords" value={negativeKeywords} onChange={(e) => setNegativeKeywords(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaMusic />} colorScheme="blue" onClick={handleSubmit} isLoading={isLoading}>
          Submit
        </Button>
        {isLoading && <Spinner />}
        {response && <Text>{response}</Text>}
      </VStack>
    </Box>
  );
};

export default Index;
