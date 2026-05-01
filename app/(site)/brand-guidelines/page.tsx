'use client';

import { useEffect } from 'react';

export default function BrandGuidelinesPage() {
  useEffect(() => {
    window.location.replace('/brand-guidelines.html');
  }, []);
  return null;
}
