// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

//For Cloudflare workers
//import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    integrations: [
		starlight({
			title: 'Surgery Docs',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }
				},
				{
					label: 'Cases',
					autogenerate: { directory: 'cases' }
				},
				{
					label: 'Products',
					autogenerate: { directory: 'products' }
				},
			],
		}),
		mdx()
	],
//For Cloudflare workers
//    adapter: cloudflare()
});
