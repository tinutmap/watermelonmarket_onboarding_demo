#!bin/sh
# Place and run this script at top of project dir, e.g. grocerfinder_project

# install docker on host computer

# to-do set up context remote

# set context
docker context use default
docker context remove remote # remove old remote context to add updated one
docker context create remote \
  --docker "host=ssh://tin@192.168.1.251" --description "tin@192.168.1.251"
docker context use remote

# # build frontend and copy to ./nginx folder
cd ../frontend/onboarding_demo/ &&
npm run build &&
cd ../../deploy

# graciously stop running containers
docker-compose down
# build and run docker compose file
docker-compose up -d --build --remove-orphans
