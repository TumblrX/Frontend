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
                sh'''
                    docker build -f ./Dockertest .
                    docker-compose stop
                    docker-compose rm -f
                    docker-compose up -d
                    docker wait fronttest_container
                    docker start fronttest_container
                    VALUE=$(docker wait fronttest_container)
                    if [ "$VALUE" != "0" ] ; then exit 1 ; fi
                '''
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
