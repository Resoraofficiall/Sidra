# SIDRA Contribution Guide

## Branch Strategy

main
│
├── develop
│
├── release
│
├── hotfix/*
│
└── feature/*


# Commit Convention

Use Conventional Commits.

Examples

feat(auth): add google authentication

fix(home): resolve hero animation

refactor(firebase): optimize firestore queries

docs(readme): update setup guide

style(button): improve hover animation


# Coding Standards

- Next.js 15 App Router
- TypeScript Strict Mode
- React Server Components by default
- Client Components only when required
- No `any`
- No TODOs
- No placeholder implementations
- No duplicated code
- No hardcoded business data
- No direct Firestore calls from UI
- Services Layer only


# Folder Rules

app/
components/
constants/
contexts/
firebase/
hooks/
lib/
modules/
product/
public/
services/
studio/
styles/
types/
utils/

Never create additional top-level folders without architectural approval.


# Pull Requests

Every PR must:

- Pass TypeScript
- Pass ESLint
- Pass Production Build
- Include screenshots for UI changes
- Include Security review if authentication or payments are modified


# Firebase Rules

Never:

- Hardcode API Keys
- Disable Firestore Rules
- Disable Storage Rules

Always:

- Use Services Layer
- Validate on Server
- Use Cloud Functions for privileged operations


# UI Standards

Every page must include:

- Loading State
- Empty State
- Error State
- Responsive Layout
- Accessibility
- Dark Mode Support


# Performance

Target Metrics

- Lighthouse ≥ 95
- CLS < 0.1
- LCP < 2.5s
- INP < 200ms


# Code Review Checklist

- Production Ready
- Zero TypeScript Errors
- Zero ESLint Errors
- Zero Build Errors
- Security Reviewed
- Responsive Verified
- Firebase Rules Updated (if applicable)


SIDRA Engineering Standard v1.0
