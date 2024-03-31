Project Description:

This project is a simple web application for managing tasks, developed using HTML, CSS, and JavaScript. The application allows users to add new tasks, view a list, mark tasks as completed, and remove tasks. To ensure smooth deployment and scalability, we containerized the application using Docker.

Development Process:

HTML, CSS, and JavaScript: I started by writing the HTML, CSS, and JavaScript code to create the user interface and implement the task management functionality. This included creating input fields for adding tasks, displaying tasks in a list, toggling task completion, and removing tasks.

Docker Containerization:

a. Dockerfile: We created a Dockerfile to specify the configuration for building the Docker image. The Dockerfile included instructions for setting up the container environment, installing dependencies, and copying the application code into the container.

b. Building the Docker Image: We used the docker build command to build the Docker image based on the Dockerfile and application code.

docker build -t my-web-app-image -f Dockerfile.dockerfile .

c. Tagging and Pushing the Image: After building the image, we tagged it with the appropriate repository name and version tag using the docker tag command. Then, we pushed the tagged image to Docker Hub using the docker push command to make it publicly accessible.

docker run -d -p 8080:80 --name my-web-app-container my-web-app-image

docker tag my-web-app-image:latest annemarie535257/my-web-app-image:latest

docker push annemarie535257/my-web-app-image:latest

By containerizing our application with Docker, I ensured it could be easily deployed and scaled across different environments without compatibility issues. This approach simplifies the deployment process and enhances the portability and reliability of our web application.

To access the application, you can use: http://localhost:8080/

Throughout the development phase, several presumptions and choices were undertaken:

Employed HTML, CSS, and JavaScript to construct the web application, aiming for a straightforward and lightweight deployment approach.

Opted for Docker as the containerization tool to ensure seamless deployment and scalability across diverse environments.

Integrated fundamental functionalities, including task addition, list viewing, and task completion, to fulfill project specifications.

Refrained from incorporating external libraries or frameworks to maintain the application's lightweight nature and facilitate ease of management.

Utilized Alpine Linux as the foundational image for the Docker container to minimize image size and enhance performance efficiency.
