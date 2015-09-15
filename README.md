# README for Happening

TODO: verify that the following info is correct:

 - Python:  3.4
 - DB:      PostgreSQL (locally SQLite)

This project includes Bower integration.
To install existing dependencies, run `bower install` in the inner project dir (where manage.py is).
To add a dependency, run `bower install <package-name> --save`.
Deploying with Fabric will ensure that all Bower dependencies are also installed in the server.
If you don't have Bower installed, you can get it by running `npm install -g bower`.
