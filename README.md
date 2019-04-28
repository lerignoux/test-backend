[![CircleCI](https://circleci.com/gh/lerignoux/wiredcraft-test-backend/tree/master.svg?style=svg)](https://circleci.com/gh/lerignoux/wiredcraft-test-backend/tree/master) [![Known Vulnerabilities](https://snyk.io/test/github/lerignoux/wiredcraft-test-backend/badge.svg?targetFile=api%2Fpackage.json)](https://snyk.io/test/github/lerignoux/wiredcraft-test-backend?targetFile=api%2Fpackage.json)

# Wiredcraft Back-end Developer Test

## Answer
You can found my Strategy answer document from the [Strategy summary](Strategy.md)

## tldr
```
docker-compose up -d
```

### Warning
There seem to be a weird bug with the docker-hub built container, `express` does not seem to be correctly installed. If that happen you will need to re-do a `npm install` on the local container in order to get the API running.

## Setup
ensure you have docker and docker-compose installed.  
fetch the repository  
update the nginx configuration with your certificates  
```
docker-compose up -d
```
the api is accessible at `https://<server_name>:1443/api/v1`

## Dev Setup
To setup the dev environement (*no ssl*) you can use the development docker-compose:
```
docker-compose -f docker-compose-dev.yml up -d
```

the api is then accessible at [http://localhost:1080/api/v1](http://localhost:1080/api/v1)

### Documentation
The api documentation is available as a swagger at:
[http://localhost:1080/api/v1/documentation](http://localhost:1080/api/v1/documentation)

### Test run
In order to run the test suite:
```
docker run -it --rm --name wiredcraft-test-backend-tests -v <your_path>/wiredcraft-test-backend/api:/app wiredcraft-api npm run test
```

### Conflicts resolution:
in order to easily solve conflicts on the API packages files:
in rebase:
```
docker run -it -v ~/Projects/wiredcraft-test-backend:/home node:alpine sh
apk add git
npx npm-merge-driver install -g
```

## Context
for the test context see [Context.md|Context.md]
