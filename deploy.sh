# jekyll b
rm -f _site/LICENSE _site/README.md
rm -rf _site/web\ development
rsync -avz -e 'ssh -p 2222' _site/ punyu.jp-studiokura@ssh494.lolipop.jp:~/web/artsitoya.com/
ssh punyu.jp-studiokura@ssh494.lolipop.jp -p2222 bash ~/web/artsitoya.com/rmquestion.sh
# scp -r -P2222 _site/* punyu.jp-studiokura@ssh494.lolipop.jp:/home/users/2/punyu.jp-studiokura/web/artsitoya.com
