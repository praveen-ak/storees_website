import groovy.json.JsonOutput

pipeline {
    agent any

    environment {
        PROJECT_ID = 'storeesmvp'
        REGION = 'asia-southeast1'
        IMAGE_NAME = 'test-storees-customer-frontend-app'
        REPO_NAME = 'test-storees-customer-frontend-repo'
        ARTIFACT_REGISTRY = "${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}"
        WEBHOOK_URL = "https://chat.googleapis.com/v1/spaces/AAAAE-enmUM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Ph1Py0hgUh8mBe2d5b0a4PZfHYNxSnBDzxdMY98tZ-M"
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Send notification when the build starts
                    def currentTime = getCurrentDateTimeInIST()
                    sendGoogleChatNotification("🚀 Build ${env.JOB_NAME} #${env.BUILD_NUMBER} started at ${currentTime}.")
                }
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Authenticate with Google Cloud') {
            steps {
                withCredentials([file(credentialsId: 'storees-gcp-service-account-key', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                    script {
                        // Authenticate with Google Cloud using service account key
                        sh "gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}"
                        sh "gcloud config set project ${PROJECT_ID}"
                    }
                }
            }
        }

        stage('Configure Docker with Artifact Registry') {
            steps {
                script {
                    // Configure Docker with Artifact Registry
                    sh "gcloud auth configure-docker ${REGION}-docker.pkg.dev"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${ARTIFACT_REGISTRY} ."
                }
            }
        }

        stage('Push Docker Image to Artifact Registry') {
            steps {
                script {
                    // Push the Docker image to Artifact Registry
                    sh "docker push ${ARTIFACT_REGISTRY}"
                }
            }
        }

        stage('Deploy to Cloud Run') {
            steps {
                script {
                    // Deploy the application to Cloud Run
                    sh """
                        gcloud run deploy test-customer-frontend \
                        --image ${ARTIFACT_REGISTRY} \
                        --platform managed \
                        --region ${REGION} \
                        --allow-unauthenticated \
                        --memory 1Gi \
                        --cpu 1 \
                        --min-instances 1 \
                        --max-instances 5
                    """
                }
            }
        }
    }

    post {
        success {
            script {
                // Send notification on build success
                def currentTime = getCurrentDateTimeInIST()
                sendGoogleChatNotification("✅ Build ${env.JOB_NAME} #${env.BUILD_NUMBER} succeeded at ${currentTime}.")
            }
        }
        failure {
            script {
                // Send notification on build failure
                def currentTime = getCurrentDateTimeInIST()
                sendGoogleChatNotification("❌ Build ${env.JOB_NAME} #${env.BUILD_NUMBER} failed at ${currentTime}.")
            }
        }
    }
}
def getCurrentDateTimeInIST() {
    def dateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd hh:mm:ss a')
    dateFormat.setTimeZone(java.util.TimeZone.getTimeZone('Asia/Kolkata'))
    return dateFormat.format(new Date())
}                                                     
def sendGoogleChatNotification(String message) {
    def payload = JsonOutput.toJson([
        text: message
    ])
    httpRequest(
        httpMode: 'POST',
        contentType: 'APPLICATION_JSON',
        requestBody: payload,
        url: env.WEBHOOK_URL
    )
}