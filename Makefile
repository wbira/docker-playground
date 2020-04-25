
build:
	docker build -t biraw/node-web-app .

run:
  docker run -p 49160:8080 -v /Users/biraw/docker/:/usr/src/app/ biraw/node-web-app