## Usage

### POST /credits/:tourOperatorId
Endpoint to upload the credits

#### Example

credits.csv:
```csv
"sri@gmail.com","233.12","EUR","COR-12553","2021-12-31","930906391"
"varadhan@hotmail.com","11.00","CHF",,,
```
cUrl:
```bash
curl -X POST -H 'Content-Type: text/csv' --data-binary @credits.csv http://localhost:3000/credits/b3d2e944-38d1-46a3-a878-7fdd0c25bf4f
```

### GET /credits/:tourOperatorId/upload/

An upload page to call the POST credits endpoint via an interface
