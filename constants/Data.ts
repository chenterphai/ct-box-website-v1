import { CiHeart } from "react-icons/ci";
import { LuUserCircle } from "react-icons/lu";
import mobile from '../public/mobile.svg';
import website from '../public/website.svg';
import posms from '../public/pos.svg';
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PROFILE1 from '../public/Profile-v1.jpeg'
import PROFILE2 from '../public/logo.png'
import thumbnail from '../public/thumbnail.png'
import { SiNintendogamecube } from "react-icons/si";
import { BiCubeAlt } from "react-icons/bi";
export const ICONS = {
    heart: CiHeart,
    user: LuUserCircle
}

export const SLIDE_DATA = [
    {
        id: 1,
        title: 'Mobile Development',
        subtitle: 'We will create a both iOS and Android applications as match as your need',
        url: mobile
    },
    {
        id: 2,
        title: 'Web Development',
        subtitle: 'Make a modern Website with the right place with Content Management System',
        url: website
    },
    {
        id: 3,
        title: 'POS & Management System',
        subtitle: 'We can make POS System & Management System for your business growth and faster.',
        url: posms
    }
]

export const SOCIAL_MEDIA = [
    {
        id: 1,
        label: 'Facebook',
        icon: FaFacebookF,
        link: ''
    },
    {
        id: 2,
        label: 'Twitter X',
        icon: FaXTwitter,
        link: ''
    },
    {
        id: 3,
        label: 'LinkedIn',
        icon: FaLinkedin,
        link: ''
    },
    {
        id: 4,
        label: 'Pinterest',
        icon: FaPinterest,
        link: ''
    }
]


export const route = [
    {
        id: 2,
        label: 'Our team',
        href: '/our-team'
    },
    {
        id: 3,
        label: 'Service',
        href: '/service'
    },
    {
        id: 4,
        label: 'Project & Client',
        href: '/our-project'
    },
    {
        id: 5,
        label: 'Apps',
        href: '/applications'
    },
    {
        id: 6,
        label: 'Our member',
        href: '/our-member'
    },
    {
        id: 7,
        label: 'News',
        href: '/news'
    }
]

export const TEAMS = [
    {
        id: 1,
        name: 'Chenter Phai',
        username: 'chenterphai4',
        profile: PROFILE1,
        description: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
        tag: 'FrontendWithZoey',
        position: 'Web Developer'
    },
    {
        id: 2,
        name: 'Sony Sim',
        username: 'sonysim064',
        profile: PROFILE2,
        description: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
        tag: 'POS&ManagementSystem',
        position: 'Web Designer'
    },
    {
        id: 3,
        name: 'Chenter Phai',
        username: 'chenterphai4',
        profile: PROFILE1,
        description: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
        tag: '#FrontendWithZoey',
        position: 'Mobile Developer'
    },
    {
        id: 4,
        name: 'Chenter Phai',
        username: 'chenterphai4',
        profile: PROFILE1,
        description: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
        tag: '#FrontendWithZoey',
        position: 'Back-end Developer'
    },
]

export const PROJECTS = [
    {
        id: 1,
        title: 'NYT Technology Website',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae quod animi odit eaque voluptatem id iste assumenda, quia eum.',
        thumbnail: thumbnail,
        tag: 'Web Development',
        logo: 'https://nyt-website-v1.vercel.app/_next/image?url=https%3A%2F%2Fgcxsvuwjngrpqmekwgzc.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ffiles%2Fimages%2FNYT_Logo_v1_transparent.png&w=640&q=75'
    },
    {
        id: 2,
        title: 'NYT Technology Website',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae quod animi odit eaque voluptatem id iste assumenda, quia eum.',
        thumbnail: thumbnail,
        tag: 'Mobile Application',
        logo: 'https://nyt-website-v1.vercel.app/_next/image?url=https%3A%2F%2Fgcxsvuwjngrpqmekwgzc.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ffiles%2Fimages%2FNYT_Logo_v1_transparent.png&w=640&q=75'
    },
    {
        id: 3,
        title: 'NYT Technology Website',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae quod animi odit eaque voluptatem id iste assumenda, quia eum.',
        thumbnail: thumbnail,
        tag: 'Web Design',
        logo: 'https://nyt-website-v1.vercel.app/_next/image?url=https%3A%2F%2Fgcxsvuwjngrpqmekwgzc.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ffiles%2Fimages%2FNYT_Logo_v1_transparent.png&w=640&q=75'
    },
    {
        id: 4,
        title: 'NYT Technology Website',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae quod animi odit eaque voluptatem id iste assumenda, quia eum.',
        thumbnail: thumbnail,
        tag: 'Web Development',
        logo: 'https://nyt-website-v1.vercel.app/_next/image?url=https%3A%2F%2Fgcxsvuwjngrpqmekwgzc.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Ffiles%2Fimages%2FNYT_Logo_v1_transparent.png&w=640&q=75'
    },

]

export const MEMBERS_DATA = [
    {
        id: 1,
        title: 'TBOX-LEARNING',
        subtitle: 'Education',
        logo: SiNintendogamecube,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur magni voluptatem exercitationem'
    },
    {
        id: 2,
        title: 'CBOX-AID',
        subtitle: 'Products',
        logo: BiCubeAlt,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur magni voluptatem exercitationem'
    }
]