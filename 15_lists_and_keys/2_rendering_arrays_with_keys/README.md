# 2. Rendering Arrays with Keys

To fix the missing key warning, you need to provide a special string attribute called `key` when creating lists of elements. 

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

Ideally, the key should be a unique ID from your data. If you don't have stable IDs for rendered items, you may use the item index as a key as a last resort (though it is not recommended if the order of items may change).
