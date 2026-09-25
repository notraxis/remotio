type MediaPlaceholderProps = {
  label: string
  caption?: string
  variant?: 'movement' | 'team' | 'practice'
}

export function MediaPlaceholder({
  label,
  caption,
  variant = 'movement',
}: MediaPlaceholderProps) {
  return (
    <figure className={`media-placeholder media-placeholder--${variant}`}>
      <div className="media-placeholder__visual" role="img" aria-label={label}>
        <span className="media-placeholder__orbit" aria-hidden="true" />
        <span className="media-placeholder__line" aria-hidden="true" />
        <span className="media-placeholder__label">{label}</span>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
