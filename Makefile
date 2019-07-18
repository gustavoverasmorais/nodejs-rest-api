build: 
	@docker-compose build

run:
	@docker-compose up

run-app:
	@docker-compose build
	@docker-compose up

list:
	@docker container ls -a

stop:
	@docker kill $$(docker ps -q)

kill:
	@docker rm -f $$(docker ps -a -q)