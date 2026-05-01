'use client';

import { useEffect } from 'react';

export default function ListingRefreshPage() {
  useEffect(() => {
    window.location.replace('/listing-refresh.html');
  }, []);
  return null;
}
