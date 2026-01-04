#!/bin/bash

# check argument
if [ -z "$1" ]; then
  echo "Usage: v8-bytecode <path-to-js-file>"
  exit 1
fi

JS_FILE="$1"

# check file exists
if [ ! -f "$JS_FILE" ]; then
  echo "Error: file not found -> $JS_FILE"
  exit 1
fi

# filename without path and extension
BASENAME=$(basename "$JS_FILE" .js)

# timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# output file
OUTPUT_DIR="./bitecode/${BASENAME}"

mkdir -p "$OUTPUT_DIR"

OUTPUT_FILE="${OUTPUT_DIR}/${BASENAME}_bytecode_${TIMESTAMP}.txt"


# run v8
"$HOME/.jsvu/bin/v8" --print-bytecode "$JS_FILE" > "$OUTPUT_FILE"

echo "✅ Bytecode saved to: $OUTPUT_FILE"
