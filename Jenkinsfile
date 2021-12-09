pipeline {
    agent any
        stages {
        stage('Build') {
            steps {
                sh'''
                    docker build -t muhammad2000/front .
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'no tests so done'
            }
        }
        stage('Deploy') {
            steps {
                sh'''
                    docker push muhammad2000/front
                '''
            }
        }
    }
}
