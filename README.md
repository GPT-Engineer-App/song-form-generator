# song-form-generator

form Form = (
song_name = input("Enter song name: ")
genre = input("Enter genre: ")
song_file = input(File Upload( song))
duration = calculation ("get duration from file mm:ss")
duration = duration_string_to_seconds(duration)
song_description = input("Enter song description: ")
video_description = input("Enter video description: ")
keywords = input("Enter keywords: ")
negative_keywords = input("Enter negative keywords: ")
project_slug = calculation (song_name)
) 
submit = Submit (form, () => show loading,
then => change route /result/, 
then => show loading, 
then => load result from API route = /api/loadresult/
then => hide loading, show {response_data} 
)


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/song-form-generator.git
cd song-form-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
