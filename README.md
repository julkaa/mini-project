# test-project

This project included 4 pages: 
home( start page), 
news( where you can see all articles about Tesla from the last month, sorted by recent first ), 
profile( a page with your profile, unavailable without authorization),
login( login and password entry page ).
 And log out button( where you can log out ).

## Technology

For the news i used method 'GET' to get all news from site https://newsapi.org/.
For the profile i used Authguard to see if user is logged in. If you aren't, you are going on page 'login'.
To login i used FormGroup to create a form and AuthService to check if user authentication is successful or not(login:'admin', password:'12345', role: 'admin'). If it is done, i save it in localStorage. 

## Install all modules
In the project directory, you have to run:
`npm install`


## Build

Run `ng serve` to build the project.

