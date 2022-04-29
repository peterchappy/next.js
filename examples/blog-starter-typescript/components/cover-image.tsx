import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  premium?: boolean
}

const CoverImage = ({ title, src, slug, premium = false }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )


  return (
    <div className="sm:mx-0 relative">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
      {premium ? 
        <div className='absolute right-2 top-2 rounded-full bg-accent-7 text-white px-2'>
          $ Premium
        </div> 
        : null
      }
    </div>
  )
}

export default CoverImage
