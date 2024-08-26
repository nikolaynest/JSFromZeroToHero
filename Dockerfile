# Use the official Nginx image as the base image
FROM nginx:latest

# Copy your custom configuration file (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy your static website or application files to the container
# Here we're assuming you have an index.html file in your current directory
COPY . /usr/share/nginx/html

# Expose port 8080 to the host
EXPOSE 8080

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
