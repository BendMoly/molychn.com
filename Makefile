run:
	pm2 start ecosystem.config.js
push:
	scp -r ./* root@47.75.185.174:/root/www/blog/
