load_config()
{
  CONFIG_REPO_NAME="test-bot-12109_config"
  ENV=dev
  rm -rf $CONFIG_REPO_NAME
  git clone https://github.com/olehmushka/$CONFIG_REPO_NAME.git

  PATHNAME=$(pwd)/$CONFIG_REPO_NAME/variables/$ENV.env
  if [ ! -f "$PATHNAME" ];then
    echo "$PATHNAME doesn't exist"
    exit 1
  fi
  rm .env
  mv $PATHNAME .env

  rm -rf $CONFIG_REPO_NAME
}

# docker-compose down
load_config
export $(cat .env | xargs)
# docker-compose up -d --remove-orphans --force-recreate
# docker-compose logs --tail=70 -f
yarn install
yarn start
