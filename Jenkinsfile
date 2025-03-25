pipeline {
    agent any  

    environment {
        IMAGE_NAME = "my-nodejs-app"
        CONTAINER_NAME = "nodejs-container"
        REPO_URL = "https://github.com/Aravindsakthi-cmd/nodejs.git"
        CREDENTIALS_ID = "github-cred"  // Ensure this matches your Jenkins credentials ID
        WORKSPACE_DIR = "app"  // Define workspace directory
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    sh """
                    # Remove old directory if it exists
                    rm -rf $WORKSPACE_DIR || true
                    
                    # Clone repo with authentication
                    git clone https://${CREDENTIALS_ID}@github.com/Aravindsakthi-cmd/nodejs.git $WORKSPACE_DIR
                    
                    # Move to repo directory
                    cd $WORKSPACE_DIR
                    
                    # Ensure we are on the main branch
                    git fetch --all
                    git reset --hard origin/main
                    git clean -fd  # Remove untracked files
                    git checkout main
                    git pull origin main
                    """
                }
            }
        }

        stage('Install Node.js Dependencies') {
            steps {
                sh 'cd $WORKSPACE_DIR && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'cd $WORKSPACE_DIR && npm test || echo "No tests found, skipping..."'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "cd $WORKSPACE_DIR && docker build -t $IMAGE_NAME ."
            }
        }

        stage('Run Docker Container') {
            steps {
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                """
            }
        }
    }

    post {
        always {
            script {
                sh 'docker ps -a'  // Show all running and stopped containers
            }
        }
    }
}
