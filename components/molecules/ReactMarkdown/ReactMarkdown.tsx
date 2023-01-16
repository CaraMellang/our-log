import ReactMarkdown from 'react-markdown';
import React from 'react';
import './ReactMarkdown.css';

const ex = `
# 헹ㄷ

*굵게*

> 인용문
\`\`\`
dbrka
\`\`\`
> dsddsd
아 진짜
`;
export function MarkdownEditor() {
  const [text, setText] = React.useState(
    '\n###### 헹ㄷ\n\n*굵게*\n\n> 인용문\n```\ndbrka\n```\n> dsddsd\n아 진짜 \n![dd](https://velog.velcdn.com/images/dlwpgh23/post/5a0705c4-63fe-4b7e-98d1-9d599bee2030/image.gif)',
  );

  return (
    <div className={'content'} style={{ whiteSpace: 'pre-wrap' }}>
      <textarea onChange={(e) => setText(e.target.value)} />
      <ReactMarkdown
        children={text}
        // components={{
        //   code({ node, inline, className, children, ...props }) {
        //     const match = /language-(\w+)/.exec(className || '');
        //     return !inline && match ? (
        //       <h2>dkasdslkdasjdldkd</h2>
        //     ) : (
        //       <code className={className} {...props}>
        //         {children}
        //       </code>
        //     );
        //   },
        // }}
      />
    </div>
  );
}
