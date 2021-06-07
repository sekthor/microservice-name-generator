# Micro Service Name Generator

Simple node.js project, that generates names for microservices, server or similar following the pattern:

```
adjective-noun
```

Instead of a database, the adjectives and nouns are stored in simple json files.

## Usage

### name

```http
GET /name
```

returns a generated name in the format of:

```json
{
    "name":"adjective-noun"
}
```

### adjective

```http
POST /adjective
```

adds an adjective to the file.
Format of data in body:

```json
{
    "adjective": "adjective"
}
```

### noun

```http
POST /noun
```

adds an noun to the file.
Format of data in body:

```json
{
    "noun": "noun"
}
```
