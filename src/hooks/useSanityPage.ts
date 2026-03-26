import { useQuery } from '@tanstack/react-query';
import { sanityClient, SERVICE_PAGE_QUERY, HUB_PAGE_QUERY, LICENSE_PAGE_QUERY } from '@/lib/sanity';

function isSanityConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SANITY_PROJECT_ID);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useServicePage<T = any>(slug: string, fallback: T) {
  return useQuery({
    queryKey: ['sanity', 'servicePage', slug],
    queryFn: () => sanityClient.fetch(SERVICE_PAGE_QUERY, { slug }) as Promise<T>,
    enabled: isSanityConfigured(),
    placeholderData: fallback as any,
    staleTime: 1000 * 60 * 5,
    select: (data: any) => (data ?? fallback) as T,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useHubPage<T = any>(slug: string, fallback: T) {
  return useQuery({
    queryKey: ['sanity', 'hubPage', slug],
    queryFn: () => sanityClient.fetch(HUB_PAGE_QUERY, { slug }) as Promise<T>,
    enabled: isSanityConfigured(),
    placeholderData: fallback as any,
    staleTime: 1000 * 60 * 5,
    select: (data: any) => (data ?? fallback) as T,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLicensePage<T = any>(slug: string, fallback: T) {
  return useQuery({
    queryKey: ['sanity', 'licenseDetailPage', slug],
    queryFn: () => sanityClient.fetch(LICENSE_PAGE_QUERY, { slug }) as Promise<T>,
    enabled: isSanityConfigured(),
    placeholderData: fallback as any,
    staleTime: 1000 * 60 * 5,
    select: (data: any) => (data ?? fallback) as T,
  });
}
