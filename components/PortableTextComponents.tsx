import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { urlFor } from '@/sanity/lib/image'

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null

      return (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          width={800}
          height={450}
          className="my-8 rounded-lg"
        />
      )
    },

    code: ({ value }: any) => (
      <SyntaxHighlighter
        language={value.language || 'javascript'}
        style={oneDark}
        className="my-6 rounded-md"
      >
        {value.code}
      </SyntaxHighlighter>
    ),
  },

  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-8 mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
}
