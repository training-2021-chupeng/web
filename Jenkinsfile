#!/usr/bin/env groovy

pipeline {
    agent none

    stages {
        stage('Deploy') {
            agent any
            steps {
                sh """
                    cd /root/front/cashier-web/
                    git pull
                """
            }
        }
    }
}
