# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data fetching and provides a solution.

## Problem

Attempting to access document fields before the Firebase data is fully loaded results in undefined or null values, leading to application errors.

## Solution

Use promises or async/await to ensure data is loaded before accessing fields.  The solution uses async/await for cleaner code.

## How to reproduce

1. Clone the repository.
2. Install Firebase:
   ```bash
   npm install firebase
   ```
3. Configure your Firebase project credentials.
4. Run `bug.js` to see the error.
5. Run `bugSolution.js` to see the corrected implementation.