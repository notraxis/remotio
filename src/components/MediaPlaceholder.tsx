type MediaPlaceholderProps = {
  label: string
  caption?: string
  variant?: 'movement' | 'team' | 'practice'
  src?: string
  alt?: string
}

export function MediaPlaceholder({
  label,
  caption,
  variant = 'movement',
  src,
  alt,
}: MediaPlaceholderProps) {
  return (
    <figure className={`media-placeholder media-placeholder--${variant}`}>
      <div
        className="media-placeholder__visual"
        role={src ? undefined : 'img'}
        aria-hidden={src ? true : undefined}
        aria-label={src ? undefined : label}
      >
        {src ? (
          <img src={src} alt={alt ?? label} loading="lazy" />
        ) : (
          <>
            <span className="media-placeholder__orbit" aria-hidden="true" />
            <span className="media-placeholder__line" aria-hidden="true" />
            <span className="media-placeholder__label">{label}</span>
          </>
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
