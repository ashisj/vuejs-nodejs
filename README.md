# vuejs-nodejs
## frontend
1. vue create frontend
2. npm install
3. npm run serve

## backed
1. express --no-view .

## DB QUERY
'''
CREATE DATABASE IF NOT EXISTS db_userauth;
USE db_userauth;
CREATE TABLE IF NOT EXISTS tbl_user(str_name varchar(20) not null,str_email varchar(20) not null,str_password varchar(64) not null)
'''
