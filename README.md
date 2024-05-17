# Dockerizing SPA using SWS (static-web-server)

This repository provides a reference on how to create a Docker image for client-side applications built with frameworks like React, Vite, etc. The goal is to create a minimal and efficient Docker image. To achieve this, we use [static-web-server](https://github.com/static-web-server/static-web-server) to serve the final build files, ensuring the image remains small and lean.


## Why static-web-server?

`static-web-server` is a fast and efficient web server written in Rust, designed specifically for serving static files. It is chosen for this project because:

* It is fast and lightweight, contributing to a smaller Docker image.
* It provides useful features out-of-the-box like gzip compression, HTTP/2, and customizable headers.


## Steps to create Docker Image



1. **Clone this repository**

    ```bash
    git clone https://github.com/Trugamr/vite-docker-static-web-server.git
    cd vite-docker-static-web-server
    ```

2. **Build the Docker image**

    ```bash
    docker build -t vite-docker-static-web-server .
    ```

3. **Run the Docker container**

    ```bash
    docker run --rm -p 8080:80 vite-docker-static-web-server
    ```

    The application will be available at [http://localhost:8080](http://localhost:8080).

## License

This project is licensed under the MIT License.

---

For more information on how to use `static-web-server`, refer to the [official documentation](https://static-web-server.net/) or the [GitHub repository](https://github.com/static-web-server/static-web-server).
