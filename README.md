# README for Happening

 - Python:  3.4
 - DB:      PostgreSQL (locally SQLite)

## Setting up development

**Create virtualenv**

 `virtualenv --python=python3.4 --no-site-packages venv`

 `. ./venv/bin/activate`

**Install dependencies**

 `pip install -r requirements/local.txt`

**Switch to internal Happening dir**

 `cd Happening`

**Create local settings**

Look below if you'd like to use PostgreSQL locally

Create settings/local.py from settings/local.py.example

**Syncdb & migrate**

 `python manage.py makemigrations accounts`

 `python manage.py migrate`
  
 `python manage.py syncdb`
 
Create a superuser to log in to admin
 
**Run development servers**

**Note:** Virtualenv must be activated for the following commands to work

Run django server: `python manage.py runserver`

**Note:** Server will run at 127.0.0.1:8000 (localhost wont work because of CORS)

**Using PostgreSQL locally**

 `sudo apt-get install postgresql`

Now, with the venv active:
 `pip install psycopg2`

 `sudo -u postgres psql postgres`

 `CREATE USER Happening WITH PASSWORD 'happening';`

 `CREATE DATABASE happening;`

 `GRANT ALL ON DATABASE happening TO happening;`

Exit with `CTRL+D`

Uncomment the relevant block in local.py


Note: We currently use a fork of alt until patches for issues #334, #354 and #348 get merged into master and released
# README for Happening
