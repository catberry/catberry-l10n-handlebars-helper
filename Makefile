all: lint

lint:
	./node_modules/.bin/eslint ./

.PHONY: test