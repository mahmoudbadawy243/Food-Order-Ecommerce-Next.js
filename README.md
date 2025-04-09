This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



<!-- 


==  first step run this command to create next project => npx create-next-app@latest

==  to make my project responsive i need to put each component inside container class

    i can modify container class in 'global.css' file like this 
    .container{
    @apply mx-auto px-4 md:px-8 lg:px-12;
    }



===================================================================================================================================================
===================================================================================================================================================

### layout.tsx page

=== i can determine the font of the app

for example : 
--  import { Roboto } from "next/font/google";
   
    const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    preload: true,  
    });

    <body
        className={roboto.className}
      >
        {children}
      </body>


===================================================================================================================================================
===================================================================================================================================================


### link.tsx page

==  the code is copy paste and the idea of that custom link component is :
    next.js prefetch all pages of all links when start app but because of that component 
    it will prefetch the page of determined link only when i hover on that link    

    don't forget to make the import Link step is from link component


===================================================================================================================================================
===================================================================================================================================================


### enums.ts page

==  it is useful as when i change name of value it will affect on all app


===================================================================================================================================================
===================================================================================================================================================


### header.tsx page

==  









 -->#   F o o d - O r d e r - E c o m m e r c e - N e x t . j s  
 