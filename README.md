# word-frequency

## View the live version [here](http://wordfrequency-pro.herokuapp.com/)!

* Counts how often words are used on a webpage.
* Backend is built in Python with Flask, and the frontend is built with AngularJS.
* SQLAlchemy provides the ORM for the PostgreSQL database, and Alembic enables migrations.
* Scrapes words on a webpage using the BeautifulSoup and Natural Language Toolkit (NLTK) libraries.
* AngularJS front end continuously polls the backend to determine when it is done processing a submission.
* Processes requests with a Redis task queue.
* A single Dyno on Heroku runs two processes: one for the Flask web process and the other for a worker process that connects to the Redis server and listens for queued tasks.
* Based on the tutorial at [Real Python](https://realpython.com/blog/python/flask-by-example-part-1-project-setup/).
