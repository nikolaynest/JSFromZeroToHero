# Step 1: Use an official nginx image as the base image
FROM ubuntu

RUN apt-get update

RUN apt-get install nginx -y

COPY . /var/www/app/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
