git pull
git add .
git commit -m "auto update blog"
git push origin master

call yarn docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

<<<<<<< HEAD
git config --global http.sslVerify "false"


git push -f https://github.com/shumiaozhang/mdocs.git master:gh-pages
=======


git push -f https://gitee.com/zhangshumiao/mdocs.git master:gh-pages
>>>>>>> 4898750deea4ba2b7c069087aa4c84dc24b82398
