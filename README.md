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

##### General notes

==  first step run this command to create next project => npx create-next-app@latest

==  to make my project responsive i need to put each component inside container class

    i can modify container class in 'global.css' file like this
    .container{
    @apply mx-auto px-4 md:px-8 lg:px-12;
    }


=== <Image src="" alt="" fill loading="eager" priority />   >>> fill property is to fill all div
                                                            >>> loading="eager" is to load image before page load
                                                            >>> priority is to load image immediately not lazy


==  to make my project accept images i need to go to "next.config.ts" and put fixed code >>>
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{protocol:'https' , hostname:'**'}],
  },
};



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





===================================================================================================================================================
===================================================================================================================================================

### Navbar.tsx page

===  Best way to creat responsive menu:

        npm install lucide-react >>> which is icon library used in next.js

        import { Menu, XIcon } from "lucide-react";

        const [openMenu, setOpenMenu] = useState(false);

        <Button
        variant='secondary'
        size='sm'
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
        >
            <Menu className="!w-6 !h-6"/>
        </Button>

        <ul className={`fixed lg:static ${
            openMenu ? "left-0 z-50" : "-left-full "
            } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}>

        <Button
        variant="secondary"
        size="sm"
        className="absolute top-10 right-10 lg:hidden"
        onClick={() => setOpenMenu(false)}
        >
            <XIcon className="!w-6 !h-6" />
        </Button>






===================================================================================================================================================
===================================================================================================================================================

############# Prisma ORM

=== in this app i run : npm install prisma@6.0.1 @prisma/client@6.0.1 --save-dev as new versions have some proplems

1 ==  install prisma >>> npm install prisma @prisma/client --save-dev

2 ==  now prisma being in dev dependencies then i run command to create prisma file >>> npx prisma init

 ==  in lib folder i need to create "prisma.ts" file and paste fixed code in this file

3 ==  i need to run "pgAdmin" program to create database and i need to put the url of database in ".env" file

4 ==  to make model of database defined in code >>> stop server >>> npx prisma generate >>> and i can skip this step to the next one

5 ==  after write the schema in prisma/schema.prisma file i need to run command to create prisma file >>> npx prisma migrate dev

==  to work in database in UI form you should install prisma studio >>> npx prisma studio


===================================================================================================================================================
===================================================================================================================================================


#######  types folder -- product.ts file

== this file to build a custom type to use it as type safty for TS to add features of Extra model and Size model to Product model of Prisma schema by model-name: true and where i write "db" variable i also write models-name in the included place and the "db.main-model-name" is the model name that i want to add other models for

ex:
const bestSellers = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    }, 
  })

export type ProductWithItsRelations = Prisma.ProductGetPayload<{
  include: {
    sizes: true;
    extras: true;
  }
}>


===================================================================================================================================================
===================================================================================================================================================











-->



