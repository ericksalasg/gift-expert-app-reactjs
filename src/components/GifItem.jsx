

export const GifItem = ({url, title, id}) => {


  return (
    <figure key={id} className="card">
        <img src={url} alt={title} />
        <figcaption>
            <p>{title}</p>
        </figcaption>
    </figure>
  )
}

