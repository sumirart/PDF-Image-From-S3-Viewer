# Simple S3 Viewer

## Description 
React app to simply view PDF/Image hosted on Amazon S3 (so you don't need to download it).

## How to
- clone this with `` https://github.com/sumirart/PDF-Image-From-S3-Viewer.git ``
- ``npm install`` or ``yarn``
- ``npm start`` or ``yarn start``
- put your s3 link in the input
- image will be shown above and pdf will be shown below in the iframe

## Live Demo
https://s3-viewer.netlify.app/

## What to do
Here is a list what you could do to improve this app:
- set condition if the URL is an image, then remove the iframe, vice versa
- or set only one html tag for both image and PDF
- remove bug sometimes the file cannot be loaded and needed to re-paste
