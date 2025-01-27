This solution uses async/await to ensure the data is loaded before accessing it:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  // ... your config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  const docRef = doc(db, 'yourCollection', 'yourDocumentId');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    const name = docSnap.data().name; // Accessing the field after data is loaded
    console.log('Name:', name);
  } else {
    console.log('No such document!');
  }
}

getData();
```