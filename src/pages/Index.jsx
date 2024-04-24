import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast, Spinner, Text, HStack } from "@chakra-ui/react";
import { FaMusic, FaUpload } from "react-icons/fa";

const Index = () => {
  const [songName, setSongName] = useState("");
  const [genre, setGenre] = useState("");
  const [songFile, setSongFile] = useState(null);
  const [songDescription, setSongDescription] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [negativeKeywords, setNegativeKeywords] = useState([]);
  const [duration, setDuration] = useState("");
  const [songSlug, setSongSlug] = useState("");
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

      setDuration("3:45");
      setSongSlug(
        songName
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
      );
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
          <VStack spacing={2}>
            {keywords.map((keyword, index) => (
              <HStack key={index}>
                <Text>{keyword}</Text>
                <Button size="xs" onClick={() => setKeywords(keywords.filter((k) => k !== keyword))}>
                  Remove
                </Button>
              </HStack>
            ))}
            <Input placeholder="Add keyword" onKeyDown={(e) => e.key === "Enter" && setKeywords([...keywords, e.target.value]) && (e.target.value = "")} />
          </VStack>
        </FormControl>
        <FormControl>
          <FormLabel>Negative Keywords</FormLabel>
          <VStack spacing={2}>
            {negativeKeywords.map((keyword, index) => (
              <HStack key={index}>
                <Text>{keyword}</Text>
                <Button size="xs" onClick={() => setNegativeKeywords(negativeKeywords.filter((k) => k !== keyword))}>
                  Remove
                </Button>
              </HStack>
            ))}
            <Input placeholder="Add negative keyword" onKeyDown={(e) => e.key === "Enter" && setNegativeKeywords([...negativeKeywords, e.target.value]) && (e.target.value = "")} />
          </VStack>
        </FormControl>
        <FormControl isReadOnly>
          <FormLabel>Duration</FormLabel>
          <Input value={duration} readOnly />
        </FormControl>
        <FormControl isReadOnly>
          <FormLabel>Song Slug</FormLabel>
          <Input value={songSlug} readOnly />
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
