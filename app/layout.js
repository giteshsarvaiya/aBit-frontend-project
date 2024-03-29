import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'; 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "aBit",
  description: "Generated frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    {/* <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin ></link>
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</link>
</head> */}
      <body className={inter.className}>
      
      <Theme>
        {children}
      </Theme>
      </body>
    </html>
  );
}
