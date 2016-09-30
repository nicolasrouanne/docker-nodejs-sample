Node web app sample for Docker
===================

The purpose of this very simple node.js application is to test a Docker build and run.

Docker-Compose
--------------
The `docker-compose.yaml` file declares 3 different containers:

 - web: the container to run the node.js application
 - mongo: the container to run the mongoDB server, linking to mongo_data
 - mongo_data: the container to host the data volume

It inspires from : 
 - the official node.js docker tutorial [Official Node.js Docker Tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ "Official Node.js Docker Tutorial")
 - Sunny Kay's Medium article [Docker development workflow: Node, Express, Mongo](https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e#.f4c2uiad5)
