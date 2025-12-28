#!/bin/bash

# get script directory and navigate to project root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# base directory
BASE_DIR="public/images"

# check if directory exists
if [ ! -d "$BASE_DIR" ]; then
  echo "error: $BASE_DIR not found"
  echo "make sure you run this script from the project root"
  exit 1
fi

# counter
count=0

echo "searching for images in $BASE_DIR"

# find and convert all png and jpg files in all subdirectories
find "$BASE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
  # get filename without extension
  filename="${img%.*}"
  
  # convert to webp
  echo "converting: $img"
  cwebp -q 85 "$img" -o "${filename}.webp"
  
  ((count++))
done

echo "converted $count images to webp"