noteDeployment:
	kubectl apply -f deployments/note.yaml

exposeNote:
	kubectl expose deployment note --type=NodePort --port=8080

deployNote: noteDeployment exposeNote

notificationDeployment:
	kubectl apply -f deployments/notification.yaml

exposeNotification:
	kubectl expose deployment notification --type=NodePort --port=8081

deployNotification:	notificationDeployment exposeNotification

ingress:
	kubectl apply -f ingress.yaml

deploy: deployNote deployNotification ingress

deleteNoteService:
	kubectl delete service note

deleteNoteDeployment:
	kubectl delete deployment note

deleteNotificationService:
	kubectl delete service notification

deleteNotificationDeployment:
	kubectl delete deployment notification

deleteIngress:
	kubectl delete ingress noter-ingress

deleteAll: 	deleteNoteService deleteNoteDeployment deleteNotificationService deleteNotificationDeployment deleteIngress
