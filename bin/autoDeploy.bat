git rm docs/.vitepress/dist

git pull
git add .
git commit -m "auto update blog"
git push origin master

call yarn docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"


git config --global http.sslVerify false


git push -f https://github.com/shumiaozhang/mdocs.git master:gh-pages
