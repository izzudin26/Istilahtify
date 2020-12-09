# Istilahtify

## Backend
- Request Istilah
    - method `POST`
    - Source : `KBBI` `Wikipedia`
    - url `https://istilahtify.vercel.app/api/istilah/{source}`
    - Body
    ```json
    {
        "keyword": "String keyword"
    }
    ```
    - Response 
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