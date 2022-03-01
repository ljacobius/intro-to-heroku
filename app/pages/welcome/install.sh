#!/bin/bash
LOCAL_CONFIG=`dirname $0`/lib/local-config.sh
if [ ! -r $LOCAL_CONFIG ]; then
# If no local config has been found create an empty file
touch $LOCAL_CONFIG
fi
# Grab current local config
source $LOCAL_CONFIG

# Writes all of the variables to the local config file
writeFile() {
    echo ""
    echo "Writing $LOCAL_CONFIG..."
cat > $LOCAL_CONFIG << EOF1
    }
