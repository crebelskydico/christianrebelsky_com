#!/bin/bash

# print outputs and exit on first failure
set -xe

# setup ssh agent, git config and remote
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/travis_rsa
git remote add deploy "travis@christianrebelsky.com:/var/www/christianrebelsky"
git config user.name "Travis CI"
git config user.email "travis@christianrebelsky.com"
git branch
git add .
git commit -m "Deploy from Travis - build {$TRAVIS_BUILD_NUMBER}"
git status
git push -f deploy master

