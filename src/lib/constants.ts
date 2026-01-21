import type { z } from 'astro/zod';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://getcvfolio.com',
};
