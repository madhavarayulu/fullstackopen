```mermaid
sequenceDiagram
  participant Browser
  participant Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate Server
  Server-->>Browser: HTML document
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Server
  Server-->>Browser: the css file
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate Server
  Server-->>Browser: the JavaScript file
  deactivate Server

  Note right of Browser: Browser executes JavaScript to fetch notes

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Server
  Server-->>Browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ...]
  deactivate Server

  Note right of Browser: Browser renders notes

  Note over Browser: User types note content
  Note over Browser: User clicks "Save" button
  activate Browser
  Note right of Browser: JavaScript handles event
  Note right of Browser: Retrieves note content
  Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (with note content)
  activate Server
  Note right of Server: Extracts note content from request body
  Server->>Server: Creates new note object
  Server->>Server: Adds note to notes array
  Note right of Server: Generates redirect response
  Server-->>Browser: 302 Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
  deactivate Server
  Note right of Browser: Processes redirect
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate Server
  Server-->>Browser: HTML document (updated)
  deactivate Server
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Server
  Server-->>Browser: the css file
  deactivate Server
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate Server
  Server-->>Browser: the JavaScript file
  deactivate Server
  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Server
  Server-->>Browser: Updated notes data (including new note)
  deactivate Server
  Note right of Browser: Renders updated notes
  Note right of Browser: Displays outcome (success)
  deactivate Browser
'''
