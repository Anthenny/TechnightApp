SHELL := /bin/bash

MAKEFLAGS := --silent --no-print-directory

.DEFAULT_GOAL := help

up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

down: 
	docker-compose down