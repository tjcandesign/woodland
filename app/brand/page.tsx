'use client';

import { useEffect } from 'react';

export default function BrandPage() {
  useEffect(() => {
    window.location.replace('/brand.html');
  }, []);
  return null;
}
