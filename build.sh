cp -f full_site/index.html public_html/index.html
sass full_site/assets/sass/main.scss public_html/assets/css/main.css
cp -Rf full_site/images public_html
cp -Rf full_site/assets/js public_html/assets
python3 commentremover.py > public_html/index.html
open .
