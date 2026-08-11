# Node.js CI/CD Workflow Demo

A small Express application used to practice automated testing, Docker packaging and GitHub Actions continuous integration.

## Learning goals

- Trigger CI for pull requests
- Install dependencies reproducibly with npm ci
- Run Jest and Supertest tests
- Build a Node.js application in Docker
- Separate application code from delivery automation

## Technology

- Node.js 18
- Express
- Jest
- Supertest
- Docker
- GitHub Actions

## Run locally

~~~bash
npm install
npm test
npm start
~~~

The application uses the PORT environment variable and defaults to the port configured by the code.

## Run with Docker

~~~bash
docker build -t node-cicd-demo .
docker run --rm -p 8080:8080 node-cicd-demo
~~~

## Continuous integration

The workflow in .github/workflows/ci.yml runs on pull requests targeting the staging branch:

1. Check out the repository.
2. Install locked dependencies.
3. Run the Jest test suite.
4. Execute the build script when one exists.

## Attribution

This repository is a learning implementation derived from a CI/CD tutorial whose original package metadata references [onukwilip/ci-cd-tutorial](https://github.com/onukwilip/ci-cd-tutorial). It is retained to demonstrate the completed workflow rather than presented as an original framework.

## Author

Learning implementation maintained by [Muhammad Raza Ali](https://github.com/RazaAli313).
