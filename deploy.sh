#!/bin/bash

git checkout -b gh-pages
npm run build
mv storybook-static docs
cd docs
echo " " > .nojekyll
cd ..
git add .
git commit -m "deploy"
git config http.postBuffer 524288000
git push --set-upstream origin gh-pages -f
git checkout main
git branch -D gh-pages