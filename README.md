# mnmetro
mnmetro provides bus/train transit information. All the information are based on APIs available via Metro Transit NextTrip API. 
For more information visit https://svc.metrotransit.org/nextrip
swagger : https://svc.metrotransit.org/swagger/index.html 

## Prerequisites
This application is developed using React 17 so need Node.js verison 9.10.1+ , npm.
Visit https://nodejs.org/en/download/ To get more information to download Node.
Run node -v and npm -v to check if node is installed with specific version

## Steps to run the application

#### Download repo
1. Open Terminal/ command promt and run below commands
2. Clone mnmetro using below git command in your desired folder
    git clone https://github.com/vekannan/mnmetro.git
3. After cloning a folder mnmetro will be created. 
4. cd mnmetro/metrotrasit

#### Install application
1. run below command to install applicaiton 
    yarn
#### Running this application
1. yarn start
2. This application start runing and serves using port 3000
3. your default browser will open with address http://localhost:3000/ 

## Run Unit tests
1. run the following command:  yarn test
2. The above command build the application and generates code coverage.
3. Code coverage can be view in HTML format also.Code coverage can be obtained from mnmetro>metrotrasit>coverage>index.html

## Deployment
1. Run the following command to get minified version of this application: yarn build
2. All the files are minified and bundled under build folder

## Folder and code info
This applicatoin uses react, redux , redux-thunk, Jest , renderer 
index.js --> Create Store with thunk as middleware and add the application in root node
datastore > transitApi --> Call's API 
store > action > action file
store > reducers > reducer 
view > util -> reusable selet component
view > master component and departure component 











