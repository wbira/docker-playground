# deployment commands
noteDeployment:
	kubectl apply -f deployments/note.yaml

exposeNote:
	kubectl expose deployment note --port=8080

deployNote: noteDeployment exposeNote

notificationDeployment:
	kubectl apply -f deployments/notification.yaml

exposeNotification:
	kubectl expose deployment notification --port=8081

deployNotification:	notificationDeployment exposeNotification


deleteNoteService:
	kubectl delete service note

deleteNoteDeployment:
	kubectl delete deployment note

deleteNotificationService:
	kubectl delete service notification

deleteNotificationDeployment:
	kubectl delete deployment notification

# ingress commands
ingress:
	kubectl apply -f ingress.yaml

deleteIngress:
	kubectl delete ingress noter-ingress

# mongo

ss:
	kubectl apply -f db/statefulset.yaml

service:
	kubectl apply -f db/service.yaml

# deploy/remove whole project form minikube
deploy: deployNote deployNotification ingress

deleteAll: deleteNoteService deleteNoteDeployment deleteNotificationService deleteNotificationDeployment deleteIngress
