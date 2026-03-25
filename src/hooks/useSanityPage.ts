import { useQuery } from '@tanstack/react-query';
import { sanityClient, SERVICE_PAGE_QUERY, HUB_PAGE_QUERY, LICENSE_PAGE_QUERY } from '@/lib/sanity';

function isSanityConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SANITY_PROJECT_ID);
}

export function useServicePage<T>(slug: string, fallback: T) {
  return useQuery<T>({
    queryKey: ['sanity', 'servicePage', slug],
    queryFn: () => sanityClient.fetch(SERVICE_PAGE_QUERY, { slug }),
    enabled: isSanityConfigured(),
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    select: (data) => data ?? fallback,
  });
}

export function useHubPage<T>(slug: string, fallback: T) {
  return useQuery<T>({
    queryKey: ['sanity', 'hubPage', slug],
    queryFn: () => sanityClient.fetch(HUB_PAGE_QUERY, { slug }),
    enabled: isSanityConfigured(),
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    select: (data) => data ?? fallback,
  });
}

export function useLicensePage<T>(slug: string, fallback: T) {
  return useQuery<T>({
    queryKey: ['sanity', 'licenseDetailPage', slug],
    queryFn: () => sanityClient.fetch(LICENSE_PAGE_QUERY, { slug }),
    enabled: isSanityConfigured(),
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    select: (data) => data ?? fallback,
  });
}
