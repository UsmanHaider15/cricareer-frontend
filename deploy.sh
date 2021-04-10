yarn build && \
echo "cricareer.com" > docs/CNAME && \
git add . && \
git commit -m "build for production" && \
git push origin `git rev-parse --abbrev-ref HEAD`:master -f && \
git reset --soft HEAD~1
git reset HEAD
git checkout ./docs
git clean -fd ./docs
