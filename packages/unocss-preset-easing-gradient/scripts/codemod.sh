#!/usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Error: No root folder provided."
  echo "Usage: $0 /path/to/your/root"
  exit 1
fi

ROOT_FOLDER="$1"

UTILITIES="(\
inset(?:-x|-y)?|\
start|end|top|right|bottom|left|\
scale(?:-x|-y|-z)?|\
translate(?:-x|-y|-z)?|\
skew(?:-x|-y)?|\
m(?:[trblxy])?|\
p(?:[trblxy])?|\
space(?:[xy])?|\
divide(?:[xy])?|\
gap|w|max-w|min-w|h|max-h|min-h|\
text|leading|tracking|\
size\
)"

# Explanation of the Perl pattern:
#  1. ('"$UTILITIES"')- : Matches one of the listed utility classes followed by a dash.
#  2. (?!\[)           : Negative lookahead to skip if the dash is followed immediately by '[' (e.g. "gap-[4]" won't match).
#  3. ([0-9]*\.?[0-9]+): Captures a purely numeric value, possibly with a decimal point.
#  4. (?![a-zA-Z%])     : Negative lookahead to ensure this numeric value is NOT followed by letters (px, rem, etc.) or '%'.
#
# Replacement does: $1 . "-" . ($2 * 4) -> utility + "-" + number*4

find "$ROOT_FOLDER" -type f \( -name "*.ts" -o -name "*.vue" \) \
  -exec perl -pi -e '
    s/'"$UTILITIES"'-(?!\[)([0-9]*\.?[0-9]+)(?![a-zA-Z%])/$1 . "-" . ($2 * 4)/ge
  ' {} +

echo "Done! Numeric classes without brackets or units were multiplied by 4."
