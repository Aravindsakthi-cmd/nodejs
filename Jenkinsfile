pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Aravindsakthi-cmd/nodejs.git'  // Replace with your repo
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t simple-node-app .'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name node-app simple-node-app'
                }
            }
        }
    }
}

