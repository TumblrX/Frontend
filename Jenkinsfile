pipeline {
    agent any
    environment{
        PASS=credentials('dockerToken')
    }
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
                    docker login -u muhammad2000 -p $PASS
                    docker push muhammad2000/front
                '''
            }
        }
    }
}
