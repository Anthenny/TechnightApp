up: # Spin up the containers for development.
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --remove-orphans

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --remove-orphans
 
down: 
	docker-compose down --remove-orphans

prod: # Spin up the container for development
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --remove-orphans

