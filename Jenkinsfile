pipeline {
    agent {
        docker {
            image 'node:21'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {

        stage('Install Node.js dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Script') {
            steps {
                sh 'npm run test'
            }
        }
    }
}