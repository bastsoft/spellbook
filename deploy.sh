#!/bin/bash

# git checkout -b gh-pages
npm run build
mv storybook-static docs
cd docs
echo " " > .nojekyll
cd ..
# git push --set-upstream origin gh-pages -f
# git checkout main
# git branch -D gh-pages