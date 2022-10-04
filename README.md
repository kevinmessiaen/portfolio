# Welcome to my portfolio

My name is Kevin Messiaen and I created this portfolio using [React](https://reactjs.org/)
and [NextUI](https://nextui.org/).

## Run the application locally

### Using Docker

You can run the application using [Docker](https://www.docker.com/):

```
docker build . --file docker/Dockerfile -t kevin-messiaen-portfolio && \
docker run -dp 3000:80 kevin-messiaen-portfolio
```

You can now access the application through [localhost](http://localhost:3000)

### Using Terraform

You can run the application using [Terraform](https://www.terraform.io/):

```
cd terraform && terraform init && terraform apply
```

You can now access the application through [localhost](http://localhost:3000)
