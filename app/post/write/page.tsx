'use client';
import { PostWrite } from '@layouts/PostWrite';
import { useEffect, useState } from 'react';
import { MarkdownEditor } from '@components/molecules/ReactMarkdown';

/**
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * useLayoutEffect 하이드레이트 불일치 문제 해결법.
 */

export default function PostWritePage() {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  // return <MarkdownEditor />;
  if (!showChild) return;
  return <PostWrite />;
}
