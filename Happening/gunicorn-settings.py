#bind = "0.0.0.0:8000"
bind = "unix:/tmp/gunicorn_Happening.sock"

workers = 2
proc_name = "Happening"
#loglevel = 'debug'
