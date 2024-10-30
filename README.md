Project Overview
Link for the app : http://wassimbzn.eastus.cloudapp.azure.com/
This README provides a step-by-step outline of the approach taken to complete the interview project, including initial setup, app creation, containerization, Kubernetes deployment, and automation with GitHub Actions.

Project Steps

1. Environment Setup

   •	Began by checking and installing any missing tools on the computer:
   •	Installed Docker, Kubernetes (K8s), Terraform, and Node.js.

   2. App Development

      •	Created a basic Pomodoro timer app using React as a way to stay organized while working with the Pomodoro technique.
      •	Pushed the initial version of the app to GitHub.
       # Getting Started with Create React App
    
       This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    
       ## Available Scripts
    
       In the project directory, you can run:
    
       ### `npm start`
    
       Runs the app in the development mode.\
       Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    
       The page will reload when you make changes.\
       You may also see any lint errors in the console.
    
       ### `npm test`
    
       Launches the test runner in the interactive watch mode.\
   See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


3. Containerization

   •	Developed a Dockerfile and docker-compose configuration to containerize the app.
   •	Tested the Docker container locally to ensure it was functioning correctly.
   •	After verification, pushed the Docker image to Docker Hub.
    ### docker login
    ### docker build -t line-ten .
    ### docker images

4. Local Kubernetes Deployment (Minikube)

   •	Deployed the app locally using Minikube to test Kubernetes deployment on a smaller scale.
    ### minikube start --driver=docker;
    ### eval $(minikube docker-env) 
    ### docker build -t line-ten .
    ###  kubectl apply -f line-ten-deployment.yaml
    ###  kubectl apply -f line-ten-service.yaml

5. Cloud Kubernetes Setup with Terraform

   •	Used Terraform to automate the creation of a Kubernetes cluster in the cloud, preparing the infrastructure needed to deploy the app.
   ## az login
    ### terraform init
    ### terraform plan
    ### terraform apply
   6. Manual Deployment to Kubernetes Cluster

      •	Manually deployed the Dockerized app to the cloud-based Kubernetes cluster to confirm all components were working together.
      ###  az login
      ###   az account set --subscription [subscription]
      ###  kubectl apply -f deployment.yaml
      ###  kubectl apply -f service.yaml
      ### kubectl get pods

8. Automation with GitHub Actions

   •	Created a GitHub Actions pipeline to automate the entire deployment process, including build and deployment to the Kubernetes cluster.
   •	Kept the pipeline minimal to focus on deployment without incorporating tests, due to potential dependency issues. The simplicity ensures stable deployment during evaluation.
    ### git commit
    ### git push
8. Final App Design Update

   •	Updated the app’s design as a final step to verify that builds and deployments occurred seamlessly.

Notes

	•	Pipeline Testing: To avoid dependency-related failures, tests were omitted in the pipeline. The pipeline is optimized for deployment stability.




