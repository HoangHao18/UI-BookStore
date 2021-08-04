import './style.scss'

export default function SectionTitle({
    title = "Our Products",
    subtitle = "Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
}){
    return(
        <div className="section-title-wrapper">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}