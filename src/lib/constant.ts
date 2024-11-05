import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
//import { Connection } from './types'

export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
  }))

  export const products = [
    {
      title: 'Moonbeam',
      link: 'https://www.bybitglobal.com/en/',
      thumbnail: '/p1.png',
    },
    {
      title: 'Cursor',
      link: 'https://metaex.uk',
      thumbnail: '/p2.png',
    },
    {
      title: 'Rogue',
      link: 'https://www.tradingview.com/',
      thumbnail: '/p3.png',
    },
  
    {
      title: 'Editorially',
      link: 'https://www.binance.com/en',
      thumbnail: '/p4.png',
    },
    {
      title: 'Editrix AI',
      link: 'https://www.exness.com/',
      thumbnail: '/p5.png',
    },
    {
      title: 'Pixel Perfect',
      link: 'https://www.kucoin.com/',
      thumbnail: '/p6.png',
    },
  
    {
      title: 'Algochurn',
      link: 'https://telegram.org/',
      thumbnail: '/p1.png',
    },
    {
      title: 'Aceternity UI',
      link: 'https://metaex.uk',
      thumbnail: '/p2.png',
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://www.bybitglobal.com/en/trade/spot/loan',
      thumbnail: '/p3.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://www.bybitglobal.com/trade/usdt/BTCUSDT',
      thumbnail: '/p4.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'http://navdisenyo.com/',
      thumbnail: '/p5.png',
    },
  
    {
      title: 'Creme Digital',
      link: 'https://www.facebook.com/metaexbot',
      thumbnail: '/p6.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://www.youtube.com/@navdissenyo3977',
      thumbnail: '/p1.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://vercel.com/',
      thumbnail: '/p2.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://nextjs.org/',
      thumbnail: '/p3.png',
    },
  ]

  export const menuOptions = [
    { name: 'Dashboard', Component: Home, href: '/dashboard' },
    //{ name: 'Workflows', Component: Workflows, href: '/workflows' },
    { name: 'Settings', Component: Settings, href: '/settings' },
    //{ name: 'Connections', Component: Category, href: '/connections' },
    { name: 'Billing', Component: Payment, href: '/billing' },
    //{ name: 'Templates', Component: Templates, href: '/templates' },
    { name: 'Referals', Component: Logs, href: '/logs' },
  ]
  
  export const EditorCanvasDefaultCardTypes = {
    Email: { description: 'Send and email to a user', type: 'Action' },
    Condition: {
      description: 'Boolean operator that creates different conditions lanes.',
      type: 'Action',
    },
    AI: {
      description:
        'Use the power of AI to summarize, respond, create and much more.',
      type: 'Action',
    },
    'Google Calendar': {
      description: 'Create a calendar invite.',
      type: 'Action',
    },
    Trigger: {
      description: 'An event that starts the workflow.',
      type: 'Trigger',
    },
    Action: {
      description: 'An event that happens after the workflow begins',
      type: 'Action',
    },
    Wait: {
      description: 'Delay the next action step by using the wait timer.',
      type: 'Action',
    },
  }