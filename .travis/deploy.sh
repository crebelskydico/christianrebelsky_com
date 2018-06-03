#!/bin/bash

# print outputs and exit on first failure
set -xe

# setup ssh agent, git config and remote
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/travis_rsa
git remote add deploy "travis@christianrebelsky.com:/var/www/christianrebelsky"
git config user.name "Travis CI"
git config user.email "travis@christianrebelsky.com"

# commit compressed files and push it to remote
rm -f .gitignore
cp .gitignore
git add .
git status # debug
git commit -m "Deploy compressed files"
git push -f deploy HEAD:master

