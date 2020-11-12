#!/bin/sh
tmux new-session \; \
  send-keys 'npm start' C-m \; \
  split-window -h \; \
  send-keys 'npm run db' C-m \; \
  split-window -v \; \
  send-keys 'git pull' C-m \; 
