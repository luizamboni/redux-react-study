
echo "processing  $1"

../../node_modules/babel-cli/bin/babel.js --plugins transform-object-rest-spread $1 -d build/
