# JSFromZeroToHero
My JavaScript practice project from Udemy course https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15918408#overview

Build docker image:
docker build -t my-js-app .

List docker images:
docker images

Delete image: 
docker rmi -f <image name>

Run docker container from the image: 
docker run -d --name <container name> <image name> 
# Run the Docker container
docker run -d -p 8080:80 my-js-app

open localhost:8080


docker exec -it <container_id_or_name> /bin/bash

