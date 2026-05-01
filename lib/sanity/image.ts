import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0];

const builder = imageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
