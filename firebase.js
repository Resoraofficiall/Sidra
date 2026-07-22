on
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "storage": {
    "rules": "storage.rules"
  },
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public,max-age=31536000,immutable"
          }
        ]
      },
      {
        "source": "**/*.@(png|jpg|jpeg|gif|svg|webp|avif|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public,max-age=31536000,immutable"
          }
        ]
      }
    ]
  },
  "functions": {
    "source": "firebase/functions",
    "runtime": "nodejs22"
  },
  "emulators": {
    "auth": {
      "port": 9099
    },
    "firestore": {
      "port": 8080
    },
    "storage": {
      "port": 9199
    },
    "functions": {
      "port": 5001
    },
    "ui": {
      "enabled": true,
      "port": 4000
    },
    "singleProjectMode": true
  }
}




 12 sidra/.firebaserc{
  "projects": {
    "default": "resora-bd7c5"
  }
}


 13 sidra/apphosting.yamlrunConfig:
  minInstances: 0
  maxInstances: 20
  concurrency: 80
  cpu: 1
  memoryMiB: 1024

env:
  - variable: NEXT_PUBLIC_APP_NAME
    value: Sidra
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_APP_URL
    value: https://sidra.com
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_APP_ENV
    value: production
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_API_KEY
    value: AIzaSyDkUHSLp_YKlW-boUorJZOnhluCwtZo9DU
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
    value: resora-bd7c5.firebaseapp.com
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_PROJECT_ID
    value: resora-bd7c5
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
    value: resora-bd7c5.firebasestorage.app
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
    value: "495854321299"
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_APP_ID
    value: 1:495854321299:web:233f34ad7bdc163afe9766
    availability:
      - BUILD
      - RUNTIME

  - variable: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    value: G-PLLWSL0PVM
    availability:
      - BUILD
      - RUNTIME

  - variable: FUNCTIONS_REGION
    value: asia-south1
    availability:
      - BUILD
      - RUNTIME



14 sidra/.editorconfigroot = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.json]
indent_size = 2

[*.yml]
indent_size = 2

[*.yaml]
indent_size = 2

[*.ts]
indent_size = 2

[*.tsx]
indent_size = 2

[*.css]
indent_size = 2

[*.scss]
indent_size = 2

[*.html]

indent_size = 2
