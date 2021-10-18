# Synkentrosi - Productivity Tool
**Synkentrosi** (**συγκέντρωση** in Greek) translates to, essentially, "Mental concentration". Inspired by the fantastic Momentum Dashboard, the concept is the same (A page you can leave your browser on to remind you to focus), but tweaked to my preferences. Mainly done to get more MERN stack experience.

![Sample screenshot](https://raw.githubusercontent.com/dchrysochou/synkentrosi/master/SampleScreenshot.png)

## Requirements
1. Docker
2. SASS
## Setup
After cloning the repo, from the project directory, run: 

```
sass ux/src/style/sass:ux/src/style/css
docker-compose up --build
``` 

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Configuration
### Backgrounds
The daily backgrounds are saved in the `srv/assets/backgrounds` directory. The server will provide a new one from the folder every 24 hours.

To add new ones to the rotation, simply add them to the folder in your local repo.