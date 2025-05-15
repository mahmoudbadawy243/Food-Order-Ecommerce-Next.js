// === this methode of caching can be used in any app by using this code
// === caching methode is away to make performane more better as data be cached in browser not needed to go to server so app be more faster
// === i can broke the revalidate time by press 'ctrl + shift + R'
/*
i put 'reactCache' inside 'nextCache'
'nextCache' and 'reactCache' should have 'cb' which is call back function 
'revalidate' used to determine the time after it a new cache will happen
'tags' used to determine specific tag to be cached not all page
*/


import { unstable_cache as nextCache } from 'next/cache';  // next-cache to cache data in next
import { cache as reactCache } from 'react';  // react-cache to cache data in react components


/* i get this type by press on 'nextCache' with 'CTRL' to open the behind code of it then copy the type of it
then disable the type that i copied then i made a generic <> and make T extends Callback then use T type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reactCache(cb), keyParts, options);
}

