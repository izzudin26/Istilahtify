# Istilahtify

## Backend
- Request Istilah
    - method `POST`
    - Source : `KBBI` `Wikipedia`
    - url `https://istilahtify-backend.izzudin26.vercel.app/api/istilah/{source}`

    - Body
    ```json
    {
        "keyword": "String keyword"
    }
    ```
    - Response KBBI
    ```json
    {
    "status": "number",
    "message": "String message",
    "title": "String title",
    "data": {
        "arti": [
            "String arti",
            "String arti"
        ],
    }
    ```

    - Response Wikipedia
    ```json
    { 
    "status": "number",
    "message": "String message",
    "data": [
        {
            "ns": "number",
            "pageid": "number",
            "size": "number",
            "snippet": "string",
            "timestamps": "string",
            "title": "string",
            "wordcount": "number"
        },
        {
            "ns": "number",
            "pageid": "number",
            "size": "number",
            "snippet": "string",
            "timestamps": "string",
            "title": "string",
            "wordcount": "number"
        }
      ]
    }
    ```