# 1. Axios Instances

While the built-in `fetch` API is great, it has a lot of boilerplate:
- You must manually check `response.ok`.
- You must manually call `response.json()`.
- You must write out the full URL every time, or manage it via string interpolation.

In the industry, the most popular 3rd party alternative is **Axios**.

---

## Creating an Instance

The most powerful feature of Axios is the ability to create **Instances**.

Instead of importing `axios` directly into every component, you create a file (e.g., `api.js`) and configure a custom instance of Axios. You then export that instance, and your components import *it* instead.

```javascript
// src/api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.mycompany.com/v1',
  timeout: 5000, // Abort the request if it takes longer than 5 seconds
  headers: {
    'Content-Type': 'application/json'
  }
});
```

---

## Using the Instance

Now, your component code becomes beautifully concise. 

```jsx
import { api } from './api';

const fetchUser = async () => {
  try {
    // 1. The URL is automatically prepended
    // 2. The JSON is automatically parsed into `response.data`
    const response = await api.get('/users/me');
    setUser(response.data);

  } catch (err) {
    // 3. Axios automatically throws errors for 404s and 500s!
    setError(err.message);
  }
};
```

This drastically reduces the amount of boilerplate required to make a simple network request. In the next lessons, we'll see how Instances unlock even more powerful features.
