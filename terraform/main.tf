terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.22.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "portfolio" {
  name = "kevin-messiaen-portfolio:latest"
  build {
    path       = ".."
    dockerfile = "docker/Dockerfile"
    tag        = ["kevin-messiaen-portfolio:latest"]
  }
}

resource "docker_container" "portfolio" {
  image = docker_image.portfolio.image_id
  name  = "kevin-messiaen-portfolio"
  ports {
    internal = 80
    external = 3000
  }
}
