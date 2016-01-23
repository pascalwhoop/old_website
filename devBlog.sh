#!/bin/sh
#getting script location and cd there
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

#open editor
subl .

#open live-server and run jekyll
function openterms() {
    COMMANDS=("cd $DIR; live-server _site" "cd $DIR; jekyll serve")
    for command in $COMMANDS
        do osascript -e \
        "tell application \"Terminal\" to do script with command \"$command\""
    done
}
openterms
