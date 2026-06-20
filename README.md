# Sabu Tasks
A simple CRUD application for managing tasks, allowing you to create, read, update and delete records.

## Description
This project implements a CRUD task management system using a combination of Django REST Framework and Next.js.
It allows users to create tasks, query information, update data, and delete records.

## Technologies

- Python 
- Typescript 
- Django Rest Framework
- Next.js


## Installation

1. Clone the repository: 
```bash
https://github.com/sabuthess/crud_drf_nextjs.git
```

2. Config first Next.js and run
```bash
pnpm install
pnpm dev 
```
 
5. In anhothe terminal config Drf 
```bash
python -m venv .venv
```
activate virtual environment
```bash
.\.venv\Scripts\activate
```
install DRF and run
``` bash
pip install djangorestframework
python manage.py runserver
```


. Set environment variables:
```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:8000
```
