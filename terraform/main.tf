terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "portfolio" {
  name = "kevin-messiaen-portfolio"
  build {
    path       = ".."
    dockerfile = "docker/Dockerfile"
    tag        = ["kevin-messiaen-portfolio:latest"]
  }
}

resource "docker_container" "portfolio" {
  image = docker_image.portfolio.latest
  name  = "kevin-messiaen-portfolio"
  ports {
    internal = 80
    external = 3000
  }
}
