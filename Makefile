up:
	docker-compose  up -d --remove-orphans

build:
	docker-compose up -d --build --remove-orphans
 
down: 
	docker-compose down --remove-orphans