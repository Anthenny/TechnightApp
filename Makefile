up: # Spin up the containers for development.
	docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml up -d --remove-orphans

build: # Build the containers, when it's done spin up the containers for development
	docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml up -d --build --remove-orphans
 
down: # Down containers for development
	docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml down --remove-orphans

prod: # Spin up the container for development
	docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up -d --remove-orphans

prod.build: # Spin up the container for development
	docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up -d --build --remove-orphans