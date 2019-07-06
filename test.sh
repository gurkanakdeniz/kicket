sleep 5
if curl app | grep -q 'kicket'; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi
