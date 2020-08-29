build-note:
	docker build services/note-managment/ -t note-managment:dev

build-notification:
	docker build services/notification/ -t notification:dev
