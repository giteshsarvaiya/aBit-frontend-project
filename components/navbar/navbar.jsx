'use client';
import React from 'react'
import { Button, Avatar, DropdownMenu, Flex } from '@radix-ui/themes'; 

export const Navbar = () => {
  return (
    <div className="md:h-[110px] border-2 border-x-black-900  h-[80px] flex justify-around md:justify-between md:px-24 items-center bg-top bg-[url('https://s3-alpha-sig.figma.com/img/bdd1/217e/3c90f0a2a0733a37cfae73337e1beb01?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoYheRDZ28XfJQ90I6Tdd321I5uUHhqZTK-7IpRDNEDNu6CGDN8v6A9CqD6AjE8RitYm5A79NlJ1T9HPXaxQLBxkFFZpaS4dlPfxisIA3HwYd0Zi7PDJ~qeHovTPiiLNR3SejeHbb1YTLSmHV1f6nZkHgdqR6XOinKDqjaeHcLdwDMWmNccZ7F2Ti7o9R7I6ofrfnv~kPv67dRfrDkubwiBeGCNr9wxIkHrWoNyw4-qVLGSHdFvxPgJmpSzq4wULXd-~h3epjNj2fXA8FB3a7DSRa3QdXXOSOA1bQVOdfkfGDEIbjNzjpfThileJoh2M4A1joK6J2A3FAtvlL~03fw__')]">
        <p className='text-black-900 font-bold text-2xl '>
            aBit
        </p>
        <div className='flex gap-3 justify-center items-center'>
        <Button variant="outline" radius='full' color='purple' className='' >Share new video</Button>
        <button className='hidden md:flex'>
            <img className='w-7 h-7 bg-cover opacity-[0.32] hover:opacity-[0.60] ' src='https://s3-alpha-sig.figma.com/img/e429/0fe3/3cf727787d97b30f43e9d5d593811c05?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FD-7ktgCPAxgnBXWLdPcAswLkzSr4-NglEIuZyuwCsujs-agfOQf50gXBK2MG6lVSmyguIvqEZjZaRuTBOdpZ~T6YYrxb7nCWAyf1ISGqPlV5sL7ppfVamowAew00q94Ui1X2PwhRHgXG8xzmtMwRAbDcKAzy2J8kbMtrVfYUeRAjyzSY8GIVjIFfy6hr-3uFkzJTOUJGFu27OR8Zs5asOCXueWy1RLsp~TTYIwp0a2DeZOm15EYaWYM46A~IIiwmqQmhSHAkFkhhoihJfZV3JARWa4ErGhPVvpc3ztEza~S-DF9SnnylSjxaXlIUwVTQCQWCkxgjcwfwckkOwDlZw__'></img>
        </button>
        <button className='hidden md:flex'>
            <img className='w-9 h-9 bg-cover opacity-[0.32] hover:opacity-[0.60]' src='https://s3-alpha-sig.figma.com/img/d4b0/9a75/31214bab4d4da0e74f722e59ea7df6a7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbFeCPbV9IvtDXl01Uoj5liGX88oN979CTaO6Wqhr5ne~MKiZWhhP0Pc6TnpxrYDQBBZez2ejb3HaJ-ds8bt3~~MkWCoMz8n3KNp6Yi6Hx3rNpAYnvBGwXDdQ~WggD3QfuD9NjSVIkucrNZkbJJu4wORM53C1UgdbVMxs~JETXxVOG5dhuN2iOL9xJQQ26ml9Lud-mQYaS4cx-m1ZFqdkGALylLMJiKcxl9xhmxpQqEO7TwIDpO~ptGt~7r0fU16KFQylmdmJjwwWJm5Mcfmn5M~TkKiteY2WMcN8d~90j~lin1fsirdTgvZ4plopR2x4kf8RzusM8SJa~qlh-S9BQ__'></img>
        </button>
        <button className='border-2 rounded-full hidden md:flex'>
        <Avatar
    src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
    fallback="A"
    radius="full"
    size='2'
  />
</button>
{/* dropdown for mobile devices */}
<div className='flex md:hidden'>
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost">
      <img className='h-6 w-6 opacity-[0.40] bg-cover hidden md:flex' src='https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvElHSjz04rxGzEzXgxMQ4GrYe3T1w4C9pMaKzb1B3xgkzeiyrh8efLpJv8a~Y9G3MYG0YI689vc86FMqR~hf5CqsYpgGrNENkQj80emt~0cwmv2t9ypCOZatIn8aH8Hs7l9oSOo3ZstDn6~-hXC~Xvbiwcj6QETE5q2NB6cjmtM6Q6an88jqPkXAmJ1u1EpRBpy2FA~txeVuwchaq42jttBBsLhkZmfDWmOO8LnDzicOefUrEc6~xDBSwhtzqxHIzGeY2ZHa6UW~uJ-yd2-ecIvej~YOWo0C9lmBqmHaPYuVTVPcPfYUcHaL7RmEXOiS6iaBxOJJZm7XbZMrK6ypw__'>
      
      </img>
      <div className='flex md:hidden border-2 rounded-full border-black-900'>
      <Avatar
    src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
    fallback="A"
    radius="full"
    size='2'
  />
  </div>
    </Button>
    
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
  <DropdownMenu.Item shortcut="⌘ W">Wallet</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ N">Notifications</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
        <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>

    <DropdownMenu.Separator />
    <DropdownMenu.Item>Share</DropdownMenu.Item>
    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
</div>

{/* dropdown for laptops */}
<div className='hidden md:flex'>
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost">
      <img className='h-6 w-6 opacity-[0.40] bg-cover hover:opacity-[0.60] ' src='https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvElHSjz04rxGzEzXgxMQ4GrYe3T1w4C9pMaKzb1B3xgkzeiyrh8efLpJv8a~Y9G3MYG0YI689vc86FMqR~hf5CqsYpgGrNENkQj80emt~0cwmv2t9ypCOZatIn8aH8Hs7l9oSOo3ZstDn6~-hXC~Xvbiwcj6QETE5q2NB6cjmtM6Q6an88jqPkXAmJ1u1EpRBpy2FA~txeVuwchaq42jttBBsLhkZmfDWmOO8LnDzicOefUrEc6~xDBSwhtzqxHIzGeY2ZHa6UW~uJ-yd2-ecIvej~YOWo0C9lmBqmHaPYuVTVPcPfYUcHaL7RmEXOiS6iaBxOJJZm7XbZMrK6ypw__'>
      
      </img>
    </Button>
    
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
        <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>

    <DropdownMenu.Separator />
    <DropdownMenu.Item>Share</DropdownMenu.Item>
    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
</div>
        </div>
        </div>
  )
}
