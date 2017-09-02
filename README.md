I used this container to properly redirect multiple old domains (using http/https) to a new domain with https that was running through jwilder/nginx-proxy.

Environment Variables for Config:

REDIRECT_TO = "https://new-url-goes-here.com" (REQUIRED)
base path of the URL of the new domain 
e.g. "https://www.example2.com"

REDIRECT_ALL = true/false (OPTIONAL)
redirect all full URLs to the new domain (default: false)
e.g. http://www.old-domain1.com/helloworld.html ---> https://www.new-domain.com/helloworld.html

NOTE: If you are setting this to true, make sure REDIRECT_TO doesn't have a trailing slash in it.
