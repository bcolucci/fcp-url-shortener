
# URL Shortener

## Description

User stories:
- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- When I visit that shortened URL, it will redirect me to my original link.

Example usage:

    https://fcp-url-shortener.herokuapp.com/new/https%3A%2F%2Fgoogle.com
    {"original_url":"https://google.com","short_url":"http://fcp-url-shortener.herokuapp.com/HyDGTXaI"}

    # https://fcp-url-shortener.herokuapp.com/HyDGTXaI redirects me on https://google.com

## How to test

    git clone https://github.com/bcolucci/fcp-url-shortener.git \
      && cd fcp-url-shortener \
      && npm install \
      && npm test \
      && npm start \
      && xdg-open http://localhost:3210/new/https%3A%2F%2Fgoogle.com

    # now, try to open the shortened url returned by your request
