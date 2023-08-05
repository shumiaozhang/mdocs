git pull
git add .
git commit -m "auto update blog"
git push origin master

call yarn docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"



git push -f https://gitee.com/zhangshumiao/mdocs.git master:gh-pages