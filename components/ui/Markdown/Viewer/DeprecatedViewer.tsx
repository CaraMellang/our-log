import dynamic from 'next/dynamic';
import React from 'react';

/**
 * deprecated되었습니다. 곧 삭제됩니다.
 */
const DeprecatedViewer = dynamic(() => import('react-quill'), { ssr: false });

export const ReactQuillViewer = React.forwardRef(() => <DeprecatedViewer readOnly={true} theme={'bubble'} />);
