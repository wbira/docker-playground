build-note:
	docker build services/note-managment/ -t note-managment:latest

build-notification:
	docker build services/notification/ -t notification:latest
