// 'use client';
// /**
//  * deprecated되었습니다. 곧 삭제됩니다.
//  */
// import dynamic from 'next/dynamic';
// import React from 'react';
// import 'react-quill/dist/quill.snow.css';
// import { ReactQuillProps } from 'react-quill';
//
// const Editor = dynamic(() => import('react-quill'), { ssr: false, loading: () => <></> });
//
// const ReactQuillEditor = (props: ReactQuillProps) => {
//   const modules = React.useMemo(
//     () => ({
//       toolbar: {
//         container: [
//           [{ header: '1' }, { header: '2' }],
//           ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           ['link', 'image'],
//         ],
//         handlers: { image: null },
//       },
//     }),
//     [],
//   );
//   const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'link', 'image'];
//
//   return <Editor {...props} theme="snow" modules={props.modules || modules} formats={props.formats || formats} />;
// };
// // export const ReactQuillEditor = React.forwardRef<ReactQuill, ReactQuillProps>((props, ref) => (
// //     <Editor ref={ref as React.MutableRefObject<ReactQuill>} />
// // ));
