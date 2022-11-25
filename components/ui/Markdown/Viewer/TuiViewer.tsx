'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';

interface ViewerPropsWithHandlers extends ViewerProps {
  onChange?(value: string): void;
  forwardedRef?: React.ForwardedRef<Viewer>;
}

const ViewerWrapper = dynamic<ViewerPropsWithHandlers>(() => import('./TuiViewerWrapper'), { ssr: false });

export const TuiViewer = React.forwardRef<Viewer | undefined, ViewerPropsWithHandlers>((props, ref) => (
  <ViewerWrapper {...props} forwardedRef={ref as React.ForwardedRef<Viewer>} />
));
TuiViewer.displayName = 'TuiEditor';
